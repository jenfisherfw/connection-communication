import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Eyebrow, IconBubble } from '../components/ui';
import { AREAS, AreaId } from '../data/content';
import { formatTime, requestReminderPermission } from '../services/reminders';
import { useAccount } from '../state/Account';
import { TeamSize, useAppState } from '../state/AppState';
import { colors, gradients, fonts, radius } from '../theme';

const ROLES = [
  { label: 'People Manager', icon: 'users' },
  { label: 'HR or People Ops', icon: 'heart' },
  { label: 'Executive or Founder', icon: 'briefcase' },
  { label: 'Team or Project Lead', icon: 'flag' },
  { label: 'New or Aspiring Manager', icon: 'trending-up' },
];

const TEAM_SIZES: { value: TeamSize; label: string }[] = [
  { value: 'none', label: 'No direct reports yet' },
  { value: '1-5', label: '1 to 5 people' },
  { value: '6-15', label: '6 to 15 people' },
  { value: '16-50', label: '16 to 50 people' },
  { value: '50+', label: 'More than 50' },
];

const TIMES = [
  { hour: 7, minute: 30 },
  { hour: 8, minute: 0 },
  { hour: 9, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 17, minute: 0 },
];

const STEPS = ['welcome', 'name', 'role', 'team', 'focus', 'reminder', 'account'] as const;

