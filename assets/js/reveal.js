/* ── Scroll reveal ────────────────────────────────────── */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealEls = document.querySelectorAll(
    'section > .container > *, .paper-card, .talk-card, .post-card, .project-card, .stat-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('reveal', 'visible');
    } else {
      el.classList.add('reveal');
      observer.observe(el);
    }
  });
}
