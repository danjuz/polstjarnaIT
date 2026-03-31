/* ─────────────────────────────────────────────────────────────
   Polstjärna, IT Alignment Portal
   app.js, vanilla JS, no dependencies
───────────────────────────────────────────────────────────── */

/* ── MOBILE NAV ─────────────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('site-nav');
  const icon   = document.getElementById('nav-toggle-icon');

  icon.innerHTML = ICONS.menu;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
    icon.innerHTML = isOpen ? ICONS.close : ICONS.menu;
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', false);
      icon.innerHTML = ICONS.menu;
    });
  });
}

/* ── HERO ───────────────────────────────────────────────────── */
function renderHero(meta) {
  document.getElementById('hero-label').textContent   = meta.label;
  document.getElementById('hero-subtitle').textContent = meta.subtitle;

  const el = document.getElementById('hero-quote');
  el.innerHTML = meta.opening
    .split('\n')
    .map((line, i) => `<span class="${i === 0 ? 'hero-line-1' : 'hero-line-2'}">${line}</span>`)
    .join('');

  const block = document.getElementById('onboarding-block');
  const stepsHTML = meta.onboarding
    .map(s => `<div class="onboard-step">
      <span class="onboard-num">${s.number}</span>
      <span class="onboard-text">${s.text}</span>
    </div>`)
    .join('');
  block.innerHTML = `
    <div class="onboard-label">Så använder du sidan</div>
    <div class="onboard-steps">${stepsHTML}</div>
  `;
}

/* ── PROBLEM ────────────────────────────────────────────────── */
function renderProblem(problem) {
  document.getElementById('icon-symptom').innerHTML      = ICONS.alertTriangle;
  document.getElementById('icon-consequences').innerHTML = ICONS.trendingDown;

  const pl = document.getElementById('problems-list');
  problem.symptoms.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    pl.appendChild(li);
  });

  const cl = document.getElementById('consequences-list');
  problem.consequences.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    cl.appendChild(li);
  });

  document.getElementById('core-message').innerHTML =
    `<span class="core-message-text">"${problem.core_message}"</span>`;
}

/* ── MODEL ──────────────────────────────────────────────────── */
function renderModel(departments) {
  document.getElementById('model-star-icon').innerHTML = ICONS.star;

  const row = document.getElementById('model-dept-row');
  departments.forEach(dept => {
    const node = document.createElement('div');
    node.className = 'model-node model-node-dept';
    node.innerHTML = `
      <div class="model-node-dept-icon">${ICONS[dept.icon] || ICONS.layers}</div>
      <div class="model-node-dept-name">${dept.name}</div>
      <div class="model-node-dept-role">${dept.short_role}</div>
    `;
    row.appendChild(node);
  });
}

/* ── NORTH STAR ─────────────────────────────────────────────── */
function renderNorthStar(ns) {
  document.getElementById('example-notice-ns').innerHTML =
    ICONS.info + ' Detta är ett exempel, Polstjärnan ska sättas av CIO med stöd av IT-ledningen';

  const nsScope = document.getElementById('ns-scope');
  if (nsScope && ns.scope) nsScope.textContent = ns.scope;

  document.getElementById('ns-star-icon').innerHTML    = ICONS.star;
  document.getElementById('ns-purpose').textContent   = ns.purpose;
  document.getElementById('ns-direction').textContent = ns.direction;

  const tagsEl = document.getElementById('ns-tags');
  ns.optimize_for.forEach(tag => {
    const span = document.createElement('span');
    span.className   = 'ns-tag';
    span.textContent = tag;
    tagsEl.appendChild(span);
  });
}

