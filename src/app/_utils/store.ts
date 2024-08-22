import { create  } from 'zustand';
import { isDarkMode, adjustThemeColor } from '@/_utils/theme';

interface ThemeState {
    isDarkMode: boolean;
    setDarkMode: (mode: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: isDarkMode,

    setDarkMode: (mode) => {
        set(() => ({ isDarkMode: mode }));
        adjustThemeColor(mode);
    },
}));
