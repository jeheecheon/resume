import { HTMLAttributes } from 'react';

interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
    linkInfos: { label: string; href: string }[];
}

export default function Description({ children, linkInfos }: DescriptionProps) {
    return (
        <div>
            <h4 className="mt-5 text-theme-1">Description</h4>
            <p className='text-gray-500 dark:text-gray-400 transition-colors duration-1000
            has-[a:hover]:text-[var(--theme-color)] has-[a:hover]:dark:text-orange-300'>
                🌐(
                {linkInfos.map(({ label, href }, idx) => {
                    return (
                        <span key={label}>
                            {idx !== 0 && ' | '}
                            <a
                                key={label}
                                className="underline-offset-4 peer"
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
            <p className="mt-1 leading-[1.6rem]">{children}</p>
        </div>
    );
}
