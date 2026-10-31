// mobile menu
const burger = document.querySelector('.nav-burger');
const mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// cursor glow
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.opacity = '1';
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
});
window.addEventListener('pointerleave', () => glow.style.opacity = '0');

// profile page quick-nav (scrollspy)
const profileNavLinks = document.querySelectorAll('.profile-nav-link');
if (profileNavLinks.length) {
  const sections = [...profileNavLinks]
    .map(link => document.getElementById(link.dataset.target))
    .filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        profileNavLinks.forEach(l => l.classList.toggle('active', l.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 60);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
