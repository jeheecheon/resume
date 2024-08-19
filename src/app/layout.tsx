import { ReactNode } from 'react';

import GradientBar from '@/_components/GradientBar';
import ThemeSwitch from '@/_components/ThemeSwitch';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <GradientBar />

            <div className='flex p-3'>
                <ThemeSwitch />
            </div>

            <div className="max-w-[50rem] mx-auto font-['Pretendard']">
                {children}
            </div>
        </>
    );
}

export default Layout;
