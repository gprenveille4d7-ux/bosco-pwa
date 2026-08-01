"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { DEFAULT_MANCHE_PORT, findManchePort, type ManchePort } from "@/data/manche-ports";
import { deriveNauticalContext } from "@/lib/v24/nautical";

export const HOME_PORT_KEY = "bosco.navigation.home-port:v1";
export const ACTIVE_PORT_KEY = "bosco.navigation.active-port:v1";
const LEGACY_SELECTED_PORT_KEY = "bosco:selected-port:v1";

function validHome(portId: string | null): ManchePort | null {
  const port = findManchePort(portId);
  return port?.status === "active" && port.homePortAllowed ? port : null;
}

function validActive(portId: string | null): ManchePort | null {
  const port = findManchePort(portId);
  return port?.status === "active" && port.activePortAllowed ? port : null;
}

export function useNauticalContext() {
  const [homePort, setHomePortState] = useState<ManchePort>(DEFAULT_MANCHE_PORT);
  const [activePort, setActivePortState] = useState<ManchePort>(DEFAULT_MANCHE_PORT);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      try {
        const home = validHome(window.localStorage.getItem(HOME_PORT_KEY)) ?? DEFAULT_MANCHE_PORT;
        const active =
          validActive(window.localStorage.getItem(ACTIVE_PORT_KEY)) ??
          validActive(window.localStorage.getItem(LEGACY_SELECTED_PORT_KEY)) ??
          home;
        setHomePortState(home);
        setActivePortState(active);
      } catch {
        // The validated Jullouville defaults remain available without storage.
      } finally {
        setReady(true);
      }
    }, 0);
    return () => window.clearTimeout(initialize);
  }, []);

  const setActivePort = useCallback((port: ManchePort) => {
    if (!port.activePortAllowed || port.status !== "active") return;
    setActivePortState(port);
    try {
      window.localStorage.setItem(ACTIVE_PORT_KEY, port.id);
    } catch {
      // The active context remains valid for this session.
    }
  }, []);

  const setHomePort = useCallback((port: ManchePort) => {
    if (!port.homePortAllowed || port.status !== "active") return;
    setHomePortState(port);
    try {
      window.localStorage.setItem(HOME_PORT_KEY, port.id);
    } catch {
      // The choice remains valid for this session.
    }
  }, []);

  const nauticalContext = useMemo(
    () => deriveNauticalContext(homePort, activePort),
    [homePort, activePort],
  );

  return { homePort, activePort, setHomePort, setActivePort, nauticalContext, ready };
}
