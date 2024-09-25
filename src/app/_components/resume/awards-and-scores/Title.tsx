export default function Title({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <h3 className="text-theme-1">
            <span>{`${title} -`}</span>
            <span className="dark:text-inverse-1">{` ${subtitle}`}</span>
        </h3>
    );
}
