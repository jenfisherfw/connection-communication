import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Chat } from '../components/Chat';
import { BackHeader } from '../components/ui';
import { ChatMessage, askCoach, coachErrorMessage, coachIsLive } from '../services/coach';
import { useAccount } from '../state/Account';
import { todayKey, useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

const INTRO: ChatMessage = {
  role: 'assistant',
  content: "Hi, I'm Ari, your leadership coach. I can help you plan a hard conversation, find the right words, or rehearse it with you. What's on your mind?",
};

const SUGGESTIONS = [
  'How do I give feedback to a defensive employee?',
  'Two people on my team are in conflict',
  'Help me announce an unpopular change',
  'How do I shift a negative team culture?',
  'My team is tired of constant change',
  'How do I run a better 1:1?',
  'How do I make our meetings shorter and better?',
  'How do I keep my remote team connected?',
];

export default function Coach() {
  const { seed } = useLocalSearchParams<{ seed?: string }>();
  const { award } = useAppState();
  const account = useAccount();
  const [messages, setMessages] = useState<ChatMessage[]>([INTRO]);
  const [typing, setTyping] = useState(false);

  const send = async (text: string) => {
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setTyping(true);
    try {
      const reply = await askCoach(next.filter((m) => m !== INTRO));
      setMessages([...next, { role: 'assistant', content: reply }]);
      if (next.filter((m) => m.role === 'user').length === 1) award({ key: `coach:${todayKey()}`, kind: 'coach', xp: 15 });
    } catch (err) {
      setMessages([...next, { role: 'assistant', content: coachErrorMessage(err) }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }} edges={['top']}>
      <BackHeader title="Coach Ari" onBack={() => (router.canGoBack() ? router.back() : router.replace('/'))} right={<View style={[s.live, { backgroundColor: coachIsLive && account.session ? colors.success : colors.amber }]} />} />
      <Chat
        messages={messages}
        typing={typing}
        onSend={send}
        placeholder="Ask about a situation..."
        partnerInitial="A"
        partnerColor="#fff"
        partnerSoft={colors.primary}
        suggestions={SUGGESTIONS}
        initialText={seed ?? ''}
        footer={<Text style={s.note}>Ari coaches the conversation, not the decision. It won’t advise on firing, discipline, or legal matters, and follows your company’s policies. For safety, harassment, or policy concerns, contact HR. In an emergency, call 911 or 988.</Text>}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  live: { width: 10, height: 10, borderRadius: 5, marginRight: 10 },
  note: { fontFamily: fonts.body, fontSize: 12, color: colors.faint, textAlign: 'center', marginTop: 8, lineHeight: 17, paddingHorizontal: 20 },
});
