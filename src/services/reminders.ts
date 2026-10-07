import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export interface ReminderSettings {
  enabled: boolean;
  hour: number;
  minute: number;
}

const supported = Platform.OS === 'ios' || Platform.OS === 'android';

if (supported) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false }),
  });
}

const MESSAGES = [
  'Your daily scenario is ready. Two minutes to sharpen how you lead.',
  'Keep your streak alive 🔥 One quick rep today.',
  'A great leader practices before the hard conversation. Ready?',
  'New day, new scenario. How would you respond?',
  'Who on your team deserves recognition today?',
];

export const formatTime = (hour: number, minute: number) => {
  const h = hour % 12 || 12;
  return `${h}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
};

/** Asks for permission if needed. Returns true when reminders can be delivered. */
export async function requestReminderPermission(): Promise<boolean> {
  if (!supported) return false;
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  if (!current.canAskAgain) return false;
  return (await Notifications.requestPermissionsAsync()).granted;
}

/** Replaces any scheduled reminders with weekday reminders at the chosen time. */
export async function applyReminders(settings: ReminderSettings): Promise<void> {
  if (!supported) return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!settings.enabled) return;
  if (!(await Notifications.getPermissionsAsync()).granted) return;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('reminders', { name: 'Daily reminders', importance: Notifications.AndroidImportance.DEFAULT });
  }
  // Weekdays: Monday (2) through Friday (6)
  for (let weekday = 2; weekday <= 6; weekday++) {
    await Notifications.scheduleNotificationAsync({
      content: { title: 'Rapport', body: MESSAGES[weekday % MESSAGES.length] },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.WEEKLY, channelId: 'reminders', weekday, hour: settings.hour, minute: settings.minute },
    });
  }
}
