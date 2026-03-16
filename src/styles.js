import { css } from 'lit';

// ── Shared styles (used by panels + main card) ──────────────────────────────

export const sharedStyles = css`
  :host {
    display: block;
    font-family: 'Gotham', 'Gill Sans', 'Century Gothic', system-ui, -apple-system, sans-serif;
  }

  [hidden] { display: none !important; }

  /* Base icon — inline SVG container */
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    pointer-events: none;
    transition: filter 0.15s ease;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  /* SVG button images (loaded via <img>) */
  .btn-img {
    transition: filter 0.15s ease;
  }

  /* Unified hover glow for all icon buttons */
  button:hover > .btn-img,
  button:hover > .icon {
    filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
  }

  /* Active / lit-up state for stateful icons */
  .icon-on { color: #ffffff; }

  /* ── Submenu panel enter animation ──────────────────────── */

  @keyframes panelSlideUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .controls-menu,
  .climate-menu,
  .charger-menu {
    animation: panelSlideUp 0.25s ease-out both;
  }

  /* ── Panel header (back chevron + centred title) ──────────── */

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 14px 20px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .panel-back {
    position: absolute;
    left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .panel-back:hover {
    color: #ffffff;
  }

  .panel-back .icon {
    width: 26px;
    height: 26px;
  }

  .panel-title {
    font-size: 0.95em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.01em;
  }

  /* Title + subtitle stack (used in charging panel header) */
  .panel-title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .panel-subtitle {
    font-size: 0.78em;
    font-weight: 400;
    color: rgba(255,255,255,0.4);
  }
`;

// ── Charger panel styles ────────────────────────────────────────────────────

export const chargerStyles = css`
  .charger-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Main card: charge limit + slider + amps stepper */
  .chg-card {
    margin: 16px 16px 0;
    background: #161719;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 18px 18px 0;
    overflow: hidden;
  }

  .chg-limit-header { margin-bottom: 14px; }

  .chg-limit-title {
    display: block;
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
  }

  .chg-limit-sub {
    font-size: 0.78em;
    color: rgba(255,255,255,0.38);
    margin: 4px 0 0;
  }

  /* Green pill slider for charge limit */
  .chg-slider {
    width: 100%;
    height: 6px;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    display: block;
    margin-bottom: 18px;
    background: linear-gradient(
      to right,
      #19d462 0%, #19d462 var(--pct, 80%),
      rgba(255,255,255,0.15) var(--pct, 80%), rgba(255,255,255,0.15) 100%
    );
  }

  .chg-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: transform 0.1s ease;
  }

  .chg-slider::-webkit-slider-thumb:active { transform: scale(1.15); }

  .chg-slider::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }

  /* Amps stepper row — darker band at bottom of card */
  .chg-amps-row {
    display: flex;
    align-items: center;
    margin: 0 -18px;
    border-top: 1px solid rgba(255,255,255,0.07);
    background: #1e1e20;
    padding: 2px 6px;
  }

  .chg-amps-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    padding: 12px 14px;
    border-radius: 6px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .chg-amps-btn:hover  { color: rgba(255,255,255,0.9); }
  .chg-amps-btn:active { color: #ffffff; }
  .chg-amps-btn:disabled { opacity: 0.25; pointer-events: none; }

  .chg-amps-btn .icon {
    width: 20px;
    height: 20px;
  }

  .chg-amps-value {
    flex: 1;
    text-align: center;
    font-size: 0.88em;
    font-weight: 500;
    color: #ffffff;
  }

  /* Open Charge Port — plain centered text link */
  .chg-port-btn {
    display: block;
    width: 100%;
    padding: 16px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.88em;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .chg-port-btn:hover { color: rgba(255,255,255,0.85); }

`;

// ── Climate panel styles ────────────────────────────────────────────────────

