#!/usr/bin/env python3
"""Produce deterministic forensic and visual evidence for Bosco compositing."""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw
from scipy import ndimage


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "deliverables/Bosco-Correction-Definitive"
BEFORE = OUT / "original-assets"
AFTER = ROOT / "public/assets/bosco/compositing"
METADATA = json.loads((AFTER / "pose-metadata.json").read_text(encoding="utf-8"))
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
REGION = (850, 850, 1536, 1536)


def pose_path(name: str, before: bool) -> Path:
    if before:
        return BEFORE / "poses" / f"{name}-step7b-v2.png"
    item = next(item for item in METADATA["poses"] if item["poseId"] == name)
    return ROOT / "public" / item["assetPath"].removeprefix("/")


def pose(name: str, before: bool) -> Image.Image:
    return Image.open(pose_path(name, before)).convert("RGBA")


def mask(before: bool) -> Image.Image:
    path = (
        BEFORE / "masks" / "occlusion-canonical-step7b-v2.png"
        if before
        else ROOT / "public" / METADATA["foregroundMask"].removeprefix("/")
    )
    return Image.open(path).convert("RGBA")


def cup(before: bool) -> Image.Image:
    path = (
        BEFORE / "objects" / "polders-cup-step7b-v2.png"
        if before
        else ROOT
        / "public"
        / METADATA["fixedObjects"]["poldersCup"].removeprefix("/")
    )
    return Image.open(path).convert("RGBA")


def decor(time: str, weather: str) -> Image.Image:
    return Image.open(
        ROOT / f"public/assets/bosco/decors/{time}/{weather}.webp"
    ).convert("RGBA")


def composite(
    context: Image.Image,
    bosco: Image.Image,
    foreground_mask: Image.Image,
    fixed_cup: Image.Image,
) -> Image.Image:
    result = context.copy()
    result.alpha_composite(bosco)
    foreground = context.copy()
    foreground.putalpha(foreground_mask.getchannel("A"))
    result.alpha_composite(foreground)
    result.alpha_composite(fixed_cup)
    return result


def label(image: Image.Image, text: str) -> Image.Image:
    result = image.convert("RGB")
    draw = ImageDraw.Draw(result)
    draw.rounded_rectangle((14, 14, 620, 60), radius=12, fill=(6, 10, 15))
    draw.text((28, 28), text, fill=(247, 225, 184))
    return result


