# ÉTAPE 7B — Correction tasse et animation vers la mer

## Statut

PARTIELLEMENT VALIDÉE.

La correction de compositing est validée sur les assets de production, les
quarante décors et les neuf formats simulés. Les tests, le lint et le build de
production passent. Un contrôle tactile et visuel sur un véritable iPhone,
Safari iOS et la PWA installée reste nécessaire. La rotation reste également
limitée par l'absence de frames angulaires intermédiaires : aucun nouvel angle
de Bosco n'a été inventé.

## Source et diagnostic exact

- Projet Sites existant : `bosco-vivant`.
- Version source retrouvée : version publiée 8.
- Révision de départ : `82cb783` — `Rebuild Bosco depth compositing`.
- Le compositing de la version 8 ne retirait pas localement la tasse intégrée
  aux poses. La fonction `open_cup_notch_mask` découpait un grand polygone
  depuis la zone de la tasse jusqu'au bord droit de la toile 1536 × 1536.
- Ce cran laissait une bande de l'ancienne tasse dans plusieurs poses tout en
  supprimant une zone rectiligne du personnage. Une seconde tasse fixe était
  ensuite superposée.
- L'asset fixe `polders-cup.png` assemblait le corps de la tasse de `pose-00`
  avec une anse provenant de `decision-discouraged`; cette anse contenait
  encore des pixels de doigts.
- Le cumul « bande de tasse d'origine + découpe polygonale rectiligne + tasse
  fixe contenant des doigts » produisait la plaque brune, son bord supérieur
  horizontal et sa limite verticale.
- Le calque de premier plan contextuel utilisait déjà le même décor que le
  calque arrière. Le contrôle des quarante contextes confirme une identité
  pixel par pixel des sources dans la zone d'occlusion. Le cache pouvait
  conserver l'ancien rendu, mais n'était pas la cause graphique initiale.

## Correction de compositing

Le grand cran polygonal a été supprimé. Chaque pose est désormais nettoyée
uniquement dans la silhouette canonique de la tasse. Les pixels de peau sont
préservés afin que la main de la pose reste derrière l'anse.

La tasse fixe Step 7B est construite exclusivement depuis les pixels existants :

- corps et inscription POLDERS : `pose-00.webp`;
- anse sans main : `pose-03.webp`, où Bosco ne tient pas la tasse;
- aucune génération, aucun redessin et aucun détourage automatique destructif;
- toile conservée à 1536 × 1536;
- position et échelle canoniques conservées;
- aucune tasse mobile.

Ordre final :

1. décor contextuel arrière;
2. unique calque Bosco;
3. copie du même décor, même `src`, limitée par le masque alpha;
4. tasse POLDERS fixe, main de la pose restant derrière l'anse;
5. instruments et interface.

Le masque d'occlusion est versionné
`occlusion-canonical-step7b-v2.png`, utilise un fond transparent noir et
`mask-mode: alpha`. Il ne contient aucune texture de bois.

## Animation vers la mer

Durées finales :

- préparation : 450 ms;
- rotation : 1 650 ms;
- observation : 2 000 ms;
- retour : 1 650 ms;
- total : 5 750 ms.

Un verrou empêche un second déclenchement pendant la séquence. La dernière
décision reçue est mémorisée puis appliquée après le retour. Bosco revient
toujours à une pose canonique. Les changements d'asset restent monoplan, avec
une extinction/réapparition de 75 ms; aucun second Bosco n'est superposé.

Limite : les sources ne contiennent qu'une pose finale tournée vers la mer et
aucun angle intermédiaire de tête/épaules. Le rythme, la préparation, la pause
et le retour ont donc été ralentis sans créer de faux rig, de déformation, de
zoom ou de mouvement de caméra.

## Cache

- Cache : `bosco-pwa-v10-step7b`.
- Ressources : suffixe `-step7b-v2`.
- Les anciens fichiers de poses, l'ancien masque et l'ancienne tasse ne sont
  plus présents dans le dossier public ni dans le précache.
- L'activation du service worker supprime les caches dont le nom diffère de la
  version courante.

## Contrôles exécutés

- Audit alpha des douze poses : conforme.
- Toile et ancre : 1536 × 1536, ancre 768 × 1252.
- Variation maximale d'ancre : 0 px.
- Quarante décors : contrôlés, sources avant/arrière identiques.
- Neuf formats simulés : 320 × 568, 375 × 667, 390 × 844, 393 × 852,
  402 × 874, 430 × 932, 768 × 1024, 1024 × 1366 et 1440 × 900.
- Comparaison avant/après et différence pixel : produites.
- Lint : réussi, zéro erreur et zéro avertissement.
- Tests : 23 réussis, zéro échec.
- Build de production et validation de l'artefact Sites : réussis.

## Contrôles restant à effectuer

- Safari sur un iPhone réel;
- lancement depuis la PWA ajoutée à l'écran d'accueil;
- remplacement effectif de l'ancien service worker sur une installation
  existante;
- rechargement forcé et lancement hors ligne après mise à jour;
- perception tactile réelle des 5 750 ms;
- validation utilisateur de la main derrière l'anse sur les poses satisfait,
  protecteur, bras croisés et main proche de la tasse.

