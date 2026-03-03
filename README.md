# Tesla Card for Home Assistant

A custom Lovelace card for the [alandtse/tesla](https://github.com/alandtse/tesla) integration. Control your Tesla directly from your Home Assistant dashboard with a clean, app-style interface.

[![Add to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=ds2000&repository=homeassistant-fe-tesla&category=plugin)

If you find this card useful: [<img src="/images/bmac.jpeg" height="32">](https://www.buymeacoffee.com/daveshaw301)

| Landing | Charging | Doors Open |
|---------|----------|-----------|
| ![Landing](images/readme/card-landing.png) | ![Charging](images/readme/card-charging.png) | ![Doors](images/readme/card-doors.png) |

| Controls | Climate | Charger |
|----------|---------|---------|
| ![Controls](images/readme/card-controls.png) | ![Climate](images/readme/card-climate.png) | ![Charger](images/readme/card-charger.png) |

---

## Features

- **Real-time car visualization** — overlay-based rendering composites door, trunk, frunk, and chargeport states in real time (128 offcharge + 64 oncharge combinations)
- **On-charge mode** — automatically switches to charging images when plugged in, with an animated green glow on the charging cable
- **Default view** — car image with battery bar, range, parked/speed status, inside temperature
- **Charger menu** — charging state, charge port open/close, start/stop charging, charge limit slider, charging amps slider
- **Climate menu** — HVAC on/off, temperature stepper, defrost toggle, heated seat levels (Off/Low/Med/High per seat), window vent/close
- **Controls menu** — door lock/unlock with state badge, frunk open, trunk open/close, sentry mode toggle, remote start, horn, flash lights, window vent/close
- **Landscape layout** — optional wide layout with side-by-side panels
- **Multiple models & colours** — Model 3, Y, S, X with community-contributed colour variants

**No helper entities required.** Menu state is managed entirely inside the card.

**No card dependencies required.** Single self-contained JS file.

---

## Installation

### Via HACS (recommended)

[![Add to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=ds2000&repository=homeassistant-fe-tesla&category=plugin)

Or manually: open HACS, click **Frontend** > **+**, search for **Tesla Card**, and install.

### Manual

1. Download `dist/tesla-card.js` from this repository
2. Copy it to `/config/www/tesla-card.js` on your HA instance
3. Go to **Settings > Dashboards > Resources** and add:
   ```
   URL:  /local/tesla-card.js
   Type: JavaScript module
   ```
4. Reload your browser

---

## Prerequisites

1. A working [Home Assistant](https://www.home-assistant.io/) installation
2. The [alandtse/tesla](https://github.com/alandtse/tesla) integration installed and configured

---

## Configuration

Add the card to your dashboard via the UI editor, or paste into the YAML editor:

```yaml
type: custom:tesla-card
car_name: my_tesla
```

### All options

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `car_name` | **Yes** | -- | Entity prefix for your car (e.g. `my_tesla` for `sensor.my_tesla_battery`) |
| `car_model` | No | `3` | Model number: `3`, `Y`, `S`, or `X` |
| `car_color` | No | `red_multi_coat` | Colour ID matching the image folder name |
| `image_path` | No | `/local/Tesla` | Base path where car images are stored |
| `name` | No | _(car_name)_ | Display name shown at the top of the card |
| `show_speed` | No | `true` | Show the Parked / speed status column |

### Full example

```yaml
type: custom:tesla-card
car_name: my_tesla
car_model: "3"
car_color: red_multi_coat
image_path: /local/Tesla
name: My Tesla
show_speed: true
```

### Visual editor

The card includes a built-in GUI editor. Click the pencil icon on the card in the Lovelace UI to configure all options without writing YAML.

---

## Entity Reference

All entity IDs are derived from your `car_name` value automatically. Replace `{car_name}` with your value (e.g. `my_tesla`).

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

Not all entities need to exist -- the card silently skips any that are unavailable.

---

## Contributing

All contributions are welcome:

- **New car images** -- submit via the [Image Uploader](https://ds2000.github.io/homeassistant-fe-tesla-image-uploader), or add a folder under `images/models/{model}/{variant}/{colour}/`
- **Bug reports** -- open an issue with your HA version, integration version, and what you expected vs what happened
- **Pull requests** -- please follow the one-feature-at-a-time rule and test against a live HA instance before submitting

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