/* ── PRINCIPLES ─────────────────────────────────────────────── */
function renderPrinciples(principles) {
  document.getElementById('example-notice-icon').innerHTML =
    ICONS.info + ' Dessa principer är exempel, ska sättas av chefsarkitekt';

  const pScope = document.getElementById('principles-scope');
  if (pScope) pScope.textContent = '5-8 principer · Varje princip: namn, vad den innebär och inte innebär (2-3 meningar vardera) · Totalt: 1-2 sidor';

  const list = document.getElementById('principles-list');
  principles.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'principle-item';
    item.innerHTML = `
      <div class="principle-header" role="button" aria-expanded="false" tabindex="0">
        <span class="principle-number">${i + 1}</span>
        <span class="principle-name">${p.name}</span>
        <span class="principle-arrow">${ICONS.chevronDown}</span>
      </div>
      <div class="principle-body">
        <div class="principle-means">
          <div class="principle-means-label">Det innebär</div>
          <p class="principle-desc">${p.means}</p>
        </div>
        <div class="principle-not-means">
          <div class="principle-means-label principle-means-label--not">Det innebär inte</div>
          <p class="principle-desc">${p.not_means}</p>
        </div>
      </div>
    `;
    const header = item.querySelector('.principle-header');
    const toggle = () => {
      const isOpen = item.classList.toggle('open');
      header.setAttribute('aria-expanded', isOpen);
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    list.appendChild(item);
  });
}

/* ── FOCUS AREAS ────────────────────────────────────────────── */
function renderFocusAreas(areas) {
  document.getElementById('example-notice-focus').innerHTML =
    ICONS.info + ' Dessa är exempel, fokusområden bör sättas av ansvarig';

  const grid = document.getElementById('focus-grid');
  areas.forEach(area => {
    const card = document.createElement('div');
    card.className = 'focus-card';
    card.innerHTML = `
      <div class="focus-icon">${ICONS[area.icon] || ICONS.compass}</div>
      <div class="focus-name">${area.name}</div>
      <div class="focus-desc">${area.description}</div>
    `;
    grid.appendChild(card);
  });
}

