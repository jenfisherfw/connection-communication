import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts, radius, shadow } from '../theme';

type IconName = React.ComponentProps<typeof Feather>['name'];

export function Screen({ children, scroll = true, padded = true }: { children: React.ReactNode; scroll?: boolean; padded?: boolean }) {
  const inner = padded ? { paddingHorizontal: 20, paddingBottom: 40 } : undefined;
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {scroll ? (
        <ScrollView contentContainerStyle={inner} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={[{ flex: 1 }, inner]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

export function Title({ children, style }: { children: React.ReactNode; style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function Eyebrow({ children, color = colors.muted, style }: { children: React.ReactNode; color?: string; style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.eyebrow, { color }, style]}>{children}</Text>;
}

export function Card({ children, style, onPress }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [styles.card, style, pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] }]}>
        {children}
      </Pressable>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
}

export function IconBubble({ icon, color, soft, size = 44 }: { icon: IconName; color: string; soft: string; size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size * 0.32, backgroundColor: soft, alignItems: 'center', justifyContent: 'center' }}>
      <Feather name={icon} size={size * 0.46} color={color} />
    </View>
  );
}

export function ProgressBar({ pct, color = colors.primary, track = colors.line, height = 8 }: { pct: number; color?: string; track?: string; height?: number }) {
  return (
    <View style={{ height, borderRadius: height, backgroundColor: track, overflow: 'hidden' }}>
      <View style={{ width: `${Math.max(3, Math.round(pct * 100))}%`, height: '100%', borderRadius: height, backgroundColor: color }} />
    </View>
  );
}

export function Chip({ icon, label, color, soft }: { icon?: IconName; label: string; color: string; soft: string }) {
  return (
    <View style={[styles.chip, { backgroundColor: soft }]}>
      {icon ? <Feather name={icon} size={13} color={color} /> : null}
      <Text style={[styles.chipText, { color }]}>{label}</Text>
    </View>
  );
}

export function Button({ label, onPress, icon, variant = 'primary', disabled, style }: { label: string; onPress?: () => void; icon?: IconName; variant?: 'primary' | 'ghost' | 'light'; disabled?: boolean; style?: StyleProp<ViewStyle> }) {
  const bg = variant === 'primary' ? colors.primary : variant === 'light' ? '#fff' : colors.primarySoft;
  const fg = variant === 'primary' ? '#fff' : colors.primary;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.button, { backgroundColor: bg, opacity: disabled ? 0.45 : pressed ? 0.85 : 1 }, style]}
    >
      <Text style={[styles.buttonText, { color: fg }]}>{label}</Text>
      {icon ? <Feather name={icon} size={18} color={fg} /> : null}
    </Pressable>
  );
}

export function Row({ icon, iconColor = colors.body, iconSoft = colors.bg, title, subtitle, right, onPress, last }: { icon: IconName; iconColor?: string; iconSoft?: string; title: string; subtitle?: string; right?: React.ReactNode; onPress?: () => void; last?: boolean }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && { backgroundColor: '#FAFAFC' }]}>
      <IconBubble icon={icon} color={iconColor} soft={iconSoft} size={40} />
      <View style={[styles.rowBody, !last && styles.rowDivider]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.rowTitle}>{title}</Text>
          {subtitle ? <Text style={styles.rowSub}>{subtitle}</Text> : null}
        </View>
        {right ?? <Feather name="chevron-right" size={20} color={colors.faint} />}
      </View>
    </Pressable>
  );
}

export function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <View style={styles.sectionHeader}>
      <Eyebrow>{title}</Eyebrow>
      {action ? (
        <Pressable onPress={onAction}>
          <Text style={styles.sectionAction}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export function BackHeader({ title, onBack, right }: { title?: string; onBack: () => void; right?: React.ReactNode }) {
  return (
    <View style={styles.backHeader}>
      <Pressable onPress={onBack} hitSlop={12} style={styles.backBtn}>
        <Feather name="chevron-left" size={22} color={colors.ink} />
      </Pressable>
      <Text style={styles.backTitle} numberOfLines={1}>
        {title}
      </Text>
      <View style={{ minWidth: 40, alignItems: 'flex-end' }}>{right}</View>
    </View>
  );
}

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  title: { fontFamily: fonts.display, fontSize: 34, color: colors.ink, letterSpacing: -0.5 },
  eyebrow: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase' },
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 18, ...shadow },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.pill, alignSelf: 'flex-start' },
  chipText: { fontFamily: fonts.semibold, fontSize: 12 },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 15, paddingHorizontal: 22, borderRadius: radius.pill },
  buttonText: { fontFamily: fonts.semibold, fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingLeft: 16 },
  rowBody: { flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingRight: 16, gap: 8 },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: colors.line },
  rowTitle: { fontFamily: fonts.medium, fontSize: 16, color: colors.ink },
  rowSub: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, marginBottom: 12 },
  sectionAction: { fontFamily: fonts.semibold, fontSize: 13, color: colors.primary },
  backHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, gap: 8 },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.card, alignItems: 'center', justifyContent: 'center', ...shadow },
  backTitle: { flex: 1, textAlign: 'center', fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
});
