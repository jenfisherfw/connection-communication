import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Chip, Eyebrow, IconBubble, ProgressBar, Screen, SectionHeader, Title } from '../../components/ui';
import { AREAS, CONVERSATION_STARTERS, QUIZZES, ROLEPLAYS, SCENARIOS, areaById } from '../../data/content';
import { useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

const CATEGORIES = [
  { icon: 'message-circle', label: 'Ask\nCoach', color: colors.primary, soft: colors.primarySoft, go: '/coach' },
  { icon: 'check-square', label: 'Quizzes', color: colors.teal, soft: colors.tealSoft, go: `/quiz/${QUIZZES[0].id}` },
  { icon: 'git-branch', label: 'Scenarios', color: colors.coral, soft: colors.coralSoft, go: `/scenario/${SCENARIOS[0].id}` },
  { icon: 'mic', label: 'Role\nPlay', color: colors.violet, soft: colors.violetSoft, go: '/practice' },
  { icon: 'trending-up', label: 'Change\nBuilder', color: colors.blue, soft: colors.blueSoft, go: '/change-message' },
  { icon: 'feather', label: 'Reflect', color: colors.violet, soft: colors.violetSoft, go: '/reflect' },
];

export default function Explore() {
  const { progress } = useAppState();
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return [
      ...QUIZZES.map((x) => ({ key: `q${x.id}`, kind: 'Quiz', title: x.title, area: x.area, go: `/quiz/${x.id}` })),
      ...SCENARIOS.map((x) => ({ key: `s${x.id}`, kind: 'Scenario', title: x.title, area: x.area, go: `/scenario/${x.id}` })),
      ...ROLEPLAYS.map((x) => ({ key: `r${x.id}`, kind: 'Role play', title: x.title, area: x.area, go: `/roleplay/${x.id}` })),
    ].filter((r) => r.title.toLowerCase().includes(term) || areaById(r.area).title.toLowerCase().includes(term));
  }, [q]);

  const featured = QUIZZES[1];
  const fArea = areaById(featured.area);

  return (
    <Screen>
      <Title style={{ marginTop: 12 }}>Explore</Title>
      <Text style={s.sub}>Learn, practice, and level up how you lead</Text>

      <View style={s.search}>
        <Feather name="search" size={18} color={colors.muted} />
        <TextInput value={q} onChangeText={setQ} placeholder="Search feedback, conflict, 1:1s..." placeholderTextColor={colors.faint} style={s.searchInput} />
      </View>

      {results.length ? (
        <Card style={{ padding: 0, marginTop: 16 }}>
          {results.map((r) => (
            <Pressable key={r.key} onPress={() => router.push(r.go as never)} style={s.result}>
              <Chip label={r.kind} color={areaById(r.area).color} soft={areaById(r.area).soft} />
              <Text style={s.resultTitle}>{r.title}</Text>
              <Feather name="chevron-right" size={18} color={colors.faint} />
            </Pressable>
          ))}
        </Card>
      ) : null}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 14 }}>
        {CATEGORIES.map((c) => (
          <Pressable key={c.label} onPress={() => router.push(c.go as never)} style={{ alignItems: 'center', width: 72 }}>
            <View style={[s.catIcon, { backgroundColor: c.soft }]}>
              <Feather name={c.icon as never} size={26} color={c.color} />
            </View>
            <Text style={s.catLabel}>{c.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <SectionHeader title="Featured for you" />
      <Card style={{ padding: 0, overflow: 'hidden' }} onPress={() => router.push(`/quiz/${featured.id}`)}>
        <View style={[s.featureArt, { backgroundColor: fArea.soft }]}>
          <View style={[s.featureCircle, { backgroundColor: '#fff' }]}>
            <Feather name="git-merge" size={44} color={fArea.color} />
          </View>
          <View style={[s.floatChip, { top: 22, left: 26 }]}>
            <Text style={s.floatText}>“Let’s pause here.”</Text>
          </View>
          <View style={[s.floatChip, { bottom: 22, right: 22 }]}>
            <Text style={s.floatText}>“What do you need?”</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Chip label="Quiz" color={fArea.color} soft={fArea.soft} />
          <Text style={s.featureTitle}>{featured.title}</Text>
          <Text style={s.featureSub}>{featured.subtitle}</Text>
          <View style={s.featureMeta}>
            <View style={s.startBtn}>
              <Text style={s.startText}>Start</Text>
              <Feather name="arrow-right" size={16} color="#fff" />
            </View>
            <Feather name="clock" size={14} color={colors.muted} />
            <Text style={s.metaText}>{featured.minutes} min</Text>
            <Feather name="zap" size={14} color={colors.amber} />
            <Text style={s.metaText}>+{featured.xp} XP</Text>
          </View>
        </View>
      </Card>

      <SectionHeader title="Explore by skill" />
      {AREAS.map((a) => {
        const pts = progress.areaXp[a.id] ?? 0;
        return (
          <Card key={a.id} style={s.area} onPress={() => router.push(`/area/${a.id}`)}>
            <IconBubble icon={a.icon as never} color={a.color} soft={a.soft} size={52} />
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={s.areaTitle}>{a.title}</Text>
              <Text style={s.areaSub}>{a.tagline}</Text>
              <ProgressBar pct={Math.min(1, pts / 300)} color={a.color} height={5} />
            </View>
            <Feather name="chevron-right" size={20} color={colors.faint} />
          </Card>
        );
      })}

      <SectionHeader title="1:1 conversation starters" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
        {CONVERSATION_STARTERS.map((c) => (
          <View key={c.text} style={s.starter}>
            <Eyebrow color={colors.primary}>{c.tag}</Eyebrow>
            <Text style={s.starterText}>{c.text}</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

const s = StyleSheet.create({
  sub: { fontFamily: fonts.body, fontSize: 16, color: colors.muted, marginTop: 4 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#fff', borderRadius: radius.pill, paddingHorizontal: 18, height: 52, marginTop: 18, borderWidth: 1, borderColor: colors.line },
  searchInput: { flex: 1, fontFamily: fonts.body, fontSize: 16, color: colors.ink, outlineStyle: 'none' } as never,
  result: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14, borderBottomWidth: 1, borderBottomColor: colors.line },
  resultTitle: { flex: 1, fontFamily: fonts.medium, fontSize: 15, color: colors.ink },
  catIcon: { width: 64, height: 64, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  catLabel: { fontFamily: fonts.medium, fontSize: 12, color: colors.body, textAlign: 'center', marginTop: 8, lineHeight: 16 },
  featureArt: { height: 170, alignItems: 'center', justifyContent: 'center' },
  featureCircle: { width: 96, height: 96, borderRadius: 48, alignItems: 'center', justifyContent: 'center' },
  floatChip: { position: 'absolute', backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 14 },
  floatText: { fontFamily: fonts.medium, fontSize: 12, color: colors.body },
  featureTitle: { fontFamily: fonts.display, fontSize: 26, color: colors.ink, marginTop: 12 },
  featureSub: { fontFamily: fonts.body, fontSize: 15, color: colors.muted, marginTop: 4 },
  featureMeta: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 18 },
  startBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 11, borderRadius: radius.pill, marginRight: 10 },
  startText: { fontFamily: fonts.semibold, fontSize: 15, color: '#fff' },
  metaText: { fontFamily: fonts.medium, fontSize: 13, color: colors.muted, marginRight: 8 },
  area: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 },
  areaTitle: { fontFamily: fonts.semibold, fontSize: 17, color: colors.ink },
  areaSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: -3 },
  starter: { width: 240, backgroundColor: colors.primarySoft, borderRadius: radius.lg, padding: 18 },
  starterText: { fontFamily: fonts.display, fontSize: 18, lineHeight: 25, color: colors.ink, marginTop: 10 },
});
