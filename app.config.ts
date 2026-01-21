import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'QuoteVault',
  slug: 'quotevault',
  scheme: 'quotevault',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
    },
  },
};

export default config;
