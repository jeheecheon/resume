import { HTMLAttributes } from 'react';

interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
    linkInfos: { label: string; href: string }[];
}

export default function Description({ children, linkInfos }: DescriptionProps) {
    return (
        <div>
            <p className="mt-5 text-gray-500 dark:text-gray-100">
                {'🌐( '}
                {linkInfos.map(({ label, href }, idx) => {
                    return (
                        <span key={label}>
                            {idx !== 0 && ' | '}
                            <a
                                key={label}
                                className="text-gray-500 dark:text-gray-100 no-underline transition-colors duration-1000"
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
                {' )'}
            </p>
            <h4 className="text-theme-1">Description</h4>
            <p className="mt-1 leading-[1.6rem]">{children}</p>
        </div>
    );
}
