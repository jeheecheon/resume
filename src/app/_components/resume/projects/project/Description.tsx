import { HTMLAttributes } from 'react';

interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
    linkInfos: { label: string; href: string }[];
}

export default function Description({ children, linkInfos }: DescriptionProps) {
    return (
        <div>
            <h4 className="mt-5 text-theme-1">Description</h4>
            <p className="leading-[1.6rem]">{children}</p>
            <p>
                (
                {linkInfos.map(({ label, href }, idx) => {
                    return (
                        <span key={label}>
                            {idx !== 0 && ' | '}
                            <a
                                key={label}
                                className="underline-offset-4"
                                title={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {label}
                            </a>
                        </span>
                    );
                })}
                )
            </p>
        </div>
    );
}
