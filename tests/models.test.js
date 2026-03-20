import { describe, it, expect } from 'vitest';
import {
  TESLA_MODELS,
  getVariantColours,
  variantHasImages,
  getVariants,
} from '../src/models.js';

// ── TESLA_MODELS structure ──────────────────────────────────────────────────

describe('TESLA_MODELS', () => {
  it('is an array of models', () => {
    expect(Array.isArray(TESLA_MODELS)).toBe(true);
    expect(TESLA_MODELS.length).toBeGreaterThan(0);
  });

  it('each model has id, name, and variants', () => {
    for (const model of TESLA_MODELS) {
      expect(model).toHaveProperty('id');
      expect(model).toHaveProperty('name');
      expect(model).toHaveProperty('variants');
      expect(Array.isArray(model.variants)).toBe(true);
    }
  });

  it('each variant has id, label, and colours array', () => {
    for (const model of TESLA_MODELS) {
      for (const variant of model.variants) {
        expect(variant).toHaveProperty('id');
        expect(variant).toHaveProperty('label');
        expect(variant).toHaveProperty('colours');
        expect(Array.isArray(variant.colours)).toBe(true);
      }
    }
  });

  it('every variant colours array includes "neutral"', () => {
    for (const model of TESLA_MODELS) {
      for (const variant of model.variants) {
        expect(variant.colours).toContain('neutral');
      }
    }
  });

  it('contains Model 3', () => {
    const m3 = TESLA_MODELS.find(m => m.id === '3');
    expect(m3).toBeDefined();
    expect(m3.name).toBe('Model 3');
  });

  it('Model 3 has at least one variant', () => {
    const m3 = TESLA_MODELS.find(m => m.id === '3');
    expect(m3.variants.length).toBeGreaterThan(0);
  });
});

// ── getVariantColours() ─────────────────────────────────────────────────────

describe('getVariantColours', () => {
  it('returns colours for a known model+variant', () => {
    const colours = getVariantColours('3', '3.1');
    expect(Array.isArray(colours)).toBe(true);
    expect(colours).toContain('neutral');
  });

  it('includes non-neutral colours with images for Model 3 3.1', () => {
    const colours = getVariantColours('3', '3.1');
    expect(colours.length).toBeGreaterThan(1);
    expect(colours).toContain('red_multi_coat');
  });

  it('returns ["neutral"] for unknown model', () => {
    expect(getVariantColours('UNKNOWN', '1.0')).toEqual(['neutral']);
  });

  it('returns ["neutral"] for unknown variant of known model', () => {
    expect(getVariantColours('3', 'UNKNOWN')).toEqual(['neutral']);
  });
});

// ── variantHasImages() ──────────────────────────────────────────────────────

describe('variantHasImages', () => {
  it('returns true for a known variant', () => {
    expect(variantHasImages('3', '3.1')).toBe(true);
  });

  it('returns false for unknown model', () => {
    expect(variantHasImages('UNKNOWN', '1.0')).toBe(false);
  });

  it('returns false for unknown variant of known model', () => {
    expect(variantHasImages('3', 'UNKNOWN')).toBe(false);
  });
});

// ── getVariants() ───────────────────────────────────────────────────────────

describe('getVariants', () => {
  it('returns variants for a known model', () => {
    const variants = getVariants('3');
    expect(Array.isArray(variants)).toBe(true);
    expect(variants.length).toBeGreaterThan(0);
    expect(variants[0]).toHaveProperty('id');
    expect(variants[0]).toHaveProperty('label');
  });

  it('returns empty array for unknown model', () => {
    expect(getVariants('UNKNOWN')).toEqual([]);
  });
});
