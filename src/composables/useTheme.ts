import {ref, watch, onMounted} from 'vue';
import {getStoredTheme, getSystemTheme, saveTheme, applyTheme} from '@/utils/theme';
import {THEME_DARK, THEME_LIGHT} from '@/config/settings';

export function useTheme() {
    const theme = ref(THEME_LIGHT);

    function setTheme(newTheme: string) {
        theme.value = newTheme;
        applyTheme(newTheme);
        saveTheme(newTheme);
    }

    function toggleTheme() {
        setTheme(theme.value === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
    }

    onMounted(() => {
        const stored = getStoredTheme();
        if (stored) {
            setTheme(stored);
        } else {
            setTheme(getSystemTheme());
        }
    });

    watch(theme, (newVal) => {
        applyTheme(newVal);
        saveTheme(newVal);
    });

    return {theme, setTheme, toggleTheme};
}