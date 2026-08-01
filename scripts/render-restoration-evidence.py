#!/usr/bin/env python3
"""Render deterministic visual evidence for the hand and animation restoration."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "deliverables/Bosco-Restauration-Main-Et-Animations"
ASSETS = ROOT / "public/assets/bosco/compositing"
METADATA = json.loads(
    (ASSETS / "pose-metadata.json").read_text(encoding="utf-8")
)
BEFORE = (
    ROOT
    / "deliverables/Bosco-Correction-Definitive/capture-apres-jour-clair.png"
)
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
FORMATS = [
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
HAND_REGION = (890, 1000, 1450, 1536)


def metadata_pose(name: str) -> dict[str, object]:
    return next(item for item in METADATA["poses"] if item["poseId"] == name)


def public_image(path: str) -> Image.Image:
    return Image.open(ROOT / "public" / path.removeprefix("/")).convert("RGBA")


def pose(name: str) -> Image.Image:
    return public_image(str(metadata_pose(name)["assetPath"]))


def hand(name: str) -> Image.Image:
    return public_image(str(metadata_pose(name)["handBehindPath"]))


def fingers(name: str) -> Image.Image:
    return public_image(str(metadata_pose(name)["fingersFrontPath"]))


def decor(time: str = "day", weather: str = "clear") -> Image.Image:
    return Image.open(
        ROOT / f"public/assets/bosco/decors/{time}/{weather}.webp"
    ).convert("RGBA")


def cup() -> Image.Image:
    return public_image(str(METADATA["fixedObjects"]["poldersCup"]))


def foreground(context: Image.Image) -> Image.Image:
    result = context.copy()
    result.putalpha(
        public_image(str(METADATA["foregroundMask"])).getchannel("A")
    )
    return result


def composite(name: str, context: Image.Image | None = None) -> Image.Image:
    active_context = context or decor()
    result = active_context.copy()
    result.alpha_composite(pose(name))
    result.alpha_composite(hand(name))
    result.alpha_composite(cup())
    result.alpha_composite(fingers(name))
    result.alpha_composite(foreground(active_context))
    return result


def title(image: Image.Image, text: str) -> Image.Image:
    result = image.convert("RGB")
    draw = ImageDraw.Draw(result)
    draw.rounded_rectangle((16, 16, 710, 68), radius=12, fill=(5, 11, 18))
    draw.text((30, 32), text, fill=(247, 225, 184))
    return result


def red_alpha_scene(name: str) -> Image.Image:
    result = Image.new("RGBA", (1536, 1536), (210, 10, 24, 255))
    result.alpha_composite(pose(name))
    result.alpha_composite(hand(name))
    result.alpha_composite(cup())
    result.alpha_composite(fingers(name))
    return result


def save_before_after() -> dict[str, object]:
    before = Image.open(BEFORE).convert("RGB")
    after = composite("resting").convert("RGB")
    before.save(OUT / "capture-avant.png", optimize=True)
    after.save(OUT / "capture-apres.png", optimize=True)

    difference = ImageChops.difference(before, after)
    difference.save(OUT / "difference-avant-apres.png", optimize=True)
    Image.blend(before, after, 0.5).save(
        OUT / "superposition-avant-apres.png",
        optimize=True,
    )

    before_crop = before.crop(HAND_REGION)
    after_crop = after.crop(HAND_REGION)
    diff_crop = ImageChops.difference(before_crop, after_crop)
    for scale in (2, 4):
        size = (before_crop.width * scale, before_crop.height * scale)
        before_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"main-avant-{scale * 100}pct.png",
            optimize=True,
        )
        after_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"main-apres-{scale * 100}pct.png",
            optimize=True,
        )
        diff_crop.resize(size, Image.Resampling.NEAREST).save(
            OUT / f"main-difference-{scale * 100}pct.png",
            optimize=True,
        )
    return {
        "fullDifferenceBoundingBox": list(
            difference.getbbox() or (0, 0, 0, 0)
        ),
        "inspectionRegion": list(HAND_REGION),
        "handDifferenceBoundingBox": list(
            diff_crop.getbbox() or (0, 0, 0, 0)
        ),
    }


def save_hand_proofs() -> None:
    red_alpha_scene("resting").save(
        OUT / "main-restauree-fond-rouge.png",
        optimize=True,
    )
    composite("resting").crop(HAND_REGION).resize(
        (1120, 1072),
        Image.Resampling.LANCZOS,
    ).convert("RGB").save(
        OUT / "main-restauree-dans-la-scene.png",
        optimize=True,
    )
    red_alpha_scene("sea").save(
        OUT / "pose-mer-reparee-fond-rouge.png",
        optimize=True,
    )


def save_sea_timeline() -> None:
    steps = [
        ("Repos · 0 ms", "resting"),
        ("Préparation · 450 ms", "listening"),
        ("Rotation · 1 275 ms", "thinking"),
        ("Face à la mer · 2 100 ms", "sea"),
        ("Observation · 3 100 ms", "sea"),
        ("Retour · 4 100 ms", "sea"),
        ("Retour 50 % · 4 925 ms", "thinking"),
        ("Repos exact · 5 750 ms", "resting"),
    ]
    tile = 380
    board = Image.new("RGB", (tile * 4, tile * 2), (14, 18, 24))
    for index, (label, pose_name) in enumerate(steps):
        frame = title(composite(pose_name), label)
        frame = frame.resize((tile, tile), Image.Resampling.LANCZOS)
        board.paste(frame, ((index % 4) * tile, (index // 4) * tile))
        frame.save(
            OUT / f"mer-etape-{index + 1:02d}.png",
            optimize=True,
        )
    board.save(OUT / "animation-regarde-mer-8-etapes.png", optimize=True)


def save_context_board() -> int:
    tile = 210
    board = Image.new("RGB", (tile * 10, tile * 4), (14, 18, 24))
    checked = 0
    for row, time in enumerate(TIMES):
        for column, weather in enumerate(WEATHER):
            scene = title(
                composite("resting", decor(time, weather)),
                f"{time} · {weather}",
            )
            board.paste(
                scene.resize((tile, tile), Image.Resampling.LANCZOS),
                (column * tile, row * tile),
            )
            checked += 1
    board.save(OUT / "controle-40-decors.png", optimize=True)
    return checked


def save_responsive_board() -> list[str]:
    scene = composite("resting").convert("RGB")
    card_width, card_height, gap = 360, 440, 20
    board = Image.new(
        "RGB",
        (3 * card_width + 4 * gap, 3 * card_height + 4 * gap),
        (14, 18, 24),
    )
    labels: list[str] = []
    for index, (width, height) in enumerate(FORMATS):
        label = f"{width} × {height}"
        labels.append(label)
        frame = Image.new("RGB", (card_width, card_height), (5, 10, 16))
        side = min(card_width - 24, card_height - 70)
        rendered = scene.resize((side, side), Image.Resampling.LANCZOS)
        frame.paste(rendered, ((card_width - side) // 2, 58))
        frame = title(frame, f"SIMULATION · {label}")
        row, column = divmod(index, 3)
        board.paste(
            frame,
            (
                gap + column * (card_width + gap),
                gap + row * (card_height + gap),
            ),
        )
    board.save(OUT / "captures-responsive-9-formats.png", optimize=True)
    return labels


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    difference = save_before_after()
    save_hand_proofs()
    save_sea_timeline()
    decors_checked = save_context_board()
    formats = save_responsive_board()
    report = {
        "publishedBeforeCommit": "cf122c4cdecbc7639e03c221c1d6afbc7026eb80",
        "lastAnimatedCommit": "e6d8e848bfc50756c9ffe259f7adccca65c411d1",
        "assetVersion": METADATA["version"],
        "cacheVersion": "bosco-pwa-v13-hand-animation-restored",
        "anchor": [METADATA["anchorX"], METADATA["anchorY"]],
        "maxAnchorDeltaPx": METADATA["maxAnchorDeltaPx"],
        "difference": difference,
        "seaAnimationDurationMs": 5750,
        "seaObservationMs": 2000,
        "decorsChecked": decors_checked,
        "responsiveFormats": formats,
        "realIPhoneTested": False,
        "homeScreenPwaTested": False,
    }
    (OUT / "preuves-visuelles.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
