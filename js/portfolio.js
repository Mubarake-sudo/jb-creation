document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach((filterButton) => {
      filterButton.classList.toggle('active', filterButton === button);
    });
    document.querySelectorAll('.portfolio-card').forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

const homeView = document.getElementById('home-view');
const projectView = document.getElementById('project-view');
const projectDetail = document.getElementById('project-detail');
const lightbox = document.getElementById('portfolio-lightbox');
const lightboxImage = lightbox.querySelector('img');
const originalTitle = document.title;

function currentLanguage() {
  return localStorage.getItem('jbcrea-lang') === 'en' ? 'en' : 'fr';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function projectText(project, key, language) {
  const value = project[key];
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] || value.fr || '';
  }
  if (language === 'en' && project[`${key}En`]) return project[`${key}En`];
  return value || '';
}

function renderProject(project) {
  const language = currentLanguage();
  const english = language === 'en';
  const title = projectText(project, 'titre', language);
  const client = projectText(project, 'client', language);
  const sector = projectText(project, 'secteur', language);
  const description = project.description?.[language] || project.description?.fr || [];
  const labels = english
    ? { home: 'Home', projects: 'Projects', back: 'Back to projects', client: 'Client', sector: 'Industry', year: 'Year', gallery: 'Project gallery', related: 'Discover more', deliverables: 'Deliverables', image: 'Open image in full screen', video: 'Project video' }
    : { home: 'Accueil', projects: 'Réalisations', back: 'Retour aux réalisations', client: 'Client', sector: 'Secteur', year: 'Année', gallery: 'Galerie du projet', related: 'À découvrir aussi', deliverables: 'Livrables', image: 'Ouvrir l’image en grand', video: 'Vidéo du projet' };
  const relatedProjects = PORTFOLIO_PROJECTS.filter((item) => item.id !== project.id).slice(0, 3);
  const gallery = (project.images || []).map((src, index) => `
    <button class="project-gallery-image" type="button" data-lightbox-src="${escapeHtml(src)}" data-lightbox-alt="${escapeHtml(title)} — ${index + 1}" aria-label="${labels.image}: ${escapeHtml(title)} ${index + 1}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(title)} — ${index + 1}" loading="lazy" />
    </button>`).join('');
  const videos = (project.videos || []).map((src, index) => `
    <video controls preload="metadata" poster="${escapeHtml(project.cover)}" aria-label="${labels.video} ${index + 1}">
      <source src="${escapeHtml(src)}" type="video/mp4" />
    </video>`).join('');
  const related = relatedProjects.map((item) => `
    <button class="related-project" type="button" data-project-link="${escapeHtml(item.id)}">
      <img src="${escapeHtml(item.cover)}" alt="" loading="lazy" />
      <span>${escapeHtml(projectText(item, 'titre', language))}</span>
      <span class="related-arrow" aria-hidden="true">↗</span>
    </button>`).join('');
  const paragraphs = description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const deliverables = (project.livrables || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  projectDetail.innerHTML = `
    <a class="project-back" href="#realisations">← ${labels.back}</a>
    <nav class="project-breadcrumb" aria-label="${english ? 'Breadcrumb' : 'Fil d’Ariane'}">
      <a href="#accueil">${labels.home}</a><span aria-hidden="true">›</span>
      <a href="#realisations">${labels.projects}</a><span aria-hidden="true">›</span>
      <span aria-current="page">${escapeHtml(title)}</span>
    </nav>
    <img class="project-cover" src="${escapeHtml(project.cover)}" alt="${escapeHtml(title)}" />
    <header class="project-heading">
      <p class="project-kicker">${escapeHtml((project.tags || []).join(' · '))}</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="project-meta"><span>${labels.client}: ${escapeHtml(client)}</span><span>${labels.sector}: ${escapeHtml(sector)}</span><span>${labels.year}: ${escapeHtml(project.annee)}</span></p>
    </header>
    <section class="project-story" aria-label="${english ? 'Project overview' : 'Présentation du projet'}">
      ${paragraphs}
    </section>
    ${deliverables ? `<section class="project-deliverables"><h2>${labels.deliverables}</h2><ul>${deliverables}</ul></section>` : ''}
    ${(gallery || videos) ? `<section class="project-gallery-section"><h2>${labels.gallery}</h2><div class="project-gallery">${gallery}${videos}</div></section>` : ''}
    <section class="related-projects"><h2>${labels.related}</h2><div class="related-grid">${related}</div></section>`;

  homeView.hidden = true;
  projectView.hidden = false;
  document.title = `${title} — JB CREATION`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  bindProjectControls();
}

function showHome(scrollToProjects = false) {
  projectView.hidden = true;
  homeView.hidden = false;
  document.title = originalTitle;
  if (scrollToProjects) {
    requestAnimationFrame(() => document.getElementById('realisations').scrollIntoView({ behavior: 'smooth' }));
  }
}

function routeFromHash() {
  const match = window.location.hash.match(/^#projet\/([^/]+)$/);
  if (match) {
    const project = PORTFOLIO_PROJECTS.find((item) => item.id === decodeURIComponent(match[1]));
    if (project) {
      renderProject(project);
      return;
    }
    window.location.hash = '#realisations';
    return;
  }
  showHome(window.location.hash === '#realisations');
}

function openProject(projectId) {
  if (PORTFOLIO_PROJECTS.some((project) => project.id === projectId)) {
    window.location.hash = `projet/${encodeURIComponent(projectId)}`;
  }
}

function bindProjectControls() {
  projectDetail.querySelectorAll('[data-lightbox-src]').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox-close').focus();
    });
  });
  projectDetail.querySelectorAll('[data-project-link]').forEach((button) => {
    button.addEventListener('click', () => openProject(button.dataset.projectLink));
  });
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}

document.querySelectorAll('.portfolio-card[data-project]').forEach((card) => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});
document.querySelectorAll('.lang').forEach((button) => {
  button.addEventListener('click', () => {
    if (window.location.hash.startsWith('#projet/')) routeFromHash();
  });
});
window.addEventListener('hashchange', routeFromHash);
routeFromHash();
