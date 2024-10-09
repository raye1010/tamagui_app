import i18n from 'i18next';
import { Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import LanguageDetector from 'i18next-browser-languagedetector';

let AsyncStorage: any;
if (Platform.OS !== 'web') {
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} else {
  if (typeof window !== 'undefined' && window.localStorage) {
    AsyncStorage = {
      getItem: (key: string) => {
        return Promise.resolve(window.localStorage.getItem(key));
      },
      setItem: (key: string, value: any) => {
        return Promise.resolve(window.localStorage.setItem(key, value));
      },
      removeItem: (key: string) => {
        return Promise.resolve(window.localStorage.removeItem(key));
      },
    };
  }
}

import translationEn from './locales/en-US/translation.json';
import translationZh from './locales/zh-HK/translation.json';
// Import other language translations as needed

const resources = {
  'en-US': { translation: translationEn },
  'zh-HK': { translation: translationZh },
  // Add other languages as needed
};

const initI18n = async () => {
  let savedLanguage = AsyncStorage ? await AsyncStorage.getItem('language') : undefined;
  //   console.log({ savedLanguage });

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()?.[0]?.languageCode ?? Object.keys(resources).at(0);
  }

  await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: savedLanguage!,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
