# Étape 7 — Audit du compositing de Bosco

## Périmètre inspecté

- source complète de la PWA et révision publiée de l’Étape 6B ;
- 18 assets existants : 12 poses et 6 décisions ;
- DOM, styles calculables, transitions, z-index et moteur de sélection des poses ;
- 40 décors météo × temporalité ;
- canaux alpha, dimensions, bornes visibles et pixels de bord.

## Diagnostic avant modification

1. **Rectangle et découpes visibles**
   - Les 18 fichiers possédaient bien un canal alpha RGBA et une boîte de 1536 × 1536 px.
   - Le défaut n’était pas un fond opaque couvrant tout le fichier.
   - Chaque asset contenait néanmoins la tasse POLDERS et certains conservaient une coupe horizontale dure du pull ou des restes du comptoir. Ces limites devenaient visibles lorsque la pose passait devant le décor.

2. **Assets concernés**
   - Les 18 assets contenaient la tasse POLDERS.
   - `pose-11.webp` atteignait le bord inférieur du canvas.
   - Plusieurs poses présentaient des ruptures horizontales d’alpha mesurables, notamment `pose-02`, `pose-04`, `pose-05`, `pose-08`, `pose-09` et plusieurs décisions.

3. **Différences de dimensions et d’alignement**
   - Tous les fichiers mesuraient 1536 × 1536 px, mais leurs bornes visibles variaient fortement.
   - Sommet visible : de 61 à 277 px.
   - Bas visible : de 1276 à 1536 px.
   - Les décisions étaient globalement placées plus bas que les douze poses.

4. **Objets du décor dupliqués**
   - Tasse POLDERS : présente dans 18 assets sur 18.
   - Traces de ligne de comptoir ou de fond dans plusieurs extractions.
   - La carte, la boussole et le comptoir appartenaient au décor complet, mais n’étaient jamais replacés devant Bosco.

5. **Transitions et variation perceptuelle**
   - Le code conservait `previousImage` et `activeImage` simultanément pendant 440 à 520 ms.
   - Deux éléments Bosco complets étaient donc présents et visibles pendant le fondu.
   - Cette architecture causait les doubles barbes, doubles mains et fantômes.
   - Aucun zoom CSS de la scène n’a été trouvé : `object-fit: contain` et `transform: none` étaient déjà présents. Les variations de taille perçues venaient principalement des bornes visibles très différentes et du double rendu.

6. **Cause des traversées**
   - Ordre avant correction : décor `z-index: 0`, Bosco `z-index: 2`, instruments fonctionnels `z-index: 4`.
   - Aucun masque de premier plan n’existait.
   - Le comptoir, la carte et la boussole étaient enfermés dans le décor placé derrière Bosco ; ils ne pouvaient donc jamais l’occulter.

## Correction appliquée

- sauvegarde intégrale des 18 originaux ;
- création de 12 dérivés techniques PNG RGBA 1536² ;
- nettoyage du canal alpha et des petits composants parasites ;
- suppression de la tasse intégrée par une découpe ouverte vers la zone toujours occultée, sans inventer les pixels cachés ;
- ancre et pivot communs : `(768, 1252)` ;
- échelle inscrite dans les métadonnées : `1` pour toutes les poses ;
- masque canonique réutilisable du comptoir, de la carte et de la boussole ;
- une seule tasse POLDERS fixe, dérivée de pixels existants, avec anse séparée propre ;
- architecture : décor arrière → Bosco unique → même décor masqué → tasse fixe → interface ;
- remplacement du crossfade par : disparition 75 ms → échange à opacité nulle → réapparition 75 ms ;
- aucun transform ajouté à Bosco, à la scène ou aux couches d’image.

## Mesures après correction

- poses de production : 12 / 12 ;
- dimensions : 1536 × 1536 pour chaque pose ;
- point d’ancrage : identique pour chaque pose ;
- variation maximale des ancres : 0 px ;
- élément Bosco complet dans le composant : 1 ;
- tasse POLDERS fixe dans le composant : 1 ;
- masque canonique : présent en permanence ;
- anciens cutouts composites utilisés par le rendu : 0 ;
- tests alpha : réussis ;
- 40 décors et mapping WMO : inchangés.

## Limite assumée

Les pixels du bras cachés derrière la tasse d’origine n’existaient pas dans les sources. Ils n’ont pas été redessinés. Les dérivés ouvrent cette zone vers l’extérieur du personnage et la tasse fixe ainsi que le masque de comptoir la recouvrent dans le rendu final. L’interaction « main tasse » reste donc une approche crédible, jamais une fausse prise.
