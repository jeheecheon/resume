import { HTMLAttributes } from 'react';

export default function Paragraph({
    children,
}: HTMLAttributes<HTMLParagraphElement>) {
    return <p className="first-letter:text-theme-1 first-letter:text-2xl">{children}</p>;
}
