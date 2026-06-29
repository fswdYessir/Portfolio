import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from './locales/en/common.json'
import koCommon from './locales/ko/common.json'
import enProjects from './locales/en/projects.json'
import koProjects from './locales/ko/projects.json'

const savedLocale = localStorage.getItem('locale') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, projects: enProjects },
    ko: { common: koCommon, projects: koProjects },
  },
  lng: savedLocale,
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng
  localStorage.setItem('locale', lng)
})

document.documentElement.lang = savedLocale

export default i18n
