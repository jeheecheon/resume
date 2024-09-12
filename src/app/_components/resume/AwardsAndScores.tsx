function AwardsAndScores() {
    return (
        <div>
            <h2>Awards & Scores</h2>
            <div>
                <h3 className="text-theme-1">
                    <span>캡스톤디자인 경진 대회 -</span>
                    <span className="dark:text-inverse-1">{` 동상`}</span>
                </h3>
                <p className="text-xs sm:text-sm">
                    <span>2024. 06. 10.{`\n`}</span>
                    <span>
                        캡스톤디자인 경진대회는 실생활 문제를 해결하는 창의적인
                        소프트웨어 또는 하드웨어 프로젝트를 평가하는 대회입니다.
                    </span>
                </p>
            </div>

            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">
                    <span>디지털 리터리스 PT 경진대회 -</span>
                    <span className="dark:text-inverse-1">{` 우수상`}</span>
                </h3>
                <p className="text-xs sm:text-sm">
                    <span>2023. 12. 27.{`\n`}</span>
                    <span>
                        디지털 리터러시 PT 경진대회는 디지털 도구와 정보 활용
                        능력을 평가하는 발표 대회입니다.
                    </span>
                </p>
            </div>

            <div className="mt-[1.5rem]">
                <h3 className="text-theme-1">
                    <span>토익 -</span>
                    <span className="dark:text-inverse-1">{` 855점`}</span>
                </h3>
                <p className="text-xs sm:text-sm">2023. 08. 06.</p>
            </div>
        </div>
    );
}

export default AwardsAndScores;
