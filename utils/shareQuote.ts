import * as Sharing from 'expo-sharing';

export const shareQuoteText = async (quote: any) => {
  await Sharing.shareAsync(`"${quote.text}" — ${quote.author}`);
};
