import Project from '@/_components/resume/projects/project/Project';

export default function EtcProject() {
    return (
        <Project>
            <Project.Title>Etc</Project.Title>

            <p>이외 진행한 프로젝트들은 아래 링크에서 확인하실 수 있습니다.</p>

            <p className="mt-2">
                <span className="font-medium text-theme-1">Projects.{` `}</span>
                <a
                    title="Projects 카테고리"
                    href="https://blog.jeheecheon.com/categories/Projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://blog.jeheecheon.com/categories/Projects
                </a>
            </p>
        </Project>
    );
}
