import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FavoriteButton from './FavoriteButton';

type Props = {
  quote: any;
  isFavorite?: boolean;
  onFavorite?: () => void;
  onPress?: () => void;
};

export default function QuoteCard({
  quote,
  isFavorite = false,
  onFavorite,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Text style={styles.text}>“{quote.text}”</Text>
        <Text style={styles.author}>— {quote.author}</Text>

        {onFavorite && (
          <FavoriteButton isFavorite={isFavorite} onPress={onFavorite} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
  },
  text: {
    fontFamily: 'Inter',   // ✅ Inter font added
    fontSize: 16,
  },
  author: {
    fontFamily: 'Inter',   // ✅ Inter font added
    marginTop: 8,
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
