import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from '@/services/favorites.service';

export function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) loadFavorites(data.user.id);
    });
  }, []);

  const loadFavorites = async (userId: string) => {
    const { data } = await getFavorites(userId);
    setFavorites(data?.map((f) => f.quote) || []);
  };

  const toggleFavorite = async (quote: any) => {
    if (!user) return;

    const exists = favorites.find((q) => q.id === quote.id);

    if (exists) {
      await removeFavorite(user.id, quote.id);
    } else {
      await addFavorite(user.id, quote.id);
    }

    loadFavorites(user.id);
  };

  return { favorites, toggleFavorite };
}
