import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Platform, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { LanguagePicker } from '../../components/LanguagePicker';
import { Card, Eyebrow, Row, Screen, Title } from '../../components/ui';
import { useContent } from '../../data/localized';
import { useT } from '../../i18n';
import { coachIsLive } from '../../services/coach';
import { formatTime, requestReminderPermission } from '../../services/reminders';
import { useAccount } from '../../state/Account';
import { levelFor, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

export default function Profile() {
  const { progress, reset, updateProfile } = useAppState();
  const account = useAccount();
  const { t, lang } = useT();
  const { AREAS, levelTitle } = useContent();
  const level = levelFor(progress.xp);
  const [leaderboard, setLeaderboard] = useState(true);
  const { reminder } = progress;
  const focus = progress.focusAreas.map((id) => AREAS.find((a) => a.id === id)?.title).filter(Boolean).join(', ');

  const toggleReminder = async (on: boolean) => {
    if (on && Platform.OS !== 'web' && !(await requestReminderPermission())) {
      Alert.alert(t('Notifications are off'), t('Turn on notifications for Rapport in your phone settings to get daily reminders.'));
      return;
    }
    updateProfile({ reminder: { ...reminder, enabled: on } });
  };

  const TIMES = [7.5, 8, 9, 12, 17];
  const cycleTime = () => {
    const cur = reminder.hour + reminder.minute / 60;
    const next = TIMES[(TIMES.indexOf(cur) + 1) % TIMES.length] ?? 8;
    updateProfile({ reminder: { ...reminder, hour: Math.floor(next), minute: (next % 1) * 60 } });
  };

  const confirmDelete = () => {
    const title = account.signedIn ? t('Delete your account?') : t('Erase your data?');
    const body = account.signedIn
      ? t('This permanently deletes your account, progress, reflections, and badges from this device and our servers. This cannot be undone.')
      : t('This permanently erases your progress, reflections, and badges from this device and our servers. This cannot be undone.');
    const go = async () => {
      const failed = await account.deleteAccount();
      const error = failed ? t(failed) : null;
      if (error) {
        if (Platform.OS === 'web') window.alert(error);
        else Alert.alert(t('Something went wrong'), error);
        return;
      }
      router.replace('/onboarding');
    };
    if (Platform.OS === 'web') {
      if (window.confirm(`${title}\n\n${body}`)) go();
      return;
    }
    Alert.alert(title, body, [
      { text: t('Cancel'), style: 'cancel' },
      { text: account.signedIn ? t('Delete account') : t('Erase'), style: 'destructive', onPress: go },
    ]);
  };

  const confirmReset = () => {
    const go = () => {
      reset();
      router.replace('/');
    };
    if (Platform.OS === 'web') return go();
    Alert.alert(t('Reset progress?'), t('This clears your XP, streak, and badges. Your profile stays.'), [
      { text: t('Cancel'), style: 'cancel' },
      { text: t('Reset'), style: 'destructive', onPress: go },
    ]);
  };

  return (
    <Screen>
      <Title style={{ marginTop: 12 }}>{t('Profile')}</Title>

      <Card style={{ marginTop: 18, padding: 0 }}>
        <View style={s.me}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>{progress.name[0]}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{progress.name}</Text>
            <Text style={s.role}>{t(progress.role)}</Text>
            <Text style={s.level}>
              {t('Level {n}', { n: level.level })} · {levelTitle(level.level)}
            </Text>
          </View>
          <Pressable style={s.edit}>
            <Text style={s.editText}>{t('Edit')}</Text>
          </Pressable>
        </View>
        <View style={s.plan}>
          <Feather name="briefcase" size={20} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={s.planTitle}>{t('Free Plan')}</Text>
            <Text style={s.planSub}>{t('Unlock unlimited AI practice and team insights')}</Text>
          </View>
          <Pressable style={s.upgrade}>
            <Text style={s.upgradeText}>{t('Upgrade')}</Text>
          </Pressable>
        </View>
      </Card>

      <Card style={s.team} onPress={() => {}}>
        <View style={s.teamIcon}>
          <Feather name="users" size={24} color={colors.teal} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.teamTitle}>{t('Invite your team')}</Text>
          <Text style={s.planSub}>{t('Shared challenges, team pulse, and leaderboards')}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.faint} />
      </Card>

      <Eyebrow style={s.section}>{t('Language')}</Eyebrow>
      <Card style={[s.group, { padding: 16 }]}>
        <LanguagePicker />
        <Text style={s.langNote}>{t('Changes the app, the content library, and Coach Ari’s replies.')}</Text>
      </Card>

      <Eyebrow style={s.section}>{t('Preferences')}</Eyebrow>
      <Card style={s.group}>
        <Row icon="bell" title={t('Daily reminder')} subtitle={reminder.enabled ? t('Weekdays') : t('Off')} right={<Switch value={reminder.enabled} onValueChange={toggleReminder} trackColor={{ true: colors.primary, false: colors.line }} />} />
        {reminder.enabled ? <Row icon="clock" title={t('Reminder time')} subtitle={t('Tap to change')} onPress={cycleTime} right={<Text style={s.value}>{formatTime(reminder.hour, reminder.minute, lang)}</Text>} /> : null}
        <Row icon="bar-chart-2" title={t('Show me on leaderboards')} right={<Switch value={leaderboard} onValueChange={setLeaderboard} trackColor={{ true: colors.primary, false: colors.line }} />} />
        <Row icon="target" title={t('Focus areas and role')} subtitle={focus || t('Not set')} onPress={() => router.push({ pathname: '/onboarding', params: { edit: '1' } })} last />
      </Card>

      <Eyebrow style={s.section}>{t('Account')}</Eyebrow>
      <Card style={s.group}>
        {!account.enabled ? (
          <Row icon="cloud-off" title={t('Saved on this device')} subtitle={t('Cloud backup turns on when accounts are set up')} right={<View />} last />
        ) : account.signedIn ? (
          <>
            <Row icon="cloud" iconColor={colors.success} iconSoft={colors.successSoft} title={t('Backed up')} subtitle={account.email ?? ''} right={<View />} />
            <Row icon="log-out" title={t('Sign out')} onPress={() => account.signOut()} last />
          </>
        ) : (
          <Row icon="log-in" iconColor={colors.primary} iconSoft={colors.primarySoft} title={t('Sign in or create account')} subtitle={t('Back up your streak and XP')} onPress={() => router.push('/sign-in')} last />
        )}
      </Card>

      <Eyebrow style={s.section}>{t('Coach')}</Eyebrow>
      <Card style={s.group}>
        <Row
          icon="cpu"
          iconColor={colors.primary}
          iconSoft={colors.primarySoft}
          title={t('AI coach status')}
          subtitle={coachIsLive && account.session ? t('Connected') : coachIsLive ? t('Connecting...') : t('Demo mode (scripted replies)')}
          right={<View style={[s.status, { backgroundColor: coachIsLive && account.session ? colors.success : colors.amber }]} />}
        />
        <Row icon="shield" title={t('Privacy & Data')} subtitle={t('Your reflections are private to you')} last />
      </Card>

      <Eyebrow style={s.section}>{t('Help and support')}</Eyebrow>
      <Card style={s.group}>
        <Row
          icon="life-buoy"
          iconColor={colors.coral}
          iconSoft={colors.coralSoft}
          title={t('Safety & Support Resources')}
          subtitle={t('When a conversation needs more than a manager')}
          onPress={() =>
            Alert.alert(
              t('Safety & Support Resources'),
              t('If anyone is in immediate danger, call 911 or your local emergency number.\n\nFor someone in crisis, call or text 988 (Suicide & Crisis Lifeline, US).\n\nFor harassment, discrimination, safety, or policy concerns, contact your HR team and follow your company policy. Your Employee Assistance Program (EAP) can also help.'),
            )
          }
        />
        <Row icon="book-open" title={t('Recommended Reading')} subtitle={t('Radical Candor, Crucial Conversations, and more')} />
        <Row icon="message-square" title={t('Send Feedback')} last />
      </Card>

      <Pressable onPress={confirmDelete} style={s.reset}>
        <Feather name="trash-2" size={16} color={colors.coral} />
        <Text style={[s.resetText, { color: colors.coral }]}>{account.signedIn ? t('Delete account') : t('Erase my data')}</Text>
      </Pressable>
      <Pressable onPress={confirmReset} style={[s.reset, { marginTop: 14 }]}>
        <Feather name="rotate-ccw" size={16} color={colors.muted} />
        <Text style={s.resetText}>{t('Reset progress')}</Text>
      </Pressable>
      <Text style={s.version}>Rapport v0.1.0 (MVP)</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  me: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 18 },
  avatar: { width: 64, height: 64, borderRadius: 32, borderWidth: 3, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primarySoft },
  avatarText: { fontFamily: fonts.display, fontSize: 28, color: colors.primary },
  name: { fontFamily: fonts.display, fontSize: 24, color: colors.ink },
  role: { fontFamily: fonts.body, fontSize: 14, color: colors.muted, marginTop: 2 },
  level: { fontFamily: fonts.semibold, fontSize: 12, color: colors.primary, marginTop: 4 },
  edit: { backgroundColor: colors.primarySoft, paddingHorizontal: 16, paddingVertical: 9, borderRadius: radius.pill },
  editText: { fontFamily: fonts.semibold, fontSize: 14, color: colors.primary },
  plan: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 18, borderTopWidth: 1, borderTopColor: colors.line },
  planTitle: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  planSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2 },
  upgrade: { backgroundColor: colors.primary, paddingHorizontal: 18, paddingVertical: 10, borderRadius: radius.pill },
  upgradeText: { fontFamily: fonts.semibold, fontSize: 14, color: '#fff' },
  team: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 14 },
  teamIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: colors.tealSoft, alignItems: 'center', justifyContent: 'center' },
  teamTitle: { fontFamily: fonts.display, fontSize: 20, color: colors.ink },
  section: { marginTop: 28, marginBottom: 10, marginLeft: 4 },
  group: { padding: 0, overflow: 'hidden' },
  status: { width: 10, height: 10, borderRadius: 5 },
  value: { fontFamily: fonts.semibold, fontSize: 15, color: colors.primary },
  reset: { flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', marginTop: 28 },
  resetText: { fontFamily: fonts.medium, fontSize: 15, color: colors.muted },
  langNote: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 12, lineHeight: 18 },
  version: { fontFamily: fonts.body, fontSize: 12, color: colors.faint, textAlign: 'center', marginTop: 10 },
});
