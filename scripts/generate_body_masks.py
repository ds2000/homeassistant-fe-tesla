#!/usr/bin/env python3
"""
Generate body-only alpha masks by diffing coloured vs neutral Tesla car images.

Compares each coloured source image with its neutral counterpart pixel-by-pixel.
Where they differ = body pixels. Outputs RGBA PNGs (white + alpha) for use as
CSS mask-image in the card's colour overlay system.

Usage:
    python scripts/generate_body_masks.py images/models/3/3.1/red/ images/models/3/3.1/neutral/
    python scripts/generate_body_masks.py images/models/3/3.1/red/ images/models/3/3.1/neutral/ --preview
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


SUPPORTED = {".jpg", ".jpeg", ".png"}


def diff_mask(coloured: np.ndarray, neutral: np.ndarray, threshold: float) -> np.ndarray:
    """Boolean mask: True where colour distance between images exceeds threshold."""
    diff = np.sqrt(np.sum((coloured.astype(float) - neutral.astype(float)) ** 2, axis=2))
    return diff > threshold


def feather(mask: np.ndarray, dilate: int, blur: float) -> np.ndarray:
    """Dilate then Gaussian blur a boolean mask → float 0.0–1.0."""
    pil = Image.fromarray((mask * 255).astype(np.uint8), mode="L")
    for _ in range(dilate):
        pil = pil.filter(ImageFilter.MaxFilter(3))
    if blur > 0:
        pil = pil.filter(ImageFilter.GaussianBlur(radius=blur))
    return np.array(pil).astype(np.float64) / 255.0


def main():
    parser = argparse.ArgumentParser(
        description="Generate body alpha masks by diffing coloured vs neutral images.",
    )
    parser.add_argument("coloured", type=Path, help="Folder with coloured source images (e.g. red/)")
    parser.add_argument("neutral", type=Path, help="Folder with neutral images (also the output folder)")
    parser.add_argument("--threshold", type=float, default=5.0,
                        help="RGB distance threshold for body detection (default: 5)")
    parser.add_argument("--dilate", type=int, default=1,
                        help="Mask dilation passes to close small gaps (default: 1)")
    parser.add_argument("--blur", type=float, default=1.5,
                        help="Gaussian blur radius for feathered edges (default: 1.5)")
    parser.add_argument("--preview", action="store_true")
    args = parser.parse_args()

    for d in [args.coloured, args.neutral]:
        if not d.is_dir():
            print(f"Error: {d} not found", file=sys.stderr)
            sys.exit(1)

    coloured_images = sorted(
        p for p in args.coloured.iterdir()
        if p.is_file() and p.suffix.lower() in SUPPORTED
    )
    if not coloured_images:
        print(f"No images in {args.coloured}", file=sys.stderr)
        sys.exit(1)

    print(f"Diffing {args.coloured} vs {args.neutral}")
    print(f"Threshold: {args.threshold}, dilate: {args.dilate}, blur: {args.blur}\n")

    for col_path in coloured_images:
        # Find matching neutral image (same stem, any extension)
        neu_path = None
        for ext in SUPPORTED:
            candidate = args.neutral / f"{col_path.stem}{ext}"
            if candidate.exists():
                neu_path = candidate
                break

        if not neu_path:
            print(f"  SKIP {col_path.name} — no neutral match")
            continue

        col_img = Image.open(col_path).convert("RGB")
        neu_img = Image.open(neu_path).convert("RGB")

        if col_img.size != neu_img.size:
            print(f"  SKIP {col_path.name} — size mismatch {col_img.size} vs {neu_img.size}")
            continue

        col_arr = np.array(col_img)
        neu_arr = np.array(neu_img)

        body = diff_mask(col_arr, neu_arr, args.threshold)
        alpha = feather(body, args.dilate, args.blur)
        alpha_u8 = np.clip(np.round(alpha * 255), 0, 255).astype(np.uint8)

        # RGBA output: white pixels with body-shaped alpha
        rows, cols = col_arr.shape[:2]
        rgba = np.full((rows, cols, 4), 255, dtype=np.uint8)
        rgba[:, :, 3] = alpha_u8

        out_name = f"{col_path.stem}-mask.png"
        out_path = args.neutral / out_name
        Image.fromarray(rgba, "RGBA").save(out_path, optimize=True)

        pct = body.sum() / body.size * 100
        print(f"  {col_path.name} → {out_name}  ({int(body.sum()):,} body px, {pct:.1f}%)")

        if args.preview:
            preview_dir = args.neutral / "_previews"
            preview_dir.mkdir(exist_ok=True)
            vis = neu_arr.copy()
            a = alpha
            vis[:, :, 0] = np.clip(vis[:, :, 0] * (1 - a) + 200 * a, 0, 255).astype(np.uint8)
            vis[:, :, 1] = np.clip(vis[:, :, 1] * (1 - a) + 30 * a, 0, 255).astype(np.uint8)
            vis[:, :, 2] = np.clip(vis[:, :, 2] * (1 - a) + 30 * a, 0, 255).astype(np.uint8)
            Image.fromarray(vis).save(preview_dir / f"{col_path.stem}-mask_preview.png")

    print("\nDone!")


if __name__ == "__main__":
    main()
