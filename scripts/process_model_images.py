#!/usr/bin/env python3
"""
Process legacy Tesla car images (Model Y + Model S) into the modern card structure.

Model Y: silver = neutral, white = coloured source for mask generation.
Model S: white only — generate neutral by desaturating body, then diff for masks.

Usage:
    python scripts/process_model_images.py
    python scripts/process_model_images.py --preview
    python scripts/process_model_images.py --model Y
    python scripts/process_model_images.py --model S
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

# ── Paths ────────────────────────────────────────────────────────────────────

REPO_ROOT = Path(__file__).resolve().parent.parent
IMAGES = REPO_ROOT / "images" / "models"

# Legacy source → modern output file mapping
FILE_MAP = {
    "baseWideNoBat":              "base",
    "baseChargeportOpened":       "chargeport-open",
    "baseFrunkOpened":            "frunk-open",
    "controlsBackground":        "controls-bg",
    "climateBackground_Fire8HD":  "climate-bg",
}

# ── Shared helpers (same as desaturate_body.py / generate_body_masks.py) ─────

def rgb_to_hsv(arr):
    rgb = arr.astype(np.float64) / 255.0
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    cmax = np.maximum(np.maximum(r, g), b)
    cmin = np.minimum(np.minimum(r, g), b)
    delta = cmax - cmin

    h = np.zeros_like(delta)
    nz = delta > 0
    mr = (cmax == r) & nz
    mg = (cmax == g) & nz
    mb = (cmax == b) & nz
    h[mr] = 60.0 * (((g[mr] - b[mr]) / delta[mr]) % 6.0)
    h[mg] = 60.0 * (((b[mg] - r[mg]) / delta[mg]) + 2.0)
    h[mb] = 60.0 * (((r[mb] - g[mb]) / delta[mb]) + 4.0)

    s = np.where(cmax > 0, (delta / cmax) * 100.0, 0.0)
    v = cmax * 100.0
    return h, s, v


def feather_mask(mask, radius):
    if radius <= 0:
        return mask.astype(np.float64)
    pil = Image.fromarray((mask * 255).astype(np.uint8), mode="L")
    for _ in range(radius):
        pil = pil.filter(ImageFilter.MaxFilter(3))
    pil = pil.filter(ImageFilter.GaussianBlur(radius=radius))
    return np.array(pil).astype(np.float64) / 255.0


def desaturate_masked(arr, mask, feather_r=2):
    r = arr[:, :, 0].astype(np.float64)
    g = arr[:, :, 1].astype(np.float64)
    b = arr[:, :, 2].astype(np.float64)
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    alpha = feather_mask(mask, feather_r)
    out = arr.copy().astype(np.float64)
    out[:, :, 0] = r * (1.0 - alpha) + lum * alpha
    out[:, :, 1] = g * (1.0 - alpha) + lum * alpha
    out[:, :, 2] = b * (1.0 - alpha) + lum * alpha
    return np.clip(np.round(out), 0, 255).astype(np.uint8)


def diff_mask(coloured, neutral, threshold=5.0):
    diff = np.sqrt(np.sum((coloured.astype(float) - neutral.astype(float)) ** 2, axis=2))
    return diff > threshold


def generate_mask_rgba(body_mask, dilate=1, blur=1.5):
    alpha = feather_mask(body_mask, max(dilate, 0))
    if blur > 0:
        pil = Image.fromarray(np.clip(np.round(alpha * 255), 0, 255).astype(np.uint8), mode="L")
        pil = pil.filter(ImageFilter.GaussianBlur(radius=blur))
        alpha = np.array(pil).astype(np.float64) / 255.0
    rows, cols = body_mask.shape[:2]
    rgba = np.full((rows, cols, 4), 255, dtype=np.uint8)
    rgba[:, :, 3] = np.clip(np.round(alpha * 255), 0, 255).astype(np.uint8)
    return rgba


# ── Convert + rename a set of legacy JPGs to modern PNGs ─────────────────────

def convert_images(src_dir, dst_dir, label=""):
    dst_dir.mkdir(parents=True, exist_ok=True)
    results = {}
    for old_stem, new_stem in FILE_MAP.items():
        src = src_dir / f"{old_stem}.jpg"
        if not src.exists():
            print(f"  SKIP {old_stem}.jpg — not found in {src_dir}")
            continue
        img = Image.open(src).convert("RGB")
        dst = dst_dir / f"{new_stem}.png"
        img.save(dst, optimize=True)
        results[new_stem] = np.array(img)
        print(f"  {old_stem}.jpg → {label}{new_stem}.png ({img.size[0]}x{img.size[1]})")
    return results


# ── Process Model Y ──────────────────────────────────────────────────────────

def process_model_y(preview=False):
    print("\n═══ Model Y (Y.1) ═══")

    silver_src = IMAGES / "Y" / "silver"
    white_src  = IMAGES / "Y" / "white"
    neutral_dst = IMAGES / "Y" / "Y.1" / "neutral"
    white_dst   = IMAGES / "Y" / "Y.1" / "white"

    if not silver_src.is_dir():
        print(f"ERROR: Silver source not found: {silver_src}")
        return
    if not white_src.is_dir():
        print(f"ERROR: White source not found: {white_src}")
        return

    # 1. Convert silver → neutral
    print("\nConverting silver → neutral:")
    neutral_arrays = convert_images(silver_src, neutral_dst, "neutral/")

    # 2. Convert white → white
    print("\nConverting white → white:")
    white_arrays = convert_images(white_src, white_dst, "white/")

    # 3. Generate masks by diffing white vs neutral
    print("\nGenerating body masks (white vs neutral):")
    for stem in FILE_MAP.values():
        if stem not in neutral_arrays or stem not in white_arrays:
            continue
        col_arr = white_arrays[stem]
        neu_arr = neutral_arrays[stem]
        if col_arr.shape != neu_arr.shape:
            print(f"  SKIP {stem} — size mismatch")
            continue
        body = diff_mask(col_arr, neu_arr, threshold=5.0)
        rgba = generate_mask_rgba(body)
        mask_path = neutral_dst / f"{stem}-mask.png"
        Image.fromarray(rgba, "RGBA").save(mask_path, optimize=True)
        pct = body.sum() / body.size * 100
        print(f"  {stem}-mask.png  ({int(body.sum()):,} body px, {pct:.1f}%)")

        if preview:
            preview_dir = neutral_dst / "_previews"
            preview_dir.mkdir(exist_ok=True)
            alpha = rgba[:, :, 3].astype(np.float64) / 255.0
            vis = neu_arr.copy()
            vis[:, :, 0] = np.clip(vis[:, :, 0] * (1 - alpha) + 200 * alpha, 0, 255).astype(np.uint8)
            vis[:, :, 1] = np.clip(vis[:, :, 1] * (1 - alpha) + 30 * alpha, 0, 255).astype(np.uint8)
            vis[:, :, 2] = np.clip(vis[:, :, 2] * (1 - alpha) + 30 * alpha, 0, 255).astype(np.uint8)
            Image.fromarray(vis).save(preview_dir / f"{stem}-mask_preview.png")


# ── Process Model S ──────────────────────────────────────────────────────────

def process_model_s(preview=False):
    print("\n═══ Model S (S.1) ═══")

    white_src   = IMAGES / "S" / "white"
    neutral_dst = IMAGES / "S" / "S.1" / "neutral"
    white_dst   = IMAGES / "S" / "S.1" / "white"

    if not white_src.is_dir():
        print(f"ERROR: White source not found: {white_src}")
        return

    # 1. Convert white → white
    print("\nConverting white → white:")
    white_arrays = convert_images(white_src, white_dst, "white/")

    # 2. Detect body via HSV, darken+desaturate → neutral, then use body mask directly
    # White body is nearly achromatic so simple desaturation won't create a visible
    # diff. Instead we detect body pixels via HSV thresholds and:
    #   a) Create neutral by darkening the body (multiply by 0.65) to make it grey
    #   b) Use the HSV body mask directly as the alpha mask (skip diffing)
    print("\nDetecting body + generating neutral:")
    neutral_dst.mkdir(parents=True, exist_ok=True)

    for stem, white_arr in white_arrays.items():
        h, s, v = rgb_to_hsv(white_arr)
        # White body: low saturation, high brightness
        body_mask = (s < 30) & (v > 55)

        # Create neutral: darken body pixels to silver-grey
        alpha = feather_mask(body_mask, 2)
        darken = 0.65  # darken factor
        neutral = white_arr.copy().astype(np.float64)
        for ch in range(3):
            orig = neutral[:, :, ch]
            neutral[:, :, ch] = orig * (1.0 - alpha) + (orig * darken) * alpha
        neutral = np.clip(np.round(neutral), 0, 255).astype(np.uint8)

        out_path = neutral_dst / f"{stem}.png"
        Image.fromarray(neutral).save(out_path, optimize=True)

        # Body mask: use the HSV-detected mask directly (not diffing)
        rgba = generate_mask_rgba(body_mask, dilate=1, blur=1.5)
        mask_path = neutral_dst / f"{stem}-mask.png"
        Image.fromarray(rgba, "RGBA").save(mask_path, optimize=True)

        pct = body_mask.sum() / body_mask.size * 100
        print(f"  {stem}: {int(body_mask.sum()):,} body px ({pct:.1f}%) → neutral + mask")

        if preview:
            preview_dir = neutral_dst / "_previews"
            preview_dir.mkdir(exist_ok=True)
            mask_alpha = rgba[:, :, 3].astype(np.float64) / 255.0
            vis = neutral.copy()
            vis[:, :, 0] = np.clip(vis[:, :, 0] * (1 - mask_alpha) + 200 * mask_alpha, 0, 255).astype(np.uint8)
            vis[:, :, 1] = np.clip(vis[:, :, 1] * (1 - mask_alpha) + 30 * mask_alpha, 0, 255).astype(np.uint8)
            vis[:, :, 2] = np.clip(vis[:, :, 2] * (1 - mask_alpha) + 30 * mask_alpha, 0, 255).astype(np.uint8)
            Image.fromarray(vis).save(preview_dir / f"{stem}-mask_preview.png")


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Process legacy Tesla car images into modern card structure.",
    )
    parser.add_argument("--model", choices=["Y", "S"], default=None,
                        help="Process only this model (default: both)")
    parser.add_argument("--preview", action="store_true",
                        help="Generate mask preview images")
    args = parser.parse_args()

    if args.model is None or args.model == "Y":
        process_model_y(preview=args.preview)
    if args.model is None or args.model == "S":
        process_model_s(preview=args.preview)

    print("\nDone!")


if __name__ == "__main__":
    main()
