export function smoothScrollTo(targetY, duration = 800, offset = 60) {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const diff = targetY - offset - startY;
    let start;

    function step(ts) {
      if (!start) start = ts;
      const time = ts - start;
      const pct = Math.min(time / duration, 1);
      const easing = pct < 0.5
        ? 4 * pct * pct * pct
        : 1 - Math.pow(-2 * pct + 2, 3) / 2;

      window.scrollTo(0, startY + diff * easing);

      if (time < duration) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}
