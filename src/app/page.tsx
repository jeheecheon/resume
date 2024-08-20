import Tag from './_components/Tag';

function Page() {
    return (
        <div className="whitespace-pre-line py-10">
            <Page.Greeting />
            <Page.Introduction />
            <Page.Contact />
            <Page.Projects />

            <div className="h-[100vh]"></div>
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
        <p className="text-[1.7rem] leading-[3.1rem] text-pretty">
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

            <div className="flex gap-x-4 items-center">
                <div className="w-[13rem] h-[13rem] bg-gray-200 rounded-3xl" />

                <div className="h-[13rem] flex flex-col justify-around">
                    <div className="space-y-1">
                        <h3>Reach me</h3>

                        <div>
                            <p className="inline font-medium text-theme-1">
                                {'Phone. '}
                            </p>
                            <a title="Phone Number" href="tel:010-9666-8460">
                                010-9666-8460
                            </a>
                        </div>

                        <div>
                            <p className="inline font-medium text-theme-1">
                                {'Email. '}
                            </p>
                            <a title="Email" href="mailto:jeheecheon@gmail.com">
                                jeheecheon@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3>Channel</h3>

                        <div>
                            <p className="inline font-medium text-theme-1">
                                {'Blog. '}
                            </p>
                            <a title="Blog" href="https://blog.jeheecheon.com">
                                https://blog.jeheecheon.com
                            </a>
                        </div>

                        <div>
                            <p className="inline font-medium text-theme-1">
                                {'Github. '}
                            </p>
                            <a
                                title="Github"
                                href="https://github.com/jeheecheon"
                            >
                                https://github.com/jeheecheon
                            </a>
                        </div>
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
                <p className="text-sm">
                    2024. 03. ~ 2024. 05.{'\n'}
                    팀장 | 총 4명
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>

                    <p>
                        먹짐마 (웹앱).{'\n'}
                        헬스장을 의미하는 Gym과 많이 먹는 것을 자제하라는
                        의미에서 지어진 프로젝트 이름입니다. 사용자의 식단 관리
                        및 운동 계획을 지원하는 웹앱입니다.{'\n\n'}
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
                                AWS의 EC2 인스턴스 관리 및 Nginx 세팅. Github
                                pages를 통한 CI/CD 환경 구축
                            </p>
                        </li>
                        <li>
                            <p>단독으로 프론트 개발</p>
                        </li>
                        <li>
                            <p>모바일 UI/UX 디자인</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Project Review</h4>
                    <p></p>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Skillset I Used</h4>
                    <div className="flex flex-wrap mt-1 gap-2">
                        <Tag>next.js</Tag>
                        <Tag>typescript</Tag>
                        <Tag>tailwindcss</Tag>
                        <Tag>ReduxTK</Tag>
                        <Tag>AWS</Tag>
                        <Tag>Docker</Tag>
                        <Tag>github pages</Tag>
                    </div>
                </div>
            </div>

            <div className="mt-[4rem]">
                <h3>개인 블로그 개발</h3>
                <p className="text-sm">
                    2024. 01. ~ 2024. 02.{'\n'}
                    개인 프로젝트
                </p>

                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p>
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
                                AWS의 EC2 인스턴스 관리 및 Nginx 세팅. Github
                                pages를 통한 CI/CD 환경 구축
                            </p>
                        </li>
                        <li>
                            <p>반응형 UI/UX 디자인</p>
                        </li>
                        <li>
                            <p>
                                AWS S3와 개인 DB를 활용하여 블로그 글에 첨부되는
                                이미지 저장
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mt-5 text-theme-1">Project Review</h4>
                    <p></p>
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
                        <Tag>github pages</Tag>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
