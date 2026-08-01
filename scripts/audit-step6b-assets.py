#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/workspace/scratch/4d09a38791d6/generated")
DECORS = SOURCE / "decors"
CUTOUTS = SOURCE / "cutouts"
PRODUCTION = ROOT / "public/assets/bosco/decors"
DELIVERABLES = ROOT / "deliverables/Bosco-Etape-6B"

TIMES = ["morning", "day", "evening", "night"]
WEATHER = [
    "clear",
    "mainly-clear",
    "partly-cloudy",
    "overcast",
    "fog",
    "drizzle",
    "rain",
    "heavy-rain",
    "snow",
    "storm",
]
DECISIONS = [
    "decision-ideal",
    "decision-pleasant",
    "decision-low-sport",
    "decision-cautious",
    "decision-discouraged",
    "decision-unavailable",
]
CRITICAL_CONTEXTS = [
    ("day", "clear"),
    ("day", "rain"),
    ("day", "heavy-rain"),
    ("morning", "fog"),
    ("evening", "storm"),
    ("night", "clear"),
    ("night", "storm"),
]
WMO = {
    "0": "clear",
    "1": "mainly-clear",
    "2": "partly-cloudy",
    "3": "overcast",
    "45": "fog",
    "48": "fog",
    "51": "drizzle",
    "53": "drizzle",
    "56": "drizzle",
    "55": "rain",
    "57": "rain",
    "61": "rain",
    "63": "rain",
    "66": "rain",
    "80": "rain",
    "81": "rain",
    "65": "heavy-rain",
    "67": "heavy-rain",
    "82": "heavy-rain",
    "71": "snow",
    "73": "snow",
    "75": "snow",
    "77": "snow",
    "85": "snow",
    "86": "snow",
    "95": "storm",
    "96": "storm",
    "99": "storm",
}


def font(size: int) -> ImageFont.ImageFont:
    for candidate in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ):
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def edge_vector(path: Path) -> np.ndarray:
    image = Image.open(path).convert("L").resize((384, 384), Image.Resampling.LANCZOS)
    edges = np.asarray(image.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    mask = np.ones_like(edges, dtype=bool)
    mask[58:275, 0:145] = False  # Exterior weather window.
    values = edges[mask]
    values = (values - values.mean()) / max(values.std(), 1.0)
    return values


def correlation(reference: np.ndarray, candidate: np.ndarray) -> float:
    return float(np.mean(reference * candidate))


def contact_sheet() -> None:
    thumb = 280
    label_height = 44
    gap = 12
    canvas = Image.new(
        "RGB",
        (10 * (thumb + gap) + gap, 4 * (thumb + label_height + gap) + gap),
        "#14110f",
    )
    draw = ImageDraw.Draw(canvas)
    label_font = font(18)
    for row, time in enumerate(TIMES):
        for column, weather in enumerate(WEATHER):
            image = Image.open(DECORS / time / f"{weather}.png").convert("RGB")
            image.thumbnail((thumb, thumb), Image.Resampling.LANCZOS)
            x = gap + column * (thumb + gap)
            y = gap + row * (thumb + label_height + gap)
            canvas.paste(image, (x, y))
            draw.text((x, y + thumb + 8), f"{time} / {weather}", fill="#f0d6a0", font=label_font)
    canvas.save(DELIVERABLES / "planche-40-decors.png", optimize=True)


def decision_sheet() -> None:
    thumb = 240
    label_height = 38
    gap = 10
    canvas = Image.new(
        "RGB",
        (7 * (thumb + gap) + gap, 6 * (thumb + label_height + gap) + gap),
        "#14110f",
    )
    draw = ImageDraw.Draw(canvas)
    label_font = font(15)
    for row, decision in enumerate(DECISIONS):
        cutout = Image.open(CUTOUTS / f"{decision}.png").convert("RGBA")
        for column, (time, weather) in enumerate(CRITICAL_CONTEXTS):
            decor = Image.open(DECORS / time / f"{weather}.png").convert("RGBA")
            composite = Image.alpha_composite(decor, cutout).convert("RGB")
            composite.thumbnail((thumb, thumb), Image.Resampling.LANCZOS)
            x = gap + column * (thumb + gap)
            y = gap + row * (thumb + label_height + gap)
            canvas.paste(composite, (x, y))
            draw.text(
                (x, y + thumb + 7),
                f"{decision.replace('decision-', '')} · {time}/{weather}",
                fill="#f0d6a0",
                font=label_font,
            )
    canvas.save(DELIVERABLES / "planche-decisions-contextes-critiques.png", optimize=True)


def main() -> None:
    DELIVERABLES.mkdir(parents=True, exist_ok=True)
    reference = edge_vector(DECORS / "day/clear.png")
    rows = []
    manifest_assets = {}
    for time in TIMES:
        for weather in WEATHER:
            png = DECORS / time / f"{weather}.png"
            webp = PRODUCTION / time / f"{weather}.webp"
            with Image.open(png) as image:
                dimensions = f"{image.width}x{image.height}"
            score = correlation(reference, edge_vector(png))
            relative = f"/assets/bosco/decors/{time}/{weather}.webp"
            weight = webp.stat().st_size
            manifest_assets[f"{time}/{weather}"] = {
                "asset": relative,
                "bytes": weight,
                "source_dimensions": dimensions,
            }
            rows.append(
                {
                    "time": time,
                    "weather": weather,
                    "dimensions": dimensions,
                    "structural_edge_correlation": f"{score:.4f}",
                    "production_bytes": weight,
                    "asset": relative,
                }
            )

    with (DELIVERABLES / "controle-geometrie.csv").open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)

    manifest = {
        "version": "bosco-step6b-v1",
        "matrix": {"times": TIMES, "weatherFamilies": WEATHER, "count": len(rows)},
        "wmo": WMO,
        "fallbackPrecipitationMmH": {
            "drizzle": "> 0 and < 1",
            "rain": ">= 1 and < 5",
            "heavy-rain": ">= 5",
        },
        "assets": manifest_assets,
    }
    (ROOT / "public/assets/bosco/decors/manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (DELIVERABLES / "matrice-wmo-assets.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    weights = [row["production_bytes"] for row in rows]
    report = f"""# Rapport performance et cache — Bosco Étape 6B

- Décors de production : {len(rows)}
- Dimensions sources : 1536 × 1536 px
- Poids total WebP : {sum(weights) / 1024 / 1024:.2f} Mio
- Poids moyen WebP : {sum(weights) / len(weights) / 1024:.0f} Kio
- Plus petit décor : {min(weights) / 1024:.0f} Kio
- Plus grand décor : {max(weights) / 1024:.0f} Kio
- Cache : `bosco-pwa-v8-decors`
- Préchargement initial : page, manifeste, image maître, pose de repos et un décor neutre.
- Préchargement applicatif : décor courant, pose courante et un seul décor temporel probable.
- Les autres décors sont chargés et mis en cache à la demande par leur chemin météo/temporalité.
"""
    (DELIVERABLES / "rapport-performance-cache.md").write_text(report, encoding="utf-8")
    contact_sheet()
    decision_sheet()


if __name__ == "__main__":
    main()
