/* ── Scroll reveal ────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  'section > .container > *, .paper-card, .talk-card, .post-card, .project-card, .stat-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));
