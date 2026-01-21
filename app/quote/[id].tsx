import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useFavorites } from '@/hooks/useFavorites';
import { shareQuoteText } from '@/utils/shareQuote';

export default function QuoteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [quote, setQuote] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetchQuote();
  }, [id]);

  const fetchQuote = async () => {
    if (!id) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('id', id)
      .single();

    if (!error) {
      setQuote(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 40 }} />;
  }

  if (!quote) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Quote not found</Text>
      </View>
    );
  }

  const isFavorite = favorites.some((q) => q.id === quote.id);

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontStyle: 'italic',
          marginBottom: 16,
        }}
      >
        “{quote.text}”
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'right',
          marginBottom: 24,
        }}
      >
        — {quote.author}
      </Text>

      <Button
        title={isFavorite ? 'Remove Favorite ❤️' : 'Add to Favorites 🤍'}
        onPress={() => toggleFavorite(quote)}
      />

      <View style={{ height: 12 }} />

      <Button
        title="Share Quote"
        onPress={() => shareQuoteText(quote)}
      />
    </View>
  );
}