export const climateStyles = css`
  .climate-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* ── Car area — outer clips, inner sizes to image ─────────── */
  .clim-car-area {
    background: #161719;
    height: 500px;
    position: relative;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  .clim-car-area.clim-car-collapsed {
    height: 260px;
  }

  /* Inner wrapper takes the image's natural size; seats are
     positioned as percentages of the image, so they always
     align regardless of how much the outer container clips. */
  .clim-car-inner {
    position: relative;
    width: 100%;
  }

  .clim-car-bg {
    width: 100%;
    height: auto;
    display: block;
    pointer-events: none;
  }

  /* ── Floating back button (overlaid on car image) ────────── */
  .clim-back-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .clim-back-btn:hover {
    color: #ffffff;
  }

  .clim-back-btn .icon {
    width: 26px;
    height: 26px;
  }

  /* ── Seat heat tap zones ─────────────────────────────────── */
  .clim-seat-zone {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-seat-zone:hover  { background: rgba(255,255,255,0.06); }
  .clim-seat-zone:active { background: rgba(255,255,255,0.1); }

  .clim-seat-zone .icon {
    width: 29px;
    height: 29px;
  }

  .clim-seat-zone .btn-img {
    width: 29px;
    height: 29px;
    object-fit: contain;
    pointer-events: none;
  }

  .clim-seat-label {
    font-size: 0.65em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
  }

  /* Seat positions — percentages of the image dimensions
     so they track the actual seats regardless of clip height.
     Based on Model 3 climate-bg.png (1100×1898). */
  .clim-seat-fl { top: 24%; left: 37%; }
  .clim-seat-fr { top: 24%; left: 66%; }
  .clim-seat-rl { top: 45%; left: 38%; }
  .clim-seat-rc { top: 45%; left: 52%; }
  .clim-seat-rr { top: 45%; left: 65%; }

  /* ── Bottom sheet ────────────────────────────────────────── */
  .clim-sheet {
    background: #161719;
    border-radius: 16px 16px 0 0;
    margin-top: -16px;
    position: relative;
    z-index: 1;
    padding-bottom: 4px;
  }

  /* Drag handle */
  .clim-handle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 14px 0 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-handle-pill {
    width: 40px;
    height: 4px;
    background: rgba(255,255,255,0.18);
    border-radius: 2px;
    transition: background 0.15s ease;
  }

  .clim-handle:hover .clim-handle-pill { background: rgba(255,255,255,0.35); }

  /* Interior / Exterior temp info */
  .clim-temp-info {
    text-align: center;
    font-size: 0.82em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
    padding: 0 20px 18px;
  }

  /* ── Main control row: [Power] [← Temp →] [Vent] ────────── */
  .clim-main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 22px;
  }

  .clim-icon-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.4);
    font-family: inherit;
    font-size: 0.72em;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 10px;
    min-width: 56px;
    border-radius: 10px;
    transition: color 0.15s ease, background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-icon-btn:hover  { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05); }
  .clim-icon-btn.clim-active { color: #ffffff; }

  .clim-icon-btn .icon {
    width: 28px;
    height: 28px;
  }

  .clim-icon-btn .btn-img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    pointer-events: none;
  }

  /* Temperature ← value → arrows */
  .clim-temp-control {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  .clim-arrow-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.35);
    cursor: pointer;
    padding: 10px 8px;
    border-radius: 50%;
    transition: background 0.15s ease, color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-arrow-btn:hover  { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.9); }
  .clim-arrow-btn:active { background: rgba(255,255,255,0.12); }

  .clim-arrow-btn .icon {
    width: 22px;
    height: 22px;
  }

  .clim-temp-value {
    font-size: 2.8em;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1;
    min-width: 3ch;
    text-align: center;
  }

  /* ── Defrost Car — full-width outlined button ────────────── */
  .clim-full-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    width: calc(100% - 32px);
    margin: 0 16px 10px;
    padding: 16px 18px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    color: rgba(255,255,255,0.75);
    font-family: inherit;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .clim-full-btn:hover { background: rgba(255,255,255,0.04); }

  .clim-full-btn.active {
    background: rgba(232,33,39,0.12);
    border-color: rgba(232,33,39,0.3);
    color: #ff7070;
  }

  .clim-full-btn .icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .clim-full-btn.active .icon { color: #e82127; }

  .clim-full-btn .btn-img-wide {
    height: 24px;
    object-fit: contain;
    pointer-events: none;
  }

  /* ── Expandable section ──────────────────────────────────── */
  .clim-expanded-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }

  .clim-sheet.expanded .clim-expanded-content {
    max-height: 520px;
  }

  /* List group */
  .clim-list-group {
    margin: 0 16px 10px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .clim-list-group--last { margin-bottom: 16px; }

  .clim-list-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 18px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.65);
    font-family: inherit;
    font-size: 0.88em;
    font-weight: 400;
    cursor: pointer;
    text-align: left;
    gap: 14px;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease;
  }

  .clim-list-item:last-child { border-bottom: none; }
  .clim-list-item:hover  { background: rgba(255,255,255,0.04); }
  .clim-list-item:active { background: rgba(255,255,255,0.08); }

  .clim-list-item.hot { color: rgba(255,255,255,0.9); }

  .clim-list-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.35);
  }

  .clim-list-item.hot .clim-list-icon { color: rgba(255,255,255,0.65); }

  .clim-list-label { flex: 1; }

  .clim-list-value {
    font-size: 0.85em;
    color: rgba(255,255,255,0.35);
  }

  .clim-list-item.hot .clim-list-value {
    color: rgba(255,255,255,0.7);
    font-weight: 600;
  }

  .clim-section-title {
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
    padding: 12px 16px 8px;
  }

  .clim-separator {
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 8px 16px;
  }

  /* Segmented control */
  .clim-segment-group {
    display: flex;
    padding: 4px;
    gap: 2px;
  }

  .clim-segment-btn {
    flex: 1;
    padding: 14px 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.35);
    font-family: inherit;
    font-size: 0.85em;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    border-radius: 9px;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .clim-segment-btn:hover { color: rgba(255,255,255,0.65); }

  .clim-segment-btn.selected {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.9);
    font-weight: 600;
  }

  /* ── Landscape layout ─────────────────────────────────── */

  .climate-menu.landscape {
    flex-direction: row;
  }

  /* Car area: left side, height driven by image aspect ratio */
  .landscape .clim-car-area {
    flex: 0 0 50%;
    max-width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ignore collapse in landscape — always show full car */
  .landscape .clim-car-area.clim-car-collapsed {
    height: auto;
  }

  .landscape .clim-car-inner {
    width: 100%;
    position: relative;
  }

  /* Right panel: no scrollbar, content flows naturally */
  .landscape .clim-sheet {
    flex: 1;
    margin-top: 0;
    border-radius: 0;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255,255,255,0.06);
    padding-bottom: 8px;
  }

  /* Hide drag handle in landscape — not needed */
  .landscape .clim-handle {
    display: none;
  }

  /* Auto-expand the extra content in landscape */
  .landscape .clim-expanded-content {
    max-height: none;
  }

  /* Temp info: left-aligned, compact */
  .landscape .clim-temp-info {
    padding: 12px 16px 10px;
    text-align: left;
  }

  /* Main row: tighter for side panel */
  .landscape .clim-main-row {
    padding: 0 16px 12px;
  }

  /* Temperature value: scale down for narrower panel */
  .landscape .clim-temp-value {
    font-size: 2.2em;
  }

  /* Power/Vent buttons: tighter */
  .landscape .clim-icon-btn {
    padding: 6px 8px;
    min-width: 48px;
  }

  /* Defrost button: compact */
  .landscape .clim-full-btn {
    width: calc(100% - 28px);
    margin: 0 14px 6px;
    padding: 12px 14px;
  }

  /* List groups: compact margins */
  .landscape .clim-list-group {
    margin: 0 14px 6px;
  }

  .landscape .clim-list-item {
    padding: 12px 14px;
  }

  .landscape .clim-section-title {
    padding: 8px 14px 4px;
    font-size: 0.85em;
  }

  .landscape .clim-separator {
    margin: 4px 14px;
  }

  .landscape .clim-segment-group {
    padding: 3px;
  }

  .landscape .clim-segment-btn {
    padding: 10px 6px;
    font-size: 0.8em;
  }

`;