/* ── DEPARTMENTS ────────────────────────────────────────────── */
function renderDepartments(departments) {
  document.getElementById('example-notice-dept').innerHTML =
    ICONS.info + ' Dessa är exempel, avdelningar och innehåll bör sättas av ansvarig';

  const grid = document.getElementById('departments-grid');
  departments.forEach(dept => {
    const card = document.createElement('div');
    card.className = 'dept-card';

    const initiativesHTML = dept.initiatives.map(ini => `<li>${ini}</li>`).join('');
    const focusTagsHTML   = dept.focus_areas.map(f => `<span class="dept-focus-tag">${f}</span>`).join('');

    card.innerHTML = `
      <div class="dept-header" role="button" aria-expanded="false" tabindex="0">
        <div class="dept-icon-wrap">${ICONS[dept.icon] || ICONS.layers}</div>
        <div class="dept-header-text">
          <div class="dept-name">${dept.name}</div>
          <div class="dept-short-role">${dept.short_role}</div>
        </div>
        <span class="dept-expand-arrow">${ICONS.chevronDown}</span>
      </div>
      <div class="dept-mission-row">
        <div class="dept-mission">${dept.mission}</div>
        <div class="dept-focus-tags">${focusTagsHTML}</div>
      </div>
      <div class="dept-divider"></div>
      <div class="dept-detail">
        <div class="dept-detail-inner">
          <div class="state-row">
            <div class="state-box">
              <div class="detail-block-title">Nuläge</div>
              <div class="detail-text">${dept.current_state}</div>
            </div>
            <div class="state-arrow">→</div>
            <div class="state-box target">
              <div class="detail-block-title">Målbild</div>
              <div class="detail-text">${dept.target_state}</div>
            </div>
          </div>
          <div>
            <div class="detail-block-title">Pågående initiativ</div>
            <ul class="initiatives-list">${initiativesHTML}</ul>
          </div>
        </div>
      </div>
    `;

    const header = card.querySelector('.dept-header');
    const toggle = () => {
      const isOpen = card.classList.toggle('open');
      header.setAttribute('aria-expanded', isOpen);
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    grid.appendChild(card);
  });
}

/* ── LIFECYCLE ──────────────────────────────────────────────── */
function lcStepCard(step, num) {
  return `
    <div class="lc-step">
      <div class="lc-step-header">
        <span class="lc-step-num">${num}</span>
        <span class="lc-step-icon">${ICONS[step.icon] || ICONS.refresh}</span>
      </div>
      <div class="lc-step-title">${step.title}</div>
      <div class="lc-step-text">${step.text}</div>
    </div>
  `;
}

function renderLifecycle(lc) {
  // Intro
  const introEl = document.getElementById('lc-intro');
  introEl.innerHTML = lc.intro
    .map((line, i) => `<span class="${i === 0 ? 'lc-intro-lead' : 'lc-intro-sub'}">${line}</span>`)
    .join('');

  // Arrows using rotated chevronDown
  const arrowR = `<span class="lc-conn-icon lc-rot-r">${ICONS.chevronDown}</span>`;
  const arrowD = `<span class="lc-conn-icon">${ICONS.chevronDown}</span>`;
  const arrowL = `<span class="lc-conn-icon lc-rot-l">${ICONS.chevronDown}</span>`;
  const arrowU = `<span class="lc-conn-icon lc-rot-u">${ICONS.chevronDown}</span>`;

  // 2×2 loop: clockwise, 1(TL) → 2(TR) → 3(BR) → 4(BL) → back
  document.getElementById('lc-loop').innerHTML = `
    <div class="lc-grid">
      ${lcStepCard(lc.steps[0], 1)}
      <div class="lc-conn lc-conn-h">${arrowR}</div>
      ${lcStepCard(lc.steps[1], 2)}
      <div class="lc-conn lc-conn-v">${arrowU}</div>
      <div class="lc-hub">${ICONS.star}</div>
      <div class="lc-conn lc-conn-v">${arrowD}</div>
      ${lcStepCard(lc.steps[3], 4)}
      <div class="lc-conn lc-conn-h">${arrowL}</div>
      ${lcStepCard(lc.steps[2], 3)}
    </div>
  `;

  // Rhythm
  const rhythmEl = document.getElementById('lc-rhythm');
  lc.rhythm.forEach(item => {
    const el = document.createElement('div');
    el.className = 'rhythm-item';
    el.innerHTML = `
      <span class="rhythm-cadence">${item.cadence}</span>
      <span class="rhythm-text">${item.text}</span>
    `;
    rhythmEl.appendChild(el);
  });

  // Roles
  const rolesEl = document.getElementById('lc-roles');
  lc.roles.forEach(item => {
    const el = document.createElement('div');
    el.className = 'role-item';
    el.innerHTML = `
      <div class="role-name">${item.role}</div>
      <div class="role-resp">${item.responsibility}</div>
    `;
    rolesEl.appendChild(el);
  });
}

/* ── CTA ────────────────────────────────────────────────────── */
function renderCTA(cta) {
  document.getElementById('cta-headline').textContent  = cta.headline;
  document.getElementById('cta-quote').textContent     = cta.quote;
  document.getElementById('cta-constraints').textContent = cta.constraints;

  const list = document.getElementById('cta-tasks-list');
  cta.tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
  });
}

