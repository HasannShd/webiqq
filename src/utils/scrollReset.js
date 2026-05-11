export function schedulePageScrollReset() {
  const frame = window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });

  return () => window.cancelAnimationFrame(frame);
}
