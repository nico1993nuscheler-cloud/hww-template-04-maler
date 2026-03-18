/* ===================================================
   HWW Template 04 — Maler & Lackierer (Basis-Paket)
   Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Navigation --- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      document.body.style.overflow = nav.classList.contains('mobile-open') ? 'hidden' : '';
    });
    // Close on link click
    document.querySelectorAll('.nav__links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Scroll Reveal --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  /* --- FAQ Accordion --- */
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq__answer').style.maxHeight = null;
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* --- Cookie Banner --- */
  const banner = document.querySelector('.cookie-banner');
  const acceptBtn = document.querySelector('.cookie-accept');
  if (banner && acceptBtn) {
    if (localStorage.getItem('hww-cookies-accepted')) {
      banner.classList.add('hidden');
    }
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('hww-cookies-accepted', 'true');
      banner.classList.add('hidden');
    });
  }

  /* --- Smooth Scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Nav background on scroll --- */
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastScroll = scrollY;
  });

});
