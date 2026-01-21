import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  SETTINGS: 'SETTINGS',
  QUOTE_OF_DAY: 'QUOTE_OF_DAY',
};

export const saveToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage save error', e);
  }
};

export const getFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Storage get error', e);
    return null;
  }
};

export const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Storage remove error', e);
  }
};
