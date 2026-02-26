#!/usr/bin/env python3
"""
Desaturate Tesla car body pixels from a coloured source folder to neutral grey.

Detects pixels within a configurable HSV colour range (default: Tesla red ~0°,
saturation 40%+, value 15%+) and replaces them with their luminance-equivalent
grey, leaving glass, chrome, lights, background, and wheels untouched.

Usage:
    python scripts/desaturate_body.py images/models/3/red/ images/models/3/neutral/
    python scripts/desaturate_body.py images/models/3/red/ images/models/3/neutral/ --dry-run
    python scripts/desaturate_body.py images/models/3/blue/ out/ --hue 210 --hue-tolerance 25
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from PIL import ImageFilter


# ── Colour conversion helpers ────────────────────────────────────────────────

def rgb_to_hsv(arr: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Convert an (H, W, 3) uint8 RGB array to H (0-360°), S (0-100%), V (0-100%)."""
    rgb = arr.astype(np.float64) / 255.0
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]

    cmax = np.maximum(np.maximum(r, g), b)
    cmin = np.minimum(np.minimum(r, g), b)
    delta = cmax - cmin

    # Hue
    h = np.zeros_like(delta)
    nonzero = delta > 0
    mask_r = (cmax == r) & nonzero
    mask_g = (cmax == g) & nonzero
    mask_b = (cmax == b) & nonzero
    h[mask_r] = 60.0 * (((g[mask_r] - b[mask_r]) / delta[mask_r]) % 6.0)
    h[mask_g] = 60.0 * (((b[mask_g] - r[mask_g]) / delta[mask_g]) + 2.0)
    h[mask_b] = 60.0 * (((r[mask_b] - g[mask_b]) / delta[mask_b]) + 4.0)

    # Saturation
    s = np.where(cmax > 0, (delta / cmax) * 100.0, 0.0)

    # Value
    v = cmax * 100.0

    return h, s, v


def build_hue_mask(
    h: np.ndarray,
    s: np.ndarray,
    v: np.ndarray,
    hue: float,
    hue_tol: float,
    sat_min: float,
    val_min: float,
) -> np.ndarray:
    """Return a boolean mask for pixels matching the target colour range.

    Handles hue wrap-around (e.g. hue=5 with tolerance=20 covers 345°–25°).
    """
    # Wrap hue difference into [-180, 180] so we handle the 0°/360° boundary
    hdiff = (h - hue + 180.0) % 360.0 - 180.0
    hue_ok = np.abs(hdiff) <= hue_tol
    sat_ok = s >= sat_min
    val_ok = v >= val_min
    return hue_ok & sat_ok & val_ok


def feather_mask(mask: np.ndarray, radius: int) -> np.ndarray:
    """Dilate a boolean mask then Gaussian-blur to create a soft float mask (0.0–1.0).

    The dilation catches transition pixels at body edges.  The blur feathers the
    boundary so the grey-to-colour transition is gradual rather than a hard step.
    """
    if radius <= 0:
        return mask.astype(np.float64)

    # Convert to PIL Image for morphological ops (faster than pure numpy for this)
    pil_mask = Image.fromarray((mask * 255).astype(np.uint8), mode="L")

    # Dilate via MaxFilter — each application expands ~1 px
    for _ in range(radius):
        pil_mask = pil_mask.filter(ImageFilter.MaxFilter(3))

    # Gaussian blur for soft falloff — sigma ≈ radius gives a nice feather
    pil_mask = pil_mask.filter(ImageFilter.GaussianBlur(radius=radius))

    return np.array(pil_mask).astype(np.float64) / 255.0


def desaturate_masked(
    arr: np.ndarray,
    mask: np.ndarray,
    feather: int = 0,
) -> np.ndarray:
    """Replace masked pixels with their perceptual luminance grey (BT.709).

    When feather > 0, the mask is dilated and blurred so the colour-to-grey
    transition is gradual at body edges.
    """
    r = arr[:, :, 0].astype(np.float64)
    g = arr[:, :, 1].astype(np.float64)
    b = arr[:, :, 2].astype(np.float64)
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b

    alpha = feather_mask(mask, feather)  # 0.0–1.0 blend factor

    # Blend: out = original * (1 - alpha) + grey * alpha
    out = arr.copy().astype(np.float64)
    out[:, :, 0] = r * (1.0 - alpha) + lum * alpha
    out[:, :, 1] = g * (1.0 - alpha) + lum * alpha
    out[:, :, 2] = b * (1.0 - alpha) + lum * alpha

    return np.clip(np.round(out), 0, 255).astype(np.uint8)


