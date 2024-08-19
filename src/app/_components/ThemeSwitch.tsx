import { useThemeStore } from '@/utils/store';
import { useMemo } from 'react';

interface ThemeSwitchProps {
    className?: string;
}

function ThemeSwitch({ className }: ThemeSwitchProps) {
    const { isDarkMode, setDarkMode } = useThemeStore();

    const modeDisplay = useMemo(
        () => (isDarkMode ? 'DARK🌙' : 'LIGHT☀️'),
        [isDarkMode]
    );

    function handleClick() {
        setDarkMode(!isDarkMode);
    }

    return (
        <button
            className={`ml-auto p-2 rounded-lg bg-gray-900 ${className}`}
            onClick={handleClick}
        >
            {modeDisplay}
        </button>
    );
}

export default ThemeSwitch;
