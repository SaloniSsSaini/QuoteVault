import { View, Text, FlatList } from 'react-native';
import { useFavorites } from '@/hooks/useFavorites';
import QuoteCard from '@/components/QuoteCard';
import { shareQuoteText } from '@/utils/shareQuote';

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No favorites yet ❤️</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <QuoteCard
          quote={item}
          isFavorite={true}
          onFavorite={() => toggleFavorite(item)}
          onShare={() => shareQuoteText(item)}
        />
      )}
    />
  );
}
