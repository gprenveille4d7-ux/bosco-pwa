# Étape 7 — Contrôle responsive

## Formats couverts

- 320 × 568
- 375 × 667
- 390 × 844
- 393 × 852
- 402 × 874
- 414 × 896
- 430 × 932
- iPhone paysage
- iPad portrait

## Vérifications déterministes

- la scène conserve `aspect-ratio: 1 / 1` ;
- les cinq couches de production remplissent la même boîte avec `inset: 0`, `width: 100%` et `height: 100%` ;
- toutes utilisent `object-fit: contain`, `object-position: center center` et `transform: none !important` ;
- le masque possède la même boîte 1536² que les deux copies du décor et les poses ;
- la tasse possède également une boîte 1536² ;
- aucune largeur ou position n’est recalculée selon la pose ;
- les règles safe-area et la navigation basse de l’Étape 6B n’ont pas été modifiées ;
- la matrice responsive validée à l’Étape 6B est conservée comme référence ;
- une matrice des scènes carrées a été recalculée pour les neuf formats.

## Contrôle visuel

La planche `capture-responsive-scenes.png` vérifie le cadrage carré et l’identité de position des couches aux neuf formats. La planche `capture-responsive-etape6b-reference.jpg` conserve la preuve plein écran de l’Étape 6B.

L’aperçu interactif automatisé n’a pas pu être ouvert par le navigateur de contrôle alors que le serveur local était sain. Le build de production, les tests de structure et les planches hors navigateur ont donc servi de garde-fous. Un dernier contrôle sur iPhone réel reste obligatoire pour les barres dynamiques de Safari et le ressenti tactile.
