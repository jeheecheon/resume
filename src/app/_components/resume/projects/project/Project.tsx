import { HTMLAttributes } from 'react';

import Title from '@/_components/resume/projects/project/Title';
import Subtitle from '@/_components/resume/projects/project/Subtitle';
import Description from '@/_components/resume/projects/project/Description';
import Experience from '@/_components/resume/projects/project/Experience';
import Skillset from '@/_components/resume/projects/project/Skillset';

export default function Project({
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return <div {...props}>{children}</div>;
}

Project.Title = Title;
Project.Subtitle = Subtitle;
Project.Description = Description;
Project.Experience = Experience;
Project.Skillset = Skillset;
