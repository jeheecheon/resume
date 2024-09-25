import { useRef } from 'react';

import useScrollDownAnimation from '@/_hooks/useScrollDownAnimation';
import Greeting from '@/_components/resume/greeting';
import Introduction from '@/_components/resume/introduction';
import Contact from '@/_components/resume/contact/Contact';
import Projects from '@/_components/resume/projects';
import AwardsAndScores from '@/_components/resume/awards-and-scores';
import Education from '@/_components/resume/education';

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
                기능구현을 넘어서 동작 원리를 이해하고, 간결한 코드를 작성하는
                것을 지향합니다. 새로운 기술과 도구를 학습하며 지속적으로
                성장하고자 노력합니다.
            </Introduction>

            <Contact>
                <Contact.ReachMe />
                <Contact.Channel />
            </Contact>

            <Projects>
                <Projects.Muckgymma />
                <Projects.Blog />
                <Projects.Etc />
            </Projects>

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