// ── Controls panel styles ───────────────────────────────────────────────────

export const controlsStyles = css`
  .controls-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Controls: car interaction area */
  .ctrl-car-area {
    position: relative;
    background: #161719;
    height: 400px;
    width: 100%;
    overflow: hidden;
  }

  .ctrl-car-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    pointer-events: none;
    opacity: 0.85;
  }

  /* Tap zones — fully transparent, no borders */
  .ctrl-zone {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.75);
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 400;
    letter-spacing: 0.02em;
    cursor: pointer;
    padding: 12px 24px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
    user-select: none;
  }

  .ctrl-zone:hover  { color: rgba(255,255,255,1); }
  .ctrl-zone:active { color: rgba(255,255,255,0.5); }

  /* Frunk: on the hood */
  .ctrl-frunk {
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Lock: on glass roof — 50% (center) */
  .ctrl-lock {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255,255,255,0.48);
    padding: 10px;
  }

  .ctrl-lock:hover { color: rgba(255,255,255,0.8); }

  .ctrl-lock .icon {
    width: 24px;
    height: 24px;
  }

  /* Trunk: rear deck */
  .ctrl-trunk {
    top: 78%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Charge port: rear-left tail */
  .ctrl-port {
    top: 82%;
    left: 20%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: rgba(255,255,255,0.28);
  }

  .ctrl-port:hover { color: rgba(255,255,255,0.6); }

  .ctrl-port .icon {
    width: 18px;
    height: 18px;
  }

  .ctrl-port.port-open { color: rgba(255,255,255,0.75); }

  /* Controls: bottom action bar */
  .ctrl-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px 12px 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .ctrl-action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.7em;
    font-weight: 400;
    cursor: pointer;
    padding: 6px 4px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .ctrl-action-btn:hover  { color: rgba(255,255,255,0.8); }
  .ctrl-action-btn:active { color: #ffffff; }

  .ctrl-action-btn .icon {
    width: 24px;
    height: 24px;
  }

  /* ── Landscape layout ─────────────────────────────────── */

  .controls-menu.landscape {
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Header spans full width */
  .landscape .panel-header {
    flex: 0 0 100%;
  }

  /* Car area: left side */
  .landscape .ctrl-car-area {
    flex: 0 0 55%;
    max-width: 55%;
    height: auto;
    min-height: 340px;
  }

  /* Action bar: right column, vertically centred */
  .landscape .ctrl-actions {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 24px 20px;
    gap: 6px;
    border-top: none;
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  /* Action buttons: horizontal row style in the vertical column */
  .landscape .ctrl-action-btn {
    flex-direction: row;
    gap: 14px;
    padding: 16px 20px;
    font-size: 0.82em;
    border-radius: 12px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .landscape .ctrl-action-btn:hover {
    background: rgba(255,255,255,0.04);
  }

  .landscape .ctrl-action-btn .icon {
    width: 22px;
    height: 22px;
  }


`;

