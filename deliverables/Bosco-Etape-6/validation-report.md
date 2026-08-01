# Étape 6 — Polissage cinématographique

## Corrections intégrées

- Responsive mobile-first avec garde-fous à 640, 390 et 350 px.
- Navigation inférieure collée à la zone sûre de l’iPhone.
- Cartes, titres et métriques protégés contre les débordements horizontaux.
- Météo découpée dans trois carreaux visibles de la fenêtre.
- Aucun effet météo global au-dessus du corps, de la barbe, des bras ou de la tasse.
- Pluie, brouillard, éclairs, lumière et ruissellement contenus dans le vitrage.
- Fondu de 440 ms entre les poses, avec une très légère interpolation.
- Respiration localisée et discrète ; le décor complet ne zoome plus.
- Clignements irréguliers pilotés par le comportement, désactivés pour les poses tournées.
- Vapeur, lanterne, baromètre et ambiance sonore conservés et affinés.
- Voix navigateur ralentie et assombrie, avec sélection prioritaire d’une voix masculine française.
- Profil OpenAI Voice et ElevenLabs V6 prêt pour une future intégration côté serveur.
- Préchargement intelligent des poses désactivé en mode économie de données.
- Images secondaires chargées paresseusement.
- Prise en charge de `prefers-reduced-motion`.

## Contrôles automatisés

- Lint : conforme.
- Build de production : conforme.
- Artefact Sites : conforme.
- Tests moteur, sécurité, assets et livrables : 21/21 réussis.

## Limite connue

Les illustrations existantes contiennent Bosco et le décor dans une seule image aplatie. La V6
utilise donc un masque de vitrage conservateur, commun aux douze poses, afin de garantir que la
météo ne traverse jamais Bosco. Une séparation parfaite de chaque reflet derrière toutes les
silhouettes nécessiterait de nouveaux calques détourés, ce qui est explicitement hors du périmètre
de cette étape.
