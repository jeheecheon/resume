import Contact from '@/_components/resume/contact/Contact';

export default function ReachMe() {
    return (
        <Contact.Section>
            <Contact.Section.Title>Reach me</Contact.Section.Title>
            <Contact.Section.Item
                label="Phone"
                href="tel:010-9666-8460"
                value="010-9666-8460"
            />
            <Contact.Section.Item
                label="Email"
                href="mailto:jeheecheon@gmail.com"
                value="jeheecheon@gmail.com"
            />
        </Contact.Section>
    );
}
