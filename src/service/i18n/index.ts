import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: require('@/assets/langs/en.json'),
  cn: require('@/assets/langs/cn.json'),
};

export function updateLocale(lang: string) {
  i18n.locale = lang;
}

export function getCurrentLocale(): string {
  return i18n.locale;
}

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