/* ── FÖRDJUPNING ────────────────────────────────────────────── */
function renderFordj(fordj) {
  const list = document.getElementById('fordj-list');

  fordj.forEach(panel => {
    const el = document.createElement('div');
    el.className = 'fordj-panel';

    let bodyHTML = `<p class="fordj-intro">${panel.intro}</p>`;

    if (panel.credibility) {
      const credsHTML = panel.credibility.map(ref => `
        <a class="cred-card" href="${ref.url}" target="_blank" rel="noopener noreferrer">
          <div class="cred-card-top">
            <div class="cred-source">${ref.source}</div>
            <div class="cred-tag">${ref.tag}</div>
            <span class="cred-link-icon">${ICONS.externalLink}</span>
          </div>
          <div class="cred-quote">"${ref.quote}"</div>
        </a>
      `).join('');
      bodyHTML += `<div class="credibility-grid">${credsHTML}</div>`;

      if (panel.synthesis) {
        const parts = panel.synthesis.split('=');
        bodyHTML += `
          <div class="synthesis-block">
            <div class="synthesis-label">Syntesen</div>
            <div class="synthesis-text">${parts[0].trim()} <span class="synthesis-eq">=</span> <strong>${parts[1].trim()}</strong></div>
          </div>
        `;
      }
    }

    if (panel.pillars) {
      const pillarsHTML = panel.pillars.map(p => `
        <div class="resilience-pillar">
          <div class="resilience-pillar-icon">${ICONS[p.icon] || ICONS.shield}</div>
          <div class="resilience-pillar-title">${p.title}</div>
          <div class="resilience-pillar-desc">${p.desc}</div>
        </div>
      `).join('');
      bodyHTML += `<div class="resilience-pillars">${pillarsHTML}</div>`;

      bodyHTML += `
        <div class="security-callout">
          <div class="security-callout-left">
            <div class="security-callout-icon">${ICONS.lock}</div>
            <div class="security-callout-title">${panel.security_title}</div>
            <div class="security-callout-desc">${panel.security_desc}</div>
          </div>
          <ul class="security-callout-list">
            ${panel.security_points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (panel.capabilities) {
      bodyHTML += `<div class="fordj-statement">${panel.statement}</div>`;
      const capsHTML = panel.capabilities.map(cap => `
        <div class="explore-card">
          <div class="explore-card-icon">${ICONS[cap.icon] || ICONS.flask}</div>
          <div class="explore-card-title">${cap.title}</div>
          <div class="explore-card-desc">${cap.desc}</div>
        </div>
      `).join('');
      bodyHTML += `<div class="explore-grid">${capsHTML}</div>`;
    }

    el.innerHTML = `
      <button class="fordj-trigger" aria-expanded="false">
        <span class="fordj-trigger-title">${panel.title}</span>
        <span class="fordj-trigger-icon">${ICONS.chevronDown}</span>
      </button>
      <div class="fordj-body">
        <div class="fordj-body-inner">${bodyHTML}</div>
      </div>
    `;

    const trigger = el.querySelector('.fordj-trigger');
    const body    = el.querySelector('.fordj-body');
    trigger.addEventListener('click', () => {
      const isOpen = el.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    list.appendChild(el);
  });
}

/* ── CLOSING ────────────────────────────────────────────────── */
function renderClosing(closing) {
  const el = document.getElementById('closing-quote');
  el.innerHTML = closing.quote
    .split('\n')
    .map(line => `<span>${line}</span>`)
    .join('');
  document.getElementById('closing-punch').textContent = closing.punch;
}

/* ── BOOTSTRAP ──────────────────────────────────────────────── */
function init() {
  const d = APP_DATA;

  initMobileNav();
  renderHero(d.meta);
  renderProblem(d.problem);
  renderModel(d.departments);
  renderNorthStar(d.north_star);
  renderPrinciples(d.principles);
  renderFocusAreas(d.focus_areas);
  renderDepartments(d.departments);
  renderLifecycle(d.lifecycle);
  renderCTA(d.cta);
  renderFordj(d.fordj);
  renderClosing(d.closing);
}

/* ── PASSWORD GATE ──────────────────────────────────────────── */
(function () {
  const PASS = '1968AI';
  const KEY  = 'ps_auth';
  const gate  = document.getElementById('pw-gate');
  const input = document.getElementById('pw-input');
  const btn   = document.getElementById('pw-btn');
  const error = document.getElementById('pw-error');

  function unlock() {
    sessionStorage.setItem(KEY, '1');
    gate.classList.add('hidden');
  }

  function attempt() {
    if (input.value === PASS) {
      unlock();
    } else {
      error.textContent = 'Felaktigt lösenord. Försök igen.';
      input.value = '';
      input.focus();
    }
  }

  if (sessionStorage.getItem(KEY) === '1') {
    gate.classList.add('hidden');
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
})();

document.addEventListener('DOMContentLoaded', init);