def checker() -> Image.Image:
    result = Image.new("RGBA", (1536, 1536), (220, 220, 220, 255))
    draw = ImageDraw.Draw(result)
    tile = 64
    for y in range(0, 1536, tile):
        for x in range(0, 1536, tile):
            if (x // tile + y // tile) % 2:
                draw.rectangle(
                    (x, y, x + tile - 1, y + tile - 1),
                    fill=(145, 145, 145, 255),
                )
    return result


def alpha_backgrounds(image: Image.Image) -> list[tuple[str, Image.Image]]:
    backgrounds = [
        ("Damier", checker()),
        ("Blanc", Image.new("RGBA", image.size, (255, 255, 255, 255))),
        ("Noir", Image.new("RGBA", image.size, (0, 0, 0, 255))),
        ("Rouge", Image.new("RGBA", image.size, (220, 0, 28, 255))),
        ("Vert", Image.new("RGBA", image.size, (0, 170, 85, 255))),
    ]
    output: list[tuple[str, Image.Image]] = []
    for name, background in backgrounds:
        background.alpha_composite(image)
        output.append((name, label(background, name)))
    return output


def component_details(alpha: np.ndarray) -> list[dict[str, object]]:
    labels, count = ndimage.label(
        alpha > 8,
        structure=ndimage.generate_binary_structure(2, 2),
    )
    sizes = np.bincount(labels.ravel())
    output: list[dict[str, object]] = []
    for component in (np.argsort(sizes[1:])[::-1] + 1)[:8] if count else []:
        ys, xs = np.where(labels == component)
        output.append(
            {
                "pixels": int(sizes[component]),
                "bbox": [
                    int(xs.min()),
                    int(ys.min()),
                    int(xs.max() + 1),
                    int(ys.max() + 1),
                ],
            }
        )
    return output


def audit_asset(path: Path, role: str) -> dict[str, object]:
    opened = Image.open(path)
    image = opened.convert("RGBA")
    rgba = np.asarray(image)
    alpha = rgba[:, :, 3]
    return {
        "path": str(path.relative_to(ROOT)),
        "role": role,
        "format": opened.format,
        "sourceMode": opened.mode,
        "dimensions": list(image.size),
        "hasAlpha": "A" in image.getbands(),
        "alphaBoundingBox": list(image.getchannel("A").getbbox() or (0, 0, 0, 0)),
        "opaquePixels": int(np.count_nonzero(alpha == 255)),
        "semiTransparentPixels": int(np.count_nonzero((alpha > 0) & (alpha < 255))),
        "transparentRgbPixels": int(np.count_nonzero(rgba[:, :, :3][alpha == 0])),
        "componentsOverAlpha8": component_details(alpha),
    }


def save_alpha_board() -> None:
    tile = 340
    board = Image.new("RGB", (tile * 5, tile * 2), (18, 21, 25))
    for row, before in enumerate([True, False]):
        source = pose("sea", before)
        for column, (name, view) in enumerate(alpha_backgrounds(source)):
            state = "AVANT" if before else "NETTOYÉE MAIS NON VALIDÉE"
            titled = label(view, f"{state} · {name}")
            board.paste(
                titled.resize((tile, tile), Image.Resampling.LANCZOS),
                (column * tile, row * tile),
            )
    board.save(OUT / "inspection-asset-mer-fonds-techniques.png", optimize=True)

    red_before = alpha_backgrounds(pose("sea", True))[3][1]
    red_after = alpha_backgrounds(pose("sea", False))[3][1]
    red_before.save(OUT / "asset-mer-fautif-fond-rouge-avant.png", optimize=True)
    red_after.save(
        OUT / "asset-mer-nettoye-non-valide-fond-rouge.png",
        optimize=True,
    )


def save_mask_board() -> None:
    tile = 512
    board = Image.new("RGB", (tile * 2, tile), (18, 21, 25))
    for column, before in enumerate([True, False]):
        current = mask(before).getchannel("A")
        red = Image.new("RGBA", (1536, 1536), (255, 40, 45, 0))
        red.putalpha(current)
        background = checker()
        background.alpha_composite(red)
        view = label(background, "MASQUE AVANT" if before else "MASQUE APRÈS")
        board.paste(
            view.resize((tile, tile), Image.Resampling.LANCZOS),
            (column * tile, 0),
        )
    board.save(OUT / "inspection-masque-alpha.png", optimize=True)


def save_before_after() -> dict[str, object]:
    context = decor("day", "clear")
    before_scene = composite(context, pose("sea", True), mask(True), cup(True))
    after_scene = composite(
        context,
        pose("resting", False),
        mask(False),
        cup(False),
    )
    before_scene.convert("RGB").save(OUT / "capture-avant-jour-clair.png", optimize=True)
    after_scene.convert("RGB").save(OUT / "capture-apres-jour-clair.png", optimize=True)

    difference = ImageChops.difference(
        before_scene.convert("RGB"),
        after_scene.convert("RGB"),
    )
    difference.save(OUT / "difference-avant-apres.png", optimize=True)

    before_crop = before_scene.crop(REGION).convert("RGB")
    after_crop = after_scene.crop(REGION).convert("RGB")
    diff_crop = ImageChops.difference(before_crop, after_crop)
    for scale in [2, 4]:
        size = (before_crop.width * scale, before_crop.height * scale)
        before_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"zone-tasse-coude-avant-{scale * 100}pct.png",
            optimize=True,
        )
        after_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"zone-tasse-coude-apres-{scale * 100}pct.png",
            optimize=True,
        )
        diff_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"zone-tasse-coude-difference-{scale * 100}pct.png",
            optimize=True,
        )

    overlay = Image.blend(
        before_scene.convert("RGB"),
        after_scene.convert("RGB"),
        0.5,
    )
    overlay.save(OUT / "superposition-avant-apres.png", optimize=True)
    return {
        "differenceBoundingBox": list(difference.getbbox() or (0, 0, 0, 0)),
        "region": list(REGION),
        "regionDifferenceBoundingBox": list(diff_crop.getbbox() or (0, 0, 0, 0)),
    }


