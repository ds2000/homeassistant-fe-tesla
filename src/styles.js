import { css } from 'lit';

// ── Shared styles (used by panels + main card) ──────────────────────────────

export const sharedStyles = css`
  :host {
    display: block;
    font-family: system-ui, -apple-system, sans-serif;
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
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  /* Active / lit-up state for stateful icons */
  .icon-on { color: #ffffff; }

  /* ── Colour overlay (CSS mask + blend for body recolouring) ── */

  .car-colour-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
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
    background: #1c1c1e;
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
    background: #252527;
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

  /* Car area — dark slab with seat heat tap zones overlaid */
  .clim-car-area {
    background: #080808;
    height: 220px;
    position: relative;
    overflow: hidden;
  }

  .clim-car-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    pointer-events: none;
    opacity: 0.85;
  }

  /* Seat heat tap zones (positioned in the car area) */
  .clim-seat-zone {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-seat-zone:hover  { background: rgba(255,255,255,0.06); }
  .clim-seat-zone:active { background: rgba(255,255,255,0.1); }

  .clim-seat-zone .icon {
    width: 28px;
    height: 28px;
  }

  .clim-seat-zone span {
    font-size: 0.62em;
    font-weight: 500;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.02em;
  }

  /* Seat positions — approximate top-down car layout */
  .clim-seat-fl { top: 32%; left: 25%; }  /* front driver   */
  .clim-seat-fr { top: 32%; left: 75%; }  /* front passenger*/
  .clim-seat-rl { top: 70%; left: 22%; }  /* rear left      */
  .clim-seat-rc { top: 70%; left: 50%; }  /* rear centre    */
  .clim-seat-rr { top: 70%; left: 78%; }  /* rear right     */

  /* Bottom sheet container — slides up when expanded */
  .clim-sheet {
    background: #111111;
    border-radius: 14px 14px 0 0;
    margin-top: -14px;   /* overlap the car area slightly */
    position: relative;
    z-index: 1;
    padding-bottom: 4px;
  }

  /* Drag handle row */
  .clim-handle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px 0 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-handle-pill {
    width: 36px;
    height: 4px;
    background: rgba(255,255,255,0.2);
    border-radius: 2px;
    transition: background 0.15s ease;
  }

  .clim-handle:hover .clim-handle-pill { background: rgba(255,255,255,0.38); }

  /* Interior / Exterior temp info line */
  .clim-temp-info {
    text-align: center;
    font-size: 0.8em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
    padding: 0 20px 16px;
  }

  /* Main control row: [Power] [← Temp →] [Vent] */
  .clim-main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 20px;
  }

  /* Power / Vent icon+label buttons */
  .clim-icon-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.72em;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 10px;
    min-width: 52px;
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
    color: rgba(255,255,255,0.4);
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

  /* Defrost Car — full-width pill button (always visible) */
  .clim-full-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    width: calc(100% - 32px);
    margin: 0 16px 10px;
    padding: 16px 18px;
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    color: rgba(255,255,255,0.85);
    font-family: inherit;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease;
  }

  .clim-full-btn:hover { background: #252528; }

  .clim-full-btn.active {
    background: rgba(232,33,39,0.15);
    border-color: rgba(232,33,39,0.3);
    color: #ff7070;
  }

  .clim-full-btn .icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.5);
  }

  .clim-full-btn.active .icon { color: #e82127; }

  /* Expandable heated seat section */
  .clim-expanded-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }

  .clim-sheet.expanded .clim-expanded-content {
    max-height: 520px;
  }

  /* List group container — matches Tesla app Camp Mode / Dog Mode style */
  .clim-list-group {
    margin: 0 16px 10px;
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    overflow: hidden;
  }

  .clim-list-group--last { margin-bottom: 16px; }

  /* Each row in the list group */
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

  .clim-list-item.hot {
    color: rgba(255,255,255,0.9);
  }

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

  /* Section title — matches "Cabin Overheat Protection" bold white heading */
  .clim-section-title {
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
    padding: 12px 16px 8px;
  }

  /* Horizontal separator between Camp/Dog group and Overheat section */
  .clim-separator {
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 8px 16px;
  }

  /* Segmented control container — extends .clim-list-group */
  .clim-segment-group {
    display: flex;
    padding: 4px;
    gap: 2px;
  }

  /* Each segment option button */
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
    background: #080808;
    height: 300px;
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
    color: rgba(255,255,255,0.88);
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 400;
    cursor: pointer;
    padding: 14px 28px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.12s ease;
    user-select: none;
  }

  .ctrl-zone:active { color: rgba(255,255,255,0.5); }

  /* Frunk: upper area, text only */
  .ctrl-frunk {
    top: 14%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Lock: car centre, icon only — larger icon */
  .ctrl-lock {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ctrl-lock .icon {
    width: 34px;
    height: 34px;
  }

  /* Trunk: lower area, text only */
  .ctrl-trunk {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Charge port: bottom-left — small icon, highlights when open */
  .ctrl-port {
    bottom: 16%;
    left: 5%;
    padding: 10px 12px;
    color: rgba(255,255,255,0.35);
    font-size: 1em;
  }

  .ctrl-port .icon {
    width: 22px;
    height: 22px;
  }

  .ctrl-port.port-open { color: #ffffff; }

  /* Controls: bottom action bar */
  .ctrl-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 14px 8px 18px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }

  .ctrl-action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.5);
    font-family: inherit;
    font-size: 0.72em;
    cursor: pointer;
    padding: 6px 4px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .ctrl-action-btn:hover  { color: rgba(255,255,255,0.85); }
  .ctrl-action-btn:active { color: #ffffff; }

  .ctrl-action-btn .icon {
    width: 26px;
    height: 26px;
  }
`;

