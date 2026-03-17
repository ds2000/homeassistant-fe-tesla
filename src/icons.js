// Tesla Card — SVG Icon Set
// Tabler Icons (MIT): stroke-width adjusted to 1.5, blank clipping path removed.
// Custom icons for Tesla-specific shapes where no Tabler equivalent exists.
// All icons: viewBox 0 0 24 24, stroke="currentColor", stroke-width="1.5",
//   stroke-linecap="round", stroke-linejoin="round", fill="none"

export const ICONS = {

  // ── Lock / Unlock ────────────────────────────────────────────────────────────

  // Custom — filled padlock (extracted from Tesla_Door_Lock.svg, icon only)
  lock: `<svg viewBox="24 13 54 67" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 51.01 15.62 C 60.29 15.63 67.36 22.81 67.39 32.00 Q 67.40 35.66 67.40 38.23 A 0.67 0.67 0.0 0 0 67.91 38.89 C 71.02 39.64 73.19 39.67 74.78 42.99 Q 75.53 44.58 75.53 49.12 Q 75.51 69.54 75.50 69.97 Q 75.34 74.60 72.13 76.54 Q 70.63 77.45 64.65 77.48 Q 57.83 77.51 50.99 77.50 Q 44.15 77.50 37.32 77.47 Q 31.35 77.44 29.85 76.52 Q 26.64 74.58 26.48 69.95 Q 26.47 69.52 26.47 49.10 Q 26.47 44.56 27.22 42.97 C 28.81 39.65 30.98 39.63 34.09 38.88 A 0.67 0.67 0.0 0 0 34.60 38.22 Q 34.61 35.65 34.62 31.99 C 34.65 22.80 41.74 15.62 51.01 15.62 Z
      M 39.95 39.00 L 62.05 39.00 A 0.57 0.57 0.0 0 0 62.62 38.43 L 62.62 32.80 A 12.30 11.49 90.0 0 0 51.13 20.50 L 50.87 20.50 A 12.30 11.49 -90.0 0 0 39.38 32.80 L 39.38 38.43 A 0.57 0.57 0.0 0 0 39.95 39.00 Z"/>
  </svg>`,

  // Custom — filled open padlock (extracted from Tesla_Door_Unlock.svg, icon only)
  unlock: `<svg viewBox="9 8 70 72" fill="currentColor" stroke="none">
    <path d="
      M 40.40 38.59 A 0.39 0.39 0.0 0 0 40.79 38.98 Q 65.09 39.02 66.45 38.97 C 71.80 38.79 76.50 40.38 76.49 46.01 Q 76.48 65.49 76.54 67.41 C 76.72 72.91 75.03 77.57 69.25 77.49 Q 67.64 77.47 37.81 77.54 Q 32.31 77.55 30.42 76.22 Q 27.43 74.12 27.49 69.49 Q 27.53 65.87 27.45 49.16 C 27.42 43.04 28.68 39.34 35.06 38.93 A 0.61 0.61 0.0 0 0 35.64 38.32 C 35.62 35.47 35.55 33.00 35.58 31.01 C 35.69 23.94 29.36 18.67 22.61 21.05 C 14.37 23.96 16.11 32.12 16.00 38.84 A 2.49 2.47 -0.7 0 1 13.62 41.27 L 13.48 41.28 A 2.32 2.32 0.0 0 1 11.06 39.05 Q 10.72 30.40 11.12 28.42 C 14.89 9.87 40.59 12.29 40.40 30.78 Q 40.36 34.85 40.40 38.59 Z"/>
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

  // Custom — filled lightning bolt (extracted from Tesla_Charge_Port_Closed.svg, icon only)
  'charge-bolt': `<svg viewBox="27 16 50 74" fill="currentColor" stroke="none">
    <path d="
      M 51.98 87.97 C 51.08 88.15 50.36 87.55 50.36 86.67 Q 50.37 72.26 50.37 60.68 A 1.31 1.30 89.8 0 0 49.06 59.37 Q 32.91 59.40 29.75 59.36 Q 29.31 59.35 29.04 59.19 A 1.38 1.33 -59.7 0 1 28.59 57.33 Q 45.64 28.16 51.20 18.63 A 1.30 1.30 0.0 0 1 53.25 18.38 Q 53.71 18.85 53.69 20.00 Q 53.62 23.82 53.66 45.35 A 1.30 1.30 0.0 0 0 54.96 46.65 C 62.96 46.63 74.04 46.21 75.11 46.91 A 1.25 1.19 -58.3 0 1 75.46 48.55 Q 60.94 73.71 52.68 87.48 A 1.05 1.05 0.0 0 1 51.98 87.97 Z"/>
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

  // Tesla_Climate_Fan_Off.svg — 4-blade pinwheel extracted from Tesla tile
  'climate-fan': `<svg viewBox="17 14 74 74" fill="currentColor" stroke="none">
    <path d="
      M 52.28 46.51
      A 2.65 2.65 0.0 0 1 49.64 49.17
      L 49.42 49.17
      A 16.41 16.35 89.9 0 1 33.04 32.79
      L 33.04 32.53
      A 16.41 16.35 89.9 0 1 49.36 16.09
      L 49.58 16.09
      A 2.65 2.65 0.0 0 1 52.24 18.73
      L 52.28 46.51 Z"/>
    <path d="
      M 58.31 49.25
      A 2.46 2.46 0.0 0 1 55.85 46.79
      L 55.85 46.36
      A 16.41 16.33 0.0 0 1 72.26 30.03
      L 72.48 30.03
      A 16.41 16.33 0.0 0 1 88.89 46.36
      L 88.89 46.79
      A 2.46 2.46 0.0 0 1 86.43 49.25
      L 58.31 49.25 Z"/>
    <path d="
      M 49.59 52.73
      A 2.55 2.55 0.0 0 1 52.15 55.27
      L 52.15 55.59
      A 16.42 16.35 -0.1 0 1 35.76 71.97
      L 35.54 71.97
      A 16.42 16.35 -0.1 0 1 19.09 55.65
      L 19.09 55.33
      A 2.55 2.55 0.0 0 1 21.63 52.77
      L 49.59 52.73 Z"/>
    <path d="
      M 55.72 55.47
      A 2.62 2.62 0.0 0 1 58.33 52.84
      L 58.55 52.84
      A 16.45 16.38 89.9 0 1 74.96 69.26
      L 74.96 69.46
      A 16.45 16.38 89.9 0 1 58.61 85.94
      L 58.39 85.94
      A 2.62 2.62 0.0 0 1 55.76 83.33
      L 55.72 55.47 Z"/>
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

  // Tesla_Car.svg — top-down car silhouette with windshield + headlight cutouts
  car: `<svg viewBox="20 28 64 50" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 52.02 30.01
      Q 57.38 30.01 64.78 30.63
      C 72.36 31.27 73.45 37.79 75.24 43.81
      A 0.51 0.50 -53.5 0 0 76.23 43.66
      L 76.23 41.98
      A 0.81 0.81 0.0 0 1 76.99 41.17
      Q 80.66 40.97 81.97 43.63
      A 1.43 1.42 -17.4 0 1 80.91 45.66
      L 76.92 46.30
      A 0.34 0.34 0.0 0 0 76.80 46.92
      C 82.37 50.39 81.99 53.82 82.04 60.70
      Q 82.08 67.25 81.69 73.05
      A 2.13 2.12 -88.0 0 1 79.57 75.03
      L 74.22 75.03
      A 1.80 1.79 89.7 0 1 72.43 73.25
      Q 72.41 71.54 71.99 70.73
      A 0.46 0.45 -12.4 0 0 71.61 70.49
      Q 71.17 70.47 52.01 70.47
      Q 32.85 70.46 32.41 70.48
      A 0.46 0.45 12.4 0 0 32.03 70.72
      Q 31.61 71.53 31.59 73.24
      A 1.80 1.79 -89.7 0 1 29.80 75.02
      L 24.45 75.02
      A 2.13 2.12 88.0 0 1 22.33 73.04
      Q 21.94 67.24 21.98 60.69
      C 22.03 53.81 21.66 50.38 27.23 46.91
      A 0.34 0.34 0.0 0 0 27.11 46.29
      L 23.12 45.65
      A 1.43 1.42 17.5 0 1 22.06 43.62
      Q 23.37 40.96 27.04 41.16
      A 0.81 0.81 0.0 0 1 27.80 41.97
      L 27.80 43.65
      A 0.51 0.50 53.5 0 0 28.79 43.80
      C 30.58 37.78 31.67 31.26 39.25 30.63
      Q 46.65 30.01 52.02 30.01
      Z
      M 32.28 44.72
      L 71.72 44.72
      A 0.23 0.23 0.0 0 0 71.95 44.49
      L 71.95 44.14
      A 11.00 10.20 -90.0 0 0 61.75 33.14
      L 42.25 33.14
      A 11.00 10.20 -90.0 0 0 32.05 44.14
      L 32.05 44.49
      A 0.23 0.23 0.0 0 0 32.28 44.72
      Z
      M 25.82 51.04
      L 24.81 54.26
      A 1.15 1.15 0.0 0 0 25.56 55.70
      L 25.72 55.75
      A 9.72 2.81 17.4 0 0 35.84 55.98
      L 35.86 55.92
      A 9.72 2.81 17.4 0 0 27.42 50.33
      L 27.26 50.28
      A 1.15 1.15 0.0 0 0 25.82 51.04
      Z
      M 79.19 54.25
      L 78.18 51.05
      A 1.14 1.14 0.0 0 0 76.75 50.30
      L 76.57 50.36
      A 9.77 2.80 -17.4 0 0 68.09 55.95
      L 68.10 55.99
      A 9.77 2.80 -17.4 0 0 78.26 55.74
      L 78.44 55.68
      A 1.14 1.14 0.0 0 0 79.19 54.25
      Z"/>
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

  // Custom — headlight with beams (extracted from Tesla_Flash_Lights_Button.svg, icon only)
  'flash-lights': `<svg viewBox="55 15 75 58" fill="currentColor" stroke="none">
    <rect x="-13.17" y="-2.62" transform="translate(70.12,20.94) rotate(7.2)" width="26.34" height="5.24" rx="2.56"/>
    <path d="M 88.50 29.24 A 8.62 8.62 0.0 0 1 97.12 20.62 L 101.77 20.62 A 25.21 23.14 0 0 1 126.98 43.76 L 126.98 44.48 A 25.21 23.14 0 0 1 101.77 67.62 L 97.12 67.62 A 8.62 8.62 0.0 0 1 88.50 59.00 L 88.50 29.24 Z"/>
    <rect x="-13.09" y="-2.62" transform="translate(70.14,36.69) rotate(2.4)" width="26.18" height="5.24" rx="2.55"/>
    <rect x="-13.09" y="-2.61" transform="translate(70.12,52.44) rotate(-2.4)" width="26.18" height="5.22" rx="2.55"/>
    <rect x="-13.16" y="-2.62" transform="translate(70.13,67.31) rotate(-7.1)" width="26.32" height="5.24" rx="2.55"/>
  </svg>`,

  // Custom — horn (extracted from Tesla_Horn_Button.svg, icon only)
  horn: `<svg viewBox="45 18 78 55" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 77.79 49.43 Q 66.93 52.07 61.08 62.13 C 59.21 65.34 58.43 71.35 53.06 70.37 Q 49.13 69.65 49.08 65.49 Q 48.90 51.71 49.05 26.80 Q 49.08 22.95 53.42 21.67 Q 56.68 20.71 59.59 24.40 C 60.54 25.60 61.39 28.68 62.40 30.32 Q 67.61 38.78 76.45 41.98 Q 80.81 43.56 90.70 43.42 Q 100.17 43.29 113.18 43.40 A 0.47 0.47 0.0 0 0 113.66 42.96 C 113.83 40.19 116.61 38.61 118.55 41.04 A 1.64 1.60 -66.7 0 1 118.90 41.96 Q 119.11 46.14 118.93 49.78 A 2.59 2.47 5.4 0 1 116.01 52.08 Q 114.00 51.82 113.74 49.21 A 0.68 0.67 87.2 0 0 113.07 48.60 L 109.06 48.60 A 0.45 0.44 77.1 0 0 108.66 49.24 Q 111.67 55.41 108.89 60.60 C 106.19 65.64 101.89 67.15 96.06 67.02 C 90.87 66.90 84.78 68.09 80.33 63.35 Q 75.04 57.72 78.22 49.92 A 0.37 0.37 0.0 0 0 77.79 49.43 Z
      M 104.89 54.83 A 6.14 6.14 0.0 0 0 98.75 48.69 L 88.51 48.69 A 6.14 6.14 0.0 0 0 82.37 54.83 L 82.37 55.55 A 6.14 6.14 0.0 0 0 88.51 61.69 L 98.75 61.69 A 6.14 6.14 0.0 0 0 104.89 55.55 L 104.89 54.83 Z"/>
  </svg>`,

  // Custom — key fob (extracted from Tesla_Start_Button.svg, icon only)
  'remote-start': `<svg viewBox="64 8 45 76" fill="currentColor" stroke="none">
    <path d="M 86.31 11.03 Q 94.51 10.77 104.02 15.38 A 2.62 2.61 22.9 0 1 105.34 18.62 L 105.27 18.83 A 2.30 2.30 0.0 0 1 102.33 20.21 Q 99.65 19.24 97.10 18.19 Q 92.40 16.26 86.31 16.26 Q 80.23 16.26 75.53 18.18 Q 72.98 19.23 70.29 20.20 A 2.30 2.30 0.0 0 1 67.36 18.82 L 67.29 18.61 A 2.62 2.61 -22.9 0 1 68.61 15.37 Q 78.12 10.77 86.31 11.03 Z"/>
    <path d="M 86.30 23.29 C 88.52 23.29 95.45 23.85 97.24 25.92 A 2.51 2.23 -47.5 0 1 97.19 28.91 Q 96.12 30.33 94.31 29.84 Q 89.50 28.53 86.30 28.54 Q 83.10 28.54 78.30 29.85 Q 76.48 30.34 75.41 28.92 A 2.51 2.23 47.4 0 1 75.36 25.93 C 77.14 23.86 84.07 23.29 86.30 23.29 Z"/>
    <path fill-rule="evenodd" d="M 103.81 72.17 A 8.83 8.83 0.0 0 1 94.98 81.00 L 77.64 81.00 A 8.83 8.83 0.0 0 1 68.81 72.17 L 68.81 44.33 A 8.83 8.83 0.0 0 1 77.64 35.50 L 94.98 35.50 A 8.83 8.83 0.0 0 1 103.81 44.33 L 103.81 72.17 Z M 89.79 49.50 A 3.49 3.49 0.0 0 0 86.30 46.01 A 3.49 3.49 0.0 0 0 82.81 49.50 A 3.49 3.49 0.0 0 0 86.30 52.99 A 3.49 3.49 0.0 0 0 89.79 49.50 Z"/>
  </svg>`,

  // Tyre pressure — wheel with "bar" label (matches Tesla app TPMS icon)
  tyre: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v5" /><path d="M12 16v5" />
    <path d="M3 12h5" /><path d="M16 12h5" />
  </svg>`,

  // Custom — map pin for vehicle location / navigation
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`,

  // https://tabler.io/icons/icon/navigation — filled triangle pointing up
  navigation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l7 18l-7-4l-7 4z" />
  </svg>`,

  // ── Vent / Windows ──────────────────────────────────────────────────────────

  // Custom — side-view car with open windows (extracted from Tesla_Vent_Open_Windows_Button.svg)
  'vent-open': `<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.29 78.91 Q 109.12 81.07 106.78 81.11 Q 84.93 81.43 63.26 81.17 Q 57.61 81.10 55.36 77.39 Q 53.93 75.02 54.26 68.48 Q 54.44 64.89 54.20 51.46 C 54.07 44.34 56.72 42.29 61.54 37.51 Q 63.93 35.14 65.81 33.26 Q 67.70 31.38 70.08 29.00 C 74.87 24.20 76.93 21.56 84.05 21.72 Q 97.48 22.00 101.07 21.84 Q 107.61 21.53 109.98 22.97 Q 113.68 25.23 113.73 30.88 Q 113.91 52.55 113.51 74.40 Q 113.46 76.74 111.29 78.91 Z
      M 61.34 48.48 L 67.38 48.48 A 3.49 3.47 -67.2 0 0 69.83 47.47 Q 74.97 42.31 80.72 36.06 C 82.54 34.08 84.50 34.92 86.70 34.89 Q 99.59 34.75 105.63 35.02 A 1.85 1.85 0.0 0 0 107.57 33.17 L 107.57 30.38 A 2.45 2.44 -89.8 0 0 105.15 27.93 Q 97.41 27.86 84.51 27.92 Q 80.41 27.94 77.29 31.04 Q 75.92 32.39 75.24 33.02 Q 68.45 39.25 60.85 47.36 A 0.67 0.67 0.0 0 0 61.34 48.48 Z
      M 61.06 54.54 A 0.56 0.55 2.5 0 0 60.46 55.08 Q 60.33 62.00 60.43 72.54 Q 60.45 75.04 63.26 75.04 Q 101.67 74.98 104.77 74.96 Q 107.52 74.94 107.47 71.82 Q 107.38 65.56 107.50 55.49 A 0.58 0.57 89.5 0 0 106.92 54.91 Q 85.20 55.17 67.10 55.13 C 64.99 55.12 62.97 54.66 61.06 54.54 Z"/>
  </svg>`,

  // Custom — side-view car with closed windows (extracted from Tesla_Vent_Close_Windows_Button.svg)
  'vent-close': `<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.27 78.92 Q 109.11 81.07 106.78 81.13 Q 95.78 81.41 65.02 81.23 C 59.91 81.20 56.97 80.63 54.89 76.43 Q 54.16 74.97 54.19 71.59 Q 54.24 66.54 54.30 49.50 Q 54.32 44.66 57.67 41.19 Q 61.57 37.15 63.93 34.86 Q 64.80 34.02 65.67 33.15 Q 66.55 32.28 67.39 31.41 Q 69.69 29.06 73.75 25.18 Q 77.23 21.84 82.07 21.84 Q 99.11 21.85 104.16 21.82 Q 107.54 21.80 109.00 22.54 C 113.19 24.63 113.75 27.58 113.76 32.69 Q 113.82 63.45 113.49 74.45 Q 113.43 76.78 111.27 78.92 Z
      M 83.75 27.99 C 81.05 28.02 79.19 28.89 76.51 31.54 Q 69.41 38.56 63.00 45.00 Q 61.41 46.60 60.75 47.69 A 0.52 0.51 -74.3 0 0 61.18 48.47 L 67.86 48.47 A 2.12 2.10 -67.3 0 0 69.35 47.85 L 80.69 36.52 A 5.50 5.45 -67.4 0 1 84.57 34.90 L 106.11 34.90 A 1.35 1.34 -0.0 0 0 107.46 33.56 L 107.46 29.95 A 1.95 1.95 0.0 0 0 105.53 28.00 Q 93.62 27.86 83.75 27.99 Z
      M 107.26 54.95 L 60.62 54.87 A 0.23 0.23 0.0 0 0 60.39 55.10 L 60.36 72.14 A 3.11 2.81 0.1 0 0 63.46 74.95 L 104.34 75.03 A 3.11 2.81 0.1 0 0 107.46 72.22 L 107.49 55.18 A 0.23 0.23 0.0 0 0 107.26 54.95 Z"/>
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

  // https://tabler.io/icons/icon/arrows-maximize — card size control
  resize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 4l4 0l0 4" />
    <path d="M14 10l6 -6" />
    <path d="M8 20l-4 0l0 -4" />
    <path d="M4 20l6 -6" />
  </svg>`,

  // https://tabler.io/icons/icon/layout-sidebar-right — portrait/landscape toggle
  layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M15 4v16" />
  </svg>`,

  // ── Power ───────────────────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/power
  power: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 2v6" />
  </svg>`,

  // ── Schedule / Security ─────────────────────────────────────────────────────

  // https://tabler.io/icons/icon/clock-bolt
  schedule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.984 12.535a9 9 0 1 0 -5.249 7.47" />
    <path d="M12 7v5l2 2" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>`,

  // https://tabler.io/icons/icon/shield-check
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
    <path d="M15 19l2 2l4 -4" />
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
