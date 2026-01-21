import * as Notifications from 'expo-notifications';

export const scheduleDailyQuoteNotification = async (
  hour: number,
  minute: number
) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'QuoteVault',
      body: 'Your daily quote is ready 🌞',
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });
};
