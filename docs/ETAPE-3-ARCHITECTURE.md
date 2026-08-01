# Étape 3 — Bosco vivant

## Principe

L’interface repose sur un moteur d’état. Bosco, le décor, les instruments et
la météo sont pilotés séparément afin qu’une réaction n’oblige jamais à
recalculer toute l’image.

## États permanents

`resting`, `listening`, `thinking`, `sea`, `barometer`, `chart`, `preparing`,
`speaking`, `satisfied`, `worried`, `annoyed`, `protective`.

Chaque état possède une pose visuelle et peut recevoir les micro-animations
communes : respiration, épaules, vapeur, éclairage, regard suggéré et
pulsation de parole.

## Événements de l’application

| Événement | Réaction principale | État de retour |
| --- | --- | --- |
| Ouverture | Bosco écoute | Repos |
| GPS trouvé | Bosco consulte la carte | Réflexion |
| Chargement météo | Bosco consulte le baromètre | Baromètre |
| Calcul terminé | Bosco prépare sa réponse | Satisfait |
| Lecture du briefing | Bosco parle avec la synthèse vocale | Satisfait |
| Erreur | Bosco vérifie la radio | Contrarié |
| Aucune connexion | Bosco tape sur la radio | Protecteur |
| Aucune météo | Bosco refuse d’inventer | Repos |

## Calques indépendants

- météo de fenêtre : soleil, couvert, pluie, forte pluie, brouillard, orage ;
- lumière : matin, midi, soir, nuit ;
- lanternes : halo et scintillement ;
- tasse POLDERS : vapeur ;
- radio : témoin et vibration d’erreur ;
- baromètre : aiguille pilotée par la valeur de vent ;
- dialogue : pulsation de parole et synthèse vocale française.

## Contrat d’identité

La référence `bosco-master-reference` reste l’autorité absolue. Les textes
`BOSCO`, `LE TOURBILLON` et `POLDERS`, le bonnet rouge, le pull bleu marine,
l’écusson, la tasse, le cadrage et les grands repères du décor ne doivent pas
être modifiés.

## Intégration des données réelles

Les valeurs de démonstration `wind`, `swell` et `tide` sont centralisées dans
`app/page.tsx`. Les remplacer par la réponse normalisée du service météo, puis
déclencher `handleEvent("loading")`, `handleEvent("done")` ou
`handleEvent("unavailable")` selon l’issue.
