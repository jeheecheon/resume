function Page() {
    return (
        <div className="whitespace-pre-line">
            <Page.Greeting />

            <p className="mt-10"></p>
        </div>
    );
}

Page.Greeting = function Greeting() {
    return (
        <h1 className="text-[5rem] font-semibold leading-[6rem]">
            안녕하세요,{`\n`}
            개발자 천제희입니다
            <span className="theme-text-color">.</span>
        </h1>
    );
};

export default Page;
