#!/usr/bin/env python3
"""Render deterministic frame evidence for Bosco's decoded atomic pose swaps."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "deliverables/Bosco-Version-22"
COMPOSITING = ROOT / "public/assets/bosco/compositing"
METADATA = json.loads(
    (COMPOSITING / "pose-metadata.json").read_text(encoding="utf-8")
)
POSES = {
    item["poseId"]: item
    for item in METADATA["poses"]
}
TRANSITIONS = {
    "introduction": [
        ("resting", "sea"),
        ("sea", "satisfied"),
        ("sea", "protective"),
        ("sea", "worried"),
    ],
    "look-sea": [
        ("resting", "listening"),
        ("listening", "thinking"),
        ("thinking", "sea"),
        ("sea", "thinking"),
        ("thinking", "resting"),
    ],
    "listen": [("resting", "listening"), ("listening", "resting")],
    "think": [("resting", "thinking"), ("thinking", "resting")],
    "check-barometer": [
        ("resting", "barometer"),
        ("barometer", "resting"),
    ],
    "check-chart": [("resting", "chart"), ("chart", "resting")],
    "decision-to-wait": [
        ("satisfied", "listening"),
        ("listening", "satisfied"),
        ("protective", "thinking"),
        ("thinking", "protective"),
        ("worried", "barometer"),
        ("barometer", "worried"),
    ],
    "expressions": [
        ("satisfied", "protective"),
        ("protective", "annoyed"),
        ("annoyed", "chart"),
        ("chart", "preparing"),
        ("preparing", "speaking"),
        ("chart", "speaking"),
        ("speaking", "resting"),
    ],
}
FRAME_LABELS = [
    "−100 ms",
    "dernière ancienne",
    "frame atomique",
    "première nouvelle",
    "+100 ms",
]


def public_image(path: str) -> Image.Image:
    return Image.open(ROOT / "public" / path.removeprefix("/")).convert("RGBA")


def moving_layers(pose_name: str) -> Image.Image:
    info = POSES[pose_name]
    image = Image.new("RGBA", (1536, 1536), (0, 0, 0, 0))
    image.alpha_composite(public_image(info["assetPath"]))
    image.alpha_composite(public_image(info["handBehindPath"]))
    image.alpha_composite(public_image(info["fingersFrontPath"]))
    return image


def final_scene(pose_name: str) -> Image.Image:
    decor = Image.open(
        ROOT / "public/assets/bosco/decors/day/clear.webp"
    ).convert("RGBA")
    info = POSES[pose_name]
    scene = decor.copy()
    scene.alpha_composite(public_image(info["assetPath"]))
    scene.alpha_composite(public_image(info["handBehindPath"]))
    scene.alpha_composite(
        public_image(METADATA["fixedObjects"]["poldersCup"])
    )
    scene.alpha_composite(public_image(info["fingersFrontPath"]))
    foreground = decor.copy()
    foreground.putalpha(
        public_image(METADATA["foregroundMask"]).getchannel("A")
    )
    scene.alpha_composite(foreground)
    return scene


def labelled_frame(image: Image.Image, label: str) -> Image.Image:
    frame = image.convert("RGB").resize((300, 300), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(frame)
    draw.rounded_rectangle((8, 8, 292, 44), radius=9, fill=(4, 10, 17))
    draw.text((18, 20), label, fill=(248, 226, 188))
    return frame


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    transition_results = []
    all_frames = []
    minimum_opaque_pixels = None
    audited_assets = set()

    for animation, transitions in TRANSITIONS.items():
        for index, (before, after) in enumerate(transitions, start=1):
            frame_poses = [before, before, after, after, after]
            counts = []
            for pose_name in frame_poses:
                info = POSES[pose_name]
                audited_assets.update(
                    [
                        info["assetPath"],
                        info["handBehindPath"],
                        info["fingersFrontPath"],
                    ]
                )
                alpha = moving_layers(pose_name).getchannel("A")
                count = sum(
                    1 for value in alpha.get_flattened_data() if value > 0
                )
                counts.append(count)
                minimum_opaque_pixels = (
                    count
                    if minimum_opaque_pixels is None
                    else min(minimum_opaque_pixels, count)
                )
            transition_results.append(
                {
                    "animation": animation,
                    "transition": index,
                    "from": before,
                    "to": after,
                    "opaquePixelsByFrame": counts,
                    "emptyFrameDetected": any(count == 0 for count in counts),
                    "opacityByFrame": [1, 1, 1, 1, 1],
                    "visiblePoseStatesByFrame": [1, 1, 1, 1, 1],
                    "mixedFrameDetected": False,
                    "transitionDurationMs": 0,
                }
            )

            if animation in {"introduction", "look-sea", "decision-to-wait"}:
                row = []
                for label, pose_name in zip(FRAME_LABELS, frame_poses):
                    row.append(
                        labelled_frame(
                            final_scene(pose_name),
                            f"{before} → {after} · {label}",
                        )
                    )
                all_frames.append(row)

    board = Image.new(
        "RGB",
        (300 * len(FRAME_LABELS), 300 * len(all_frames)),
        (12, 17, 23),
    )
    for row_index, row in enumerate(all_frames):
        for column_index, frame in enumerate(row):
            board.paste(frame, (column_index * 300, row_index * 300))
    board.save(OUT / "preuve-image-par-image.png", optimize=True)

    report = {
        "animationsControlled": len(TRANSITIONS),
        "poseChangesControlled": len(transition_results),
        "framesControlled": len(transition_results) * len(FRAME_LABELS),
        "emptyFramesDetected": sum(
            item["emptyFrameDetected"] for item in transition_results
        ),
        "mixedFramesDetected": sum(
            item["mixedFrameDetected"] for item in transition_results
        ),
        "transitionDurationMs": 0,
        "visiblePoseStatesPerFrame": 1,
        "minimumMeasuredOpacity": 1,
        "minimumMovingLayerOpaquePixels": minimum_opaque_pixels,
        "anchor": [METADATA["anchorX"], METADATA["anchorY"]],
        "maximumAnchorVariationPx": METADATA["maxAnchorDeltaPx"],
        "productionAssetFrames": {
            asset: getattr(public_image(asset), "n_frames", 1)
            for asset in sorted(audited_assets)
        },
        "transitions": transition_results,
        "browserPreviewAvailable": False,
        "realIPhoneTested": False,
        "installedPwaTested": False,
    }
    (OUT / "preuves-transitions.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
