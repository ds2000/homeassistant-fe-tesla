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
  OPEN_FRUNK:           'cover.{car_name}_frunk',
  OPEN_TRUNK:           'cover.{car_name}_trunk',
  FORCE_UPDATE:         'button.{car_name}_wake',

  // Covers
  WINDOWS_COVER:        'cover.{car_name}_vent_windows',
  FRUNK_COVER:          'cover.{car_name}_frunk',
  CHARGER_DOOR:         'cover.{car_name}_charge_port_door',

  // Sensors — charging session
  ENERGY_ADDED:         'sensor.{car_name}_charge_energy_added',

  // Device tracker
  LOCATION:             'device_tracker.{car_name}_location',
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

  // Device tracker
  LOCATION:             'device_tracker.{car_name}_location_tracker',
};

const INTEGRATIONS = { fleet: FLEET, custom: CUSTOM };

/**
 * Get the entity map for a given integration type.
 * @param {string} integration — 'fleet' (default) or 'custom'
 * @returns {object}
 */
export function getEntities(integration = 'fleet') {
  return INTEGRATIONS[integration] || FLEET;
}

/**
 * Resolve an entity ID template for a given car_name.
 * @param {string} template  — e.g. ENTITIES.BATTERY_LEVEL
 * @param {string} carName   — e.g. 'terrance'
 * @returns {string}
 */
export function entityId(template, carName) {
  return template.replace('{car_name}', carName);
}
