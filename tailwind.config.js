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
                    2: 'var(--inverse-color-2)',
                    3: 'var(--inverse-color-3)',
                },
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(0.5rem)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
                'fade-in-lazy': {
                    '0%': {
                        opacity: 0,
                    },
                    '50%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-in-out',
                'fade-in-lazy': 'fade-in-lazy 1.2s ease-in-out',
            },
        },
    },
    plugins: [],
};
