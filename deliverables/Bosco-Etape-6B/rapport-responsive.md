# Contrôle responsive — Bosco Étape 6B

Contrôle visuel exécuté dans l’agent preview sur une matrice d’iframes possédant
les dimensions CSS exactes suivantes :

- 320 × 568 ;
- 375 × 667 ;
- 390 × 844 ;
- 393 × 852 ;
- 402 × 874 ;
- 414 × 896 ;
- 430 × 932 ;
- iPhone paysage 932 × 430 ;
- iPad portrait 768 × 1024.

Résultats :

- la scène reste carrée et conserve le même cadrage ;
- aucun débordement horizontal visible ;
- aucune bande noire latérale dans la scène ;
- la navigation basse reste compacte et alignée avec la zone sûre ;
- le dialogue demeure lisible avant le briefing ;
- les formats courts conservent un défilement vertical normal ;
- l’iPhone paysage conserve la scène complète dans le flux, sans recadrage de
  l’image ; le contenu inférieur est accessible par défilement ;
- l’iPad portrait conserve le même axe optique, sans agrandissement de caméra.

La planche `capture-responsive-matrix.jpg` constitue la preuve visuelle de ce
contrôle. Un dernier contrôle tactile et des safe areas dynamiques restent à
effectuer sur l’iPhone physique de Guillaume après publication.
