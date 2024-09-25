import { HTMLAttributes } from 'react';

export default function Experience({
    children,
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div>
            <h4 className="mt-5 text-theme-1">Experience</h4>
            <ul>{children}</ul>
        </div>
    );
}

Experience.Item = function Item({ children }: HTMLAttributes<HTMLLIElement>) {
    return (
        <li>
            <p>{children}</p>
        </li>
    );
};
