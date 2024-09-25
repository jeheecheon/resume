import Project from '@/_components/resume/projects/project/Project';

export default function NeogulProject() {
    return (
        <Project>
            <Project.Title>너굴게임</Project.Title>

            <Project.Subtitle>
                2024. 08. ~ 진행 중{'\n'}
                협업 인원: 2명
            </Project.Subtitle>

            <Project.Description
                linkInfos={[
                    {
                        label: 'Github',
                        href: 'https://github.com/NeoGul-GAME/FE',
                    },
                ]}
            >
                멀티플레이와 랭킹 시스템이 있는 웹앱 게임.
            </Project.Description>

            <Project.List title="What I did">
                <Project.List.Item>
                    Storybook 도입 및 CDD(Component-Driven Development)
                    프로세스를 적용하여 컴포넌트 개발의 일관성과 재사용성 향상.
                </Project.List.Item>
                <Project.List.Item>
                    Jest를 통한 테스트 자동화와 코드 안정성 확보.
                </Project.List.Item>
                <Project.List.Item>
                    react-stomp 라이브러리를 통합하여 STOMP 프로토콜을 통한
                    게임플레이 통신 기능 구현.
                </Project.List.Item>
                <Project.List.Item>...진행 중입니다</Project.List.Item>
            </Project.List>

            <Project.Skillset>
                <Project.Skillset.Tag>Storybook</Project.Skillset.Tag>
                <Project.Skillset.Tag>React.js</Project.Skillset.Tag>
                <Project.Skillset.Tag>Typescript</Project.Skillset.Tag>
                <Project.Skillset.Tag>Tailwindcss</Project.Skillset.Tag>
                <Project.Skillset.Tag>Zustand</Project.Skillset.Tag>
                <Project.Skillset.Tag>Zest</Project.Skillset.Tag>
            </Project.Skillset>
        </Project>
    );
}
