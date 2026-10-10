import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { BackHeader, Button, Card, Chip, Eyebrow, Screen } from '../components/ui';
import { useT } from '../i18n';
import { todayKey, useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

const CHANNELS = ['Email', 'Chat', 'Text'] as const;
const AUDIENCES = ['Direct report', 'Whole team', 'Peer', 'My boss'] as const;
const AUDIENCE_PHRASE: Record<(typeof AUDIENCES)[number], string> = {
  'Direct report': 'a direct report',
  'Whole team': 'my whole team',
  Peer: 'a peer',
  'My boss': 'my boss',
};

/** Matches whole words or phrases in any language, including accented letters. */
const words = (list: string) => new RegExp(`(^|[^\\p{L}])(${list})(?![\\p{L}])`, 'iu');
// English, Spanish, and French, so the checks work whichever language the leader writes in.
const PRESSURE = words('asap|immediately|urgent|urgente|inmediatamente|cuanto antes|ya mismo|imm[ée]diatement|au plus vite|tout de suite');
const ABSOLUTES = words('always|never|everyone knows|obviously|siempre|nunca|todo el mundo sabe|obviamente|toujours|jamais|tout le monde sait|[ée]videmment');
const TALK = words('talk|chat|call|hablar|hablamos|charlar|llamada|parler|discuter|appel');
const CAN_WE_TALK = /^(hey|hi|hola|salut|bonjour)?[\s,¿]*((can|could) (we|you) (talk|chat|connect)|podemos hablar|podr[ií]amos hablar|on peut (parler|discuter)|pouvons-nous (parler|discuter))\s*\??$/i;

interface Check {
  ok: boolean;
  label: string;
  tip: string;
}

/** Quick, local checks for the tone traps that most often make leaders' messages land badly. */
function runChecks(text: string, channel: string, tr: (s: string) => string): Check[] {
  const t = text.trim();
  const count = t.split(/\s+/).filter(Boolean);
  // Short acronyms (CEO, FYI, Q3) are fine; four or more capital letters reads as shouting.
  const capsWords = count.filter((w) => /^[\p{Lu}!?.,¡¿]+$/u.test(w) && w.replace(/[^\p{Lu}]/gu, '').length >= 4);
  const vague = CAN_WE_TALK.test(t) || (count.length <= 6 && TALK.test(t));
  const longLimit = channel === 'Chat' || channel === 'Text' ? 80 : 250;
  return [
    { ok: capsWords.length === 0, label: 'No ALL CAPS', tip: 'Capital letters read as shouting. Use bold or plain words for emphasis.' },
    { ok: !/!{2,}|\?{2,}/.test(t), label: 'Calm punctuation', tip: 'Multiple !!! or ??? can feel urgent or frustrated.' },
    { ok: !PRESSURE.test(t), label: 'No pressure words', tip: 'Instead of ASAP, give a real deadline and why it matters.' },
    { ok: !ABSOLUTES.test(t), label: 'No absolutes', tip: '"Always" and "never" sound like character judgments. Describe the specific moment.' },
    { ok: !vague, label: 'Context included', tip: 'A bare "can we talk?" from a leader creates anxiety. Add the topic and whether it is urgent.' },
    { ok: count.length <= longLimit, label: channel === 'Email' ? 'Readable length' : 'Short enough for chat', tip: channel === 'Email' ? 'Long emails get skimmed. Lead with the ask, then the detail.' : 'Long chat messages are hard to read. Consider a call or a short doc.' },
  ].map((c) => ({ ...c, label: tr(c.label), tip: tr(c.tip) }));
}

export default function ToneCheck() {
  const { award } = useAppState();
  const { t } = useT();
  const [text, setText] = useState('');
  const [channel, setChannel] = useState<(typeof CHANNELS)[number]>('Chat');
  const [audience, setAudience] = useState<(typeof AUDIENCES)[number]>('Direct report');
  const checks = useMemo(() => (text.trim() ? runChecks(text, channel, t) : []), [text, channel, t]);
  const passed = checks.filter((c) => c.ok).length;

  const review = () => {
    award({ key: `builder:tone-check:${todayKey()}`, kind: 'builder', xp: 20, area: 'digital' });
    router.push({
      pathname: '/coach',
      params: {
        seed: `${t('Before I send this {channel} message to {audience}, how might it land? Point out anything that could be misread, then suggest a better version that keeps my intent:', { channel: t(channel).toLowerCase(), audience: t(AUDIENCE_PHRASE[audience]) })}\n\n${text.trim()}`,
      },
    });
  };

  return (
    <Screen>
      <BackHeader title={t('Tone Check')} onBack={() => router.back()} />
      <Chip label={t('Digital Communication')} icon="send" color={colors.sky} soft={colors.skySoft} />
      <Text style={s.title}>{t('How will this message land?')}</Text>
      <Text style={s.sub}>{t('Text has no tone of voice, so it often reads harsher than you mean. Check it before you hit send.')}</Text>

      <Eyebrow style={s.label}>{t('Sending by')}</Eyebrow>
      <View style={s.pills}>
        {CHANNELS.map((c) => (
          <Pressable key={c} onPress={() => setChannel(c)} style={[s.pill, channel === c && s.pillOn]}>
            <Text style={[s.pillText, channel === c && s.pillTextOn]}>{t(c)}</Text>
          </Pressable>
        ))}
      </View>
      <Eyebrow style={s.label}>{t('Sending to')}</Eyebrow>
      <View style={s.pills}>
        {AUDIENCES.map((a) => (
          <Pressable key={a} onPress={() => setAudience(a)} style={[s.pill, audience === a && s.pillOn]}>
            <Text style={[s.pillText, audience === a && s.pillTextOn]}>{t(a)}</Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        value={text}
        onChangeText={setText}
        multiline
        placeholder={t('Paste or type the message you’re about to send...')}
        placeholderTextColor={colors.faint}
        style={s.input}
        textAlignVertical="top"
      />

      {checks.length ? (
        <Card style={{ marginTop: 16 }}>
          <View style={s.checkHead}>
            <Eyebrow color={colors.sky}>{t('Quick checks')}</Eyebrow>
            <Text style={s.score}>
              {passed}/{checks.length}
            </Text>
          </View>
          {checks.map((c) => (
            <View key={c.label} style={s.check}>
              <Feather name={c.ok ? 'check-circle' : 'alert-circle'} size={18} color={c.ok ? colors.success : colors.amber} />
              <View style={{ flex: 1 }}>
                <Text style={s.checkLabel}>{c.label}</Text>
                {!c.ok ? <Text style={s.checkTip}>{c.tip}</Text> : null}
              </View>
            </View>
          ))}
        </Card>
      ) : null}

      <Button label={t('Ask Ari how it will land')} icon="message-circle" disabled={text.trim().length < 5} onPress={review} style={{ marginTop: 18 }} />
      <Text style={s.privacy}>{t('Your message is only sent to Ari when you tap the button.')}</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 28, lineHeight: 35, color: colors.ink, marginTop: 12 },
  sub: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.muted, marginTop: 6 },
  label: { marginTop: 20, marginBottom: 8 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: { paddingHorizontal: 14, paddingVertical: 9, borderRadius: radius.pill, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.line },
  pillOn: { backgroundColor: colors.sky, borderColor: colors.sky },
  pillText: { fontFamily: fonts.medium, fontSize: 14, color: colors.ink },
  pillTextOn: { color: '#fff' },
  input: { backgroundColor: '#fff', borderRadius: radius.lg, borderWidth: 1, borderColor: colors.line, padding: 16, minHeight: 150, marginTop: 20, fontFamily: fonts.body, fontSize: 16, lineHeight: 23, color: colors.ink, outlineStyle: 'none' } as never,
  checkHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  score: { fontFamily: fonts.bold, fontSize: 14, color: colors.sky },
  check: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginTop: 10 },
  checkLabel: { fontFamily: fonts.semibold, fontSize: 15, color: colors.ink },
  checkTip: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: colors.muted, marginTop: 2 },
  privacy: { fontFamily: fonts.body, fontSize: 12, color: colors.faint, textAlign: 'center', marginTop: 10 },
});
