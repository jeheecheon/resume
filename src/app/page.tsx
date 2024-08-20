import Tag from '@/_components/Tag';
import { useRef } from 'react';
import useScrollDownAnimation from './_hooks/useScrollDownAnimation';

function Page() {
    const ref = useRef<HTMLDivElement>(null);
    useScrollDownAnimation(ref);


    return (
        <div ref={ref} className="whitespace-pre-line py-10">
            <Page.Greeting />
            <Page.Introduction />
            <Page.Contact />
            <Page.Projects />
            <Page.Education />

            <div className="h-[30vh]"></div>
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
            기능구현을 넘어서 동작 원리를 이해하고, 최적화된 코드를 작성하는
            것을 지향합니다. 개발자의 가치는 능동적인 협업력과 성장력이라
            믿습니다. 새로운 기술과 도구를 학습하며 지속적으로 성장하고자
            노력합니다.
        </p>
    );
};

Page.Contact = function Contact() {
    return (
        <div>
            <h2>Contact</h2>

            <div className="flex flex-col sm:flex-row gap-x-4 items-center">
                {/* <div className="w-full aspect-square max-w-[14rem] bg-gray-200 rounded-full sm:rounded-3xl" /> */}

                <div className="w-full sm:w-fit px-3 sm:px-0 flex flex-col gap-y-3 justify-around">
                    <div className="space-y-1 flex flex-col">
                        <h3>Reach me</h3>

                        <span className="text-nowrap">
                            <p className="inline font-medium text-theme-1">
                                {'Phone. '}
                            </p>
                            <a
                                title="Phone Number"
                                href="tel:010-9666-8460"
                                className="text-sm"
                            >
                                010-9666-8460
                            </a>
                        </span>

                        <span className="text-nowrap">
                            <p className="inline font-medium text-theme-1">
                                {'Email. '}
                            </p>
                            <a
                                title="Email"
                                href="mailto:jeheecheon@gmail.com"
                                className="text-sm"
                            >
                                jeheecheon@gmail.com
                            </a>
                        </span>
                    </div>

                    <div className="space-y-1 flex flex-col">
                        <h3>Channel</h3>

                        <span className="text-nowrap">
                            <p className="inline font-medium text-theme-1">
                                {'Blog. '}
                            </p>
                            <a
                                title="Blog"
                                href="https://blog.jeheecheon.com"
                                className="text-sm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://blog.jeheecheon.com
                            </a>
                        </span>

                        <span className="text-nowrap">
                            <p className="inline font-medium text-theme-1">
                                {'Github. '}
                            </p>
                            <a
                                title="Github"
                                href="https://github.com/jeheecheon"
                                className="text-sm"
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
                    명지대학교 캡스톤디자인 경진 대회
                    <span className="text-theme-1">{` (동상)`}</span>
                </h3>
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2024. 03. ~ 2024. 05.{'\n'}
                    팀장 | 총 4명
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>

                    <p className="text-base leading-[1.6rem]">
                        먹짐마 (웹앱).{'\n'}
                        헬스장을 의미하는 단어 Gym과 많이 먹는 것을 자제하라는
                        의미가 포함된 프로젝트명입니다. 사용자의 식단 관리 및
                        운동 계획을 지원하며 인스타 형식의 커뮤니티를
                        제공합니다.{'\n\n'}
                    </p>
                    <ul>
                        <li>
                            <p>
                                촬영한 음식 사진의 칼로리와 식단을 AI가 분석 및
                                진단
                            </p>
                        </li>
                        <li>
                            <p>
                                사용자에게 적합한 운동플랜을 자동 생성 후 추천
                            </p>
                        </li>
                        <li>
                            <p>타미어와 함께 운동플랜 진행</p>
                        </li>
                        <li>
                            <p>
                                운동일지와 식단일지를 작성하고 공유할 수 있는
                                인스타 형식의 커뮤니티 공간 제공
                            </p>
                        </li>
                        <li>
                            <p>하루 물 섭취량 관리</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                팀장으로서 프로젝트 회의 진행. 아이디어 산출 및
                                Git컨벤션을 정의
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS의 EC2 관리 및 Nginx를 세팅. Github Actions와
                                Docker를 통한 CI/CD 환경 구축
                            </p>
                        </li>
                        <li>
                            <p>단독으로 프론트 개발</p>
                        </li>
                        <li>
                            <p>모바일 친화적인 UI/UX 디자인</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Project Review</h4>
                    <p className="leading-[1.6rem]">
                        프로젝트 특성에 맞춰 모바일 친화적인 UI/UX를 디자인
                        했습니다. Figma와 같은 디자인 툴을 다뤄본 적이 없기에
                        스케치를 곧바로 코드로 옮기는 방법을 택했는데 세심한
                        디테일에 신경쓰다보니 기존 디자인을 수정하는 일이 잦아
                        많은 시간이 할애됐습니다.{'\n'}
                        비동기 AI Call이 필요한 경우 유저에게 실시간 로딩 상태를
                        표시하여 반응성 높은 UX를 제공했습니다. Client-Side 에서
                        비동기 로직을 다룰 때는 외부 상태관리 라이브러리 도움
                        없이 React의 Suspense API를 활용하여 직접 처리해보기도
                        했습니다.{'\n'}
                        원할한 협업을 위해 Git 컨벤션을 정의했고 Squash-Merge
                        등을 활용하여 PR 관리를 하려 했으나 백엔드의 배포 상태에
                        결함이 있어 후반부에 제대로 지켜지지 못했습니다.
                    </p>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm">
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
                    <p className="text-sm">
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

            <div className="mt-[4rem]">
                <h3>개인 블로그 개발</h3>
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2024. 01. ~ 2024. 02.{'\n'}
                    개인 프로젝트 (유지보수 중)
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        개인 DB 서버를 활용하고 있습니다. Oatuh 로그인을
                        지원하며 동적으로 글, 댓글 등을 저장하거나 불러옵니다.
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>백엔드와 프론트의 개발부터 배포까지 경험</p>
                        </li>
                        <li>
                            <p>
                                AWS의 EC2 관리 및 Nginx를 세팅. Github actions와
                                Docker를 통한 CI/CD 환경 구축
                            </p>
                        </li>
                        <li>
                            <p>반응형 UI/UX 디자인</p>
                        </li>
                        <li>
                            <p>
                                AWS S3와 개인 DB를 활용하여 블로그 글에 첨부되는
                                이미지 관리
                            </p>
                        </li>
                        <li>
                            <p>
                                Quill html 편집 모듈을 통해 실시간으로 글 업로드
                                및 수정
                            </p>
                        </li>
                        <li>
                            <p>
                                CSRF 공격을 막기 위해 DB에 저장하기 전
                                백엔드에서 문자열을 정제
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Project Review</h4>
                    <p className="leading-[1.6rem]">
                        다소 느린 배포 서버가 사용자 경험에 미치는 영향을
                        최소화하기 위해 스켈레톤 UI 컴포넌트를 만들었습니다.
                        비동기 상태관리는 react-query를 사용하여 간단하게
                        처리했습니다. CSRF 공격을 막기 위해 백엔드에서 문자열을
                        정제하는 방법을 사용했습니다. 백엔드와 프론트의 전체적인
                        흐름을 경험하고 배포까지 해보았습니다.
                    </p>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm">
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
                    <p className="text-sm">
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

            <div className="mt-[4rem]">
                <h3>AO 스터디 공식 웹사이트</h3>
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2024. 01. ~ 2024. 02.{'\n'}
                    멘토 | 총 12명
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        명지대 AO 스터디의 공식 웹사이트입니다. 스터디 홍보
                        목적으로 제작되었으며, 신입 스터디원을 모집받기 위해
                        지원서 제출을 받을 수 있습니다.
                    </p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                Team 2의 멘토(팀장)으로 참여하여 프론트팀과
                                백엔드팀의 질문 답변 및 코드 리뷰
                            </p>
                        </li>
                        <li>
                            <p>git 컨벤션 구성</p>
                        </li>
                        <li>
                            <p>
                                AWS의 EC2 관리 및 Nginx를 세팅. Github actions와
                                Docker를 통한 CI/CD 환경 구축
                            </p>
                        </li>
                        <li>
                            <p>
                                Team 1과 Team 2의 프론트엔드 코드베이스 통합.
                                Svelte 코드를 React 코드로 수정
                            </p>
                        </li>
                        <li>
                            <p>다크 / 라이트 모드 구현</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Project Review</h4>
                    <p className="leading-[1.6rem]">
                        프론트와 백엔드의 코드베이스 통합 작업을 주도했습니다.
                        특히 Svelte로 작성된 코드베이스를 React로 변환하며,
                        프론트엔드 팀의 개발을 가이드하고 코드 리뷰를
                        진행했습니다. 프로젝트 전반에 걸쳐 팀원들과 협업하며
                        문제를 해결하고, 효율적인 개발 환경을 조성하는 데
                        기여했습니다.
                    </p>
                </div>

                <div className="mt-5 text-theme-1">
                    <h4>Links</h4>
                    <p className="text-sm">
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
                    <p className="text-sm">
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

            <div className="mt-[4rem]">
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

Page.Education = function Education() {
    return (
        <div>
            <h2>Education</h2>
            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">명지대학교 - 컴퓨터공학과</h3>
                <p className="text-xs sm:text-sm">
                    2018. 03. ~ 2025. 02. (재학 중)
                </p>
            </div>

            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">토익 - 855점</h3>
                <p className="text-xs sm:text-sm">2023. 08. 06.</p>
            </div>
        </div>
    );
};

export default Page;
