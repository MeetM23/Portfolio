document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const yearSpan = document.getElementById('year');
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('header nav a, #mobileMenu a');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', (!expanded).toString());
    });

    // Hide mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Smooth scroll with header offset
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // small gap
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      history.pushState(null, '', href);
    });
  });

  // Active link highlighting using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) linkMap.set(href.slice(1), link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const link = linkMap.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('text-green-400'));
          link.classList.add('text-green-400');
        }
      });
    },
    { rootMargin: '-50% 0px -40% 0px', threshold: 0.01 }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Reveal on scroll for elements with .reveal
  const revealables = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  revealables.forEach((el) => revealObserver.observe(el));

  // Subtle parallax backgrounds for elements with [data-parallax]
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length > 0) {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach((el) => {
        const factorAttr = el.getAttribute('data-parallax') || '0.15';
        const factor = parseFloat(factorAttr);
        el.style.transform = `translateY(${scrollY * factor}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax();
  }

  // Contact form via Web3Forms API
  // No JS needed for FormSubmit; posts directly to their endpoint
});


