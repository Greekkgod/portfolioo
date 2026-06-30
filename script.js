const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

const nav = document.querySelector('nav');
const sections = Array.from(document.querySelectorAll('main section[id]'));
const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

const updateActiveNav = () => {
  const offset = window.scrollY + 140;
  let currentId = 'hero';

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 20);
  updateActiveNav();
});

window.addEventListener('load', () => {
  updateActiveNav();
  nav.classList.toggle('nav-scrolled', window.scrollY > 20);
});
