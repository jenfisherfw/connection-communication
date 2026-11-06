import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BackHeader, Card, IconBubble, Screen } from '../components/ui';
import { useContent } from '../data/localized';
import type { ToolCategory } from '../data/toolkit';
import { TOOL_CATEGORIES, categoryOf } from '../data/toolkit/categories';
import { useT } from '../i18n';
import { colors, fonts, radius } from '../theme';

/** The Toolkit: ready to use templates, checklists, and planners. */
export default function Toolkit() {
  const { t } = useT();
  const { TOOLS } = useContent();
  const [cat, setCat] = useState<ToolCategory | 'all'>('all');
  const [q, setQ] = useState('');

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return TOOLS.filter((tool) => (cat === 'all' || tool.category === cat) && (!term || `${tool.title} ${tool.summary}`.toLowerCase().includes(term)));
  }, [TOOLS, cat, q]);

  return (
    <Screen>
      <BackHeader title={t('Toolkit')} onBack={() => (router.canGoBack() ? router.back() : router.replace('/'))} />
      <Text style={s.lead}>{t('Templates, checklists, and planners you can use today. Copy them, share them, or ask Ari to tailor one to your situation.')}</Text>

      <View style={s.search}>
        <Feather name="search" size={18} color={colors.muted} />
        <TextInput value={q} onChangeText={setQ} placeholder={t('Search tools')} placeholderTextColor={colors.faint} style={s.searchInput} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20, marginTop: 14 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}>
        {[{ id: 'all' as const, label: 'All' }, ...TOOL_CATEGORIES].map((c) => {
          const on = cat === c.id;
          return (
            <Pressable key={c.id} onPress={() => setCat(c.id)} style={[s.chip, on && s.chipOn]}>
              <Text style={[s.chipText, on && { color: '#fff' }]}>{t(c.label)}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {cat === 'all' && !q.trim() ? (
        <View style={{ gap: 10, marginTop: 16 }}>
          {[
            { icon: 'edit-3', title: t('Change Message Builder'), sub: t('Draft an announcement, then polish it with Ari'), go: '/change-message' as const, c: colors.blue, soft: colors.blueSoft },
            { icon: 'send', title: t('Tone Check'), sub: t('See how a message will land before you send it'), go: '/tone-check' as const, c: colors.sky, soft: colors.skySoft },
          ].map((x) => (
            <Card key={x.go} style={s.row} onPress={() => router.push(x.go)}>
              <IconBubble icon={x.icon as never} color={x.c} soft={x.soft} size={46} />
              <View style={{ flex: 1, gap: 3 }}>
                <Text style={s.title}>{x.title}</Text>
                <Text style={s.summary}>{x.sub}</Text>
                <Text style={[s.meta, { color: x.c }]}>{t('Interactive')}</Text>
              </View>
              <Feather name="chevron-right" size={20} color={colors.faint} />
            </Card>
          ))}
        </View>
      ) : null}

      <View style={{ gap: 10, marginTop: 16 }}>
        {shown.map((tool) => {
          const c = categoryOf(tool.category);
          return (
            <Card key={tool.id} style={s.row} onPress={() => router.push(`/tool/${tool.id}`)}>
              <IconBubble icon={tool.icon as never} color={c.color} soft={c.soft} size={46} />
              <View style={{ flex: 1, gap: 3 }}>
                <Text style={s.title}>{tool.title}</Text>
                <Text style={s.summary} numberOfLines={2}>
                  {tool.summary}
                </Text>
                <Text style={[s.meta, { color: c.color }]}>
                  {t(c.label)} · {t('{n} min', { n: tool.minutes })}
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color={colors.faint} />
            </Card>
          );
        })}
        {!shown.length ? <Text style={s.empty}>{t('No tools match that search.')}</Text> : null}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  lead: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.muted },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, paddingHorizontal: 14, height: 48, marginTop: 16 },
  searchInput: { flex: 1, fontFamily: fonts.body, fontSize: 16, color: colors.ink, outlineStyle: 'none' } as never,
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.line },
  chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontFamily: fonts.semibold, fontSize: 13, color: colors.ink },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  title: { fontFamily: fonts.semibold, fontSize: 16, color: colors.ink },
  summary: { fontFamily: fonts.body, fontSize: 13, lineHeight: 18, color: colors.muted },
  meta: { fontFamily: fonts.semibold, fontSize: 12, marginTop: 2 },
  empty: { fontFamily: fonts.medium, fontSize: 15, color: colors.muted, textAlign: 'center', marginTop: 20 },
});
