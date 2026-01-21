import { View, Text, Switch } from 'react-native';

type Props = {
  isDark: boolean;
  onToggle: (value: boolean) => void;
};

export default function ThemeToggle({
  isDark,
  onToggle,
}: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 10 }}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={onToggle} />
    </View>
  );
}
