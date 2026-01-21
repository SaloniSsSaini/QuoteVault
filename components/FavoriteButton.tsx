import { TouchableOpacity, Text } from 'react-native';

type Props = {
  isFavorite: boolean;
  onPress: () => void;
};

export default function FavoriteButton({
  isFavorite,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18 }}>
        {isFavorite ? '❤️ Remove' : '🤍 Save'}
      </Text>
    </TouchableOpacity>
  );
}
