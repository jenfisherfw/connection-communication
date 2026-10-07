import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, Button, Eyebrow } from '../components/ui';
import { useAccount } from '../state/Account';
import { useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

export default function SignIn() {
  const { signIn, signUp } = useAccount();
  const { updateProfile } = useAppState();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok?: boolean } | null>(null);

  const submit = async () => {
    setBusy(true);
    setMsg(null);
    if (mode === 'in') {
      const error = await signIn(email, password);
      setBusy(false);
      if (error) return setMsg({ text: error });
      // Signing in on a new device restores progress, so skip onboarding.
      updateProfile({ onboarded: true });
      router.replace('/');
    } else {
      const { error, needsConfirmation } = await signUp(email, password);
      setBusy(false);
      if (error) return setMsg({ text: error });
      if (needsConfirmation) return setMsg({ text: 'Check your email to confirm your account, then sign in here.', ok: true });
      router.back();
    }
  };

  return (
    <SafeAreaView style={s.screen}>
      <BackHeader title="" onBack={() => (router.canGoBack() ? router.back() : router.replace('/'))} />
      <KeyboardAvoidingView style={s.body} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Eyebrow color={colors.primary}>{mode === 'in' ? 'Welcome back' : 'Create your account'}</Eyebrow>
        <Text style={s.title}>{mode === 'in' ? 'Sign in to Rapport' : 'Back up your progress'}</Text>
        <Text style={s.hint}>Your streak, XP, and badges follow you to any device.</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Work email" placeholderTextColor={colors.faint} style={s.input} autoCapitalize="none" keyboardType="email-address" autoComplete="email" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={mode === 'up' ? 'Password (8+ characters)' : 'Password'}
          placeholderTextColor={colors.faint}
          style={[s.input, { marginTop: 12 }]}
          secureTextEntry
          autoComplete={mode === 'up' ? 'new-password' : 'current-password'}
          onSubmitEditing={submit}
        />
        {msg ? <Text style={[s.msg, msg.ok && { color: colors.success }]}>{msg.text}</Text> : null}
        <Button
          label={busy ? 'One moment...' : mode === 'in' ? 'Sign in' : 'Create account'}
          disabled={busy || !email.includes('@') || password.length < (mode === 'up' ? 8 : 1)}
          onPress={submit}
          style={{ marginTop: 22 }}
        />
        <View style={s.switchRow}>
          <Text style={s.switchText}>{mode === 'in' ? 'New to Rapport?' : 'Already have an account?'}</Text>
          <Pressable onPress={() => { setMode(mode === 'in' ? 'up' : 'in'); setMsg(null); }}>
            <Text style={s.switchLink}>{mode === 'in' ? 'Create an account' : 'Sign in'}</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  title: { fontFamily: fonts.display, fontSize: 30, color: colors.ink, marginTop: 10 },
  hint: { fontFamily: fonts.body, fontSize: 15, color: colors.muted, marginTop: 8, lineHeight: 22 },
  input: { backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, paddingHorizontal: 18, height: 56, fontFamily: fonts.body, fontSize: 17, color: colors.ink, marginTop: 24, outlineStyle: 'none' } as never,
  msg: { fontFamily: fonts.medium, fontSize: 14, color: colors.coral, marginTop: 12, lineHeight: 20 },
  switchRow: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 22 },
  switchText: { fontFamily: fonts.body, fontSize: 15, color: colors.muted },
  switchLink: { fontFamily: fonts.semibold, fontSize: 15, color: colors.primary },
});
