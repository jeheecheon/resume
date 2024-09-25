import Project from '@/_components/resume/projects/project/Project';

export default function MuckgymmaProject() {
    return (
        <Project>
            <Project.Title>먹짐마</Project.Title>

            <Project.Subtitle>
                2024. 03. ~ 2024. 05. (3개월){'\n'}
                팀장 | 총 4명{'\n'}
                캡스톤 디자인 경진대회 동상
            </Project.Subtitle>

            <Project.Description
                linkInfos={[
                    {
                        href: 'https://www.youtube.com/watch?v=lX7CzpYh6HU',
                        label: '시연 영상',
                    },
                    {
                        href: 'https://github.com/MJUZzang/muckGYMma',
                        label: '깃허브 리포',
                    },
                ]}
            >
                먹짐마 (웹앱).{'\n'}
                인공지능을 통해 식단 관리와 운동 계획을 관리 받는 웹앱.
            </Project.Description>

            <Project.Experience>
                <Project.Experience.Item>
                    AWS EC2에 Nginx를 구성하고, GitHub Actions와 Docker로 CI/CD
                    환경을 구축.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    Suspense API를 활용하여 외부 라이브러리 없이 비동기 상태
                    처리. 상태 관리의 복잡성을 줄이고, 로딩 상태를 보다
                    직관적으로 관리하여 UX 향상.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    react-easy-crop 라이브러리를 통합하여 이미지 업로드 전 크롭,
                    확대, 회전 기능을 구현하여 이미지 편집의 유연성과 사용자
                    경험을 향상.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    비동기 로딩 상태를 UI에 표시하여 대기 상태를 직관적으로
                    인식할 수 있도록 구현.
                </Project.Experience.Item>
            </Project.Experience>

            <Project.Skillset>
                <Project.Skillset.Tag>next.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>typescript</Project.Skillset.Tag>
                <Project.Skillset.Tag>tailwindcss</Project.Skillset.Tag>
                <Project.Skillset.Tag>ReduxTK</Project.Skillset.Tag>
                <Project.Skillset.Tag>AWS</Project.Skillset.Tag>
                <Project.Skillset.Tag>github actions</Project.Skillset.Tag>
            </Project.Skillset>
        </Project>
    );
}
