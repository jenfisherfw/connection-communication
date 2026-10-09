import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Reward } from '../../components/Reward';
import { BackHeader, Button, Card, Chip, Screen } from '../../components/ui';
import { useContent } from '../../data/localized';
import { useT } from '../../i18n';
import { AwardResult, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useT();
  const { QUIZZES, areaById } = useContent();
  const quiz = QUIZZES.find((q) => q.id === id) ?? QUIZZES[0];
  const area = areaById(quiz.area);
  const { award } = useAppState();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [result, setResult] = useState<AwardResult | null>(null);

  const q = quiz.questions[i];
  const last = i === quiz.questions.length - 1;

  const next = () => {
    if (last) {
      const score = correct / quiz.questions.length;
      setResult(award({ key: `quiz:${quiz.id}`, kind: 'quiz', xp: Math.round(quiz.xp * (0.5 + score / 2)), area: quiz.area, score }));
    } else {
      setI(i + 1);
      setPicked(null);
    }
  };

  const pick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setCorrect((c) => c + 1);
  };

  if (result) {
    const perfect = correct === quiz.questions.length;
    return (
      <Screen>
        <BackHeader title={quiz.title} onBack={() => router.back()} />
        <View style={{ marginTop: 12 }}>
          <Reward result={result} headline={perfect ? t('Perfect score!') : t('{n} of {total} correct', { n: correct, total: quiz.questions.length })} />
        </View>
        <Card style={{ marginTop: 14 }}>
          <Text style={s.recapTitle}>{t('Keep building {topic}', { topic: area.title.toLowerCase() })}</Text>
          <Text style={s.recapBody}>{t('Turn what you learned into muscle memory with a quick AI role play.')}</Text>
          <Button label={t('Practice now')} icon="mic" style={{ marginTop: 14 }} onPress={() => router.replace('/practice')} />
        </Card>
        <Button label={t('Back to Explore')} variant="ghost" style={{ marginTop: 12 }} onPress={() => router.back()} />
      </Screen>
    );
  }

  return (
    <Screen>
      <BackHeader title={quiz.title} onBack={() => router.back()} right={<Text style={s.count}>{i + 1}/{quiz.questions.length}</Text>} />
      <View style={s.segments}>
        {quiz.questions.map((_, k) => (
          <View key={k} style={[s.segment, { backgroundColor: k < i || (k === i && picked !== null) ? area.color : k === i ? area.soft : colors.line }]} />
        ))}
      </View>
      <Chip label={area.title} color={area.color} soft={area.soft} />
      <Text style={s.question}>{q.q}</Text>
      <View style={{ gap: 10, marginTop: 20 }}>
        {q.options.map((opt, idx) => {
          const isAnswer = idx === q.answer;
          const isPicked = idx === picked;
          const reveal = picked !== null;
          const border = reveal && isAnswer ? colors.success : reveal && isPicked ? colors.coral : colors.line;
          const bg = reveal && isAnswer ? colors.successSoft : reveal && isPicked ? colors.coralSoft : '#fff';
          return (
            <Pressable key={idx} onPress={() => pick(idx)} style={[s.option, { borderColor: border, backgroundColor: bg }]}>
              <View style={[s.letter, reveal && isAnswer && { backgroundColor: colors.success }, reveal && isPicked && !isAnswer && { backgroundColor: colors.coral }]}>
                {reveal && (isAnswer || isPicked) ? (
                  <Feather name={isAnswer ? 'check' : 'x'} size={14} color="#fff" />
                ) : (
                  <Text style={s.letterText}>{String.fromCharCode(65 + idx)}</Text>
                )}
              </View>
              <Text style={s.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
      {picked !== null ? (
        <View style={[s.why, { backgroundColor: picked === q.answer ? colors.successSoft : colors.amberSoft }]}>
          <Text style={s.whyTitle}>{picked === q.answer ? t('Nice. Here is why it works') : t('Not quite. Here is the thinking')}</Text>
          <Text style={s.whyBody}>{q.why}</Text>
        </View>
      ) : null}
      <Button label={last ? t('See results') : t('Continue')} icon="arrow-right" disabled={picked === null} style={{ marginTop: 20 }} onPress={next} />
    </Screen>
  );
}

const s = StyleSheet.create({
  count: { fontFamily: fonts.semibold, fontSize: 14, color: colors.muted },
  segments: { flexDirection: 'row', gap: 6, marginTop: 6, marginBottom: 22 },
  segment: { flex: 1, height: 6, borderRadius: 3 },
  question: { fontFamily: fonts.display, fontSize: 24, lineHeight: 32, color: colors.ink, marginTop: 14 },
  option: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16, borderRadius: radius.md, borderWidth: 2 },
  letter: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
  letterText: { fontFamily: fonts.bold, fontSize: 13, color: colors.body },
  optionText: { flex: 1, fontFamily: fonts.medium, fontSize: 15, lineHeight: 21, color: colors.ink },
  why: { borderRadius: radius.md, padding: 16, marginTop: 16 },
  whyTitle: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
  whyBody: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.body, marginTop: 6 },
  recapTitle: { fontFamily: fonts.display, fontSize: 20, color: colors.ink },
  recapBody: { fontFamily: fonts.body, fontSize: 14, color: colors.muted, marginTop: 6, lineHeight: 20 },
});
