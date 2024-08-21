export const isDarkMode =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

export function adjustThemeColor(isDarkMode: boolean) {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    const themeColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue('--bg-body');

    document.documentElement.style.backgroundColor = themeColor;

    const metas = document.head.getElementsByTagName('meta');

    for (const meta of metas) {
        if (
            meta.name === 'theme-color' ||
            meta.name === 'msapplication-navbutton-color'
        ) {
            meta.content = themeColor;
        }
    }
}

adjustThemeColor(isDarkMode);
