import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ProgressBar, Screen, SectionHeader, Title } from '../../components/ui';
import { useContent } from '../../data/localized';
import { useT } from '../../i18n';
import { levelFor, todayKey, useAppState } from '../../state/AppState';
import { colors, gradients, fonts, radius } from '../../theme';

/** Monday first, one letter each, in the leader's language. */
const DAYS: Record<string, string[]> = {
  en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  es: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
  fr: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
};

export default function ProgressScreen() {
  const { progress } = useAppState();
  const { t, lang, locale } = useT();
  const { AREAS, BADGES, LEADERBOARD, levelTitle } = useContent();
  const level = levelFor(progress.xp);
  const maxArea = Math.max(100, ...AREAS.map((a) => progress.areaXp[a.id] ?? 0));

  // Which days this week had activity (based on streak ending at lastActive)
  const today = new Date();
  const todayIdx = (today.getDay() + 6) % 7;
  const activeDays = new Set<number>();
  if (progress.lastActive) {
    const last = new Date(progress.lastActive + 'T12:00:00');
    for (let i = 0; i < progress.streak; i++) {
      const d = new Date(last.getTime() - i * 86400000);
      const diff = Math.round((new Date(todayKey() + 'T12:00:00').getTime() - d.getTime()) / 86400000);
      if (diff <= todayIdx) activeDays.add(todayIdx - diff);
    }
  }

  const board = LEADERBOARD.map((r) => (r.xp === -1 ? { ...r, xp: progress.xp, me: true } : { ...r, me: false })).sort((a, b) => b.xp - a.xp);

  return (
    <Screen>
      <Title style={{ marginTop: 12 }}>{t('Progress')}</Title>

      <LinearGradient colors={gradients.brand} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={s.level}>
        <View style={s.levelRow}>
          <View style={s.levelBadge}>
            <Text style={s.levelNum}>{level.level}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.levelEyebrow}>{t('Level {n}', { n: level.level }).toUpperCase()}</Text>
            <Text style={s.levelTitle}>{levelTitle(level.level)}</Text>
          </View>
          <Text style={s.xpTotal}>{progress.xp.toLocaleString(locale)} XP</Text>
        </View>
        <View style={{ marginTop: 18 }}>
          <ProgressBar pct={level.pct} color={colors.cyan} track="rgba(255,255,255,0.22)" height={10} />
          <Text style={s.toNext}>{level.next ? t('{n} XP to {title}', { n: level.toNext, title: levelTitle(level.next.level) }) : t('Max level reached. Legendary.')}</Text>
        </View>
      </LinearGradient>

      <View style={s.stats}>
        {[
          { n: `${progress.streak}`, l: t('Day streak'), e: '🔥' },
          { n: `${progress.bestStreak}`, l: t('Best streak'), e: '🏆' },
          { n: `${Object.keys(progress.completed).length}`, l: t('Activities'), e: '✅' },
        ].map((x) => (
          <Card key={x.l} style={s.stat}>
            <Text style={{ fontSize: 20 }}>{x.e}</Text>
            <Text style={s.statNum}>{x.n}</Text>
            <Text style={s.statLabel}>{x.l}</Text>
          </Card>
        ))}
      </View>

      <Card style={{ marginTop: 14 }}>
        <View style={s.weekHead}>
          <Text style={s.cardTitle}>{t('Weekly goal')}</Text>
          <Text style={s.weekCount}>
            {t('{done}/{goal} activities', { done: Math.min(progress.weekly.count, progress.weekly.goal), goal: progress.weekly.goal })}
          </Text>
        </View>
        <View style={s.days}>
          {(DAYS[lang] ?? DAYS.en).map((d, i) => {
            const on = activeDays.has(i);
            const isToday = i === todayIdx;
            return (
              <View key={i} style={{ alignItems: 'center', gap: 6 }}>
                <View style={[s.day, on && s.dayOn, isToday && !on && s.dayToday]}>{on ? <Feather name="check" size={16} color="#fff" /> : null}</View>
                <Text style={[s.dayLabel, isToday && { color: colors.primary, fontFamily: fonts.bold }]}>{d}</Text>
              </View>
            );
          })}
        </View>
      </Card>

      <SectionHeader title={t('Skill mastery')} />
      <Card>
        {AREAS.map((a, i) => {
          const pts = progress.areaXp[a.id] ?? 0;
          return (
            <View key={a.id} style={[s.skill, i > 0 && { marginTop: 16 }]}>
              <View style={s.skillHead}>
                <View style={[s.skillDot, { backgroundColor: a.color }]} />
                <Text style={s.skillName}>{a.title}</Text>
                <Text style={s.skillPts}>{pts} XP</Text>
              </View>
              <ProgressBar pct={pts / maxArea} color={a.color} track={a.soft} height={8} />
            </View>
          );
        })}
      </Card>

      <SectionHeader title={t('Badges · {n} of {total}', { n: progress.badges.length, total: BADGES.length })} />
      <View style={s.badges}>
        {BADGES.map((b) => {
          const got = progress.badges.includes(b.id);
          return (
            <View key={b.id} style={s.badgeCell}>
              <View style={[s.badge, { backgroundColor: got ? b.color : colors.line }]}>
                <Feather name={(got ? b.icon : 'lock') as never} size={24} color={got ? '#fff' : colors.faint} />
              </View>
              <Text style={[s.badgeTitle, !got && { color: colors.faint }]} numberOfLines={1}>
                {b.title}
              </Text>
            </View>
          );
        })}
      </View>

      <SectionHeader title={t('Team leaderboard · this month')} />
      <Card style={{ paddingVertical: 6 }}>
        {board.map((r, i) => (
          <View key={r.name} style={[s.lb, r.me && s.lbMe, i < board.length - 1 && !r.me && s.lbLine]}>
            <Text style={[s.lbRank, i === 0 && { color: colors.amber }]}>{i + 1}</Text>
            <View style={[s.lbAvatar, { backgroundColor: r.me ? colors.primary : colors.primarySoft }]}>
              <Text style={[s.lbInitial, { color: r.me ? '#fff' : colors.primary }]}>{r.me ? progress.name[0] : r.name[0]}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.lbName}>{r.me ? t('{name} (you)', { name: progress.name }) : r.name}</Text>
              <Text style={s.lbTeam}>{r.team}</Text>
            </View>
            <Text style={s.lbXp}>{r.xp.toLocaleString(locale)} XP</Text>
          </View>
        ))}
      </Card>
      <Text style={s.footnote}>{t('Leaderboards are opt in and only show XP, never what you wrote or practiced.')}</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  level: { borderRadius: radius.xl, padding: 22, marginTop: 18 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  levelBadge: { width: 56, height: 56, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'rgba(255,255,255,0.35)' },
  levelNum: { fontFamily: fonts.displayBold, fontSize: 26, color: '#fff' },
  levelEyebrow: { fontFamily: fonts.bold, fontSize: 11, letterSpacing: 1.5, color: '#8FE3E8' },
  levelTitle: { fontFamily: fonts.display, fontSize: 22, color: '#fff', marginTop: 2 },
  xpTotal: { fontFamily: fonts.bold, fontSize: 15, color: '#fff' },
  toNext: { fontFamily: fonts.medium, fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 8 },
  stats: { flexDirection: 'row', gap: 10, marginTop: 14 },
  stat: { flex: 1, alignItems: 'center', paddingVertical: 16, paddingHorizontal: 8 },
  statNum: { fontFamily: fonts.bold, fontSize: 24, color: colors.ink, marginTop: 6 },
  statLabel: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted, marginTop: 2 },
  cardTitle: { fontFamily: fonts.semibold, fontSize: 17, color: colors.ink },
  weekHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  weekCount: { fontFamily: fonts.semibold, fontSize: 13, color: colors.primary },
  days: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  day: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
  dayOn: { backgroundColor: colors.amber },
  dayToday: { borderWidth: 2, borderColor: colors.primary, backgroundColor: '#fff' },
  dayLabel: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted },
  skill: {},
  skillHead: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  skillDot: { width: 8, height: 8, borderRadius: 4 },
  skillName: { flex: 1, fontFamily: fonts.medium, fontSize: 15, color: colors.ink },
  skillPts: { fontFamily: fonts.semibold, fontSize: 13, color: colors.muted },
  badges: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 18 },
  badgeCell: { width: '25%', alignItems: 'center' },
  badge: { width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
  badgeTitle: { fontFamily: fonts.medium, fontSize: 11, color: colors.body, marginTop: 6, paddingHorizontal: 2 },
  lb: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, paddingHorizontal: 6 },
  lbLine: { borderBottomWidth: 1, borderBottomColor: colors.line },
  lbMe: { backgroundColor: colors.primarySoft, borderRadius: radius.md, marginVertical: 2 },
  lbRank: { width: 18, fontFamily: fonts.bold, fontSize: 15, color: colors.muted, textAlign: 'center' },
  lbAvatar: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  lbInitial: { fontFamily: fonts.bold, fontSize: 15 },
  lbName: { fontFamily: fonts.semibold, fontSize: 15, color: colors.ink },
  lbTeam: { fontFamily: fonts.body, fontSize: 12, color: colors.muted },
  lbXp: { fontFamily: fonts.bold, fontSize: 14, color: colors.primary },
  footnote: { fontFamily: fonts.body, fontSize: 12, color: colors.muted, textAlign: 'center', marginTop: 12, lineHeight: 17 },
});
