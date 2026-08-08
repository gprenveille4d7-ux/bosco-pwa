/*
COIN DU MARIN — Jullouville

Ce fichier contient uniquement les conseils pratiques du Coin du marin.

Pour ajouter une histoire :
1. Copier un bloc existant.
2. Modifier id et contentId.
3. Modifier title.
4. Modifier text.
5. Ne pas modifier la structure générale.
*/

export const conseilsMarinJullouville = [
  {
    id: "jullouville-marin-001",
    contentId: "jullouville-sailor-exposure-01",
    portId: "jullouville",
    authorType: "sailorCorner",
    contentType: "practicalAdvice",
    title: "Une côte ouverte",
    text: `La plage est exposée au large. Observe séparément le vent moyen, les rafales, la hauteur des vagues et leur période avant toute mise à l’eau. Les valeurs de Bosco restent des repères indicatifs : vérifie les informations officielles et les conditions réellement observées sur place.`,
    category: "prudence",
    sources: [
      {
        "sourceId": "open-meteo-marine-docs",
        "title": "Marine Weather API",
        "organisation": "Open-Meteo / DWD",
        "url": "https://open-meteo.com/en/docs/marine-weather-api",
        "accessedAt": "2026-08-01"
      }
    ],
    verifiedAt: "2026-08-01",
    reliability: "documented",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  }
];
