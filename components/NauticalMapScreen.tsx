"use client";

import { MancheMap } from "@/components/MancheMap";
import type { ManchePort } from "@/data/manche-ports";
import type { MarineDashboardData } from "@/lib/marine-data";
import type { NauticalContext } from "@/lib/v24/nautical";
import styles from "./V24Screens.module.css";

type Props = {
  context: NauticalContext;
  marineData: MarineDashboardData | null;
  onChoosePort: (port: ManchePort, data: MarineDashboardData | null) => void;
  onListenToBosco: (port: ManchePort, data: MarineDashboardData | null) => void;
};

export function NauticalMapScreen({ context, marineData, onChoosePort, onListenToBosco }: Props) {
  return (
    <section className={styles.screen} aria-label="Carte de la Manche">
      <div className={styles.scroll}>
        <div className={styles.mapWrap}>
          <MancheMap
            selectedPort={context.activePort}
            homePort={context.homePort}
            selectedData={marineData}
            onChoosePort={onChoosePort}
            onListenToBosco={onListenToBosco}
          />
        </div>
      </div>
    </section>
  );
}
