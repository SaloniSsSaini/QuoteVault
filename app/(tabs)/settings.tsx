import { View, Text, Switch, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTheme } from '@/hooks/useTheme';
import { COLORS } from '@/constants/colors';

export default function Settings() {
  const {
    theme,
    accent,
    fontSize,
    setTheme,
    setAccent,
    setFontSize,
    saveSettings,
  } = useTheme();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Dark Mode</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={(v) =>
          setTheme(v ? 'dark' : 'light')
        }
      />

      <Text style={{ marginTop: 20 }}>Font Size</Text>
      <Slider
        minimumValue={14}
        maximumValue={26}
        value={fontSize}
        onValueChange={setFontSize}
      />

      <Text style={{ marginTop: 20 }}>Accent Color</Text>
      {COLORS.accents.map((c) => (
        <Button key={c} title={c} onPress={() => setAccent(c)} />
      ))}

      <Button
        title="Save Settings"
        onPress={() =>
          saveSettings({ theme, accent, fontSize })
        }
      />
    </View>
  );
}
