#!/usr/bin/env node
/**
 * test-states.mjs — Verify overlay images exist and the card can render every state.
 *
 * Checks:
 *   1. All required overlay files exist
 *   2. All images are 417×262
 *   3. Overlay files are actually transparent (not fully opaque)
 *   4. Every possible toggle combination resolves to valid overlay files
 *
 * Run:  node dev/test-states.mjs [--overlays-dir path/to/overlays]
 */

import { readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

// ── Config ──────────────────────────────────────────────────────────────────

const EXPECTED_W = 417;
const EXPECTED_H = 262;
const OVERLAY_Z_ORDER = ['chargeport', 'frunk', 'fr', 'ff', 'nr', 'nf'];

const REQUIRED_FILES = [
  'base.png',
  'trunk-open.png',
  'chargeport-overlay.png',
  'frunk-overlay.png',
  'fr-overlay.png',
  'ff-overlay.png',
  'nr-overlay.png',
  'nf-overlay.png',
];

// Optional combined overlays (nice to have, not required)
const OPTIONAL_FILES = [
  'nf-nr-combined-overlay.png',
  'ff-fr-combined-overlay.png',
];

const COMBINED_OVERLAYS = {
  'nf+nr': 'nf-nr-combined-overlay.png',
  'ff+fr': 'ff-fr-combined-overlay.png',
};

// Allow overriding via --overlays-dir flag
const args = process.argv.slice(2);
const dirFlagIdx = args.indexOf('--overlays-dir');
const overlaysDir = dirFlagIdx >= 0 && args[dirFlagIdx + 1]
  ? resolve(args[dirFlagIdx + 1])
  : resolve('images/models/3/3.1/neutral/overlays');

// ── Helpers ─────────────────────────────────────────────────────────────────

function getImageInfo(filepath) {
  try {
    const out = execSync(
      `python3 -c "from PIL import Image; import numpy as np; i=Image.open('${filepath}'); a=np.array(i); opaque=int(np.sum(a[:,:,3]>0)) if i.mode=='RGBA' else a.shape[0]*a.shape[1]; print(i.width, i.height, i.mode, opaque, a.shape[0]*a.shape[1])"`,
      { encoding: 'utf8', timeout: 5000 }
    ).trim();
    const [w, h, mode, opaque, total] = out.split(' ');
    return { w: Number(w), h: Number(h), mode, opaque: Number(opaque), total: Number(total) };
  } catch {
    return null;
  }
}

// ── Run checks ──────────────────────────────────────────────────────────────

console.log(`\nOverlay Image Tests`);
console.log(`━━━━━━━━━━━━━━━━━━━`);
console.log(`Overlays dir: ${overlaysDir}\n`);

if (!existsSync(overlaysDir)) {
  console.error(`\x1b[31mFAIL\x1b[0m: Overlays directory does not exist: ${overlaysDir}`);
  process.exit(1);
}

const actualFiles = new Set(readdirSync(overlaysDir).filter(f => f.endsWith('.png')));
let passed = 0;
let failed = 0;
const failures = [];

// Check 1: Required files exist with correct dimensions
console.log('Required files:');
for (const fname of REQUIRED_FILES) {
  if (!actualFiles.has(fname)) {
    console.log(`  \x1b[31m✕ MISSING:  ${fname}\x1b[0m`);
    failures.push({ file: fname, reason: 'missing' });
    failed++;
    continue;
  }

  const info = getImageInfo(join(overlaysDir, fname));
  if (!info) {
    console.log(`  \x1b[31m✕ UNREADABLE: ${fname}\x1b[0m`);
    failures.push({ file: fname, reason: 'unreadable' });
    failed++;
    continue;
  }

  const sizeOk = info.w === EXPECTED_W && info.h === EXPECTED_H;
  const isOverlay = fname.includes('-overlay');
  const isTransparent = isOverlay ? (info.opaque < info.total) : true;

  if (!sizeOk) {
    console.log(`  \x1b[31m✕ WRONG SIZE: ${fname} (${info.w}×${info.h})\x1b[0m`);
    failures.push({ file: fname, reason: `wrong size ${info.w}×${info.h}` });
    failed++;
  } else if (isOverlay && !isTransparent) {
    console.log(`  \x1b[33m⚠ NOT TRANSPARENT: ${fname} (${info.opaque}/${info.total} opaque)\x1b[0m`);
    failures.push({ file: fname, reason: 'fully opaque overlay' });
    failed++;
  } else {
    const pct = isOverlay ? ` (${((info.opaque / info.total) * 100).toFixed(1)}% opaque)` : '';
    console.log(`  \x1b[32m✓\x1b[0m ${fname} ${info.w}×${info.h} ${info.mode}${pct}`);
    passed++;
  }
}

// Check 2: Optional combined files
console.log('\nOptional combined overlays:');
for (const fname of OPTIONAL_FILES) {
  if (!actualFiles.has(fname)) {
    console.log(`  \x1b[33m- ${fname} (not available)\x1b[0m`);
    continue;
  }
  const info = getImageInfo(join(overlaysDir, fname));
  if (info && info.w === EXPECTED_W && info.h === EXPECTED_H && info.opaque < info.total) {
    console.log(`  \x1b[32m✓\x1b[0m ${fname} ${info.w}×${info.h} (${((info.opaque / info.total) * 100).toFixed(1)}% opaque)`);
    passed++;
  } else if (info) {
    console.log(`  \x1b[33m⚠ ${fname} (${info.w}×${info.h}, ${info.opaque}/${info.total} opaque)\x1b[0m`);
  }
}

// Check 3: Simulate every toggle combination (7 toggles = 128 combos)
// Verify that each combo resolves to files that exist
console.log('\nToggle combination test (128 combos):');
const TOGGLES = ['trunk', 'chargeport', 'frunk', 'fr', 'ff', 'nr', 'nf'];
const totalCombos = 1 << TOGGLES.length;
let comboPassed = 0;
let comboFailed = 0;
const comboFailures = [];

for (let bits = 0; bits < totalCombos; bits++) {
  const active = {};
  for (let i = 0; i < TOGGLES.length; i++) {
    active[TOGGLES[i]] = !!(bits & (1 << i));
  }

  // Determine base image
  const baseFile = active.trunk ? 'trunk-open.png' : 'base.png';

  // Determine overlay files (replicate card logic)
  const overlays = [];
  const useNfNrCombined = active.nf && active.nr && actualFiles.has(COMBINED_OVERLAYS['nf+nr']);
  const useFfFrCombined = active.ff && active.fr && actualFiles.has(COMBINED_OVERLAYS['ff+fr']);

  for (const name of OVERLAY_Z_ORDER) {
    if (!active[name]) continue;

    if ((name === 'nf' || name === 'nr') && useNfNrCombined) {
      if (name === 'nf') overlays.push(COMBINED_OVERLAYS['nf+nr']);
      continue;
    }
    if ((name === 'ff' || name === 'fr') && useFfFrCombined) {
      if (name === 'ff') overlays.push(COMBINED_OVERLAYS['ff+fr']);
      continue;
    }

    overlays.push(`${name}-overlay.png`);
  }

  // Check all required files exist
  const missing = [];
  if (!actualFiles.has(baseFile)) missing.push(baseFile);
  for (const f of overlays) {
    if (!actualFiles.has(f)) missing.push(f);
  }

  if (missing.length) {
    const label = TOGGLES.filter((_, i) => bits & (1 << i)).join('+') || 'base';
    comboFailures.push({ label, missing });
    comboFailed++;
  } else {
    comboPassed++;
  }
}

if (comboFailed === 0) {
  console.log(`  \x1b[32m✓ All ${totalCombos} toggle combinations resolve to existing files\x1b[0m`);
} else {
  for (const f of comboFailures) {
    console.log(`  \x1b[31m✕ ${f.label}: missing ${f.missing.join(', ')}\x1b[0m`);
  }
}

// ── Summary ─────────────────────────────────────────────────────────────────

console.log(`\n${'─'.repeat(40)}`);
console.log(`Files:  \x1b[32m${passed} passed\x1b[0m` + (failed ? `  \x1b[31m${failed} failed\x1b[0m` : ''));
console.log(`Combos: \x1b[32m${comboPassed} passed\x1b[0m` + (comboFailed ? `  \x1b[31m${comboFailed} failed\x1b[0m` : ''));
console.log(`Total overlay files: ${actualFiles.size} (${REQUIRED_FILES.length} required + ${OPTIONAL_FILES.length} optional)\n`);

const exitCode = (failed > 0 || comboFailed > 0) ? 1 : 0;
if (exitCode === 0) {
  console.log('\x1b[32m✓ All tests passed\x1b[0m');
} else {
  console.log('\x1b[31m✕ Some tests failed\x1b[0m');
}
process.exit(exitCode);
