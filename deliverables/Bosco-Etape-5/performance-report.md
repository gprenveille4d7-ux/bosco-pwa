# Étape 5 — Rapport de performance

Date : 26 juillet 2026  
Cible : PWA Bosco, Safari iPhone/iPad et Chrome Android.

## Budget

- Animation : 60 FPS sur appareil récent.
- Réaction visuelle : 1 à 3 secondes.
- Cible tactile : 44 px minimum.
- Calques décoratifs animés simultanément : 5 maximum.
- Sources sonores continues : 3 maximum.
- Journal local : 30 sorties maximum.
- Dialogues anti-répétition : 12 entrées maximum.
- Notifications : 3 maximum par jour, avec temporisation globale.

## Poids des assets intégrés

- Douze poses WebP : environ 15 à 17 Ko par fichier.
- Six décisions WebP : environ 545 à 644 Ko par fichier.
- Image maître WebP : environ 256 Ko.
- Bibliothèque visuelle Bosco actuelle : environ 4 Mo.

Les poses légères sont utilisées pendant les transitions et la parole. Les images décisionnelles haute définition sont chargées une fois puis mises en cache.

## Optimisations appliquées

### Animation

- Propriétés principales limitées à `transform`, `opacity` et `filter`.
- Aucune animation JavaScript image par image.
- Mouvement de bouche limité à quatre états discrets.
- Ordonnanceur d’inactivité suspendu lorsque l’onglet est masqué.
- Respect de `prefers-reduced-motion`.

### Son

- Trois boucles procédurales courtes réutilisées : feu, vent et pluie.
- Aucun téléchargement audio supplémentaire.
- Contexte audio suspendu lorsque la PWA est masquée.
- Ambiance désactivée par défaut et coupée si `saveData` est actif.
- Réduction automatique de l’ambiance pendant la voix.

### Réseau et hors ligne

- Service worker avec cache versionné.
- Préchargement du shell, des douze poses et des six décisions.
- Navigation en stratégie réseau d’abord avec repli sur le dernier shell valide.
- Assets en stratégie cache d’abord.
- Aucune donnée météo inventée hors ligne : le moteur conserve le statut et la date des données.

### Mémoire

- Profils, préférences, dialogues, notifications et sorties enregistrés localement.
- Tableaux bornés pour empêcher la croissance indéfinie.
- Aucun audio pré-rendu conservé.

## Points de vigilance

1. Les images décisionnelles constituent l’essentiel du poids. Elles sont conservées car ce sont les assets validés ; une compression supplémentaire nécessiterait une nouvelle validation visuelle.
2. La synthèse vocale native varie selon les voix installées sur iOS. La sélection automatique favorise le français de France et les voix masculines naturelles lorsqu’elles existent.
3. Les alertes réellement déclenchées lorsque l’application est fermée nécessiteront ultérieurement une source météo serveur et un mécanisme Push. La version actuelle ne revendique pas cette capacité.
4. Les sons procéduraux sont volontairement discrets. Ils privilégient la batterie et l’intelligibilité de la voix plutôt qu’un rendu cinématographique.

## Contrôles

- JSON des étapes 4 et 5 valides.
- Tests du moteur décisionnel réussis.
- Lint sans erreur.
- Service worker limité aux requêtes GET du même domaine.
- Production et artefact d’hébergement validés lors du contrôle final.

## Résultat

L’architecture respecte le budget prévu pour une PWA mobile. Les animations principales sont compatibles avec un rendu 60 FPS, sous réserve de la charge réelle du navigateur et du mode économie d’énergie de l’appareil.
