import { HTMLAttributes } from 'react';

interface ListProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}

export default function List({ children, title }: ListProps) {
    return (
        <div>
            <h4 className="mt-5 text-theme-1">{title}</h4>
            <ul>{children}</ul>
        </div>
    );
}

List.Item = function Item({ children }: HTMLAttributes<HTMLLIElement>) {
    return (
        <li>
            <p>{children}</p>
        </li>
    );
};
