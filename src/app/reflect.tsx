import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Reward } from '../components/Reward';
import { BackHeader, Button, Card, Chip, Eyebrow, Screen } from '../components/ui';
import { areaById, dailyPicks } from '../data/content';
import { AwardResult, useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

export default function Reflect() {
  const { reflection } = dailyPicks();
  const area = areaById(reflection.area);
  const { progress, addReflection } = useAppState();
  const [text, setText] = useState('');
  const [result, setResult] = useState<AwardResult | null>(null);

  const save = () => setResult(addReflection(reflection.prompt, text.trim(), reflection.area));

  return (
    <Screen>
      <BackHeader title="Leader Reflection" onBack={() => router.back()} />
      <Chip label={area.title} color={area.color} soft={area.soft} />
      <Text style={s.prompt}>{reflection.prompt}</Text>

      {result ? (
        <View style={{ marginTop: 20, gap: 12 }}>
          <Reward result={result} headline="Reflection saved" />
          <Card>
            <Eyebrow>Your note</Eyebrow>
            <Text style={s.saved}>{text}</Text>
          </Card>
          <Button label="Done" variant="ghost" onPress={() => router.back()} />
        </View>
      ) : (
        <>
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            placeholder="Write freely. This stays private to you."
            placeholderTextColor={colors.faint}
            style={s.input}
            textAlignVertical="top"
          />
          <Text style={s.count}>{text.trim().split(/\s+/).filter(Boolean).length} words · aim for 40+</Text>
          <Button label="Save reflection" icon="check" disabled={text.trim().length < 10} onPress={save} style={{ marginTop: 16 }} />
        </>
      )}

      {progress.reflections.length && !result ? (
        <>
          <Eyebrow style={{ marginTop: 32, marginBottom: 12 }}>Past reflections</Eyebrow>
          {progress.reflections.slice(0, 3).map((r) => (
            <Card key={r.at} style={{ marginBottom: 10 }}>
              <Text style={s.pastDate}>{new Date(r.at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Text>
              <Text style={s.pastPrompt}>{r.prompt}</Text>
              <Text style={s.pastText} numberOfLines={3}>
                {r.text}
              </Text>
            </Card>
          ))}
        </>
      ) : null}
    </Screen>
  );
}

const s = StyleSheet.create({
  prompt: { fontFamily: fonts.display, fontSize: 26, lineHeight: 35, color: colors.ink, marginTop: 14 },
  input: { backgroundColor: '#fff', borderRadius: radius.lg, padding: 18, minHeight: 200, marginTop: 22, fontFamily: fonts.body, fontSize: 16, lineHeight: 24, color: colors.ink, borderWidth: 1, borderColor: colors.line, outlineStyle: 'none' } as never,
  count: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted, marginTop: 8, textAlign: 'right' },
  saved: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.body, marginTop: 8 },
  pastDate: { fontFamily: fonts.semibold, fontSize: 12, color: colors.primary },
  pastPrompt: { fontFamily: fonts.semibold, fontSize: 14, color: colors.ink, marginTop: 4 },
  pastText: { fontFamily: fonts.body, fontSize: 14, color: colors.muted, marginTop: 4, lineHeight: 20 },
});
