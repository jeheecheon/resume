import { HTMLAttributes } from 'react';

function Introduction({ children }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className="text-[1.3rem] sm:text-[1.5rem] leading-[2.2rem] sm:leading-[2.7rem] text-pretty">
            {children}
        </p>
    );
}

export default Introduction;
