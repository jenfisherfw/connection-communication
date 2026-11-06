import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LANGUAGES } from '../i18n';
import { useAppState } from '../state/AppState';
import { colors, fonts, radius } from '../theme';

/** A row of language pills. `dark` is for gradient backgrounds like the welcome screen. */
export function LanguagePicker({ dark = false }: { dark?: boolean }) {
  const { progress, updateProfile } = useAppState();
  return (
    <View style={s.row}>
      {LANGUAGES.map((l) => {
        const on = progress.language === l.code;
        return (
          <Pressable
            key={l.code}
            onPress={() => updateProfile({ language: l.code })}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            style={[s.pill, dark ? s.pillDark : s.pillLight, on && (dark ? s.onDark : s.onLight)]}
          >
            <Text style={[s.text, { color: dark ? (on ? colors.primary : '#fff') : on ? '#fff' : colors.ink }]}>{l.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.pill, borderWidth: 1 },
  pillDark: { borderColor: 'rgba(255,255,255,0.35)' },
  pillLight: { borderColor: colors.line, backgroundColor: '#fff' },
  onDark: { backgroundColor: '#fff', borderColor: '#fff' },
  onLight: { backgroundColor: colors.primary, borderColor: colors.primary },
  text: { fontFamily: fonts.semibold, fontSize: 14 },
});
