import { View, Text, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '@/constants/categories';
import { router } from 'expo-router';

export default function Categories() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Categories
      </Text>

      {CATEGORIES.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={{
            padding: 16,
            marginVertical: 8,
            backgroundColor: '#f1f5f9',
            borderRadius: 10,
          }}
          onPress={() =>
            router.push(`/(tabs)?category=${cat}`)
          }
        >
          <Text style={{ fontSize: 16 }}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
