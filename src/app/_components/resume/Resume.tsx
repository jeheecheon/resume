import { useRef } from 'react';

import useScrollDownAnimation from '@/_hooks/useScrollDownAnimation';
import Greeting from '@/_components/resume/greeting';
import Introduction from '@/_components/resume/introduction';
import Contact from '@/_components/resume/contact/Contact';
import Projects from '@/_components/resume/projects';
import AwardsAndScores from '@/_components/resume/awards-and-scores';
import Education from '@/_components/resume/education';
import CoverLetter from '@/_components/resume/cover-letter';

function Resume() {
    const ref = useRef<HTMLDivElement>(null);
    useScrollDownAnimation(ref);

    return (
        <div ref={ref} className="whitespace-pre-line pt-10 pb-[30vh]">
            <Greeting>
                👨🏻‍💻{'\n'}
                안녕하세요,{'\n'}
                저는 천제희입니다
            </Greeting>

            <Introduction>
                {`"코드의 깊이"`}를 중시하는 프론트엔드 개발자입니다. 단순한
                기능구현을 넘어서, 동작원리를 파헤치고 이해하는 것을 사랑하는
                사람입니다.
            </Introduction>

            <Contact>
                <Contact.ReachMe />
                <Contact.Channel />
            </Contact>

            <Projects>
                <Projects.Neogul />
                <Projects.Separator />
                <Projects.Muckgymma />
                <Projects.Separator />
                <Projects.Blog />
                <Projects.Separator />
                <Projects.Etc />
            </Projects>

            <CoverLetter />

            <AwardsAndScores>
                <AwardsAndScores.CapstoneDesign />
                <AwardsAndScores.DigitalLiteracy />
                <AwardsAndScores.Toeic />
            </AwardsAndScores>

            <Education>
                <Education.University />
            </Education>
        </div>
    );
}

export default Resume;
