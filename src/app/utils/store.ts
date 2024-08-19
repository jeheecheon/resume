import { create } from 'zustand';

interface ThemeState {
    isDarkMode: boolean;
    setDarkMode: (mode: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode:
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches),

    setDarkMode: (mode) => {
        localStorage.setItem('theme', mode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', mode);
        set(() => ({ isDarkMode: mode }));
    },
}));
