import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AREAS } from '../data/content';
import { setLeaderContext } from '../services/coach';
import { applyReminders } from '../services/reminders';
import { AccountProvider } from '../state/Account';
import { AppStateProvider, useAppState } from '../state/AppState';
import { colors } from '../theme';

// Keep the branded launch screen up until the app is ready, with a timeout so it can never stick.
SplashScreen.preventAutoHideAsync().catch(() => {});
setTimeout(() => SplashScreen.hideAsync().catch(() => {}), 6000);

// If anything crashes while rendering, show the error on screen instead of a blank page.
export { ErrorBoundary } from 'expo-router';

/** Shown while the app gets ready, so a slow start never looks like a blank white screen. */
function Loading() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text style={{ color: '#fff', fontSize: 28, fontWeight: '700', letterSpacing: 1 }}>Rapport</Text>
      <ActivityIndicator color="#fff" />
    </View>
  );
}

/** Keeps device reminders and the coach's view of the leader in step with their profile. */
function ProfileEffects() {
  const { progress, ready } = useAppState();
  const { enabled, hour, minute } = progress.reminder;

  useEffect(() => {
    if (ready && progress.onboarded) applyReminders({ enabled, hour, minute }).catch(() => {});
  }, [ready, progress.onboarded, enabled, hour, minute]);

  useEffect(() => {
    setLeaderContext({
      name: progress.name,
      role: progress.role,
      teamSize: progress.teamSize,
      focusAreas: progress.focusAreas.map((id) => AREAS.find((a) => a.id === id)?.title ?? id),
    });
  }, [progress.name, progress.role, progress.teamSize, progress.focusAreas]);

  return null;
}

function Navigator() {
  const { ready } = useAppState();
  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);
  if (!ready) return <Loading />;
  return (
    <>
      <ProfileEffects />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
        <Stack.Screen name="sign-in" options={{ presentation: 'modal' }} />
        <Stack.Screen name="coach" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [loaded, fontError] = useFonts({ Fraunces_600SemiBold, Fraunces_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  // Brand fonts are a nicety: if they fail or stall, carry on with the system font.
  const [fontTimeout, setFontTimeout] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFontTimeout(true), 5000);
    return () => clearTimeout(t);
  }, []);
  if (!loaded && !fontError && !fontTimeout) return <Loading />;
  return (
    <SafeAreaProvider>
      <AppStateProvider>
        <AccountProvider>
          <StatusBar style="dark" />
          <Navigator />
        </AccountProvider>
      </AppStateProvider>
    </SafeAreaProvider>
  );
}
