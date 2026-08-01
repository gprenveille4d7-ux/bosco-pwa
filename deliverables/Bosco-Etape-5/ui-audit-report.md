# Étape 5 — Audit UI de la PWA Bosco

Date : 26 juillet 2026  
Périmètre : source de la PWA `Bosco vivant`, références des étapes 1, 2, 3 et 4.

## Conclusion

La PWA possédait déjà une base solide : les douze états de Bosco, les six décisions, les effets météo, le baromètre fonctionnel, la vapeur, les lanternes, la personnalisation locale et le moteur de l’étape 4 étaient présents.

Le principal défaut concernait le format mobile. Sous 640 px, trois cartes météo restaient alignées sur une seule ligne, avec des libellés de 7 à 9 px et des valeurs secondaires tronquées. Le dialogue et son bouton utilisaient aussi un retour à la ligne instable. La barre basse ignorait la zone de sécurité de l’iPhone et plusieurs commandes pouvaient descendre sous 44 px.

L’étape 5 corrige ces points et ajoute la couche d’expérience : chargement incarné par Bosco, micro-réactions non répétitives, voix sélectionnée et profilée, synchronisation discrète de la bouche, ambiance sonore séparée, notifications opt-in, journal de bord local et cache hors ligne.

## Références contrôlées

- Fiche maître de l’étape 1 : identité, décor, palette, cadrage et inscriptions conservés.
- Étape 2 : les six fichiers WebP intégrés sont identiques, octet pour octet, au ZIP validé.
- Étape 3 : douze poses présentes, avec réactions météo, baromètre, radio, vapeur et lumière.
- Étape 4 : les dix JSON de la PWA sont identiques au ZIP transmis.
- Aucun nouvel asset graphique principal n’a été créé.

## Défauts détectés avant correction

### Priorité haute

1. Cartes météo trop étroites sur iPhone
   - Cause : `grid-template-columns: 1fr 1fr 1fr` sous 640 px.
   - Impact : textes minuscules, ellipses et lecture lente.
   - Correction : deux colonnes sous 640 px, troisième carte pleine largeur ; une colonne sous 390 px.

2. Bloc de parole instable
   - Cause : combinaison de `flex-wrap` et d’une base calculée réservant implicitement la place du bouton.
   - Impact : largeur de phrase variable et bouton comprimé.
   - Correction : grille verticale stable sur mobile, texte puis bouton de pleine largeur.

3. Voix générique sans comportement de personnage
   - Cause : réglage TTS limité à une langue, une vitesse et une hauteur.
   - Impact : voix différente selon l’appareil, rythme trop uniforme, aucune synchronisation.
   - Correction : sélection priorisée des voix françaises graves, profil prosodique, événements de frontière et repli temporisé.

### Priorité moyenne

4. Barre de navigation non compatible avec le home indicator
   - Correction : utilisation de `env(safe-area-inset-bottom)` dans la barre et le contenu.

5. Cibles tactiles inégales
   - Correction : minimum global de 44 × 44 px et état de focus visible.

6. Fenêtre de profil fondée sur `100vh`
   - Correction : `100dvh`, repli `100vh` et marges de sécurité.

7. Titre du laboratoire et actions en concurrence
   - Correction : retour à la ligne contrôlé et empilement des actions sur mobile.

8. Boucles animées déterministes
   - Correction : ordonnanceur de micro-poses entre 11 et 24 secondes, sans répétition immédiate.

### Priorité fonctionnelle

9. Pas de cache applicatif explicite
   - Correction : service worker, cache du shell et des assets validés, stratégie réseau d’abord pour la navigation.

10. Pas d’historique réel des sorties
    - Correction : journal de bord local, limité à trente entrées et soumis au consentement de mémoire locale.

11. Pas de système de notifications
    - Correction : permission demandée uniquement après action de l’utilisateur, règles rares, heures silencieuses et déduplication.

12. Ambiance du Tourbillon absente
    - Correction : paysage sonore procédural léger, sans nouveau fichier audio, suspendu lorsque l’app est masquée.

## Cohérence avec la fiche maître

Les transformations restent superposées à des assets existants :

- la respiration agit à moins de 1 % d’amplitude ;
- le clignement utilise un voile local très bref ;
- le mouvement de bouche réemploie la pose parlée et reste inférieur à 3,5 % d’échelle verticale ;
- la météo reste confinée à la fenêtre ;
- l’aiguille du baromètre reste un calque fonctionnel ;
- les textes `BOSCO`, `LE TOURBILLON` et `POLDERS` ne sont jamais réécrits.

## Limite de l’audit visuel

La version publiée exige une connexion ChatGPT. L’aperçu de travail a démarré mais n’a pas pu être atteint par le navigateur de contrôle pendant cette exécution. L’audit visuel final repose donc sur :

- l’inspection complète de la source et des règles responsive ;
- le contrôle des dimensions et des poids des assets ;
- la validation automatisée du code et des données ;
- la compilation de production.

Une vérification manuelle sur iPhone réel reste indiquée pour apprécier le naturel exact du lip-sync et de la voix installée sur l’appareil.

## Résultat

Statut : conforme pour intégration et publication.

Les corrections de format ne changent ni le personnage, ni les six décisions, ni les douze états, ni le moteur de sécurité. Elles rendent l’interface plus lisible, plus tactile et plus cohérente sur iPhone.
