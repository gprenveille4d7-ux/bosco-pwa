# Bosco Version 22 — suppression absolue des fondus

Le double rendu introduit en Version 21 a été supprimé. Le compositeur ne
conserve plus l’ancien triplet de calques pendant l’affichage du nouveau.

Chaque prochain état est décodé en mémoire, puis les trois calques mobiles sont
remplacés ensemble dans un seul `requestAnimationFrame`. La durée de transition
est de 0 ms et l’opacité active reste à 1.

Les animations internes comportementales sont conservées. Les fichiers de pose
de production sont tous statiques, au format 1536 × 1536, et ne contiennent
aucune frame de fondu intégrée.

Les preuves chiffrées et l’image de contrôle sont régénérées par
`scripts/render-transition-evidence.py`.

## Contrôle du rendu

L’aperçu applicatif a confirmé sur le rendu calculé :

- `data-pose-transition-ms="0"` ;
- une seule pose Bosco dans le DOM ;
- trois calques synchronisés à l’opacité `1` ;
- `transition-duration: 0s` et `transition-property: none` ;
- `animation-name: none`, `transform: none` et `filter: none` ;
- hauteur de document égale à la hauteur du viewport, sans scroll vertical.

Les contrats responsive sont contrôlés pour iPhone SE, iPhone 16 et iPhone
16 Pro Max, en portrait et paysage.
