// Tesla Card — SVG Icon Set
// Tabler Icons (MIT): stroke-width adjusted to 1.5, blank clipping path removed.
// Custom icons for Tesla-specific shapes where no Tabler equivalent exists.
// All icons: viewBox 0 0 24 24, stroke="currentColor", stroke-width="1.5",
//   stroke-linecap="round", stroke-linejoin="round", fill="none"

export const ICONS = {

  // ── Lock / Unlock ────────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/lock
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>`,

  // https://tabler.io/icons/icon/lock-open
  unlock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8 11v-5a4 4 0 0 1 8 0" />
  </svg>`,

  // ── Charging ─────────────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/bolt
  charging: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
  </svg>`,

  // https://tabler.io/icons/icon/plug-connected
  'charging-port': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" />
    <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" />
    <path d="M3 21l2.5 -2.5" />
    <path d="M18.5 5.5l2.5 -2.5" />
    <path d="M10 11l-2 2" />
    <path d="M13 14l-2 2" />
  </svg>`,

  // Custom — solid filled lightning bolt for charge port status indicator
  'charge-bolt': `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M13.5 2L5 13h5.5L8.5 22l10-11h-5.5z"/>
  </svg>`,

  // https://tabler.io/icons/icon/battery-charging
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
    <path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
    <path d="M12 8l-2 4h3l-2 4" />
  </svg>`,

  // ── Climate ──────────────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/air-conditioning
  climate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 16a3 3 0 0 1 -3 3" />
    <path d="M16 16a3 3 0 0 0 3 3" />
    <path d="M12 16v4" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
    <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
  </svg>`,

  // https://tabler.io/icons/icon/propeller
  fan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M14.167 10.5c.722 -1.538 1.156 -3.043 1.303 -4.514c.22 -1.63 -.762 -2.986 -3.47 -2.986s-3.69 1.357 -3.47 2.986c.147 1.471 .581 2.976 1.303 4.514" />
    <path d="M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386c1.3 1 2.967 .833 4.321 -1.512c1.354 -2.345 .67 -3.874 -.85 -4.498c-1.348 -.608 -2.868 -.985 -4.562 -1.128" />
    <path d="M8.664 13c-1.693 .143 -3.213 .52 -4.56 1.128c-1.522 .623 -2.206 2.153 -.852 4.498s3.02 2.517 4.321 1.512c1.2 -.863 2.287 -1.991 3.258 -3.386" />
  </svg>`,

  // Custom — solid filled 4-blade pinwheel for climate on/off status indicator
  'climate-fan': `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <circle cx="12" cy="12" r="1.5"/>
    <path d="M12 12C12 8 11 5 8 4 5 3 5 7 7 10 8 11 10 12 12 12Z"/>
    <path d="M12 12C16 12 19 11 20 8 21 5 17 5 14 7 13 8 12 10 12 12Z"/>
    <path d="M12 12C12 16 13 19 16 20 19 21 19 17 17 14 16 13 14 12 12 12Z"/>
    <path d="M12 12C8 12 5 13 4 16 3 19 7 19 10 17 11 16 12 14 12 12Z"/>
  </svg>`,

  // https://tabler.io/icons/icon/windmill
  'windows-vent': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9" />
    <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9" />
    <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" />
    <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9" />
  </svg>`,

  // Custom — front-view car with heat waves rising for defrost mode
  defrost: `<svg viewBox="0 0 24 24" fill="currentColor">
    <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M9 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M12 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M15 13s1-1.5 0-3 1-3 0-4.5"/>
    </g>
    <path d="M10 15h4a1 1 0 0 1 1 1v.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1V16a1 1 0 0 1 1-1z"/>
    <rect x="6" y="17.25" width="1" height=".75" rx=".375"/>
    <rect x="17" y="17.25" width="1" height=".75" rx=".375"/>
  </svg>`,

  // https://tabler.io/icons/icon/armchair
  'heated-seat': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2" />
    <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
  </svg>`,

  // Custom — A-frame tent for camp mode toggle
  tent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4L4 20h16L12 4z"/>
    <path d="M12 4v16"/>
    <path d="M10 20v-5l2-2 2 2v5"/>
  </svg>`,

  // Custom — dog profile for dog mode toggle
  dog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 5.2C10 4 11 3 12 3s2.5 1.5 3 3l1.5 4H19c1.1 0 2 .9 2 2v5a2 2 0 0 1-2 2h-1v2"/>
    <path d="M6 19v-2H5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5L9 6c.5-1.5 1-3 3-3"/>
    <path d="M6 19h12"/>
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>`,

  // ── Controls ─────────────────────────────────────────────────────────────────

  // Custom — filled front-view Tesla silhouette for vehicle overview
  car: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M8 6h8a2 2 0 0 1 2 2v2l2 2a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1l2-2V8a2 2 0 0 1 2-2z"/>
    <rect x="1.5" y="12.5" width="1.5" height="1.5" rx=".75"/>
    <rect x="21" y="12.5" width="1.5" height="1.5" rx=".75"/>
  </svg>`,

  // Custom — car silhouette with front hood raised for frunk (Tesla-specific)
  frunk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 16h20"/>
    <path d="M4 16l1.5-4h13L20 16"/>
    <path d="M5.5 12l1-3h3"/>
    <path d="M6.5 9l-1-2.5"/>
    <circle cx="6.5" cy="16" r="1.5"/>
    <circle cx="17.5" cy="16" r="1.5"/>
    <path d="M4 16v2"/>
    <path d="M20 16v2"/>
  </svg>`,

  // https://tabler.io/icons/icon/car
  trunk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
  </svg>`,

  // https://tabler.io/icons/icon/shield
  sentry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  </svg>`,

  // Custom — headlight with beams for flash headlights control
  'flash-lights': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2l3-3V9L9 6z"/>
    <path d="M15 8h4"/>
    <path d="M15 12h5"/>
    <path d="M15 16h4"/>
  </svg>`,

  // Custom — speaker / megaphone for horn button
  horn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8a6 6 0 0 1 0 8"/>
    <path d="M21 5a10 10 0 0 1 0 14"/>
    <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1z"/>
  </svg>`,

  // Custom — key shape for remote start vehicle
  'remote-start': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="8" cy="12" r="4"/>
    <path d="M12 12h8"/>
    <path d="M17 9v3"/>
    <path d="M20 9v3"/>
  </svg>`,

  // Custom — map pin for vehicle location / navigation
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`,

  // ── Navigation / UI ──────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/chevron-left
  'chevron-left': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 6l-6 6l6 6" />
  </svg>`,

  // https://tabler.io/icons/icon/chevron-right
  'chevron-right': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6l6 6l-6 6" />
  </svg>`,

  // https://tabler.io/icons/icon/chevron-up
  'chevron-up': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 15l6 -6l6 6" />
  </svg>`,

  // https://tabler.io/icons/icon/chevron-down
  'chevron-down': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9l6 6l6 -6" />
  </svg>`,

  // https://tabler.io/icons/icon/check
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12l5 5l10 -10" />
  </svg>`,

  // https://tabler.io/icons/icon/refresh
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  </svg>`,

  // https://tabler.io/icons/icon/settings
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>`,

  // ── Status ───────────────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/steering-wheel
  driving: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 14l0 7" />
    <path d="M10 12l-6.75 -2" />
    <path d="M14 12l6.75 -2" />
  </svg>`,

  // https://tabler.io/icons/icon/parking
  parked: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    <path d="M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" />
  </svg>`,

};
