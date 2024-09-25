import { HTMLAttributes } from 'react';
import Description from '@/_components/resume/awards-and-scores/Description';
import Title from '@/_components/resume/awards-and-scores/Title';

export default function Section({ children }: HTMLAttributes<HTMLDivElement>) {
    return <div>{children}</div>;
}

Section.Title = Title;
Section.Description = Description;
