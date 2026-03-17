// Entity suffix constants — all IDs are derived from car_name at runtime.
// Pattern: {entity_type}.{car_name}_{SUFFIX}

// Official HA Tesla Fleet integration (default)
const FLEET = {
  // Sensors
  BATTERY_LEVEL:        'sensor.{car_name}_battery_level',
  BATTERY_RANGE:        'sensor.{car_name}_battery_range',
  CHARGE_RATE:          'sensor.{car_name}_charge_rate',
  CHARGE_LIMIT:         'number.{car_name}_charge_limit',
  CHARGING_STATE:       'sensor.{car_name}_charging',
  TEMPERATURE_INSIDE:   'sensor.{car_name}_inside_temperature',
  TEMPERATURE_OUTSIDE:  'sensor.{car_name}_outside_temperature',
  SPEED:                'sensor.{car_name}_speed',
  ODOMETER:             'sensor.{car_name}_odometer',

  // Binary sensors (Fleet has individual doors/windows, no combined entity)
  CHARGING:             'switch.{car_name}_charge',
  PLUGGED_IN:           'binary_sensor.{car_name}_charge_cable',
  PARKING_BRAKE:        null,
  FRUNK:                null,
  TRUNK:                null,
  DOORS:                null,
  WINDOWS:              null,
  LOCKED:               null,
  ONLINE:               'binary_sensor.{car_name}_status',
  SENTRY_MODE:          'switch.{car_name}_sentry_mode',

  // Individual door sensors (Fleet only)
  DOOR_DRIVER_FRONT:      'binary_sensor.{car_name}_front_driver_door',
  DOOR_DRIVER_REAR:       'binary_sensor.{car_name}_rear_driver_door',
  DOOR_PASSENGER_FRONT:   'binary_sensor.{car_name}_front_passenger_door',
  DOOR_PASSENGER_REAR:    'binary_sensor.{car_name}_rear_passenger_door',

  // Individual window sensors (Fleet only)
  WINDOW_DRIVER_FRONT:    'binary_sensor.{car_name}_front_driver_window',
  WINDOW_DRIVER_REAR:     'binary_sensor.{car_name}_rear_driver_window',
  WINDOW_PASSENGER_FRONT: 'binary_sensor.{car_name}_front_passenger_window',
  WINDOW_PASSENGER_REAR:  'binary_sensor.{car_name}_rear_passenger_window',

  // Locks
  DOOR_LOCK:            'lock.{car_name}_lock',

  // Switches
  CHARGER_SWITCH:       'switch.{car_name}_charge',
  SENTRY_MODE_SWITCH:   'switch.{car_name}_sentry_mode',
  DEFROST_SWITCH:       'switch.{car_name}_defrost',
  CAMP_MODE:            null,
  DOG_MODE:             null,

  // Climate — cabin overheat protection
  CABIN_OVERHEAT:       'climate.{car_name}_cabin_overheat_protection',

  // Select entities — heated seats (front + rear)
  HEATED_SEAT_LEFT:         'select.{car_name}_seat_heater_front_left',
  HEATED_SEAT_RIGHT:        'select.{car_name}_seat_heater_front_right',
  HEATED_SEAT_REAR_LEFT:    'select.{car_name}_seat_heater_rear_left',
  HEATED_SEAT_REAR_CENTER:  'select.{car_name}_seat_heater_rear_center',
  HEATED_SEAT_REAR_RIGHT:   'select.{car_name}_seat_heater_rear_right',

  // Climate
  CLIMATE:              'climate.{car_name}_climate',

  // Numbers (controllable)
  CHARGE_LIMIT_NUMBER:  'number.{car_name}_charge_limit',
  CHARGING_AMPS_NUMBER: 'number.{car_name}_charge_current',

  // Buttons / Covers (Fleet uses covers for port, frunk, trunk)
  CHARGE_PORT_OPEN:     'cover.{car_name}_charge_port_door',
  CHARGE_PORT_CLOSE:    'cover.{car_name}_charge_port_door',
  HORN:                 'button.{car_name}_honk_horn',
  FLASH_LIGHTS:         'button.{car_name}_flash_lights',
  REMOTE_START:         'button.{car_name}_keyless_driving',
  OPEN_FRUNK:           'cover.{car_name}_froot',
  OPEN_TRUNK:           'cover.{car_name}_boot',
  FORCE_UPDATE:         'button.{car_name}_wake',

  // Covers
  WINDOWS_COVER:        'cover.{car_name}_vent_windows',
  FRUNK_COVER:          'cover.{car_name}_froot',
  CHARGER_DOOR:         'cover.{car_name}_charge_port_door',

  // Sensors — charging session
  ENERGY_ADDED:         'sensor.{car_name}_charge_energy_added',

  // Time to full charge
  TIME_TO_FULL_CHARGE:  'sensor.{car_name}_time_to_full_charge',

  // Navigation
  DISTANCE_TO_ARRIVAL:  'sensor.{car_name}_distance_to_arrival',
  TIME_TO_ARRIVAL:      'sensor.{car_name}_time_to_arrival',

  // Device tracker
  LOCATION:             'device_tracker.{car_name}_location',
  ROUTE:                'device_tracker.{car_name}_route',
};

