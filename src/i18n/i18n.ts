import {createI18n} from 'vue-i18n';
import en from './locales/en.json';
import uk from './locales/uk.json';

const savedLocale = localStorage.getItem('user-locale') || 'en';
document.documentElement.setAttribute('lang', savedLocale);

export const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: {en, uk},
});