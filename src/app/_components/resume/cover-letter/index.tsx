import Paragraph from './Paragraph';
import Subheading from './Subheading';

export default function CoverLetter() {
    return (
        <div>
            <h2>Cover Letter</h2>

            <div className="leading-8 text-[1.08rem]">
                <Subheading>축구 꿈나무에서, 프로그래머로</Subheading>
                <Paragraph>
                    중학교 때 학업을 뒤로 하고 축구에 오랜시간 매진했지만
                    부상으로 소중한 꿈을 접었습니다. 신체적 부상으로 심적으로
                    일어서기 힘들 때 다시 연필을 쥐고 학업 동기부여를 준 것은
                    다름 아닌 “축구 게임” 이었습니다. 당시 뛸 수 없던 저에게
                    화려한 그래픽으로 가상의 선수를 조작하며 비슷한 즐거움을
                    느끼게 해줬던 경험은 아직도 생생합니다. 이 때 느꼈던
                    호기심은 자연스레 게임의 동작원리의 궁금증으로 이어졌으며,
                    이어서 C언어를 독학하며 프로그래머의 길에 첫 발을
                    내디뎠습니다.
                </Paragraph>
                <Subheading className="mt-3">
                    사용자 경험을 창출하는 프론트엔드 개발자로
                </Subheading>
                <Paragraph>
                    컴퓨터공학을 전공하며, 화려한 그래픽과 인터페이스에 대한
                    관심은 사용자 경험을 다루는 웹 프론트엔드 분야로 자연스럽게
                    이어졌습니다. React.js와 TypeScript, Tailwind CSS 등을
                    익히며 효율적이고 유지보수 가능한 코드를 작성하는 데
                    주력하였고, 상태 관리와 컴포넌트 기반 아키텍처 설계를 통해
                    사용자에게 직관적이고 일관된 경험을 제공하는 방법을
                    익혔습니다. 또한, 다양한 디바이스에서도 일관된 사용자 경험을
                    구현하기 위해 반응형 디자인의 중요성을 깊이 이해하게
                    되었습니다.
                </Paragraph>
                <Paragraph>
                    이러한 학습의 결실로 완성한 개인 기술 블로그는 저의 성장을
                    잘 보여주는 프로젝트입니다. 이 블로그는 게시글 및 댓글의
                    CRUD 기능을 포함하며, AWS와 GitHub Actions를 활용한 CI/CD
                    파이프라인을 구축해 기본적인 풀스택 개발 지식을 익히는 데
                    많은 도움이 되었습니다. 이를 통해 프론트엔드 개발자로서
                    백엔드 프로그래머의 고충과 요구사항을 이해하고, 원활하게
                    소통할 수 있는 능력을 갖추게 되었습니다.
                </Paragraph>
            </div>
        </div>
    );
}
