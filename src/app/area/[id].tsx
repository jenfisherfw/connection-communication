import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BackHeader, Card, IconBubble, ProgressBar, Row, Screen, SectionHeader } from '../../components/ui';
import { AREAS, AreaId, QUIZZES, ROLEPLAYS, SCENARIOS } from '../../data/content';
import { useAppState } from '../../state/AppState';
import { colors, fonts } from '../../theme';

export default function AreaScreen() {
  const { id } = useLocalSearchParams<{ id: AreaId }>();
  const area = AREAS.find((a) => a.id === id) ?? AREAS[0];
  const { progress } = useAppState();
  const pts = progress.areaXp[area.id] ?? 0;
  const quizzes = QUIZZES.filter((q) => q.area === area.id);
  const scenarios = SCENARIOS.filter((q) => q.area === area.id);
  const roleplays = ROLEPLAYS.filter((q) => q.area === area.id);
  const empty = !quizzes.length && !scenarios.length && !roleplays.length;
  const done = (k: string) => (progress.completed[k] ? 'Completed' : undefined);

  return (
    <Screen>
      <BackHeader title="" onBack={() => router.back()} />
      <View style={[s.hero, { backgroundColor: area.soft }]}>
        <IconBubble icon={area.icon as never} color={area.color} soft="#fff" size={64} />
        <Text style={s.title}>{area.title}</Text>
        <Text style={s.tag}>{area.tagline}</Text>
        <View style={{ width: '100%', marginTop: 16 }}>
          <ProgressBar pct={Math.min(1, pts / 300)} color={area.color} track="#fff" height={8} />
          <Text style={s.pts}>{pts} / 300 XP to mastery</Text>
        </View>
      </View>

      {quizzes.length ? (
        <>
          <SectionHeader title="Quizzes" />
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {quizzes.map((q, i) => (
              <Row key={q.id} icon="check-square" iconColor={area.color} iconSoft={area.soft} title={q.title} subtitle={done(`quiz:${q.id}`) ?? `${q.minutes} min · +${q.xp} XP`} onPress={() => router.push(`/quiz/${q.id}`)} last={i === quizzes.length - 1} />
            ))}
          </Card>
        </>
      ) : null}
      {scenarios.length ? (
        <>
          <SectionHeader title="Scenarios" />
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {scenarios.map((q, i) => (
              <Row key={q.id} icon="git-branch" iconColor={area.color} iconSoft={area.soft} title={q.title} subtitle={done(`scenario:${q.id}`) ?? `+${q.xp} XP`} onPress={() => router.push(`/scenario/${q.id}`)} last={i === scenarios.length - 1} />
            ))}
          </Card>
        </>
      ) : null}
      {roleplays.length ? (
        <>
          <SectionHeader title="AI role plays" />
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {roleplays.map((q, i) => (
              <Row key={q.id} icon="mic" iconColor={area.color} iconSoft={area.soft} title={q.title} subtitle={done(`roleplay:${q.id}`) ?? `${q.difficulty} · +${q.xp} XP`} onPress={() => router.push(`/roleplay/${q.id}`)} last={i === roleplays.length - 1} />
            ))}
          </Card>
        </>
      ) : null}
      {empty ? <Text style={s.empty}>New content for this skill is on the way. Ask Coach Ari anything in the meantime.</Text> : null}
      <SectionHeader title="Need help now?" />
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <Row icon="message-circle" iconColor={colors.primary} iconSoft={colors.primarySoft} title={`Ask Ari about ${area.title.toLowerCase()}`} onPress={() => router.push('/coach')} last />
      </Card>
    </Screen>
  );
}

const s = StyleSheet.create({
  hero: { borderRadius: 28, padding: 24, alignItems: 'center', marginTop: 4 },
  title: { fontFamily: fonts.display, fontSize: 30, color: colors.ink, marginTop: 14 },
  tag: { fontFamily: fonts.body, fontSize: 15, color: colors.body, marginTop: 4 },
  pts: { fontFamily: fonts.medium, fontSize: 12, color: colors.body, marginTop: 8, textAlign: 'center' },
  empty: { fontFamily: fonts.body, fontSize: 14, color: colors.muted, marginTop: 24, textAlign: 'center', lineHeight: 20 },
});
