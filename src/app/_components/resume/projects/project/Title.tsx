import { HTMLAttributes } from 'react';

export default function Title({
    children,
}: HTMLAttributes<HTMLHeadingElement>) {
    return <h3>{children}</h3>;
}
