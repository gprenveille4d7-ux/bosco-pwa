# Résultats des validations

- Tests ciblés de transition : 19/19 réussis avant validation complète.
- Suite complète `npm test` : 30/30 réussis.
- Lint `npm run lint` : réussi, aucune erreur.
- Build de production `npm run build` : réussi.
- Validation de l’artefact Sites : réussie.
- Audit alpha des 12 poses : réussi.
- Contrôle des 40 décors : réussi.
- Test de cinq transitions rapprochées : réussi, seule la dernière est peinte.
- Échec volontaire d’une pose : réussi, la dernière pose valide reste visible.
- Retour à `idle` interrompu : réussi, aucun état vide.
- Promesse obsolète : réussi, aucune ancienne pose ne remplace la plus récente.
- Cache du service worker : `bosco-pwa-v14-atomic-pose-swap`.

Limite de validation : le navigateur de contrôle n’a pas pu accéder à
l’aperçu local. Aucun contrôle sur l’iPhone réel ou la PWA installée n’est
revendiqué.

