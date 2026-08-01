# BOSCO — Correction définitive du compositing

## Statut

PARTIELLEMENT VALIDÉE.

Le rectangle brun est supprimé de la production en appliquant le mode fail
closed prévu par la mission : la pose « regarde vers la mer » reste disponible
dans le laboratoire pour diagnostic, mais elle ne peut plus être chargée dans
la séquence utilisateur. La pose neutre propre est conservée pendant l’analyse.

Safari sur un véritable iPhone et la PWA installée sur l’écran d’accueil
n’étaient pas accessibles pendant cette intervention.

## Version source de référence

- projet existant : `bosco-vivant` ;
- commit publié retrouvé : `e6d8e848bfc50756c9ffe259f7adccca65c411d1` ;
- version Sites retrouvée avant correction : 9 ;
- asset de compositing avant correction : `bosco-step7b-v2` ;
- asset nettoyé : `bosco-step8-v3`.

## Cause exacte

Deux défauts se cumulaient.

1. Le générateur appliquait à toutes les poses le masque de tasse de
   `pose-00.webp`. Dans `sea-step7b-v2.png`, il laissait le bord, l’anse,
   l’inscription et le bas de l’ancienne tasse. Ces fragments se déplaçaient
   avec Bosco.
2. Après retrait correct de ces fragments, l’inspection visuelle a révélé la
   limite décisive : dans `pose-03.webp`, la tasse source masque réellement une
   partie de la manche et du torse. La suppression de la tasse laisse donc un
   vide anatomique. Ce vide révèle le meuble arrière et reconstitue le bloc brun
   derrière la tasse fixe.

Le second défaut ne peut pas être réparé proprement avec les assets existants
sans inventer la partie manquante, déplacer la tasse, ajouter un cache ou
générer une nouvelle pose, toutes solutions interdites par la mission.

## Correction source

- masque de retrait propre à chaque source ;
- suppression des fragments résiduels de tasse ;
- nettoyage alpha et conservation de la composante anatomique principale ;
- versionnement des assets en `step8-v3` ;
- tasse POLDERS unique et fixe ;
- décor arrière et copie d’occlusion utilisant exactement le même `src` ;
- pose mer marquée `productionAllowed: false` avec la raison
  `disabled-fail-closed-missing-sleeve-behind-source-cup` ;
- séquence utilisateur conservée en pose neutre, sans rotation ni pose mer ;
- émotion « méfiant » redirigée vers la pose neutre ;
- pose mer retirée du précache ;
- cache porté à `bosco-pwa-v12-sea-pose-fail-closed` ;
- erreur explicite en développement si la séquence est demandée.

## Architecture finale

1. décor contextuel complet ;
2. unique calque Bosco transparent ;
3. copie du même décor contextuel avec masque alpha canonique ;
4. unique tasse POLDERS fixe ;
5. instruments et interface.

Les calques de décor partagent la même boîte, `inset: 0`, `object-fit: contain`,
`object-position: center center` et aucune transformation.

## Animation « regarde vers la mer »

Statut : désactivée en production, conformément au cas E et au mode fail closed
du cahier des charges.

- préparation : non exécutée ;
- rotation : non exécutée ;
- observation : non exécutée ;
- retour : non exécuté ;
- durée totale : non applicable.

L’analyse continue pendant 1 400 à 2 800 ms avec la pose neutre propre, puis la
pose décisionnelle validée est affichée. Aucun double déclenchement, double
Bosco, déplacement de caméra ou changement d’échelle n’est possible.

## Contrôles visuels

- 40 décors rendus avec la pose neutre de repli ;
- 9 formats simulés : 320×568, 375×667, 390×844, 393×852, 402×874,
  430×932, 768×1024, 1024×1366 et 1440×900 ;
- pose mer fautive inspectée sur damier, blanc, noir, rouge et vert ;
- zone tasse–coude–comptoir contrôlée à 200 % et 400 % ;
- comparaison avant / fail closed produite ;
- ancre : 768 × 1252 ;
- variation maximale : 0 px.

Les formats sont des simulations déterministes du carré de compositing. Ils ne
remplacent pas un contrôle Safari réel.

## Résultats techniques

- audit alpha : 12 poses, pose mer explicitement désactivée, 0 erreur ;
- lint : réussi ;
- build Vinext de production : réussi ;
- validation de l’artefact Worker : réussie ;
- tests : 23 réussis, 0 échec, 0 ignoré.

## Contrôles iPhone restant à réaliser

- Safari normal et rechargement forcé ;
- PWA depuis l’écran d’accueil ;
- mise à jour du service worker ;
- cache froid puis cache chaud ;
- lancement hors ligne ;
- confirmation que la pose tournée ne se déclenche plus ;
- changement de météo après l’analyse.
