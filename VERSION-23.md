# Bosco — Version 23

## Périmètre

La Version 23 remplace uniquement le moteur qui produit « Le mot de Bosco ».

Les composants visuels, la carte de dialogue, ses dimensions, le carrousel, la
navigation, les animations, les assets, les décors, le mapping WMO, les données
météo et marines, le calcul de la note, les règles décisionnelles, le manifeste
et le service worker restent ceux de la Version 22.

## Architecture

L’ancien assemblage de fragments a été supprimé du chemin d’exécution. Le
résultat affiché provient désormais d’une seule réplique complète et indivisible
stockée localement.

La matrice comprend exactement :

- 10 familles météo canoniques, identiques à celles du décor ;
- 5 bandes de vent ;
- 5 bandes de note ;
- 8 variantes complètes par combinaison ;
- 250 combinaisons ;
- 2 000 répliques.

Chaque réplique possède un identifiant stable au format
`météo:vent:note:variante`.

## Sélection

Le moteur lit la famille météo qui pilote réellement la fenêtre, classe le vent
à partir du vent moyen et des rafales, puis classe la note finale. Il choisit
uniquement parmi les huit textes de la clé exacte et retourne le texte stocké
sans le modifier.

L’orage, un vent dangereux, un refus déjà imposé par le moteur ou une anomalie
critique font passer la sécurité avant la note. Une entrée invalide utilise un
repli local qui n’invente aucune autre météo.

## Anti-répétition

L’historique local est borné aux vingt dernières répliques. Les variantes encore
inédites dans la combinaison courante sont privilégiées ; lorsque les huit ont
été utilisées, la moins récemment affichée est reprise. La sélection ne change
pas lors d’un simple nouveau rendu.

## Validation

- 2 000 identifiants uniques ;
- 2 000 textes uniques ;
- 250 clés présentes avec exactement huit variantes chacune ;
- aucun doublon exact ;
- aucun quasi-doublon au seuil Jaccard de bigrammes fixé à 0,86 ;
- zéro erreur de cohérence restante ;
- longueur de 22 à 55 mots, sous la limite absolue de 70 mots ;
- aucune information de marée, de vague, de température, d’horaire ou de
  direction inventée ;
- refus ferme pour toutes les combinaisons orageuses ou dangereuses ;
- fonctionnement intégralement local et hors ligne ;
- aucun fragment assemblé à l’exécution.
