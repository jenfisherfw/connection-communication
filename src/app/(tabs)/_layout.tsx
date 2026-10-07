import { Feather } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { Tabs } from 'expo-router/js-tabs';
import { ColorValue, View } from 'react-native';
import { useAppState } from '../../state/AppState';
import { colors, fonts } from '../../theme';

type IconName = React.ComponentProps<typeof Feather>['name'];

const tab = (title: string, icon: IconName) => ({
  title,
  tabBarIcon: ({ color, focused }: { color: ColorValue; focused: boolean }) => (
    <View style={{ alignItems: 'center' }}>
      <View style={{ position: 'absolute', top: -10, width: 28, height: 3, borderRadius: 2, backgroundColor: focused ? colors.primary : 'transparent' }} />
      <Feather name={icon} size={23} color={color as string} />
    </View>
  ),
});

export default function TabsLayout() {
  const { progress } = useAppState();
  if (!progress.onboarded) return <Redirect href="/onboarding" />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 11 },
        tabBarStyle: { backgroundColor: '#FDFDFE', borderTopColor: colors.line, height: 84, paddingTop: 10 },
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      <Tabs.Screen name="index" options={tab('Home', 'home')} />
      <Tabs.Screen name="explore" options={tab('Explore', 'compass')} />
      <Tabs.Screen name="practice" options={tab('Practice', 'mic')} />
      <Tabs.Screen name="progress" options={tab('Progress', 'bar-chart-2')} />
      <Tabs.Screen name="profile" options={tab('Profile', 'user')} />
    </Tabs>
  );
}
