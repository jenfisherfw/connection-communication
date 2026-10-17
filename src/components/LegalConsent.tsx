import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useT } from '../i18n';
import { colors, fonts } from '../theme';

/** The agreement line shown wherever someone creates an account, with links to both documents. */
export function LegalConsent() {
  const { t } = useT();
  return (
    <Text style={s.text}>
      {t('By creating an account, you agree to the')}{' '}
      <Text style={s.link} onPress={() => router.push('/terms')}>
        {t('Terms of use')}
      </Text>{' '}
      {t('and the')}{' '}
      <Text style={s.link} onPress={() => router.push('/privacy')}>
        {t('Privacy policy')}
      </Text>
      .
    </Text>
  );
}

const s = StyleSheet.create({
  text: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: colors.muted, textAlign: 'center', marginTop: 14 },
  link: { fontFamily: fonts.semibold, color: colors.primary, textDecorationLine: 'underline' },
});
