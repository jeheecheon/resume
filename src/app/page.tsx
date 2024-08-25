import Tag from '@/_components/Tag';
import { useRef, useState } from 'react';
import useScrollDownAnimation from '@/_hooks/useScrollDownAnimation';
import profileImg from '@/_images/profile.webp';
import Spinner from './_components/Spinner';

function Page() {
    const ref = useRef<HTMLDivElement>(null);
    useScrollDownAnimation(ref);

    return (
        <div ref={ref} className="whitespace-pre-line pt-10 pb-[30vh]">
            <Page.Greeting />
            <Page.Introduction />
            <Page.Contact />
            <Page.Projects />
            <Page.AwardsAndScores />
            <Page.Education />
        </div>
    );
}

Page.Greeting = function Greeting() {
    return (
        <h1>
            👨🏻‍💻{'\n'}
            안녕하세요,{'\n'}
            저는 천제희입니다
        </h1>
    );
};

Page.Introduction = function Introduction() {
    return (
        <p className="text-[1.3rem] sm:text-[1.7rem] leading-[2.2rem] sm:leading-[3.1rem] text-pretty">
            {`"코드의 깊이"`}를 중시하는 프론트엔드 개발자입니다. 단순한
            기능구현을 넘어서 동작 원리를 이해하고, 간결한 코드를 작성하는 것을
            지향합니다. 개발자의 가치는 능동적인 협업력과 성장력이라 믿습니다.
            새로운 기술과 도구를 학습하며 지속적으로 성장하고자 노력합니다.
        </p>
    );
};

