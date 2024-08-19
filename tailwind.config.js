/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                theme: {
                    1: 'var(--theme-color)',
                },
                inverse: {
                    1: 'var(--inverse-color-1)',
                },
            },
        },
    },
    plugins: [],
};
