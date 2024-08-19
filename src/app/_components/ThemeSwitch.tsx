import { useThemeStore } from '@/_utils/store';
import { useMemo } from 'react';

interface ThemeSwitchProps {
    className?: string;
}

function ThemeSwitch({ className }: ThemeSwitchProps) {
    const { isDarkMode, setDarkMode } = useThemeStore();

    const modeDisplay = useMemo(
        () => (isDarkMode ? 'DARK' : 'LIGHT'),
        [isDarkMode]
    );

    function handleClick() {
        setDarkMode(!isDarkMode);
    }

    return (
        <button
            className={`ml-auto py-2 px-5 rounded-md bg-stone-100 dark:bg-[#191919]
            font-light text-[0.84rem] tracking-tight
            hover:bg-[rgb(229,236,243)] hover:text-[rgb(59,130,246)] hover:dark:bg-[#11151d] hover:dark:text-[#3b82f6]
            transition-colors duration-300 ${className}`}
            onClick={handleClick}
        >
            {modeDisplay}
        </button>
    );
}

export default ThemeSwitch;
