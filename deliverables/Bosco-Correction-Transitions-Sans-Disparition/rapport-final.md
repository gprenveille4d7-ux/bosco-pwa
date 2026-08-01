# BOSCO — Transitions sans disparition

## Diagnostic

Le vide provenait de `BoscoCompositor`, dans l’effet de changement des trois
calques mobiles. Après décodage, la logique appliquait
`setPoseVisible(false)`, attendait 75 ms avec `setTimeout`, remplaçait les
sources, puis rétablissait la visibilité. Les classes
`.scene-bosco-hidden`, `.scene-bosco-visible` et les transitions CSS d’opacité
rendaient donc volontairement Bosco transparent entre deux poses.

Une interruption pendant ce délai pouvait en outre annuler la minuterie après
le masquage et avant le rétablissement, prolongeant l’état invisible.

## Correction

- La pose courante reste peinte pendant tout le chargement.
- Les calques Bosco, main arrière et doigts avant sont décodés dans trois
  préchargeurs `Image` séparés du DOM visible.
- Les trois sources ne sont validées qu’ensemble.
- Le remplacement est regroupé dans un seul état React et exécuté dans un
  `requestAnimationFrame`.
- Un identifiant monotone invalide toute promesse obsolète.
- Un échec conserve intégralement la dernière pose valide.
- Les classes cachées, la minuterie de fondu et toute transition d’opacité de
  Bosco ont été supprimées.
- Les calques mobiles sont explicitement maintenus à `opacity: 1`,
  `visibility: visible` et `display: block`.

## Preuves

- 5 animations inventoriées.
- 13 changements de poses contrôlés.
- 65 frames de contrôle générées autour des remplacements.
- 0 frame vide détectée dans le contrôle alpha déterministe.
- Opacité minimale du contrat de rendu : 1.
- Minimum mesuré dans les calques mobiles : 779 858 pixels opaques.
- Variation maximale de l’ancrage : 0 px.
- Une seule instance principale de Bosco et une seule tasse POLDERS.

Le contrôle navigateur interne n’a pas pu joindre l’aperçu local malgré un
serveur déclaré sain. Les contrôles de l’iPhone réel et de la PWA installée
restent donc à effectuer par Guillaume après publication.

