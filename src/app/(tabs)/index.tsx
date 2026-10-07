import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Chip, Eyebrow, IconBubble, ProgressBar, Screen, Title } from '../../components/ui';
import { PULSE, areaById, dailyPicks } from '../../data/content';
import { ActivityKind, levelFor, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

export default function Home() {
  const { progress, logPulse } = useAppState();
  const [tipHidden, setTipHidden] = useState(false);
  const { scenario, tip } = dailyPicks();
  const level = levelFor(progress.xp);
  const done = progress.today.done;
  const todayPulse = progress.pulse.find((p) => p.date === progress.today.date)?.value;

  const plan: { kind: ActivityKind; title: string; sub: string; xp: number; go: () => void }[] = [
    { kind: 'scenario', title: 'Scenario of the Day', sub: 'Choose how you would respond', xp: 30, go: () => router.push(`/scenario/${scenario.id}`) },
    { kind: 'pulse', title: 'Energy Check In', sub: 'How are you showing up today?', xp: 10, go: () => {} },
    { kind: 'reflection', title: 'Leader Reflection', sub: 'Two minutes of honest thinking', xp: 25, go: () => router.push('/reflect') },
    { kind: 'roleplay', title: 'Practice Rep', sub: 'Rehearse a real conversation with AI', xp: 60, go: () => router.push('/practice') },
  ];
  const doneCount = plan.filter((p) => done.includes(p.kind)).length;
  const nextIdx = plan.findIndex((p) => !done.includes(p.kind));

  return (
    <Screen>
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Eyebrow>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</Eyebrow>
          <Title style={{ marginTop: 6 }}>
            {greeting()}, {progress.name}
          </Title>
        </View>
      </View>

      <View style={s.statusRow}>
        <View style={[s.statusPill, { backgroundColor: colors.amberSoft }]}>
          <Text style={s.statusEmoji}>🔥</Text>
          <Text style={[s.statusText, { color: '#B26B00' }]}>{progress.streak} days</Text>
        </View>
        <Pressable onPress={() => router.push('/progress')} style={[s.statusPill, { backgroundColor: colors.primarySoft, flex: 1 }]}>
          <Feather name="award" size={15} color={colors.primary} />
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={[s.statusText, { color: colors.primary }]} numberOfLines={1}>
              Lv {level.level} · {level.title}
            </Text>
            <ProgressBar pct={level.pct} height={4} track="#D9D6FA" />
          </View>
        </Pressable>
      </View>

      <LinearGradient colors={['#3B30B8', '#6D5DF6', '#9D7BF5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={s.hero}>
        <View style={s.heroTag}>
          <Text style={s.heroTagText}>SCENARIO OF THE DAY · {areaById(scenario.area).title.toUpperCase()}</Text>
        </View>
        <Text style={s.heroQuote}>{scenario.quote}</Text>
        <Text style={s.heroPerson}>{scenario.person}</Text>
        <Pressable style={s.heroBtn} onPress={() => router.push(`/scenario/${scenario.id}`)}>
          <Text style={s.heroBtnText}>How do you respond?</Text>
          <Feather name="chevron-right" size={20} color={colors.primary} />
        </Pressable>
      </LinearGradient>

      <Card style={{ marginTop: 18 }}>
        <View style={s.planHead}>
          <Eyebrow>Today's plan</Eyebrow>
          <Chip label={`${doneCount} of ${plan.length} done`} color={doneCount === plan.length ? colors.success : colors.primary} soft={doneCount === plan.length ? colors.successSoft : colors.primarySoft} />
        </View>
        {plan.map((p, i) => {
          const isDone = done.includes(p.kind);
          const isNext = i === nextIdx;
          return (
            <Pressable key={p.kind} onPress={p.go} style={s.planRow}>
              <View style={s.planRail}>
                <View style={[s.dot, isDone && s.dotDone, isNext && s.dotNext]}>{isDone ? <Feather name="check" size={14} color="#fff" /> : isNext ? <View style={s.dotInner} /> : null}</View>
                {i < plan.length - 1 ? <View style={s.rail} /> : null}
              </View>
              <View style={{ flex: 1, paddingBottom: 16 }}>
                <Text style={[s.planTitle, isDone && { color: colors.muted, textDecorationLine: 'line-through' }]}>{p.title}</Text>
                <Text style={s.planSub}>{p.sub}</Text>
              </View>
              <Text style={[s.planXp, isDone && { color: colors.faint }]}>+{p.xp} XP</Text>
            </Pressable>
          );
        })}
      </Card>

      <Card style={{ marginTop: 18 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <IconBubble icon="battery-charging" color={colors.teal} soft={colors.tealSoft} size={36} />
          <Text style={s.cardTitle}>How is your energy today?</Text>
        </View>
        <Text style={s.helper}>Leaders who name their state lead more intentionally. Only you see this.</Text>
        <View style={s.pulseRow}>
          {PULSE.map((p, i) => (
            <Pressable key={p.label} onPress={() => logPulse(i)} style={[s.pulseBtn, todayPulse === i && s.pulseOn]}>
              <Text style={{ fontSize: 26 }}>{p.emoji}</Text>
              <Text style={[s.pulseLabel, todayPulse === i && { color: colors.primary }]}>{p.label}</Text>
            </Pressable>
          ))}
        </View>
      </Card>

      <Card style={[s.coach, { marginTop: 18 }]} onPress={() => router.push('/coach')}>
        <LinearGradient colors={[colors.primary, '#7C6CF7']} style={s.coachIcon}>
          <Feather name="message-circle" size={22} color="#fff" />
        </LinearGradient>
        <View style={{ flex: 1 }}>
          <Text style={s.cardTitle}>Ask Coach Ari</Text>
          <Text style={s.helperTight}>Plan a hard conversation in 2 minutes</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.faint} />
      </Card>

      {!tipHidden ? (
        <View style={s.tip}>
          <View style={s.tipIcon}>
            <Feather name="zap" size={18} color={colors.coral} />
          </View>
          <View style={{ flex: 1 }}>
            <Eyebrow color={colors.coral}>Leader tip</Eyebrow>
            <Text style={s.tipText}>{tip}</Text>
          </View>
          <Pressable onPress={() => setTipHidden(true)} hitSlop={10}>
            <Feather name="x" size={18} color={colors.muted} />
          </Pressable>
        </View>
      ) : null}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 18, marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
        {[
          { icon: 'check-square', t: 'Quizzes', s: 'Test your instincts', c: colors.teal, soft: colors.tealSoft, go: '/explore' },
          { icon: 'git-branch', t: 'Scenarios', s: 'Pick the best move', c: colors.coral, soft: colors.coralSoft, go: `/scenario/${scenario.id}` },
          { icon: 'mic', t: 'Role Play', s: 'Rehearse with AI', c: colors.violet, soft: colors.violetSoft, go: '/practice' },
          { icon: 'feather', t: 'Reflect', s: 'Write today', c: colors.blue, soft: colors.blueSoft, go: '/reflect' },
        ].map((x) => (
          <Card key={x.t} style={s.tile} onPress={() => router.push(x.go as never)}>
            <IconBubble icon={x.icon as never} color={x.c} soft={x.soft} size={42} />
            <Text style={s.tileTitle}>{x.t}</Text>
            <Text style={s.tileSub}>{x.s}</Text>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'flex-end', marginTop: 12 },
  statusRow: { flexDirection: 'row', gap: 10, marginTop: 16, marginBottom: 18 },
  statusPill: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 14, paddingVertical: 10, borderRadius: radius.pill },
  statusEmoji: { fontSize: 15 },
  statusText: { fontFamily: fonts.semibold, fontSize: 13 },
  hero: { borderRadius: radius.xl, padding: 24, alignItems: 'center' },
  heroTag: { backgroundColor: 'rgba(255,255,255,0.16)', paddingHorizontal: 14, paddingVertical: 7, borderRadius: radius.pill },
  heroTagText: { fontFamily: fonts.bold, fontSize: 11, letterSpacing: 1.4, color: '#fff' },
  heroQuote: { fontFamily: fonts.display, fontSize: 23, lineHeight: 31, color: '#fff', textAlign: 'center', marginTop: 18 },
  heroPerson: { fontFamily: fonts.medium, fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 10 },
  heroBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#fff', paddingVertical: 14, paddingHorizontal: 26, borderRadius: radius.pill, marginTop: 20 },
  heroBtnText: { fontFamily: fonts.bold, fontSize: 16, color: colors.primary },
  planHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  planRow: { flexDirection: 'row', gap: 14 },
  planRail: { alignItems: 'center', width: 26 },
  dot: { width: 26, height: 26, borderRadius: 13, borderWidth: 2, borderColor: colors.line, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  dotDone: { backgroundColor: colors.success, borderColor: colors.success },
  dotNext: { borderColor: colors.primary },
  dotInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  rail: { width: 2, flex: 1, backgroundColor: colors.line, marginVertical: 2 },
  planTitle: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  planSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2 },
  planXp: { fontFamily: fonts.bold, fontSize: 12, color: colors.primary, marginTop: 3 },
  cardTitle: { fontFamily: fonts.semibold, fontSize: 17, color: colors.ink },
  helper: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 10, lineHeight: 19 },
  helperTight: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2 },
  pulseRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, gap: 6 },
  pulseBtn: { flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: radius.md, backgroundColor: colors.bg, borderWidth: 2, borderColor: 'transparent' },
  pulseOn: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  pulseLabel: { fontFamily: fonts.medium, fontSize: 10, color: colors.muted, marginTop: 4 },
  coach: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  coachIcon: { width: 48, height: 48, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  tip: { flexDirection: 'row', gap: 12, backgroundColor: colors.coralSoft, borderRadius: radius.lg, padding: 18, marginTop: 18, alignItems: 'flex-start' },
  tipIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  tipText: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 23, color: colors.ink, marginTop: 6 },
  tile: { width: 150, padding: 16 },
  tileTitle: { fontFamily: fonts.bold, fontSize: 16, color: colors.ink, marginTop: 14 },
  tileSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 3 },
});
