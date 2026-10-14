# Add your own tools to the Toolkit

The Toolkit shows the 15 starter tools plus any tools you add. Your tools live in one file, `src/data/toolkit/myTools.ts`, and you can edit it right on the GitHub website. No coding tools needed.

## The fastest way
Send the tool's text to Claude and ask to have it added. It will be formatted, translated into Spanish and French, and checked for you.

## Add a tool yourself on GitHub (about 5 minutes)

1. Go to your repository on github.com and make sure the branch menu (top left) shows the branch you publish from.
2. Click into `src`, then `data`, then `toolkit`, then open `myTools.ts`.
3. Click the pencil icon (Edit this file) at the top right of the file.
4. Find this line near the bottom:
   ```
     // Paste your tools here.
   ```
5. Put your cursor on a new line just below it and paste the block below. Then change the words in it.
   ```ts
     {
       id: "team-kickoff-checklist",
       category: "team",
       icon: "flag",
       minutes: 15,
       title: "Team Kickoff Checklist",
       summary: "Start a new project with clear goals, roles, and ways of working.",
       sections: [
         { heading: "When to use it", body: "At the start of any project with three or more people." },
         { heading: "How to use it", bullets: ["Share the goal in one sentence", "Agree who decides what", "Set the first check in date"] },
         {
           heading: "Checklist",
           template: `☐ Goal in one sentence: [goal]
   ☐ Who decides: [name]
   ☐ First check in: [date]`,
         },
       ],
     },
   ```
6. Click **Commit changes...** (green button), type a short note like `Add team kickoff checklist`, and click **Commit changes** again.
7. Publish to phones the same way as always: in GitHub Desktop click **Fetch origin** and **Pull origin**, then run
   ```
   npx eas-cli@latest update --branch preview --message "New toolkit tool"
   ```

## The rules that keep the app working
* **id**: a unique name for the tool, lowercase words joined with hyphens, no spaces. Every tool needs a different id.
* **category**: one of `"time"`, `"meetings"`, `"conversations"`, `"change"`, `"team"`. This decides which filter it appears under.
* **icon**: any icon name from https://feathericons.com (for example `"clock"`, `"calendar"`, `"users"`, `"flag"`, `"target"`).
* **minutes**: a number, with no quote marks.
* **Text**: keep text inside "double quotes". Apostrophes like `don't` are fine inside double quotes.
* **Templates** (the part with a Share or copy button): put the text between backticks `` ` `` like the example, and press Enter for new lines.
* **sections**: as many as you like. Each one can have a `body` (a paragraph), `bullets` (a list), a `template`, or any mix.
* Keep every `{`, `}`, `[`, `]` and comma exactly where the example has them. Each tool ends with `},`.
* Spanish and French are optional. Tools without them show in English for everyone.

## If something goes wrong
If the publish step shows red error text after you edit the file, the most common cause is a missing comma or quote mark. Open `myTools.ts` again and compare your block with the example, or take a photo of the error and send it over.
