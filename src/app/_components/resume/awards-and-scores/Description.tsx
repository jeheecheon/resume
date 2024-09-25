import { HTMLAttributes } from 'react';

export default function Description({
    children,
}: HTMLAttributes<HTMLParagraphElement>) {
    return <p className="text-xs sm:text-sm">{children}</p>;
}
