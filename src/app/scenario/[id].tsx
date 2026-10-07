import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Reward } from '../../components/Reward';
import { BackHeader, Button, Card, Chip, Eyebrow, Screen } from '../../components/ui';
import { ROLEPLAYS, SCENARIOS, areaById } from '../../data/content';
import { AwardResult, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

const STARS = ['', 'Risky', 'Solid', 'Strong'];

export default function ScenarioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const sc = SCENARIOS.find((x) => x.id === id) ?? SCENARIOS[0];
  const area = areaById(sc.area);
  const { award } = useAppState();
  const [picked, setPicked] = useState<number | null>(null);
  const [result, setResult] = useState<AwardResult | null>(null);
  const best = Math.max(...sc.choices.map((c) => c.score));
  const followUp = ROLEPLAYS.find((r) => r.area === sc.area);

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    const score = sc.choices[idx].score / best;
    setResult(award({ key: `scenario:${sc.id}`, kind: 'scenario', xp: Math.round(sc.xp * (0.4 + 0.6 * score)), area: sc.area, score }));
  };

  return (
    <Screen>
      <BackHeader title="Scenario" onBack={() => router.back()} />
      <Chip label={area.title} color={area.color} soft={area.soft} />
      <Text style={s.title}>{sc.title}</Text>
      <Text style={s.setup}>{sc.setup}</Text>

      <View style={s.bubbleWrap}>
        <View style={[s.avatar, { backgroundColor: area.soft }]}>
          <Text style={[s.avatarText, { color: area.color }]}>{sc.person[0]}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.person}>{sc.person}</Text>
          <View style={s.bubble}>
            <Text style={s.quote}>{sc.quote}</Text>
          </View>
        </View>
      </View>

      <Eyebrow style={{ marginTop: 26, marginBottom: 12 }}>What do you say?</Eyebrow>
      <View style={{ gap: 10 }}>
        {sc.choices.map((c, idx) => {
          const reveal = picked !== null;
          const isPicked = picked === idx;
          const tone = c.score === 3 ? colors.success : c.score === 2 ? colors.amber : colors.coral;
          const toneSoft = c.score === 3 ? colors.successSoft : c.score === 2 ? colors.amberSoft : colors.coralSoft;
          return (
            <Pressable key={idx} onPress={() => choose(idx)} style={[s.choice, reveal && { borderColor: isPicked ? tone : colors.line, backgroundColor: isPicked ? toneSoft : '#fff', opacity: isPicked || c.score === 3 ? 1 : 0.6 }]}>
              <Text style={s.choiceText}>{c.text}</Text>
              {reveal ? (
                <View style={s.verdict}>
                  <Text style={[s.verdictLabel, { color: tone }]}>
                    {'★'.repeat(c.score)}
                    {'☆'.repeat(3 - c.score)} {STARS[c.score]}
                  </Text>
                  {isPicked || c.score === 3 ? <Text style={s.verdictBody}>{c.feedback}</Text> : null}
                </View>
              ) : null}
            </Pressable>
          );
        })}
      </View>

      {result ? (
        <View style={{ marginTop: 22, gap: 12 }}>
          <Reward result={result} headline={sc.choices[picked!].score === 3 ? 'Great call!' : 'Good learning rep'} />
          {followUp ? (
            <Card style={s.next} onPress={() => router.replace(`/roleplay/${followUp.id}`)}>
              <Feather name="mic" size={22} color={colors.primary} />
              <View style={{ flex: 1 }}>
                <Text style={s.nextTitle}>Say it out loud</Text>
                <Text style={s.nextSub}>Try the "{followUp.title}" role play</Text>
              </View>
              <Feather name="chevron-right" size={20} color={colors.faint} />
            </Card>
          ) : null}
          <Button label="Done" variant="ghost" onPress={() => router.back()} />
        </View>
      ) : null}
    </Screen>
  );
}

const s = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 30, color: colors.ink, marginTop: 12 },
  setup: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24, color: colors.body, marginTop: 8 },
  bubbleWrap: { flexDirection: 'row', gap: 12, marginTop: 22 },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.display, fontSize: 20 },
  person: { fontFamily: fonts.semibold, fontSize: 13, color: colors.muted, marginBottom: 6 },
  bubble: { backgroundColor: '#fff', borderRadius: 20, borderTopLeftRadius: 6, padding: 16 },
  quote: { fontFamily: fonts.display, fontSize: 18, lineHeight: 26, color: colors.ink },
  choice: { backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 2, borderColor: colors.line, padding: 16 },
  choiceText: { fontFamily: fonts.medium, fontSize: 15, lineHeight: 22, color: colors.ink },
  verdict: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.06)' },
  verdictLabel: { fontFamily: fonts.bold, fontSize: 13 },
  verdictBody: { fontFamily: fonts.body, fontSize: 14, lineHeight: 20, color: colors.body, marginTop: 4 },
  next: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  nextTitle: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  nextSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2 },
});
