import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuotes } from '@/hooks/useQuotes';
import { useFavorites } from '@/hooks/useFavorites';
import QuoteCard from '@/components/QuoteCard';
import { getQuoteOfTheDay } from '@/utils/quoteOfTheDay';
import { shareQuoteText } from '@/utils/shareQuote';

export default function Home() {
  const { quotes, loading, refresh } = useQuotes();
  const { favorites, toggleFavorite } = useFavorites();

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 40 }} />;
  }

  const quoteOfTheDay = getQuoteOfTheDay(quotes);

  return (
    <View style={{ padding: 16 }}>
      {quoteOfTheDay && (
        <>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Quote of the Day
          </Text>

          <QuoteCard
            quote={quoteOfTheDay}
            isFavorite={favorites.some(q => q.id === quoteOfTheDay.id)}
            onFavorite={() => toggleFavorite(quoteOfTheDay)}
            onShare={() => shareQuoteText(quoteOfTheDay)}
          />
        </>
      )}

      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={refresh}
        renderItem={({ item }) => (
          <QuoteCard
            quote={item}
            isFavorite={favorites.some(q => q.id === item.id)}
            onFavorite={() => toggleFavorite(item)}
            onShare={() => shareQuoteText(item)}
          />
        )}
      />
    </View>
  );
}
