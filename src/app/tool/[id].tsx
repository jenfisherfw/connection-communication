import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, Share, StyleSheet, Text, View } from 'react-native';
import { BackHeader, Button, Card, Chip, IconBubble, Screen } from '../../components/ui';
import { useContent } from '../../data/localized';
import { categoryOf } from '../../data/toolkit/categories';
import { useT } from '../../i18n';
import { colors, fonts, radius } from '../../theme';

/** One Toolkit tool: guidance plus templates people can share or copy. */
export default function ToolScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useT();
  const { TOOLS } = useContent();
  const tool = TOOLS.find((x) => x.id === id);
  const [copied, setCopied] = useState<number | null>(null);

  if (!tool) {
    return (
      <Screen>
        <BackHeader title="" onBack={() => router.back()} />
        <Text style={s.body}>{t('This tool isn’t available.')}</Text>
      </Screen>
    );
  }
  const c = categoryOf(tool.category);

  const share = async (text: string, i: number) => {
    // On the web, copy to the clipboard; on phones, open the share sheet (which includes Copy).
    if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(text).catch(() => {});
    } else {
      await Share.share({ message: text }).catch(() => {});
    }
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  const tailor = () =>
    router.push({
      pathname: '/coach',
      params: { seed: `${t('Help me tailor the “{title}” tool to my situation. Here is my situation:', { title: tool.title })} ` },
    });

  return (
    <Screen>
      <BackHeader title={t('Toolkit')} onBack={() => (router.canGoBack() ? router.back() : router.replace('/toolkit'))} />
      <View style={[s.hero, { backgroundColor: c.soft }]}>
        <IconBubble icon={tool.icon as never} color={c.color} soft="#fff" size={56} />
        <View style={s.chips}>
          <Chip label={t(c.label)} color={c.color} soft="#fff" />
          <Chip icon="clock" label={t('{n} min', { n: tool.minutes })} color={colors.muted} soft="#fff" />
        </View>
        <Text style={s.title}>{tool.title}</Text>
        <Text style={s.summary}>{tool.summary}</Text>
      </View>

      {tool.sections.map((sec, i) => (
        <View key={i} style={{ marginTop: 22 }}>
          <Text style={s.heading}>{sec.heading}</Text>
          {sec.body ? <Text style={s.body}>{sec.body}</Text> : null}
          {sec.bullets?.map((b) => (
            <View key={b} style={s.bulletRow}>
              <View style={[s.dot, { backgroundColor: c.color }]} />
              <Text style={s.bullet}>{b}</Text>
            </View>
          ))}
          {sec.template ? (
            <Card style={s.template}>
              <Text style={s.templateText} selectable>
                {sec.template}
              </Text>
              <Pressable onPress={() => share(sec.template!, i)} style={s.copy}>
                <Feather name={copied === i ? 'check' : 'share'} size={16} color={copied === i ? colors.success : colors.primary} />
                <Text style={[s.copyText, copied === i && { color: colors.success }]}>{copied === i ? t('Ready to paste') : t('Share or copy')}</Text>
              </Pressable>
            </Card>
          ) : null}
        </View>
      ))}

      <Button label={t('Tailor this with Ari')} icon="message-circle" onPress={tailor} style={{ marginTop: 26 }} />
      <Text style={s.note}>{t('Ari can adapt this tool to your team, your situation, and your company’s way of working.')}</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  hero: { borderRadius: radius.xl, padding: 22, gap: 10, marginTop: 4 },
  chips: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 6 },
  title: { fontFamily: fonts.display, fontSize: 28, lineHeight: 35, color: colors.ink },
  summary: { fontFamily: fonts.body, fontSize: 16, lineHeight: 23, color: colors.body },
  heading: { fontFamily: fonts.bold, fontSize: 17, color: colors.ink, marginBottom: 8 },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.body },
  bulletRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginTop: 6 },
  dot: { width: 7, height: 7, borderRadius: 4, marginTop: 8 },
  bullet: { flex: 1, fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  template: { marginTop: 10, backgroundColor: '#FBFCFE', gap: 12 },
  templateText: { fontFamily: fonts.medium, fontSize: 14, lineHeight: 22, color: colors.ink },
  copy: { flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14, borderRadius: radius.pill, backgroundColor: colors.primarySoft },
  copyText: { fontFamily: fonts.semibold, fontSize: 14, color: colors.primary },
  note: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: colors.muted, textAlign: 'center', marginTop: 10 },
});