export default function Onboarding() {
  const { progress, updateProfile } = useAppState();
  const account = useAccount();
  // From Profile, people edit their answers without the welcome screen or sign up step.
  const editing = useLocalSearchParams<{ edit?: string }>().edit === '1';
  const steps = STEPS.filter((s) => (s !== 'account' || (account.enabled && !account.session)) && !(editing && (s === 'welcome' || s === 'account')));
  const [i, setI] = useState(0);
  const [name, setName] = useState(progress.name);
  const [role, setRole] = useState(progress.role);
  const [team, setTeam] = useState<TeamSize | null>(progress.teamSize);
  const [focus, setFocus] = useState<AreaId[]>(progress.focusAreas);
  const [time, setTime] = useState({ hour: progress.reminder.hour, minute: progress.reminder.minute });
  const step = steps[i];

  const finish = () => {
    updateProfile({ onboarded: true });
    if (editing) router.back();
    else router.replace('/');
  };

  const next = async () => {
    if (step === 'name') updateProfile({ name: name.trim() });
    if (step === 'role') updateProfile({ role });
    if (step === 'team') updateProfile({ teamSize: team });
    if (step === 'focus') updateProfile({ focusAreas: focus });
    if (i < steps.length - 1) setI(i + 1);
    else finish();
  };

  const chooseReminder = async (enabled: boolean) => {
    const granted = enabled ? await requestReminderPermission() : false;
    updateProfile({ reminder: { enabled: enabled && (granted || Platform.OS === 'web'), ...time } });
    if (i < steps.length - 1) setI(i + 1);
    else finish();
  };

  const toggleFocus = (id: AreaId) => setFocus((f) => (f.includes(id) ? f.filter((x) => x !== id) : f.length >= 2 ? [f[1], id] : [...f, id]));

  const canContinue = step === 'name' ? name.trim().length > 0 : step === 'role' ? !!role : step === 'team' ? !!team : step === 'focus' ? focus.length > 0 : true;

  if (step === 'welcome') {
    return (
      <LinearGradient colors={gradients.welcome} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
        <SafeAreaView style={s.welcome}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={s.logo}>
              <Feather name="message-circle" size={34} color={colors.primary} />
            </View>
            <Text style={s.brand}>Rapport</Text>
            <Text style={s.welcomeTitle}>Lead with connection.</Text>
            <Text style={s.welcomeBody}>Build the conversations that build great teams. A few minutes a day of real scenarios, AI practice, and coaching.</Text>
            <View style={{ gap: 14, marginTop: 34 }}>
              {[
                ['git-branch', 'Daily scenarios from real workplace moments'],
                ['mic', 'Rehearse hard conversations with an AI partner'],
                ['award', 'Earn XP, streaks, and badges as you grow'],
              ].map(([icon, text]) => (
                <View key={text} style={s.perk}>
                  <View style={s.perkIcon}>
                    <Feather name={icon as never} size={18} color="#fff" />
                  </View>
                  <Text style={s.perkText}>{text}</Text>
                </View>
              ))}
            </View>
          </View>
          <Button label="Get started" icon="arrow-right" variant="light" onPress={next} />
          {account.enabled ? (
            <Pressable onPress={() => router.push('/sign-in')} style={{ paddingVertical: 18 }}>
              <Text style={s.haveAccount}>I already have an account</Text>
            </Pressable>
          ) : (
            <View style={{ height: 30 }} />
          )}
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={s.screen}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={s.top}>
          <Pressable onPress={() => (i === 0 ? router.back() : setI(i - 1))} hitSlop={12} style={s.back}>
            <Feather name="chevron-left" size={22} color={colors.ink} />
          </Pressable>
          <View style={s.dots}>
            {steps.slice(editing ? 0 : 1).map((_, k) => (
              <View key={k} style={[s.dot, k < i + (editing ? 1 : 0) && { backgroundColor: colors.primary, width: 22 }]} />
            ))}
          </View>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={s.body} keyboardShouldPersistTaps="handled">
          {step === 'name' ? (
            <>
              <Eyebrow color={colors.primary}>Let’s get acquainted</Eyebrow>
              <Text style={s.q}>What should we call you?</Text>
              <TextInput value={name} onChangeText={setName} placeholder="First name" placeholderTextColor={colors.faint} style={s.input} autoFocus autoCapitalize="words" returnKeyType="next" onSubmitEditing={() => canContinue && next()} />
            </>
          ) : null}

          {step === 'role' ? (
            <>
              <Eyebrow color={colors.primary}>Your role</Eyebrow>
              <Text style={s.q}>Which best describes you, {name.trim()}?</Text>
              <View style={{ gap: 10, marginTop: 22 }}>
                {ROLES.map((r) => (
                  <Option key={r.label} selected={role === r.label} onPress={() => setRole(r.label)}>
                    <IconBubble icon={r.icon as never} color={colors.primary} soft={colors.primarySoft} size={38} />
                    <Text style={s.optText}>{r.label}</Text>
                  </Option>
                ))}
              </View>
            </>
          ) : null}

          {step === 'team' ? (
            <>
              <Eyebrow color={colors.primary}>Your team</Eyebrow>
              <Text style={s.q}>How many people do you lead?</Text>
              <Text style={s.hint}>This helps Coach Ari tailor scenarios and advice.</Text>
              <View style={{ gap: 10, marginTop: 22 }}>
                {TEAM_SIZES.map((t) => (
                  <Option key={t.value} selected={team === t.value} onPress={() => setTeam(t.value)}>
                    <Text style={s.optText}>{t.label}</Text>
                  </Option>
                ))}
              </View>
            </>
          ) : null}

          {step === 'focus' ? (
            <>
              <Eyebrow color={colors.primary}>Your goals</Eyebrow>
              <Text style={s.q}>Where do you want to grow most?</Text>
              <Text style={s.hint}>Pick up to two. You’ll see more of these first.</Text>
              <View style={s.grid}>
                {AREAS.map((a) => {
                  const on = focus.includes(a.id);
                  return (
                    <Pressable key={a.id} onPress={() => toggleFocus(a.id)} style={[s.tile, on && { borderColor: a.color, backgroundColor: a.soft }]}>
                      <IconBubble icon={a.icon as never} color={a.color} soft={on ? '#fff' : a.soft} size={42} />
                      <Text style={s.tileTitle}>{a.title}</Text>
                      <Text style={s.tileSub}>{a.tagline}</Text>
                      {on ? (
                        <View style={[s.check, { backgroundColor: a.color }]}>
                          <Feather name="check" size={12} color="#fff" />
                        </View>
                      ) : null}
                    </Pressable>
                  );
                })}
              </View>
            </>
          ) : null}

          {step === 'reminder' ? (
            <>
              <View style={s.bell}>
                <Feather name="bell" size={30} color={colors.amber} />
              </View>
              <Eyebrow color={colors.primary}>Build the habit</Eyebrow>
              <Text style={s.q}>When should we nudge you?</Text>
              <Text style={s.hint}>A few minutes a day builds skills that stick far better than an occasional workshop. We’ll remind you on weekdays.</Text>
              <View style={s.times}>
                {TIMES.map((t) => {
                  const on = t.hour === time.hour && t.minute === time.minute;
                  return (
                    <Pressable key={`${t.hour}:${t.minute}`} onPress={() => setTime(t)} style={[s.time, on && s.timeOn]}>
                      <Text style={[s.timeText, on && { color: '#fff' }]}>{formatTime(t.hour, t.minute)}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </>
          ) : null}

          {step === 'account' ? <AccountStep onDone={finish} /> : null}
        </ScrollView>

        {step === 'reminder' ? (
          <View style={s.footer}>
            <Button label={`Remind me at ${formatTime(time.hour, time.minute)}`} icon="bell" onPress={() => chooseReminder(true)} />
            <Pressable onPress={() => chooseReminder(false)} style={{ paddingVertical: 14 }}>
              <Text style={s.skip}>Not now</Text>
            </Pressable>
          </View>
        ) : step !== 'account' ? (
          <View style={s.footer}>
            <Button label="Continue" icon="arrow-right" disabled={!canContinue} onPress={next} />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Option({ selected, onPress, children }: { selected: boolean; onPress: () => void; children: React.ReactNode }) {
  return (
    <Pressable onPress={onPress} style={[s.option, selected && s.optionOn]}>
      {children}
      <View style={[s.radio, selected && s.radioOn]}>{selected ? <View style={s.radioDot} /> : null}</View>
    </Pressable>
  );
}

function AccountStep({ onDone }: { onDone: () => void }) {
  const { signUp } = useAccount();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const create = async () => {
    setBusy(true);
    setMsg(null);
    const { error, needsConfirmation } = await signUp(email, password);
    setBusy(false);
    if (error) return setMsg(error);
    if (needsConfirmation) return setMsg('Check your email to confirm your account, then sign in from Profile. Your progress is saved on this device in the meantime.');
    onDone();
  };

  return (
    <>
      <Eyebrow color={colors.primary}>Last step</Eyebrow>
      <Text style={s.q}>Save your progress</Text>
      <Text style={s.hint}>Create a free account to back up your streak and XP and pick up on any device.</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Work email" placeholderTextColor={colors.faint} style={s.input} autoCapitalize="none" keyboardType="email-address" autoComplete="email" />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password (8+ characters)" placeholderTextColor={colors.faint} style={[s.input, { marginTop: 12 }]} secureTextEntry autoComplete="new-password" />
      {msg ? <Text style={s.error}>{msg}</Text> : null}
      <Button label={busy ? 'Creating account...' : 'Create account'} icon="check" disabled={busy || !email.includes('@') || password.length < 8} onPress={create} style={{ marginTop: 20 }} />
      <Pressable onPress={onDone} style={{ paddingVertical: 16 }}>
        <Text style={s.skip}>{msg?.startsWith('Check your email') ? 'Continue' : 'Continue as guest'}</Text>
      </Pressable>
    </>
  );
}

const s = StyleSheet.create({
  welcome: { flex: 1, paddingHorizontal: 28 },
  logo: { width: 68, height: 68, borderRadius: 22, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  brand: { fontFamily: fonts.bold, fontSize: 14, letterSpacing: 3, color: '#8FE3E8', marginTop: 26, textTransform: 'uppercase' },
  welcomeTitle: { fontFamily: fonts.display, fontSize: 40, lineHeight: 46, color: '#fff', marginTop: 8 },
  welcomeBody: { fontFamily: fonts.body, fontSize: 17, lineHeight: 25, color: 'rgba(255,255,255,0.85)', marginTop: 14 },
  perk: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  perkIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.16)', alignItems: 'center', justifyContent: 'center' },
  perkText: { flex: 1, fontFamily: fonts.medium, fontSize: 15, color: '#fff' },
  haveAccount: { fontFamily: fonts.semibold, fontSize: 15, color: '#fff', textAlign: 'center' },
  screen: { flex: 1, backgroundColor: colors.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 },
  back: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  dots: { flexDirection: 'row', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.line },
  body: { paddingHorizontal: 24, paddingTop: 18, paddingBottom: 30 },
  q: { fontFamily: fonts.display, fontSize: 30, lineHeight: 38, color: colors.ink, marginTop: 10 },
  hint: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.muted, marginTop: 8 },
  input: { backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, paddingHorizontal: 18, height: 56, fontFamily: fonts.body, fontSize: 17, color: colors.ink, marginTop: 24, outlineStyle: 'none' } as never,
  option: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 2, borderColor: colors.line, paddingHorizontal: 16, paddingVertical: 14 },
  optionOn: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  optText: { flex: 1, fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: colors.faint, alignItems: 'center', justifyContent: 'center' },
  radioOn: { borderColor: colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 22 },
  tile: { width: '47.5%', backgroundColor: '#fff', borderRadius: radius.lg, borderWidth: 2, borderColor: colors.line, padding: 16 },
  tileTitle: { fontFamily: fonts.bold, fontSize: 15, color: colors.ink, marginTop: 12 },
  tileSub: { fontFamily: fonts.body, fontSize: 12, color: colors.muted, marginTop: 3, lineHeight: 17 },
  check: { position: 'absolute', top: 12, right: 12, width: 22, height: 22, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  bell: { width: 64, height: 64, borderRadius: 22, backgroundColor: colors.amberSoft, alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  times: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 24 },
  time: { paddingHorizontal: 18, paddingVertical: 12, borderRadius: radius.pill, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.line },
  timeOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  timeText: { fontFamily: fonts.semibold, fontSize: 15, color: colors.ink },
  footer: { paddingHorizontal: 24, paddingBottom: 12, paddingTop: 8 },
  skip: { fontFamily: fonts.semibold, fontSize: 15, color: colors.muted, textAlign: 'center' },
  error: { fontFamily: fonts.medium, fontSize: 14, color: colors.coral, marginTop: 12, lineHeight: 20 },
});
