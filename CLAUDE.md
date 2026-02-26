# Claude Project: Tesla Home Assistant Card (HACS Custom Card)

## Project Overview

We are converting the `homeassistant-fe-tesla` project from a raw Lovelace YAML blob into a proper HACS-compatible custom card built with **Lit Element** (vanilla JS, no build step required for the final output).

**GitHub repo:** https://github.com/ds2000/homeassistant-fe-tesla  
**Target:** A single compiled `tesla-card.js` file installable via HACS with zero manual configuration steps.

---

## Architecture Decisions (DO NOT deviate without discussion)

### Framework
- **Lit Element** — lightweight, no build toolchain required for users
- Multiple output files: `tesla-card.js` for landing but sub menus into separate files.
- Development uses a simple esbuild/rollup bundler (decided later)
- NO React, Vue, or other heavy frameworks

### HACS Compliance
The repo must include these files to be HACS-compatible:
```
hacs.json
dist/tesla-card.js        ← the compiled card
tesla-card.js             ← symlink or copy of dist/ for HACS resource
README.md
```

`hacs.json` format:
```json
{
  "name": "Tesla Card",
  "render_readme": true,
  "homeassistant": "2023.0.0"
}
```

### Dependencies
**ZERO runtime dependencies.** Everything must be bundled into `tesla-card.js`:
- No `stack-in-card`
- No `slider-entity-row`
- No external font CDN links (use system fonts or self-contained CSS)
- Lit Element can be bundled or loaded from CDN at build time — decide when we get to bundling

---

## Configuration Schema

The card must be configurable entirely via the Lovelace card config YAML. **No manual entity renaming, no find-and-replace.**

### Required Config
```yaml
type: custom:tesla-card
car_name: terrance          # The entity prefix used by the alandtse/tesla integration
```

### Optional Config (with sensible defaults)
```yaml
car_model: "3"              # 3 | Y | S | X  (default: "3")
car_color: "red"            # matches folder name under images/ (default: "red")
image_path: /local/Tesla    # base path to car images (default: /local/Tesla)
name: My Tesla              # display name (default: derived from car_name)
show_speed: true            # show speed/parked status (default: true)
```

