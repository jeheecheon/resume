import Description from '@/_components/resume/education/Description';
import Title from '@/_components/resume/education/Title';
import { HTMLAttributes } from 'react';

export default function Section({ children }: HTMLAttributes<HTMLDivElement>) {
    return <div className="mt-[1.5rem]">{children}</div>;
}

Section.Title = Title;
Section.Description = Description;
