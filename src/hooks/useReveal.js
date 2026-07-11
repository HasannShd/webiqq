import { useEffect } from 'react';

// Progressive scroll-reveal for elements carrying the `.reveal` class.
// Content is fully visible without JS or with reduced motion — the CSS only
// animates when this hook adds `is-visible`.
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!nodes.length) return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);
}
