import Tag from '@/_components/Tag';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            {/* 캡스톤 프로젝트 */}
            <div>
                {/* 프로젝트 제목 */}
                <h3>먹짐마</h3>

                {/* 프로젝트 기간 및 인원 */}
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2024. 03. ~ 2024. 05. (3개월){'\n'}
                    팀장 | 총 4명{'\n'}
                    캡스톤 디자인 경진대회 동상
                </p>

                {/* 프로젝트 설명 */}
                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>

                    <p className="leading-[1.6rem]">
                        먹짐마 (웹앱).{'\n'}
                        인공지능을 통해 식단 관리와 운동 계획을 관리 받는 웹앱.
                    </p>

                    <div>
                        (
                        <a
                            className="mx-1"
                            title="먹짐마 시연 영상"
                            href="https://www.youtube.com/watch?v=lX7CzpYh6HU"
                            target="_blank"
                            rel="noreferrer"
                        >
                            유튜브 영상
                        </a>
                        |
                        <a
                            className="mx-1"
                            title="먹짐마 깃허브 리포"
                            href="https://github.com/MJUZzang/muckGYMma"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        )
                    </div>
                </div>

                {/* 기여 내역 */}
                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                AWS EC2에 Nginx를 구성하고, GitHub Actions와
                                Docker로 CI/CD 환경을 구축.
                            </p>
                        </li>
                        <li>
                            <p>
                                Suspense API를 활용하여 외부 라이브러리 없이
                                비동기 상태 처리. 상태 관리의 복잡성을 줄이고,
                                로딩 상태를 보다 직관적으로 관리하여 UX 향상.
                            </p>
                        </li>
                        <li>
                            <p>
                                react-easy-crop 라이브러리를 통합하여 이미지
                                업로드 전 크롭, 확대, 회전 기능을 구현하여
                                이미지 편집의 유연성과 사용자 경험을 향상.
                            </p>
                        </li>
                        <li>
                            <p>
                                비동기 로딩 상태를 UI에 표시하여 대기 상태를
                                직관적으로 인식할 수 있도록 구현.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* 사용 기술 */}
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

            {/* 개인 블로그 개발 */}
            <div className="mt-[4.5rem]">
                {/* 프로젝트 제목 */}
                <h3>개인 블로그 개발</h3>

                {/* 프로젝트 기간 및 인원 */}
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2023. 12. ~ 서비스 중{'\n'}
                </p>

                {/* 프로젝트 설명 */}
                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        개인 DB를 활용하는 기술 블로그입니다.
                    </p>

                    <div>
                        (
                        <a
                            className="mx-1"
                            title="기술 블로그"
                            href="https://blog.jeheecheon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            배포 링크
                        </a>
                        |
                        <a
                            className="mx-1"
                            title="개인 블로그 깃허브 리포"
                            href="https://github.com/jeheecheon/blog"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        )
                    </div>
                </div>

                {/* 기여 내역 */}
                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>풀스택 개발과정 경험.</p>
                        </li>
                        <li>
                            <p>
                                react-three fiber를 활용하여 3D 랜딩 페이지
                                구현.
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS EC2에 Nginx를 구성하고, GitHub Actions와
                                Docker로 CI/CD 환경을 구축.
                            </p>
                        </li>
                        <li>
                            <p>
                                Quill 라이브러리를 통합해 실시간 글 작성 및 수정
                                기능을 구현하여 직관적인 텍스트 편집툴 적용.
                            </p>
                        </li>
                        <li>
                            <p>문자열 정제를 수행하여 CSRF 공격 방지.</p>
                        </li>
                        <li>
                            <p>
                                이미지 업로드 시 WebP 포맷으로 자동 변환되도록
                                구현하여 이미지 용량을 줄이고 페이지 로딩 속도
                                개선.
                            </p>
                        </li>
                        <li>
                            <p>
                                느린 배포 서버를 보완하기 위해 스켈레톤 UI
                                컴포넌트를 제작하여 사용자 경험 개선.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* 사용 기술 */}
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

            {/* 기타 프로젝트 */}
            <div className="mt-[4.5rem]">
                <h3>Etc</h3>
                <p className="mt-1">
                    이외 진행한 프로젝트들은 아래 링크에서 확인하실 수 있습니다.
                </p>
                <p className="mt-2 text-xs sm:text-sm">
                    <span className="font-medium text-theme-1">
                        Projects.{` `}
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
}

export default Projects;
