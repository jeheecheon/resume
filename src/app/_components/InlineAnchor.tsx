import { HTMLAttributes } from 'react';

interface InlineAnchorProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export default function InlineAnchor({ children, href }: InlineAnchorProps) {
    return (
        <>
            {' '}
            <a
                className="inline-anchor"
                target="_blank"
                rel="noreferrer"
                href={href}
            >
                {children}
            </a>{' '}
        </>
    );
}
