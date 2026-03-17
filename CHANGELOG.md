# Changelog

## [1.0.0] - 2026-03-17

### Added
- **Heated steering wheel** on climate screen — cycles through Off/Low/High with Tesla app SVGs, shows "Auto" when auto steering heater switch is on. Only appears if the entity exists.
- **Tyre pressure display** in Controls menu — toggle button (top-right) shows pressure at all 4 corners. Uses Tesla TPMS SVG icon.
- **Tyre unit toggle** (psi/bar) in Settings panel — auto-converts pressure values, persisted per car.
- **Camp/dog mode Tesla SVGs** — replaced inline icons with official Tesla app button images (grey off, white on).
- **Steering wheel heater SVGs** — Off (grey), Low (1 red wave), High (2 red waves), transparent backgrounds.

### Fixed
- Steering wheel SVGs cleaned — "AUTO" text paths removed, transparent backgrounds.
- alandtse/tesla compatibility — frunk and trunk buttons use domain-aware `_activate()` instead of hardcoded `cover` service calls.

## [0.6.5] - 2026-03-17

### Added
- **Tyre pressure display** — toggle button in Controls menu header shows pressure values at all 4 corners of the car image, with unit display (psi/bar). Only appears if tyre pressure entities exist.
- **Driving mode** — speed shown in header when car is moving, animated wind lines behind the car at correct 3/4 perspective angle
- **Navigation row** — appears when driving with active route, shows destination, distance away, and arrival time
- **Location row** — shows zone name from device_tracker (Home, Not home, etc.), switches to navigation info when driving
- **Charging header** — green battery bar, green range text, bolt icon, and time remaining to charge limit
- **Smart refresh** — wake button sends wake command then batch re-polls all key entities after 5s
- **Smart status text** — Asleep / Charging / speed / Parked based on car state
- New entities: `SPEED`, `DISTANCE_TO_ARRIVAL`, `TIME_TO_ARRIVAL`, `ROUTE`, `TYRE_FL/FR/RL/RR`, `TIME_TO_FULL_CHARGE`

