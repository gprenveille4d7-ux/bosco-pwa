"use client";
/* eslint-disable @next/next/no-img-element -- pre-sized local WebP frames swap without layout shift */

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BoscoCompositor,
  BoscoLabBackground,
  BoscoLabView
} from "@/components/BoscoCompositor";
import { BoscoHomeCarousel } from "@/components/BoscoHomeCarousel";
import homeStyles from "@/components/BoscoHomeCarousel.module.css";
import { MarineDashboard } from "@/components/MarineDashboard";
import { NauticalMapScreen } from "@/components/NauticalMapScreen";
import { SquareScreen } from "@/components/SquareScreen";
import { AppIcon } from "@/components/AppIcon";
import type { ManchePort } from "@/data/manche-ports";
import { MANCHE_PORTS } from "@/data/manche-ports";
import {
  createV26PortVisit,
  moveV26Visit,
  nextBoscoVisitOrdinal,
  type V26PortVisit,
} from "@/data/narrative-v26";
import { useNauticalContext } from "@/hooks/useNauticalContext";
import shellStyles from "@/components/BoscoShellExtensions.module.css";
import { useMarineNavigation } from "@/lib/marine-navigation";
import {
  MarineDashboardData,
  currentWeather,
  nearestSea,
  nearestWeather,
} from "@/lib/marine-data";
import {
  interpolateHeight,
  tideTrendAt,
} from "@/lib/marine-math.mjs";
import {
  BOSCO_ANIMATIONS,
  BOSCO_IDLE_ANIMATIONS,
  BoscoAnimationId,
  BoscoAnimationPhase,
} from "@/lib/bosco-animation-registry";
import {
  BoscoDecision,
  BoscoProfile,
  BoscoPose,
  BoscoResult,
  BoscoWeatherInput,
  evaluateBosco
} from "@/lib/bosco-engine";
import {
  BOSCO_DIALOGUE_HISTORY_KEY,
  BOSCO_DIALOGUE_HISTORY_LIMIT,
  BoscoDialogue,
  BoscoDialogueDebug,
  BoscoDialogueHistoryEntry,
  boscoDialogueMeta,
  buildBoscoDialogue,
  dialogueAnalysisFingerprint,
  parseDialogueHistory,
  toDialogueHistoryEntry,
} from "@/lib/bosco-dialogue-engine";
import {
  BOSCO_INTRO_SESSION_KEY,
  BoscoIntroState,
  boscoGreeting,
  boscoIntroStateAt,
  canAdvanceBoscoIntro,
} from "@/lib/bosco-intro-machine";
import {
  BoscoAmbientSoundscape,
  maybeNotifyBosco,
  requestBoscoNotificationPermission
} from "@/lib/bosco-experience";
import {
  WEATHER_FAMILIES,
  WEATHER_REPRESENTATIVE_WMO,
  WeatherFamily,
  TimeOfDay,
  classifyWmoWeather,
  contextKey,
  decisionPoseAsset,
  decorAsset,
  fingersFrontForPoseAsset,
  fingersFrontAsset,
  handBehindForPoseAsset,
  handBehindAsset,
  localTimeOfDay,
  poseAsset
} from "@/lib/bosco-visual-context";

type Weather = WeatherFamily;
type Daytime = TimeOfDay;
const PROFILE_KEY = "bosco:user-profile:v4";
const MEMORY_KEY = "bosco:memory:v4";
const DIALOGUE_KEY = "bosco:dialogue-history:v4";
const OUTING_KEY = "bosco:outing-history:v5";
const EXPERIENCE_KEY = "bosco:experience:v6";

const LAB_DECISION_LABELS: Record<BoscoDecision, string> = {
  "decision-ideal": "Sortie idéale",
  "decision-pleasant": "Sortie favorable",
  "decision-low-sport": "Favorable · peu sportive",
  "decision-cautious": "Sortie prudente",
  "decision-discouraged": "Sortie déconseillée",
  "decision-unavailable": "Impossible de conclure",
};

type OutingRecord = {
  id: string;
  at: string;
  spot: string;
  craftType: string;
  score: number;
  decision: string;
  summary: string;
};

const POSES: Array<{ id: BoscoPose; label: string }> = [
  { id: "resting", label: "Repos" },
  { id: "listening", label: "Main tendue" },
  { id: "thinking", label: "Réfléchit" },
  { id: "sea", label: "Observe" },
  { id: "barometer", label: "Explique" },
  { id: "chart", label: "Main tasse" },
  { id: "preparing", label: "Bras croisés" },
  { id: "speaking", label: "Parle" },
  { id: "satisfied", label: "Satisfait" },
  { id: "worried", label: "Inquiet" },
  { id: "annoyed", label: "Contrarié" },
  { id: "protective", label: "Protecteur" }
];

const WEATHER: Array<{ id: Weather; label: string; icon: string }> = [
  { id: "clear", label: "Soleil", icon: "☀" },
  { id: "mainly-clear", label: "Peu nuageux", icon: "◒" },
  { id: "partly-cloudy", label: "Nuageux", icon: "◐" },
  { id: "overcast", label: "Couvert", icon: "☁" },
  { id: "fog", label: "Brouillard", icon: "≈" },
  { id: "drizzle", label: "Bruine", icon: "⋮" },
  { id: "rain", label: "Pluie", icon: "☂" },
  { id: "heavy-rain", label: "Forte pluie", icon: "≋" },
  { id: "snow", label: "Neige", icon: "✣" },
  { id: "storm", label: "Orage", icon: "ϟ" }
];

const DAYTIMES: Array<{ id: Daytime; label: string }> = [
  { id: "morning", label: "Matin" },
  { id: "day", label: "Journée" },
  { id: "evening", label: "Soir" },
  { id: "night", label: "Nuit" }
];

const DECISIONS: BoscoDecision[] = [
  "decision-ideal",
  "decision-pleasant",
  "decision-low-sport",
  "decision-cautious",
  "decision-discouraged",
  "decision-unavailable"
];

type VoiceLabScenario = {
  id: string;
  label: string;
  decision: BoscoDecision;
  score: number;
  weather: Weather;
  configure?: (input: BoscoWeatherInput) => void;
};

