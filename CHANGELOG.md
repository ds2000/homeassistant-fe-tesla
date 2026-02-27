# Changelog

## [0.2.0] - 2026-02-27

### Added
- **Landscape layout mode** — toggle via Settings; card widens to 150% with side-by-side layout
  - Landing page: car image + quick actions on left, nav rows on right
  - Climate panel: car + seat controls on left, temperature/defrost/camp/dog controls on right
  - Controls panel: car tap zones on left, action buttons stacked vertically on right
- **Model & Colour flow** — selecting a model now automatically forwards to the colour picker with smooth directional slide transitions (right for forward, left for back)
- **Staggered panel transitions** — header, car image, quick actions, and nav rows fade-slide in sequentially on load; submenus slide up on entry
- **New icons** — inline SVG icons for car (top-down Tesla silhouette), climate fan (Tesla 4-blade pinwheel), layout toggle, schedule, security, location, and more
- **New nav rows** — Location, Set Schedules, Security & Drivers rows on the landing page
- **Layout persistence** — portrait/landscape preference saved to localStorage per car

### Changed
- **All buttons converted to inline SVGs** — lock, car, charging, climate quick-action buttons and nav rows now use `<span class="icon">` with inline SVG instead of `<img>` tiles
- **Unified hover effects** — all interactive elements (icon buttons, quick actions, nav rows) share consistent 0.8 alpha brightening + drop-shadow glow on hover
- **Settings menu simplified** — Model and Colour merged into a single "Model & Colour" row; selecting a model flows directly into colour selection
- **"Offline" renamed to "Asleep"** — status text matches Tesla app language
- **"Midnight Silver" renamed to "Midnight Grey"** — factory colour name corrected
- **Seat control icons reduced 20%** — climate seat heat buttons scaled from 36px to 29px
- **Layout property added to TeslaBase** — all submenu components receive the layout state from the parent card
- **Controls overlay positions refined** — frunk (14%), trunk (78%), charge port (82%/20%)

### Removed
- Standalone Colour settings row (merged into Model & Colour flow)
- Unused `settings-swatch` CSS class
- Legacy `<img>` button tiles for quick actions and nav rows
- Scroll constraints on model picker (`max-height`, `overflow-y: auto`)
- Old/unused images: legacy gray Model 3, old neutral Model 3 previews, Model S white raw screenshots

### Fixed
- Model Y images normalised to match Model 3 red reference proportions (87% width fill, consistent car sizing across base/chargeport/frunk variants)
- Model Y controls and climate background images rescaled to match Model 3 dimensions
- Disabled nav rows styled to appear normal (not greyed out) matching Tesla app
- Template syntax fixes for landscape class attributes on submenu components
