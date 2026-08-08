# Ajouter une histoire dans BOSCO

Les histoires ne se modifient plus dans `assets/page-DP0zD7P0.js`.

## Ajouter une histoire de Bosco

1. Ouvrir `data/histoires-bosco/nom-du-port.js`.
2. Copier le dernier bloc compris entre `{` et `}`.
3. Donner un nouvel `id`, par exemple `granville-bosco-002`.
4. Donner un nouveau `contentId`, par exemple `granville-fiction-02`.
5. Modifier `title`.
6. Remplacer le contenu de `text` entre les accents graves `` ` ``.
7. Sauvegarder le fichier.

Exemple prêt à copier :

```js
{
  id: "granville-bosco-002",
  contentId: "granville-fiction-02",
  portId: "granville",
  authorType: "bosco",
  contentType: "legend",
  title: "Titre de la nouvelle histoire",
  text: `Texte complet de la nouvelle histoire.`,
  category: "légende fictive de Bosco",
  sources: [],
  verifiedAt: "2026-08-08",
  reliability: "fictionalised",
  publicationStatus: "published",
  priority: 10,
  offlineAvailable: true,
  narrativeCategory: "fiction",
  version: 28,
}
```

## Ajouter une histoire d’Émile

Suivre la même procédure dans `data/carnet-emile/nom-du-port.js`.

Exemple prêt à copier :

```js
{
  id: "granville-emile-002",
  contentId: "granville-real-02",
  portId: "granville",
  authorType: "emile",
  contentType: "documentedFact",
  title: "Titre du nouveau récit historique",
  text: `Texte complet et vérifié du récit.`,
  category: "histoire réelle du carnet d’Émile",
  historicalPeriod: "Période concernée",
  sources: [],
  verifiedAt: "2026-08-08",
  reliability: "verified",
  publicationStatus: "published",
  priority: 10,
  offlineAvailable: true,
  narrativeCategory: "real",
  version: 28,
}
```

## Ajouter un nouveau port

1. Créer `data/histoires-bosco/nom-du-port.js`.
2. Créer `data/carnet-emile/nom-du-port.js`.
3. Copier la notice et la structure d’un port existant.
4. Ajouter les deux imports et les deux lignes correspondantes dans `data/index.js`.

Le nom utilisé dans `portId` doit être exactement celui du port dans BOSCO. Les nouveaux fichiers chargés par l’index sont automatiquement mis en cache lors de l’ouverture en ligne suivante.

## Modifier une phrase générale de Bosco

Ouvrir `data/dialogues-bosco.js`, rechercher la phrase ou son identifiant, puis modifier uniquement le texte concerné. Ce fichier ne contient aucune histoire longue liée à un port.

## Règles importantes

- Un `id` et un `contentId` doivent être uniques.
- Ne pas modifier les anciens `contentId` : ils conservent la progression des lecteurs actuels.
- Utiliser `publicationStatus: "published"` pour rendre un récit visible.
- Ne pas modifier `assets/page-DP0zD7P0.js` pour ajouter ou corriger une histoire.