### Entity Naming Convention
All entities follow the pattern from the [alandtse/tesla](https://github.com/alandtse/tesla) integration:

| Entity type | Pattern |
|---|---|
| Binary sensors | `binary_sensor.{car_name}_*` |
| Sensors | `sensor.{car_name}_*` |
| Buttons | `button.{car_name}_*` |
| Locks | `lock.{car_name}_*` |
| Switches | `switch.{car_name}_*` |
| Climate | `climate.{car_name}_*` |
| Device tracker | `device_tracker.{car_name}_location_tracker` |

**Always derive entity IDs from `car_name` config value. Never hardcode `terrance`.**

---

## Internal State (Replaces HA Helpers)

The original card required 3 `input_boolean` helpers for menu state. **We manage this internally in JS.**

```javascript
// Internal state — never write to HA for UI-only state
this._activeMenu = null; // null | 'charger' | 'climate' | 'controls'
```

Menu toggling is handled entirely within the card's reactive state. No helpers required.

---

## Visual Editor

The card must implement `static getConfigElement()` to provide a GUI config editor in the Lovelace UI:
- car_name text input
- car_model dropdown (3 / Y / S / X)
- car_color text input
- image_path text input

---

## Image Handling

Images are stored by the user at: `{image_path}/{model}/{color}/`

Example: `/local/Tesla/3/red/parked.png`

The card should:
1. Use the configured `image_path`, `car_model`, `car_color` to construct image URLs
2. Display a placeholder/fallback if the image fails to load
3. Document the expected folder structure clearly in README

**Do NOT bundle images into the JS file.** They are provided by the user.

---

## Screens / Menus

The card has 4 states (matching the original YAML):

1. **Default view** — car image, status bar, 4 menu buttons at bottom
2. **Charger menu** — charging controls, current slider, charge limit slider
3. **Climate menu** — HVAC on/off, temperature, heated seats, vent
4. **Controls menu** — locks, frunk, trunk, sentry mode, windows

---

## Code Style & Quality Rules

### JavaScript
- Use **ES2020+** syntax
- Prefer `const` over `let`, never `var`
- All entity calls via `hass.callService()` must be wrapped in try/catch with user-visible error feedback
- No inline event handlers in templates — use class methods
- All magic strings (entity suffixes, service names) defined as constants at top of file

### Lit Element Patterns
```javascript
// Always use static styles — never inject <style> tags dynamically
static get styles() { return css`...`; }

// Always define properties
static get properties() {
  return {
    hass: { type: Object },
    config: { type: Object },
    _activeMenu: { type: String, state: true },
  };
}

// Config validation in setConfig
setConfig(config) {
  if (!config.car_name) throw new Error('car_name is required');
  this.config = config;
}
```

### CSS
- Use CSS custom properties for theming where possible
- Match Tesla app aesthetic: dark background, white text, accent red `#e82127`
- Use `--ha-card-background` for card background so it respects HA themes
- Font: system-ui stack (no external font dependencies)

---

## File Structure

```
homeassistant-fe-tesla/
├── hacs.json
├── README.md
├── tesla-card.js           ← HACS resource (points to dist/)
├── dist/
│   └── tesla-card.js       ← compiled output
├── src/
│   ├── tesla-card.js       ← main card source
│   ├── styles.js           ← CSS-in-JS styles
│   ├── entity-config.js    ← entity name constants
│   └── editor.js           ← visual config editor
├── images/
│   └── {model}/{color}/    ← example images (Model 3 red)
│       ├── parked.png
│       ├── charging.png
│       └── ...
├── package.json
└── rollup.config.js        ← or esbuild config
```

---

## What NOT to Do

- ❌ Do not hardcode `terrance` anywhere in source
- ❌ Do not require any HACS card dependencies (`stack-in-card`, `slider-entity-row`, etc.)
- ❌ Do not use `input_boolean` helpers for UI state
- ❌ Do not use external CDN links (fonts, icons) in the final card
- ❌ Do not use `document.querySelector` or direct DOM manipulation — use Lit's reactive rendering
- ❌ Do not ship without a working `getConfigElement()` visual editor
- ❌ Do not write YAML examples with `terrance` — always use `{car_name}` placeholder in docs

---

## Workflow Rules for This Project

1. **Discuss architecture changes before implementing** — post a plan, get agreement, then code
2. **One feature at a time** — don't refactor + add features in the same commit
3. **Test entity paths** — always verify entity ID patterns against the alandtse/tesla integration docs before using them
4. **README-first** — when adding a config option, document it in README at the same time as implementing it
5. **Version bumping** — use semver; bump patch for fixes, minor for new features, major for breaking config changes

---

## Design / Visual Style

Match the Tesla mobile app aesthetic precisely:

- **Dark theme**: Near-black backgrounds (`#1a1a1a` / `#0d0d0d`), never white or grey
- **Typography**: `'Gotham', 'Gill Sans', 'Century Gothic', system-ui` — geometric sans, no external font CDN
- **Accent colour**: Tesla red `#e82127` for active states, highlights, and charging indicators
- **Buttons**: Pill-shaped, subtle borders, icon + label, highlight on active state
- **Motion**: Smooth menu slide transitions (200ms ease-in-out), charging bolt pulse animation, no bouncy/springy effects
- **Spacing**: Generous padding — feels like a phone app, not a cramped dashboard widget
- **Layout**: Full-bleed car image as hero, control UI overlaid at bottom third
- **States**: Active/inactive button states must be visually unambiguous (lit up vs dimmed)

The goal: a Tesla owner opens this card and immediately feels at home.

---

## Icons

Icons are sourced from **[Tabler Icons](https://tabler.io/icons)** (MIT licensed). Their style matches the Tesla app almost exactly — stroke-based, rounded, geometric. Do NOT attempt to generate icon SVG paths from scratch.

### Workflow for adding icons
1. Go to tabler.io/icons and find the closest matching icon
2. Copy the SVG source directly from the site
3. Make these two adjustments:
   - Change `stroke-width="2"` to `stroke-width="1.5"`
   - Remove the blank clipping path: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/>`
4. Add to `src/icons.js` as a named export

### Rules
- All icons defined as SVG strings in `src/icons.js` as named exports
- `viewBox="0 0 24 24"` standard size (Tabler uses this already)
- `stroke="currentColor"` so CSS controls colour
- `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- `fill="none"` on the SVG element

### Required Icon Set
```
lock, unlock, climate, charging, charging-port,
frunk, trunk, sentry, windows-vent, windows-close,
heated-seat, fan, battery, settings, chevron-up,
chevron-down, check, refresh, driving, parked
```

### Tabler equivalents (verified)
| Card icon | Tabler icon name |
|---|---|
| lock | `lock` |
| unlock | `lock-open` |
| climate | `air-conditioning` |
| charging | `bolt` |
| charging-port | `plug-connected` |
| trunk | `car` |
| sentry | `shield` |
| windows-vent | `windmill` |
| fan | `propeller` |
| battery | `battery-charging` |
| settings | `settings` |
| chevron-up | `chevron-up` |
| chevron-down | `chevron-down` |
| check | `check` |
| refresh | `refresh` |
| heated-seat | `armchair` |
| parked | `parking` |
| driving | `steering-wheel` |

### Tesla-specific icons (no Tabler equivalent)
`frunk` and `charging-port` have no good Tabler match. For these:
- Feed a cropped Tesla app screenshot to Claude Code
- Ask Claude to trace it as an SVG path matching the Tabler style
- Verify visually before committing

### Usage in templates
```javascript
import { ICONS } from './icons.js';

// In Lit template:
html`<span class="icon">${unsafeHTML(ICONS.lock)}</span>`
```

### Example icon format
```javascript
export const ICONS = {
  // Sourced from tabler.io/icons/icon/lock — stroke-width adjusted to 1.5
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>`,
}

---

## Reference Links

- [alandtse/tesla integration](https://github.com/alandtse/tesla) — the HA integration this card depends on
- [HACS default requirements](https://hacs.xyz/docs/publish/start)
- [Lit Element docs](https://lit.dev/docs/)
- [HA custom card boilerplate](https://github.com/custom-cards/boilerplate-card)
- [HA developer docs — custom cards](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/)
