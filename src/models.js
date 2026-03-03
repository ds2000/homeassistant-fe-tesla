// Tesla model definitions — derived from models.json (single source of truth).
// `colours`: array of image directory names available for this variant (picker shows these).
// `factoryColours`: full catalogue from models.json (used by uploader and colour picker).

import modelsData from '../models.json';

export const TESLA_MODELS = modelsData.models.map(m => ({
  id: m.id,
  name: m.name,
  variants: m.variants.map(v => ({
    id: v.id,
    label: v.label,
    colours: ['neutral', ...v.colours.filter(c => c.hasImages).map(c => c.id)],
    factoryColours: v.colours,
  })),
}));

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
