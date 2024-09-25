import { HTMLAttributes } from 'react';

import Section from '@/_components/resume/education/Section';
import Univ from "@/_components/resume/education/Univ";

function Education({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div>
            <h2>Education</h2>

            {children}
        </div>
    );
}

export default Education;

Education.Section = Section;
Education.University = Univ;
