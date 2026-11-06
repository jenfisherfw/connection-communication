import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Share, StyleSheet, Text, TextInput, View } from 'react-native';
import { Reward } from '../components/Reward';
import { BackHeader, Button, Card, Chip, Eyebrow, Screen } from '../components/ui';
import { useT } from '../i18n';
import { AwardResult, todayKey, useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

/** The questions every change announcement should answer, in the order people need them. */
const PARTS = [
  { key: 'what', label: 'What is changing?', hint: 'Plain language, one or two sentences.', placeholder: 'Starting March 1, our two support teams will merge into one team under Dana.' },
  { key: 'why', label: 'Why, and why now?', hint: 'The problem it solves. Lead with this when you share it.', placeholder: 'Customers are getting passed between teams and waiting too long for answers.' },
  { key: 'same', label: 'What stays the same?', hint: 'Stability anchors people while everything else moves.', placeholder: 'Your roles, pay, schedules, and customer accounts are not changing.' },
  { key: 'impact', label: 'What it means for your team', hint: 'Be concrete about day to day impact.', placeholder: 'You will have one shared queue and a new weekly huddle on Mondays.' },
  { key: 'unknown', label: 'What we do not know yet', hint: 'Naming uncertainty builds more trust than guessing.', placeholder: 'We are still deciding which tools we will keep.' },
  { key: 'next', label: 'When they will hear more, and how to give input', hint: 'A date and a channel turn anxiety into participation.', placeholder: 'I will share the tools decision by Feb 15. Bring questions to our 1:1s or the Q&A on Thursday.' },
] as const;

type Key = (typeof PARTS)[number]['key'];

export default function ChangeMessage() {
  const { award } = useAppState();
  const { t } = useT();
  const [v, setV] = useState<Record<Key, string>>({ what: '', why: '', same: '', impact: '', unknown: '', next: '' });
  const [result, setResult] = useState<AwardResult | null>(null);
  const filled = PARTS.filter((p) => v[p.key].trim().length > 0).length;
  const ready = v.what.trim() && v.why.trim();

  // Why first, then what: people engage with a change once they understand the reason for it.
  const draft = useMemo(() => {
    const lines = [
      v.why.trim() && v.why.trim(),
      v.what.trim() && t('Here is what is changing: {text}', { text: v.what.trim() }),
      v.same.trim() && t('What is not changing: {text}', { text: v.same.trim() }),
      v.impact.trim() && t('What this means for us: {text}', { text: v.impact.trim() }),
      v.unknown.trim() && t('What we do not know yet: {text}', { text: v.unknown.trim() }),
      v.next.trim() && v.next.trim(),
      t('I know change takes energy. My door is open, and I want to hear how this lands for you.'),
    ].filter(Boolean);
    return lines.join('\n\n');
  }, [v, t]);

  const finish = () => {
    if (!result) setResult(award({ key: `builder:change-message:${todayKey()}`, kind: 'builder', xp: 35, area: 'change' }));
  };

  const polish = () => {
    finish();
    router.push({
      pathname: '/coach',
      params: { seed: `${t('Please help me polish this change announcement for my team. Keep it warm, clear, and honest, and tell me what questions people will likely still have:')}\n\n${draft}` },
    });
  };

  const share = async () => {
    finish();
    await Share.share({ message: draft }).catch(() => {});
  };

  return (
    <Screen>
      <BackHeader title={t('Change Message Builder')} onBack={() => router.back()} />
      <Chip label={t('Leading Change')} icon="trending-up" color={colors.blue} soft={colors.blueSoft} />
      <Text style={s.title}>{t('Announce a change people can get behind')}</Text>
      <Text style={s.sub}>{t('Answer the six questions every change message needs. Your draft builds as you go.')}</Text>

      <View style={s.meter}>
        {PARTS.map((p) => (
          <View key={p.key} style={[s.meterSeg, v[p.key].trim() && { backgroundColor: colors.blue }]} />
        ))}
      </View>
      <Text style={s.meterText}>{t('{n} of {total} answered', { n: filled, total: PARTS.length })}</Text>

      {PARTS.map((p, i) => (
        <View key={p.key} style={{ marginTop: 18 }}>
          <View style={s.labelRow}>
            <View style={[s.num, v[p.key].trim() && { backgroundColor: colors.blue }]}>
              {v[p.key].trim() ? <Feather name="check" size={12} color="#fff" /> : <Text style={s.numText}>{i + 1}</Text>}
            </View>
            <Text style={s.label}>{t(p.label)}</Text>
          </View>
          <Text style={s.hint}>{t(p.hint)}</Text>
          <TextInput
            value={v[p.key]}
            onChangeText={(x) => setV((cur) => ({ ...cur, [p.key]: x }))}
            placeholder={t(p.placeholder)}
            placeholderTextColor={colors.faint}
            multiline
            style={s.input}
            textAlignVertical="top"
          />
        </View>
      ))}

      {ready ? (
        <Card style={{ marginTop: 24 }}>
          <Eyebrow color={colors.blue}>{t('Your draft')}</Eyebrow>
          <Text style={s.draft}>{draft}</Text>
          <Text style={s.note}>{t('Leading with why is deliberate: people engage with what is changing once they understand the reason.')}</Text>
        </Card>
      ) : (
        <Text style={s.waiting}>{t('Answer the first two questions to see your draft.')}</Text>
      )}

      <Button label={t('Polish with Ari')} icon="message-circle" disabled={!ready} onPress={polish} style={{ marginTop: 18 }} />
      <Button label={t('Share or copy')} icon="share" variant="ghost" disabled={!ready} onPress={share} style={{ marginTop: 10 }} />

      {result ? (
        <View style={{ marginTop: 20 }}>
          <Reward result={result} headline={t('Change message drafted')} />
        </View>
      ) : null}
    </Screen>
  );
}

const s = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 28, lineHeight: 35, color: colors.ink, marginTop: 12 },
  sub: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.muted, marginTop: 6 },
  meter: { flexDirection: 'row', gap: 5, marginTop: 18 },
  meterSeg: { flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.line },
  meterText: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted, marginTop: 6 },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  num: { width: 24, height: 24, borderRadius: 12, backgroundColor: colors.line, alignItems: 'center', justifyContent: 'center' },
  numText: { fontFamily: fonts.bold, fontSize: 12, color: colors.body },
  label: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink, flex: 1 },
  hint: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 4, marginLeft: 34 },
  input: { backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, padding: 14, minHeight: 76, marginTop: 8, fontFamily: fonts.body, fontSize: 15, lineHeight: 21, color: colors.ink, outlineStyle: 'none' } as never,
  draft: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.ink, marginTop: 10 },
  note: { fontFamily: fonts.body, fontSize: 12, lineHeight: 17, color: colors.muted, marginTop: 12 },
  waiting: { fontFamily: fonts.medium, fontSize: 13, color: colors.muted, textAlign: 'center', marginTop: 22 },
});
