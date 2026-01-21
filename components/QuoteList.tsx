import { FlatList } from 'react-native';
import QuoteCard from './QuoteCard';

type Props = {
  data: any[];
  favorites?: any[];
  onFavorite?: (quote: any) => void;
  onPressItem?: (quote: any) => void;
};

export default function QuoteList({
  data,
  favorites = [],
  onFavorite,
  onPressItem,
}: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <QuoteCard
          quote={item}
          isFavorite={favorites.some((q) => q.id === item.id)}
          onFavorite={onFavorite ? () => onFavorite(item) : undefined}
          onPress={onPressItem ? () => onPressItem(item) : undefined}
        />
      )}
    />
  );
}