// ── Main card styles (header, car image, quick actions, nav rows, etc.) ─────

export const cardStyles = css`
  ha-card {
    display: block;
    background: var(--ha-card-background, #0d0d0d);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    padding: 0;
  }

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

  .online-badge {
    font-size: 0.68em;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .online-badge.online {
    background: rgba(39,174,96,0.15);
    color: #2ecc71;
    border: 1px solid rgba(46,204,113,0.3);
  }

  .online-badge.offline {
    background: rgba(192,57,43,0.15);
    color: #e74c3c;
    border: 1px solid rgba(231,76,60,0.3);
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

  .icon-btn:hover { color: rgba(255,255,255,0.75); }

  .icon-btn .icon {
    width: 20px;
    height: 20px;
  }

  /* ── Car image ───────────────────────────────────────────── */

  .car-image-area {
    position: relative;
    width: 100%;
    background: #0d0d0d;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    overflow: hidden;
  }

  .car-image {
    width: 100%;
    max-height: 260px;
    object-fit: contain;
    object-position: center;
    display: block;
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
    background: #0d0d0d;
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
  .quick-btn.q-unlocked { color: rgba(255,255,255,0.4); }

  .quick-btn .icon {
    width: 26px;
    height: 26px;
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
  .nav-row:last-child { border-bottom: none; }

  .nav-row.active {
    background: rgba(232,33,39,0.06);
  }

  .nav-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.38);
  }

  .nav-row.active .nav-icon { color: #e82127; }

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

  .nav-row.active .nav-sublabel { color: rgba(232,33,39,0.7); }

  .nav-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
    transition: transform 0.2s ease, color 0.15s ease;
  }

  .nav-row.active .nav-chevron {
    transform: rotate(90deg);
    color: rgba(232,33,39,0.45);
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
    background: #1c1c1e;
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
  .settings-row:active { background: rgba(255,255,255,0.06); }

  .settings-row-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .settings-swatch {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.15);
    flex-shrink: 0;
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
`;
