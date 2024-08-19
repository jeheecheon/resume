function Page() {
    return (
        <>
            <Page.Greeting />
        </>
    );
}

Page.Greeting = function Greeting() {
    return <h1 className="text-3xl">안녕하세요, 저는 천제희입니다.</h1>;
};

export default Page;
