import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  selected?: boolean;
  onPress: () => void;
};

export default function CategoryChip({
  label,
  selected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        selected && styles.selected,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#e2e8f0',
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#6366f1',
  },
  text: {
    fontSize: 14,
    color: '#0f172a',
  },
});
