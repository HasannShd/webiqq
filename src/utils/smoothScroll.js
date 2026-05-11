import Lenis from 'lenis';

export function initSmoothScroll() {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  const touchDevice = window.matchMedia?.('(pointer: coarse)')?.matches;

  if (reduceMotion || touchDevice) {
    return null;
  }

  const lenis = new Lenis({
    duration: 0.9,
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    window.requestAnimationFrame(raf);
  };

  window.requestAnimationFrame(raf);

  return lenis;
}