### Fixed
- **alandtse/tesla compatibility** — frunk and trunk buttons now use `_activate()` which picks the correct service based on entity domain (cover vs button)
- **Case-insensitive car name** — auto-lowercased for entity resolution
- **Case-insensitive seat heater levels** — handles Fleet lowercase values
- **Unlocked padlock** now white instead of dimmed
- **Charge rate** rounded to 1 decimal place
- Entity picker in editor uses native input + datalist (ha-entity-picker doesn't render in all contexts)
- Entity groups fully visible when expanded (removed max-height)

### Changed
- Removed Set Schedules and Security & Drivers nav rows (no Fleet API support)
- Active nav row chevron stays default colour and direction
- Increased nav row spacing between label and sublabel

## [0.5.0] - 2026-03-16

### Added
- **Custom Entities mode** — new "Custom Entities" integration option in the editor lets users map every entity individually with autocomplete. Supports MQTT, third-party integrations, or any non-standard entity naming. Entities are grouped into 9 collapsible categories (Sensors, Status, Doors, Windows, Lock, Climate, Charging, Covers & Buttons, Location) with a count badge showing configured vs total.
- **Camp Mode & Dog Mode** for Tesla Fleet — Fleet integration now uses `climate.set_preset_mode` to activate camp/dog modes via the climate entity's preset modes, in addition to the existing switch-based support for the custom integration.
- **Smart refresh** — refresh button wakes the car then batch re-polls all key entities after 5 seconds, forcing HA to fetch fresh data from the Fleet API.
- **Conditional rear seat heaters** — rear seat heater controls only render if the entities exist in HA, accommodating cars and integrations that don't expose them.
- **Spinning climate fan** — when climate is active, the fan icon in both the quick actions bar and the nav row gently rotates (6s per revolution) for an obvious visual indicator.
- **Active climate nav row** — Climate nav row icon turns white and sublabel shows the target temperature when HVAC is on.
- **Smart status text** — shows "Asleep" when offline, "Charging" when charge switch is on, "Parked" when online but stationary, or speed in km/h when moving.

### Fixed
- **Fleet entity names corrected** — `cover.{car_name}_froot` and `cover.{car_name}_boot` are the real Fleet integration defaults (not `frunk`/`trunk`). Entity config updated to match.
- **No `toggle_cover` on Fleet** — the Tesla Fleet integration rejects `toggle_cover` calls. All cover controls now use explicit `open_cover`/`close_cover` based on current state.
- **Frunk is open-only** — frunk button now calls `open_cover` only and disables when already open (must be physically closed).
- **Case-insensitive car name** — `car_name` is now auto-lowercased so `Terrance` and `terrance` both work.
- **Case-insensitive seat heater levels** — Fleet uses lowercase (`off`, `low`, `medium`, `high`); seat heat file matching is now case-insensitive.
- **Unlocked padlock icon** — now white instead of dimmed, matching locked state visibility.
- **Buy Me A Coffee badge** — replaced broken local image with shields.io badge that renders in HACS and GitHub.

### Changed
- Removed Location, Set Schedules, and Security & Drivers nav rows — these features are not available through the Fleet API.
- Active nav row chevron no longer rotates or changes colour — stays pointing right with default styling.
- Active nav row sublabel colour changed from red to white.
- Lint cleanup: removed unused variables, added test/ to .gitignore.
- Security audit: 0 hardcoded secrets, 0 eval/injection vectors, 0 external runtime URLs, 0 npm vulnerabilities.

## [0.4.1] - 2026-03-10

### Added
- **All-doors overlay** — when all 4 doors are open, the card uses a single `all-doors-overlay.png` from the actual all-doors screenshot instead of compositing two combined overlays, eliminating through-glass artifacts where the base image body was visible

### Fixed
- **Climate panel car bottom correction** — on models where a full-width UI drag bar sits below the car (Model Y), the car mask no longer includes HVAC controls, fixing crop bounds and SSS seat heater icon inpainting

## [0.4.0] - 2026-03-09

### Added
- **Official Tesla Fleet integration support** — card now works with both the official [Tesla Fleet](https://www.home-assistant.io/integrations/tesla_fleet/) integration and the [alandtse/tesla](https://github.com/alandtse/tesla) custom integration
- **Integration selector** in card editor — dropdown to choose between Tesla Fleet (default) and Tesla Custom
- **Integration-aware service calls** — charge port, trunk, and cabin overheat protection automatically use the correct HA service domain (cover vs button, climate vs select) based on integration type

### Changed
- Entity config rewritten with dual `FLEET` / `CUSTOM` entity maps — all components use `this.E.` getter instead of hardcoded `ENTITIES.` constants
- `TeslaBase` gains `_domainOf()`, `_activate()`, and `_openClose()` helpers for cross-integration service calls
- README updated with dual-integration docs, corrected default image path, and collapsible entity reference tables
- Card description updated to reflect dual-integration support

### Fixed
- Buy Me A Coffee image broken on GitHub (leading `/` in image path)

## [0.3.4] - 2026-03-09

### Added
- **Stealth Grey** colour added to Model 3 Highland (3.2), Model Y 2020–2024 (Y.1), Model Y Juniper (Y.2), Model S Refresh (S.2), and Model X Refresh (X.2)

## [0.3.0] - 2026-03-03

### Added
- **Model 3 2017–2023 — Deep Blue Metallic** images (contributed by [@ccarcione](https://github.com/ccarcione))
- **Model 3 2017–2023 — Red Multi-Coat** images (contributed by David Shaw)
- **Overlay-based rendering** — car state is now composited from transparent PNG overlays instead of prerendered JPGs, enabling all 128 offcharge and 64 oncharge door/trunk/frunk/chargeport combinations
- **On-charge image switching** — when the car is plugged in, the card switches to a separate set of oncharge overlays showing the charging cable; falls back to offcharge images if oncharge set is unavailable
- **Charging cable glow animation** — extracted cable overlay pulses with a green `drop-shadow` + `brightness` animation when actively charging
- **Cable overlay extraction** — `oncharge-cable-overlay.png` is auto-generated by the processing pipeline and rendered as a separate layer for the glow effect
- **Combined door overlays** — `nf-nr-combined` and `ff-fr-combined` overlays for when both same-side doors are open, eliminating overlap artifacts
- **On-charge availability probing** — card probes for `oncharge-base.png` at load and enables/disables the oncharge image set per colour
- **models.json as single source of truth** — all model/variant/colour definitions and `hasImages` flags driven from one file
- **HACS image delivery** — processed images ship in `dist/` for automatic HACS installation

### Changed
- **Image folder structure** — colours use `models.json` IDs (e.g. `red_multi_coat` instead of `red`); Model S/Y paths use uppercase IDs (`S/S.1`, `Y/Y.1`)
- **Charging cable glow intensified** — dual stacked `drop-shadow` (14px/0.9 + 28px/0.4) with `brightness(1.5)` pulse for a much more visible effect
- **Test states page** — added offcharge/oncharge toggle, cable overlay rendering, and mode-dependent file lists

### Removed
- 76 unused legacy JPG images (old neutral, red, blue folders with prerendered states)
- Legacy `telsa_card.yaml` configuration file
- Old raw screenshot files (`images/models/3/red/RAW/`)
- Precomputed mask images (`*-mask.png`) — no longer needed with overlay compositing

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
