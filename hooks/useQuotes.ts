import { useEffect, useState } from 'react';
import { getQuotes } from '@/services/quotes.service';

export function useQuotes(category?: string, search?: string) {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    setLoading(true);
    const { data } = await getQuotes(category, search);
    setQuotes(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, [category, search]);

  return { quotes, loading, refresh: fetchQuotes };
}
