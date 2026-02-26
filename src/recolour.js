// Factory Tesla colours for the colour picker.
//
// Rendering strategy depends on whether the model has a coloured source:
//
// WITH source (hue-rotate mode):
//   `filter` is applied to the source image via CSS filter.
//   Red source hue ≈ 0°, saturation ≈ 85%.
//   White source hue ≈ 0°, saturation ≈ 10%.
//   Chromatic: hue-rotate + saturate shifts the source to the target colour.
//   Achromatic: saturate(0) + brightness/contrast for white/black.
//
// WITHOUT source (flat fallback):
//   `blend` + `bg` control CSS mix-blend-mode overlay on neutral base.

// Reference saturation of the red source images (used to scale saturate filter)
const RED_SOURCE_SAT = 85;

export const FACTORY_COLOURS = [
  {
    name: 'Pearl White',
    h: 0, s: 0,
    swatch: '#f2f2f2',
    blend: 'soft-light', bg: '#ffffff',
    filter: 'saturate(0) brightness(1.5) contrast(0.9)',
  },
  {
    name: 'Midnight Silver',
    h: 0, s: 0,
    swatch: '#71757a',
    // No overlay — neutral image is already silver
  },
  {
    name: 'Solid Black',
    h: 0, s: 0,
    swatch: '#141414',
    blend: 'soft-light', bg: '#000000',
    filter: 'saturate(0) brightness(0.25) contrast(1.2)',
  },
  {
    name: 'Ultra Red',
    h: 355, s: 85,
    swatch: '#c41e28',
    filter: `hue-rotate(355deg) saturate(${85 / RED_SOURCE_SAT})`,
  },
  {
    name: 'Quicksilver',
    h: 40, s: 8,
    swatch: '#9e9a91',
    filter: `hue-rotate(40deg) saturate(${8 / RED_SOURCE_SAT})`,
  },
  {
    name: 'Deep Blue Metallic',
    h: 220, s: 75,
    swatch: '#223873',
    filter: `hue-rotate(220deg) saturate(${75 / RED_SOURCE_SAT})`,
  },
];
