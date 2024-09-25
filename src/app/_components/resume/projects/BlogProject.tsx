import Project from '@/_components/resume/projects/project/Project';

export default function BlogProject() {
    return (
        <Project>
            <Project.Title>개인 블로그 개발</Project.Title>

            <Project.Subtitle>2023. 12. ~ 서비스 중{'\n'}</Project.Subtitle>

            <Project.Description
                linkInfos={[
                    {
                        label: '배포 링크',
                        href: 'https://blog.jeheecheon.com',
                    },
                    {
                        label: '깃허브 리포',
                        href: 'https://github.com/jeheecheon/blog',
                    },
                ]}
            >
                개인 DB를 활용하는 기술 블로그입니다.
            </Project.Description>

            <Project.Experience>
                <Project.Experience.Item>
                    풀스택 개발과정 경험.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    react-three fiber를 활용하여 3D 랜딩 페이지 구현.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    AWS EC2에 Nginx를 구성하고, GitHub Actions와 Docker로 CI/CD
                    환경을 구축.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    Quill 라이브러리를 통합해 실시간 글 작성 및 수정 기능을
                    구현하여 직관적인 텍스트 편집툴 적용.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    문자열 정제를 수행하여 CSRF 공격 방지.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    이미지 업로드 시 WebP 포맷으로 자동 변환되도록 구현하여
                    이미지 용량을 줄이고 페이지 로딩 속도 개선.
                </Project.Experience.Item>
                <Project.Experience.Item>
                    느린 배포 서버를 보완하기 위해 스켈레톤 UI 컴포넌트를
                    제작하여 사용자 경험 개선.
                </Project.Experience.Item>
            </Project.Experience>

            <Project.Skillset>
                <Project.Skillset.Tag>three.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>react-three-fiber</Project.Skillset.Tag>
                <Project.Skillset.Tag>react.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>typescript</Project.Skillset.Tag>
                <Project.Skillset.Tag>tailwindcss</Project.Skillset.Tag>
                <Project.Skillset.Tag>react-query</Project.Skillset.Tag>
                <Project.Skillset.Tag>ReduxTK</Project.Skillset.Tag>
                <Project.Skillset.Tag>ASP.NET</Project.Skillset.Tag>
                <Project.Skillset.Tag>C#</Project.Skillset.Tag>
                <Project.Skillset.Tag>psgl</Project.Skillset.Tag>
                <Project.Skillset.Tag>AWS</Project.Skillset.Tag>
                <Project.Skillset.Tag>github actions</Project.Skillset.Tag>
            </Project.Skillset>
        </Project>
    );
}
