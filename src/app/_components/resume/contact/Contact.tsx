import { HTMLAttributes } from 'react';

import ProfileImg from '@/_components/resume/contact/ProfileImg';
import Section from '@/_components/resume/contact/Section';
import ReachMe from '@/_components/resume/contact/ReachMe';
import Channel from '@/_components/resume/contact/Channel';

import me from '@/_images/profile.webp';

export default function Contact({ children }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div>
            <h2>Contact</h2>

            <div className="flex flex-col items-center sm:items-start sm:flex-row-reverse justify-between gap-y-3 ">
                <Contact.ProfileImg profileImg={me} />

                <div className="flex flex-col gap-y-5">{children}</div>
            </div>
        </div>
    );
}

Contact.ProfileImg = ProfileImg;
Contact.Section = Section;
Contact.ReachMe = ReachMe;
Contact.Channel = Channel;
