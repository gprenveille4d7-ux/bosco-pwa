# Bosco — Le Tourbillon

Version **v28** de Bosco vivant, adaptée à GitHub Pages et consultable sur iPhone.

V28 ajoute l’écran autonome **Les histoires de Bosco**, sa scène vidéo 16:9 sticky, la continuité Carte → Bosco → Carnet d’Émile et le fonctionnement hors ligne du média narratif.

Cette publication conserve l’application optimisée v26 et réintègre les ressources manquantes de l’archive source complète v22 : poses, calques de mains et de doigts, métadonnées, manifeste des 40 décors, références et livrables.

Adresse publique : <https://gprenveille4d7-ux.github.io/bosco-pwa/>

## Voix générative de Bosco

La version v28.12 ajoute une reformulation facultative par `gemini-3.6-flash`. Le moteur nautique local reste seul responsable du verdict, du score et de la sécurité. Bosco attend une première réponse Gemini, effectue au maximum une seconde vérification silencieuse, puis affiche une seule réponse finale : Gemini si elle est valide, sinon le dialogue local exact. Hors ligne, aucun appel Gemini n'est tenté. La version v28.12.1 réserve davantage de hauteur aux longues réponses sur iPhone et les rend défilables sans recouvrir la note de navigabilité. La clé Gemini n'est jamais présente dans cette PWA : elle appartient exclusivement au proxy serveur Sites.

Les détails de l'architecture et du déploiement se trouvent dans `GEMINI-INTEGRATION.md`.

## Lancer localement

Servez le dossier parent afin de conserver le préfixe `/bosco-pwa/` :

```bash
python -m http.server 8080
```

Puis ouvrez `http://localhost:8080/bosco-pwa/`.

Les fichiers HTML, CSS et JavaScript sont les artefacts optimisés de l’application publiée. Le détail du pont de ressources se trouve dans `V27-BRIDGE.md`.
