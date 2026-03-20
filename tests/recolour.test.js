import { describe, it, expect } from 'vitest';
import { FACTORY_COLOURS } from '../src/recolour.js';

describe('FACTORY_COLOURS', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(FACTORY_COLOURS)).toBe(true);
    expect(FACTORY_COLOURS.length).toBeGreaterThan(0);
  });

  it('each colour has name, dir, and swatch', () => {
    for (const colour of FACTORY_COLOURS) {
      expect(colour).toHaveProperty('name');
      expect(colour).toHaveProperty('dir');
      expect(colour).toHaveProperty('swatch');
      expect(typeof colour.name).toBe('string');
      expect(typeof colour.dir).toBe('string');
      expect(typeof colour.swatch).toBe('string');
    }
  });

  it('swatch values look like hex colours', () => {
    for (const colour of FACTORY_COLOURS) {
      expect(colour.swatch).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  it('has no duplicate dir values', () => {
    const dirs = FACTORY_COLOURS.map(c => c.dir);
    expect(new Set(dirs).size).toBe(dirs.length);
  });

  it('contains red_multi_coat', () => {
    const red = FACTORY_COLOURS.find(c => c.dir === 'red_multi_coat');
    expect(red).toBeDefined();
    expect(red.name).toBe('Red Multi-Coat');
  });
});
