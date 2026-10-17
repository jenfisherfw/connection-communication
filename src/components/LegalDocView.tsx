import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LegalDoc } from '../data/legal';
import { useT } from '../i18n';
import { colors, fonts } from '../theme';
import { BackHeader, Screen } from './ui';

/** Shows the privacy policy or terms. They are written in English; other languages get a note saying so. */
export function LegalDocView({ doc }: { doc: LegalDoc }) {
  const { t, lang } = useT();
  return (
    <Screen>
      <BackHeader title={t(doc.title)} onBack={() => (router.canGoBack() ? router.back() : router.replace('/profile'))} />
      {lang !== 'en' ? <Text style={s.note}>{t('This document is provided in English.')}</Text> : null}
      <Text style={s.title}>{doc.title}</Text>
      <Text style={s.updated}>Last updated {doc.updated}</Text>
      <Text style={s.body}>{doc.intro}</Text>
      {doc.sections.map((sec) => (
        <View key={sec.heading} style={{ marginTop: 20 }}>
          <Text style={s.heading}>{sec.heading}</Text>
          {sec.paragraphs?.map((p) => (
            <Text key={p} style={[s.body, { marginTop: 6 }]}>
              {p}
            </Text>
          ))}
          {sec.bullets?.map((b) => (
            <View key={b} style={s.bulletRow}>
              <Text style={s.bulletDot}>•</Text>
              <Text style={[s.body, { flex: 1 }]}>{b}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={{ height: 30 }} />
    </Screen>
  );
}

const s = StyleSheet.create({
  note: { fontFamily: fonts.medium, fontSize: 13, color: colors.muted, marginBottom: 10 },
  title: { fontFamily: fonts.display, fontSize: 28, color: colors.ink },
  updated: { fontFamily: fonts.medium, fontSize: 13, color: colors.muted, marginTop: 4, marginBottom: 14 },
  heading: { fontFamily: fonts.bold, fontSize: 17, color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.body },
  bulletRow: { flexDirection: 'row', gap: 8, marginTop: 6 },
  bulletDot: { fontFamily: fonts.bold, fontSize: 15, lineHeight: 23, color: colors.primary },
});
