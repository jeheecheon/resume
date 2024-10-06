import Project from '@/_components/resume/projects/project/Project';

export default function MuckgymmaProject() {
    return (
        <Project>
            <Project.Title>먹짐마</Project.Title>

            <Project.Subtitle>
                2024. 03. ~ 2024. 05. (3개월){'\n'}
                캡스톤 디자인 경진대회 동상{'\n'}
                협업 인원: 4명
            </Project.Subtitle>

            <Project.Description
                linkInfos={[
                    {
                        href: 'https://www.youtube.com/watch?v=lX7CzpYh6HU',
                        label: '시연 영상',
                    },
                    {
                        href: 'https://github.com/MJUZzang/muckGYMma',
                        label: 'Github',
                    },
                ]}
            >
                사진 속 식단을 인공지능이 분석 후 운동계획과 인스타 형식의
                커뮤니티 공간 제공.
            </Project.Description>

            <Project.List title="What I did">
                <Project.List.Item>
                    AWS EC2에 Nginx를 구성하고, GitHub Actions와 Docker로 CI/CD
                    환경을 구축.
                </Project.List.Item>
                <Project.List.Item>
                    react-easy-crop 라이브러리를 통합하여 이미지 업로드 전 크롭,
                    확대, 회전 기능을 구현하여 이미지 편집의 유연성과 사용자
                    경험을 향상.
                </Project.List.Item>
                <Project.List.Item>
                    타이핑 애니메이션, 페이지 전환 애니메이션 등 적용하여
                    모바일에서 UI의 반응성 향상.
                </Project.List.Item>
            </Project.List>

            <Project.List title="Reflections">
                <Project.List.Item>
                    팀 구성원의 경험 부족으로 디자인 패턴을 적용하지 못해
                    유지보수성이 다소 미흡했습니다.
                </Project.List.Item>
                <Project.List.Item>
                    SEO 최적화를 위한 meta 태그 관리가 미흡하여 Next.js의 SSR
                    이점을 충분히 활용하지 못했습니다.
                </Project.List.Item>
            </Project.List>

            <Project.Skillset>
                <Project.Skillset.Tag>Next.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>Typescript</Project.Skillset.Tag>
                <Project.Skillset.Tag>Tailwindcss</Project.Skillset.Tag>
                <Project.Skillset.Tag>ReduxTK</Project.Skillset.Tag>
            </Project.Skillset>
        </Project>
    );
}
