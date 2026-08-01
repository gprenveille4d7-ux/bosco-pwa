# BOSCO — VERSION 22

## Objet

La Version 22 supprime tous les fondus entre les poses et animations de Bosco.
La correction est limitée au compositeur visuel, à ses tests et à la version du
cache PWA. Le moteur météo et marin, les marées, les dialogues, le score et la
décision de sécurité restent inchangés.

## Contrat de rendu

- Transition entre deux états : **0 ms**.
- Dernière frame A à pleine opacité, puis première frame B à pleine opacité.
- Aucun crossfade, fondu entrant, fondu sortant ou chevauchement de deux états.
- Un seul état de pose est monté dans le rendu.
- Les trois calques synchronisés de cet état — Bosco, main arrière et doigts
  avant — sont remplacés ensemble dans un seul rendu React.
- L’opacité du calque actif reste égale à `1`.
- Aucun `scale()`, zoom, déplacement, filtre ou recadrage en production.

## Préchargement

Les trois ressources du prochain état sont chargées hors du DOM visible avec
`Image`, puis entièrement décodées avec `decode()`. L’état courant reste visible
pendant ce travail. Lorsque les trois décodages sont terminés, un identifiant
monotone rejette les demandes devenues obsolètes et un `requestAnimationFrame`
effectue une unique mise à jour atomique.

En cas d’échec, la dernière pose valide reste affichée.

## Animations internes conservées

Les séquences comportementales existantes sont conservées : regard vers la mer,
réflexion, écoute, consultation du baromètre, consultation de la carte et poses
de décision. Seule la jonction entre leurs états devient instantanée.

Les ressources de production sont des PNG ou WebP statiques de 1536 × 1536 :
elles ne contiennent aucune frame animée ou frame de fondu intégrée.

## Introduction conservée

La machine à états reste :

`greeting → thinking → verdict → completed`

- accueil : au moins 2,5 secondes ;
- réflexion : au moins 4 secondes ;
- un seul regard vers la fenêtre ;
- verdict persistant ;
- protection contre les nouveaux rendus et React Strict Mode.

## Contrôles

- recherche globale des fondus et doubles calques dans le compositeur ;
- audit des 36 ressources mobiles de production ;
- contrôle déterministe de plus de 20 changements de poses ;
- contrôle de 5 frames autour de chaque coupe ;
- contrôle des ancres 1536 × 1536 et de la géométrie fixe ;
- tests d’introduction, d’animations, de dialogues, de météo et de navigation ;
- build, typecheck, lint et validation de l’artefact de production.

## Identité du projet

- Projet Sites : `appgprj_6a65a90b2b948191bf0e00bdf40515a4`
- Adresse publique : `https://bosco-vivant.able-hake-4182.chatgpt.site`
- Version : **22**
