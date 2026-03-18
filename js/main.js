/* PixelForge Digital — Main JS */

// ---- NAV SCROLL ----
const nav = document.querySelector('.nav');
const noticeBar = document.querySelector('.notice-bar');
if (nav) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    nav.classList.toggle('scrolled', scrolled);
    // When scrolled, nav slides up to top (notice bar hides behind)
    if (noticeBar) {
      noticeBar.style.transform = scrolled ? 'translateY(-100%)' : '';
      nav.style.top = scrolled ? '0' : '';
    }
  });
}

// ---- MOBILE MENU ----
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ---- PORTFOLIO FILTER TABS ----
const tabBtns = document.querySelectorAll('.tab-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card[data-category]');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---- MODAL ----
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

document.querySelectorAll('[data-modal]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const data = JSON.parse(trigger.dataset.modal);
    if (modalTitle) modalTitle.textContent = data.title || '';
    if (modalBody) modalBody.innerHTML = data.html || '';
    if (modalOverlay) modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ---- CONTACT FORM (Formspree) ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const formSuccess = document.getElementById('form-success');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      } else {
        alert('Something went wrong. Please try emailing us directly.');
        btn.textContent = originalText;
        btn.disabled = false;
      }
    } catch {
      alert('Network error. Please email us directly.');
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

// ---- QUOTE FORM ----
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = quoteForm.querySelector('[type="submit"]');
    const formSuccess = document.getElementById('quote-success');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        quoteForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      } else {
        alert('Something went wrong. Please email us directly.');
        btn.disabled = false;
        btn.textContent = 'Send Free Quote Request →';
      }
    } catch {
      alert('Network error. Please email us directly.');
      btn.disabled = false;
      btn.textContent = 'Send Free Quote Request →';
    }
  });
}

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  let start = 0;
  const step = Math.ceil(target / 50);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + suffix;
    if (start >= target) clearInterval(timer);
  }, 30);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = 'true';
      animateCounter(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));
