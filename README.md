# Bosco â€” Le Tourbillon

Version **v28** de Bosco vivant, adaptÃ©e Ã  GitHub Pages et consultable sur iPhone.

V28 ajoute lâ€™Ã©cran autonome **Les histoires de Bosco**, sa scÃ¨ne vidÃ©o 16:9 sticky, la continuitÃ© Carte â†’ Bosco â†’ Carnet dâ€™Ã‰mile et le fonctionnement hors ligne du mÃ©dia narratif.

Cette publication conserve lâ€™application optimisÃ©e v26 et rÃ©intÃ¨gre les ressources manquantes de lâ€™archive source complÃ¨te v22 : poses, calques de mains et de doigts, mÃ©tadonnÃ©es, manifeste des 40 dÃ©cors, rÃ©fÃ©rences et livrables.

Adresse publique : <https://gprenveille4d7-ux.github.io/bosco-pwa/>

## Voix gÃ©nÃ©rative de Bosco

La version v28.12 ajoute une reformulation facultative par `gemini-3.6-flash`. Le moteur nautique local reste seul responsable du verdict, du score et de la sÃ©curitÃ©. Bosco attend une premiÃ¨re rÃ©ponse Gemini, effectue au maximum une seconde vÃ©rification silencieuse, puis affiche une seule rÃ©ponse finale : Gemini si elle est valide, sinon le dialogue local exact. Hors ligne, aucun appel Gemini n'est tentÃ©. La version v28.12.1 rÃ©serve davantage de hauteur aux longues rÃ©ponses sur iPhone et les rend dÃ©filables sans recouvrir la note de navigabilitÃ©. La version v28.12.2 synchronise immÃ©diatement la hauteur plein Ã©cran de la PWA au lancement et au retour au premier plan. La version v28.12.3 rÃ©duit et recentre les icÃ´nes internes de Bosco. La version v28.13 rend la navigation principale totalement opaque, renforce ses pictogrammes et restaure dans Le CarrÃ© une sous-navigation plus petite, centrÃ©e et contextuelle. La clÃ© Gemini n'est jamais prÃ©sente dans cette PWA : elle appartient exclusivement au proxy serveur Sites.

Les dÃ©tails de l'architecture et du dÃ©ploiement se trouvent dans `GEMINI-INTEGRATION.md`.

## Lancer localement

Servez le dossier parent afin de conserver le prÃ©fixe `/bosco-pwa/` :

```bash
python -m http.server 8080
```

Puis ouvrez `http://localhost:8080/bosco-pwa/`.

Les fichiers HTML, CSS et JavaScript sont les artefacts optimisÃ©s de lâ€™application publiÃ©e. Le dÃ©tail du pont de ressources se trouve dans `V27-BRIDGE.md`.

