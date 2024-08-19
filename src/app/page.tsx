function Page() {
    return (
        <div className="whitespace-pre-line">
            <Page.Greeting />
            <Page.Introduction />
        </div>
    );
}

Page.Greeting = function Greeting() {
    return (
        <h1 className="text-[5rem] font-semibold leading-[5.5rem]">
            안녕하세요,{`\n`}
            저는 천제희입니다
            <span className="text-theme-1">.</span>
        </h1>
    );
};

Page.Introduction = function Introduction() {
    return (
        <p className="mt-10 text-[1.9rem] leading-[3.1rem] text-pretty">
            {`"코드의 깊이"`}를 중시하는 프론트엔드 개발자입니다. 단순한
            기능구현을 넘어서 동작 원리를 이해하고, 최적화된 코드를 작성하는
            것을 지향합니다. 개발자의 가치는 능동적인 협업력과 성장력이라
            믿습니다. 새로운 기술과 도구를 학습하며 지속적으로 성장하고자
            노력합니다.
        </p>
    );
};

export default Page;
