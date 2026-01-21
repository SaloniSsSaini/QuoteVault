import { saveToStorage, getFromStorage, StorageKeys } from '@/lib/storage';

/**
 * Deterministically picks a quote for the current day
 */
export const getQuoteOfTheDay = (quotes: any[]) => {
  if (!quotes || quotes.length === 0) return null;

  const today = new Date();
  const index =
    (today.getFullYear() +
      today.getMonth() +
      today.getDate()) %
    quotes.length;

  return quotes[index];
};

/**
 * Save quote of the day locally
 */
export const saveQuoteOfTheDay = async (quote: any) => {
  if (!quote) return;
  await saveToStorage(StorageKeys.QUOTE_OF_DAY, {
    date: new Date().toDateString(),
    quote,
  });
};

/**
 * Get saved quote of the day (if still valid for today)
 */
export const getSavedQuoteOfTheDay = async () => {
  const data = await getFromStorage(StorageKeys.QUOTE_OF_DAY);
  if (!data) return null;

  if (data.date === new Date().toDateString()) {
    return data.quote;
  }

  return null;
};
