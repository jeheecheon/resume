import Tag from '@/_components/Tag';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            {/* 캡스톤 프로젝트 */}
            <div>
                {/* 프로젝트 제목 */}
                <h3>
                    먹짐마 - 캡스톤디자인 경진 대회{' '}
                    <span className="text-theme-1">(동상)</span>
                </h3>

                {/* 프로젝트 기간 및 인원 */}
                <p className="sm:mt-1 text-xs sm:text-sm">
                    2024. 03. ~ 2024. 05.{'\n'}
                    팀장 | 총 4명
                </p>

                {/* 프로젝트 설명 */}
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

                {/* 기여 내역 */}
                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                AWS EC2에 Nginx를 구성하고, GitHub Actions 및
                                Docker를 사용하여 CI/CD 환경을 구축하여 배포
                                프로세스를 자동화
                            </p>
                        </li>
                        <li>
                            <p>
                                Next.js를 사용해 프론트엔드 파트를 독립적으로
                                개발하여 서버 사이드 렌더링과 정적 사이트 생성의
                                이점을 활용.
                            </p>
                        </li>
                        <li>
                            <p>
                                Suspense API를 활용하여 외부 라이브러리 없이
                                비동기 상태 처리. Suspense API 사용으로 상태
                                관리의 복잡성을 줄이고, 로딩 상태를 보다
                                직관적으로 관리하여 UX 향상.
                            </p>
                        </li>
                        <li>
                            <p>
                                react-easy-crop 모듈을 활용해 이미지 업로드 전
                                크롭, 확대, 회전 기능을 구현하여 이미지 편집의
                                유연성과 사용자 경험을 향상.
                            </p>
                        </li>
                        <li>
                            <p>
                                비동기 데이터 로딩 중 로딩 상태를 UI에 표시하여
                                사용자가 대기 상태를 직관적으로 인식할 수 있도록
                                구현.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* 링크 */}
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
                    <p className="text-sm sm:text-base">
                        <span>관련 블로그 글. </span>
                        <a
                            title="관련 블로그 글"
                            href="https://blog.jeheecheon.com/posts/549f411e-5a17-4882-87cc-0d0eec2c62a9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://blog.jeheecheon.com/posts/549f411e-5a17-4882-87cc-0d0eec2c62a9
                        </a>
                    </p>
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
                    2023. 12. ~ 2024. 02.{'\n'}
                    개인 프로젝트 (유지보수 중)
                </p>

                {/* 프로젝트 설명 */}
                <div>
                    <h4 className="mt-5 text-theme-1">Description</h4>
                    <p className="leading-[1.6rem]">
                        개인 DB를 활용하는 기술 블로그입니다.
                    </p>
                </div>

                {/* 기여 내역 */}
                <div>
                    <h4 className="mt-5 text-theme-1">What I did</h4>
                    <ul>
                        <li>
                            <p>
                                백엔드, DB, 프론트, 배포까지 모두 직접
                                구축해보며 기본적인 웹의 동작 방식을 이해함.
                            </p>
                        </li>
                        <li>
                            <p>
                                AWS EC2에 Nginx를 구성하고, GitHub Actions 및
                                Docker를 사용하여 CI/CD 환경을 구축하여 배포
                                프로세스를 자동화.
                            </p>
                        </li>
                        <li>
                            <p>
                                Quill 라이브러리를 통합해 실시간 글 작성 및 수정
                                기능을 구현하여 직관적인 텍스트 편집툴 적용.
                            </p>
                        </li>
                        <li>
                            <p>
                                HtmlSanitizer 라이브러리로 문자열 정제를
                                수행하여 CSRF 공격 방지.
                            </p>
                        </li>
                        <li>
                            <p>
                                webp-converter-browser 모듈을 활용해 이미지
                                업로드 시 WebP 포맷으로 자동 변환되도록
                                구현하여, 이미지 용량을 줄이고 페이지 로딩 속도
                                개선.
                            </p>
                        </li>
                        <li>
                            <p>
                                느린 무료 배포 서버의 영향으로 인한 긴 트래픽
                                지연시간을 보완하기 위해 스켈레톤 UI 컴포넌트를
                                제작하여 사용자 경험 개선
                            </p>
                        </li>
                        <li>
                            <p>
                                비동기 상태 관리는 React Query로 데이터 패칭,
                                캐싱, 동기화를 자동화해 성능과 사용자 경험을
                                개선
                            </p>
                        </li>
                    </ul>
                </div>

                {/* 링크 */}
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
                    <p className="text-sm sm:text-base">
                        <span>관련 블로그 글. </span>
                        <a
                            title="관련 블로그 글"
                            href="https://blog.jeheecheon.com/posts/57998974-f98f-4afd-be3f-92e1166d74a1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://blog.jeheecheon.com/posts/57998974-f98f-4afd-be3f-92e1166d74a1
                        </a>
                    </p>
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