Page.Contact = function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div>
            <h2>Contact</h2>

            <div className="flex flex-col items-center sm:items-start sm:flex-row-reverse justify-between gap-y-3 ">
                <div>
                    <Spinner
                        className={`sm:w-[18rem] sm:h-[18rem] md:h-[21rem] md:w-[21rem] h-[20rem] w-[20rem]
                    ${isLoaded && 'hidden'}`}
                    />

                    <img
                        src={profileImg}
                        className={`w-full h-full sm:max-w-[18rem] sm:max-h-[18rem] md:max-h-[21rem] md:max-w-[21rem] 
                        max-h-[20rem] max-w-[20rem] rounded-full ${
                            !isLoaded && 'hidden'
                        }`}
                        onLoad={() => setIsLoaded(true)}
                        alt="Profile Image"
                        title="Profile Image"
                    />
                </div>

                <div className="flex flex-col gap-y-5">
                    <div className="space-y-1 flex flex-col h-fit gap-[0.1rem]">
                        <h3 className="text-theme-1">Reach me</h3>

                        <span className="text-nowrap">
                            <p className="inline">{'Phone. '}</p>
                            <a title="Phone Number" href="tel:010-9666-8460">
                                010-9666-8460
                            </a>
                        </span>

                        <span className="text-nowrap">
                            <p className="inline">{'Email. '}</p>
                            <a title="Email" href="mailto:jeheecheon@gmail.com">
                                jeheecheon@gmail.com
                            </a>
                        </span>
                    </div>

                    <div className="space-y-1 flex flex-col h-fit gap-[0.1rem]">
                        <h3 className="text-theme-1">Channel</h3>

                        <span className="text-nowrap">
                            <p className="inline">{'Blog. '}</p>
                            <a
                                title="Blog"
                                href="https://blog.jeheecheon.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://blog.jeheecheon.com
                            </a>
                        </span>

                        <span className="text-nowrap">
                            <p className="inline">{'Github. '}</p>
                            <a
                                title="Github"
                                href="https://github.com/jeheecheon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://github.com/jeheecheon
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Page.Projects = function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            <div>
                <h3>
                    먹짐마 - 캡스톤디자인 경진 대회{' '}
                    <span className="text-theme-1">(동상)</span>
                </h3>
                <p className="sm:mt-1 text-xs sm:text-base leading-[6rem]">
                    2024. 03. ~ 2024. 05.{'\n'}
                    팀장 | 총 4명
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>

                    <p className="leading-[1.6rem]">
                        먹짐마 (웹앱).{'\n'}
                        인공지능을 통해 식단 관리와 운동 계획을 관리 받는
                        웹앱입니다. 촬영한 음식 사진 속 칼로리와 식단을 분석
                        받거나 운동 계획을 추천받을 수 있으며, 인스타 형식의
                        커뮤니티 공간을 제공합니다.
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                팀장으로서 프로젝트 회의를 진행 및 Git 컨벤션
                                정의.
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS EC2에 nginx 웹서버 세팅. github actions와
                                Docker를 활용하여 CI/CD 환경 구축.
                            </p>
                        </li>
                        <li>
                            <p>
                                Next.js를 활용하여 단독으로 프론트엔드 파트
                                개발.
                            </p>
                        </li>
                        <li>
                            <p>
                                외부 라이브러리 도움을 받지 않고 비동기 상태
                                React의 Suspense API를 통해 처리.
                            </p>
                        </li>
                        <li>
                            <p>
                                사진 업로드 시 이미지 크롭, 확대, 회전 등의 기능
                                구현. react-easy-crop npm 모듈 활용.
                            </p>
                        </li>
                        <li>
                            <p>
                                비동기 데이터 로딩 중 로딩 상태임을 나타내는 UI
                                표시.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm sm:text-base">
                        <span>시연 영상. </span>
                        <a
                            title="먹짐마 시연 영상"
                            href="https://www.youtube.com/watch?v=lX7CzpYh6HU"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://www.youtube.com/watch?v=lX7CzpYh6HU
                        </a>
                    </p>
                    <p className="text-sm sm:text-base">
                        <span>깃허브 리포. </span>
                        <a
                            title="먹짐마 깃허브 리포"
                            href="https://github.com/jeheecheon/muckGYMma"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/jeheecheon/muckGYMma
                        </a>
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Skillset I Used</h4>
                    <aside className="flex flex-wrap mt-1 gap-2">
                        <Tag>next.js</Tag>
                        <Tag>typescript</Tag>
                        <Tag>tailwindcss</Tag>
                        <Tag>ReduxTK</Tag>
                        <Tag>AWS</Tag>
                        <Tag>Docker</Tag>
                        <Tag>github actions</Tag>
                    </aside>
                </div>
            </div>

            <div className="mt-[4.5rem]">
                <h3>개인 블로그 개발</h3>
                <p className="sm:mt-1 text-xs sm:text-base">
                    2024. 01. ~ 2024. 02.{'\n'}
                    개인 프로젝트 (유지보수 중)
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        개인 DB를 활용하는 기술 블로그입니다.
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                백엔드, DB, 프론트, 배포까지 모두 직접
                                구축해보며 웹의 동작 방식을 이해해보려 노력함.
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS EC2에 nginx 웹서버 세팅. github actions와
                                Docker를 활용하여 CI/CD 환경 구축.
                            </p>
                        </li>
                        <li>
                            <p>
                                실시간 글 작성/수정 기능 구현. Quill npm 모듈
                                활용.
                            </p>
                        </li>
                        <li>
                            <p>
                                CSRF 공격 예방하기 위해 DB에 저장하기 전
                                문자열을 정제. HtmlSanitizer Nuget Package 활용.
                            </p>
                        </li>
                        <li>
                            <p>
                                이미지 업로드 하기 전 이미지 포맷을 webp로 자동
                                변환. webp-converter-brower npm 모듈 활용.
                            </p>
                        </li>
                        <li>
                            <p>
                                다소 느린 배포 서버가 사용자 경험에 미치는
                                영향을 최소화하기 위해 스켈레톤 UI 컴포넌트를
                                제작. 비동기 상태관리는 react-query를 사용.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm sm:text-base">
                        <span>배포 링크. </span>
                        <a
                            title="개인 블로그"
                            href="https://blog.jeheecheon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://blog.jeheecheon.com
                        </a>
                    </p>
                    <p className="text-sm sm:text-base">
                        <span>깃허브 리포. </span>
                        <a
                            title="개인 블로그 깃허브 리포"
                            href="https://github.com/jeheecheon/blog"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/jeheecheon/blog
                        </a>
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Skillset I Used</h4>
                    <div className="flex flex-wrap mt-1 gap-2">
                        <Tag>ASP.NET</Tag>
                        <Tag>psgl</Tag>
                        <Tag>OAuth2.0</Tag>
                        <Tag>react.js</Tag>
                        <Tag>typescript</Tag>
                        <Tag>tailwindcss</Tag>
                        <Tag>ReduxTK</Tag>
                        <Tag>react-query</Tag>
                        <Tag>AWS</Tag>
                        <Tag>S3</Tag>
                        <Tag>Docker</Tag>
                        <Tag>github actions</Tag>
                    </div>
                </div>
            </div>

            <div className="mt-[4.5rem]">
                <h3>AO 스터디 공식 웹사이트</h3>
                <p className="sm:mt-1 text-xs sm:text-base">
                    2024. 01. ~ 2024. 02.{'\n'}
                    멘토 | 총 12명
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        명지대 AO 스터디의 공식 웹사이트입니다. 스터디 홍보
                        목적으로 제작했으며, 실시간으로 지원서를 제출 받을 수
                        있습니다.
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                멘토, 팀장으로서 참여하여 git 컨벤션 구성 및
                                프론트팀과 백엔드팀의 질문을 받음.
                            </p>
                        </li>
                        <li>
                            <p>
                                프로젝트 전반에 걸쳐 팀원들과 협업하며 문제를
                                해결하고, 효율적인 개발 환경을 조성하는 데 기여.
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS EC2에 nginx 웹서버 세팅. github actions와
                                Docker를 활용하여 CI/CD 환경 구축.
                            </p>
                        </li>
                        <li>
                            <p>
                                두개의 프론트엔드 팀이 개발한 코드베이스를 통합.
                                Svelte 컴포넌트를 React로 변환.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm sm:text-base">
                        <span>배포 링크. </span>
                        <a
                            title="AO 스터디 공식 웹사이트"
                            href="https://www.fireao.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://www.fireao.com/
                        </a>
                    </p>
                    <p className="text-sm sm:text-base">
                        <span>깃허브 리포. </span>
                        <a
                            title="AO 스터디 공식 웹사이트 깃허브 리포"
                            href="https://github.com/Fire-AO/official-website"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/Fire-AO/official-website
                        </a>
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Skillset I Used</h4>
                    <div className="flex flex-wrap mt-1 gap-2">
                        <Tag>react.js</Tag>
                        <Tag>tailwindcss</Tag>
                        <Tag>typescript</Tag>
                        <Tag>AWS</Tag>
                        <Tag>Docker</Tag>
                        <Tag>github actions</Tag>
                    </div>
                </div>
            </div>

            <div className="mt-[4.5rem]">
                <h3>Etc</h3>
                <p className="mt-1">
                    이외 진행했던 프로젝트들은 아래 링크에서 확인할 수 있습니다.
                </p>
                <p className="text-xs sm:text-sm">
                    <span className="font-medium text-theme-1">
                        Projects Cagetory.{' '}
                    </span>
                    <a
                        title="Projects 카테고리"
                        href="https://blog.jeheecheon.com/categories/Projects"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://blog.jeheecheon.com/categories/Projects
                    </a>
                </p>
            </div>
        </div>
    );
};

