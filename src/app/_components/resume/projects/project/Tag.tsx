import { ReactNode } from 'react';

interface TagProps {
    children: ReactNode;
}

function Tag({ children }: TagProps) {
    return (
        <p
            className="bg-[#f6f2ef] dark:bg-[#202020] px-3 py-1 rounded-md
            text-[0.8rem] sm:text-sm font-semibold"
        >
            {children}
        </p>
    );
}

export default Tag;
