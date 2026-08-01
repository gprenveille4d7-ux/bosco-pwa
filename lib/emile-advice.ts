import corpus from "@/data/bosco/emile-advice.json";

export type EmileAdvice = {
  id: string;
  text: string;
  kind: "quote" | "paraphrase";
  provenance: string;
  sourceExcerpt: string;
  sourceDomain?: "marine" | "alpinisme" | "aviation";
  principleId?: string;
};

export type DailyEmileAdvice = EmileAdvice & {
  corpusId: string;
  localDate: string;
  attributionLabel: "— Conseil d’Émile" | "D’après un conseil d’Émile";
};

function localDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localDayOrdinal(date: Date): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

function hashText(text: string): number {
  let hash = 2166136261;
  for (const character of text) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function selectDailyEmileAdvice(date: Date): DailyEmileAdvice {
  const advices = corpus.advices as EmileAdvice[];
  if (!advices.length) {
    throw new Error("Le corpus officiel d’Émile est vide.");
  }
  const offset = hashText(corpus.corpusId) % advices.length;
  const advice = advices[(localDayOrdinal(date) + offset) % advices.length];
  return {
    ...advice,
    corpusId: corpus.corpusId,
    localDate: localDateKey(date),
    attributionLabel:
      advice.kind === "quote" ? "— Conseil d’Émile" : "D’après un conseil d’Émile",
  };
}

export const EMILE_ADVICE_COUNT = corpus.advices.length;
export const EMILE_ADVICE_CORPUS_ID = corpus.corpusId;
