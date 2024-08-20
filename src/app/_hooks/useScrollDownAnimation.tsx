import { useEffect } from 'react';

function useScrollDownAnimation(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('translate-y-10');
                    entry.target.classList.add('translate-y-0');
                }
            });
        });

        ref.current
            .querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, li, div')
            .forEach((tag) => {
                observer.observe(tag);
                tag.classList.add('opacity-0');
                tag.classList.add('translate-y-10');
                tag.classList.add('duration-[600ms]');
                tag.classList.add('transition-all');
                tag.classList.add('ease-in-out');
            });
    }, [ref]);

    return null;
}

export default useScrollDownAnimation;
