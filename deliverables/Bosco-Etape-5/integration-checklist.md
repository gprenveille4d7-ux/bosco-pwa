# Étape 5 — Checklist d’intégration

Date : 26 juillet 2026

## Références

- [x] Fiche maître de l’étape 1 lue et contrôlée.
- [x] Identité de Bosco inchangée.
- [x] Décor « Le Tourbillon » inchangé.
- [x] Inscriptions `BOSCO`, `LE TOURBILLON` et `POLDERS` préservées.
- [x] Six décisions de l’étape 2 identiques au lot fourni.
- [x] Douze poses de l’étape 3 réutilisées.
- [x] Dix JSON de l’étape 4 identiques au lot fourni.
- [x] Aucun nouvel asset graphique principal créé.

## Interface

- [x] Design System centralisé.
- [x] Cartes météo uniformisées.
- [x] Débordement mobile traité.
- [x] Dialogue et bouton d’écoute stabilisés.
- [x] Boutons tactiles de 44 px minimum.
- [x] Zones de sécurité iPhone prises en compte.
- [x] Fenêtres modales compatibles `100dvh`.
- [x] Focus clavier visible.
- [x] Mode mouvement réduit pris en charge.

## Bosco vivant

- [x] Bosco présent au chargement.
- [x] Bosco présent pendant le calcul.
- [x] Bosco réagit à la connexion et à la perte de connexion.
- [x] Respiration continue discrète.
- [x] Clignement discret.
- [x] Vapeur et lanternes conservées.
- [x] Micro-poses non répétitives.
- [x] Baromètre fonctionnel conservé.
- [x] Réactions pluie, brouillard, orage et soleil conservées.
- [x] Lumière automatique selon l’heure locale.

## Voix et synchronisation

- [x] Profil vocal original défini.
- [x] Sélection préférentielle d’une voix française naturelle.
- [x] Vitesse, hauteur, volume et émotions configurés.
- [x] Compatibilité TTS navigateur active.
- [x] Adaptateurs OpenAI, ElevenLabs et Azure documentés.
- [x] Mouvement de bouche lié aux événements de parole.
- [x] Repli temporisé lorsque les événements ne sont pas fournis.
- [x] Ambiance réduite pendant la parole.
- [x] Arrêt propre de la bouche et de la voix.

## Personnalisation

- [x] Prénom, embarcation, niveau, spot et unités conservés.
- [x] Bosco utilise le prénom réel.
- [x] Aucun libellé « utilisateur ».
- [x] Journal de bord local ajouté.
- [x] Consentement local respecté.
- [x] Historique limité à trente sorties.

## Notifications et son

- [x] Notifications désactivées par défaut.
- [x] Permission demandée seulement après action.
- [x] Règles rares, priorisées et dédupliquées.
- [x] Heures silencieuses définies.
- [x] Aucune promesse de push fermé sans infrastructure serveur.
- [x] Ambiance sonore séparée de la voix.
- [x] Feu, vent et pluie procéduraux.
- [x] Suspension audio quand l’application est masquée.
- [x] Mode économie de données respecté.

## PWA et performance

- [x] Manifest enrichi.
- [x] Mode standalone et `viewport-fit=cover`.
- [x] Service worker enregistré.
- [x] Shell et assets Bosco mis en cache.
- [x] Repli hors ligne défini.
- [x] Structures locales bornées.
- [x] Lint sans erreur.
- [x] Tests du moteur de l’étape 4 réussis.
- [x] Tests des livrables de l’étape 5 réussis.
- [x] Compilation de production réussie.
- [x] Artefact de publication validé.

## Vérification humaine recommandée

- [ ] Écouter la voix disponible sur l’iPhone cible et choisir une voix système préférée si nécessaire.
- [ ] Observer le lip-sync sur iPhone à 100 % de zoom.
- [ ] Tester l’installation sur l’écran d’accueil.
- [ ] Passer une fois en mode avion après un premier chargement complet.
- [ ] Vérifier le confort sonore avec le volume habituel de l’appareil.

## Décision

Lot prêt pour publication. Les cinq contrôles humains ci-dessus ne bloquent pas la build ; ils servent à ajuster le ressenti sur l’appareil réel de Guillaume.