// alandtse/tesla custom integration
const CUSTOM = {
  // Sensors
  BATTERY_LEVEL:        'sensor.{car_name}_battery',
  BATTERY_RANGE:        'sensor.{car_name}_battery_range',
  CHARGE_RATE:          'sensor.{car_name}_charge_rate',
  CHARGE_LIMIT:         'sensor.{car_name}_charge_limit',
  CHARGING_STATE:       'sensor.{car_name}_charging_state',
  TEMPERATURE_INSIDE:   'sensor.{car_name}_temperature_inside',
  TEMPERATURE_OUTSIDE:  'sensor.{car_name}_temperature_outside',
  SPEED:                'sensor.{car_name}_speed',
  ODOMETER:             'sensor.{car_name}_odometer',

  // Binary sensors
  CHARGING:             'binary_sensor.{car_name}_charging',
  PLUGGED_IN:           'binary_sensor.{car_name}_plugged_in',
  PARKING_BRAKE:        'binary_sensor.{car_name}_parking_brake',
  FRUNK:                'binary_sensor.{car_name}_frunk',
  TRUNK:                'binary_sensor.{car_name}_trunk',
  DOORS:                'binary_sensor.{car_name}_doors',
  WINDOWS:              'binary_sensor.{car_name}_windows',
  LOCKED:               'binary_sensor.{car_name}_locked',
  ONLINE:               'binary_sensor.{car_name}_online',
  SENTRY_MODE:          'binary_sensor.{car_name}_sentry_mode',

  // Individual door/window sensors (Custom uses combined entities above)
  DOOR_DRIVER_FRONT:      null,
  DOOR_DRIVER_REAR:       null,
  DOOR_PASSENGER_FRONT:   null,
  DOOR_PASSENGER_REAR:    null,
  WINDOW_DRIVER_FRONT:    null,
  WINDOW_DRIVER_REAR:     null,
  WINDOW_PASSENGER_FRONT: null,
  WINDOW_PASSENGER_REAR:  null,

  // Locks
  DOOR_LOCK:            'lock.{car_name}_doors',

  // Switches
  CHARGER_SWITCH:       'switch.{car_name}_charger',
  SENTRY_MODE_SWITCH:   'switch.{car_name}_sentry_mode',
  DEFROST_SWITCH:       'switch.{car_name}_defrost',
  CAMP_MODE:            'switch.{car_name}_camp_mode',
  DOG_MODE:             'switch.{car_name}_dog_mode',

  // Select — cabin overheat protection
  CABIN_OVERHEAT:       'select.{car_name}_cabin_overheat_protection',

  // Select entities — heated seats
  HEATED_SEAT_LEFT:         'select.{car_name}_heated_seat_left',
  HEATED_SEAT_RIGHT:        'select.{car_name}_heated_seat_right',
  HEATED_SEAT_REAR_LEFT:    'select.{car_name}_heated_seat_rear_left',
  HEATED_SEAT_REAR_CENTER:  'select.{car_name}_heated_seat_rear_center',
  HEATED_SEAT_REAR_RIGHT:   'select.{car_name}_heated_seat_rear_right',

  // Climate
  CLIMATE:              'climate.{car_name}_hvac_climate_system',

  // Numbers
  CHARGE_LIMIT_NUMBER:  'number.{car_name}_charge_limit',
  CHARGING_AMPS_NUMBER: 'number.{car_name}_charging_amps',

  // Buttons
  CHARGE_PORT_OPEN:     'button.{car_name}_charge_port_open',
  CHARGE_PORT_CLOSE:    'button.{car_name}_charge_port_close',
  HORN:                 'button.{car_name}_horn',
  FLASH_LIGHTS:         'button.{car_name}_flash_lights',
  REMOTE_START:         'button.{car_name}_remote_start',
  OPEN_FRUNK:           'button.{car_name}_frunk',
  OPEN_TRUNK:           'button.{car_name}_trunk',
  FORCE_UPDATE:         'button.{car_name}_force_data_update',

  // Covers
  WINDOWS_COVER:        'cover.{car_name}_windows',
  FRUNK_COVER:          'cover.{car_name}_frunk',
  CHARGER_DOOR:         'cover.{car_name}_charger_door',

  // Sensors — charging session
  ENERGY_ADDED:         'sensor.{car_name}_energy_added',

  // Time to full charge
  TIME_TO_FULL_CHARGE:  'sensor.{car_name}_time_to_full_charge',

  // Navigation
  DISTANCE_TO_ARRIVAL:  null,
  TIME_TO_ARRIVAL:      null,

  // Device tracker
  LOCATION:             'device_tracker.{car_name}_location_tracker',
  ROUTE:                null,
};

