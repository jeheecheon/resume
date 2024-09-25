import { HTMLAttributes } from 'react';

export default function Subtitle({
    children,
}: HTMLAttributes<HTMLParagraphElement>) {
    return <p className="sm:mt-1 text-xs sm:text-sm">{children}</p>;
}
