import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { Card, Eyebrow, Row, Screen, Title } from '../../components/ui';
import { coachIsLive } from '../../services/coach';
import { levelFor, useAppState } from '../../state/AppState';
import { colors, fonts, radius } from '../../theme';

export default function Profile() {
  const { progress, reset } = useAppState();
  const level = levelFor(progress.xp);
  const [reminders, setReminders] = useState(true);
  const [leaderboard, setLeaderboard] = useState(true);

  return (
    <Screen>
      <Title style={{ marginTop: 12 }}>Profile</Title>

      <Card style={{ marginTop: 18, padding: 0 }}>
        <View style={s.me}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>{progress.name[0]}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{progress.name}</Text>
            <Text style={s.role}>{progress.role}</Text>
            <Text style={s.level}>
              Level {level.level} · {level.title}
            </Text>
          </View>
          <Pressable style={s.edit}>
            <Text style={s.editText}>Edit</Text>
          </Pressable>
        </View>
        <View style={s.plan}>
          <Feather name="briefcase" size={20} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={s.planTitle}>Free Plan</Text>
            <Text style={s.planSub}>Unlock unlimited AI practice and team insights</Text>
          </View>
          <Pressable style={s.upgrade}>
            <Text style={s.upgradeText}>Upgrade</Text>
          </Pressable>
        </View>
      </Card>

      <Card style={s.team} onPress={() => {}}>
        <View style={s.teamIcon}>
          <Feather name="users" size={24} color={colors.teal} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.teamTitle}>Invite your team</Text>
          <Text style={s.planSub}>Shared challenges, team pulse, and leaderboards</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.faint} />
      </Card>

      <Eyebrow style={s.section}>Preferences</Eyebrow>
      <Card style={s.group}>
        <Row icon="bell" title="Daily reminder" subtitle="8:00 AM, weekdays" right={<Switch value={reminders} onValueChange={setReminders} trackColor={{ true: colors.primary, false: colors.line }} />} />
        <Row icon="bar-chart-2" title="Show me on leaderboards" right={<Switch value={leaderboard} onValueChange={setLeaderboard} trackColor={{ true: colors.primary, false: colors.line }} />} />
        <Row icon="target" title="Focus areas" subtitle="Feedback, Conflict" />
        <Row icon="briefcase" title="My role and team size" subtitle="Helps Coach Ari tailor advice" last />
      </Card>

      <Eyebrow style={s.section}>Coach</Eyebrow>
      <Card style={s.group}>
        <Row
          icon="cpu"
          iconColor={colors.primary}
          iconSoft={colors.primarySoft}
          title="AI coach status"
          subtitle={coachIsLive ? 'Connected' : 'Demo mode (scripted replies)'}
          right={<View style={[s.status, { backgroundColor: coachIsLive ? colors.success : colors.amber }]} />}
        />
        <Row icon="shield" title="Privacy & Data" subtitle="Your reflections are private to you" last />
      </Card>

      <Eyebrow style={s.section}>Help and support</Eyebrow>
      <Card style={s.group}>
        <Row icon="life-buoy" iconColor={colors.coral} iconSoft={colors.coralSoft} title="Employee Assistance Resources" subtitle="When a conversation needs more than a manager" />
        <Row icon="book-open" title="Recommended Reading" subtitle="Radical Candor, Crucial Conversations, and more" />
        <Row icon="message-square" title="Send Feedback" last />
      </Card>

      <Pressable onPress={() => { reset(); router.replace('/'); }} style={s.reset}>
        <Feather name="rotate-ccw" size={16} color={colors.muted} />
        <Text style={s.resetText}>Reset progress</Text>
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
  reset: { flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', marginTop: 28 },
  resetText: { fontFamily: fonts.medium, fontSize: 15, color: colors.muted },
  version: { fontFamily: fonts.body, fontSize: 12, color: colors.faint, textAlign: 'center', marginTop: 10 },
});
