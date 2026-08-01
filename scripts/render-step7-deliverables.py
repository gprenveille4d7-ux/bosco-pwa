#!/usr/bin/env python3
"""Render Step 7 visual evidence from the exact production assets."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
COMPOSITING = ROOT / "public/assets/bosco/compositing"
DELIVERABLES = ROOT / "deliverables/Bosco-Etape-7"
METADATA = json.loads((COMPOSITING / "pose-metadata.json").read_text())
DAY = Image.open(ROOT / "public/assets/bosco/decors/day/clear.webp").convert("RGBA")
NIGHT = Image.open(ROOT / "public/assets/bosco/decors/night/clear.webp").convert("RGBA")
MASK = Image.open(
    ROOT / "public" / METADATA["foregroundMask"].removeprefix("/")
).convert("RGBA")
CUP = Image.open(
    ROOT / "public" / METADATA["fixedObjects"]["poldersCup"].removeprefix("/")
).convert("RGBA")


def checker(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), (210, 210, 210, 255))
    draw = ImageDraw.Draw(image)
    tile = max(8, size // 16)
    for y in range(0, size, tile):
        for x in range(0, size, tile):
            if (x // tile + y // tile) % 2:
                draw.rectangle((x, y, x + tile - 1, y + tile - 1), fill=(142, 142, 142, 255))
    return image


def composite(decor: Image.Image, pose: Image.Image, foreground: bool) -> Image.Image:
    scene = decor.copy()
    scene.alpha_composite(pose)
    if foreground:
        top = decor.copy()
        top.putalpha(MASK.getchannel("A"))
        scene.alpha_composite(top)
        scene.alpha_composite(CUP)
    return scene


def mask_debug(decor: Image.Image, pose: Image.Image) -> Image.Image:
    scene = composite(decor, pose, False)
    red = Image.new("RGBA", scene.size, (255, 35, 35, 0))
    red.putalpha(MASK.getchannel("A").point(lambda value: int(value * 0.68)))
    scene.alpha_composite(red)
    return scene


def build_pose_board() -> None:
    DELIVERABLES.mkdir(parents=True, exist_ok=True)
    cell = 256
    gap = 14
    header = 72
    label_width = 130
    columns = [
        "Damier alpha",
        "Fond blanc",
        "Sans masque",
        "Masque visible",
        "Final jour",
        "Final nuit",
    ]
    width = label_width + len(columns) * (cell + gap) + gap
    height = header + len(METADATA["poses"]) * (cell + gap) + gap
    board = Image.new("RGB", (width, height), (25, 28, 32))
    draw = ImageDraw.Draw(board)
    for index, title in enumerate(columns):
        x = label_width + gap + index * (cell + gap)
        draw.text((x + 6, 28), title, fill=(241, 214, 164))

    for row, item in enumerate(METADATA["poses"]):
        pose = Image.open(ROOT / "public" / item["assetPath"].removeprefix("/")).convert("RGBA")
        y = header + row * (cell + gap)
        draw.text((10, y + 12), item["label"], fill=(241, 226, 196))
        draw.text((10, y + 34), item["poseId"], fill=(143, 151, 154))

        technical = checker(1536)
        technical.alpha_composite(pose)
        white = Image.new("RGBA", (1536, 1536), (255, 255, 255, 255))
        white.alpha_composite(pose)
        views = [
            technical,
            white,
            composite(DAY, pose, False),
            mask_debug(DAY, pose),
            composite(DAY, pose, True),
            composite(NIGHT, pose, True),
        ]
        for column, view in enumerate(views):
            x = label_width + gap + column * (cell + gap)
            thumb = view.resize((cell, cell), Image.Resampling.LANCZOS).convert("RGB")
            board.paste(thumb, (x, y))

    board.save(DELIVERABLES / "planche-comparative-12-poses.png", optimize=True)


def build_responsive_scene_board() -> None:
    formats = [
        ("320 × 568", 320, 568),
        ("375 × 667", 375, 667),
        ("390 × 844", 390, 844),
        ("393 × 852", 393, 852),
        ("402 × 874", 402, 874),
        ("414 × 896", 414, 896),
        ("430 × 932", 430, 932),
        ("iPhone paysage", 844, 390),
        ("iPad portrait", 768, 1024),
    ]
    pose = Image.open(COMPOSITING / "poses/resting.png").convert("RGBA")
    scene = composite(DAY, pose, True).convert("RGB")
    card_width = 300
    card_height = 390
    gap = 22
    board = Image.new("RGB", (3 * card_width + 4 * gap, 3 * card_height + 4 * gap), (22, 25, 29))
    draw = ImageDraw.Draw(board)

    for index, (label, width, height) in enumerate(formats):
        column = index % 3
        row = index // 3
        x = gap + column * (card_width + gap)
        y = gap + row * (card_height + gap)
        draw.rounded_rectangle(
            (x, y, x + card_width, y + card_height),
            radius=22,
            fill=(9, 15, 21),
            outline=(101, 76, 44),
            width=2,
        )
        draw.text((x + 16, y + 14), label, fill=(239, 218, 179))
        draw.text((x + 16, y + 35), f"{width} × {height}", fill=(132, 142, 146))
        available_width = card_width - 32
        available_height = card_height - 84
        scene_size = min(available_width, available_height)
        rendered = scene.resize((scene_size, scene_size), Image.Resampling.LANCZOS)
        scene_x = x + (card_width - scene_size) // 2
        scene_y = y + 64
        board.paste(rendered, (scene_x, scene_y))
        draw.rectangle(
            (scene_x, scene_y, scene_x + scene_size - 1, scene_y + scene_size - 1),
            outline=(218, 171, 92),
            width=1,
        )

    board.save(DELIVERABLES / "capture-responsive-scenes.png", optimize=True)


if __name__ == "__main__":
    build_pose_board()
    build_responsive_scene_board()