def save_timeline() -> dict[str, object]:
    labels = [
        "Déclenchement",
        "Analyse fixe",
        "Pose neutre conservée",
        "Pose mer refusée",
        "Aucun masque ajouté",
        "Réponse finale",
    ]
    before_poses = ["listening", "sea", "sea", "sea", "sea", "satisfied"]
    after_poses = ["resting", "resting", "resting", "resting", "resting", "satisfied"]
    context = decor("day", "clear")
    tile = 340
    board = Image.new("RGB", (tile * 6, tile * 2), (18, 21, 25))

    fixed_area_metrics: dict[str, object] = {}
    after_scenes: list[Image.Image] = []
    for row, (before, sequence) in enumerate(
        [(True, before_poses), (False, after_poses)]
    ):
        for column, (title, pose_name) in enumerate(zip(labels, sequence)):
            scene = composite(
                context,
                pose(pose_name, before),
                mask(before),
                cup(before),
            )
            if not before:
                after_scenes.append(scene)
            view = label(
                scene,
                f"{'AVANT' if before else 'FAIL CLOSED'} · {title}",
            )
            board.paste(
                view.resize((tile, tile), Image.Resampling.LANCZOS),
                (column * tile, row * tile),
            )
    board.save(OUT / "captures-animation-avant-apres.png", optimize=True)

    for index, (left, right) in enumerate(zip(after_scenes, after_scenes[1:])):
        left_pose = pose(after_poses[index], False)
        right_pose = pose(after_poses[index + 1], False)
        excluded = np.maximum(
            np.asarray(left_pose)[:, :, 3],
            np.asarray(right_pose)[:, :, 3],
        )
        excluded = np.maximum(excluded, np.asarray(cup(False))[:, :, 3])
        diff = np.asarray(
            ImageChops.difference(left.convert("RGB"), right.convert("RGB"))
        )
        fixed = diff[excluded == 0]
        fixed_area_metrics[f"{index}->{index + 1}"] = {
            "changedChannels": int(np.count_nonzero(fixed)),
            "maxChannelDifference": int(fixed.max()) if fixed.size else 0,
        }
    return fixed_area_metrics


def save_context_board() -> int:
    tile = 220
    board = Image.new(
        "RGB",
        (tile * len(WEATHER), tile * len(TIMES)),
        (18, 21, 25),
    )
    checked = 0
    for row, time in enumerate(TIMES):
        for column, weather in enumerate(WEATHER):
            context = decor(time, weather)
            scene = composite(
                context,
                pose("resting", False),
                mask(False),
                cup(False),
            )
            view = label(scene, f"{time} · {weather}")
            board.paste(
                view.resize((tile, tile), Image.Resampling.LANCZOS),
                (column * tile, row * tile),
            )
            checked += 1
    board.save(OUT / "controle-40-decors-pose-neutre.png", optimize=True)
    return checked


def save_responsive_board() -> list[str]:
    scene = composite(
        decor("day", "clear"),
        pose("resting", False),
        mask(False),
        cup(False),
    ).convert("RGB")
    card_width, card_height, gap = 360, 440, 20
    board = Image.new(
        "RGB",
        (3 * card_width + 4 * gap, 3 * card_height + 4 * gap),
        (15, 18, 22),
    )
    names: list[str] = []
    for index, (width, height) in enumerate(RESPONSIVE_FORMATS):
        names.append(f"{width}×{height}")
        frame = Image.new("RGB", (card_width, card_height), (7, 11, 16))
        preview_width = min(card_width - 24, int((card_height - 58) * width / height))
        preview_width = max(180, preview_width)
        rendered = scene.resize(
            (preview_width, preview_width),
            Image.Resampling.LANCZOS,
        )
        frame.paste(rendered, ((card_width - preview_width) // 2, 46))
        frame = label(frame, f"SIMULATION · {width} × {height}")
        row, column = divmod(index, 3)
        board.paste(
            frame,
            (
                gap + column * (card_width + gap),
                gap + row * (card_height + gap),
            ),
        )
    board.save(OUT / "captures-responsive-9-formats.png", optimize=True)
    return names


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    save_alpha_board()
    save_mask_board()
    difference = save_before_after()
    fixed_areas = save_timeline()
    checked_decors = save_context_board()
    responsive = save_responsive_board()

    assets = [
        audit_asset(pose_path("sea", True), "Pose mer avant"),
        audit_asset(
            pose_path("sea", False),
            "Pose mer nettoyée mais désactivée : anatomie manquante sous la tasse source",
        ),
        audit_asset(
            ROOT / "public" / METADATA["foregroundMask"].removeprefix("/"),
            "Masque alpha d’occlusion",
        ),
        audit_asset(
            ROOT
            / "public"
            / METADATA["fixedObjects"]["poldersCup"].removeprefix("/"),
            "Tasse POLDERS fixe",
        ),
    ]
    report = {
        "sourceVersion": "e6d8e848bfc50756c9ffe259f7adccca65c411d1",
        "assetVersion": METADATA["version"],
        "cacheVersion": "bosco-pwa-v12-sea-pose-fail-closed",
        "anchor": [METADATA["anchorX"], METADATA["anchorY"]],
        "maxAnchorDeltaPx": METADATA["maxAnchorDeltaPx"],
        "assets": assets,
        "difference": difference,
        "fixedDecorDifferencesBetweenAnimationSteps": fixed_areas,
        "decorsChecked": checked_decors,
        "responsiveSimulations": responsive,
        "seaPoseProductionAllowed": False,
        "seaAnimationStatus": "disabled-fail-closed",
        "realIPhoneTested": False,
    }
    (OUT / "preuves-visuelles.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
