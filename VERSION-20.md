# Bosco — Version 20

Date : 29 juillet 2026  
Version : 20  
Site : https://bosco-vivant.able-hake-4182.chatgpt.site  
Projet Sites conservé : `appgprj_6a65a90b2b948191bf0e00bdf40515a4`

## Changements

- remplacement de la voix littéraire par une voix orale de vieux matelot normand ;
- séparation stricte entre données, décision de sécurité, personnalité et variation ;
- réponses composées en trois blocs : attaque, explication factuelle, conseil ;
- 20 ouvertures et 20 conclusions pour chacune des 7 familles de dialogue ;
- 15 formulations pour chacun des 9 phénomènes principaux ;
- sélection pseudo-aléatoire stable à partir de l’analyse réelle ;
- historique local anti-répétition et délai de réemploi des expressions fortes ;
- suppression de toute dépendance à une IA, une API de dialogue ou une synthèse vocale ;
- laboratoire développeur enrichi avec 22 scénarios de voix et les raisons de sélection ;
- cache PWA renouvelé pour diffuser immédiatement la version 20 ;
- microtextes des animations harmonisés avec la nouvelle voix, sans changer les animations.

## Architecture du moteur

1. `lib/bosco-engine.ts` calcule la décision et le score à partir des données.
2. `lib/bosco-dialogue-engine.ts` lit uniquement les faits disponibles et choisit les phénomènes utiles.
3. `data/bosco/bosco-dialogue-library.ts` fournit les fragments vocaux et leurs contraintes.
4. `app/page.tsx` met en cache la réponse pour une analyse identique et l’affiche sans modifier la décision.

Le moteur n’invente aucune valeur. Un fragment chiffré n’est utilisable que si la donnée requise est présente et finie.

## Installation

Pré-requis : Node.js 22.13 ou plus récent.

```bash
npm ci
```

## Lancement local

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

## Tests

```bash
npm run typecheck
npm run lint
npm run test:dialogues
npm test
```

Le corpus humain de 100 réponses est régénéré avec :

```bash
npm run dialogue:corpus
```

Les contrôles couvrent notamment :

- 500 générations variées ;
- 100 combinaisons contrôlées contre l’invention de nombres ;
- stabilité au nouveau rendu et au rechargement ;
- anti-répétition ;
- longueur maximale de 85 mots ;
- cohérence du verdict défavorable ou dangereux ;
- données absentes ;
- absence d’API IA, de synthèse vocale et de hasard de rendu ;
- non-régression des données, décors, animations, navigation et PWA.

## Variables d’environnement

Aucune variable d’environnement n’est nécessaire au moteur de dialogues. Les données météo et marines continuent d’utiliser l’architecture existante du projet.
