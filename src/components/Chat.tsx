import { Feather } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ChatMessage } from '../services/coach';
import { colors, fonts, radius } from '../theme';

interface Props {
  messages: ChatMessage[];
  typing: boolean;
  onSend: (text: string) => void;
  placeholder: string;
  partnerInitial: string;
  partnerColor: string;
  partnerSoft: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  suggestions?: string[];
  initialText?: string;
  disabled?: boolean;
}

export function Chat({ messages, typing, onSend, placeholder, partnerInitial, partnerColor, partnerSoft, header, footer, suggestions, initialText = '', disabled }: Props) {
  const [text, setText] = useState(initialText);
  const scroll = useRef<ScrollView>(null);

  useEffect(() => {
    setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 50);
  }, [messages.length, typing]);

  const send = (t = text) => {
    const v = t.trim();
    if (!v || typing || disabled) return;
    onSend(v);
    setText('');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView ref={scroll} contentContainerStyle={{ padding: 20, paddingBottom: 12, gap: 12 }} showsVerticalScrollIndicator={false}>
        {header}
        {messages.map((m, i) =>
          m.role === 'assistant' ? (
            <View key={i} style={s.theirRow}>
              <View style={[s.avatar, { backgroundColor: partnerSoft }]}>
                <Text style={[s.avatarText, { color: partnerColor }]}>{partnerInitial}</Text>
              </View>
              <View style={[s.bubble, s.theirs]}>
                <Text style={s.theirText}>{m.content}</Text>
              </View>
            </View>
          ) : (
            <View key={i} style={[s.bubble, s.mine]}>
              <Text style={s.mineText}>{m.content}</Text>
            </View>
          ),
        )}
        {typing ? (
          <View style={s.theirRow}>
            <View style={[s.avatar, { backgroundColor: partnerSoft }]}>
              <Text style={[s.avatarText, { color: partnerColor }]}>{partnerInitial}</Text>
            </View>
            <View style={[s.bubble, s.theirs, { flexDirection: 'row', gap: 5, paddingVertical: 16 }]}>
              {[0, 1, 2].map((d) => (
                <View key={d} style={[s.typingDot, { opacity: 0.35 + d * 0.25 }]} />
              ))}
            </View>
          </View>
        ) : null}
        {footer}
      </ScrollView>

      {suggestions && suggestions.length && messages.filter((m) => m.role === 'user').length === 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 8, paddingBottom: 10 }}>
          {suggestions.map((sug) => (
            <Pressable key={sug} onPress={() => send(sug)} style={s.sug}>
              <Text style={s.sugText}>{sug}</Text>
            </Pressable>
          ))}
        </ScrollView>
      ) : null}

      {!disabled ? (
        <View style={s.inputBar}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={placeholder}
            placeholderTextColor={colors.faint}
            style={s.input}
            multiline
            onSubmitEditing={() => send()}
            blurOnSubmit
          />
          <Pressable onPress={() => send()} style={[s.send, { opacity: text.trim() ? 1 : 0.4 }]}>
            <Feather name="arrow-up" size={20} color="#fff" />
          </Pressable>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  theirRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-end', maxWidth: '88%' },
  avatar: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.bold, fontSize: 14 },
  bubble: { borderRadius: 20, paddingHorizontal: 16, paddingVertical: 12 },
  theirs: { backgroundColor: '#fff', borderBottomLeftRadius: 6, flexShrink: 1 },
  mine: { backgroundColor: colors.primary, alignSelf: 'flex-end', borderBottomRightRadius: 6, maxWidth: '85%' },
  theirText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  mineText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: '#fff' },
  typingDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.muted },
  sug: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#C9D6EA', borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 9 },
  sugText: { fontFamily: fonts.medium, fontSize: 13, color: colors.primary },
  inputBar: { flexDirection: 'row', alignItems: 'flex-end', gap: 10, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 28, backgroundColor: colors.bg, borderTopWidth: 1, borderTopColor: colors.line },
  input: { flex: 1, minHeight: 46, maxHeight: 120, backgroundColor: '#fff', borderRadius: 23, paddingHorizontal: 18, paddingTop: 13, paddingBottom: 12, fontFamily: fonts.body, fontSize: 15, color: colors.ink, borderWidth: 1, borderColor: colors.line, outlineStyle: 'none' } as never,
  send: { width: 46, height: 46, borderRadius: 23, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
});
