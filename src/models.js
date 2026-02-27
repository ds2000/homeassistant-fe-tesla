// Tesla model definitions — used by editor dropdowns, model picker, and colour system.
// `colours`: array of image directory names available for this variant.

export const TESLA_MODELS = [
  { id: '3', name: 'Model 3', variants: [
    { id: '3.1', label: '2017–2023',      colours: ['neutral', 'red', 'blue'] },
    { id: '3.2', label: '2024+ Highland',  colours: ['neutral'] },
  ]},
  { id: 'Y', name: 'Model Y', variants: [
    { id: 'Y.1', label: '2020–2024',       colours: ['neutral', 'white'] },
    { id: 'Y.2', label: '2025+ Juniper',   colours: ['neutral'] },
  ]},
  { id: 'S', name: 'Model S', variants: [
    { id: 'S.1', label: '2012–2021',       colours: ['neutral', 'white'] },
    { id: 'S.2', label: '2021+ Refresh',   colours: ['neutral'] },
  ]},
  { id: 'X', name: 'Model X', variants: [
    { id: 'X.1', label: '2015–2021',       colours: ['neutral'] },
    { id: 'X.2', label: '2021+ Refresh',   colours: ['neutral'] },
  ]},
  { id: 'CT', name: 'Cybertruck', variants: [
    { id: 'CT.1', label: '2024+',          colours: ['neutral'] },
  ]},
];

/**
 * Get the list of available colour directories for a model + variant.
 */
export function getVariantColours(modelId, variantId) {
  const model = TESLA_MODELS.find(m => m.id === modelId);
  if (!model) return ['neutral'];
  const variant = model.variants.find(v => v.id === variantId);
  return variant?.colours ?? ['neutral'];
}

/**
 * Check if a variant has images (more than just neutral).
 */
export function variantHasImages(modelId, variantId) {
  const model = TESLA_MODELS.find(m => m.id === modelId);
  if (!model) return false;
  return model.variants.some(v => v.id === variantId);
}

/**
 * Get variants for a given model ID.
 */
export function getVariants(modelId) {
  const model = TESLA_MODELS.find(m => m.id === modelId);
  return model?.variants ?? [];
}
