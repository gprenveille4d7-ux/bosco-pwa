# Résultats réels des contrôles

Date d’exécution : 28 juillet 2026.

## Commandes

- `python3 scripts/audit-step7-assets.py` : réussi, 12 poses, 0 erreur,
  toile 1536 × 1536, ancre 768 × 1252, variation 0 px.
- `npm run lint` : réussi.
- `npm test` : réussi, 23 tests, 23 réussites, 0 échec.
- `npm run build` : exécuté par `npm test`, réussi avec artefact Sites validé.

## Contrôles navigateur sur l’aperçu exact

- animation d’introduction « regarde vers la mer » observée ;
- pause `observing` observée avec la pose mer visible et opacité 1 ;
- retour à la pose de repos observé ;
- cinq animations déclenchées séparément depuis le laboratoire ;
- chaque séquence revient à `idle` avec opacité 1 ;
- une instance de Bosco et une instance de la tasse pendant chaque séquence ;
- caméra et scène avec transformation calculée `none` ;
- aucune erreur provenant de l’application dans la console ;
- les seuls messages d’erreur observés provenaient de l’extension de contrôle
  du navigateur, hors application Bosco.

## Contrôles visuels produits

- capture avant et après ;
- superposition et différence ;
- gros plans 200 % et 400 % ;
- main restaurée sur fond rouge et dans la scène ;
- huit étapes de l’animation vers la mer ;
- matrice des 40 décors ;
- planche des neuf formats demandés en simulation.

## Limites matérielles

- Safari WebKit réel : non disponible.
- iPhone réel : non contrôlé.
- PWA installée depuis l’écran d’accueil : non contrôlée.

