# Bosco — diagnostic et architecture finale

## Versions vérifiées

- Projet Sites : `appgprj_6a65a90b2b948191bf0e00bdf40515a4`
- Version publiée avant restauration : version 11, commit `cf122c4cdecbc7639e03c221c1d6afbc7026eb80`
- Dernière version animée retrouvée : version 9, commit `e6d8e848bfc50756c9ffe259f7adccca65c411d1`
- Cache publié avant restauration : `bosco-pwa-v12-sea-pose-fail-closed`

## Cause de la main disparue

Le générateur `scripts/build-step7-compositing.py` retirait l’ancienne tasse
intégrée à chaque source au moyen d’un masque de suppression, puis supprimait
les pixels masqués avant de ne conserver que la plus grande composante alpha.
Sur la pose de repos, la main droite partageait la zone de la tasse : ses
pixels de peau et son contour ont donc été supprimés avec la tasse. La petite
zone orange restante était un îlot partiel, pas une main valide.

## Cause de l’arrêt des animations

Le correctif précédent avait introduit `SEA_ANIMATION_AVAILABLE = false` et
remplacé les étapes des séquences par la seule pose de repos. Le laboratoire
désactivait aussi le déclencheur mer. La protection « fail closed » était donc
devenue globale au lieu de rester locale à l’asset défectueux.

## Réparation

- extraction chirurgicale des pixels originaux de la main dans les sources
  antérieures, sans tasse ni décor ;
- séparation en calques 1536 × 1536 `hands-behind` et `fingers-front` ;
- reconstruction locale de l’avant-bras de la pose mer à partir de la pose
  originale, sans régénération du personnage ou du décor ;
- tasse POLDERS extraite une seule fois et conservée fixe ;
- registre de cinq animations indépendantes ;
- préchargement tolérant par `Promise.allSettled` ;
- disponibilité et erreur suivies animation par animation ;
- verrou libéré et prochain timer recréé dans `finally` ;
- fondu sortant/entrant de 75 ms sur un seul calque Bosco ;
- cache v13 et précache v4, sans ressource v3 amputée.

## Ordre final des calques

1. décor arrière ;
2. corps et manche de Bosco ;
3. main derrière l’anse ;
4. tasse POLDERS fixe ;
5. doigts devant l’anse ;
6. comptoir issu du même décor et du masque alpha canonique ;
7. interface.

Tous les calques de scène ont `position: absolute`, `inset: 0`,
`object-fit: contain`, `object-position: center center` et
`transform: none !important`.

## Animations inventoriées et restaurées

| Animation | Poses | Durée | Déclenchement |
|---|---|---:|---|
| Regarde vers la mer | listening → thinking → sea → thinking → repos | 5 750 ms | introduction, attente, laboratoire |
| Écoute | listening → repos | 2 300 ms | attente, laboratoire |
| Réfléchit | thinking → repos | 2 400 ms | attente, laboratoire |
| Consulte le baromètre | barometer → repos | 2 500 ms | attente, laboratoire |
| Consulte la carte | chart → repos | 2 500 ms | attente, laboratoire |

La première animation est planifiée 5 secondes après la fin de l’introduction.
Les suivantes sont espacées aléatoirement de 25 à 45 secondes. Les timers sont
suspendus lorsque l’onglet est masqué et recréés au retour.

