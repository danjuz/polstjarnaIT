/* ─────────────────────────────────────────────────────────────
   Icon library — inline SVG, stroke-based, 24×24
   Style: Lucide/Heroicons — clean, professional, no fill
───────────────────────────────────────────────────────────── */

const SVG_ATTR = `width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"`;

const ICONS = {

  /* Navigation / direction */
  compass: `<svg ${SVG_ATTR}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  anchor:  `<svg ${SVG_ATTR}><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 15H2a10 10 0 0 0 20 0h-3"/><path d="M5 15a7 7 0 0 0 14 0"/></svg>`,
  star:    `<svg ${SVG_ATTR}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,

  /* Status / alert */
  alertTriangle: `<svg ${SVG_ATTR}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  trendingDown:  `<svg ${SVG_ATTR}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
  info:          `<svg ${SVG_ATTR}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,

  /* Infrastructure / platform */
  server:   `<svg ${SVG_ATTR}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  cpu:      `<svg ${SVG_ATTR}><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M15 9V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"/><path d="M9 15v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2"/><path d="M9 9H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/><path d="M15 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/></svg>`,
  layers:   `<svg ${SVG_ATTR}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,

  /* Data / analytics */
  barChart: `<svg ${SVG_ATTR}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,

  /* Digital / UI */
  monitor: `<svg ${SVG_ATTR}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,

  /* Security */
  shield: `<svg ${SVG_ATTR}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,

  /* Organisation / alignment */
  gitBranch: `<svg ${SVG_ATTR}><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  zap:       `<svg ${SVG_ATTR}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  refresh:   `<svg ${SVG_ATTR}><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>`,

  /* Exploration / experimentation */
  flask:    `<svg ${SVG_ATTR}><path d="M9 3h6v7l4.5 7.5A2 2 0 0 1 18 21H6a2 2 0 0 1-1.5-3.5L9 10V3z"/><line x1="6" y1="3" x2="18" y2="3"/></svg>`,
  unlock:   `<svg ${SVG_ATTR}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  grid:     `<svg ${SVG_ATTR}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  arrowUp:  `<svg ${SVG_ATTR}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,

  /* Growth / direction */
  trendingUp:  `<svg ${SVG_ATTR}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  shieldOff:   `<svg ${SVG_ATTR}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="4.5" y1="4.5" x2="19.5" y2="19.5" stroke-width="1.75"/></svg>`,
  lock:        `<svg ${SVG_ATTR}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  activity:    `<svg ${SVG_ATTR}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,

  /* Mobile nav */
  menu:  `<svg ${SVG_ATTR}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg ${SVG_ATTR}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronDown: `<svg ${SVG_ATTR}><polyline points="6 9 12 15 18 9"/></svg>`,

  /* Link / external */
  externalLink: `<svg ${SVG_ATTR}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};
