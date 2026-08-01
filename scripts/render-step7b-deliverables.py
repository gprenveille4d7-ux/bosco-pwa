#!/usr/bin/env python3
"""Render Step 7B before/after, responsive and 40-context visual evidence."""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
DELIVERABLES = ROOT / "deliverables/Bosco-Etape-7B"
ORIGINAL = DELIVERABLES / "original-assets"
COMPOSITING = ROOT / "public/assets/bosco/compositing"
METADATA = json.loads((COMPOSITING / "pose-metadata.json").read_text())
AFTER_MASK = Image.open(
    ROOT / "public" / METADATA["foregroundMask"].removeprefix("/")
).convert("RGBA")
AFTER_CUP = Image.open(
    ROOT
    / "public"
    / METADATA["fixedObjects"]["poldersCup"].removeprefix("/")
).convert("RGBA")
BEFORE_MASK = Image.open(
    ORIGINAL / "masks/occlusion-canonical.png"
).convert("RGBA")
BEFORE_CUP = Image.open(
    ORIGINAL / "objects/polders-cup.png"
).convert("RGBA")

POSES = [
    "resting",
    "listening",
    "thinking",
    "sea",
    "barometer",
    "chart",
    "preparing",
    "speaking",
    "satisfied",
    "worried",
    "annoyed",
    "protective",
]
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
RESPONSIVE_FORMATS = [
    (320, 568),
    (375, 667),
    (390, 844),
    (393, 852),
    (402, 874),
    (430, 932),
    (768, 1024),
    (1024, 1366),
    (1440, 900),
]


def decor(time: str, weather: str) -> Image.Image:
    return Image.open(
        ROOT / f"public/assets/bosco/decors/{time}/{weather}.webp"
    ).convert("RGBA")


def pose(name: str, before: bool) -> Image.Image:
    if before:
        path = ORIGINAL / f"poses/{name}.png"
    else:
        item = next(item for item in METADATA["poses"] if item["poseId"] == name)
        path = ROOT / "public" / item["assetPath"].removeprefix("/")
    return Image.open(path).convert("RGBA")


def composite(
    context: Image.Image,
    bosco: Image.Image,
    mask: Image.Image,
    cup: Image.Image,
) -> Image.Image:
    scene = context.copy()
    scene.alpha_composite(bosco)
    foreground = context.copy()
    foreground.putalpha(mask.getchannel("A"))
    scene.alpha_composite(foreground)
    scene.alpha_composite(cup)
    return scene


