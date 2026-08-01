#!/usr/bin/env python3
"""Build deterministic Step 7 compositing assets from the validated cutouts."""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public/assets/bosco/cutouts"
OUTPUT_ROOT = ROOT / "public/assets/bosco/compositing"
POSE_DIR = OUTPUT_ROOT / "poses"
MASK_DIR = OUTPUT_ROOT / "masks"
OBJECT_DIR = OUTPUT_ROOT / "objects"
HAND_BEHIND_DIR = OUTPUT_ROOT / "hands-behind"
FINGERS_FRONT_DIR = OUTPUT_ROOT / "fingers-front"
SOURCE_REPAIR_DIR = ROOT / "public/assets/bosco/source-repairs"
METADATA_PATH = OUTPUT_ROOT / "pose-metadata.json"

CANVAS = 1536
ANCHOR = (768, 1252)
PIVOT = (768, 1252)
ASSET_SUFFIX = "-step9-v4"


POSES = [
    {
        "poseId": "resting",
        "label": "Repos",
        "source": "pose-00.webp",
        "translate": [0, 0],
        "duration": 0,
        "loop": True,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "listening",
        "label": "Main tendue",
        "source": "decision-low-sport.webp",
        "translate": [-10, -15],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "thinking",
        "label": "Réfléchit",
        "source": "pose-02.webp",
        "translate": [-5, 0],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "sea",
        "label": "Observe",
        "source": "pose-03.webp",
        "translate": [25, -50],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "barometer",
        "label": "Explique",
        "source": "pose-04.webp",
        "translate": [0, -2],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "chart",
        "label": "Main tasse",
        "source": "pose-06.webp",
        "translate": [-7, 5],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "cup-approach-only",
    },
    {
        "poseId": "preparing",
        "label": "Bras croisés",
        "source": "pose-10.webp",
        "translate": [-7, 1],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "speaking",
        "label": "Parle",
        "source": "pose-07.webp",
        "translate": [-32, -42],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "satisfied",
        "label": "Satisfait",
        "source": "pose-08.webp",
        "translate": [-15, -6],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "worried",
        "label": "Inquiet",
        "source": "pose-09.webp",
        "translate": [-30, 24],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "annoyed",
        "label": "Contrarié",
        "source": "pose-10.webp",
        "translate": [-7, 1],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
    {
        "poseId": "protective",
        "label": "Protecteur",
        "source": "pose-11.webp",
        "translate": [-9, 44],
        "duration": 2100,
        "loop": False,
        "occlusionProfile": "counter-cup-fixed",
    },
]


CUP_REMOVAL_SPECS = {
    # x0, y0, cup body right, y1, handle outer right
    "decision-discouraged.webp": (973, 1120, 1192, 1416, 1283),
    "decision-low-sport.webp": (968, 1080, 1212, 1372, 1396),
    "pose-00.webp": (982, 1075, 1242, 1385, 1437),
    "pose-02.webp": (1015, 1110, 1302, 1463, 1474),
    "pose-03.webp": (1060, 1120, 1320, 1481, 1411),
    "pose-04.webp": (1000, 1100, 1285, 1436, 1383),
    "pose-06.webp": (1020, 1110, 1305, 1463, 1483),
    "pose-07.webp": (980, 1120, 1325, 1457, 1468),
    "pose-08.webp": (950, 1030, 1265, 1411, 1450),
    "pose-09.webp": (1020, 1090, 1325, 1443, 1506),
    "pose-10.webp": (1015, 1160, 1285, 1489, 1381),
    "pose-11.webp": (1000, 1120, 1340, 1536, 1511),
}


def cup_removal_mask(spec: tuple[int, int, int, int, int]) -> Image.Image:
    x0, y0, body_right, y1, handle_right = spec
    scale = 4
    mask = Image.new("L", (CANVAS * scale, CANVAS * scale), 0)
    draw = ImageDraw.Draw(mask)
    body_box = (
        x0 * scale,
        (y0 + 20) * scale,
        body_right * scale,
        y1 * scale,
    )
    draw.rounded_rectangle(body_box, radius=34 * scale, fill=255)
    draw.ellipse(
        (x0 * scale, y0 * scale, body_right * scale, (y0 + 82) * scale),
        fill=255,
    )
    outer = (
        (body_right - 28) * scale,
        (y0 + 55) * scale,
        handle_right * scale,
        (y1 - 38) * scale,
    )
    draw.ellipse(outer, fill=255)
    inner_inset = max(18, (handle_right - body_right) // 3)
    inner = (
        (body_right + inner_inset) * scale,
        (y0 + 92) * scale,
        (handle_right - inner_inset) * scale,
        (y1 - 75) * scale,
    )
    if inner[2] > inner[0] and inner[3] > inner[1]:
        draw.ellipse(inner, fill=0)
    return mask.resize((CANVAS, CANVAS), Image.Resampling.LANCZOS)


def handle_ring_mask(spec: tuple[int, int, int, int, int]) -> Image.Image:
    _, y0, body_right, y1, handle_right = spec
    scale = 4
    mask = Image.new("L", (CANVAS * scale, CANVAS * scale), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse(
        (
            (body_right - 28) * scale,
            (y0 + 55) * scale,
            handle_right * scale,
            (y1 - 38) * scale,
        ),
        fill=255,
    )
    inner_inset = max(18, (handle_right - body_right) // 3)
    draw.ellipse(
        (
            (body_right + inner_inset) * scale,
            (y0 + 92) * scale,
            (handle_right - inner_inset) * scale,
            (y1 - 75) * scale,
        ),
        fill=0,
    )
    return mask.resize((CANVAS, CANVAS), Image.Resampling.LANCZOS)


def remove_small_components(alpha: np.ndarray) -> np.ndarray:
    mask = alpha > 8
    labels, count = ndimage.label(mask)
    if count == 0:
        return alpha
    sizes = np.bincount(labels.ravel())
    keep = sizes >= 32
    keep[0] = False
    cleaned = alpha.copy()
    cleaned[~keep[labels]] = 0
    return cleaned


def keep_character_component(alpha: np.ndarray) -> np.ndarray:
    """Keep only Bosco after the source cup has been cut away.

    The source poses contain Bosco and a cup as one alpha component. Once the
    pose-specific cup silhouette is removed, every surviving detached
    component is an obsolete cup fragment (rim, lettering, base or handle).
    Keeping the largest 8-connected component makes those fragments fail
    closed instead of allowing them to travel with the character.
    """

    visible = alpha > 8
    labels, count = ndimage.label(
        visible,
        structure=ndimage.generate_binary_structure(2, 2),
    )
    if count == 0:
        return np.zeros_like(alpha)
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    character_label = int(np.argmax(sizes))
    cleaned = alpha.copy()
    cleaned[labels != character_label] = 0
    return cleaned


def decontaminate_edges(rgba: np.ndarray) -> np.ndarray:
    alpha = rgba[:, :, 3]
    rgba[alpha < 8, 3] = 0
    rgba[alpha > 247, 3] = 255
    alpha = rgba[:, :, 3]
    opaque = alpha >= 200
    if opaque.any():
        _, indices = ndimage.distance_transform_edt(~opaque, return_indices=True)
        fringe = (alpha > 0) & (alpha < 255)
        nearest_y = indices[0][fringe]
        nearest_x = indices[1][fringe]
        rgba[fringe, :3] = rgba[nearest_y, nearest_x, :3]
    rgba[alpha == 0, :3] = 0
    return rgba


def hand_mask(source_name: str) -> np.ndarray:
    """Select only the original holding hand, never the integrated mug.

    The right hand is already fully drawn in every source pose except the sea
    pose.  Its pixels sit to the right of the mug body.  A pose-local ROI keeps
    gold lettering and the mug body out of the selection; a one-pixel colour
    aware expansion retains the dark painted outline around the fingers.
    """

    # These poses deliberately place the right hand elsewhere (both hands on
    # the counter, pointing at the barometer, or arms crossed).  The tiny skin
    # islands beside their source mugs are not holding hands and must not be
    # promoted into fixed-cup interaction layers.
    if source_name in {"pose-03.webp", "pose-04.webp", "pose-10.webp"}:
        return np.zeros((CANVAS, CANVAS), dtype=bool)

    image = np.array(Image.open(SOURCE_DIR / source_name).convert("RGBA"))
    red = image[:, :, 0].astype(np.int16)
    green = image[:, :, 1].astype(np.int16)
    blue = image[:, :, 2].astype(np.int16)
    alpha = image[:, :, 3]
    _, y0, body_right, y1, handle_right = CUP_REMOVAL_SPECS[source_name]

    roi = np.zeros((CANVAS, CANVAS), dtype=bool)
    roi[max(0, y0 - 12) : min(CANVAS, y1 + 36), max(0, body_right - 12) : min(CANVAS, handle_right + 42)] = True
    skin = (
        roi
        & (alpha > 8)
        & (red > 78)
        & (red > green * 1.055)
        & (green > blue * 1.12)
    )
    labels, count = ndimage.label(
        skin,
        structure=ndimage.generate_binary_structure(2, 2),
    )
    if count:
        sizes = np.bincount(labels.ravel())
        keep = sizes >= 40
        keep[0] = False
        skin = keep[labels]

    expanded = ndimage.binary_dilation(skin, iterations=1)
    painted_outline = (
        expanded
        & roi
        & (alpha > 8)
        & (red > 42)
        & (red > blue * 1.02)
    )
    return skin | painted_outline


def build_hand_layers(
    source_name: str,
    translation: tuple[int, int],
) -> tuple[Image.Image, Image.Image]:
    source = np.array(Image.open(SOURCE_DIR / source_name).convert("RGBA"))
    selected = hand_mask(source_name)
    rgba = np.zeros_like(source)
    rgba[selected] = source[selected]
    rgba = decontaminate_edges(rgba)

    behind = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    behind.alpha_composite(Image.fromarray(rgba, "RGBA"), dest=translation)

    # Only the narrow handle interaction is allowed above the fixed mug.
    front_rgba = rgba.copy()
    _, _, body_right, _, handle_right = CUP_REMOVAL_SPECS[source_name]
    front_keep = np.zeros((CANVAS, CANVAS), dtype=bool)
    front_keep[:, max(0, body_right - 12) : min(CANVAS, handle_right + 42)] = True
    front_rgba[:, :, 3][~front_keep] = 0
    front_rgba = decontaminate_edges(front_rgba)
    front = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    front.alpha_composite(Image.fromarray(front_rgba, "RGBA"), dest=translation)
    return behind, front


def apply_sea_sleeve_repair(
    cleaned: Image.Image,
    translation: tuple[int, int],
) -> Image.Image:
    repair_path = SOURCE_REPAIR_DIR / "sea-sleeve-reconstructed.png"
    if not repair_path.exists():
        raise FileNotFoundError(
            "Missing surgical sea sleeve repair: "
            "public/assets/bosco/source-repairs/sea-sleeve-reconstructed.png"
        )

    repair = Image.open(repair_path).convert("RGBA")
    if repair.size != (640, 640):
        raise ValueError(f"Sea sleeve repair must be 640x640, got {repair.size}")

    repair_rgba = np.array(repair)
    x0, y0, _, y1, handle_right = CUP_REMOVAL_SPECS["pose-03.webp"]
    source_mask = np.zeros((CANVAS, CANVAS), dtype=np.uint8)
    source_mask[max(0, y0 - 60):y1, max(0, x0 - 40):handle_right] = 255
    local_mask = source_mask[950:1536, 900:1536]
    local_mask = np.pad(local_mask, ((0, 54), (0, 4)))
    repair_rgba[:, :, 3] = np.minimum(repair_rgba[:, :, 3], local_mask)
    repair_rgba = decontaminate_edges(repair_rgba)

    repaired = cleaned.copy()
    repaired.alpha_composite(
        Image.fromarray(repair_rgba, "RGBA"),
        dest=(900 + translation[0], 950 + translation[1]),
    )
    return repaired


def clean_pose(source_name: str, translation: tuple[int, int]) -> Image.Image:
    image = Image.open(SOURCE_DIR / source_name).convert("RGBA")
    rgba = np.array(image)
    alpha = rgba[:, :, 3]

    # Each source pose has a different cup position and perspective. The
    # previous implementation incorrectly reused pose-00's mask for all poses,
    # leaving a detached rim, handle and base in the sea pose. Pose-specific
    # removal clears those contaminants. For the sea pose, the anatomy hidden
    # by the source cup is restored immediately below with a surgical sleeve
    # asset derived from the original pose, never with a decor patch.
    removal = cup_removal_mask(CUP_REMOVAL_SPECS[source_name])
    removal_alpha = np.array(removal)
    alpha[removal_alpha > 0] = 0
    alpha = keep_character_component(alpha)
    rgba[:, :, 3] = alpha
    rgba = decontaminate_edges(rgba)

    cleaned = Image.fromarray(rgba, "RGBA")
    translated = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    translated.alpha_composite(cleaned, dest=translation)
    if source_name == "pose-03.webp":
        translated = apply_sea_sleeve_repair(translated, translation)

    translated_rgba = np.array(translated)
    translated_rgba[:, :, 3] = keep_character_component(
        translated_rgba[:, :, 3]
    )
    translated_rgba = decontaminate_edges(translated_rgba)
    return Image.fromarray(translated_rgba, "RGBA")


def build_cup() -> None:
    source = Image.open(SOURCE_DIR / "pose-00.webp").convert("RGBA")
    keep = np.array(cup_removal_mask(CUP_REMOVAL_SPECS["pose-00.webp"]))
    rgba = np.array(source)
    alpha = np.minimum(rgba[:, :, 3], keep)
    alpha[:, 1242:] = 0
    alpha = remove_small_components(alpha)
    rgba[:, :, 3] = alpha
    rgba = decontaminate_edges(rgba)
    isolated = Image.fromarray(rgba, "RGBA")

    handle_source = Image.open(SOURCE_DIR / "pose-03.webp").convert("RGBA")
    handle_rgba = np.array(handle_source)
    handle_alpha = np.minimum(
        handle_rgba[:, :, 3],
        np.array(handle_ring_mask(CUP_REMOVAL_SPECS["pose-03.webp"])),
    )
    handle_alpha = remove_small_components(handle_alpha)
    handle_rgba[:, :, 3] = handle_alpha
    handle_rgba = decontaminate_edges(handle_rgba)
    handle = Image.fromarray(handle_rgba, "RGBA").crop(
        (1292, 1175, 1411, 1443)
    )
    handle = handle.resize((50, 148), Image.Resampling.LANCZOS)

    output = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    output.alpha_composite(isolated)
    output.alpha_composite(handle, dest=(1242, 1142))
    output.save(
        OBJECT_DIR / f"polders-cup{ASSET_SUFFIX}.png",
        optimize=True,
    )


def build_occlusion_mask() -> None:
    scale = 4
    mask = Image.new("L", (CANVAS * scale, CANVAS * scale), 0)
    draw = ImageDraw.Draw(mask)
    boundary = [
        (0, 1248),
        (64, 1246),
        (128, 1249),
        (192, 1248),
        (256, 1250),
        (384, 1251),
        (512, 1250),
        (640, 1253),
        (768, 1254),
        (896, 1252),
        (1024, 1250),
        (1152, 1251),
        (1280, 1250),
        (1408, 1251),
        (1536, 1248),
        (1536, 1536),
        (0, 1536),
    ]
    draw.polygon([(x * scale, y * scale) for x, y in boundary], fill=255)
    draw.ellipse((0, 1188 * scale, 204 * scale, 1448 * scale), fill=255)
    draw.ellipse((43 * scale, 1160 * scale, 142 * scale, 1260 * scale), fill=255)
    mask = mask.resize((CANVAS, CANVAS), Image.Resampling.LANCZOS)
    rgba = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    rgba.putalpha(mask)
    rgba.save(
        MASK_DIR / f"occlusion-canonical{ASSET_SUFFIX}.png",
        optimize=True,
    )


def visible_bounds(image: Image.Image) -> list[int]:
    bbox = image.getchannel("A").getbbox()
    return list(bbox) if bbox else [0, 0, 0, 0]


def main() -> None:
    for directory in (
        POSE_DIR,
        MASK_DIR,
        OBJECT_DIR,
        HAND_BEHIND_DIR,
        FINGERS_FRONT_DIR,
    ):
        directory.mkdir(parents=True, exist_ok=True)

    metadata = {
        "version": "bosco-step9-v4",
        "canvasWidth": CANVAS,
        "canvasHeight": CANVAS,
        "anchorX": ANCHOR[0],
        "anchorY": ANCHOR[1],
        "pivotX": PIVOT[0],
        "pivotY": PIVOT[1],
        "maxAnchorDeltaPx": 0,
        "foregroundMask": (
            "/assets/bosco/compositing/masks/"
            f"occlusion-canonical{ASSET_SUFFIX}.png"
        ),
        "fixedObjects": {
            "poldersCup": (
                "/assets/bosco/compositing/objects/"
                f"polders-cup{ASSET_SUFFIX}.png"
            )
        },
        "poses": [],
    }
    all_pose_ids = [pose["poseId"] for pose in POSES]

    for pose in POSES:
        translation = tuple(pose["translate"])
        image = clean_pose(pose["source"], translation)
        asset_name = f'{pose["poseId"]}{ASSET_SUFFIX}.png'
        image.save(POSE_DIR / asset_name, optimize=True)
        hand_behind, fingers_front = build_hand_layers(
            pose["source"],
            translation,
        )
        hand_asset_name = f'{pose["poseId"]}{ASSET_SUFFIX}.png'
        hand_behind.save(HAND_BEHIND_DIR / hand_asset_name, optimize=True)
        fingers_front.save(FINGERS_FRONT_DIR / hand_asset_name, optimize=True)
        metadata["poses"].append(
            {
                "poseId": pose["poseId"],
                "label": pose["label"],
                "sourceAsset": f'/assets/bosco/cutouts/{pose["source"]}',
                "assetPath": f"/assets/bosco/compositing/poses/{asset_name}",
                "handBehindPath": (
                    "/assets/bosco/compositing/hands-behind/"
                    f"{hand_asset_name}"
                ),
                "fingersFrontPath": (
                    "/assets/bosco/compositing/fingers-front/"
                    f"{hand_asset_name}"
                ),
                "canvasWidth": CANVAS,
                "canvasHeight": CANVAS,
                "anchorX": ANCHOR[0],
                "anchorY": ANCHOR[1],
                "pivotX": PIVOT[0],
                "pivotY": PIVOT[1],
                "normalizationTranslation": list(translation),
                "scale": 1,
                "visibleBounds": visible_bounds(image),
                "occlusionProfile": pose["occlusionProfile"],
                "duration": pose["duration"],
                "loop": pose["loop"],
                "productionAllowed": True,
                "validationStatus": "validated",
                "nextPose": all_pose_ids,
            }
        )

    build_cup()
    build_occlusion_mask()
    METADATA_PATH.write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
