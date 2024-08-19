import { ReactNode } from 'react';

import GradientBar from '@/_components/GradientBar';
import ThemeSwitch from '@/_components/ThemeSwitch';

import '@/_styles/globals.css';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="font-['Pretendard'] text-inverse-1 bg-color min-h-full 
        transition-colors duration-300">
            <GradientBar />

            <div className="flex pt-4 pr-4">
                <ThemeSwitch />
            </div>

            <div className="max-w-[50rem] mx-auto ">{children}</div>
        </div>
    );
}

export default Layout;
