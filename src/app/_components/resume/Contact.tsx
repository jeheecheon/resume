import { useState } from 'react';
import Spinner from '@/_components/Spinner';
import profileImg from '@/_images/profile.webp';

function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div>
            <h2>Contact</h2>

            <div className="flex flex-col items-center sm:items-start sm:flex-row-reverse justify-between gap-y-3 ">
                <div>
                    {/* 프로필 이미지 로딩 중에 스피너 표시 */}
                    <Spinner
                        className={`sm:w-[18rem] sm:h-[18rem] md:h-[21rem] md:w-[21rem] h-[20rem] w-[20rem]
                        ${isLoaded && 'hidden'}`}
                    />

                    {/* 프로필 이미지 */}
                    <img
                        src={profileImg}
                        className={`w-full h-full sm:max-w-[18rem] sm:max-h-[18rem] md:max-h-[21rem] md:max-w-[21rem] 
                        max-h-[20rem] max-w-[20rem] rounded-full ${
                            !isLoaded && 'hidden'
                        }`}
                        onLoad={() => setIsLoaded(true)}
                        alt="Profile Image"
                        title="Profile Image"
                    />
                </div>

                <div className="flex flex-col gap-y-5">
                    {/* 이메일 & 전화번호 */}
                    <div className="space-y-1 flex flex-col h-fit gap-[0.1rem]">
                        <h3 className="text-theme-1">Reach me</h3>

                        {/* 전화번호 */}
                        <span className="text-nowrap">
                            <p className="inline">{'Phone. '}</p>
                            <a title="Phone Number" href="tel:010-9666-8460">
                                010-9666-8460
                            </a>
                        </span>

                        {/* 이메일 */}
                        <span className="text-nowrap">
                            <p className="inline">{'Email. '}</p>
                            <a title="Email" href="mailto:jeheecheon@gmail.com">
                                jeheecheon@gmail.com
                            </a>
                        </span>
                    </div>

                    {/* 블로그 & 깃허브 */}
                    <div className="space-y-1 flex flex-col h-fit gap-[0.1rem]">
                        <h3 className="text-theme-1">Channel</h3>

                        {/* 블로그 */}
                        <span className="text-nowrap">
                            <p className="inline">{'Blog. '}</p>
                            <a
                                title="Blog"
                                href="https://blog.jeheecheon.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://blog.jeheecheon.com
                            </a>
                        </span>

                        {/* 깃허브 */}
                        <span className="text-nowrap">
                            <p className="inline">{'Github. '}</p>
                            <a
                                title="Github"
                                href="https://github.com/jeheecheon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://github.com/jeheecheon
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