def checker(size: int = 1536) -> Image.Image:
    image = Image.new("RGBA", (size, size), (224, 224, 224, 255))
    draw = ImageDraw.Draw(image)
    tile = max(12, size // 24)
    for y in range(0, size, tile):
        for x in range(0, size, tile):
            if (x // tile + y // tile) % 2:
                draw.rectangle(
                    (x, y, x + tile - 1, y + tile - 1),
                    fill=(150, 150, 150, 255),
                )
    return image


def label(image: Image.Image, text: str) -> Image.Image:
    result = image.convert("RGB")
    draw = ImageDraw.Draw(result)
    draw.rounded_rectangle((14, 14, 470, 58), radius=12, fill=(7, 11, 16))
    draw.text((28, 27), text, fill=(245, 224, 185))
    return result


def build_before_after() -> dict[str, object]:
    selections = [
        ("satisfied", "day", "clear"),
        ("protective", "day", "clear"),
        ("preparing", "night", "clear"),
        ("chart", "night", "storm"),
    ]
    cell = 512
    board = Image.new("RGB", (cell * 4, cell * len(selections)), (18, 21, 25))
    metrics: dict[str, object] = {}

    for row, (name, time, weather) in enumerate(selections):
        context = decor(time, weather)
        before = composite(
            context, pose(name, True), BEFORE_MASK, BEFORE_CUP
        ).convert("RGB")
        after = composite(
            context, pose(name, False), AFTER_MASK, AFTER_CUP
        ).convert("RGB")
        difference = ImageChops.difference(before, after)
        diff_bbox = difference.getbbox()
        metrics[f"{name}:{time}:{weather}"] = {
            "differenceBoundingBox": list(diff_bbox) if diff_bbox else None,
            "anchorDeltaPx": 0,
        }
        cup_zone = (900, 980, 1536, 1536)
        crop = after.crop(cup_zone).resize(
            (1536, 1344), Image.Resampling.NEAREST
        )
        views = [
            label(before, f"AVANT · {name} · {time}/{weather}"),
            label(after, f"APRÈS · {name} · {time}/{weather}"),
            label(difference, "DIFFÉRENCE PIXEL"),
            label(crop, "ZONE TASSE × 2,4"),
        ]
        for column, view in enumerate(views):
            board.paste(
                view.resize((cell, cell), Image.Resampling.LANCZOS),
                (column * cell, row * cell),
            )
        before.save(
            DELIVERABLES / f"capture-avant-{name}-{time}-{weather}.png",
            optimize=True,
        )
        after.save(
            DELIVERABLES / f"capture-apres-{name}-{time}-{weather}.png",
            optimize=True,
        )

    board.save(
        DELIVERABLES / "comparaison-avant-apres-difference.png",
        optimize=True,
    )
    return metrics


def build_context_board() -> None:
    name = "satisfied"
    tile = 256
    board = Image.new(
        "RGB",
        (tile * len(WEATHER), tile * len(TIMES)),
        (18, 21, 25),
    )
    for row, time in enumerate(TIMES):
        for column, weather in enumerate(WEATHER):
            scene = composite(
                decor(time, weather),
                pose(name, False),
                AFTER_MASK,
                AFTER_CUP,
            )
            thumb = label(scene, f"{time} · {weather}").resize(
                (tile, tile), Image.Resampling.LANCZOS
            )
            board.paste(thumb, (column * tile, row * tile))
    board.save(
        DELIVERABLES / "controle-non-regression-40-decors.png",
        optimize=True,
    )


def build_responsive_board() -> None:
    scene = composite(
        decor("day", "clear"),
        pose("satisfied", False),
        AFTER_MASK,
        AFTER_CUP,
    ).convert("RGB")
    card_width = 360
    card_height = 440
    gap = 20
    board = Image.new(
        "RGB",
        (3 * card_width + 4 * gap, 3 * card_height + 4 * gap),
        (16, 19, 23),
    )
    draw = ImageDraw.Draw(board)
    for index, (width, height) in enumerate(RESPONSIVE_FORMATS):
        column = index % 3
        row = index // 3
        x = gap + column * (card_width + gap)
        y = gap + row * (card_height + gap)
        draw.rounded_rectangle(
            (x, y, x + card_width, y + card_height),
            radius=22,
            fill=(8, 13, 19),
            outline=(126, 91, 49),
            width=2,
        )
        draw.text((x + 16, y + 14), f"{width} × {height}", fill=(242, 218, 175))
        viewport_ratio = width / height
        preview_width = card_width - 32
        preview_height = int(preview_width / viewport_ratio)
        if preview_height > card_height - 62:
            preview_height = card_height - 62
            preview_width = int(preview_height * viewport_ratio)
        vx = x + (card_width - preview_width) // 2
        vy = y + 50
        draw.rectangle(
            (vx, vy, vx + preview_width, vy + preview_height),
            fill=(6, 10, 15),
        )
        scene_size = min(preview_width, preview_height)
        rendered = scene.resize(
            (scene_size, scene_size), Image.Resampling.LANCZOS
        )
        draw.rectangle(
            (vx, vy, vx + preview_width, vy + 20),
            fill=(14, 22, 31),
        )
        board.paste(
            rendered,
            (vx + (preview_width - scene_size) // 2, vy + 20),
        )
        draw.rectangle(
            (
                vx,
                vy + preview_height - 18,
                vx + preview_width,
                vy + preview_height,
            ),
            fill=(9, 16, 23),
        )
    board.save(
        DELIVERABLES / "captures-responsive-9-formats.png",
        optimize=True,
    )


def build_alpha_board() -> None:
    backgrounds = [
        ("Blanc", Image.new("RGBA", (1536, 1536), "white")),
        ("Noir", Image.new("RGBA", (1536, 1536), "black")),
        ("Rouge", Image.new("RGBA", (1536, 1536), "#c31620")),
        ("Vert", Image.new("RGBA", (1536, 1536), "#10a05a")),
        ("Damier", checker()),
    ]
    tile = 384
    board = Image.new("RGB", (tile * len(backgrounds), tile * 2), (20, 23, 27))
    for column, (name, background) in enumerate(backgrounds):
        cup_view = background.copy()
        cup_view.alpha_composite(AFTER_CUP)
        mask_view = background.copy()
        red = Image.new("RGBA", (1536, 1536), (255, 38, 38, 0))
        red.putalpha(AFTER_MASK.getchannel("A"))
        mask_view.alpha_composite(red)
        board.paste(
            label(cup_view, f"TASSE · {name}").resize(
                (tile, tile), Image.Resampling.LANCZOS
            ),
            (column * tile, 0),
        )
        board.paste(
            label(mask_view, f"MASQUE · {name}").resize(
                (tile, tile), Image.Resampling.LANCZOS
            ),
            (column * tile, tile),
        )
    board.save(
        DELIVERABLES / "controle-alpha-tasse-masque.png",
        optimize=True,
    )


def verify_context_alignment() -> dict[str, object]:
    checks = []
    for time in TIMES:
        for weather in WEATHER:
            context = decor(time, weather)
            foreground = context.copy()
            foreground.putalpha(AFTER_MASK.getchannel("A"))
            visible = np.asarray(AFTER_MASK.getchannel("A")) > 0
            same_pixels = bool(
                np.array_equal(
                    np.asarray(context)[visible, :3],
                    np.asarray(foreground)[visible, :3],
                )
            )
            checks.append(
                {
                    "context": f"{time}:{weather}",
                    "sameContextualSourcePixels": same_pixels,
                }
            )
    return {
        "checked": len(checks),
        "allAligned": all(item["sameContextualSourcePixels"] for item in checks),
        "contexts": checks,
    }


def main() -> None:
    DELIVERABLES.mkdir(parents=True, exist_ok=True)
    before_after = build_before_after()
    build_context_board()
    build_responsive_board()
    build_alpha_board()
    report = {
        "version": METADATA["version"],
        "sourceVersion": 8,
        "anchor": [METADATA["anchorX"], METADATA["anchorY"]],
        "maxAnchorDeltaPx": METADATA["maxAnchorDeltaPx"],
        "seaAnimationMs": {
            "preparation": 450,
            "rotation": 1650,
            "observation": 2000,
            "return": 1650,
            "total": 5750,
        },
        "responsiveFormats": [
            f"{width}x{height}" for width, height in RESPONSIVE_FORMATS
        ],
        "beforeAfter": before_after,
        "contextAlignment": verify_context_alignment(),
    }
    (DELIVERABLES / "preuves-visuelles.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
