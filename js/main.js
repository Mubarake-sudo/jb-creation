// Modification v2 : menu mobile vertical plein écran avec fermeture explicite.
const nav = document.querySelector('.nav-pill');
const navToggle = document.querySelector('.nav-mobile-toggle');
const navClose = document.querySelector('.nav-close');

const setMenuState = (isOpen) => {
  if (!nav || !navToggle) return;
  nav.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.contains('open');
  setMenuState(!isOpen);
});

navClose?.addEventListener('click', () => setMenuState(false));
nav?.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

function setActiveLang(lang) {
  const langButtons = document.querySelectorAll('.lang');
  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = I18N[lang]?.[key];
    if (!value) return;
    if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA' || node.tagName === 'SELECT') {
      node.placeholder = value;
    } else if (node.tagName === 'OPTION') {
      node.textContent = value;
    } else {
      node.innerHTML = value;
    }
  });
  localStorage.setItem('jbcrea-lang', lang);
}

document.querySelectorAll('.lang').forEach((button) => {
  button.addEventListener('click', () => setActiveLang(button.dataset.lang));
});

const savedLang = localStorage.getItem('jbcrea-lang') || 'fr';
setActiveLang(savedLang);

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
}

document.querySelectorAll('.faq-item').forEach((item) => {
  const button = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('open');
      const q = faq.querySelector('.faq-question');
      const a = faq.querySelector('.faq-answer');
      q.setAttribute('aria-expanded', 'false');
      a.style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

document.querySelectorAll('.blog-item').forEach((item) => {
  const button = item.querySelector('.blog-toggle');
  const panel = item.querySelector('.blog-panel');
  button.addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.blog-item').forEach((entry) => {
      entry.classList.remove('open');
      entry.querySelector('.blog-toggle').setAttribute('aria-expanded', 'false');
      entry.querySelector('.blog-panel').style.maxHeight = null;
    });
    if (!open) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

const animateNumber = (el) => {
  const targetValue = Number(el.dataset.target || 0);
  const suffix = el.textContent.includes('ans') || el.textContent.includes('years') ? ' ans' : '';
  const isPlus = el.textContent.startsWith('+') || el.textContent.includes('+');
  const finalText = el.textContent.includes('ans') ? '3 ans' : el.textContent.includes('years') ? '3 years' : (isPlus ? '+' + targetValue : String(targetValue));
  let start = 0;
  const duration = 1300;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(targetValue * eased);
    if (targetValue >= 200) {
      el.textContent = '+' + value;
    } else if (targetValue === 3) {
      el.textContent = value + ' ans';
    } else {
      el.textContent = value;
    }
    if (progress < 1) requestAnimationFrame(tick);
    else {
      if (targetValue >= 200) el.textContent = '+200';
      else if (targetValue === 3) el.textContent = '3 ans';
      else el.textContent = String(targetValue);
    }
  }
  requestAnimationFrame(tick);
};

const statEls = document.querySelectorAll('.stat-item strong');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateNumber(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statEls.forEach((el) => statsObserver.observe(el));

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours…';
  formStatus.textContent = '';
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer ma demande';
    formStatus.textContent = 'Votre demande a bien été envoyée. Nous vous répondrons rapidement.';
    formStatus.classList.add('success');
    formStatus.classList.remove('error');
    form.reset();
  }, 1100);
});
