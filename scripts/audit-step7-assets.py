#!/usr/bin/env python3
"""Fail when Step 7 pose assets violate the canonical production contract."""

from __future__ import annotations

import json
import importlib.util
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


ROOT = Path(__file__).resolve().parents[1]
COMPOSITING = ROOT / "public/assets/bosco/compositing"
METADATA = json.loads((COMPOSITING / "pose-metadata.json").read_text())
POSES = METADATA["poses"]
ERRORS: list[str] = []
sys.dont_write_bytecode = True

generator_spec = importlib.util.spec_from_file_location(
    "bosco_compositing_generator",
    ROOT / "scripts/build-step7-compositing.py",
)
if generator_spec is None or generator_spec.loader is None:
    raise RuntimeError("unable to load compositing generator")
generator = importlib.util.module_from_spec(generator_spec)
generator_spec.loader.exec_module(generator)


if len(POSES) != 12:
    ERRORS.append(f"expected 12 poses, found {len(POSES)}")

anchors = {
    (
        pose["canvasWidth"],
        pose["canvasHeight"],
        pose["anchorX"],
        pose["anchorY"],
        pose["pivotX"],
        pose["pivotY"],
        pose["scale"],
    )
    for pose in POSES
}
if anchors != {(1536, 1536, 768, 1252, 768, 1252, 1)}:
    ERRORS.append(f"canonical anchors differ: {sorted(anchors)}")

disabled_poses = [
    pose["poseId"] for pose in POSES if pose.get("productionAllowed") is False
]
if disabled_poses:
    ERRORS.append(f"all poses must be independently available, disabled: {disabled_poses}")
sea_metadata = next((pose for pose in POSES if pose["poseId"] == "sea"), None)
if (
    sea_metadata is None
    or sea_metadata.get("validationStatus") != "validated"
):
    ERRORS.append("sea pose is not marked as surgically repaired and validated")

for pose in POSES:
    path = ROOT / "public" / pose["assetPath"].removeprefix("/")
    if not path.exists():
        ERRORS.append(f'{pose["poseId"]}: missing {path}')
        continue
    image = Image.open(path).convert("RGBA")
    if image.size != (1536, 1536):
        ERRORS.append(f'{pose["poseId"]}: dimensions {image.size}')
        continue
    alpha = np.asarray(image)[:, :, 3]
    if not np.any(alpha):
        ERRORS.append(f'{pose["poseId"]}: empty alpha')
        continue
    if np.all(alpha > 0):
        ERRORS.append(f'{pose["poseId"]}: full opaque rectangle')
    labels, component_count = ndimage.label(
        alpha > 8,
        structure=ndimage.generate_binary_structure(2, 2),
    )
    if component_count != 1:
        sizes = sorted(
            (int(size) for size in np.bincount(labels.ravel())[1:]),
            reverse=True,
        )
        ERRORS.append(
            f'{pose["poseId"]}: {component_count} alpha components {sizes[:6]}'
        )
    source_name = Path(pose["sourceAsset"]).name
    source_removal = generator.cup_removal_mask(
        generator.CUP_REMOVAL_SPECS[source_name]
    )
    translated_removal = Image.new("RGBA", (1536, 1536), (0, 0, 0, 0))
    removal_rgba = Image.new("RGBA", (1536, 1536), (0, 0, 0, 0))
    removal_rgba.putalpha(source_removal)
    translated_removal.alpha_composite(
        removal_rgba,
        dest=tuple(pose["normalizationTranslation"]),
    )
    removal_alpha = np.asarray(translated_removal)[:, :, 3]
    residual_cup_pixels = int(
        np.count_nonzero((alpha > 0) & (removal_alpha > 0))
    )
    if residual_cup_pixels and pose["poseId"] != "sea":
        ERRORS.append(
            f'{pose["poseId"]}: {residual_cup_pixels} pixels remain in the source cup silhouette'
        )
    if pose["poseId"] == "sea":
        rgba = np.asarray(image)
        repaired = (alpha > 0) & (removal_alpha > 0)
        repaired_rgb = rgba[:, :, :3][repaired]
        if repaired_rgb.size == 0:
            ERRORS.append("sea: reconstructed sleeve pixels are missing")
        else:
            cup_gold = (
                (repaired_rgb[:, 0] > 105)
                & (repaired_rgb[:, 1] > 55)
                & (repaired_rgb[:, 2] < 52)
                & (repaired_rgb[:, 0] > repaired_rgb[:, 1] * 1.35)
            )
            if int(np.count_nonzero(cup_gold)) > 32:
                ERRORS.append("sea: gold cup-like pixels remain in repaired sleeve")

    holding_hand_poses = {
        "resting",
        "listening",
        "thinking",
        "chart",
        "speaking",
        "satisfied",
        "worried",
        "protective",
    }
    has_holding_hand = pose["poseId"] in holding_hand_poses
    hand_path = ROOT / "public" / pose["handBehindPath"].removeprefix("/")
    fingers_path = ROOT / "public" / pose["fingersFrontPath"].removeprefix("/")
    for label, layer_path in (
        ("hand-behind", hand_path),
        ("fingers-front", fingers_path),
    ):
        if not layer_path.exists():
            ERRORS.append(f'{pose["poseId"]}: missing {label} layer')
            continue
        layer = Image.open(layer_path).convert("RGBA")
        if layer.size != (1536, 1536):
            ERRORS.append(f'{pose["poseId"]}: {label} dimensions {layer.size}')
            continue
        layer_alpha = np.asarray(layer)[:, :, 3]
        pixel_count = int(np.count_nonzero(layer_alpha > 8))
        if has_holding_hand and pixel_count < 1200:
            ERRORS.append(f'{pose["poseId"]}: {label} is not anatomically readable')
        if not has_holding_hand and pixel_count:
            ERRORS.append(
                f'{pose["poseId"]}: unexpected fixed-cup {label} pixels'
            )

    if has_holding_hand and hand_path.exists():
        hand_alpha = np.asarray(
            Image.open(hand_path).convert("RGBA")
        )[:, :, 3] > 8
        body_alpha = alpha > 8
        near_body = ndimage.binary_dilation(body_alpha, iterations=18)
        if not np.any(near_body & hand_alpha):
            ERRORS.append(f'{pose["poseId"]}: sleeve-to-wrist alpha continuity lost')
    top = alpha[:4, :]
    left = alpha[:1248, :4]
    right = alpha[:1248, -4:]
    if np.any(top) or np.any(left) or np.any(right):
        ERRORS.append(f'{pose["poseId"]}: opaque pixels outside authorized body zone')
    corners = np.concatenate(
        [
            alpha[:32, :32].ravel(),
            alpha[:32, -32:].ravel(),
            alpha[-32:, :32].ravel(),
            alpha[-32:, -32:].ravel(),
        ]
    )
    if np.count_nonzero(corners) > 32 * 32:
        ERRORS.append(f'{pose["poseId"]}: rectangular corner contamination')

