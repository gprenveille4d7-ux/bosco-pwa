/*
CARNET D’ÉMILE — Cherbourg

Ce fichier contient uniquement les récits historiques / réels du Carnet d’Émile.

Pour ajouter une histoire :
1. Copier un bloc existant.
2. Modifier id et contentId.
3. Modifier title.
4. Modifier text.
5. Ne pas modifier la structure générale.
*/

export const histoiresEmileCherbourg = [
  {
    id: "cherbourg-emile-001",
    contentId: "cherbourg-emile-titanic-01",
    portId: "cherbourg",
    authorType: "emile",
    contentType: "documentedFact",
    title: "L’escale du Titanic",
    text: `Le 10 avril 1912, le Titanic fit escale dans la rade de Cherbourg. Le paquebot resta au large : les transbordeurs Nomadic et Traffic assurèrent l’embarquement des passagers pendant cette courte escale continentale.`,
    category: "paquebots",
    historicalPeriod: "1912",
    sources: [
      {
        "sourceId": "cite-mer-titanic",
        "title": "Titanic, retour à Cherbourg",
        "organisation": "La Cité de la Mer",
        "url": "https://www.citedelamer.com/espaces/titanic-retour-a-cherbourg/",
        "accessedAt": "2026-08-01"
      }
    ],
    verifiedAt: "2026-08-01",
    reliability: "verified",
    publicationStatus: "published",
    priority: 10,
    offlineAvailable: true,
    version: 1,
  }
];