Page.AwardsAndScores = function AwardsAndScores() {
    return (
        <div>
            <h2>Awards & Scores</h2>
            <div>
                <h3 className="text-theme-1">
                    <span>캡스톤디자인 경진 대회 -</span>
                    <span className="dark:text-inverse-1">{` 동상`}</span>
                </h3>
                <p className="text-xs sm:text-sm">
                    <span>2024. 06. 10.{`\n`}</span>
                    <span>
                        캡스톤디자인 경진대회는 실생활 문제를 해결하는 창의적인
                        소프트웨어 또는 하드웨어 프로젝트를 평가하는 대회입니다.
                    </span>
                </p>
            </div>

            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">
                    <span>디지털 리터리스 PT 경진대회 -</span>
                    <span className="dark:text-inverse-1">{` 우수상`}</span>
                </h3>
                <p className="text-xs sm:text-sm">
                    <span>2023. 12. 27.{`\n`}</span>
                    <span>
                        디지털 리터러시 PT 경진대회는 디지털 도구와 정보 활용
                        능력을 평가하는 발표 대회입니다.
                    </span>
                </p>
            </div>

            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">
                    <span>토익 -</span>
                    <span className="dark:text-inverse-1">{` 855점`}</span>
                </h3>
                <p className="text-xs sm:text-sm">2023. 08. 06.</p>
            </div>
        </div>
    );
};

Page.Education = function Education() {
    return (
        <div>
            <h2>Education</h2>
            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">
                    <span>명지대학교 -</span>
                    <span className="dark:text-inverse-1">{` 컴퓨터공학과`}</span>
                </h3>
                <p className="text-xs sm:text-sm">
                    2018. 03. ~ 2025. 02. (재학 중)
                </p>
            </div>
        </div>
    );
};

export default Page;
