export type SquareAuthor = "bosco" | "emile" | "sailorCorner" | "carnetSystem";
export type SquareContentType =
  | "boscoStory"
  | "emileHistory"
  | "oralTradition"
  | "legend"
  | "practicalAdvice"
  | "documentedFact"
  | "portNotice";

export type EditorialSource = {
  sourceId: string;
  title: string;
  organisation: string;
  url: string;
  accessedAt: string;
};

export type SquareContent = {
  contentId: string;
  portId: string;
  authorType: SquareAuthor;
  contentType: SquareContentType;
  title: string;
  text: string;
  category: string;
  historicalPeriod?: string;
  sources: readonly EditorialSource[];
  verifiedAt: string;
  reliability: "verified" | "documented" | "oralTradition" | "legend" | "fictionalised";
  publicationStatus: "published" | "hidden" | "archived";
  priority: number;
  offlineAvailable: true;
  version: number;
};

const OPEN_METEO_SOURCE: EditorialSource = {
  sourceId: "open-meteo-marine-docs",
  title: "Marine Weather API",
  organisation: "Open-Meteo / DWD",
  url: "https://open-meteo.com/en/docs/marine-weather-api",
  accessedAt: "2026-08-01",
};

export const SQUARE_CONTENTS: readonly SquareContent[] = [
  {
    contentId: "jullouville-bosco-depart-01",
    portId: "jullouville",
    authorType: "bosco",
    contentType: "boscoStory",
    title: "Le bout vérifié deux fois",
    text: "Écoute bien. À Jullouville, les anciens parlaient d’un bout d’amarrage qui refusait de tenir les jours où la mer préparait un mauvais coup. Un soir de septembre, un jeune pêcheur avait noué sa barque comme on ferme une porte, vite fait et sans regarder derrière soi. Le ciel était pourtant clair, et il se moquait des vieux accoudés au comptoir. Dans la nuit, le vent a tourné d’un seul coup. On raconte que le bout s’est défait, puis qu’il s’est renoué tout seul autour d’un pieu, avec deux tours morts et une demi-clé propre comme à l’école. Au matin, la barque était la seule à ne pas avoir dérivé. Le jeune a juré qu’une main mouillée avait sauvé son bateau. Les anciens, eux, ont simplement bu une gorgée et répondu que la mer laisse parfois une seconde chance aux têtes dures. Depuis, ici, on vérifie toujours ses amarres deux fois. Pas par peur des fantômes… enfin, c’est ce qu’on dit.",
    category: "légende du comptoir",
    sources: [],
    verifiedAt: "2026-08-01",
    reliability: "fictionalised",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  },
  {
    contentId: "jullouville-sailor-exposure-01",
    portId: "jullouville",
    authorType: "sailorCorner",
    contentType: "practicalAdvice",
    title: "Une côte ouverte",
    text: "La plage est exposée au large. Observe séparément le vent moyen, les rafales, la hauteur des vagues et leur période avant toute mise à l’eau. Les valeurs de Bosco restent des repères indicatifs : vérifie les informations officielles et les conditions réellement observées sur place.",
    category: "prudence",
    sources: [OPEN_METEO_SOURCE],
    verifiedAt: "2026-08-01",
    reliability: "documented",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  },
  {
    contentId: "granville-emile-histoire-01",
    portId: "granville",
    authorType: "emile",
    contentType: "documentedFact",
    title: "Une ville façonnée par le port",
    text: "Granville s’est construite avec son port, la grande pêche à Terre-Neuve et l’histoire des corsaires. Les collections municipales racontent cette continuité, depuis la fondation royale du XVe siècle jusqu’au port coquillier contemporain.",
    category: "histoire portuaire",
    historicalPeriod: "XVe–XXIe siècles",
    sources: [{ sourceId: "ville-granville-musee", title: "Musée d’art et d’histoire de Granville", organisation: "Ville de Granville", url: "https://www.ville-granville.fr/a-voir-a-faire-a-granville/vie-culturelle-et-artistique/musee-dart-moderne-richard-anacreon/", accessedAt: "2026-08-01" }],
    verifiedAt: "2026-08-01",
    reliability: "documented",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  },
  {
    contentId: "cherbourg-emile-titanic-01",
    portId: "cherbourg",
    authorType: "emile",
    contentType: "documentedFact",
    title: "L’escale du Titanic",
    text: "Le 10 avril 1912, le Titanic fit escale dans la rade de Cherbourg. Le paquebot resta au large : les transbordeurs Nomadic et Traffic assurèrent l’embarquement des passagers pendant cette courte escale continentale.",
    category: "paquebots",
    historicalPeriod: "1912",
    sources: [{ sourceId: "cite-mer-titanic", title: "Titanic, retour à Cherbourg", organisation: "La Cité de la Mer", url: "https://www.citedelamer.com/espaces/titanic-retour-a-cherbourg/", accessedAt: "2026-08-01" }],
    verifiedAt: "2026-08-01",
    reliability: "verified",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  },
  {
    contentId: "mont-emile-marees-01",
    portId: "mont-saint-michel",
    authorType: "emile",
    contentType: "documentedFact",
    title: "Le caractère maritime retrouvé",
    text: "Dans la baie, la marée appartient autant au paysage qu’à l’histoire. Le musée maritime du Mont explique le phénomène des grandes marées et l’opération menée pour rétablir le caractère maritime du rocher.",
    category: "patrimoine maritime",
    sources: [{ sourceId: "ot-mont-musee-maritime", title: "Musée Maritime", organisation: "Destination Mont Saint-Michel – Normandie", url: "https://www.ot-montsaintmichel.com/patrimoine-culturel/musee-maritime/", accessedAt: "2026-08-01" }],
    verifiedAt: "2026-08-01",
    reliability: "documented",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  },
] as const;

export function selectSquareContents(portId: string, authorType: SquareAuthor): SquareContent[] {
  return SQUARE_CONTENTS.filter(
    (content) => content.portId === portId && content.authorType === authorType && content.publicationStatus === "published",
  ).sort((a, b) => b.priority - a.priority || a.contentId.localeCompare(b.contentId));
}
