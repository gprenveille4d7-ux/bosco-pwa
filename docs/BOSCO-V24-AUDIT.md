# BOSCO Version 24 — audit préalable

Date : 1 août 2026

## Identité du projet

- Projet Sites existant conservé : `Bosco vivant`.
- Manifest d’hébergement conservé ; aucun nouveau projet, site ou identifiant.
- Vinext/Vite, React 19 et TypeScript conservés.
- Navigation interne par hash et `history.pushState` conservée ; aucun routeur ajouté.
- PWA, manifeste et service worker existants conservés.

## Éléments verrouillés contrôlés

- Scène et compositeur Bosco inchangés.
- Assets, poses, mains, masque, décors et animations inchangés.
- Moteur de décision, score, dialogue, WMO et temporalités inchangés.
- `app/globals.css` inchangé afin de préserver le rendu maître et les contrôles de non-régression.
- Carrousel d’accueil remis à sa structure officielle : Bosco, Briefing, Score, Conseils, Vigilances.

## Écarts constatés avant intégration

- Navigation principale encore organisée en Bosco, Météo, Marées, Histoire, Plus.
- Carte placée dans le carrousel d’accueil au lieu d’un onglet principal.
- Un seul `selectedPort` jouait à la fois le rôle de port d’attache et de port actif.
- Registre de ports limité à quatre propriétés, sans statut, type, disponibilité ni provenance.
- Cache météo/marin stocké en gros objets dans `localStorage`, sans expiration explicite.
- Écran Vent & Mer distinct de Météo, au lieu d’un module Conditions agrégé.
- Pas de Carré à quatre sections ni de Carnet/favoris persistants.
- Niveau marin Open-Meteo présenté sans avertissement assez explicite sur ses limites côtières.

## Architecture V24 retenue

- Registre central local et versionné des 30 lieux.
- État nautique unique avec `homePort` et `activePort` séparés.
- Calcul géodésique unique pour distance, cap cardinal et temps théoriques.
- Préférences légères en `localStorage`, caches réseau et Carnet séparés dans IndexedDB.
- Cache météo/marin daté, expiré après 30 minutes mais conservé comme repli hors ligne.
- Requêtes limitées par timeout, annulables et contrôlées lors des changements de port.
- Contenus du Carré locaux, typés, versionnés, filtrés par statut et fiabilité.
- Découverte d’un port déclenchée par la première ouverture de son Carré.
- Nouvelles vues isolées : Carte, Marées, Conditions, Le Carré.

## Sources et limites

- Météo : Open-Meteo Weather API.
- Mer et niveau marin : Open-Meteo Marine, prévisions DWD.
- La hauteur `sea_level_height_msl` est une estimation sur point de grille, pas une station officielle ; elle n’est pas adaptée à la navigation côtière.
- Le Carré conserve les URLs, organismes, dates d’accès, niveaux de fiabilité et statuts de publication.

## Retour arrière

Les données historiques de Bosco gardent leurs clés et formats. La sélection de port V23 est lue une fois comme source de migration vers le port actif V24. Aucun stockage inconnu n’est supprimé. Les nouvelles données utilisent les namespaces `bosco.navigation.*`, `bosco.v24.cache.*` et `bosco.v24.carnet`.
