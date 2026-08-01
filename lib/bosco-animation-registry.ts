import { BoscoPose } from "@/lib/bosco-engine";

export type BoscoAnimationId =
  | "look-sea"
  | "listen"
  | "think"
  | "check-barometer"
  | "check-chart";

export type BoscoAnimationPhase =
  | "idle"
  | "preparing"
  | "rotating"
  | "observing"
  | "returning";

export type BoscoAnimationStep = {
  at: number;
  pose: BoscoPose;
  phase: BoscoAnimationPhase;
  text: string;
};

export type BoscoAnimationDefinition = {
  id: BoscoAnimationId;
  label: string;
  duration: number;
  requiredPoses: BoscoPose[];
  steps: BoscoAnimationStep[];
};

export const BOSCO_ANIMATIONS: Record<
  BoscoAnimationId,
  BoscoAnimationDefinition
> = {
  "look-sea": {
    id: "look-sea",
    label: "Regarde vers la mer",
    duration: 5750,
    requiredPoses: ["listening", "thinking", "sea"],
    steps: [
      {
        at: 0,
        pose: "listening",
        phase: "preparing",
        text: "Attends. Je regarde ce que la Manche prépare.",
      },
      {
        at: 450,
        pose: "thinking",
        phase: "rotating",
        text: "Mmh… le large mérite qu’on vérifie.",
      },
      {
        at: 1275,
        pose: "sea",
        phase: "rotating",
        text: "Je veux voir ça de mes propres yeux.",
      },
      {
        at: 2100,
        pose: "sea",
        phase: "observing",
        text: "Deux secondes. La mer change plus vite qu’un bulletin.",
      },
      {
        at: 4100,
        pose: "sea",
        phase: "returning",
        text: "Encore un instant. Je vérifie que ça tient.",
      },
      {
        at: 4925,
        pose: "thinking",
        phase: "returning",
        text: "Bon. Revenons aux faits.",
      },
    ],
  },
  listen: {
    id: "listen",
    label: "Écoute",
    duration: 2300,
    requiredPoses: ["listening"],
    steps: [
      {
        at: 0,
        pose: "listening",
        phase: "preparing",
        text: "Vas-y, je t’écoute.",
      },
    ],
  },
  think: {
    id: "think",
    label: "Réfléchit",
    duration: 2400,
    requiredPoses: ["thinking"],
    steps: [
      {
        at: 0,
        pose: "thinking",
        phase: "preparing",
        text: "Deux secondes. Je recroise les chiffres.",
      },
    ],
  },
  "check-barometer": {
    id: "check-barometer",
    label: "Consulte le baromètre",
    duration: 2500,
    requiredPoses: ["barometer"],
    steps: [
      {
        at: 0,
        pose: "barometer",
        phase: "preparing",
        text: "Pression, vent, rafales… je vérifie.",
      },
    ],
  },
  "check-chart": {
    id: "check-chart",
    label: "Consulte la carte",
    duration: 2500,
    requiredPoses: ["chart"],
    steps: [
      {
        at: 0,
        pose: "chart",
        phase: "preparing",
        text: "Je vérifie aussi la carte. On ne part pas au hasard.",
      },
    ],
  },
};

export const BOSCO_IDLE_ANIMATIONS: BoscoAnimationId[] = [
  "listen",
  "think",
  "check-barometer",
  "check-chart",
];

export const BOSCO_POSES_USED_BY_ANIMATIONS = [
  ...new Set(
    Object.values(BOSCO_ANIMATIONS).flatMap(
      (animation) => animation.requiredPoses,
    ),
  ),
];
