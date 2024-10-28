import { HTMLAttributes } from 'react';

import MuckgymmaProject from '@/_components/resume/projects/MuckgymmaProject';
import BlogProject from '@/_components/resume/projects/BlogProject';
import EtcProject from '@/_components/resume/projects/EtcProject';
import Project from '@/_components/resume/projects/project';
import NeogulProject from '@/_components/resume/projects/NeogulProject';
import Separator from '@/_components/resume/projects/project/Separator';

function Projects({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <h2>Projects</h2>

            <div className="flex flex-col gap-y-[2.0rem] md:gap-y-[3.5rem]">{children}</div>
        </div>
    );
}

export default Projects;

Projects.Project = Project;
Projects.Neogul = NeogulProject;
Projects.Muckgymma = MuckgymmaProject;
Projects.Blog = BlogProject;
Projects.Etc = EtcProject;
Projects.Separator = Separator
