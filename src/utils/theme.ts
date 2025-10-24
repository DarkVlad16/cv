import {LS_THEME_KEY, THEME_DARK, THEME_LIGHT} from '@/config/settings';

export function getSystemTheme() {
  if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${THEME_DARK})`).matches) {
    return THEME_DARK;
  }
  return THEME_LIGHT;
}

export function getStoredTheme() {
  return localStorage.getItem(LS_THEME_KEY);
}

export function saveTheme(theme: string) {
  localStorage.setItem(LS_THEME_KEY, theme);
}

export function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
}