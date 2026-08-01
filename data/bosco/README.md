# Bosco — Étape 4 : cerveau et moteur décisionnel

Version 4.0.0 — 26 juillet 2026

Cette livraison ne crée ni ne modifie aucune illustration. Elle pilote exclusivement les références verrouillées des étapes 1 à 3.

## Rôle des fichiers décisionnels

1. `bosco-brain.json` — orchestration générale du raisonnement, priorités, espace combinatoire des scénarios, confiance, anti-répétition et contraintes de performance.
2. `bosco-rules.json` — règles de sécurité, décisions, conseils secondaires et explication humaine de chaque règle. Les règles sont évaluées par priorité décroissante.
3. `dialogues-v23/*.json` — dix corpus météo contenant exactement 2 000 répliques complètes, soit huit variantes pour chacune des 250 combinaisons météo × vent × note.
4. `bosco-dialogue-library.ts` — interface de lecture unique de la banque complète.
5. `bosco-emotions.json` — dix émotions, leur pose, leur expression, leur animation, leur ton et leur affinité avec les décisions.
6. `bosco-user-profile.json` — schéma du profil demandé au premier lancement, valeurs autorisées, validation et règles d’utilisation du prénom.
7. `bosco-navigation-score.json` — calcul du score sur 10, poids des sept dimensions, plafonds de sécurité, bandes de décision et format d’explication.
8. `bosco-weather-engine.json` — unités canoniques, champs météo et marins, seuils de catégorisation, valeurs dérivées et politique des données manquantes ou anciennes.
9. `bosco-assets-map.json` — correspondance entre les six décisions, les douze poses, les dix émotions, les animations et les effets visuels déjà existants.
10. `bosco-events.json` — réactions de 1 à 3 secondes aux arrivées de données, changements de spot, GPS, alertes et pertes ou retours de connexion.
11. `bosco-memory.json` — faits locaux autorisés, clés de stockage et interdiction explicite d’inventer un souvenir ou de transformer une prévision en sortie effectuée.

## Ordre d’exécution

1. Normaliser les unités.
2. Vérifier la fraîcheur et la cohérence des données.
3. Dériver les scénarios : facteur de rafale, mer croisée, relation du vent au rivage et tendances.
4. Appliquer les limites de sécurité.
5. Calculer les sept dimensions du score.
6. Retenir la décision finale et sa confiance.
7. Sélectionner l’émotion, la pose, l’asset et les effets.
8. Choisir une réplique complète selon la météo visible, le vent et la note, en donnant priorité à la sécurité et à la variante la moins récemment utilisée.
9. Produire le score et ses raisons explicites.

## Garanties

- La sécurité représente 42 % du score et peut imposer un plafond absolu.
- Une alerte orageuse, un vent violent, une mer très forte, un brouillard dense ou l’absence de données peut forcer la décision.
- Le niveau utilisateur n’augmente jamais une limite de sécurité.
- Les répliques sont indivisibles : aucun assemblage de fragments n’est effectué à l’exécution.
- L’application peut calculer hors ligne avec des données en cache, mais affiche une confiance réduite et l’âge du relevé.
- La mémoire n’utilise que les informations réellement enregistrées sur l’appareil.