def make_preview(original: np.ndarray, processed: np.ndarray, mask: np.ndarray) -> Image.Image:
    """Create a side-by-side-by-side preview: original | processed | mask overlay."""
    h, w = original.shape[:2]

    # Mask overlay: original with affected pixels tinted magenta
    overlay = original.copy()
    overlay[:, :, 0][mask] = np.clip(
        original[:, :, 0][mask].astype(np.int16) + 80, 0, 255
    ).astype(np.uint8)
    overlay[:, :, 1][mask] = (original[:, :, 1][mask] * 0.4).astype(np.uint8)
    overlay[:, :, 2][mask] = np.clip(
        original[:, :, 2][mask].astype(np.int16) + 80, 0, 255
    ).astype(np.uint8)

    gap = 4
    canvas_w = w * 3 + gap * 2
    canvas = np.zeros((h, canvas_w, 3), dtype=np.uint8)
    canvas[:, :w] = original
    canvas[:, w + gap : w * 2 + gap] = processed
    canvas[:, w * 2 + gap * 2 :] = overlay
    return Image.fromarray(canvas)


# ── File discovery ───────────────────────────────────────────────────────────

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png"}


def find_images(folder: Path) -> list[Path]:
    """Return sorted list of supported image files in *folder* (non-recursive)."""
    return sorted(
        p for p in folder.iterdir()
        if p.is_file() and p.suffix.lower() in SUPPORTED_EXTENSIONS
    )


# ── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Desaturate car body pixels to neutral grey.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Examples:\n"
            "  %(prog)s images/models/3/red/ images/models/3/neutral/\n"
            "  %(prog)s images/models/3/red/ out/ --hue 210 --hue-tolerance 25\n"
            "  %(prog)s images/models/3/red/ out/ --dry-run\n"
        ),
    )
    parser.add_argument("input", type=Path, help="Input folder containing JPG/PNG car images")
    parser.add_argument("output", type=Path, help="Output folder for desaturated PNGs")
    parser.add_argument(
        "--hue", type=float, default=0.0,
        help="Target hue in degrees, 0-360 (default: 0 = red)",
    )
    parser.add_argument(
        "--hue-tolerance", type=float, default=20.0,
        help="Hue tolerance in degrees either side of --hue (default: 20)",
    )
    parser.add_argument(
        "--saturation-min", type=float, default=40.0,
        help="Minimum saturation %% to match (default: 40)",
    )
    parser.add_argument(
        "--value-min", type=float, default=15.0,
        help="Minimum value/brightness %% to match (default: 15)",
    )
    parser.add_argument(
        "--feather", type=int, default=2,
        help="Mask dilation + blur radius in pixels to catch edge fringes (default: 2, 0=off)",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Show which pixels would be affected without writing output files. "
             "Writes only the preview composites.",
    )
    args = parser.parse_args()

    if not args.input.is_dir():
        print(f"Error: input folder does not exist: {args.input}", file=sys.stderr)
        sys.exit(1)

    images = find_images(args.input)
    if not images:
        print(f"No JPG/PNG images found in {args.input}", file=sys.stderr)
        sys.exit(1)

    args.output.mkdir(parents=True, exist_ok=True)
    preview_dir = args.output / "_previews"
    preview_dir.mkdir(parents=True, exist_ok=True)

    print(f"Input:  {args.input}  ({len(images)} images)")
    print(f"Output: {args.output}")
    print(f"HSV target: hue={args.hue}° ±{args.hue_tolerance}°, "
          f"S≥{args.saturation_min}%, V≥{args.value_min}%, feather={args.feather}px")
    if args.dry_run:
        print("DRY RUN — only preview composites will be written\n")
    print()

    for path in images:
        img = Image.open(path).convert("RGB")
        arr = np.array(img)
        h, s, v = rgb_to_hsv(arr)

        mask = build_hue_mask(h, s, v, args.hue, args.hue_tolerance,
                              args.saturation_min, args.value_min)
        total = mask.size
        matched = int(mask.sum())
        pct = matched / total * 100

        result = desaturate_masked(arr, mask, feather=args.feather)

        # Preview composite: original | processed | mask overlay
        preview = make_preview(arr, result, mask)
        preview_path = preview_dir / f"{path.stem}_preview.png"
        preview.save(preview_path)

        if args.dry_run:
            print(f"  {path.name}: {matched:,}/{total:,} pixels ({pct:.1f}%) matched → preview only")
        else:
            out_path = args.output / f"{path.stem}.png"
            Image.fromarray(result).save(out_path)
            print(f"  {path.name}: {matched:,}/{total:,} pixels ({pct:.1f}%) → {out_path.name}")

    print(f"\nPreviews saved to {preview_dir}/")
    if args.dry_run:
        print("Re-run without --dry-run to write output files.")


if __name__ == "__main__":
    main()
