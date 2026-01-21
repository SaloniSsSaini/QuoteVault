import { supabase } from '@/lib/supabase';

export const createCollection = async (
  userId: string,
  name: string
) => {
  return supabase.from('collections').insert({
    user_id: userId,
    name,
  });
};

export const getCollections = async (userId: string) => {
  return supabase
    .from('collections')
    .select('*')
    .eq('user_id', userId);
};

export const addToCollection = async (
  collectionId: string,
  quoteId: string
) => {
  return supabase.from('collection_quotes').insert({
    collection_id: collectionId,
    quote_id: quoteId,
  });
};
