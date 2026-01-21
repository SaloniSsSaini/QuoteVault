import { supabase } from '@/lib/supabase';

export const getQuotes = async (
  category?: string,
  search?: string
) => {
  let query = supabase.from('quotes').select('*');

  if (category) {
    query = query.eq('category', category);
  }

  if (search) {
    query = query.or(
      `text.ilike.%${search}%,author.ilike.%${search}%`
    );
  }

  return query;
};
