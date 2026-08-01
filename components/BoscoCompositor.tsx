"use client";
/* eslint-disable @next/next/no-img-element -- fixed 1536² layers require exact DOM and mask control */

import { useEffect, useRef, useState } from "react";

export type BoscoLabView =
  | "final"
  | "decor"
  | "bosco"
  | "alpha"
  | "mask"
  | "foreground"
  | "cup"
  | "overlay"
  | "difference"
  | "anchors";
export type BoscoLabBackground =
  | "decor"
  | "checker"
  | "white"
  | "black"
  | "red"
  | "green";

type BoscoCompositorProps = {
  decorSrc: string;
  poseSrc: string;
  handBehindSrc: string;
  fingersFrontSrc: string;
  alt: string;
  needleAngle: number;
  radioHit: boolean;
  emotion: string;
  labEnabled?: boolean;
  labView?: BoscoLabView;
  labBackground?: BoscoLabBackground;
  seaAnimationPhase?: string;
};

const OCCLUSION_MASK =
  "/assets/bosco/compositing/masks/occlusion-canonical-step9-v4.png";
const POLDERS_CUP =
  "/assets/bosco/compositing/objects/polders-cup-step9-v4.png";

type DecodedLayers = {
  pose: string;
  handBehind: string;
  fingersFront: string;
};

function decodeImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    const supportsDecode = typeof image.decode === "function";
    image.onload = () => {
      if (!supportsDecode) resolve(image);
    };
    image.onerror = () => reject(new Error(`Unable to decode ${src}`));
    image.src = src;
    if (supportsDecode) {
      image.decode().then(() => resolve(image)).catch(reject);
    }
  });
}

export function BoscoCompositor({
  decorSrc,
  poseSrc,
  handBehindSrc,
  fingersFrontSrc,
  alt,
  needleAngle,
  radioHit,
  emotion,
  labEnabled = false,
  labView = "final",
  labBackground = "decor",
  seaAnimationPhase = "idle",
}: BoscoCompositorProps) {
  const [displayedDecor, setDisplayedDecor] = useState(decorSrc);
  const [displayedLayers, setDisplayedLayers] = useState<DecodedLayers>({
    pose: poseSrc,
    handBehind: handBehindSrc,
    fingersFront: fingersFrontSrc,
  });
  const activePoseTransition = useRef(0);
  const requestedDecor = useRef(decorSrc);

  useEffect(() => {
    requestedDecor.current = decorSrc;
    let cancelled = false;
    decodeImage(decorSrc).then(() => {
      if (!cancelled && requestedDecor.current === decorSrc) {
        setDisplayedDecor(decorSrc);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [decorSrc]);

  useEffect(() => {
    const transitionId = ++activePoseTransition.current;
    let cancelled = false;
    let swapFrame: number | null = null;
    const nextLayers: DecodedLayers = {
      pose: poseSrc,
      handBehind: handBehindSrc,
      fingersFront: fingersFrontSrc,
    };

    void Promise.all([
      decodeImage(poseSrc),
      decodeImage(handBehindSrc),
      decodeImage(fingersFrontSrc),
    ])
      .then((decodedResources) => {
        if (cancelled || activePoseTransition.current !== transitionId) return;
        swapFrame = window.requestAnimationFrame(() => {
          if (cancelled || activePoseTransition.current !== transitionId) return;
          // decodedResources intentionally stays in this closure until the
          // visible layers have been replaced in one React render.
          void decodedResources;
          setDisplayedLayers(nextLayers);
        });
      })
      .catch((error) => {
        if (cancelled || activePoseTransition.current !== transitionId) return;
        console.error(
          "[Bosco animation] Échange de pose annulé, dernière pose conservée",
          error,
        );
      });

    return () => {
      cancelled = true;
      if (swapFrame !== null) window.cancelAnimationFrame(swapFrame);
    };
  }, [
    fingersFrontSrc,
    handBehindSrc,
    poseSrc,
  ]);

  const technicalBackground =
    labEnabled && labBackground !== "decor" ? labBackground : undefined;

  return (
    <div
      className={[
        "scene",
        labEnabled ? "scene-lab" : "",
        labEnabled ? `scene-lab-view-${labView}` : "",
        technicalBackground
          ? `scene-lab-background-${technicalBackground}`
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-camera-transform="none"
      data-compositing="bosco-step9-v4"
      data-pose-visible="true"
      data-pose-swap="decoded-atomic"
      data-pose-transition-ms="0"
      data-visible-pose-src={displayedLayers.pose}
      data-sea-animation-phase={seaAnimationPhase}
    >
      <img
        className="scene-layer scene-decor-back"
        src={displayedDecor}
        alt={`Le Tourbillon — décor contextuel`}
        fetchPriority="high"
        decoding="async"
        width="1536"
        height="1536"
      />

      <img
        className="scene-layer scene-bosco scene-pose-atomic"
        src={displayedLayers.pose}
        alt={alt}
        decoding="async"
        width="1536"
        height="1536"
        data-bosco-element="unique"
      />

      <img
        className="scene-layer scene-hand-behind scene-pose-atomic"
        src={displayedLayers.handBehind}
        alt=""
        aria-hidden="true"
        decoding="async"
        width="1536"
        height="1536"
        data-hand-layer="behind-handle"
      />

      <img
        className="scene-layer scene-fixed-object scene-polders-cup"
        src={POLDERS_CUP}
        alt=""
        aria-hidden="true"
        decoding="async"
        width="1536"
        height="1536"
        data-fixed-object="polders-cup"
      />

      <img
        className="scene-layer scene-fingers-front scene-pose-atomic"
        src={displayedLayers.fingersFront}
        alt=""
        aria-hidden="true"
        decoding="async"
        width="1536"
        height="1536"
        data-hand-layer="fingers-front-handle"
      />

      <img
        className="scene-layer scene-decor-foreground"
        src={displayedDecor}
        alt=""
        aria-hidden="true"
        decoding="async"
        width="1536"
        height="1536"
        style={
          {
            "--occlusion-mask": `url("${OCCLUSION_MASK}")`,
          } as React.CSSProperties
        }
        data-occlusion-mask="canonical"
      />

      <div className={`radio-led ${radioHit ? "radio-hit" : ""}`} />
      <div
        className="barometer-needle"
        style={
          {
            "--needle": `${needleAngle}deg`,
          } as React.CSSProperties
        }
      />
      <span className="state-pill">{emotion}</span>

      {labEnabled && labView === "mask" && (
        <div
          className="scene-debug-mask"
          style={
            {
              "--occlusion-mask": `url("${OCCLUSION_MASK}")`,
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
      )}
      {labEnabled && labView === "anchors" && (
        <div className="scene-debug-anchors" aria-hidden="true">
          <span className="scene-debug-anchor" />
          <span className="scene-debug-bounds" />
        </div>
      )}
    </div>
  );
}
