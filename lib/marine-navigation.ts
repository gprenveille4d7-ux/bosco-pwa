"use client";

import { useCallback, useEffect, useState } from "react";

export type MarineScreen = "weather" | "tides" | "sea" | "conditions";
export type BoscoScreen = MarineScreen | "map" | "square";

const HASHES: Record<BoscoScreen, string> = {
  weather: "#/meteo",
  tides: "#/marees",
  sea: "#/vent-mer",
  conditions: "#/conditions",
  map: "#/carte",
  square: "#/le-carre",
};

function fromHash(hash: string): BoscoScreen | null {
  return (
    (Object.entries(HASHES).find(([, value]) => value === hash)?.[0] as
      | BoscoScreen
      | undefined) ?? null
  );
}

export function useMarineNavigation() {
  const [screen, setScreen] = useState<BoscoScreen | null>(null);

  useEffect(() => {
    const sync = () => setScreen(fromHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const navigate = useCallback((next: BoscoScreen | null) => {
    const nextUrl = next
      ? `${window.location.pathname}${window.location.search}${HASHES[next]}`
      : `${window.location.pathname}${window.location.search}`;
    window.history.pushState({ boscoMarineScreen: next }, "", nextUrl);
    setScreen(next);
  }, []);

  const selectPrimary = useCallback(
    (next: BoscoScreen | null, onReselect?: () => void) => {
      if (screen === next) {
        onReselect?.();
        return;
      }
      navigate(next);
    },
    [navigate, screen],
  );

  return { marineScreen: screen, navigateMarine: navigate, selectPrimary };
}
