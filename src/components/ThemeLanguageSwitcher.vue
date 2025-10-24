<template>
  <div class="theme-lang-switch flex items-center gap-4">
    <label class="theme-switcher__toggle toggle text-base-content">
      <input type="checkbox" :checked="theme === THEME_DARK" @change="toggleTheme" class="theme-controller"/>
      <SunIcon/>
      <MoonIcon/>
    </label>

    <select class="select select-sm w-32" name="locale" v-model="currentLocale"
            @change="changeLocale">
      <option v-for="lang in AVAILABLE_LANGUAGES" :key="lang" :value="lang">
        {{ $t(`locales.${lang}`) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {useTheme} from '@/composables/useTheme';
import {AVAILABLE_LANGUAGES, THEME_DARK} from '@/config/settings';
import {MoonIcon, SunIcon} from '@heroicons/vue/24/outline';

const {theme, toggleTheme} = useTheme();
const {locale} = useI18n();

const currentLocale = ref(locale.value);

const changeLocale = () => {
  locale.value = currentLocale.value;
  document.documentElement.setAttribute('lang', locale.value);
}

watch(locale, (newVal) => {
  localStorage.setItem('user-locale', newVal);
});
</script>