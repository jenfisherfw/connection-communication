import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useContent } from '../data/localized';
import { useT } from '../i18n';
import { AwardResult } from '../state/AppState';
import { colors, gradients, fonts, radius } from '../theme';

export function Reward({ result, headline }: { result: AwardResult; headline: string }) {
  const { t } = useT();
  const { BADGES, LEVELS } = useContent();
  const badges = BADGES.filter((b) => result.newBadges.includes(b.id));
  const level = result.levelUp ? LEVELS.find((l) => l.level === result.levelUp) : null;
  return (
    <View style={{ gap: 12 }}>
      <LinearGradient colors={gradients.brand} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={s.hero}>
        <View style={s.burst}>
          <Feather name="zap" size={30} color={colors.amber} />
        </View>
        <Text style={s.headline}>{headline}</Text>
        <View style={s.statsRow}>
          <View style={s.stat}>
            <Text style={s.statNum}>+{result.xp}</Text>
            <Text style={s.statLabel}>{t('XP earned')}</Text>
          </View>
          <View style={s.divider} />
          <View style={s.stat}>
            <Text style={s.statNum}>🔥 {result.streak}</Text>
            <Text style={s.statLabel}>{t('Day streak')}</Text>
          </View>
        </View>
      </LinearGradient>
      {level ? (
        <View style={[s.pill, { backgroundColor: colors.amberSoft }]}>
          <Feather name="trending-up" size={18} color={colors.amber} />
          <Text style={s.pillText}>
            {t('Level up! You are now:')} <Text style={{ fontFamily: fonts.bold }}>{level.title}</Text>
          </Text>
        </View>
      ) : null}
      {badges.map((b) => (
        <View key={b.id} style={[s.pill, { backgroundColor: colors.card }]}>
          <View style={[s.badgeDot, { backgroundColor: b.color }]}>
            <Feather name={b.icon as never} size={16} color="#fff" />
          </View>
          <Text style={s.pillText}>
            {t('Badge unlocked:')} <Text style={{ fontFamily: fonts.bold }}>{b.title}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  hero: { borderRadius: radius.xl, padding: 24, alignItems: 'center' },
  burst: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.16)', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  headline: { fontFamily: fonts.display, fontSize: 26, color: '#fff', textAlign: 'center' },
  statsRow: { flexDirection: 'row', marginTop: 18, alignItems: 'center' },
  stat: { alignItems: 'center', paddingHorizontal: 24 },
  statNum: { fontFamily: fonts.bold, fontSize: 24, color: '#fff' },
  statLabel: { fontFamily: fonts.medium, fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  divider: { width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.25)' },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: radius.md },
  pillText: { fontFamily: fonts.medium, fontSize: 15, color: colors.ink, flex: 1 },
  badgeDot: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
});
