# Bosco — Version 21

Date : 29 juillet 2026  
Version : 21  
Site : https://bosco-vivant.able-hake-4182.chatgpt.site  
Projet Sites conservé : `appgprj_6a65a90b2b948191bf0e00bdf40515a4`

## Changements

- introduction déterministe `greeting → thinking → verdict → completed` ;
- accueil personnalisé « Salut, [prénom]. » avec fallback « Salut. » ;
- accueil visible 2,5 secondes et réflexion visible 4,5 secondes ;
- un seul passage vers la pose qui regarde la fenêtre ;
- reprise de la même horloge de session en React Strict Mode, sans double départ ;
- verdict conservé après la fin de l’introduction et stable au nouveau rendu ;
- suppression du regard vers la fenêtre dans les animations d’attente et au retour sur l’accueil ;
- vignette carrée verrouillée par un conteneur permanent indépendant de la longueur du texte ;
- canevas 1536 × 1536 et ancres inchangés pour toutes les poses ;
- fondu d’opacité de 460 ms, sans `scale()`, zoom, recadrage ou déplacement ;
- banque de dialogues enrichie en vocabulaire de catamaran, manœuvre, état de mer et marée ;
- expressions pirates supprimées de la sélection courante ;
- cache PWA renouvelé pour la Version 21.

Le moteur météo et marin, la décision de sécurité, le score Bosco, les marées,
les vigilances, les décors et les temporalités n’ont pas été modifiés.

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

Les contrôles couvrent notamment :

- ordre, durées et irréversibilité de la machine d’introduction ;
- prénom réel et fallback sans prénom inventé ;
- un seul regard vers la fenêtre ;
- résistance au double déclenchement des effets ;
- verdict persistant ;
- géométrie et ratio invariants ;
- absence de `scale()` dans les transitions de poses ;
- fondu d’opacité fixé à 460 ms ;
- 500 générations de dialogue ;
- 150 combinaisons dédiées au registre maritime ;
- 100 combinaisons contrôlées contre l’invention de nombres ;
- décisions dangereuses et défavorables non ambiguës ;
- absence d’API IA, de synthèse vocale et de hasard de rendu ;
- non-régression des données, décors, navigation horizontale et PWA.

## Variables d’environnement

Aucune variable d’environnement n’est nécessaire au moteur de dialogues.
Les données météo et marines conservent l’architecture existante.
