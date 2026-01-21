import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@/lib/supabase';
import { COLORS } from '@/constants/colors';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [accent, setAccent] = useState(COLORS.accents[0]);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const local = await AsyncStorage.getItem('settings');
    if (local) {
      const s = JSON.parse(local);
      setTheme(s.theme);
      setAccent(s.accent);
      setFontSize(s.fontSize);
    }
  };

  const saveSettings = async (data: any) => {
    await AsyncStorage.setItem('settings', JSON.stringify(data));

    const { data: user } = await supabase.auth.getUser();
    if (user?.user) {
      await supabase.from('profiles').upsert({
        id: user.user.id,
        ...data,
      });
    }
  };

  return {
    theme,
    accent,
    fontSize,
    setTheme,
    setAccent,
    setFontSize,
    saveSettings,
  };
}
