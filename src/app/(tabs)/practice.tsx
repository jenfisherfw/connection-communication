import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Chip, Screen, SectionHeader, Title } from '../../components/ui';
import { useContent } from '../../data/localized';
import { useT } from '../../i18n';
import { useAppState } from '../../state/AppState';
import { colors, gradients, fonts, radius } from '../../theme';

const DIFF = {
  'Warm up': { color: colors.success, soft: colors.successSoft },
  Moderate: { color: '#B26B00', soft: colors.amberSoft },
  Tough: { color: colors.coral, soft: colors.coralSoft },
};

export default function Practice() {
  const { progress } = useAppState();
  const { t } = useT();
  const { ROLEPLAYS, SCENARIOS, areaById } = useContent();
  const reps = Object.keys(progress.completed).filter((k) => k.startsWith('roleplay:')).length;

  return (
    <Screen>
      <Title style={{ marginTop: 12 }}>{t('Practice')}</Title>
      <Text style={s.sub}>{t('Rehearse the conversations that matter, before they happen')}</Text>

      <LinearGradient colors={gradients.deep} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={s.hero}>
        <View style={{ flex: 1 }}>
          <Text style={s.heroEyebrow}>{t('Practice arena').toUpperCase()}</Text>
          <Text style={s.heroTitle}>{t('Talk it through with an AI partner who reacts like a real person.')}</Text>
          <View style={s.heroStats}>
            <Text style={s.heroStat}>🎙️ {reps === 1 ? t('1 rep completed') : t('{n} reps completed', { n: reps })}</Text>
            <Text style={s.heroStat}>⭐ {t('Scored feedback')}</Text>
          </View>
        </View>
      </LinearGradient>

      <SectionHeader title={t('Role plays')} />
      {ROLEPLAYS.map((rp) => {
        const a = areaById(rp.area);
        const d = DIFF[rp.difficulty];
        const best = progress.completed[`roleplay:${rp.id}`]?.score;
        return (
          <Card key={rp.id} style={s.rp} onPress={() => router.push(`/roleplay/${rp.id}`)}>
            <View style={[s.avatar, { backgroundColor: a.soft }]}>
              <Text style={[s.avatarText, { color: a.color }]}>{rp.person[0]}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.rpTitle}>{rp.title}</Text>
              <Text style={s.rpSub}>
                {rp.person}, {rp.role}
              </Text>
              <View style={s.chips}>
                <Chip label={t(rp.difficulty)} color={d.color} soft={d.soft} />
                <Chip label={a.title} color={a.color} soft={a.soft} />
                {best !== undefined ? <Chip icon="award" label={t('Best {n}', { n: Math.round(best * 100) })} color={colors.primary} soft={colors.primarySoft} /> : null}
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 6 }}>
              <Text style={s.xp}>+{rp.xp} XP</Text>
              <Feather name="play-circle" size={26} color={colors.primary} />
            </View>
          </Card>
        );
      })}

      <Card style={s.tool} onPress={() => router.push('/change-message')}>
        <View style={s.toolIcon}>
          <Feather name="trending-up" size={22} color={colors.blue} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.rpTitle}>{t('Change Message Builder')}</Text>
          <Text style={s.rpSub}>{t('Draft a change announcement people can get behind, then polish it with Ari')}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.faint} />
      </Card>

      <Card style={s.tool} onPress={() => router.push('/tone-check')}>
        <View style={[s.toolIcon, { backgroundColor: colors.skySoft }]}>
          <Feather name="send" size={22} color={colors.sky} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.rpTitle}>{t('Tone Check')}</Text>
          <Text style={s.rpSub}>{t('Paste an email or chat message and see how it will land before you send it')}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.faint} />
      </Card>

      <Card style={s.custom} onPress={() => router.push({ pathname: '/coach', params: { seed: t('I want to rehearse a conversation. Here is the situation: ') } })}>
        <Feather name="plus-circle" size={24} color={colors.primary} />
        <View style={{ flex: 1 }}>
          <Text style={s.rpTitle}>{t('Rehearse your own situation')}</Text>
          <Text style={s.rpSub}>{t('Describe it and Coach Ari will play the other person')}</Text>
        </View>
      </Card>

      <SectionHeader title={t('Quick scenarios')} />
      {SCENARIOS.map((sc) => {
        const a = areaById(sc.area);
        const done = !!progress.completed[`scenario:${sc.id}`];
        return (
          <Card key={sc.id} style={s.sc} onPress={() => router.push(`/scenario/${sc.id}`)}>
            <View style={[s.scBar, { backgroundColor: a.color }]} />
            <View style={{ flex: 1 }}>
              <Text style={s.rpTitle}>{sc.title}</Text>
              <Text style={s.rpSub} numberOfLines={2}>
                {sc.setup}
              </Text>
            </View>
            {done ? <Feather name="check-circle" size={22} color={colors.success} /> : <Text style={s.xp}>+{sc.xp}</Text>}
          </Card>
        );
      })}
    </Screen>
  );
}

const s = StyleSheet.create({
  sub: { fontFamily: fonts.body, fontSize: 16, color: colors.muted, marginTop: 4 },
  hero: { borderRadius: radius.xl, padding: 22, marginTop: 20, flexDirection: 'row' },
  heroEyebrow: { fontFamily: fonts.bold, fontSize: 11, letterSpacing: 1.6, color: '#8FE3E8' },
  heroTitle: { fontFamily: fonts.display, fontSize: 21, lineHeight: 28, color: '#fff', marginTop: 10 },
  heroStats: { flexDirection: 'row', gap: 16, marginTop: 16 },
  heroStat: { fontFamily: fonts.medium, fontSize: 13, color: 'rgba(255,255,255,0.85)' },
  rp: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 },
  avatar: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.display, fontSize: 22 },
  rpTitle: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  rpSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2, lineHeight: 18 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  xp: { fontFamily: fonts.bold, fontSize: 12, color: colors.primary },
  tool: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 },
  toolIcon: { width: 48, height: 48, borderRadius: 15, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center' },
  custom: { flexDirection: 'row', alignItems: 'center', gap: 14, borderWidth: 1.5, borderColor: '#C9D6EA', borderStyle: 'dashed', backgroundColor: '#F5F8FC' },
  sc: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 },
  scBar: { width: 4, alignSelf: 'stretch', borderRadius: 2 },
});
