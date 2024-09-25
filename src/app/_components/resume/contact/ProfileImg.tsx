import { useState } from 'react';

import Spinner from '@/_components/Spinner';

export default function ProfileImg({ profileImg }: { profileImg: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
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
    );
}