const VOICE_LAB_SCENARIOS: VoiceLabScenario[] = [
  { id: "wind-zero", label: "Vent nul", decision: "decision-low-sport", score: 6.4, weather: "clear", configure: (input) => { input.wind.meanKt = 1; input.wind.gustKt = 2; } },
  { id: "wind-light", label: "Vent faible", decision: "decision-low-sport", score: 6.9, weather: "mainly-clear", configure: (input) => { input.wind.meanKt = 5; input.wind.gustKt = 7; } },
  { id: "ideal", label: "Conditions idéales", decision: "decision-ideal", score: 9.2, weather: "clear", configure: (input) => { input.wind.meanKt = 12; input.wind.gustKt = 16; input.sea.waveHeightM = 0.2; } },
  { id: "gusts", label: "Rafales", decision: "decision-cautious", score: 5.1, weather: "partly-cloudy", configure: (input) => { input.wind.meanKt = 12; input.wind.gustKt = 25; } },
  { id: "strong-wind", label: "Vent fort", decision: "decision-discouraged", score: 2.4, weather: "overcast", configure: (input) => { input.wind.meanKt = 23; input.wind.gustKt = 30; } },
  { id: "rain", label: "Pluie", decision: "decision-pleasant", score: 7.1, weather: "rain", configure: (input) => { input.weather.precipitationMmH = 2; } },
  { id: "heavy-rain", label: "Forte pluie", decision: "decision-cautious", score: 4.9, weather: "heavy-rain", configure: (input) => { input.weather.precipitationMmH = 8; input.weather.visibilityM = 2400; } },
  { id: "fog", label: "Brouillard", decision: "decision-discouraged", score: 1.3, weather: "fog", configure: (input) => { input.weather.visibilityM = 600; } },
  { id: "storm", label: "Orage", decision: "decision-discouraged", score: 0.8, weather: "storm", configure: (input) => { input.weather.thunderstormRisk = 0.8; input.wind.gustKt = 34; } },
  { id: "cold", label: "Froid", decision: "decision-cautious", score: 5.6, weather: "clear", configure: (input) => { input.weather.temperatureC = 7; } },
  { id: "heat", label: "Chaleur", decision: "decision-cautious", score: 5.8, weather: "clear", configure: (input) => { input.weather.temperatureC = 31; } },
  { id: "flat-sea", label: "Mer calme", decision: "decision-pleasant", score: 7.8, weather: "clear", configure: (input) => { input.sea.waveHeightM = 0.1; input.sea.wavePeriodS = 8; } },
  { id: "rough-sea", label: "Mer agitée", decision: "decision-discouraged", score: 2.7, weather: "overcast", configure: (input) => { input.sea.waveHeightM = 1.4; input.sea.wavePeriodS = 4; } },
  { id: "tide-rising", label: "Marée montante", decision: "decision-pleasant", score: 7.5, weather: "clear", configure: (input) => { input.tide.trend = "rising"; input.tide.highWaterAt = "12:18"; } },
  { id: "tide-falling", label: "Marée descendante", decision: "decision-pleasant", score: 7.2, weather: "clear", configure: (input) => { input.tide.trend = "falling"; input.tide.lowWaterAt = "12:42"; } },
  { id: "improving", label: "Amélioration", decision: "decision-pleasant", score: 7.3, weather: "partly-cloudy", configure: (input) => { input.trend.windKt3h = -4; } },
  { id: "degrading", label: "Dégradation", decision: "decision-cautious", score: 5.0, weather: "overcast", configure: (input) => { input.trend.windKt3h = 5; input.wind.gustKt = 24; } },
  { id: "favorable", label: "Sortie favorable", decision: "decision-pleasant", score: 7.6, weather: "mainly-clear" },
  { id: "reserved", label: "Sortie avec réserves", decision: "decision-cautious", score: 5.4, weather: "partly-cloudy", configure: (input) => { input.wind.gustKt = 23; } },
  { id: "discouraged", label: "Sortie déconseillée", decision: "decision-discouraged", score: 2.8, weather: "overcast", configure: (input) => { input.wind.meanKt = 21; input.wind.gustKt = 29; } },
  { id: "danger", label: "Danger important", decision: "decision-discouraged", score: 0.6, weather: "storm", configure: (input) => { input.weather.thunderstormRisk = 0.9; input.wind.meanKt = 27; input.wind.gustKt = 38; input.sea.waveHeightM = 2.2; } },
  { id: "missing", label: "Données manquantes", decision: "decision-unavailable", score: 0, weather: "overcast", configure: (input) => { input.data.status = "unavailable"; } },
];

const DEFAULT_PROFILE: BoscoProfile = {
  firstName: "",
  craftType: "catamaran",
  level: "intermediaire",
  favoriteSpot: "Jullouville",
  units: "marine",
  consentToLocalMemory: true
};

const DEMO_PROFILE: BoscoProfile = {
  ...DEFAULT_PROFILE,
  firstName: "Marin"
};

function barometerAngle(pressureHPa: number, trendHPa3h: number): number {
  if (!Number.isFinite(pressureHPa)) return 0;
  const pressureRatio = Math.min(1, Math.max(0, (pressureHPa - 980) / 60));
  const trendOffset = Number.isFinite(trendHPa3h)
    ? Math.min(8, Math.max(-8, trendHPa3h * 2))
    : 0;
  return Math.min(65, Math.max(-65, -65 + pressureRatio * 130 + trendOffset));
}

function makeInitialWeather(): BoscoWeatherInput {
  return {
    wind: { meanKt: 11, gustKt: 17, directionDeg: 220 },
    weather: {
      code: "clear",
      wmoCode: 0,
      temperatureC: 19,
      precipitationMmH: 0,
      visibilityM: 12000,
      pressureHPa: 1017,
      pressureTrendHPa3h: 0,
      thunderstormRisk: 0
    },
    sea: {
      waveHeightM: 0.4,
      waveDirectionDeg: 280,
      wavePeriodS: 6,
      swellHeightM: 0.3,
      swellDirectionDeg: 285
    },
    tide: {
      heightM: 6.2,
      trend: "rising",
      highWaterAt: "12:18",
      lowWaterAt: "18:42"
    },
    trend: { windKt3h: 3 },
    spot: { name: "Jullouville", shorelineDeg: 275 },
    connection: { online: true },
    data: {
      observedAt: new Date().toISOString(),
      cached: false,
      status: "unavailable"
    }
  };
}

