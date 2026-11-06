import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackHeader, Card, Chip, Eyebrow, ProgressBar, Screen } from '../components/ui';
import { useContent } from '../data/localized';
import { LESSON_BADGES } from '../data/lessons/badges';
import { useT } from '../i18n';
import { journeyWeek, useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

/** Every weekly micro lesson, with progress and the badges they earn. */
export default function Lessons() {
  const { t } = useT();
  const { progress } = useAppState();
  const { LESSONS, BADGES } = useContent();
  const week = journeyWeek(progress);
  const isDone = (id: string) => !!progress.completed[`lesson:${id}`];
  const doneCount = LESSONS.filter((l) => isDone(l.id)).length;
  const badges = BADGES.filter((b) => LESSON_BADGES.some((lb) => lb.id === b.id));

  return (
    <Screen>
      <BackHeader title={t('Micro lessons')} onBack={() => (router.canGoBack() ? router.back() : router.replace('/'))} />
      <Text style={s.lead}>{t('One short lesson each week on communication and leading change. About 3 to 5 minutes each.')}</Text>

      <Card style={{ marginTop: 16 }}>
        <View style={s.progressHead}>
          <Eyebrow>{t('Your progress')}</Eyebrow>
          <Text style={s.progressCount}>
            {t('{n} of {total} complete', {
              n: doneCount,
              total: LESSONS.length,
            })}
          </Text>
        </View>
        <ProgressBar pct={LESSONS.length ? doneCount / LESSONS.length : 0} color={colors.teal} height={8} />
        <View style={s.badges}>
          {badges.map((b) => {
            const got = progress.badges.includes(b.id);
            return (
              <View key={b.id} style={s.badgeCell}>
                <View style={[s.badge, { backgroundColor: got ? b.color : colors.line }]}>
                  <Feather name={(got ? b.icon : 'lock') as never} size={18} color={got ? '#fff' : colors.faint} />
                </View>
                <Text style={[s.badgeTitle, !got && { color: colors.faint }]} numberOfLines={2}>
                  {b.title}
                </Text>
              </View>
            );
          })}
        </View>
      </Card>

      <View style={{ gap: 10, marginTop: 18 }}>
        {LESSONS.map((l) => {
          const done = isDone(l.id);
          const open = done || l.week <= week;
          const current = l.week === week;
          const started = !done && (progress.lessonPos[l.id] ?? 0) > 0;
          return (
            <Pressable key={l.id} disabled={!open} onPress={() => router.push(`/lesson/${l.id}`)} style={[s.row, current && s.rowCurrent, !open && { opacity: 0.55 }]}>
              <View style={[s.num, done && { backgroundColor: colors.success }, current && !done && { backgroundColor: colors.teal }]}>
                {done ? <Feather name="check" size={16} color="#fff" /> : <Text style={[s.numText, current && { color: '#fff' }]}>{l.week}</Text>}
              </View>
              <View style={{ flex: 1, gap: 4 }}>
                <Text style={s.title}>{l.title}</Text>
                <View style={s.meta}>
                  <Chip
                    label={l.focus === 'change' ? t('Leading change') : t('Communication')}
                    color={l.focus === 'change' ? colors.blue : colors.teal}
                    soft={l.focus === 'change' ? colors.blueSoft : colors.tealSoft}
                  />
                  <Text style={s.metaText}>{t('{n} min', { n: l.minutes })}</Text>
                </View>
              </View>
              {open ? (
                <Text style={[s.status, done && { color: colors.success }]}>{done ? t('Done') : started ? t('Continue') : current ? t('This week') : t('Start')}</Text>
              ) : (
                <View style={{ alignItems: 'flex-end' }}>
                  <Feather name="lock" size={16} color={colors.faint} />
                  <Text style={s.lockText}>{t('Week {week}', { week: l.week })}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  lead: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  progressHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressCount: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    color: colors.teal,
  },
  badges: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 16, rowGap: 12 },
  badgeCell: { width: '33.3%', alignItems: 'center', gap: 6 },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTitle: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.ink,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: radius.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.line,
  },
  rowCurrent: { borderColor: colors.teal, borderWidth: 2 },
  num: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 15,
    lineHeight: 20,
    color: colors.ink,
  },
  meta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  metaText: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted },
  status: { fontFamily: fonts.bold, fontSize: 13, color: colors.primary },
  lockText: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.faint,
    marginTop: 2,
  },
});
