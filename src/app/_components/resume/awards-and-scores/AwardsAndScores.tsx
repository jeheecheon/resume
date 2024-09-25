import { HTMLAttributes } from 'react';

import CapstoneDesign from '@/_components/resume/awards-and-scores/CapstoneDesign';
import DigitalLiteracy from '@/_components/resume/awards-and-scores/DigitalLiteracy';
import Toeic from '@/_components/resume/awards-and-scores/Toeic';
import Section from '@/_components/resume/awards-and-scores/Section';

function AwardsAndScores({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div>
            <h2>Awards & Scores</h2>

            <div className="flex flex-col gap-y-[1.5rem]">{children}</div>
        </div>
    );
}

export default AwardsAndScores;

AwardsAndScores.Section = Section;
AwardsAndScores.CapstoneDesign = CapstoneDesign;
AwardsAndScores.DigitalLiteracy = DigitalLiteracy;
AwardsAndScores.Toeic = Toeic;
