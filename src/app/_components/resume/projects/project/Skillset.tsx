import { HTMLAttributes } from 'react';
import Tag from '@/_components/resume/projects/project/Tag';

export default function Skillset({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div>
            <h4 className="mt-5 text-theme-1">Skillset</h4>
            <aside className="flex flex-wrap mt-1 gap-2">{children}</aside>
        </div>
    );
}

Skillset.Tag = Tag;