// ── Main card styles (header, car image, quick actions, nav rows, etc.) ─────

export const cardStyles = css`
  ha-card {
    display: block;
    background: var(--ha-card-background, #161719);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    padding: 0;
  }

  /* ── Staggered panel transitions ─────────────────────────── */

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes chargePulse {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 6px rgba(34, 197, 94, 0.3)) drop-shadow(0 0 12px rgba(34, 197, 94, 0.15)); }
    50%      { filter: brightness(1.5) drop-shadow(0 0 14px rgba(34, 197, 94, 0.9)) drop-shadow(0 0 28px rgba(34, 197, 94, 0.4)); }
  }

  .car-overlay.charging-glow {
    animation: chargePulse 2s ease-in-out infinite;
  }

  .header {
    animation: fadeSlideIn 0.25s ease-out both;
  }

  .car-image-area {
    animation: fadeSlideIn 0.3s ease-out 0.05s both;
  }

  .quick-actions {
    animation: fadeSlideIn 0.3s ease-out 0.1s both;
  }

  .nav-row:nth-child(1) { animation: fadeSlideIn 0.3s ease-out 0.12s both; }
  .nav-row:nth-child(2) { animation: fadeSlideIn 0.3s ease-out 0.16s both; }
  .nav-row:nth-child(3) { animation: fadeSlideIn 0.3s ease-out 0.20s both; }
  .nav-row:nth-child(4) { animation: fadeSlideIn 0.3s ease-out 0.24s both; }
  .nav-row:nth-child(5) { animation: fadeSlideIn 0.3s ease-out 0.28s both; }
  .nav-row:nth-child(6) { animation: fadeSlideIn 0.3s ease-out 0.32s both; }

  /* ── Header ──────────────────────────────────────────────── */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 20px 10px;
  }

  .header-left {
    display: flex;
    flex-direction: column;
  }

  .car-name-row {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .car-name {
    font-size: 1.55em;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .name-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.35);
    margin-top: 2px;  /* optical alignment with large text */
  }

  .battery-summary {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 6px;
  }

  /* Small inline battery bar */
  .battery-bar-small {
    position: relative;
    width: 28px;
    height: 13px;
    border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: 2px;
    overflow: hidden;
  }

  .battery-bar-small::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 6px;
    background: rgba(255,255,255,0.45);
    border-radius: 0 1px 1px 0;
  }

  .battery-fill-small {
    height: 100%;
    border-radius: 1px;
    transition: width 0.4s ease;
  }

  .battery-fill-small.high   { background: #ffffff; }
  .battery-fill-small.medium { background: #f39c12; }
  .battery-fill-small.low    { background: #e82127; }

  .range-text {
    font-size: 0.88em;
    font-weight: 500;
    color: rgba(255,255,255,0.8);
  }

  .status-text {
    font-size: 0.82em;
    color: rgba(255,255,255,0.38);
    margin-top: 3px;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-top: 2px;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .icon-btn:hover { color: rgba(255,255,255,0.8); }

  .icon-btn .icon {
    width: 20px;
    height: 20px;
  }

  /* ── Car image ───────────────────────────────────────────── */

  .car-image-area {
    position: relative;
    width: 100%;
    aspect-ratio: 417 / 262;
    background: #161719;
    overflow: hidden;
  }

  .car-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  .car-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    pointer-events: none;
  }

  .car-image-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 48px 0;
    color: rgba(255,255,255,0.18);
    font-size: 0.8em;
    width: 100%;
  }

  .car-image-placeholder .icon {
    width: 48px;
    height: 48px;
    color: rgba(255,255,255,0.12);
  }

  /* ── Quick action icon row ────────────────────────────────── */

  .quick-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 16px 0 14px;
    background: #161719;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .quick-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    transition: color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .quick-btn:hover  { color: rgba(255,255,255,0.8); }
  .quick-btn:active { color: #ffffff; }

  .quick-btn.q-locked   { color: #ffffff; }    /* locked state */
  .quick-btn.q-unlocked { color: #ffffff; }
  .quick-btn.q-active   { color: #ffffff; }    /* on state (charging, climate) */
  .quick-btn.q-climate-on .icon { animation: gentle-spin 6s linear infinite; }

  .quick-btn .icon {
    width: 26px;
    height: 26px;
  }

  /* Official Tesla SVG button images in quick actions */
  .quick-btn .btn-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    pointer-events: none;
  }

  /* ── Nav rows ─────────────────────────────────────────────── */

  .nav-rows {
    display: flex;
    flex-direction: column;
  }

  .nav-row {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 20px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    color: #ffffff;
    cursor: pointer;
    font-family: inherit;
    gap: 14px;
    text-align: left;
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .nav-row:hover  { background: rgba(255,255,255,0.03); }
  .nav-row:hover .nav-icon { color: rgba(255,255,255,0.8); }
  .nav-row:last-child { border-bottom: none; }

  .nav-row:disabled {
    opacity: 1;
    pointer-events: none;
    cursor: default;
  }

  .nav-row.active {
    background: rgba(232,33,39,0.06);
  }

  .nav-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.38);
    transition: color 0.15s ease;
  }

  .nav-row.active .nav-icon { color: #ffffff; animation: gentle-spin 6s linear infinite; }

  @keyframes gentle-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* Official Tesla SVG button images in nav rows */
  .nav-btn-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    pointer-events: none;
  }

  .nav-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .nav-label {
    font-size: 1em;
    font-weight: 600;
    color: #ffffff;
  }

  .nav-sublabel {
    font-size: 0.75em;
    color: rgba(255,255,255,0.38);
  }

  .nav-row.active .nav-sublabel { color: rgba(255,255,255,0.55); }

  .nav-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
    transition: transform 0.2s ease, color 0.15s ease;
  }

  .nav-row.active .nav-chevron {
    color: rgba(255,255,255,0.2);
  }

  /* ── State badges ────────────────────────────────────────── */

  .state-badge {
    display: inline-block;
    font-size: 0.68em;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    letter-spacing: 0.03em;
    margin-top: 2px;
  }

  .state-badge.locked {
    color: #2ecc71;
    background: rgba(46,204,113,0.12);
    border: 1px solid rgba(46,204,113,0.25);
  }

  .state-badge.unlocked {
    color: #f39c12;
    background: rgba(243,156,18,0.12);
    border: 1px solid rgba(243,156,18,0.25);
  }

  /* ── Settings overlay ──────────────────────────────────────── */

  .settings-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .settings-panel {
    width: 100%;
    background: #161719;
    border-radius: 16px 16px 0 0;
    padding: 0 0 20px;
    animation: settingsSlideUp 0.2s ease-out;
  }

  @keyframes settingsSlideUp {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 16px 20px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .settings-title {
    font-size: 0.95em;
    font-weight: 600;
    color: #ffffff;
  }

  .settings-close {
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255,255,255,0.08);
    border: none;
    border-radius: 50%;
    color: rgba(255,255,255,0.6);
    font-size: 1.1em;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease;
  }

  .settings-close:hover { background: rgba(255,255,255,0.15); }

  .settings-rows {
    padding: 8px 0;
  }

  .settings-row {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    box-sizing: border-box;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    color: #ffffff;
    cursor: pointer;
    font-family: inherit;
    gap: 14px;
    text-align: left;
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .settings-row:last-child { border-bottom: none; }
  .settings-row:hover { background: rgba(255,255,255,0.03); }

  .settings-row:nth-child(1) { animation: fadeSlideIn 0.25s ease-out 0.1s both; }
  .settings-row:nth-child(2) { animation: fadeSlideIn 0.25s ease-out 0.16s both; }
  .settings-row:nth-child(3) { animation: fadeSlideIn 0.25s ease-out 0.22s both; }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .settings-row:active { background: rgba(255,255,255,0.06); }

  .settings-row-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .settings-row-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .settings-row-label {
    font-size: 1em;
    font-weight: 600;
    color: #ffffff;
  }

  .settings-row-sub {
    font-size: 0.75em;
    color: rgba(255,255,255,0.38);
  }

  .settings-row-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
  }

  /* ── Landing body (portrait = vertical stack, landscape = side-by-side) ── */

  .landing-body {
    display: flex;
    flex-direction: column;
  }

  .landing-left {
    display: flex;
    flex-direction: column;
  }

  /* ── Landscape layout ──────────────────────────────────── */

  ha-card.landscape {
    width: 150%;
    margin-left: -25%;
  }

  ha-card.landscape .landing-body {
    flex-direction: row;
  }

  ha-card.landscape .landing-left {
    flex: 0 0 55%;
    max-width: 55%;
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  ha-card.landscape .car-image-area {
    aspect-ratio: auto;
    flex: 1;
    min-height: 200px;
  }

  ha-card.landscape .quick-actions {
    border-bottom: none;
    padding: 12px 0 10px;
    gap: 24px;
  }

  ha-card.landscape .nav-rows {
    flex: 1;
    overflow-y: auto;
  }

  ha-card.landscape .nav-row {
    padding: 14px 18px;
  }

  ha-card.landscape .nav-row .nav-label {
    font-size: 0.92em;
  }

  ha-card.landscape .nav-row .nav-sublabel {
    font-size: 0.72em;
  }

  /* ── Card size — uniform zoom scaling ────────────────────── */

  ha-card.size-small { zoom: 0.85; }
  ha-card.size-large { zoom: 1.15; }

  /* ── Settings: Card Size segmented control ─────────────────── */

  .settings-row-static {
    cursor: default;
  }

  .settings-row-static:hover {
    background: transparent;
  }

  .settings-size-control {
    display: flex;
    gap: 2px;
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 2px;
  }

  .settings-size-btn {
    padding: 6px 14px;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.4);
    font-family: inherit;
    font-size: 0.78em;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .settings-size-btn:hover {
    color: rgba(255,255,255,0.7);
  }

  .settings-size-btn.selected {
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    font-weight: 600;
  }
`;
