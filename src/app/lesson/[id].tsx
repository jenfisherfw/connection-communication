import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Reward } from '../../components/Reward';
import { BackHeader, Button, Eyebrow } from '../../components/ui';
import { useContent } from '../../data/localized';
import type { Slide } from '../../data/lessons';
import { useT } from '../../i18n';
import { AwardResult, journeyWeek, useAppState } from '../../state/AppState';
import { colors, fonts, gradients, radius } from '../../theme';

const XP = 40;

/** A weekly micro lesson as a swipeable deck of slides, with one quick check and a completion reward. */
export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useT();
  const { LESSONS } = useContent();
  const { progress, award, setLessonPos } = useAppState();
  const { width } = useWindowDimensions();
  const lesson = LESSONS.find((l) => l.id === id);
  const done = !!progress.completed[`lesson:${id}`];
  const [index, setIndex] = useState(() => (done ? 0 : Math.min(progress.lessonPos[id ?? ''] ?? 0, (lesson?.slides.length ?? 1) - 1)));
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AwardResult | null>(null);
  const scroller = useRef<ScrollView>(null);
  const pageWidth = Math.min(width, 640);

  useEffect(() => {
    if (index > 0) scroller.current?.scrollTo({ x: index * pageWidth, animated: false });
    // Only on first layout: later moves are driven by goTo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!lesson) {
    return (
      <SafeAreaView style={s.screen}>
        <BackHeader title="" onBack={() => router.back()} />
        <Text style={s.missing}>{t('This lesson isn’t available yet.')}</Text>
      </SafeAreaView>
    );
  }

  if (lesson.week > journeyWeek(progress) && !done) {
    return (
      <SafeAreaView style={s.screen}>
        <BackHeader title={lesson.title} onBack={() => router.back()} />
        <View style={s.locked}>
          <Feather name="lock" size={32} color={colors.faint} />
          <Text style={s.lockedText}>{t('This lesson unlocks in week {week}.', { week: lesson.week })}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const slides = lesson.slides;
  const last = index === slides.length - 1;
  const blockedAt = slides.findIndex((sl, i) => sl.kind === 'check' && picked[i] === undefined);

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, i));
    // A check question has to be answered before moving past it.
    const limit = blockedAt === -1 ? slides.length - 1 : blockedAt;
    const target = Math.min(next, limit);
    setIndex(target);
    if (!done) setLessonPos(lesson.id, target);
    scroller.current?.scrollTo({ x: target * pageWidth, animated: true });
  };

  const onSwipe = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / pageWidth);
    if (i !== index) goTo(i);
  };

  const complete = () => {
    setLessonPos(lesson.id, 0);
    setResult(
      award({
        key: `lesson:${lesson.id}`,
        kind: 'lesson',
        xp: XP,
        area: lesson.focus === 'change' ? 'change' : undefined,
      }),
    );
  };

  if (result) {
    return (
      <SafeAreaView style={s.screen}>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 12 }}>
          <Reward result={result} headline={t('Lesson complete!')} />
          <Button label={t('See all micro lessons')} icon="book-open" onPress={() => router.replace('/lessons')} />
          <Button label={t('Done')} variant="ghost" onPress={() => router.back()} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.screen}>
      <BackHeader
        title={lesson.title}
        onBack={() => router.back()}
        right={
          <Text style={s.count}>
            {index + 1}/{slides.length}
          </Text>
        }
      />
      <View style={s.segments}>
        {slides.map((_, i) => (
          <View key={i} style={[s.segment, { backgroundColor: i <= index ? colors.teal : colors.line }]} />
        ))}
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView ref={scroller} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={onSwipe} style={{ width: pageWidth }} scrollEventThrottle={16}>
          {slides.map((slide, i) => (
            <ScrollView key={i} style={{ width: pageWidth }} contentContainerStyle={s.page}>
              <SlideView slide={slide} picked={picked[i]} onPick={(o) => setPicked((p) => ({ ...p, [i]: o }))} minutes={lesson.minutes} focus={lesson.focus} />
            </ScrollView>
          ))}
        </ScrollView>
      </View>
      <View style={s.footer}>
        <Button label={t('Back')} variant="ghost" disabled={index === 0} onPress={() => goTo(index - 1)} style={{ flex: 1 }} />
        {last ? (
          <Button label={done ? t('Done') : t('Complete lesson')} icon="check" onPress={done ? () => router.back() : complete} style={{ flex: 2 }} />
        ) : (
          <Button label={t('Next')} icon="arrow-right" disabled={blockedAt === index} onPress={() => goTo(index + 1)} style={{ flex: 2 }} />
        )}
      </View>
    </SafeAreaView>
  );
}

