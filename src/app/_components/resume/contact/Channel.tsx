import Contact from "@/_components/resume/contact/Contact";

export default function Channel() {
    return (
        <Contact.Section>
            <Contact.Section.Title>Channel</Contact.Section.Title>
            <Contact.Section.Item
                label="Blog"
                href="https://blog.jeheecheon.com"
                value="blog.jeheecheon.com"
            />
            <Contact.Section.Item
                label="Github"
                href="https://github.com/jeheecheon"
                value="github.com/jeheecheon"
            />
        </Contact.Section>
    );
}
