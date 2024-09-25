import Project from '@/_components/resume/projects/project/Project';

export default function BlogProject() {
    return (
        <Project>
            <Project.Title>개인 블로그 개발</Project.Title>

            <Project.Subtitle>
                2023. 12. ~ 서비스 중{'\n'}단독 프로젝트
            </Project.Subtitle>

            <Project.Description
                linkInfos={[
                    {
                        label: '배포 링크',
                        href: 'https://blog.jeheecheon.com',
                    },
                    {
                        label: 'Github',
                        href: 'https://github.com/jeheecheon/blog',
                    },
                ]}
            >
                기술 블로그입니다.
            </Project.Description>

            <Project.List title="What I did">
                <Project.List.Item>풀스택 개발과정 경험</Project.List.Item>
                <Project.List.Item>
                    react-three fiber를 활용하여 3D 랜딩 페이지 구현
                </Project.List.Item>
                <Project.List.Item>
                    AWS EC2에 Nginx를 구성하고, GitHub Actions와 Docker로 CI/CD
                    환경을 구축.
                </Project.List.Item>
                <Project.List.Item>
                    Quill 라이브러리를 통합해 실시간 글 작성 및 수정 기능을
                    구현하여 직관적인 텍스트 편집툴 적용.
                </Project.List.Item>
                <Project.List.Item>
                    문자열 정제를 수행하여 CSRF 공격 방지.
                </Project.List.Item>
                <Project.List.Item>
                    이미지 업로드 시 WebP 포맷으로 자동 변환되도록 구현하여
                    이미지 용량을 줄이고 페이지 로딩 속도 개선.
                </Project.List.Item>
                <Project.List.Item>
                    느린 배포 서버를 보완하기 위해 스켈레톤 UI 컴포넌트를
                    제작하여 사용자 경험 개선.
                </Project.List.Item>
            </Project.List>

            <Project.List title="Reflections">
                컴포넌트 디자인 패턴이 부재한 상태에서 유지보수를 지속하며 그
                중요성을 체감했으며, 다양한 디자인 패턴을 학습하고 적용해보는
                계기가 되었습니다.
            </Project.List>

            <Project.Skillset>
                <Project.Skillset.Tag>react-three-fiber</Project.Skillset.Tag>
                <Project.Skillset.Tag>React.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>Typescript</Project.Skillset.Tag>
                <Project.Skillset.Tag>Tailwindcss</Project.Skillset.Tag>
                <Project.Skillset.Tag>Tanstack Query</Project.Skillset.Tag>
                <Project.Skillset.Tag>ReduxTK</Project.Skillset.Tag>
                <Project.Skillset.Tag>ASP.NET Core</Project.Skillset.Tag>
                <Project.Skillset.Tag>C#</Project.Skillset.Tag>
                <Project.Skillset.Tag>Psgl</Project.Skillset.Tag>
            </Project.Skillset>
        </Project>
    );
}
