import { HTMLAttributes } from 'react';

export default function Section({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="space-y-1 flex flex-col h-fit gap-[0.1rem]">
            {children}
        </div>
    );
}

Section.Title = function Title({
    children,
}: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className="text-theme-1">{children}</h3>;
};

interface SectionItemProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    href: string;
    value: string;
}
Section.Item = function Item({ label, href, value }: SectionItemProps) {
    return (
        <span className="text-nowrap">
            <p className="inline">{`${label}. `}</p>
            <a title="Phone Number" href={href}>
                {value}
            </a>
        </span>
    );
};
