import useScrollDownAnimation from '@/_hooks/useScrollDownAnimation';
import { useRef } from 'react';

import Greeting from '@/_components/resume/Greeting';
import Introduction from '@/_components/resume/Introduction';
import Contact from '@/_components/resume/Contact';
import Projects from '@/_components/resume/Projects';
import AwardsAndScores from '@/_components/resume/AwardsAndScores';
import Education from '@/_components/resume/Education';

function Resume() {
    const ref = useRef<HTMLDivElement>(null);
    useScrollDownAnimation(ref);

    return (
        <div ref={ref} className="whitespace-pre-line pt-10 pb-[30vh]">
            <Greeting />
            <Introduction />
            <Contact />
            <Projects />
            <AwardsAndScores />
            <Education />
        </div>
    );
}

export default Resume;
