// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {es, hn} from '.';

const languageResources = {
  hn: {translation: hn},
  es: {translation: es},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'es',
  fallbackLng: 'es',
  resources: languageResources,
});

export default i18n;
