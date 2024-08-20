import { ReactNode } from 'react';

interface TagProps {
    children: ReactNode;
}

function Tag({ children }: TagProps) {
    return (
        <span className="bg-[#f6f2ef] dark:bg-[#202020] px-3 py-1 rounded-md text-sm font-semibold">
            {children}
        </span>
    );
}

export default Tag;
