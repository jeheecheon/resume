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
        <div className="fixed w-full flex pt-4 pr-4 z-[1]">
            <button
                title="Toggle Theme"
                className={`ml-auto py-2 px-5 drop-shadow-md rounded-md bg-stone-100 dark:bg-[#191919]
                font-light text-[0.84rem] tracking-tight
                hover:bg-[rgb(243,235,229)] hover:text-theme-1 hover:dark:bg-[#11151d] hover:dark:text-theme-1
                transition-colors duration-300 ${className}`}
                onClick={handleClick}
            >
                {modeDisplay}
            </button>
        </div>
    );
}

export default ThemeSwitch;
