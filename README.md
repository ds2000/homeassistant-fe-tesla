# Tesla Card for Home Assistant

A HACS-compatible Lovelace custom card for the [alandtse/tesla](https://github.com/alandtse/tesla) integration. Control your Tesla directly from your dashboard with a clean, app-style interface.

![Screenshot 2023-06-22 at 21 26 00](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/adff06dd-176e-4c23-af94-f30e405cb222)

![Screenshot 2023-06-22 at 21 26 29](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/af036517-a545-41d6-8263-9ddc2d58c8ec)

---

## Features

- **Default view** — car image (changes state when frunk open or plugged in), battery bar, range, parked/speed status, inside temperature
- **Charger menu** — charging state, charge port open/close, start/stop charging, charge limit slider, charging amps slider
- **Climate menu** — HVAC on/off, temperature stepper, defrost toggle, heated seat levels (Off/Low/Med/High per seat), window vent/close
- **Controls menu** — door lock/unlock with state badge, frunk open, trunk open/close, sentry mode toggle, remote start, horn, flash lights, window vent/close

**No helper entities required.** Menu state is managed entirely inside the card — no `input_boolean` toggles needed.

**No card dependencies required.** This card is a single self-contained JS file — no `stack-in-card`, no `slider-entity-row`.

---

## Prerequisites

1. A working [Home Assistant](https://www.home-assistant.io/) installation
2. The [alandtse/tesla](https://github.com/alandtse/tesla) integration installed and configured
3. Car images uploaded to your HA instance (see [Image Setup](#image-setup) below)

---

## Installation

### Via HACS (recommended)

1. Open HACS → **Frontend**
2. Click the **+** button and search for `Tesla Card`
3. Install and reload your browser
4. Add the card to your dashboard (see [Configuration](#configuration))

### Manual

1. Download `dist/tesla-card.js` from this repository
2. Copy it to `/config/www/tesla-card.js` on your HA instance
3. Go to **Settings → Dashboards → Resources** and add:
   ```
   URL:  /local/tesla-card.js
   Type: JavaScript module
   ```
4. Reload your browser

---

## Configuration

Add the card to your dashboard via the UI editor, or paste the following into the YAML editor:

```yaml
type: custom:tesla-card
car_name: my_tesla
```

### All options

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `car_name` | **Yes** | — | The entity prefix for your car, as set by the tesla integration (e.g. `my_tesla` for entities like `sensor.my_tesla_battery`) |
| `car_model` | No | `3` | Model number: `3`, `Y`, `S`, or `X` — used to select the image subfolder |
| `car_color` | No | `red` | Colour name — used to select the image subfolder (must match folder name exactly) |
| `image_path` | No | `/local/Tesla` | Base path where your car images are stored |
| `name` | No | _(car_name)_ | Display name shown at the top of the card |
| `show_speed` | No | `true` | Show the Parked / speed status column in the status bar |

### Full example

```yaml
type: custom:tesla-card
car_name: my_tesla
car_model: "3"
car_color: red
image_path: /local/Tesla
name: My Tesla
show_speed: true
```

### Visual editor

The card includes a built-in GUI editor. Click the pencil icon on the card in the Lovelace UI to configure all options without writing YAML.

---

## Image Setup

The card loads images from your HA instance at:

```
{image_path}/{car_model}/{car_color}/
```

With defaults this resolves to `/local/Tesla/3/red/`.

### Upload your images

Copy your image folder to `/config/www/Tesla/` on your HA instance so that they are accessible at `/local/Tesla/`. The [VS Code add-on](https://community.home-assistant.io/t/home-assistant-community-add-on-visual-studio-code/107863) is a convenient way to do this.

### Required filenames

The card looks for these specific filenames. If a file is missing, the card shows a fallback icon placeholder instead of an error.

| Filename | Shown when |
|----------|-----------|
| `base.jpg` | Default / parked state |
| `baseChargeportOpened.jpg` | `binary_sensor.{car_name}_plugged_in` is `on` |
| `baseFrunkOpened.jpg` | `binary_sensor.{car_name}_frunk` is `on` |

### Available image sets

The following model/colour combinations are included in this repository under `images/models/`. Copy the folder you need into your HA `/config/www/Tesla/` directory.

| Model | Colour | Folder path |
|-------|--------|-------------|
| Model 3 | Red | `images/models/3/red/` |
| Model 3 | Blue | `images/models/3/blue/` |
| Model 3 | Gray | `images/models/3/gray/` |
| Model S | White | `images/models/s/white/` |
| Model Y | Silver | `images/models/y/silver/` |
| Model Y | White | `images/models/y/white/` |

Don't see your car? Screenshot your Tesla app, crop to just the car, and save as `base.jpg` in a new folder such as `images/models/3/midnight/`. Then set `car_color: midnight` in your card config. Contributions of new image sets are very welcome — see [Contributing](#contributing).

---

## Entity Reference

All entity IDs are derived from your `car_name` value automatically. The table below shows every entity the card uses. Replace `{car_name}` with your value (e.g. `my_tesla`).

### Sensors (read-only)

| Entity ID | Used for |
|-----------|----------|
| `sensor.{car_name}_battery` | Battery percentage |
| `sensor.{car_name}_battery_range` | Remaining range |
| `sensor.{car_name}_charging_state` | Charging state label |
| `sensor.{car_name}_charge_rate` | Current charge rate (kW) |
| `sensor.{car_name}_charge_limit` | Charge limit (read display) |
| `sensor.{car_name}_temperature_inside` | Cabin temperature |
| `sensor.{car_name}_speed` | Speed (fallback) |

### Binary sensors (read-only)

| Entity ID | Used for |
|-----------|----------|
| `binary_sensor.{car_name}_online` | Online/Offline badge |
| `binary_sensor.{car_name}_charging` | Battery bar bolt, charging state |
| `binary_sensor.{car_name}_plugged_in` | Charge port image, Start button state |
| `binary_sensor.{car_name}_parking_brake` | Parked/speed status |
| `binary_sensor.{car_name}_frunk` | Frunk image + state badge |
| `binary_sensor.{car_name}_trunk` | Trunk state badge |
| `binary_sensor.{car_name}_sentry_mode` | Sentry mode indicator |

### Controllable entities

| Entity ID | Used for |
|-----------|----------|
| `lock.{car_name}_doors` | Door lock/unlock |
| `switch.{car_name}_charger` | Start/stop charging |
| `switch.{car_name}_sentry_mode` | Sentry mode toggle |
| `switch.{car_name}_defrost` | Defrost toggle |
| `select.{car_name}_heated_seat_left` | Left seat heat level |
| `select.{car_name}_heated_seat_right` | Right seat heat level |
| `climate.{car_name}_hvac_climate_system` | HVAC on/off, target temperature |
| `number.{car_name}_charge_limit` | Charge limit slider |
| `number.{car_name}_charging_amps` | Charging amps slider |
| `button.{car_name}_charge_port_open` | Open charge port |
| `button.{car_name}_charge_port_close` | Close charge port |
| `button.{car_name}_frunk` | Open frunk |
| `button.{car_name}_trunk` | Open/close trunk |
| `button.{car_name}_vent_windows` | Vent windows |
| `button.{car_name}_close_windows` | Close windows |
| `button.{car_name}_horn` | Honk horn |
| `button.{car_name}_flash_lights` | Flash lights |
| `button.{car_name}_remote_start` | Remote start |
| `device_tracker.{car_name}_location_tracker` | Speed attribute (when not parked) |

Not all entities need to exist — the card silently skips any that are unavailable.

---

## Contributing

All contributions are welcome:

- **New car images** — add a folder under `images/models/{model}/{color}/` with at minimum `base.jpg`, `baseChargeportOpened.jpg`, and `baseFrunkOpened.jpg`
- **Bug reports** — open an issue with your HA version, integration version, and what you expected vs what happened
- **Pull requests** — please follow the one-feature-at-a-time rule and test against a live HA instance before submitting

---

## Development

```bash
# Install dev dependencies
npm install

# Build dist/tesla-card.js
npm run build

# Watch for changes (with inline sourcemaps)
npm run watch
```

Source files are in `src/`. The compiled output is `dist/tesla-card.js`.

---

If you use this card and find it useful: [<img src="/images/bmac.jpeg" height="32">](https://www.buymeacoffee.com/daveshaw301)
