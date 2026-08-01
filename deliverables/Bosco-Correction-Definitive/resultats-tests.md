# Résultats réels des contrôles

## Audit des assets

Commande : `python3 scripts/audit-step7-assets.py`

Résultat réel :

```json
{"poses": 12, "canvas": [1536, 1536], "anchor": [768, 1252], "maxAnchorDeltaPx": 0, "mask": "present", "cup": "present", "disabledPoses": ["sea"], "errors": []}
```

## Lint

Commande : `npm run lint`

Résultat : code de sortie 0, aucune erreur ESLint.

## Build et tests

Commande : `npm test`

Cette commande a réellement exécuté :

1. le build Vinext de production ;
2. la validation de l’artefact Sites ;
3. les tests HTML rendus, décors, compositing, mode fail closed et service
   worker.

Résultat :

```text
Build complete.
Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present.
tests 23
pass 23
fail 0
cancelled 0
skipped 0
todo 0
```

## Contrôle fail closed

```text
Pose sea autorisée en production : non
Pose sea présente dans la séquence utilisateur : non
Pose sea présente dans le précache : non
Pose de repli : resting
```

## Décors et formats

```text
Décors contrôlés avec la pose neutre : 40/40
Formats simulés : 9/9
Ancre : 768 × 1252
Variation maximale : 0 px
```

## Limite matérielle

Safari sur un véritable iPhone et la PWA installée sur l’écran d’accueil n’ont
pas été contrôlés dans cet environnement.
