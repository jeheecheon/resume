import { ReactNode } from 'react';

import GradientBar from '@/_components/GradientBar';
import ThemeSwitch from '@/_components/ThemeSwitch';

import '@/_styles/globals.css';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-full bg-[var(--bg-color)] transition-colors duration-700">
            <GradientBar />
            <ThemeSwitch />

            <div className="max-w-[50rem] mx-auto px-3">{children}</div>
        </div>
    );
}

export default Layout;