const INTEGRATIONS = { fleet: FLEET, custom: CUSTOM };

// ── Entity groups for the custom entities editor ────────────────────────────
// Each group has a label and an array of { key, label, domain } entries.
// `key` matches a FLEET/CUSTOM map key. `domain` filters the HA entity picker.
// Only canonical keys are listed — aliases resolve automatically.

export const ENTITY_GROUPS = [
  { label: 'Sensors', keys: [
    { key: 'BATTERY_LEVEL',      label: 'Battery Level',      domain: 'sensor' },
    { key: 'BATTERY_RANGE',      label: 'Battery Range',      domain: 'sensor' },
    { key: 'CHARGING_STATE',     label: 'Charging State',     domain: 'sensor' },
    { key: 'CHARGE_RATE',        label: 'Charge Rate',        domain: 'sensor' },
    { key: 'TEMPERATURE_INSIDE', label: 'Inside Temperature', domain: 'sensor' },
    { key: 'TEMPERATURE_OUTSIDE',label: 'Outside Temperature',domain: 'sensor' },
    { key: 'ODOMETER',           label: 'Odometer',           domain: 'sensor' },
    { key: 'ENERGY_ADDED',       label: 'Energy Added',       domain: 'sensor' },
  ]},
  { label: 'Status', keys: [
    { key: 'ONLINE',    label: 'Online Status', domain: 'binary_sensor' },
    { key: 'PLUGGED_IN',label: 'Plugged In',    domain: 'binary_sensor' },
    { key: 'CHARGING',  label: 'Charge Switch', domain: 'switch' },
    { key: 'SENTRY_MODE', label: 'Sentry Mode', domain: 'switch' },
  ]},
  { label: 'Doors', keys: [
    { key: 'DOOR_DRIVER_FRONT',    label: 'Driver Front',    domain: 'binary_sensor' },
    { key: 'DOOR_DRIVER_REAR',     label: 'Driver Rear',     domain: 'binary_sensor' },
    { key: 'DOOR_PASSENGER_FRONT', label: 'Passenger Front', domain: 'binary_sensor' },
    { key: 'DOOR_PASSENGER_REAR',  label: 'Passenger Rear',  domain: 'binary_sensor' },
  ]},
  { label: 'Windows', keys: [
    { key: 'WINDOW_DRIVER_FRONT',    label: 'Driver Front',    domain: 'binary_sensor' },
    { key: 'WINDOW_DRIVER_REAR',     label: 'Driver Rear',     domain: 'binary_sensor' },
    { key: 'WINDOW_PASSENGER_FRONT', label: 'Passenger Front', domain: 'binary_sensor' },
    { key: 'WINDOW_PASSENGER_REAR',  label: 'Passenger Rear',  domain: 'binary_sensor' },
  ]},
  { label: 'Lock', keys: [
    { key: 'DOOR_LOCK', label: 'Door Lock', domain: 'lock' },
  ]},
  { label: 'Climate', keys: [
    { key: 'CLIMATE',             label: 'Climate',                domain: 'climate' },
    { key: 'DEFROST_SWITCH',      label: 'Defrost',                domain: 'switch' },
    { key: 'HEATED_SEAT_LEFT',    label: 'Heated Seat Front Left', domain: 'select' },
    { key: 'HEATED_SEAT_RIGHT',   label: 'Heated Seat Front Right',domain: 'select' },
    { key: 'HEATED_SEAT_REAR_LEFT',   label: 'Heated Seat Rear Left',   domain: 'select' },
    { key: 'HEATED_SEAT_REAR_CENTER', label: 'Heated Seat Rear Center', domain: 'select' },
    { key: 'HEATED_SEAT_REAR_RIGHT',  label: 'Heated Seat Rear Right',  domain: 'select' },
    { key: 'CABIN_OVERHEAT',      label: 'Cabin Overheat Protection', domain: 'climate' },
    { key: 'WINDOWS_COVER',       label: 'Windows (vent/close)',  domain: 'cover' },
  ]},
  { label: 'Charging', keys: [
    { key: 'CHARGE_LIMIT_NUMBER',  label: 'Charge Limit',    domain: 'number' },
    { key: 'CHARGING_AMPS_NUMBER', label: 'Charging Amps',   domain: 'number' },
    { key: 'CHARGER_DOOR',         label: 'Charge Port Door',domain: 'cover' },
  ]},
  { label: 'Covers & Buttons', keys: [
    { key: 'OPEN_FRUNK',    label: 'Frunk',        domain: 'cover' },
    { key: 'OPEN_TRUNK',    label: 'Trunk',        domain: 'cover' },
    { key: 'HORN',           label: 'Horn',         domain: 'button' },
    { key: 'FLASH_LIGHTS',  label: 'Flash Lights', domain: 'button' },
    { key: 'REMOTE_START',  label: 'Remote Start', domain: 'button' },
    { key: 'FORCE_UPDATE',  label: 'Wake / Refresh', domain: 'button' },
  ]},
  { label: 'Navigation & Location', keys: [
    { key: 'SPEED',               label: 'Speed',              domain: 'sensor' },
    { key: 'DISTANCE_TO_ARRIVAL', label: 'Distance to Arrival',domain: 'sensor' },
    { key: 'TIME_TO_ARRIVAL',     label: 'Time to Arrival',    domain: 'sensor' },
    { key: 'LOCATION',            label: 'Location Tracker',   domain: 'device_tracker' },
    { key: 'ROUTE',               label: 'Route Tracker',      domain: 'device_tracker' },
  ]},
];

