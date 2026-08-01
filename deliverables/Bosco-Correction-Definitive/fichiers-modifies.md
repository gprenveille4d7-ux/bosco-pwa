# Fichiers source modifiés

- `app/page.tsx`
- `components/BoscoCompositor.tsx`
- `data/bosco/bosco-emotions.json`
- `lib/bosco-visual-context.ts`
- `public/sw.js`
- `public/assets/bosco/compositing/pose-metadata.json`
- `public/assets/bosco/compositing/poses/*-step8-v3.png`
- `public/assets/bosco/compositing/masks/occlusion-canonical-step8-v3.png`
- `public/assets/bosco/compositing/objects/polders-cup-step8-v3.png`
- `scripts/build-step7-compositing.py`
- `scripts/audit-step7-assets.py`
- `scripts/generate-bosco-data.mjs`
- `scripts/render-definitive-compositing.py`
- `tests/bosco-step6b.test.mjs`
- `tests/bosco-step7.test.mjs`
- `tests/bosco-step7b.test.mjs`

## Ressources de production supprimées

- les douze poses `*-step7b-v2.png` ;
- `occlusion-canonical-step7b-v2.png` ;
- `polders-cup-step7b-v2.png`.

Les originaux ont été conservés uniquement dans le dossier de preuves afin de
permettre la comparaison avant/après. Ils ne sont plus référencés par la PWA ni
par le service worker.

## Ressource conservée uniquement pour diagnostic

- `sea-step8-v3.png` reste inspectable dans le laboratoire, mais est marquée
  `productionAllowed: false`, absente de la séquence utilisateur et absente du
  précache.
