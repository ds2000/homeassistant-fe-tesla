// Tesla model definitions — used by editor dropdowns and colour overlay system.
// `source`: directory name containing coloured images for hue-rotate overlay.
//           null = no source available, falls back to flat CSS overlay.

export const TESLA_MODELS = [
  { id: '3', name: 'Model 3', variants: [
    { id: '3.1', label: '2017–2023',      source: 'red' },
    { id: '3.2', label: '2024+ Highland',  source: null  },
  ]},
  { id: 'Y', name: 'Model Y', variants: [
    { id: 'Y.1', label: '2020–2024',       source: 'white' },
    { id: 'Y.2', label: '2025+ Juniper',   source: null    },
  ]},
  { id: 'S', name: 'Model S', variants: [
    { id: 'S.1', label: '2012–2021',       source: 'white' },
    { id: 'S.2', label: '2021+ Refresh',   source: null    },
  ]},
  { id: 'X', name: 'Model X', variants: [
    { id: 'X.1', label: '2015–2021',       source: null  },
    { id: 'X.2', label: '2021+ Refresh',   source: null  },
  ]},
  { id: 'CT', name: 'Cybertruck', variants: [
    { id: 'CT.1', label: '2024+',          source: null  },
  ]},
];

/**
 * Look up the source colour directory for a given model + variant.
 * @param {string} modelId  — e.g. '3'
 * @param {string} variantId — e.g. '3.1'
 * @returns {string|null} — e.g. 'red', or null if no coloured source exists
 */
export function getModelSource(modelId, variantId) {
  const model = TESLA_MODELS.find(m => m.id === modelId);
  if (!model) return null;
  const variant = model.variants.find(v => v.id === variantId);
  return variant?.source ?? null;
}

/**
 * Get variants for a given model ID.
 * @param {string} modelId
 * @returns {Array<{id: string, label: string, source: string|null}>}
 */
export function getVariants(modelId) {
  const model = TESLA_MODELS.find(m => m.id === modelId);
  return model?.variants ?? [];
}
