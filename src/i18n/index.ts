import { initReactI18next } from 'react-i18next'
import { NativeModules, Platform } from 'react-native'

import i18n from 'i18next'

import en from './langs/en.json'
import pt from './langs/pt.json'

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage.split('_')[0] || 'pt',
  resources: {
    en: en,
    pt: pt
  },
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n