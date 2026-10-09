import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Chat } from '../../components/Chat';
import { Reward } from '../../components/Reward';
import { BackHeader, Button, Card, Chip, Eyebrow } from '../../components/ui';
import { ROLEPLAYS, areaById } from '../../data/content';
import { ChatMessage, RoleplayFeedback, coachErrorMessage, roleplayFeedback, roleplayReply } from '../../services/coach';
import { AwardResult, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

const MIN_TURNS = 3;

export default function RoleplayScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const rp = ROLEPLAYS.find((r) => r.id === id) ?? ROLEPLAYS[0];
  const area = areaById(rp.area);
  const { award } = useAppState();
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', content: rp.opener }]);
  const [typing, setTyping] = useState(false);
  const [feedback, setFeedback] = useState<RoleplayFeedback | null>(null);
  const [result, setResult] = useState<AwardResult | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const turns = messages.filter((m) => m.role === 'user').length;

  const send = async (text: string) => {
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setNotice(null);
    setTyping(true);
    try {
      const reply = await roleplayReply(rp, next);
      setMessages([...next, { role: 'assistant', content: reply }]);
    } catch (err) {
      setNotice(coachErrorMessage(err));
    } finally {
      setTyping(false);
    }
  };

  const finish = async () => {
    setNotice(null);
    setTyping(true);
    try {
      const fb = await roleplayFeedback(rp, messages);
      setFeedback(fb);
      const score = fb.score / 100;
      setResult(award({ key: `roleplay:${rp.id}`, kind: 'roleplay', xp: Math.round(rp.xp * (0.5 + score / 2)), area: rp.area, score }));
    } catch (err) {
      setNotice(coachErrorMessage(err));
    } finally {
      setTyping(false);
    }
  };

  const brief = (
    <Card style={s.brief}>
      <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap' }}>
        <Chip label={rp.difficulty} color={colors.primary} soft={colors.primarySoft} />
        <Chip label={area.title} color={area.color} soft={area.soft} />
      </View>
      <Text style={s.briefTitle}>
        {rp.person}, {rp.role}
      </Text>
      <Text style={s.briefBody}>{rp.brief}</Text>
    </Card>
  );

  const noticeView = notice ? <Text style={s.notice}>{notice}</Text> : null;

  const footer = feedback && result ? (
    <View style={{ gap: 12, marginTop: 8 }}>
      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View style={[s.scoreRing, { borderColor: feedback.score >= 80 ? colors.success : feedback.score >= 65 ? colors.amber : colors.coral }]}>
            <Text style={s.scoreNum}>{feedback.score}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Eyebrow>Conversation score</Eyebrow>
            <Text style={s.scoreLabel}>{feedback.score >= 80 ? 'Strong and human' : feedback.score >= 65 ? 'Good foundation' : 'Keep practicing'}</Text>
          </View>
        </View>
        <Text style={s.fbHead}>What worked</Text>
        {feedback.strengths.map((x) => (
          <View key={x} style={s.fbRow}>
            <Feather name="check-circle" size={16} color={colors.success} />
            <Text style={s.fbText}>{x}</Text>
          </View>
        ))}
        <Text style={s.fbHead}>Level up</Text>
        {feedback.improve.map((x) => (
          <View key={x} style={s.fbRow}>
            <Feather name="arrow-up-circle" size={16} color={colors.amber} />
            <Text style={s.fbText}>{x}</Text>
          </View>
        ))}
        <View style={s.tryThis}>
          <Eyebrow color={colors.primary}>Try this line</Eyebrow>
          <Text style={s.tryText}>{feedback.tryThis}</Text>
        </View>
      </Card>
      <Reward result={result} headline="Rep complete!" />
      <Button label="Done" variant="ghost" onPress={() => router.back()} />
    </View>
  ) : turns >= MIN_TURNS && !typing ? (
    <Button label="End and get feedback" icon="award" onPress={finish} style={{ marginTop: 8 }} />
  ) : (
    <Text style={s.hint}>{MIN_TURNS - turns > 0 ? `${MIN_TURNS - turns} more ${MIN_TURNS - turns === 1 ? 'reply' : 'replies'} to unlock your feedback score` : ''}</Text>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }} edges={['top']}>
      <BackHeader title={rp.title} onBack={() => router.back()} />
      <Chat
        messages={messages}
        typing={typing}
        onSend={send}
        placeholder={`Respond to ${rp.person}...`}
        partnerInitial={rp.person[0]}
        partnerColor={area.color}
        partnerSoft={area.soft}
        header={brief}
        footer={
          <>
            {noticeView}
            {footer}
          </>
        }
        disabled={!!feedback}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  brief: { backgroundColor: colors.primarySoft, shadowOpacity: 0, marginBottom: 6 },
  briefTitle: { fontFamily: fonts.display, fontSize: 20, color: colors.ink, marginTop: 12 },
  briefBody: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.body, marginTop: 6 },
  notice: { fontFamily: fonts.medium, fontSize: 13, lineHeight: 19, color: colors.coral, textAlign: 'center', marginTop: 8, paddingHorizontal: 12 },
  hint: { fontFamily: fonts.medium, fontSize: 12, color: colors.muted, textAlign: 'center', marginTop: 6 },
  scoreRing: { width: 72, height: 72, borderRadius: 36, borderWidth: 6, alignItems: 'center', justifyContent: 'center' },
  scoreNum: { fontFamily: fonts.bold, fontSize: 24, color: colors.ink },
  scoreLabel: { fontFamily: fonts.display, fontSize: 20, color: colors.ink, marginTop: 4 },
  fbHead: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink, marginTop: 18, marginBottom: 8 },
  fbRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginBottom: 8 },
  fbText: { flex: 1, fontFamily: fonts.body, fontSize: 14, lineHeight: 20, color: colors.body },
  tryThis: { backgroundColor: colors.primarySoft, borderRadius: radius.md, padding: 14, marginTop: 10 },
  tryText: { fontFamily: fonts.display, fontSize: 17, lineHeight: 24, color: colors.ink, marginTop: 6 },
});
