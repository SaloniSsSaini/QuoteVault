import { supabase } from '@/lib/supabase';

export const addFavorite = async (
  userId: string,
  quoteId: string
) => {
  return supabase.from('favorites').insert({
    user_id: userId,
    quote_id: quoteId,
  });
};

export const removeFavorite = async (
  userId: string,
  quoteId: string
) => {
  return supabase
    .from('favorites')
    .delete()
    .eq('user_id', userId)
    .eq('quote_id', quoteId);
};

export const getFavorites = async (userId: string) => {
  return supabase
    .from('favorites')
    .select('quote:quotes(*)')
    .eq('user_id', userId);
};
