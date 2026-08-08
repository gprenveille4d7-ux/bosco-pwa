/*
CARNET D’ÉMILE — Granville

Ce fichier contient uniquement les récits historiques / réels du Carnet d’Émile.

Pour ajouter une histoire :
1. Copier un bloc existant.
2. Modifier id et contentId.
3. Modifier title.
4. Modifier text.
5. Ne pas modifier la structure générale.
*/

export const histoiresEmileGranville = [
  {
    id: "granville-emile-001",
    contentId: "granville-emile-histoire-01",
    portId: "granville",
    authorType: "emile",
    contentType: "documentedFact",
    title: "Une ville façonnée par le port",
    text: `Granville s’est construite avec son port, la grande pêche à Terre-Neuve et l’histoire des corsaires. Les collections municipales racontent cette continuité, depuis la fondation royale du XVe siècle jusqu’au port coquillier contemporain.`,
    category: "histoire portuaire",
    historicalPeriod: "XVe–XXIe siècles",
    sources: [
      {
        "sourceId": "ville-granville-musee",
        "title": "Musée d’art et d’histoire de Granville",
        "organisation": "Ville de Granville",
        "url": "https://www.ville-granville.fr/a-voir-a-faire-a-granville/vie-culturelle-et-artistique/musee-dart-moderne-richard-anacreon/",
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
