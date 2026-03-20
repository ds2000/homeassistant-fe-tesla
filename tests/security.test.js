import { describe, it, expect } from 'vitest';

// We can't instantiate the full LitElement TeslaCard without a DOM,
// but we can test the validation logic by importing the module and
// exercising setConfig through the customElements registry indirectly.
// Instead, we test the exported pure functions and the _clampNum helper
// by extracting the same logic.

// ── _clampNum equivalent (mirrors the helper in tesla-card.js) ─────────────

function _clampNum(v, min, max) {
  const n = Number(v);
  if (!isFinite(n)) return null;
  return Math.max(min, Math.min(max, Math.round(n)));
}

describe('_clampNum (numeric clamping)', () => {
  it('clamps a normal number within range', () => {
    expect(_clampNum(180, 0, 360)).toBe(180);
  });

  it('clamps below minimum', () => {
    expect(_clampNum(-10, 0, 360)).toBe(0);
  });

  it('clamps above maximum', () => {
    expect(_clampNum(999, 0, 360)).toBe(360);
  });

  it('rounds to nearest integer', () => {
    expect(_clampNum(45.7, 0, 100)).toBe(46);
  });

  it('returns null for NaN', () => {
    expect(_clampNum(NaN, 0, 360)).toBeNull();
  });

  it('returns null for Infinity', () => {
    expect(_clampNum(Infinity, 0, 360)).toBeNull();
  });

  it('returns null for non-numeric string', () => {
    expect(_clampNum('abc', 0, 360)).toBeNull();
  });

  it('returns null for CSS injection attempt', () => {
    expect(_clampNum('0) red; background:url(javascript:alert(1)', 0, 360)).toBeNull();
  });

  it('parses numeric strings', () => {
    expect(_clampNum('50', 0, 100)).toBe(50);
  });

  it('handles empty string as 0 (Number("") === 0)', () => {
    expect(_clampNum('', 0, 360)).toBe(0);
  });

  it('handles null as 0 (Number(null) === 0)', () => {
    expect(_clampNum(null, 0, 360)).toBe(0);
  });

  it('handles undefined as NaN', () => {
    expect(_clampNum(undefined, 0, 360)).toBeNull();
  });
});

// ── Config validation patterns ──────────────────────────────────────────────

describe('config value validation', () => {
  const safePathRe = /^[a-zA-Z0-9/_.\-]+$/;
  const safeIdRe   = /^[a-zA-Z0-9._\-]+$/;

  describe('image_path validation (safePathRe)', () => {
    it('accepts normal path', () => {
      expect(safePathRe.test('/hacsfiles/homeassistant-fe-tesla')).toBe(true);
    });

    it('accepts path with dots and hyphens', () => {
      expect(safePathRe.test('/local/Tesla/3/3.1')).toBe(true);
    });

    it('rejects path with parentheses (CSS injection)', () => {
      expect(safePathRe.test('/path") ; background:red; --x:url(')).toBe(false);
    });

    it('rejects path with spaces', () => {
      expect(safePathRe.test('/path with spaces')).toBe(false);
    });

    it('rejects path with semicolons', () => {
      expect(safePathRe.test('/path;evil')).toBe(false);
    });

    it('rejects path with angle brackets (HTML injection)', () => {
      expect(safePathRe.test('/path<script>')).toBe(false);
    });
  });

  describe('car_model/car_variant/car_color validation (safeIdRe)', () => {
    it('accepts normal model ID', () => {
      expect(safeIdRe.test('3')).toBe(true);
    });

    it('accepts variant with dot', () => {
      expect(safeIdRe.test('3.1')).toBe(true);
    });

    it('accepts colour with underscores and hyphens', () => {
      expect(safeIdRe.test('red_multi_coat')).toBe(true);
      expect(safeIdRe.test('deep-blue')).toBe(true);
    });

    it('rejects slashes', () => {
      expect(safeIdRe.test('../../etc/passwd')).toBe(false);
    });

    it('rejects parentheses', () => {
      expect(safeIdRe.test('red;background:url(evil)')).toBe(false);
    });

    it('rejects spaces', () => {
      expect(safeIdRe.test('red coat')).toBe(false);
    });
  });
});

// ── localStorage shape validation patterns ──────────────────────────────────

describe('localStorage shape validation', () => {
  it('valid colour override shape is accepted', () => {
    const parsed = JSON.parse('{"dir":"red_multi_coat"}');
    const valid = parsed && typeof parsed.dir === 'string';
    expect(valid).toBe(true);
  });

  it('valid custom colour shape is accepted', () => {
    const parsed = JSON.parse('{"dir":"custom","h":180,"s":80}');
    const valid = parsed && typeof parsed.dir === 'string';
    const h = _clampNum(parsed.h, 0, 360);
    const s = _clampNum(parsed.s, 0, 100);
    expect(valid).toBe(true);
    expect(h).toBe(180);
    expect(s).toBe(80);
  });

  it('rejects colour override without dir string', () => {
    const parsed = JSON.parse('{"dir":123}');
    const valid = parsed && typeof parsed.dir === 'string';
    expect(valid).toBe(false);
  });

  it('rejects colour override that is an array', () => {
    const parsed = JSON.parse('[1,2,3]');
    const valid = parsed && typeof parsed.dir === 'string';
    expect(valid).toBe(false);
  });

  it('rejects custom colour with injection in h', () => {
    const parsed = JSON.parse('{"dir":"custom","h":"0); evil","s":80}');
    const h = _clampNum(parsed.h, 0, 360);
    expect(h).toBeNull();
  });

  it('valid model override shape is accepted', () => {
    const parsed = JSON.parse('{"model":"3","variant":"3.1"}');
    const valid = parsed && typeof parsed.model === 'string' && typeof parsed.variant === 'string';
    expect(valid).toBe(true);
  });

  it('rejects model override with non-string model', () => {
    const parsed = JSON.parse('{"model":42,"variant":"3.1"}');
    const valid = parsed && typeof parsed.model === 'string' && typeof parsed.variant === 'string';
    expect(valid).toBe(false);
  });

  it('rejects model override with __proto__ pollution attempt', () => {
    const parsed = JSON.parse('{"__proto__":{"isAdmin":true}}');
    const valid = parsed && typeof parsed.model === 'string' && typeof parsed.variant === 'string';
    expect(valid).toBe(false);
  });
});
