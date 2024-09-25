import { HTMLAttributes } from 'react';

function Introduction({ children }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className="text-[1.3rem] sm:text-[1.7rem] leading-[2.2rem] sm:leading-[3.1rem] text-pretty">
            {children}
        </p>
    );
}

export default Introduction;
