import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AREAS } from '../data/content';
import { setLeaderContext } from '../services/coach';
import { applyReminders } from '../services/reminders';
import { AccountProvider } from '../state/Account';
import { AppStateProvider, useAppState } from '../state/AppState';
import { colors } from '../theme';

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
  if (!ready) return null;
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
  const [loaded] = useFonts({ Fraunces_600SemiBold, Fraunces_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  if (!loaded) return null;
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
