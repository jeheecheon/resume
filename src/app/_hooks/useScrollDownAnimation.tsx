import { useEffect } from 'react';

function useScrollDownAnimation(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('animate-fade-in');
                }
            });
        });

        ref.current
            .querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li')
            .forEach((tag) => {
                observer.observe(tag);
                tag.classList.add('opacity-0');
            });
    }, [ref]);

    return null;
}

export default useScrollDownAnimation;