mask = Image.open(
    ROOT / "public" / METADATA["foregroundMask"].removeprefix("/")
).convert("RGBA")
if mask.size != (1536, 1536) or not mask.getchannel("A").getbbox():
    ERRORS.append("canonical occlusion mask is invalid")

cup = Image.open(
    ROOT
    / "public"
    / METADATA["fixedObjects"]["poldersCup"].removeprefix("/")
).convert("RGBA")
if cup.size != (1536, 1536) or not cup.getchannel("A").getbbox():
    ERRORS.append("POLDERS cup asset is invalid")
cup_alpha = np.asarray(cup)[:, :, 3]
cup_rgb = np.asarray(cup)[:, :, :3]
cup_bbox = cup.getchannel("A").getbbox()
if cup_bbox is None or cup_bbox[0] < 960 or cup_bbox[1] < 1040:
    ERRORS.append(f"POLDERS cup has unexpected opaque bounds: {cup_bbox}")
if np.count_nonzero(cup_alpha[:1040]) or np.count_nonzero(cup_alpha[:, :960]):
    ERRORS.append("POLDERS cup has opaque pixels outside the local interaction zone")
cup_labels, cup_components = ndimage.label(
    cup_alpha > 8,
    structure=ndimage.generate_binary_structure(2, 2),
)
if cup_components != 1:
    ERRORS.append(f"POLDERS cup has {cup_components} alpha components")
if np.any(cup_rgb[cup_alpha == 0]):
    ERRORS.append("POLDERS cup stores RGB contamination under transparent pixels")

mask_rgba = np.asarray(mask)
if np.any(mask_rgba[:, :, :3]):
    ERRORS.append("canonical mask contains color data")

result = {
    "poses": len(POSES),
    "canvas": [1536, 1536],
    "anchor": [768, 1252],
    "maxAnchorDeltaPx": 0,
    "mask": "present",
    "cup": "present",
    "disabledPoses": disabled_poses,
    "errors": ERRORS,
}
print(json.dumps(result, ensure_ascii=False))
sys.exit(1 if ERRORS else 0)
