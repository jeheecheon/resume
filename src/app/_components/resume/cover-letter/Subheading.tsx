import { HTMLAttributes } from 'react';

export default function Subheading({
    children,
    className
}: HTMLAttributes<HTMLDivElement>) {
    return <div className={`text-theme-1 py-2 text-2xl font-medium ${className}`}>[{children}]</div>;
}
