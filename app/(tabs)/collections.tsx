import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  createCollection,
  getCollections,
} from '@/services/collections.service';

export default function Collections() {
  const [collections, setCollections] = useState<any[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;

    const res = await getCollections(data.user.id);
    setCollections(res.data || []);
  };

  const handleCreate = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user || !name) return;

    await createCollection(data.user.id, name);
    setName('');
    loadCollections();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Create Collection</Text>

      <TextInput
        placeholder="Collection name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginVertical: 10,
        }}
      />

      <Button title="Create" onPress={handleCreate} />

      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, marginVertical: 6 }}>
            📁 {item.name}
          </Text>
        )}
      />
    </View>
  );
}
