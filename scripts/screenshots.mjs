// Renders the web build of the app and captures phone sized screenshots.
// Usage: node scripts/screenshots.mjs <web-export-dir> <output-dir>
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH ?? 'playwright');

const [root, out] = process.argv.slice(2);
await mkdir(out, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.ttf': 'font/ttf', '.json': 'application/json', '.ico': 'image/x-icon' };
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(await readFile(join(root, 'index.html')));
  }
}).listen(4317);

const today = new Date().toISOString().slice(0, 10);
const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString();
const seed = {
  name: 'Jen',
  role: 'People & Culture Lead',
  xp: 620,
  streak: 4,
  bestStreak: 6,
  lastActive: today,
  completed: {
    'quiz:feedback-basics': { at: daysAgo(3), score: 1 },
    'quiz:listening-levels': { at: daysAgo(2), score: 0.5 },
    'scenario:peer-credit': { at: daysAgo(1), score: 1 },
    'roleplay:new-hire-checkin': { at: daysAgo(1), score: 0.84 },
    'reflection:x': { at: daysAgo(0) },
  },
  areaXp: { feedback: 180, conflict: 95, listening: 140, trust: 60, recognition: 25, change: 0 },
  badges: ['first-step', 'streak-3', 'quiz-ace', 'roleplay-1'],
  reflections: [
    { prompt: 'Who did quiet, excellent work this week that nobody noticed?', text: 'Dana rebuilt our onboarding checklist without being asked. I want to call it out in Friday standup and ask her to walk the team through it.', at: daysAgo(1) },
  ],
  pulse: [{ date: today, value: 3 }],
  today: { date: today, done: ['pulse', 'reflection'] },
  weekly: { weekStart: '2000-01-01', count: 4, goal: 5 },
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
await ctx.addInitScript((s) => {
  if (!sessionStorage.getItem('seeded')) {
    s.weekly.weekStart = (() => { const x = new Date(); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x.toISOString().slice(0, 10); })();
    localStorage.setItem('rapport.progress.v1', JSON.stringify(s));
    sessionStorage.setItem('seeded', '1');
  }
}, seed);
const page = await ctx.newPage();
const base = 'http://localhost:4317';

const settle = (ms = 900) => page.waitForTimeout(ms);
const shot = async (name) => { await settle(); await page.screenshot({ path: join(out, `${name}.png`) }); console.log('saved', name); };
const go = async (path) => { await page.goto(base + path, { waitUntil: 'networkidle' }); await settle(1200); };
const scrollBy = async (y) => { await page.mouse.move(195, 420); await page.mouse.wheel(0, y); await settle(700); };
const tap = async (text) => { await page.getByText(text, { exact: false }).first().click(); };
const type = async (placeholder, text) => { await page.getByPlaceholder(placeholder).fill(text); await page.keyboard.press('Enter'); };

await go('/');                     await shot('01-home');
await scrollBy(640);               await shot('02-home-plan');
await scrollBy(700);               await shot('03-home-coach-tip');
await go('/explore');              await shot('04-explore');
await scrollBy(560);               await shot('05-explore-skills');
await go('/practice');             await shot('06-practice');
await go('/progress');             await shot('07-progress');
await scrollBy(620);               await shot('08-progress-badges');
await scrollBy(700);               await shot('09-progress-leaderboard');
await go('/profile');              await shot('10-profile');

await go('/quiz/conflict-styles');
await tap('Pause the discussion');  await shot('11-quiz');

await go('/scenario/defensive-feedback'); await shot('12-scenario');
await tap("That's fair to raise");  await settle(); await shot('13-scenario-answered');

await go('/coach');                await shot('14-coach');
await tap('How do I give feedback to a defensive employee?');
await settle(1600);                await shot('15-coach-reply');

await go('/roleplay/missed-deadlines');
await type('Respond to Alex', 'Thanks for making time. I wanted to talk about the last few deadlines. The status report and the vendor plan both slipped this month.');
await settle(1400);
await type('Respond to Alex', 'That makes sense, and I appreciate you telling me. What has been taking up the most time?');
await settle(1400);                await shot('16-roleplay');
await type('Respond to Alex', "Let's look at priorities together tomorrow and plan a check in next Friday so you are not carrying Priya's work alone.");
await settle(1400);
await tap('End and get feedback');
await settle(1800);
await page.locator('text=Conversation score').first().scrollIntoViewIfNeeded();
await shot('17-roleplay-feedback');

await go('/reflect');
await page.getByPlaceholder('Write freely').fill('Last week Marcus pushed back on the new review process in our team meeting. I thanked him, but I could feel myself getting defensive. I want to follow up 1:1 and ask what he would change.');
await shot('18-reflect');
await go('/area/feedback');        await shot('19-skill-area');

await browser.close();
server.close();