// Alias map — when the user overrides one canonical key, the alias resolves too.
// Key = alias used in card code, Value = canonical key exposed in editor.
const ENTITY_ALIASES = {
  CHARGER_SWITCH:     'CHARGING',
  SENTRY_MODE_SWITCH: 'SENTRY_MODE',
  FRUNK_COVER:        'OPEN_FRUNK',
  CHARGE_LIMIT:       'CHARGE_LIMIT_NUMBER',
  CHARGE_PORT_OPEN:   'CHARGER_DOOR',
  CHARGE_PORT_CLOSE:  'CHARGER_DOOR',
};

// Reverse map: template string → key name (built from FLEET, preferring canonical keys)
const CANONICAL_KEYS = new Set(ENTITY_GROUPS.flatMap(g => g.keys.map(k => k.key)));
const FLEET_REVERSE = {};
// First pass: canonical keys take priority
for (const [k, v] of Object.entries(FLEET)) {
  if (v && CANONICAL_KEYS.has(k)) FLEET_REVERSE[v] = k;
}
// Second pass: fill in any missing (non-canonical) templates
for (const [k, v] of Object.entries(FLEET)) {
  if (v && !FLEET_REVERSE[v]) FLEET_REVERSE[v] = k;
}

/**
 * Get the entity map for a given integration type.
 * @param {string} integration — 'fleet' (default), 'custom', or 'entities'
 * @returns {object}
 */
export function getEntities(integration = 'fleet') {
  // 'entities' mode uses FLEET as the base template map;
  // overrides are applied at resolve time in resolveEntityId().
  if (integration === 'entities') return FLEET;
  return INTEGRATIONS[integration] || FLEET;
}

/**
 * Resolve an entity ID template for a given car_name, with optional overrides.
 * @param {string} template  — e.g. 'sensor.{car_name}_battery_level'
 * @param {string} carName   — e.g. 'terrance'
 * @param {object} [overrides] — e.g. { BATTERY_LEVEL: 'sensor.my_battery' }
 * @returns {string|null}
 */
export function resolveEntityId(template, carName, overrides) {
  if (!template) return null;
  if (overrides) {
    // Look up the canonical key for this template
    let key = FLEET_REVERSE[template];
    // Check alias if the key itself isn't overridden
    if (key && !overrides[key] && ENTITY_ALIASES[key]) {
      key = ENTITY_ALIASES[key];
    }
    if (key && overrides[key]) return overrides[key];
  }
  return template.replace('{car_name}', (carName ?? '').toLowerCase());
}

/** Backward-compatible — used when no overrides are needed */
export function entityId(template, carName) {
  return template ? template.replace('{car_name}', (carName ?? '').toLowerCase()) : null;
}