function shorelineDegForPort(portId: string): number {
  if (
    [
      "barfleur",
      "saint-vaast",
      "tatihou",
      "quineville",
      "utah-beach",
      "carentan",
    ].includes(portId)
  ) {
    return 90;
  }
  if (
    ["cherbourg", "port-chantereyne", "becquet", "fermanville"].includes(
      portId,
    )
  ) {
    return 5;
  }
  return 275;
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    if (image.decode) {
      image.decode().then(() => resolve()).catch(reject);
      return;
    }
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Unable to preload ${src}`));
  });
}

export default function Home() {
  const [profile, setProfile] = useState<BoscoProfile>(DEFAULT_PROFILE);
  const [draftProfile, setDraftProfile] = useState<BoscoProfile>(DEFAULT_PROFILE);
  const [profileReady, setProfileReady] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [input, setInput] = useState<BoscoWeatherInput>(makeInitialWeather);
  const [result, setResult] = useState<BoscoResult>(() =>
    evaluateBosco(makeInitialWeather(), DEMO_PROFILE)
  );
  const [state, setState] = useState<BoscoPose>("resting");
  const [activeImage, setActiveImage] = useState(poseAsset("resting"));
  const [message, setMessage] = useState("Salut.");
  const [introStage, setIntroStage] = useState<BoscoIntroState>("greeting");
  const [automaticDaytime, setAutomaticDaytime] = useState<Daytime>(() => localTimeOfDay());
  const [manualDaytime, setManualDaytime] = useState<Daytime | null>(null);
  const analysisDaytime = input.data.targetAt
    ? localTimeOfDay(new Date(input.data.targetAt))
    : automaticDaytime;
  const daytime = manualDaytime ?? analysisDaytime;
  const weatherFamily =
    classifyWmoWeather(input.weather.wmoCode, input.weather.precipitationMmH) ??
    (WEATHER_FAMILIES.includes(input.weather.code as WeatherFamily)
      ? (input.weather.code as WeatherFamily)
      : "clear");
  const requestedDecor = decorAsset(daytime, weatherFamily);
  const [appReady, setAppReady] = useState(false);
  const [ambienceOn, setAmbienceOn] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [outings, setOutings] = useState<OutingRecord[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showLab, setShowLab] = useState(false);
  const [labEnabled, setLabEnabled] = useState(false);
  const [labDecision, setLabDecision] = useState<BoscoDecision>("decision-ideal");
  const [labScore, setLabScore] = useState(8.5);
  const [labScenarioId, setLabScenarioId] = useState("ideal");
  const [labDialogueNonce, setLabDialogueNonce] = useState(0);
  const [labDialogue, setLabDialogue] = useState<BoscoDialogue | null>(null);
  const [dialogueDebug, setDialogueDebug] = useState<BoscoDialogueDebug | null>(null);
  const [labPose, setLabPose] = useState<BoscoPose>("resting");
  const [labViewport, setLabViewport] = useState("390 × 844");
  const [labView, setLabView] = useState<BoscoLabView>("final");
  const [labBackground, setLabBackground] =
    useState<BoscoLabBackground>("decor");
  const [seaAnimationPhase, setSeaAnimationPhase] =
    useState<BoscoAnimationPhase>("idle");
  const [activeAnimation, setActiveAnimation] =
    useState<BoscoAnimationId | null>(null);
  const [animationAvailability, setAnimationAvailability] = useState<
    Record<BoscoAnimationId, boolean>
  >(() =>
    Object.fromEntries(
      Object.keys(BOSCO_ANIMATIONS).map((id) => [id, true]),
    ) as Record<BoscoAnimationId, boolean>,
  );
  const { marineScreen, navigateMarine, selectPrimary } = useMarineNavigation();
  const {
    homePort,
    activePort,
    setHomePort,
    setActivePort,
    nauticalContext,
    ready: selectedPortReady,
  } = useNauticalContext();
  const [marineData, setMarineData] = useState<MarineDashboardData | null>(null);
  const [narrativeVisit, setNarrativeVisit] = useState<V26PortVisit | null>(null);
  const [homeResetToken, setHomeResetToken] = useState(0);
  const [radioHit, setRadioHit] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recentDialogues = useRef<string[]>([]);
  const dialogueHistory = useRef<BoscoDialogueHistoryEntry[]>([]);
  const labDialogueHistory = useRef<BoscoDialogueHistoryEntry[]>([]);
  const dialogueCache = useRef(new Map<string, BoscoDialogue>());
  const ambient = useRef(new BoscoAmbientSoundscape());
  const resultRef = useRef(result);
  const introStageRef = useRef<BoscoIntroState | null>(null);
  const sequenceTimers = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const sequenceRunning = useRef(false);
  const cancelActiveAnimation = useRef<(() => void) | null>(null);
  const lastIdleAnimation = useRef<BoscoAnimationId | null>(null);
  const animationAvailabilityRef = useRef(animationAvailability);
  const playAnimationRef = useRef<
    ((
      id: BoscoAnimationId,
      settleResult?: BoscoResult,
      options?: { preserveDialogue?: boolean },
    ) => Promise<boolean>) | null
  >(null);
  const scheduleNextIdleRef = useRef<((first?: boolean) => void) | null>(null);
  const renderedContextKey = contextKey(
    labEnabled ? labDecision : result.decision,
    weatherFamily,
    daytime
  );

  const applyMarineData = useCallback((marineData: MarineDashboardData) => {
    const target = new Date();
    const weather = currentWeather(marineData);
    const sea = nearestSea(marineData, target);
    const previousWeather = nearestWeather(
      marineData,
      new Date(target.getTime() - 3 * 60 * 60_000),
    );
    const nextWeather = nearestWeather(
      marineData,
      new Date(target.getTime() + 3 * 60 * 60_000),
    );
    const tideHeight = interpolateHeight(marineData.tides, target.toISOString());
    const tideTrend = tideTrendAt(marineData.tides, target.toISOString());
    const futureTides = marineData.tideEvents
      .filter((event) => Date.parse(event.time) > target.getTime())
      .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
    const highWater = futureTides.find((event) => event.type === "high");
    const lowWater = futureTides.find((event) => event.type === "low");
    const readings = [
      weather?.windKt,
      weather?.gustKt,
      weather?.windDirectionDeg,
      weather?.temperatureC,
      weather?.precipitationMm,
      weather?.visibilityM,
      weather?.pressureHPa,
      weather?.weatherCode,
      previousWeather?.pressureHPa,
      nextWeather?.windKt,
      sea?.waveHeightM,
      sea?.waveDirectionDeg,
      sea?.wavePeriodS,
      sea?.swellHeightM,
      sea?.swellDirectionDeg,
      tideHeight,
    ];
    const completeReadings = readings.every(
      (value) => typeof value === "number" && Number.isFinite(value),
    );

    if (!weather || !sea || !completeReadings || !tideTrend) {
      setInput((current) => ({
        ...current,
        connection: { online: navigator.onLine },
        data: {
          ...current.data,
          observedAt: marineData.fetchedAt,
          cached: marineData.cached,
          status: "unavailable",
        },
      }));
      return;
    }

    const weatherFamilyFromData =
      classifyWmoWeather(
        weather.weatherCode as number,
        weather.precipitationMm as number,
      ) ??
      "clear";
    setInput((current) => ({
      ...current,
      wind: {
        meanKt: weather.windKt as number,
        gustKt: weather.gustKt as number,
        directionDeg: weather.windDirectionDeg as number,
      },
      weather: {
        code: weatherFamilyFromData,
        wmoCode: weather.weatherCode,
        temperatureC: weather.temperatureC as number,
        precipitationMmH: weather.precipitationMm as number,
        visibilityM: weather.visibilityM as number,
        pressureHPa: weather.pressureHPa as number,
        pressureTrendHPa3h:
          (weather.pressureHPa as number) -
          (previousWeather?.pressureHPa as number),
        thunderstormRisk:
          typeof weather.weatherCode === "number" && weather.weatherCode >= 95
            ? 1
            : 0,
      },
      sea: {
        waveHeightM: sea.waveHeightM as number,
        waveDirectionDeg: sea.waveDirectionDeg as number,
        wavePeriodS: sea.wavePeriodS as number,
        swellHeightM: sea.swellHeightM as number,
        swellDirectionDeg: sea.swellDirectionDeg as number,
      },
      tide: {
        heightM: tideHeight as number,
        trend: tideTrend,
        highWaterAt: highWater?.time.slice(11, 16) ?? "",
        lowWaterAt: lowWater?.time.slice(11, 16) ?? "",
      },
      trend: {
        windKt3h:
          (nextWeather?.windKt as number) - (weather.windKt as number),
      },
      spot: {
        shorelineDeg: shorelineDegForPort(marineData.location.id),
        name: marineData.location.name,
      },
      connection: { online: navigator.onLine },
      data: {
        observedAt: marineData.fetchedAt,
        targetAt: weather.time,
        cached: marineData.cached,
        status: marineData.partial ? "partial" : "complete",
      },
    }));
  }, []);

  const handleMarineData = useCallback(
    (data: MarineDashboardData) => {
      setMarineData(data);
      applyMarineData(data);
    },
    [applyMarineData],
  );

  const handleSelectPort = useCallback(
    (port: ManchePort, data: MarineDashboardData | null) => {
      setActivePort(port);
      setProfile((current) => ({ ...current, favoriteSpot: port.name }));
      setDraftProfile((current) => ({ ...current, favoriteSpot: port.name }));
      setInput((current) => ({
        ...current,
        spot: {
          name: port.name,
          shorelineDeg: shorelineDegForPort(port.id),
        },
      }));
      if (data) {
        setMarineData(data);
        applyMarineData(data);
      }
      setNarrativeVisit(
        createV26PortVisit(port.id, port.name, nextBoscoVisitOrdinal(port.id)),
      );
      setHomeResetToken((value) => value + 1);
      navigateMarine(null);
    },
    [applyMarineData, navigateMarine, setActivePort],
  );

  const openEmileNotebook = useCallback(() => {
    setNarrativeVisit((current) => current ? moveV26Visit(current, "emile") : current);
    navigateMarine("square");
  }, [navigateMarine]);

  const closeEmileNotebook = useCallback(() => {
    setNarrativeVisit((current) => current ? moveV26Visit(current, "closing") : current);
    setHomeResetToken((value) => value + 1);
    navigateMarine(null);
  }, [navigateMarine]);

  const selectBoscoTab = useCallback(() => {
    if (narrativeVisit?.phase === "emile") {
      closeEmileNotebook();
      return;
    }
    selectPrimary(null, () => setHomeResetToken((value) => value + 1));
  }, [closeEmileNotebook, narrativeVisit?.phase, selectPrimary]);

  useEffect(() => {
    if (!selectedPortReady) return;
    const synchronize = window.setTimeout(() => {
      setInput((current) => ({
        ...current,
        spot: {
          name: activePort.name,
          shorelineDeg: shorelineDegForPort(activePort.id),
        },
      }));
    }, 0);
    return () => window.clearTimeout(synchronize);
  }, [activePort, selectedPortReady]);

  const playAnimation = useCallback(async (
    id: BoscoAnimationId,
    settleResult: BoscoResult = resultRef.current,
    options: { preserveDialogue?: boolean } = {},
  ): Promise<boolean> => {
    const definition = BOSCO_ANIMATIONS[id];
    if (document.hidden) return false;
    if (sequenceRunning.current) return false;

    sequenceTimers.current.forEach(clearTimeout);
    sequenceTimers.current = [];
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (timer.current) clearTimeout(timer.current);
    sequenceRunning.current = true;
    setActiveAnimation(id);

    let completed = false;
    try {
      const sources = [
        ...new Set(
          definition.requiredPoses.flatMap((pose) => [
            poseAsset(pose),
            handBehindAsset(pose),
            fingersFrontAsset(pose),
          ]),
        ),
      ];
      const resources = await Promise.allSettled(
        sources.map((src) => preloadImage(src)),
      );
      const available = resources.every(
        (resource) => resource.status === "fulfilled",
      );
      animationAvailabilityRef.current = {
        ...animationAvailabilityRef.current,
        [id]: available,
      };
      setAnimationAvailability(animationAvailabilityRef.current);
      if (!available) {
        console.error(
          `[Bosco animation] « ${id} » neutralisée sans bloquer les autres`,
        );
        return false;
      }

      completed = await new Promise<boolean>((resolve) => {
        let resolved = false;
        const finish = (value: boolean) => {
          if (resolved) return;
          resolved = true;
          sequenceTimers.current.forEach(clearTimeout);
          sequenceTimers.current = [];
          resolve(value);
        };
        cancelActiveAnimation.current = () => finish(false);

        for (const step of definition.steps) {
          sequenceTimers.current.push(
            setTimeout(() => {
              if (document.hidden) {
                finish(false);
                return;
              }
              setState(step.pose);
              setActiveImage(poseAsset(step.pose));
              setSeaAnimationPhase(step.phase);
              if (!options.preserveDialogue) setMessage(step.text);
            }, step.at),
          );
        }
        sequenceTimers.current.push(
          setTimeout(() => finish(true), definition.duration),
        );
      });
      return completed;
    } catch (error) {
      animationAvailabilityRef.current = {
        ...animationAvailabilityRef.current,
        [id]: false,
      };
      setAnimationAvailability(animationAvailabilityRef.current);
      console.error(`[Bosco animation] Échec isolé de « ${id} »`, error);
      return false;
    } finally {
      setState(settleResult.pose);
      setActiveImage(decisionPoseAsset(settleResult.decision));
      setMessage(settleResult.dialogue);
      setSeaAnimationPhase("idle");
      setActiveAnimation(null);
      cancelActiveAnimation.current = null;
      sequenceRunning.current = false;

      if (introStageRef.current === "completed") {
        window.setTimeout(() => scheduleNextIdleRef.current?.(false), 0);
      }
    }
  }, []);

  const scheduleNextIdle = useCallback((first = false) => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (
      document.hidden ||
      !profileReady ||
      !appReady ||
      introStageRef.current !== "completed"
    ) return;
    const delay = first
      ? 5000
      : 25_000 + Math.round(Math.random() * 20_000);
    idleTimer.current = setTimeout(() => {
      if (document.hidden || sequenceRunning.current) {
        scheduleNextIdleRef.current?.(false);
        return;
      }
      const candidates = BOSCO_IDLE_ANIMATIONS.filter(
        (id) =>
          animationAvailabilityRef.current[id] &&
          id !== lastIdleAnimation.current,
      );
      const id =
        candidates[Math.floor(Math.random() * candidates.length)] ??
        BOSCO_IDLE_ANIMATIONS.find(
          (candidate) => animationAvailabilityRef.current[candidate],
        );
      if (!id) {
        console.error("[Bosco animation] Aucune animation d’attente disponible");
        scheduleNextIdleRef.current?.(false);
        return;
      }
      lastIdleAnimation.current = id;
      void playAnimationRef.current?.(id, resultRef.current, {
        preserveDialogue: true,
      });
    }, delay);
  }, [appReady, profileReady]);

  useEffect(() => {
    playAnimationRef.current = playAnimation;
  }, [playAnimation]);

  useEffect(() => {
    scheduleNextIdleRef.current = scheduleNextIdle;
  }, [scheduleNextIdle]);

  useEffect(() => {
    const handleAnimationVisibility = () => {
      if (document.hidden) {
        if (idleTimer.current) clearTimeout(idleTimer.current);
        cancelActiveAnimation.current?.();
        return;
      }
      if (sequenceRunning.current) return;
      if (introStageRef.current === "completed") {
        scheduleNextIdleRef.current?.(true);
      }
    };
    document.addEventListener("visibilitychange", handleAnimationVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleAnimationVisibility);
  }, []);

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(PROFILE_KEY);
        const savedDialogues = window.localStorage.getItem(DIALOGUE_KEY);
        const savedDialogueHistory = window.localStorage.getItem(
          BOSCO_DIALOGUE_HISTORY_KEY,
        );
        const savedOutings = window.localStorage.getItem(OUTING_KEY);
        const savedExperience = window.localStorage.getItem(EXPERIENCE_KEY);
        if (savedDialogues) recentDialogues.current = JSON.parse(savedDialogues).slice(-12);
        dialogueHistory.current = parseDialogueHistory(savedDialogueHistory);
        if (savedOutings) setOutings(JSON.parse(savedOutings).slice(0, 30));
        if (savedExperience) {
          const experience = JSON.parse(savedExperience) as {
            ambienceOn?: boolean;
            notificationsOn?: boolean;
          };
          setAmbienceOn(experience.ambienceOn ?? false);
          setNotificationsOn(
            experience.notificationsOn === true &&
              "Notification" in window &&
              Notification.permission === "granted"
          );
        }
        if (saved) {
          const parsed = { ...DEFAULT_PROFILE, ...JSON.parse(saved) } as BoscoProfile;
          setProfile(parsed);
          setDraftProfile(parsed);
          setInput((current) => ({
            ...current,
            spot: { ...current.spot, name: parsed.favoriteSpot }
          }));
          setProfileReady(true);
          setShowProfile(false);
        } else {
          setShowProfile(true);
        }
      } catch {
        setShowProfile(true);
      }
    }, 0);
    const ready = window.setTimeout(() => setAppReady(true), 2600);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Offline support remains best-effort on browsers that block service workers.
      });
    }
    return () => {
      window.clearTimeout(initialize);
      window.clearTimeout(ready);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pending = window.setTimeout(
      () => setLabEnabled(params.get("lab") === "bosco"),
      0
    );
    return () => window.clearTimeout(pending);
  }, []);

  useEffect(() => {
    if (!appReady) return;
    let cancelled = false;
    void Promise.allSettled(
      Object.values(BOSCO_ANIMATIONS).map(async (animation) => {
        const sources = [
          ...new Set(
            animation.requiredPoses.flatMap((pose) => [
              poseAsset(pose),
              handBehindAsset(pose),
              fingersFrontAsset(pose),
            ]),
          ),
        ];
        const resources = await Promise.allSettled(
          sources.map((src) => preloadImage(src)),
        );
        return [
          animation.id,
          resources.every((resource) => resource.status === "fulfilled"),
        ] as const;
      }),
    ).then((sequences) => {
      if (cancelled) return;
      const next = { ...animationAvailabilityRef.current };
      for (const sequence of sequences) {
        if (sequence.status === "fulfilled") {
          const [id, available] = sequence.value;
          next[id] = available;
        }
      }
      animationAvailabilityRef.current = next;
      setAnimationAvailability(next);
    });
    return () => {
      cancelled = true;
    };
  }, [appReady]);

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (connection?.saveData) return;

    const probableNextTime: Daytime =
      daytime === "morning" ? "day" : daytime === "day" ? "evening" : daytime === "evening" ? "night" : "morning";
    const sources = new Set([
      requestedDecor,
      activeImage,
      decorAsset(probableNextTime, weatherFamily)
    ]);
    const preloaders = [...sources].map((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      return image;
    });
    return () => {
      preloaders.forEach((image) => {
        image.src = "";
      });
    };
  }, [activeImage, daytime, requestedDecor, weatherFamily]);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  const applyIntroStage = useCallback((nextStage: BoscoIntroState) => {
    const currentStage = introStageRef.current;
    if (
      currentStage !== null &&
      !canAdvanceBoscoIntro(currentStage, nextStage)
    ) {
      return;
    }
    if (currentStage === nextStage) return;

    introStageRef.current = nextStage;
    setIntroStage(nextStage);

    if (nextStage === "greeting") {
      setState("resting");
      setActiveImage(poseAsset("resting"));
      setSeaAnimationPhase("idle");
      setMessage(boscoGreeting(profile.firstName));
      return;
    }

    if (nextStage === "thinking") {
      setState("sea");
      setActiveImage(poseAsset("sea"));
      setSeaAnimationPhase("observing");
      setMessage("Mmmmmh… laisse-moi deux minutes.");
      return;
    }

    const verdict = resultRef.current;
    setState(verdict.pose);
    setActiveImage(decisionPoseAsset(verdict.decision));
    setSeaAnimationPhase("idle");
    setMessage(verdict.dialogue);
  }, [profile.firstName]);

  useEffect(() => {
    if (!appReady || !profileReady) return;

    let startedAt = Date.now();
    try {
      const stored = JSON.parse(
        window.sessionStorage.getItem(BOSCO_INTRO_SESSION_KEY) ?? "null",
      ) as { status?: string; startedAt?: number } | null;
      if (stored?.status === "completed") {
        const completed = window.setTimeout(
          () => applyIntroStage("completed"),
          0,
        );
        return () => window.clearTimeout(completed);
      }
      if (
        stored?.status === "running" &&
        typeof stored.startedAt === "number" &&
        Number.isFinite(stored.startedAt)
      ) {
        startedAt = stored.startedAt;
      } else {
        window.sessionStorage.setItem(
          BOSCO_INTRO_SESSION_KEY,
          JSON.stringify({ status: "running", startedAt }),
        );
      }
    } catch {
      // The deterministic in-memory sequence remains available without storage.
    }

    let interval: number | null = null;
    const tick = () => {
      const nextStage = boscoIntroStateAt(Date.now() - startedAt);
      applyIntroStage(nextStage);
      if (nextStage === "completed") {
        if (interval !== null) window.clearInterval(interval);
        try {
          window.sessionStorage.setItem(
            BOSCO_INTRO_SESSION_KEY,
            JSON.stringify({ status: "completed", startedAt }),
          );
        } catch {
          // Completion is still kept by introStageRef for this mounted session.
        }
        scheduleNextIdleRef.current?.(true);
      }
    };

    tick();
    if (introStageRef.current !== "completed") {
      interval = window.setInterval(tick, 100);
    }
    return () => {
      if (interval !== null) window.clearInterval(interval);
    };
  }, [appReady, applyIntroStage, profileReady]);

  useEffect(() => {
    const updateTime = () => setAutomaticDaytime(localTimeOfDay());
    const interval = window.setInterval(updateTime, 15 * 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const settings = { ambienceOn, notificationsOn };
    try {
      window.localStorage.setItem(EXPERIENCE_KEY, JSON.stringify(settings));
    } catch {
      // Preferences still work for the current session when local storage is blocked.
    }
  }, [ambienceOn, notificationsOn]);

  useEffect(() => {
    if (ambienceOn) {
      ambient.current.start(input).catch(() => setAmbienceOn(false));
    } else {
      ambient.current.stop().catch(() => {
        // The audio context may already be closed by the operating system.
      });
    }
  }, [ambienceOn, input]);

  useEffect(() => {
    const handleVisibility = () => {
      if (!ambienceOn) return;
      if (document.hidden) ambient.current.suspend();
      else ambient.current.resume();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [ambienceOn]);

  useEffect(() => {
    if (!profileReady || !notificationsOn) return;
    maybeNotifyBosco(input, result, profile);
  }, [input, notificationsOn, profile, profileReady, result]);

  useEffect(() => {
    const setConnection = (online: boolean) => {
      setRadioHit(true);
      setInput((current) => ({
        ...current,
        connection: { online },
        data: { ...current.data, cached: !online }
      }));
      window.setTimeout(() => setRadioHit(false), 1500);
    };
    const online = () => setConnection(true);
    const offline = () => setConnection(false);
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  useEffect(() => {
    if (!profileReady || !appReady) return;
    const evaluated = evaluateBosco(input, profile, recentDialogues.current);
    const fingerprint = dialogueAnalysisFingerprint(evaluated, input, daytime);
    let dialogue = dialogueCache.current.get(fingerprint);
    if (!dialogue) {
      const seed = fingerprint;
      dialogue = buildBoscoDialogue(
        {
          result: evaluated,
          input,
          profile,
          timeOfDay: daytime,
          consultationId: fingerprint,
        },
        dialogueHistory.current,
        seed,
      );
      dialogueCache.current.set(fingerprint, dialogue);
      dialogueHistory.current = [
        ...dialogueHistory.current,
        toDialogueHistoryEntry(dialogue, new Date().toISOString()),
      ].slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
    }
    const next = { ...evaluated, dialogue: dialogue.message };
    setDialogueDebug(dialogue.debug);
    recentDialogues.current = [...recentDialogues.current, next.dialogue].slice(-12);
    resultRef.current = next;
    setResult(next);
    if (
      introStageRef.current === "verdict" ||
      introStageRef.current === "completed"
    ) {
      setState(next.pose);
      setActiveImage(decisionPoseAsset(next.decision));
      setMessage(next.dialogue);
    }
    try {
      if (profile.consentToLocalMemory) {
        window.localStorage.setItem(DIALOGUE_KEY, JSON.stringify(recentDialogues.current));
        window.localStorage.setItem(
          BOSCO_DIALOGUE_HISTORY_KEY,
          JSON.stringify(dialogueHistory.current),
        );
        window.localStorage.setItem(
          MEMORY_KEY,
          JSON.stringify({
            firstName: profile.firstName,
            craftType: profile.craftType,
            level: profile.level,
            favoriteSpot: profile.favoriteSpot,
            units: profile.units,
            lastSelectedSpot: input.spot.name,
            lastBriefingAt: new Date().toISOString(),
            lastDecision: next.decision,
            lastScore: next.score
          })
        );
      }
    } catch {
      // A blocked local store never blocks a safety decision.
    }
  }, [appReady, daytime, input, profile, profileReady]);

  useEffect(() => {
    if (!labEnabled || !appReady) return;
    const labResult: BoscoResult = {
      ...resultRef.current,
      decision: labDecision,
      label: LAB_DECISION_LABELS[labDecision],
      score: labScore,
    };
    const seed = [
      "lab",
      dialogueAnalysisFingerprint(labResult, input, daytime),
      labDialogueNonce,
    ].join(":");
    const next = buildBoscoDialogue(
      {
        result: labResult,
        input,
        profile,
        timeOfDay: daytime,
        consultationId: seed,
      },
      labDialogueHistory.current,
      seed,
    );
    labDialogueHistory.current = [
      ...labDialogueHistory.current,
      toDialogueHistoryEntry(next, new Date().toISOString()),
    ].slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
    setLabDialogue(next);
  }, [
    appReady,
    daytime,
    input,
    labDecision,
    labDialogueNonce,
    labEnabled,
    labScore,
    profile,
  ]);

  useEffect(() => {
    const soundscape = ambient.current;
    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      cancelActiveAnimation.current?.();
      sequenceTimers.current.forEach(clearTimeout);
      sequenceRunning.current = false;
      soundscape.stop();
    };
  }, []);

  function transition(next: BoscoPose, text: string, settle = true) {
    if (timer.current) clearTimeout(timer.current);
    setState(next);
    setActiveImage(poseAsset(next));
    setMessage(text);
    if (settle) {
      timer.current = setTimeout(() => {
        setState(result.pose);
        setActiveImage(decisionPoseAsset(result.decision));
        setMessage(result.dialogue);
      }, 2100);
    }
  }

  function updateWeather(code: Weather) {
    const precipitationMmH =
      code === "rain" ? 2 : code === "heavy-rain" ? 7 : code === "storm" ? 12 : 0;
    const visibilityM = code === "fog" ? 600 : code === "heavy-rain" ? 2400 : 12000;
    setInput((current) => ({
      ...current,
      weather: {
        ...current.weather,
        code,
        wmoCode: WEATHER_REPRESENTATIVE_WMO[code],
        precipitationMmH,
        visibilityM,
        thunderstormRisk: code === "storm" ? 0.8 : 0
      },
      data: { ...current.data, observedAt: new Date().toISOString() }
    }));
  }

  function applyVoiceLabScenario(id: string) {
    const scenario = VOICE_LAB_SCENARIOS.find((item) => item.id === id);
    if (!scenario) return;
    const next = makeInitialWeather();
    next.weather.code = scenario.weather;
    next.weather.wmoCode = WEATHER_REPRESENTATIVE_WMO[scenario.weather];
    next.weather.precipitationMmH =
      scenario.weather === "drizzle"
        ? 0.4
        : scenario.weather === "rain"
          ? 2
          : scenario.weather === "heavy-rain" || scenario.weather === "storm"
            ? 8
            : 0;
    next.weather.visibilityM = scenario.weather === "fog" ? 600 : 12000;
    next.weather.thunderstormRisk = scenario.weather === "storm" ? 0.8 : 0;
    next.data.status = "complete";
    next.data.observedAt = new Date().toISOString();
    next.data.targetAt = new Date().toISOString();
    scenario.configure?.(next);
    setLabScenarioId(id);
    setLabDecision(scenario.decision);
    setLabScore(scenario.score);
    setInput(next);
    setLabDialogueNonce((value) => value + 1);
  }

  function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = {
      ...draftProfile,
      firstName: draftProfile.firstName.trim(),
      favoriteSpot: draftProfile.favoriteSpot.trim()
    };
    if (cleaned.firstName.length < 2 || cleaned.favoriteSpot.length < 2) return;
    setProfile(cleaned);
    setInput((current) => ({
      ...current,
      spot: { ...current.spot, name: cleaned.favoriteSpot },
      data: { ...current.data, observedAt: new Date().toISOString() }
    }));
    setProfileReady(true);
    setShowProfile(false);
    if (cleaned.consentToLocalMemory) {
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(cleaned));
    } else {
      window.localStorage.removeItem(PROFILE_KEY);
      window.localStorage.removeItem(MEMORY_KEY);
    }
  }

  async function toggleNotifications() {
    if (notificationsOn) {
      setNotificationsOn(false);
      return;
    }
    const allowed = await requestBoscoNotificationPermission();
    setNotificationsOn(allowed);
  }

  async function toggleAmbience() {
    const next = !ambienceOn;
    setAmbienceOn(next);
    if (next) await ambient.current.start(input);
  }

  function recordOuting() {
    if (!profile.consentToLocalMemory) {
      transition(
        "listening",
        `${profile.firstName}, active d’abord la mémoire locale dans ton profil.`
      );
      return;
    }
    const entry: OutingRecord = {
      id: `${Date.now()}-${result.decision}`,
      at: new Date().toISOString(),
      spot: input.spot.name,
      craftType: profile.craftType,
      score: result.score,
      decision: result.label,
      summary: result.summary
    };
    const next = [entry, ...outings].slice(0, 30);
    setOutings(next);
    window.localStorage.setItem(OUTING_KEY, JSON.stringify(next));
    transition(
      "satisfied",
      `${profile.firstName}, c’est noté dans ton journal de bord.`
    );
  }

  const profileName = profile.firstName || "Bosco";
  const displayedResult = useMemo<BoscoResult>(() => {
    if (!labEnabled || !labDialogue) return result;
    return {
      ...result,
      decision: labDecision,
      label: LAB_DECISION_LABELS[labDecision],
      score: labScore,
      dialogue: labDialogue.message,
    };
  }, [labDecision, labDialogue, labEnabled, labScore, result]);
  const displayedMessage =
    labEnabled && labDialogue ? labDialogue.message : message;
  const displayedDialogueDebug =
    labEnabled && labDialogue ? labDialogue.debug : dialogueDebug;

  if (!appReady) {
    return (
      <main className="loading-shell" aria-live="polite" aria-busy="true">
        <div className="bosco-loader">
          <img src="/assets/bosco/master.webp" alt="Bosco ouvre Le Tourbillon" />
          <span className="loader-pulse" aria-hidden="true" />
          <p>Bosco ouvre Le Tourbillon…</p>
          <small>Il consulte la mer avant de te répondre.</small>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`app-shell ${
        marineScreen === null ? homeStyles.homeShell : shellStyles.safeShell
      }`}
      data-context-key={renderedContextKey}
      data-camera-transform="none"
      data-intro-stage={introStage}
      data-intro-window-look-count={introStage === "greeting" ? 0 : 1}
      data-lab-viewport={labEnabled ? labViewport : undefined}
    >
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">B</span>
          <div>
            <p>BOSCO</p>
            <span>{input.spot.name} · poste météo</span>
          </div>
        </div>
        <div className="top-actions">
          <span className={`connection-dot ${input.connection.online ? "online" : "offline"}`}>
            {input.connection.online ? "En ligne" : "Hors ligne"}
          </span>
          <button
            className="icon-button"
            onClick={toggleAmbience}
            aria-label="Activer ou couper l’ambiance du Tourbillon"
            aria-pressed={ambienceOn}
          >
            <AppIcon name={ambienceOn ? "sound" : "soundOff"} />
          </button>
          <button
            className="icon-button"
            onClick={() => {
              setDraftProfile(profile);
              setShowProfile(true);
            }}
            aria-label="Modifier le profil"
          >
            <AppIcon name="settings" />
          </button>
        </div>
      </header>

      <BoscoHomeCarousel
        active={marineScreen === null}
        message={displayedMessage}
        result={displayedResult}
        input={input}
        onRecordOuting={recordOuting}
        narrative={narrativeVisit}
        onOpenEmile={openEmileNotebook}
        resetToken={homeResetToken}
        scene={
          <BoscoCompositor
            decorSrc={requestedDecor}
            poseSrc={activeImage}
            handBehindSrc={handBehindForPoseAsset(activeImage)}
            fingersFrontSrc={fingersFrontForPoseAsset(activeImage)}
            alt={`Bosco — ${displayedResult.label}`}
            needleAngle={barometerAngle(
              input.weather.pressureHPa,
              input.weather.pressureTrendHPa3h
            )}
            radioHit={radioHit}
            emotion={displayedResult.emotion}
            labEnabled={labEnabled}
            labView={labView}
            labBackground={labBackground}
            seaAnimationPhase={seaAnimationPhase}
          />
        }
      />

      {labEnabled && (
      <section className="control-deck">
        <div className="control-section">
          <span className="eyebrow">MÉTÉO DU TOURBILLON</span>
          <div className="chip-row">
            {WEATHER.map((item) => (
              <button
                key={item.id}
                className={weatherFamily === item.id ? "active" : ""}
                onClick={() => updateWeather(item.id)}
              >
                <span>{item.icon}</span>{item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="control-section">
          <span className="eyebrow">LUMIÈRE</span>
          <div className="chip-row compact">
            <button
              className={manualDaytime === null ? "active" : ""}
              onClick={() => setManualDaytime(null)}
            >
              Auto
            </button>
            {DAYTIMES.map((item) => (
              <button
                key={item.id}
                className={daytime === item.id ? "active" : ""}
                onClick={() => setManualDaytime(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {labEnabled && (
      <section className="lab-panel" data-production-navigation="hidden">
        <div className="lab-heading">
          <div>
            <span className="eyebrow">LABORATOIRE · DIALOGUES LOCAUX</span>
            <h2>
              {boscoDialogueMeta.fragments} fragments ·{" "}
              {boscoDialogueMeta.compatible.toLocaleString("fr-FR")} combinaisons compatibles
            </h2>
          </div>
          <div className="lab-actions">
            <a className="download-link" href="/downloads/Bosco-Etape-4.zip" download>
              Télécharger les 10 JSON
            </a>
            <a className="download-link" href="/downloads/Bosco-Etape-5.zip" download>
              Livrables Étape 5
            </a>
            <button className="close-button" onClick={() => setShowLab((value) => !value)}>
              {showLab ? "Réduire" : "Tester"}
            </button>
            <button
              className="close-button"
              type="button"
              onClick={() => setLabDialogueNonce((value) => value + 1)}
            >
              Régénérer le dialogue
            </button>
          </div>
        </div>

        {showLab && (
          <>
            <div className="diagnostic-grid">
              <label>
                Scénario de voix
                <select
                  value={labScenarioId}
                  onChange={(event) => applyVoiceLabScenario(event.target.value)}
                >
                  {VOICE_LAB_SCENARIOS.map((scenario) => (
                    <option key={scenario.id} value={scenario.id}>{scenario.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Décision visuelle
                <select
                  value={labDecision}
                  onChange={(event) => {
                    const decision = event.target.value as BoscoDecision;
                    setLabDecision(decision);
                    setActiveImage(decisionPoseAsset(decision));
                  }}
                >
                  {DECISIONS.map((decision) => (
                    <option key={decision} value={decision}>{decision}</option>
                  ))}
                </select>
              </label>
              <label>
                Score de test
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={labScore}
                  onChange={(event) => setLabScore(Number(event.target.value))}
                />
                <strong>{labScore.toFixed(1)}/10</strong>
              </label>
              <label>
                État des données
                <select
                  value={input.data.status}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      data: {
                        ...current.data,
                        status: event.target.value as BoscoWeatherInput["data"]["status"],
                        observedAt: new Date().toISOString(),
                      },
                    }))
                  }
                >
                  <option value="complete">Complètes</option>
                  <option value="partial">Partielles</option>
                  <option value="unavailable">Indisponibles</option>
                </select>
              </label>
              <label>
                Pose
                <select
                  value={labPose}
                  onChange={(event) => {
                    const pose = event.target.value as BoscoPose;
                    setLabPose(pose);
                    setActiveImage(poseAsset(pose));
                  }}
                >
                  {POSES.map((pose) => (
                    <option key={pose.id} value={pose.id}>{pose.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Format de contrôle
                <select value={labViewport} onChange={(event) => setLabViewport(event.target.value)}>
                  {["320 × 568", "375 × 667", "390 × 844", "393 × 852", "402 × 874", "414 × 896", "430 × 932", "iPhone paysage", "iPad portrait"].map((viewport) => (
                    <option key={viewport}>{viewport}</option>
                  ))}
                </select>
              </label>
              <label>
                Vue technique
                <select
                  value={labView}
                  onChange={(event) =>
                    setLabView(event.target.value as BoscoLabView)
                  }
                >
                  <option value="final">Résultat final</option>
                  <option value="decor">Décor seul</option>
                  <option value="bosco">Bosco seul</option>
                  <option value="alpha">Canal alpha</option>
                  <option value="mask">Masque d’occlusion</option>
                  <option value="foreground">Premier plan seul</option>
                  <option value="cup">Tasse seule</option>
                  <option value="overlay">Superposition</option>
                  <option value="difference">Vue de différence</option>
                  <option value="anchors">Boîte et ancre</option>
                </select>
              </label>
              <label>
                Fond technique
                <select
                  value={labBackground}
                  onChange={(event) =>
                    setLabBackground(event.target.value as BoscoLabBackground)
                  }
                >
                  <option value="decor">Décor actif</option>
                  <option value="checker">Damier</option>
                  <option value="white">Blanc</option>
                  <option value="black">Noir</option>
                  <option value="red">Rouge</option>
                  <option value="green">Vert</option>
                </select>
              </label>
              <label className="diagnostic-toggle">
                Transition
                <output>Coupe instantanée · 0 ms</output>
              </label>
              <div className="diagnostic-readout">
                <strong>{renderedContextKey}</strong>
                <span>WMO simulé : {input.weather.wmoCode ?? "absent"}</span>
                <span>Décor : {requestedDecor}</span>
                <span>Pose : {activeImage}</span>
                <span>
                  Compositing : fond → Bosco → main arrière → tasse → doigts → comptoir
                </span>
                <span>Caméra : transform none · ancre 768 × 1252</span>
                <span>
                  Animation active : {activeAnimation ?? "aucune"} · phase {seaAnimationPhase}
                </span>
                {displayedDialogueDebug && (
                  <>
                    <strong>{displayedDialogueDebug.dialogueId}</strong>
                    <span>Patron : {displayedDialogueDebug.templateId}</span>
                    <span>
                      Fragments : {displayedDialogueDebug.fragments.join(", ")}
                    </span>
                    <span>
                      Contraintes : {JSON.stringify(displayedDialogueDebug.constraints)}
                    </span>
                    <span>
                      Longueur : {displayedDialogueDebug.length} caractères
                    </span>
                    <span>
                      Mots : {displayedDialogueDebug.wordCount}
                    </span>
                    <span>
                      Faits utilisés : {displayedDialogueDebug.factsUsed.join(" · ")}
                    </span>
                    <span>
                      Raisons : {displayedDialogueDebug.selectionReasons.join(" · ")}
                    </span>
                    <span>
                      Historique : {JSON.stringify(displayedDialogueDebug.history)}
                    </span>
                  </>
                )}
                {Object.values(BOSCO_ANIMATIONS).map((animation) => (
                  <button
                    key={animation.id}
                    type="button"
                    onClick={() =>
                      void playAnimation(animation.id, resultRef.current)
                    }
                    disabled={
                      activeAnimation !== null ||
                      !animationAvailability[animation.id]
                    }
                  >
                    {animation.label} · {animation.duration} ms
                  </button>
                ))}
              </div>
            </div>
            <div className="instrument-grid engine-grid">
              <label>
                Vent moyen <strong>{input.wind.meanKt} nds</strong>
                <input
                  type="range"
                  min="0"
                  max="32"
                  value={input.wind.meanKt}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      wind: { ...current.wind, meanKt: Number(event.target.value) },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
              <label>
                Rafales <strong>{input.wind.gustKt} nds</strong>
                <input
                  type="range"
                  min="0"
                  max="42"
                  value={input.wind.gustKt}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      wind: { ...current.wind, gustKt: Number(event.target.value) },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
              <label>
                Direction <strong>{input.wind.directionDeg}°</strong>
                <input
                  type="range"
                  min="0"
                  max="359"
                  value={input.wind.directionDeg}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      wind: {
                        ...current.wind,
                        directionDeg: Number(event.target.value),
                      },
                      data: {
                        ...current.data,
                        observedAt: new Date().toISOString(),
                      },
                    }))
                  }
                />
              </label>
              <label>
                Vagues <strong>{input.sea.waveHeightM.toFixed(1)} m</strong>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={input.sea.waveHeightM * 10}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      sea: { ...current.sea, waveHeightM: Number(event.target.value) / 10 },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
              <label>
                Houle <strong>{input.sea.swellHeightM.toFixed(1)} m</strong>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={input.sea.swellHeightM * 10}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      sea: { ...current.sea, swellHeightM: Number(event.target.value) / 10 },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
              <label>
                Période <strong>{input.sea.wavePeriodS.toFixed(0)} s</strong>
                <input
                  type="range"
                  min="2"
                  max="18"
                  value={input.sea.wavePeriodS}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      sea: {
                        ...current.sea,
                        wavePeriodS: Number(event.target.value),
                      },
                      data: {
                        ...current.data,
                        observedAt: new Date().toISOString(),
                      },
                    }))
                  }
                />
              </label>
              <label>
                Marée
                <select
                  value={input.tide.trend}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      tide: {
                        ...current.tide,
                        trend: event.target.value as BoscoWeatherInput["tide"]["trend"],
                      },
                      data: {
                        ...current.data,
                        observedAt: new Date().toISOString(),
                      },
                    }))
                  }
                >
                  <option value="rising">Montante</option>
                  <option value="falling">Descendante</option>
                  <option value="slack">Étale</option>
                </select>
              </label>
              <label>
                Évolution du vent <strong>{input.trend.windKt3h} nds / 3 h</strong>
                <input
                  type="range"
                  min="-8"
                  max="12"
                  value={input.trend.windKt3h}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      trend: { windKt3h: Number(event.target.value) },
                      data: {
                        ...current.data,
                        observedAt: new Date().toISOString(),
                      },
                    }))
                  }
                />
              </label>
              <label>
                Visibilité <strong>{(input.weather.visibilityM / 1000).toFixed(1)} km</strong>
                <input
                  type="range"
                  min="2"
                  max="150"
                  value={input.weather.visibilityM / 100}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      weather: { ...current.weather, visibilityM: Number(event.target.value) * 100 },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
              <label>
                Température <strong>{input.weather.temperatureC} °C</strong>
                <input
                  type="range"
                  min="-4"
                  max="38"
                  value={input.weather.temperatureC}
                  onChange={(event) =>
                    setInput((current) => ({
                      ...current,
                      weather: { ...current.weather, temperatureC: Number(event.target.value) },
                      data: { ...current.data, observedAt: new Date().toISOString() }
                    }))
                  }
                />
              </label>
            </div>

            <div className="pose-grid">
              {POSES.map((item) => (
                <button
                  key={item.id}
                  className={state === item.id ? "selected" : ""}
                  onClick={() =>
                    transition(
                      item.id,
                      `${item.label} — aperçu sélectionné, cadrage principal conservé.`
                    )
                  }
                >
                  <img src={poseAsset(item.id)} alt="" loading="lazy" decoding="async" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>
      )}

      <MarineDashboard
        activeScreen={marineScreen === "conditions" || marineScreen === "tides" ? marineScreen : null}
        onNavigate={navigateMarine}
        onData={handleMarineData}
        location={activePort}
        nauticalContext={nauticalContext}
        boscoResult={result}
        enabled={selectedPortReady}
      />

      {marineScreen === "map" && (
        <NauticalMapScreen context={nauticalContext} marineData={marineData} onSelectPort={handleSelectPort} />
      )}

      {marineScreen === "square" && (
        <SquareScreen
          key={`${activePort.id}:${narrativeVisit?.phase === "emile" ? "emile" : "free"}`}
          context={nauticalContext}
          onChangePort={() => navigateMarine("map")}
          initialTab={narrativeVisit?.phase === "emile" ? "emile" : undefined}
          narrativeMode={narrativeVisit?.phase === "emile"}
          onCloseNarrative={closeEmileNotebook}
        />
      )}

      <nav
        className={`bottom-nav ${homeStyles.routeNav}`}
        aria-label="Navigation principale"
      >
        <button
          className={
            marineScreen === null && !showProfile ? homeStyles.activeRoute : ""
          }
          onClick={selectBoscoTab}
          aria-current={
            marineScreen === null && !showProfile ? "page" : undefined
          }
        ><span><AppIcon name="home" /></span>Bosco</button>
        <button
          className={
            marineScreen === "map" && !showProfile
              ? homeStyles.activeRoute
              : ""
          }
          onClick={() => selectPrimary("map")}
          aria-current={
            marineScreen === "map" && !showProfile ? "page" : undefined
          }
        ><span><AppIcon name="map" /></span>Carte</button>
        <button
          className={
            marineScreen === "tides" && !showProfile
              ? homeStyles.activeRoute
              : ""
          }
          onClick={() => selectPrimary("tides")}
          aria-current={
            marineScreen === "tides" && !showProfile ? "page" : undefined
          }
        ><span><AppIcon name="tides" /></span>Marées</button>
        <button
          className={marineScreen === "conditions" && !showProfile ? homeStyles.activeRoute : ""}
          onClick={() => selectPrimary("conditions")}
          aria-current={marineScreen === "conditions" && !showProfile ? "page" : undefined}
        ><span><AppIcon name="conditions" /></span>Conditions</button>
        <button
          className={marineScreen === "square" && !showProfile ? homeStyles.activeRoute : ""}
          onClick={() => selectPrimary("square")}
          aria-current={marineScreen === "square" && !showProfile ? "page" : undefined}
        ><span><AppIcon name="square" /></span>Le Carré</button>
      </nav>

      {showHistory && (
        <div className="profile-overlay" role="dialog" aria-modal="true" aria-labelledby="history-title">
          <section className="profile-card history-card">
            <span className="eyebrow">JOURNAL DE BORD LOCAL</span>
            <h2 id="history-title">Les sorties de {profileName}</h2>
            {outings.length === 0 ? (
              <p>Aucune sortie mémorisée. Ajoute un briefing au journal quand tu pars naviguer.</p>
            ) : (
              <div className="outing-list">
                {outings.map((outing) => (
                  <article key={outing.id}>
                    <div>
                      <strong>{outing.decision}</strong>
                      <span>
                        {new Intl.DateTimeFormat("fr-FR", {
                          dateStyle: "medium",
                          timeStyle: "short"
                        }).format(new Date(outing.at))}
                      </span>
                    </div>
                    <b>{outing.score.toFixed(1)}/10</b>
                    <p>{outing.spot} · {outing.craftType}</p>
                  </article>
                ))}
              </div>
            )}
            <button className="secondary-action history-close" type="button" onClick={() => setShowHistory(false)}>
              Fermer
            </button>
          </section>
        </div>
      )}

      {showProfile && (
        <div className="profile-overlay" role="dialog" aria-modal="true" aria-labelledby="profile-title">
          <form className="profile-card" onSubmit={saveProfile}>
            <span className="eyebrow">PREMIÈRE VISITE AU TOURBILLON</span>
            <h2 id="profile-title">Bosco veut savoir à qui il parle.</h2>
            <p>Ces informations restent sur cet appareil. Bosco ne mémorise rien d’autre.</p>

            <label>
              Ton prénom
              <input
                required
                minLength={2}
                maxLength={40}
                value={draftProfile.firstName}
                onChange={(event) =>
                  setDraftProfile((current) => ({ ...current, firstName: event.target.value }))
                }
                placeholder="Pierre"
              />
            </label>

            <div className="profile-grid">
              <label>
                Embarcation
                <select
                  value={draftProfile.craftType}
                  onChange={(event) =>
                    setDraftProfile((current) => ({ ...current, craftType: event.target.value }))
                  }
                >
                  <option value="catamaran">Catamaran</option>
                  <option value="deriveur">Dériveur</option>
                  <option value="planche-a-voile">Planche à voile</option>
                  <option value="wingfoil">Wingfoil</option>
                  <option value="kayak">Kayak</option>
                  <option value="paddle">Paddle</option>
                  <option value="voilier">Voilier</option>
                  <option value="autre">Autre</option>
                </select>
              </label>
              <label>
                Niveau
                <select
                  value={draftProfile.level}
                  onChange={(event) =>
                    setDraftProfile((current) => ({
                      ...current,
                      level: event.target.value as BoscoProfile["level"]
                    }))
                  }
                >
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="confirme">Confirmé</option>
                  <option value="expert">Expert</option>
                </select>
              </label>
            </div>

            <label>
              Spot favori
              <input
                required
                minLength={2}
                maxLength={80}
                value={draftProfile.favoriteSpot}
                onChange={(event) =>
                  setDraftProfile((current) => ({ ...current, favoriteSpot: event.target.value }))
                }
              />
            </label>

            <label>
              Port d’attache
              <select
                value={homePort.id}
                onChange={(event) => {
                  const port = MANCHE_PORTS.find((item) => item.id === event.target.value);
                  if (port) setHomePort(port);
                }}
              >
                {MANCHE_PORTS.filter((port) => port.status === "active" && port.homePortAllowed).map((port) => (
                  <option key={port.id} value={port.id}>{port.name}</option>
                ))}
              </select>
            </label>

            <label>
              Unités
              <select
                value={draftProfile.units}
                onChange={(event) =>
                  setDraftProfile((current) => ({
                    ...current,
                    units: event.target.value as BoscoProfile["units"]
                  }))
                }
              >
                <option value="marine">Nœuds et mètres</option>
                <option value="metric">km/h et mètres</option>
              </select>
            </label>

            <label className="consent-row">
              <input
                type="checkbox"
                checked={draftProfile.consentToLocalMemory}
                onChange={(event) =>
                  setDraftProfile((current) => ({
                    ...current,
                    consentToLocalMemory: event.target.checked
                  }))
                }
              />
              Mémoriser localement mon profil, mes dialogues et mon journal de bord
            </label>

            <div className="experience-settings" aria-label="Préférences d’expérience">
              <button type="button" className={ambienceOn ? "active" : ""} onClick={toggleAmbience}>
                <span>Ambiance</span>
                <strong>{ambienceOn ? "Activée" : "Coupée"}</strong>
              </button>
              <button type="button" className={notificationsOn ? "active" : ""} onClick={toggleNotifications}>
                <span>Alertes rares</span>
                <strong>{notificationsOn ? "Autorisées" : "Désactivées"}</strong>
              </button>
            </div>

            <button className="primary-action" type="submit">Entrer au Tourbillon</button>
            {profileReady && (
              <button className="secondary-action" type="button" onClick={() => setShowProfile(false)}>
                Annuler
              </button>
            )}
          </form>
        </div>
      )}
    </main>
  );
}