function SlideView({ slide, picked, onPick, minutes, focus }: { slide: Slide; picked?: number; onPick: (option: number) => void; minutes: number; focus: 'communication' | 'change' }) {
  const { t } = useT();
  switch (slide.kind) {
    case 'cover':
      return (
        <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={s.cover}>
          <View style={s.coverTag}>
            <Text style={s.coverTagText}>
              {(focus === 'change' ? t('Leading change') : t('Communication')).toUpperCase()} · {t('{n} min', { n: minutes })}
            </Text>
          </View>
          <Text style={s.coverTitle}>{slide.title}</Text>
          <Text style={s.coverBody}>{slide.body}</Text>
          <View style={s.swipeHint}>
            <Text style={s.swipeHintText}>{t('Swipe or tap Next')}</Text>
            <Feather name="chevrons-right" size={16} color="rgba(255,255,255,0.8)" />
          </View>
        </LinearGradient>
      );
    case 'idea':
      return (
        <View style={s.card}>
          <Eyebrow color={colors.teal}>{t('Key idea')}</Eyebrow>
          <Text style={s.title}>{slide.title}</Text>
          <Text style={s.body}>{slide.body}</Text>
          {slide.bullets?.map((b) => (
            <View key={b} style={s.bulletRow}>
              <View style={s.dot} />
              <Text style={s.bullet}>{b}</Text>
            </View>
          ))}
        </View>
      );
    case 'example':
      return (
        <View style={s.card}>
          <Eyebrow color={colors.teal}>{t('Say it better')}</Eyebrow>
          <Text style={s.title}>{slide.title}</Text>
          <View style={[s.quoteBox, { backgroundColor: colors.coralSoft }]}>
            <Text style={[s.quoteLabel, { color: colors.coral }]}>{t('Instead of')}</Text>
            <Text style={s.quote}>{slide.instead}</Text>
          </View>
          <View style={[s.quoteBox, { backgroundColor: colors.successSoft }]}>
            <Text style={[s.quoteLabel, { color: colors.success }]}>{t('Try')}</Text>
            <Text style={s.quote}>{slide.tryThis}</Text>
          </View>
          <Text style={s.body}>{slide.why}</Text>
        </View>
      );
    case 'check': {
      const reveal = picked !== undefined;
      return (
        <View style={s.card}>
          <Eyebrow color={colors.teal}>{t('Quick check')}</Eyebrow>
          <Text style={s.title}>{slide.question}</Text>
          <View style={{ gap: 10, marginTop: 6 }}>
            {slide.options.map((o, i) => {
              const right = i === slide.answer;
              const chosen = i === picked;
              const border = reveal && right ? colors.success : reveal && chosen ? colors.coral : colors.line;
              const bg = reveal && right ? colors.successSoft : reveal && chosen ? colors.coralSoft : '#fff';
              return (
                <Pressable key={i} disabled={reveal} onPress={() => onPick(i)} style={[s.option, { borderColor: border, backgroundColor: bg }]}>
                  <Text style={s.optionText}>{o}</Text>
                  {reveal && (right || chosen) ? <Feather name={right ? 'check-circle' : 'x-circle'} size={18} color={right ? colors.success : colors.coral} /> : null}
                </Pressable>
              );
            })}
          </View>
          {reveal ? (
            <View
              style={[
                s.explain,
                {
                  backgroundColor: picked === slide.answer ? colors.successSoft : colors.amberSoft,
                },
              ]}
            >
              <Text style={s.explainTitle}>{picked === slide.answer ? t('Nice. Here is why it works') : t('Not quite. Here is the thinking')}</Text>
              <Text style={s.body}>{slide.explain}</Text>
            </View>
          ) : (
            <Text style={s.hint}>{t('Pick an answer to continue.')}</Text>
          )}
        </View>
      );
    }
    case 'action':
      return (
        <View
          style={[
            s.card,
            {
              backgroundColor: colors.amberSoft,
              borderColor: colors.amberSoft,
            },
          ]}
        >
          <View style={s.actionIcon}>
            <Feather name="target" size={22} color={colors.amber} />
          </View>
          <Eyebrow color={colors.orange}>{t('Try it this week')}</Eyebrow>
          <Text style={s.title}>{slide.title}</Text>
          <Text style={s.body}>{slide.body}</Text>
        </View>
      );
    case 'takeaway':
      return (
        <View style={s.card}>
          <Eyebrow color={colors.teal}>{t('Remember')}</Eyebrow>
          <Text style={s.title}>{slide.title}</Text>
          {slide.bullets.map((b) => (
            <View key={b} style={s.takeRow}>
              <Feather name="check" size={18} color={colors.teal} />
              <Text style={s.bullet}>{b}</Text>
            </View>
          ))}
        </View>
      );
  }
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  count: { fontFamily: fonts.semibold, fontSize: 14, color: colors.muted },
  segments: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  segment: { flex: 1, height: 4, borderRadius: 2 },
  page: { padding: 20, paddingBottom: 30 },
  cover: {
    borderRadius: radius.xl,
    padding: 26,
    minHeight: 380,
    justifyContent: 'center',
  },
  coverTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.16)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  coverTagText: {
    fontFamily: fonts.bold,
    fontSize: 11,
    letterSpacing: 1.2,
    color: '#fff',
  },
  coverTitle: {
    fontFamily: fonts.display,
    fontSize: 30,
    lineHeight: 38,
    color: '#fff',
    marginTop: 18,
  },
  coverBody: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 25,
    color: 'rgba(255,255,255,0.88)',
    marginTop: 14,
  },
  swipeHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 28,
  },
  swipeHintText: {
    fontFamily: fonts.medium,
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: radius.xl,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.line,
    gap: 10,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
    lineHeight: 31,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.body,
  },
  bulletRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.teal,
    marginTop: 9,
  },
  bullet: {
    flex: 1,
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 24,
    color: colors.ink,
  },
  quoteBox: { borderRadius: radius.md, padding: 14, gap: 4 },
  quoteLabel: {
    fontFamily: fonts.bold,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  quote: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 23,
    color: colors.ink,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderRadius: radius.md,
    padding: 14,
  },
  optionText: {
    flex: 1,
    fontFamily: fonts.medium,
    fontSize: 15,
    lineHeight: 21,
    color: colors.ink,
  },
  explain: { borderRadius: radius.md, padding: 14, gap: 4, marginTop: 6 },
  explainTitle: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink },
  hint: {
    fontFamily: fonts.medium,
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  takeRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  footer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  missing: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.muted,
    padding: 24,
  },
  locked: { alignItems: 'center', gap: 12, padding: 40 },
  lockedText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.muted,
    textAlign: 'center',
  },
});
