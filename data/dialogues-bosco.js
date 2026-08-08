/*
BOSCO — Dialogues généraux

Ce fichier contient uniquement les phrases générales de Bosco : commentaires de conditions,
accueil et transitions narratives. Il ne contient aucune histoire longue liée à un port.

Pour modifier une phrase : rechercher son texte ou son identifiant, changer uniquement le champ
concerné, puis conserver la structure générale du fichier.
*/

export const accueilBosco = {
  sansPrenom: "Salut.",
  avecPrenom: "Salut, {prenom}.",
};

export const invitationsCarnetEmile = [
  "Bon… ça, c’est ce qu’on racontait ici depuis des générations. Mais l’ancien Émile avait écrit deux ou trois trucs sur ce coin-là. Va donc jeter un œil à son carnet… tu risques d’apprendre quelque chose.",
  "Moi, je te raconte les histoires des vieux du port. Émile, lui, notait les faits. Allez… ouvre donc son carnet, il avait la plume aussi solide que les amarres.",
  "Si j’étais toi, je lirais aussi ce qu’Émile a laissé. Ce vieux bougre avait toujours le nez là où les autres regardaient pas."
];

export const conclusionsHistoiresBosco = [
  "Tu vois… la mer cache toujours quelque chose.",
  "Sacré Émile… il en savait des choses.",
  "Bon… maintenant tu connais les deux versions. À toi de te faire ton idée.",
  "Voilà. La légende d’un côté, les faits de l’autre… et la mer au milieu."
];

export const dialoguesGenerauxBosco = {
  "clear": [
    {
      "id": "clear:calm:critical:01",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "L’horizon s’ouvre net derrière la vitre. Le vent reste couché et les voiles auront du mal à prendre forme. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:02",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le ciel a débarrassé le large de ses rideaux, tandis que le souffle manque et les coques avanceront avec patience. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:03",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Les voiles chercheront longtemps le moindre souffle utile ; au large, la lumière découpe franchement la ligne d’horizon. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:04",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors, le large se montre sans un nuage pour lui barrer la route. Les coques auront peu de force à tirer de l’air. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:05",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La côte baigne dans une clarté qui ne cache rien. Côté vent, l’air manque de volonté pour faire vraiment chanter les voiles. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:06",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le ciel est grand ouvert au-dessus de la Manche. Le souffle reste trop mince pour réveiller franchement les coques. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:07",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "L’horizon file droit sous une lumière bien propre ; pour les voiles, les voiles risquent de pendre sans trouver de quoi travailler. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:critical:08",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi : dehors, le bleu laisse voir le large jusqu’au bout. Le vent ne pousse presque rien, pas même l’impatience. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:01",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le large se montre sans un nuage pour lui barrer la route. Les voiles risquent de pendre sans trouver de quoi travailler. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:02",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La côte baigne dans une clarté qui ne cache rien, tandis que le vent ne pousse presque rien, pas même l’impatience. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:03",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le vent reste dans sa bannette et laisse les voiles molles ; au large, le ciel est grand ouvert au-dessus de la Manche. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:04",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme, l’horizon file droit sous une lumière bien propre. Le vent paresse et la toile ne trouvera guère de coffre. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:05",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, le bleu laisse voir le large jusqu’au bout. Côté vent, le vent se fait oublier et la navigation sera bien molle. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:06",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la fenêtre donne sur un ciel lavé et une vue dégagée. L’air bouge à peine, juste assez pour faire frémir une écoute. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:07",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La lumière court librement sur tout l’horizon ; pour les voiles, l’air somnole encore au-dessus de l’eau. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:poor:08",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon : le ciel ne garde aucun recoin sombre au-dessus de l’eau. Le peu d’air promet surtout une glisse très lente. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:01",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, l’horizon file droit sous une lumière bien propre. L’air somnole encore au-dessus de l’eau. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:02",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, le bleu laisse voir le large jusqu’au bout, tandis que le peu d’air promet surtout une glisse très lente. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:03",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le souffle est si discret qu’il faudra savourer chaque risée ; au large, la fenêtre donne sur un ciel lavé et une vue dégagée. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:04",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute, la lumière court librement sur tout l’horizon. Les voiles auront davantage envie de dormir que de porter. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:05",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau. Côté vent, le vent reste couché et les voiles auront du mal à prendre forme. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:06",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le large apparaît franc et lumineux depuis le Tourbillon. Le souffle manque et les coques avanceront avec patience. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:07",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La ligne du large ressort nette sous un ciel sans encombre ; pour les voiles, les voiles chercheront longtemps le moindre souffle utile. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:mixed:08",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot : dehors, la clarté donne envie de pousser la porte. Les coques auront peu de force à tirer de l’air. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:01",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, la lumière court librement sur tout l’horizon. Les voiles chercheront longtemps le moindre souffle utile. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:02",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau, tandis que les coques auront peu de force à tirer de l’air. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:03",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "L’air manque de volonté pour faire vraiment chanter les voiles ; au large, le large apparaît franc et lumineux depuis le Tourbillon. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:04",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon, la ligne du large ressort nette sous un ciel sans encombre. Le souffle reste trop mince pour réveiller franchement les coques. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:05",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Dehors, la clarté donne envie de pousser la porte. Côté vent, les voiles risquent de pendre sans trouver de quoi travailler. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:06",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la Manche montre un visage clair jusque vers l’horizon. Le vent ne pousse presque rien, pas même l’impatience. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:07",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel ouvre grand la route du regard vers le large ; pour les voiles, le vent reste dans sa bannette et laisse les voiles molles. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:good:08",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large : l’horizon s’ouvre net derrière la vitre. Le vent paresse et la toile ne trouvera guère de coffre. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:01",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la ligne du large ressort nette sous un ciel sans encombre. Le vent reste dans sa bannette et laisse les voiles molles. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:02",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Dehors, la clarté donne envie de pousser la porte, tandis que le vent paresse et la toile ne trouvera guère de coffre. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:03",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le vent se fait oublier et la navigation sera bien molle ; au large, la Manche montre un visage clair jusque vers l’horizon. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:04",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le ciel ouvre grand la route du regard vers le large. L’air bouge à peine, juste assez pour faire frémir une écoute. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:05",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "L’horizon s’ouvre net derrière la vitre. Côté vent, l’air somnole encore au-dessus de l’eau. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:06",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel a débarrassé le large de ses rideaux. Le peu d’air promet surtout une glisse très lente. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:07",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La lumière découpe franchement la ligne d’horizon ; pour les voiles, le souffle est si discret qu’il faudra savourer chaque risée. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:calm:excellent:08",
      "weatherFamily": "clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme : le large se montre sans un nuage pour lui barrer la route. Les voiles auront davantage envie de dormir que de porter. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:01",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la lumière découpe franchement la ligne d’horizon. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:02",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le large se montre sans un nuage pour lui barrer la route, tandis que les voiles prendront forme, sans promettre une grande cavalcade. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:03",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La toile travaillera doucement dans un air plutôt sage ; au large, la côte baigne dans une clarté qui ne cache rien. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:04",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme, le ciel est grand ouvert au-dessus de la Manche. Le vent se montre poli, presque trop pour les amateurs de vitesse. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:05",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "L’horizon file droit sous une lumière bien propre. Côté vent, le vent reste léger et demandera de soigner chaque réglage. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:06",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le bleu laisse voir le large jusqu’au bout. Les voiles respireront doucement sans tirer fort sur les écoutes. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:07",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La fenêtre donne sur un ciel lavé et une vue dégagée ; pour les voiles, l’air suffit pour avancer doucement sans réveiller toute l’écume. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:critical:08",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon : la lumière court librement sur tout l’horizon. Le vent accompagne les coques sans chercher à les lancer. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:01",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le ciel est grand ouvert au-dessus de la Manche. L’air suffit pour avancer doucement sans réveiller toute l’écume. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:02",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "L’horizon file droit sous une lumière bien propre, tandis que le vent accompagne les coques sans chercher à les lancer. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:03",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le petit air offre une navigation douce et peu physique ; au large, le bleu laisse voir le large jusqu’au bout. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:04",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute, la fenêtre donne sur un ciel lavé et une vue dégagée. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:05",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La lumière court librement sur tout l’horizon. Côté vent, le petit vent promet davantage de finesse que de spectacle. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:06",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le ciel ne garde aucun recoin sombre au-dessus de l’eau. Le vent pousse gentiment, mais la glisse restera tranquille. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:07",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le large apparaît franc et lumineux depuis le Tourbillon ; pour les voiles, le souffle est propre mais encore un peu maigre. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:poor:08",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot : la ligne du large ressort nette sous un ciel sans encombre. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:01",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre donne sur un ciel lavé et une vue dégagée. Le souffle est propre mais encore un peu maigre. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:02",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La lumière court librement sur tout l’horizon, tandis que les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:03",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Les coques avanceront proprement dans un souffle modeste ; au large, le ciel ne garde aucun recoin sombre au-dessus de l’eau. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:04",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon, le large apparaît franc et lumineux depuis le Tourbillon. La toile recevra un souffle régulier mais sans grand coffre. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:05",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La ligne du large ressort nette sous un ciel sans encombre. Côté vent, un petit souffle remplit la toile sans lui donner beaucoup de nerf. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:06",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la clarté donne envie de pousser la porte. Les voiles prendront forme, sans promettre une grande cavalcade. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:07",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La Manche montre un visage clair jusque vers l’horizon ; pour les voiles, la toile travaillera doucement dans un air plutôt sage. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:mixed:08",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large : le ciel ouvre grand la route du regard vers le large. Le vent se montre poli, presque trop pour les amateurs de vitesse. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:01",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, le large apparaît franc et lumineux depuis le Tourbillon. La toile travaillera doucement dans un air plutôt sage. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:02",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La ligne du large ressort nette sous un ciel sans encombre, tandis que le vent se montre poli, presque trop pour les amateurs de vitesse. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:03",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le vent reste léger et demandera de soigner chaque réglage ; au large, la clarté donne envie de pousser la porte. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:04",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la Manche montre un visage clair jusque vers l’horizon. Les voiles respireront doucement sans tirer fort sur les écoutes. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:05",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel ouvre grand la route du regard vers le large. Côté vent, l’air suffit pour avancer doucement sans réveiller toute l’écume. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:06",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, l’horizon s’ouvre net derrière la vitre. Le vent accompagne les coques sans chercher à les lancer. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:07",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel a débarrassé le large de ses rideaux ; pour les voiles, le petit air offre une navigation douce et peu physique. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:good:08",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme : la lumière découpe franchement la ligne d’horizon. L’air donne juste assez de vie aux voiles pour une sortie calme. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:01",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la Manche montre un visage clair jusque vers l’horizon. Le petit air offre une navigation douce et peu physique. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:02",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le ciel ouvre grand la route du regard vers le large, tandis que l’air donne juste assez de vie aux voiles pour une sortie calme. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:03",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le petit vent promet davantage de finesse que de spectacle ; au large, l’horizon s’ouvre net derrière la vitre. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:04",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche, le ciel a débarrassé le large de ses rideaux. Le vent pousse gentiment, mais la glisse restera tranquille. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:05",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La lumière découpe franchement la ligne d’horizon. Côté vent, le souffle est propre mais encore un peu maigre. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:06",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le large se montre sans un nuage pour lui barrer la route. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:07",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La côte baigne dans une clarté qui ne cache rien ; pour les voiles, les coques avanceront proprement dans un souffle modeste. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:light:excellent:08",
      "weatherFamily": "clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot : le ciel est grand ouvert au-dessus de la Manche. La toile recevra un souffle régulier mais sans grand coffre. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:01",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la côte baigne dans une clarté qui ne cache rien. Le vent tient sa ligne et remplit les voiles comme il faut. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:02",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le ciel est grand ouvert au-dessus de la Manche, tandis que le souffle est établi et devrait faire filer les coques proprement. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:03",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les coques devraient accélérer sans mauvaise surprise dans les écoutes ; au large, l’horizon file droit sous une lumière bien propre. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:04",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute, dehors, le bleu laisse voir le large jusqu’au bout. L’air pousse franchement et laisse encore une belle marge. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:05",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La fenêtre donne sur un ciel lavé et une vue dégagée. Côté vent, les coques recevront un souffle utile, régulier et agréable. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:06",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la lumière court librement sur tout l’horizon. Les voiles trouveront un équilibre plaisant entre force et contrôle. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:07",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau ; pour les voiles, les voiles seront bien nourries sans arracher la barre. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:critical:08",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot : le large apparaît franc et lumineux depuis le Tourbillon. La toile trouvera une poussée franche et encore maîtrisable. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:01",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, dehors, le bleu laisse voir le large jusqu’au bout. Les voiles seront bien nourries sans arracher la barre. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:02",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La fenêtre donne sur un ciel lavé et une vue dégagée, tandis que la toile trouvera une poussée franche et encore maîtrisable. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:03",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Les voiles auront de quoi porter sans te demander les gros bras ; au large, la lumière court librement sur tout l’horizon. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:04",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon, le ciel ne garde aucun recoin sombre au-dessus de l’eau. La toile devrait chanter sans transformer la barre en combat. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:05",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le large apparaît franc et lumineux depuis le Tourbillon. Côté vent, l’air est assez présent pour réveiller l’écume sans brutalité. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:06",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la ligne du large ressort nette sous un ciel sans encombre. L’air a juste assez de coffre pour faire chanter la toile. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:07",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Dehors, la clarté donne envie de pousser la porte ; pour les voiles, le vent travaille avec régularité sans chercher la bagarre. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:poor:08",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large : la Manche montre un visage clair jusque vers l’horizon. Le vent donne du répondant tout en gardant de bonnes manières. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:01",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le ciel ne garde aucun recoin sombre au-dessus de l’eau. Le vent travaille avec régularité sans chercher la bagarre. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:02",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le large apparaît franc et lumineux depuis le Tourbillon, tandis que le vent donne du répondant tout en gardant de bonnes manières. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:03",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le vent paraît taillé pour une glisse vive mais propre ; au large, la ligne du large ressort nette sous un ciel sans encombre. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:04",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, dehors, la clarté donne envie de pousser la porte. Le vent offre de la puissance sans prendre le commandement. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:05",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La Manche montre un visage clair jusque vers l’horizon. Côté vent, le vent tient sa ligne et remplit les voiles comme il faut. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:06",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel ouvre grand la route du regard vers le large. Le souffle est établi et devrait faire filer les coques proprement. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:07",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’horizon s’ouvre net derrière la vitre ; pour les voiles, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:mixed:08",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme : le ciel a débarrassé le large de ses rideaux. L’air pousse franchement et laisse encore une belle marge. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:01",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, dehors, la clarté donne envie de pousser la porte. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:02",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La Manche montre un visage clair jusque vers l’horizon, tandis que l’air pousse franchement et laisse encore une belle marge. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:03",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Les coques recevront un souffle utile, régulier et agréable ; au large, le ciel ouvre grand la route du regard vers le large. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:04",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche, l’horizon s’ouvre net derrière la vitre. Les voiles trouveront un équilibre plaisant entre force et contrôle. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:05",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le ciel a débarrassé le large de ses rideaux. Côté vent, les voiles seront bien nourries sans arracher la barre. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:06",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la lumière découpe franchement la ligne d’horizon. La toile trouvera une poussée franche et encore maîtrisable. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:07",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le large se montre sans un nuage pour lui barrer la route ; pour les voiles, les voiles auront de quoi porter sans te demander les gros bras. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:good:08",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot : la côte baigne dans une clarté qui ne cache rien. La toile devrait chanter sans transformer la barre en combat. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:01",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "L’horizon s’ouvre net derrière la vitre. Les voiles auront de quoi porter sans te demander les gros bras. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:02",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le ciel a débarrassé le large de ses rideaux, tandis que la toile devrait chanter sans transformer la barre en combat. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:03",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "L’air est assez présent pour réveiller l’écume sans brutalité ; au large, la lumière découpe franchement la ligne d’horizon. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:04",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde, le large se montre sans un nuage pour lui barrer la route. L’air a juste assez de coffre pour faire chanter la toile. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:05",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La côte baigne dans une clarté qui ne cache rien. Côté vent, le vent travaille avec régularité sans chercher la bagarre. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:06",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel est grand ouvert au-dessus de la Manche. Le vent donne du répondant tout en gardant de bonnes manières. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:07",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "L’horizon file droit sous une lumière bien propre ; pour les voiles, le vent paraît taillé pour une glisse vive mais propre. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:favorable:excellent:08",
      "weatherFamily": "clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot : dehors, le bleu laisse voir le large jusqu’au bout. Le vent offre de la puissance sans prendre le commandement. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:01",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, l’horizon file droit sous une lumière bien propre. Le vent bombe le torse et réclamera des mains bien réveillées. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:02",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, le bleu laisse voir le large jusqu’au bout, tandis que le vent pousse franchement, alors les écoutes devront rester vivantes. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:03",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le vent se fait physique et ne pardonnera pas une écoute oubliée ; au large, la fenêtre donne sur un ciel lavé et une vue dégagée. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:04",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon, la lumière court librement sur tout l’horizon. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:05",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau. Côté vent, les coques trouveront de la vitesse, au prix d’une vigilance constante. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:06",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le large apparaît franc et lumineux depuis le Tourbillon. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:07",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La ligne du large ressort nette sous un ciel sans encombre ; pour les voiles, l’air a du coffre et la barre ne tolérera pas la distraction. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:critical:08",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large : dehors, la clarté donne envie de pousser la porte. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:01",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la lumière court librement sur tout l’horizon. L’air a du coffre et la barre ne tolérera pas la distraction. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:02",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau, tandis que les coques peuvent filer vite, mais le souffle impose de la maîtrise. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:03",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les voiles auront du travail et le barreur davantage encore ; au large, le large apparaît franc et lumineux depuis le Tourbillon. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:04",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la ligne du large ressort nette sous un ciel sans encombre. La toile va charger et chaque virement devra rester propre. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:05",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Dehors, la clarté donne envie de pousser la porte. Côté vent, l’air pousse avec caractère et réclame une marge généreuse. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:06",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la Manche montre un visage clair jusque vers l’horizon. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:07",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel ouvre grand la route du regard vers le large ; pour les voiles, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:poor:08",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme : l’horizon s’ouvre net derrière la vitre. La puissance est là, avec des coups de rein à surveiller. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:01",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la ligne du large ressort nette sous un ciel sans encombre. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:02",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Dehors, la clarté donne envie de pousser la porte, tandis que la puissance est là, avec des coups de rein à surveiller. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:03",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le vent donne une vraie navigation sportive sans offrir beaucoup de repos ; au large, la Manche montre un visage clair jusque vers l’horizon. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:04",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche, le ciel ouvre grand la route du regard vers le large. Le vent commence à hausser le ton autour des voiles. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:05",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "L’horizon s’ouvre net derrière la vitre. Côté vent, le vent bombe le torse et réclamera des mains bien réveillées. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:06",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel a débarrassé le large de ses rideaux. Le vent pousse franchement, alors les écoutes devront rester vivantes. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:07",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La lumière découpe franchement la ligne d’horizon ; pour les voiles, le vent se fait physique et ne pardonnera pas une écoute oubliée. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:mixed:08",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot : le large se montre sans un nuage pour lui barrer la route. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:01",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel ouvre grand la route du regard vers le large. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:02",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’horizon s’ouvre net derrière la vitre, tandis que le souffle devient musclé, assez pour fatiguer un équipage distrait. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:03",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les coques trouveront de la vitesse, au prix d’une vigilance constante ; au large, le ciel a débarrassé le large de ses rideaux. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:04",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde, la lumière découpe franchement la ligne d’horizon. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:05",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le large se montre sans un nuage pour lui barrer la route. Côté vent, l’air a du coffre et la barre ne tolérera pas la distraction. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:06",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la côte baigne dans une clarté qui ne cache rien. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:07",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le ciel est grand ouvert au-dessus de la Manche ; pour les voiles, les voiles auront du travail et le barreur davantage encore. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:good:08",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot : l’horizon file droit sous une lumière bien propre. La toile va charger et chaque virement devra rester propre. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:01",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la lumière découpe franchement la ligne d’horizon. Les voiles auront du travail et le barreur davantage encore. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:02",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le large se montre sans un nuage pour lui barrer la route, tandis que la toile va charger et chaque virement devra rester propre. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:03",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’air pousse avec caractère et réclame une marge généreuse ; au large, la côte baigne dans une clarté qui ne cache rien. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:04",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme, le ciel est grand ouvert au-dessus de la Manche. Les voiles vont tirer fort, avec des reprises qui demandent du métier. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:05",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’horizon file droit sous une lumière bien propre. Côté vent, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:06",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le bleu laisse voir le large jusqu’au bout. La puissance est là, avec des coups de rein à surveiller. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:07",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La fenêtre donne sur un ciel lavé et une vue dégagée ; pour les voiles, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:sporty:excellent:08",
      "weatherFamily": "clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Nom d’une pipe : la lumière court librement sur tout l’horizon. Le vent commence à hausser le ton autour des voiles. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "clear:dangerous:critical:01",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la fenêtre donne sur un ciel lavé et une vue dégagée. Les rafales veulent arracher la barre et vider toute marge de sécurité. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:02",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La lumière court librement sur tout l’horizon, tandis que les rafales dépassent ce qu’une sortie prudente peut accepter. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:03",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les coups de vent arrivent avec trop de force pour sortir proprement ; au large, le ciel ne garde aucun recoin sombre au-dessus de l’eau. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:04",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le large apparaît franc et lumineux depuis le Tourbillon. Les rafales peuvent coucher la toile avant même de laisser réagir. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:05",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La ligne du large ressort nette sous un ciel sans encombre. Côté vent, le souffle est devenu assez violent pour imposer le quai. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:06",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la clarté donne envie de pousser la porte. La toile serait ingérable au moindre coup de travers. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:07",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La Manche montre un visage clair jusque vers l’horizon ; pour les voiles, les voiles recevraient une puissance brutale et difficile à contenir. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:critical:08",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme : le ciel ouvre grand la route du regard vers le large. La toile serait chargée au point de rendre chaque manœuvre risquée. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:01",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le large apparaît franc et lumineux depuis le Tourbillon. Les voiles recevraient une puissance brutale et difficile à contenir. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:02",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La ligne du large ressort nette sous un ciel sans encombre, tandis que la toile serait chargée au point de rendre chaque manœuvre risquée. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:03",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le vent a franchi la limite où l’expérience remplace la prudence ; au large, la clarté donne envie de pousser la porte. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:04",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche, la Manche montre un visage clair jusque vers l’horizon. Les voiles prendraient des claques que personne ne doit minimiser. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:05",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel ouvre grand la route du regard vers le large. Côté vent, le vent mettrait l’équipage en lutte dès la mise à l’eau. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:06",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, l’horizon s’ouvre net derrière la vitre. Le vent frappe trop fort pour confier les coques au large. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:07",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel a débarrassé le large de ses rideaux ; pour les voiles, le vent cherche la bagarre et la barre n’a rien à y gagner. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:poor:08",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot : la lumière découpe franchement la ligne d’horizon. Les coques seraient livrées à un souffle bien trop violent. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:01",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la Manche montre un visage clair jusque vers l’horizon. Le vent cherche la bagarre et la barre n’a rien à y gagner. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:02",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le ciel ouvre grand la route du regard vers le large, tandis que les coques seraient livrées à un souffle bien trop violent. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:03",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La puissance du vent ne laisse plus la marge nécessaire ; au large, l’horizon s’ouvre net derrière la vitre. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:04",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde, le ciel a débarrassé le large de ses rideaux. Les rafales commandent désormais plus fort que le barreur. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:05",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La lumière découpe franchement la ligne d’horizon. Côté vent, les rafales veulent arracher la barre et vider toute marge de sécurité. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:06",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le large se montre sans un nuage pour lui barrer la route. Les rafales dépassent ce qu’une sortie prudente peut accepter. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:07",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La côte baigne dans une clarté qui ne cache rien ; pour les voiles, les coups de vent arrivent avec trop de force pour sortir proprement. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:mixed:08",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot : le ciel est grand ouvert au-dessus de la Manche. Les rafales peuvent coucher la toile avant même de laisser réagir. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:01",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel a débarrassé le large de ses rideaux. Les coups de vent arrivent avec trop de force pour sortir proprement. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:02",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La lumière découpe franchement la ligne d’horizon, tandis que les rafales peuvent coucher la toile avant même de laisser réagir. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:03",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le souffle est devenu assez violent pour imposer le quai ; au large, le large se montre sans un nuage pour lui barrer la route. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:04",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme, la côte baigne dans une clarté qui ne cache rien. La toile serait ingérable au moindre coup de travers. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:05",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le ciel est grand ouvert au-dessus de la Manche. Côté vent, les voiles recevraient une puissance brutale et difficile à contenir. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:06",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, l’horizon file droit sous une lumière bien propre. La toile serait chargée au point de rendre chaque manœuvre risquée. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:07",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Dehors, le bleu laisse voir le large jusqu’au bout ; pour les voiles, le vent a franchi la limite où l’expérience remplace la prudence. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:good:08",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon : la fenêtre donne sur un ciel lavé et une vue dégagée. Les voiles prendraient des claques que personne ne doit minimiser. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:01",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la côte baigne dans une clarté qui ne cache rien. Le vent a franchi la limite où l’expérience remplace la prudence. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:02",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le ciel est grand ouvert au-dessus de la Manche, tandis que les voiles prendraient des claques que personne ne doit minimiser. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:03",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vent mettrait l’équipage en lutte dès la mise à l’eau ; au large, l’horizon file droit sous une lumière bien propre. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:04",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi, dehors, le bleu laisse voir le large jusqu’au bout. Le vent frappe trop fort pour confier les coques au large. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:05",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La fenêtre donne sur un ciel lavé et une vue dégagée. Côté vent, le vent cherche la bagarre et la barre n’a rien à y gagner. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:06",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la lumière court librement sur tout l’horizon. Les coques seraient livrées à un souffle bien trop violent. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:07",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le ciel ne garde aucun recoin sombre au-dessus de l’eau ; pour les voiles, la puissance du vent ne laisse plus la marge nécessaire. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "clear:dangerous:excellent:08",
      "weatherFamily": "clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors : le large apparaît franc et lumineux depuis le Tourbillon. Les rafales commandent désormais plus fort que le barreur. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "mainly-clear": [
    {
      "id": "mainly-clear:calm:critical:01",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le ciel reste largement ouvert malgré quelques passages. L’air bouge à peine, juste assez pour faire frémir une écoute. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:02",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Quelques nuages flânent, mais l’horizon garde toute sa lumière, tandis que l’air somnole encore au-dessus de l’eau. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:03",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le peu d’air promet surtout une glisse très lente ; au large, le bleu tient la plus grande place derrière la vitre. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:04",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi, de rares nuages traversent un ciel qui reste accueillant. Le souffle est si discret qu’il faudra savourer chaque risée. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:05",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La lumière domine encore les petits morceaux de gris. Côté vent, les voiles auront davantage envie de dormir que de porter. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:06",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le large reste bien visible sous quelques nuages égarés. Le vent reste couché et les voiles auront du mal à prendre forme. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:07",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le ciel laisse passer de larges trouées claires ; pour les voiles, le souffle manque et les coques avanceront avec patience. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:critical:08",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors : quelques voiles de nuages glissent sans fermer l’horizon. Les voiles chercheront longtemps le moindre souffle utile. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:01",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, de rares nuages traversent un ciel qui reste accueillant. Le souffle manque et les coques avanceront avec patience. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:02",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La lumière domine encore les petits morceaux de gris, tandis que les voiles chercheront longtemps le moindre souffle utile. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:03",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les coques auront peu de force à tirer de l’air ; au large, le large reste bien visible sous quelques nuages égarés. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:04",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon, le ciel laisse passer de larges trouées claires. L’air manque de volonté pour faire vraiment chanter les voiles. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:05",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Quelques voiles de nuages glissent sans fermer l’horizon. Côté vent, le souffle reste trop mince pour réveiller franchement les coques. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:06",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la côte reçoit encore une lumière franche entre deux passages. Les voiles risquent de pendre sans trouver de quoi travailler. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:07",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le bleu résiste sans peine aux nuages qui se promènent ; pour les voiles, le vent ne pousse presque rien, pas même l’impatience. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:poor:08",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme : l’horizon demeure ouvert sous un ciel à peine occupé. Le vent reste dans sa bannette et laisse les voiles molles. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:01",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le ciel laisse passer de larges trouées claires. Le vent ne pousse presque rien, pas même l’impatience. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:02",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Quelques voiles de nuages glissent sans fermer l’horizon, tandis que le vent reste dans sa bannette et laisse les voiles molles. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:03",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le vent paresse et la toile ne trouvera guère de coffre ; au large, la côte reçoit encore une lumière franche entre deux passages. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:04",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot, le bleu résiste sans peine aux nuages qui se promènent. Le vent se fait oublier et la navigation sera bien molle. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:05",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé. Côté vent, l’air bouge à peine, juste assez pour faire frémir une écoute. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:06",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, les nuages restent trop dispersés pour gâcher la vue. L’air somnole encore au-dessus de l’eau. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:07",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La Manche garde de belles éclaircies au-dessus du large ; pour les voiles, le peu d’air promet surtout une glisse très lente. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:mixed:08",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute : le ciel joue avec quelques ombres sans perdre sa clarté. Le souffle est si discret qu’il faudra savourer chaque risée. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:01",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, le bleu résiste sans peine aux nuages qui se promènent. Le peu d’air promet surtout une glisse très lente. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:02",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé, tandis que le souffle est si discret qu’il faudra savourer chaque risée. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:03",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Les voiles auront davantage envie de dormir que de porter ; au large, les nuages restent trop dispersés pour gâcher la vue. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:04",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large, la Manche garde de belles éclaircies au-dessus du large. Le vent reste couché et les voiles auront du mal à prendre forme. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:05",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel joue avec quelques ombres sans perdre sa clarté. Côté vent, le souffle manque et les coques avanceront avec patience. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:06",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la fenêtre montre surtout du bleu et quelques moutons gris. Les voiles chercheront longtemps le moindre souffle utile. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:07",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau ; pour les voiles, les coques auront peu de force à tirer de l’air. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:good:08",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon : le ciel reste largement ouvert malgré quelques passages. L’air manque de volonté pour faire vraiment chanter les voiles. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:01",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la Manche garde de belles éclaircies au-dessus du large. Les coques auront peu de force à tirer de l’air. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:02",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le ciel joue avec quelques ombres sans perdre sa clarté, tandis que l’air manque de volonté pour faire vraiment chanter les voiles. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:03",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le souffle reste trop mince pour réveiller franchement les coques ; au large, la fenêtre montre surtout du bleu et quelques moutons gris. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:04",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme, la lumière trouve largement son chemin jusqu’à l’eau. Les voiles risquent de pendre sans trouver de quoi travailler. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:05",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le ciel reste largement ouvert malgré quelques passages. Côté vent, le vent ne pousse presque rien, pas même l’impatience. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:06",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, quelques nuages flânent, mais l’horizon garde toute sa lumière. Le vent reste dans sa bannette et laisse les voiles molles. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:07",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le bleu tient la plus grande place derrière la vitre ; pour les voiles, le vent paresse et la toile ne trouvera guère de coffre. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:calm:excellent:08",
      "weatherFamily": "mainly-clear",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : de rares nuages traversent un ciel qui reste accueillant. Le vent se fait oublier et la navigation sera bien molle. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:01",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le bleu tient la plus grande place derrière la vitre. Le vent pousse gentiment, mais la glisse restera tranquille. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:02",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "De rares nuages traversent un ciel qui reste accueillant, tandis que le souffle est propre mais encore un peu maigre. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:03",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner ; au large, la lumière domine encore les petits morceaux de gris. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:04",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon, le large reste bien visible sous quelques nuages égarés. Les coques avanceront proprement dans un souffle modeste. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:05",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le ciel laisse passer de larges trouées claires. Côté vent, la toile recevra un souffle régulier mais sans grand coffre. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:06",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, quelques voiles de nuages glissent sans fermer l’horizon. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:07",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La côte reçoit encore une lumière franche entre deux passages ; pour les voiles, les voiles prendront forme, sans promettre une grande cavalcade. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:critical:08",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme : le bleu résiste sans peine aux nuages qui se promènent. La toile travaillera doucement dans un air plutôt sage. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:01",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le large reste bien visible sous quelques nuages égarés. Les voiles prendront forme, sans promettre une grande cavalcade. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:02",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le ciel laisse passer de larges trouées claires, tandis que la toile travaillera doucement dans un air plutôt sage. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:03",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le vent se montre poli, presque trop pour les amateurs de vitesse ; au large, quelques voiles de nuages glissent sans fermer l’horizon. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:04",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot, la côte reçoit encore une lumière franche entre deux passages. Le vent reste léger et demandera de soigner chaque réglage. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:05",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le bleu résiste sans peine aux nuages qui se promènent. Côté vent, les voiles respireront doucement sans tirer fort sur les écoutes. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:06",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, l’horizon demeure ouvert sous un ciel à peine occupé. L’air suffit pour avancer doucement sans réveiller toute l’écume. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:07",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Dehors, les nuages restent trop dispersés pour gâcher la vue ; pour les voiles, le vent accompagne les coques sans chercher à les lancer. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:poor:08",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute : la Manche garde de belles éclaircies au-dessus du large. Le petit air offre une navigation douce et peu physique. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:01",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la côte reçoit encore une lumière franche entre deux passages. Le vent accompagne les coques sans chercher à les lancer. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:02",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le bleu résiste sans peine aux nuages qui se promènent, tandis que le petit air offre une navigation douce et peu physique. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:03",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "L’air donne juste assez de vie aux voiles pour une sortie calme ; au large, l’horizon demeure ouvert sous un ciel à peine occupé. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:04",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large, dehors, les nuages restent trop dispersés pour gâcher la vue. Le petit vent promet davantage de finesse que de spectacle. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:05",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La Manche garde de belles éclaircies au-dessus du large. Côté vent, le vent pousse gentiment, mais la glisse restera tranquille. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:06",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel joue avec quelques ombres sans perdre sa clarté. Le souffle est propre mais encore un peu maigre. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:07",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La fenêtre montre surtout du bleu et quelques moutons gris ; pour les voiles, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:mixed:08",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon : la lumière trouve largement son chemin jusqu’à l’eau. Les coques avanceront proprement dans un souffle modeste. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:01",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, dehors, les nuages restent trop dispersés pour gâcher la vue. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:02",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La Manche garde de belles éclaircies au-dessus du large, tandis que les coques avanceront proprement dans un souffle modeste. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:03",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La toile recevra un souffle régulier mais sans grand coffre ; au large, le ciel joue avec quelques ombres sans perdre sa clarté. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:04",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme, la fenêtre montre surtout du bleu et quelques moutons gris. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:05",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau. Côté vent, les voiles prendront forme, sans promettre une grande cavalcade. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:06",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le ciel reste largement ouvert malgré quelques passages. La toile travaillera doucement dans un air plutôt sage. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:07",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Quelques nuages flânent, mais l’horizon garde toute sa lumière ; pour les voiles, le vent se montre poli, presque trop pour les amateurs de vitesse. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:good:08",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le bleu tient la plus grande place derrière la vitre. Le vent reste léger et demandera de soigner chaque réglage. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:01",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la fenêtre montre surtout du bleu et quelques moutons gris. Le vent se montre poli, presque trop pour les amateurs de vitesse. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:02",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau, tandis que le vent reste léger et demandera de soigner chaque réglage. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:03",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les voiles respireront doucement sans tirer fort sur les écoutes ; au large, le ciel reste largement ouvert malgré quelques passages. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:04",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot, quelques nuages flânent, mais l’horizon garde toute sa lumière. L’air suffit pour avancer doucement sans réveiller toute l’écume. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:05",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le bleu tient la plus grande place derrière la vitre. Côté vent, le vent accompagne les coques sans chercher à les lancer. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:06",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, de rares nuages traversent un ciel qui reste accueillant. Le petit air offre une navigation douce et peu physique. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:07",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La lumière domine encore les petits morceaux de gris ; pour les voiles, l’air donne juste assez de vie aux voiles pour une sortie calme. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:light:excellent:08",
      "weatherFamily": "mainly-clear",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche : le large reste bien visible sous quelques nuages égarés. Le petit vent promet davantage de finesse que de spectacle. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:01",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la lumière domine encore les petits morceaux de gris. L’air a juste assez de coffre pour faire chanter la toile. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:02",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le large reste bien visible sous quelques nuages égarés, tandis que le vent travaille avec régularité sans chercher la bagarre. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:03",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le vent donne du répondant tout en gardant de bonnes manières ; au large, le ciel laisse passer de larges trouées claires. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:04",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot, quelques voiles de nuages glissent sans fermer l’horizon. Le vent paraît taillé pour une glisse vive mais propre. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:05",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La côte reçoit encore une lumière franche entre deux passages. Côté vent, le vent offre de la puissance sans prendre le commandement. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:06",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le bleu résiste sans peine aux nuages qui se promènent. Le vent tient sa ligne et remplit les voiles comme il faut. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:07",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé ; pour les voiles, le souffle est établi et devrait faire filer les coques proprement. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:critical:08",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute : dehors, les nuages restent trop dispersés pour gâcher la vue. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:01",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, quelques voiles de nuages glissent sans fermer l’horizon. Le souffle est établi et devrait faire filer les coques proprement. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:02",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La côte reçoit encore une lumière franche entre deux passages, tandis que les coques devraient accélérer sans mauvaise surprise dans les écoutes. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:03",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’air pousse franchement et laisse encore une belle marge ; au large, le bleu résiste sans peine aux nuages qui se promènent. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:04",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large, l’horizon demeure ouvert sous un ciel à peine occupé. Les coques recevront un souffle utile, régulier et agréable. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:05",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Dehors, les nuages restent trop dispersés pour gâcher la vue. Côté vent, les voiles trouveront un équilibre plaisant entre force et contrôle. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:06",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la Manche garde de belles éclaircies au-dessus du large. Les voiles seront bien nourries sans arracher la barre. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:07",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le ciel joue avec quelques ombres sans perdre sa clarté ; pour les voiles, la toile trouvera une poussée franche et encore maîtrisable. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:poor:08",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon : la fenêtre montre surtout du bleu et quelques moutons gris. Les voiles auront de quoi porter sans te demander les gros bras. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:01",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, l’horizon demeure ouvert sous un ciel à peine occupé. La toile trouvera une poussée franche et encore maîtrisable. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:02",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Dehors, les nuages restent trop dispersés pour gâcher la vue, tandis que les voiles auront de quoi porter sans te demander les gros bras. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:03",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La toile devrait chanter sans transformer la barre en combat ; au large, la Manche garde de belles éclaircies au-dessus du large. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:04",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme, le ciel joue avec quelques ombres sans perdre sa clarté. L’air est assez présent pour réveiller l’écume sans brutalité. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:05",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La fenêtre montre surtout du bleu et quelques moutons gris. Côté vent, l’air a juste assez de coffre pour faire chanter la toile. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:06",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la lumière trouve largement son chemin jusqu’à l’eau. Le vent travaille avec régularité sans chercher la bagarre. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:07",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le ciel reste largement ouvert malgré quelques passages ; pour les voiles, le vent donne du répondant tout en gardant de bonnes manières. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:mixed:08",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : quelques nuages flânent, mais l’horizon garde toute sa lumière. Le vent paraît taillé pour une glisse vive mais propre. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:01",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel joue avec quelques ombres sans perdre sa clarté. Le vent donne du répondant tout en gardant de bonnes manières. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:02",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La fenêtre montre surtout du bleu et quelques moutons gris, tandis que le vent paraît taillé pour une glisse vive mais propre. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:03",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le vent offre de la puissance sans prendre le commandement ; au large, la lumière trouve largement son chemin jusqu’à l’eau. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:04",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot, le ciel reste largement ouvert malgré quelques passages. Le vent tient sa ligne et remplit les voiles comme il faut. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:05",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Quelques nuages flânent, mais l’horizon garde toute sa lumière. Côté vent, le souffle est établi et devrait faire filer les coques proprement. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:06",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le bleu tient la plus grande place derrière la vitre. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:07",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "De rares nuages traversent un ciel qui reste accueillant ; pour les voiles, l’air pousse franchement et laisse encore une belle marge. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:good:08",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche : la lumière domine encore les petits morceaux de gris. Les coques recevront un souffle utile, régulier et agréable. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:01",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le ciel reste largement ouvert malgré quelques passages. L’air pousse franchement et laisse encore une belle marge. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:02",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Quelques nuages flânent, mais l’horizon garde toute sa lumière, tandis que les coques recevront un souffle utile, régulier et agréable. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:03",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Les voiles trouveront un équilibre plaisant entre force et contrôle ; au large, le bleu tient la plus grande place derrière la vitre. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:04",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot, de rares nuages traversent un ciel qui reste accueillant. Les voiles seront bien nourries sans arracher la barre. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:05",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La lumière domine encore les petits morceaux de gris. Côté vent, la toile trouvera une poussée franche et encore maîtrisable. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:06",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le large reste bien visible sous quelques nuages égarés. Les voiles auront de quoi porter sans te demander les gros bras. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:07",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le ciel laisse passer de larges trouées claires ; pour les voiles, la toile devrait chanter sans transformer la barre en combat. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:favorable:excellent:08",
      "weatherFamily": "mainly-clear",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde : quelques voiles de nuages glissent sans fermer l’horizon. L’air est assez présent pour réveiller l’écume sans brutalité. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:01",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le ciel laisse passer de larges trouées claires. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:02",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Quelques voiles de nuages glissent sans fermer l’horizon, tandis que la toile sera puissante et chaque manœuvre demandera de l’anticipation. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:03",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La puissance est là, avec des coups de rein à surveiller ; au large, la côte reçoit encore une lumière franche entre deux passages. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:04",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large, le bleu résiste sans peine aux nuages qui se promènent. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:05",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé. Côté vent, le vent commence à hausser le ton autour des voiles. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:06",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les nuages restent trop dispersés pour gâcher la vue. Le vent bombe le torse et réclamera des mains bien réveillées. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:07",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La Manche garde de belles éclaircies au-dessus du large ; pour les voiles, le vent pousse franchement, alors les écoutes devront rester vivantes. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:critical:08",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon : le ciel joue avec quelques ombres sans perdre sa clarté. Le vent se fait physique et ne pardonnera pas une écoute oubliée. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:01",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le bleu résiste sans peine aux nuages qui se promènent. Le vent pousse franchement, alors les écoutes devront rester vivantes. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:02",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé, tandis que le vent se fait physique et ne pardonnera pas une écoute oubliée. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:03",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le souffle devient musclé, assez pour fatiguer un équipage distrait ; au large, les nuages restent trop dispersés pour gâcher la vue. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:04",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme, la Manche garde de belles éclaircies au-dessus du large. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:05",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel joue avec quelques ombres sans perdre sa clarté. Côté vent, les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:06",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la fenêtre montre surtout du bleu et quelques moutons gris. L’air a du coffre et la barre ne tolérera pas la distraction. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:07",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau ; pour les voiles, les coques peuvent filer vite, mais le souffle impose de la maîtrise. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:poor:08",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le ciel reste largement ouvert malgré quelques passages. Les voiles auront du travail et le barreur davantage encore. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:01",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la Manche garde de belles éclaircies au-dessus du large. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:02",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le ciel joue avec quelques ombres sans perdre sa clarté, tandis que les voiles auront du travail et le barreur davantage encore. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:03",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La toile va charger et chaque virement devra rester propre ; au large, la fenêtre montre surtout du bleu et quelques moutons gris. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:04",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot, la lumière trouve largement son chemin jusqu’à l’eau. L’air pousse avec caractère et réclame une marge généreuse. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:05",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le ciel reste largement ouvert malgré quelques passages. Côté vent, les voiles vont tirer fort, avec des reprises qui demandent du métier. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:06",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, quelques nuages flânent, mais l’horizon garde toute sa lumière. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:07",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le bleu tient la plus grande place derrière la vitre ; pour les voiles, la puissance est là, avec des coups de rein à surveiller. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:mixed:08",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche : de rares nuages traversent un ciel qui reste accueillant. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:01",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, la lumière trouve largement son chemin jusqu’à l’eau. La puissance est là, avec des coups de rein à surveiller. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:02",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le ciel reste largement ouvert malgré quelques passages, tandis que le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:03",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le vent commence à hausser le ton autour des voiles ; au large, quelques nuages flânent, mais l’horizon garde toute sa lumière. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:04",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot, le bleu tient la plus grande place derrière la vitre. Le vent bombe le torse et réclamera des mains bien réveillées. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:05",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "De rares nuages traversent un ciel qui reste accueillant. Côté vent, le vent pousse franchement, alors les écoutes devront rester vivantes. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:06",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la lumière domine encore les petits morceaux de gris. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:07",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le large reste bien visible sous quelques nuages égarés ; pour les voiles, le souffle devient musclé, assez pour fatiguer un équipage distrait. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:good:08",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde : le ciel laisse passer de larges trouées claires. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:01",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le bleu tient la plus grande place derrière la vitre. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:02",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "De rares nuages traversent un ciel qui reste accueillant, tandis que les coques trouveront de la vitesse, au prix d’une vigilance constante. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:03",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes ; au large, la lumière domine encore les petits morceaux de gris. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:04",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon, le large reste bien visible sous quelques nuages égarés. L’air a du coffre et la barre ne tolérera pas la distraction. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:05",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le ciel laisse passer de larges trouées claires. Côté vent, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:06",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, quelques voiles de nuages glissent sans fermer l’horizon. Les voiles auront du travail et le barreur davantage encore. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:07",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La côte reçoit encore une lumière franche entre deux passages ; pour les voiles, la toile va charger et chaque virement devra rester propre. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:sporty:excellent:08",
      "weatherFamily": "mainly-clear",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme : le bleu résiste sans peine aux nuages qui se promènent. L’air pousse avec caractère et réclame une marge généreuse. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "mainly-clear:dangerous:critical:01",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la côte reçoit encore une lumière franche entre deux passages. Le vent frappe trop fort pour confier les coques au large. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:02",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le bleu résiste sans peine aux nuages qui se promènent, tandis que le vent cherche la bagarre et la barre n’a rien à y gagner. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:03",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les coques seraient livrées à un souffle bien trop violent ; au large, l’horizon demeure ouvert sous un ciel à peine occupé. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:04",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme, dehors, les nuages restent trop dispersés pour gâcher la vue. La puissance du vent ne laisse plus la marge nécessaire. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:05",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La Manche garde de belles éclaircies au-dessus du large. Côté vent, les rafales commandent désormais plus fort que le barreur. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:06",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le ciel joue avec quelques ombres sans perdre sa clarté. Les rafales veulent arracher la barre et vider toute marge de sécurité. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:07",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La fenêtre montre surtout du bleu et quelques moutons gris ; pour les voiles, les rafales dépassent ce qu’une sortie prudente peut accepter. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:critical:08",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la lumière trouve largement son chemin jusqu’à l’eau. Les coups de vent arrivent avec trop de force pour sortir proprement. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:01",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, dehors, les nuages restent trop dispersés pour gâcher la vue. Les rafales dépassent ce qu’une sortie prudente peut accepter. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:02",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La Manche garde de belles éclaircies au-dessus du large, tandis que les coups de vent arrivent avec trop de force pour sortir proprement. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:03",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les rafales peuvent coucher la toile avant même de laisser réagir ; au large, le ciel joue avec quelques ombres sans perdre sa clarté. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:04",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Par la barbe du vieux phare, la fenêtre montre surtout du bleu et quelques moutons gris. Le souffle est devenu assez violent pour imposer le quai. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:05",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau. Côté vent, la toile serait ingérable au moindre coup de travers. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:06",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le ciel reste largement ouvert malgré quelques passages. Les voiles recevraient une puissance brutale et difficile à contenir. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:07",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Quelques nuages flânent, mais l’horizon garde toute sa lumière ; pour les voiles, la toile serait chargée au point de rendre chaque manœuvre risquée. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:poor:08",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche : le bleu tient la plus grande place derrière la vitre. Le vent a franchi la limite où l’expérience remplace la prudence. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:01",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre montre surtout du bleu et quelques moutons gris. La toile serait chargée au point de rendre chaque manœuvre risquée. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:02",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La lumière trouve largement son chemin jusqu’à l’eau, tandis que le vent a franchi la limite où l’expérience remplace la prudence. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:03",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les voiles prendraient des claques que personne ne doit minimiser ; au large, le ciel reste largement ouvert malgré quelques passages. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:04",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot, quelques nuages flânent, mais l’horizon garde toute sa lumière. Le vent mettrait l’équipage en lutte dès la mise à l’eau. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:05",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le bleu tient la plus grande place derrière la vitre. Côté vent, le vent frappe trop fort pour confier les coques au large. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:06",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, de rares nuages traversent un ciel qui reste accueillant. Le vent cherche la bagarre et la barre n’a rien à y gagner. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:07",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La lumière domine encore les petits morceaux de gris ; pour les voiles, les coques seraient livrées à un souffle bien trop violent. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:mixed:08",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde : le large reste bien visible sous quelques nuages égarés. La puissance du vent ne laisse plus la marge nécessaire. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:01",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, quelques nuages flânent, mais l’horizon garde toute sa lumière. Les coques seraient livrées à un souffle bien trop violent. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:02",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le bleu tient la plus grande place derrière la vitre, tandis que la puissance du vent ne laisse plus la marge nécessaire. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:03",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les rafales commandent désormais plus fort que le barreur ; au large, de rares nuages traversent un ciel qui reste accueillant. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:04",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon, la lumière domine encore les petits morceaux de gris. Les rafales veulent arracher la barre et vider toute marge de sécurité. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:05",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le large reste bien visible sous quelques nuages égarés. Côté vent, les rafales dépassent ce qu’une sortie prudente peut accepter. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:06",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le ciel laisse passer de larges trouées claires. Les coups de vent arrivent avec trop de force pour sortir proprement. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:07",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Quelques voiles de nuages glissent sans fermer l’horizon ; pour les voiles, les rafales peuvent coucher la toile avant même de laisser réagir. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:good:08",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme : la côte reçoit encore une lumière franche entre deux passages. Le souffle est devenu assez violent pour imposer le quai. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:01",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la lumière domine encore les petits morceaux de gris. Les rafales peuvent coucher la toile avant même de laisser réagir. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:02",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le large reste bien visible sous quelques nuages égarés, tandis que le souffle est devenu assez violent pour imposer le quai. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:03",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La toile serait ingérable au moindre coup de travers ; au large, le ciel laisse passer de larges trouées claires. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:04",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors, quelques voiles de nuages glissent sans fermer l’horizon. Les voiles recevraient une puissance brutale et difficile à contenir. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:05",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La côte reçoit encore une lumière franche entre deux passages. Côté vent, la toile serait chargée au point de rendre chaque manœuvre risquée. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:06",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le bleu résiste sans peine aux nuages qui se promènent. Le vent a franchi la limite où l’expérience remplace la prudence. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:07",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "L’horizon demeure ouvert sous un ciel à peine occupé ; pour les voiles, les voiles prendraient des claques que personne ne doit minimiser. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "mainly-clear:dangerous:excellent:08",
      "weatherFamily": "mainly-clear",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi : dehors, les nuages restent trop dispersés pour gâcher la vue. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "partly-cloudy": [
    {
      "id": "partly-cloudy:calm:critical:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, les nuages et la lumière se partagent l’horizon. Les voiles risquent de pendre sans trouver de quoi travailler. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le ciel alterne éclaircies franches et passages plus gris, tandis que le vent ne pousse presque rien, pas même l’impatience. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vent reste dans sa bannette et laisse les voiles molles ; au large, des ombres courent sur le large entre deux trouées claires. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors, la Manche change de couleur au passage des nuages. Le vent paresse et la toile ne trouvera guère de coffre. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le bleu apparaît puis se range derrière de gros nuages. Côté vent, le vent se fait oublier et la navigation sera bien molle. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la fenêtre montre un ciel partagé, jamais tout à fait sombre. L’air bouge à peine, juste assez pour faire frémir une écoute. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La lumière revient par plaques sur la ligne du large ; pour les voiles, l’air somnole encore au-dessus de l’eau. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:critical:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi : les nuages avancent en laissant encore de belles ouvertures. Le peu d’air promet surtout une glisse très lente. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la Manche change de couleur au passage des nuages. L’air somnole encore au-dessus de l’eau. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le bleu apparaît puis se range derrière de gros nuages, tandis que le peu d’air promet surtout une glisse très lente. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le souffle est si discret qu’il faudra savourer chaque risée ; au large, la fenêtre montre un ciel partagé, jamais tout à fait sombre. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme, la lumière revient par plaques sur la ligne du large. Les voiles auront davantage envie de dormir que de porter. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les nuages avancent en laissant encore de belles ouvertures. Côté vent, le vent reste couché et les voiles auront du mal à prendre forme. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, l’horizon passe du clair au gris sans disparaître. Le souffle manque et les coques avanceront avec patience. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le ciel hésite entre sa veste bleue et son manteau gris ; pour les voiles, les voiles chercheront longtemps le moindre souffle utile. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:poor:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon : dehors, les éclaircies se faufilent entre des nuages bien présents. Les coques auront peu de force à tirer de l’air. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la lumière revient par plaques sur la ligne du large. Les voiles chercheront longtemps le moindre souffle utile. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Les nuages avancent en laissant encore de belles ouvertures, tandis que les coques auront peu de force à tirer de l’air. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "L’air manque de volonté pour faire vraiment chanter les voiles ; au large, l’horizon passe du clair au gris sans disparaître. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute, le ciel hésite entre sa veste bleue et son manteau gris. Le souffle reste trop mince pour réveiller franchement les coques. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents. Côté vent, les voiles risquent de pendre sans trouver de quoi travailler. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la côte reçoit tour à tour lumière vive et ombre douce. Le vent ne pousse presque rien, pas même l’impatience. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine ; pour les voiles, le vent reste dans sa bannette et laisse les voiles molles. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:mixed:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot : des pans de bleu découpent encore la couverture nuageuse. Le vent paresse et la toile ne trouvera guère de coffre. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel hésite entre sa veste bleue et son manteau gris. Le vent reste dans sa bannette et laisse les voiles molles. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents, tandis que le vent paresse et la toile ne trouvera guère de coffre. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le vent se fait oublier et la navigation sera bien molle ; au large, la côte reçoit tour à tour lumière vive et ombre douce. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon, le large reste lisible sous un ciel qui change souvent de mine. L’air bouge à peine, juste assez pour faire frémir une écoute. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Des pans de bleu découpent encore la couverture nuageuse. Côté vent, l’air somnole encore au-dessus de l’eau. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la lumière et les nuages jouent à se voler l’horizon. Le peu d’air promet surtout une glisse très lente. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche ; pour les voiles, le souffle est si discret qu’il faudra savourer chaque risée. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:good:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large : les nuages et la lumière se partagent l’horizon. Les voiles auront davantage envie de dormir que de porter. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le large reste lisible sous un ciel qui change souvent de mine. Le souffle est si discret qu’il faudra savourer chaque risée. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des pans de bleu découpent encore la couverture nuageuse, tandis que les voiles auront davantage envie de dormir que de porter. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le vent reste couché et les voiles auront du mal à prendre forme ; au large, la lumière et les nuages jouent à se voler l’horizon. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le ciel garde assez d’ouvertures pour éclairer la Manche. Le souffle manque et les coques avanceront avec patience. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Les nuages et la lumière se partagent l’horizon. Côté vent, les voiles chercheront longtemps le moindre souffle utile. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel alterne éclaircies franches et passages plus gris. Les coques auront peu de force à tirer de l’air. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des ombres courent sur le large entre deux trouées claires ; pour les voiles, l’air manque de volonté pour faire vraiment chanter les voiles. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:calm:excellent:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme : la Manche change de couleur au passage des nuages. Le souffle reste trop mince pour réveiller franchement les coques. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, des ombres courent sur le large entre deux trouées claires. L’air suffit pour avancer doucement sans réveiller toute l’écume. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La Manche change de couleur au passage des nuages, tandis que le vent accompagne les coques sans chercher à les lancer. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le petit air offre une navigation douce et peu physique ; au large, le bleu apparaît puis se range derrière de gros nuages. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme, la fenêtre montre un ciel partagé, jamais tout à fait sombre. L’air donne juste assez de vie aux voiles pour une sortie calme. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La lumière revient par plaques sur la ligne du large. Côté vent, le petit vent promet davantage de finesse que de spectacle. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les nuages avancent en laissant encore de belles ouvertures. Le vent pousse gentiment, mais la glisse restera tranquille. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "L’horizon passe du clair au gris sans disparaître ; pour les voiles, le souffle est propre mais encore un peu maigre. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:critical:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon : le ciel hésite entre sa veste bleue et son manteau gris. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la fenêtre montre un ciel partagé, jamais tout à fait sombre. Le souffle est propre mais encore un peu maigre. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La lumière revient par plaques sur la ligne du large, tandis que les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Les coques avanceront proprement dans un souffle modeste ; au large, les nuages avancent en laissant encore de belles ouvertures. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute, l’horizon passe du clair au gris sans disparaître. La toile recevra un souffle régulier mais sans grand coffre. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le ciel hésite entre sa veste bleue et son manteau gris. Côté vent, un petit souffle remplit la toile sans lui donner beaucoup de nerf. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, les éclaircies se faufilent entre des nuages bien présents. Les voiles prendront forme, sans promettre une grande cavalcade. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La côte reçoit tour à tour lumière vive et ombre douce ; pour les voiles, la toile travaillera doucement dans un air plutôt sage. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:poor:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot : le large reste lisible sous un ciel qui change souvent de mine. Le vent se montre poli, presque trop pour les amateurs de vitesse. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, l’horizon passe du clair au gris sans disparaître. La toile travaillera doucement dans un air plutôt sage. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le ciel hésite entre sa veste bleue et son manteau gris, tandis que le vent se montre poli, presque trop pour les amateurs de vitesse. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le vent reste léger et demandera de soigner chaque réglage ; au large, les éclaircies se faufilent entre des nuages bien présents. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon, la côte reçoit tour à tour lumière vive et ombre douce. Les voiles respireront doucement sans tirer fort sur les écoutes. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine. Côté vent, l’air suffit pour avancer doucement sans réveiller toute l’écume. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, des pans de bleu découpent encore la couverture nuageuse. Le vent accompagne les coques sans chercher à les lancer. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La lumière et les nuages jouent à se voler l’horizon ; pour les voiles, le petit air offre une navigation douce et peu physique. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:mixed:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large : le ciel garde assez d’ouvertures pour éclairer la Manche. L’air donne juste assez de vie aux voiles pour une sortie calme. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, la côte reçoit tour à tour lumière vive et ombre douce. Le petit air offre une navigation douce et peu physique. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine, tandis que l’air donne juste assez de vie aux voiles pour une sortie calme. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le petit vent promet davantage de finesse que de spectacle ; au large, des pans de bleu découpent encore la couverture nuageuse. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la lumière et les nuages jouent à se voler l’horizon. Le vent pousse gentiment, mais la glisse restera tranquille. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche. Côté vent, le souffle est propre mais encore un peu maigre. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, les nuages et la lumière se partagent l’horizon. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel alterne éclaircies franches et passages plus gris ; pour les voiles, les coques avanceront proprement dans un souffle modeste. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:good:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme : des ombres courent sur le large entre deux trouées claires. La toile recevra un souffle régulier mais sans grand coffre. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la lumière et les nuages jouent à se voler l’horizon. Les coques avanceront proprement dans un souffle modeste. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche, tandis que la toile recevra un souffle régulier mais sans grand coffre. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Un petit souffle remplit la toile sans lui donner beaucoup de nerf ; au large, les nuages et la lumière se partagent l’horizon. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche, le ciel alterne éclaircies franches et passages plus gris. Les voiles prendront forme, sans promettre une grande cavalcade. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Des ombres courent sur le large entre deux trouées claires. Côté vent, la toile travaillera doucement dans un air plutôt sage. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la Manche change de couleur au passage des nuages. Le vent se montre poli, presque trop pour les amateurs de vitesse. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le bleu apparaît puis se range derrière de gros nuages ; pour les voiles, le vent reste léger et demandera de soigner chaque réglage. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:light:excellent:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot : la fenêtre montre un ciel partagé, jamais tout à fait sombre. Les voiles respireront doucement sans tirer fort sur les écoutes. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le bleu apparaît puis se range derrière de gros nuages. Les voiles seront bien nourries sans arracher la barre. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La fenêtre montre un ciel partagé, jamais tout à fait sombre, tandis que la toile trouvera une poussée franche et encore maîtrisable. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les voiles auront de quoi porter sans te demander les gros bras ; au large, la lumière revient par plaques sur la ligne du large. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute, les nuages avancent en laissant encore de belles ouvertures. La toile devrait chanter sans transformer la barre en combat. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "L’horizon passe du clair au gris sans disparaître. Côté vent, l’air est assez présent pour réveiller l’écume sans brutalité. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le ciel hésite entre sa veste bleue et son manteau gris. L’air a juste assez de coffre pour faire chanter la toile. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents ; pour les voiles, le vent travaille avec régularité sans chercher la bagarre. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:critical:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot : la côte reçoit tour à tour lumière vive et ombre douce. Le vent donne du répondant tout en gardant de bonnes manières. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, les nuages avancent en laissant encore de belles ouvertures. Le vent travaille avec régularité sans chercher la bagarre. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’horizon passe du clair au gris sans disparaître, tandis que le vent donne du répondant tout en gardant de bonnes manières. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le vent paraît taillé pour une glisse vive mais propre ; au large, le ciel hésite entre sa veste bleue et son manteau gris. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon, dehors, les éclaircies se faufilent entre des nuages bien présents. Le vent offre de la puissance sans prendre le commandement. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La côte reçoit tour à tour lumière vive et ombre douce. Côté vent, le vent tient sa ligne et remplit les voiles comme il faut. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le large reste lisible sous un ciel qui change souvent de mine. Le souffle est établi et devrait faire filer les coques proprement. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Des pans de bleu découpent encore la couverture nuageuse ; pour les voiles, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:poor:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large : la lumière et les nuages jouent à se voler l’horizon. L’air pousse franchement et laisse encore une belle marge. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, les éclaircies se faufilent entre des nuages bien présents. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La côte reçoit tour à tour lumière vive et ombre douce, tandis que l’air pousse franchement et laisse encore une belle marge. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Les coques recevront un souffle utile, régulier et agréable ; au large, le large reste lisible sous un ciel qui change souvent de mine. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, des pans de bleu découpent encore la couverture nuageuse. Les voiles trouveront un équilibre plaisant entre force et contrôle. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La lumière et les nuages jouent à se voler l’horizon. Côté vent, les voiles seront bien nourries sans arracher la barre. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel garde assez d’ouvertures pour éclairer la Manche. La toile trouvera une poussée franche et encore maîtrisable. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Les nuages et la lumière se partagent l’horizon ; pour les voiles, les voiles auront de quoi porter sans te demander les gros bras. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:mixed:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme : le ciel alterne éclaircies franches et passages plus gris. La toile devrait chanter sans transformer la barre en combat. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, des pans de bleu découpent encore la couverture nuageuse. Les voiles auront de quoi porter sans te demander les gros bras. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La lumière et les nuages jouent à se voler l’horizon, tandis que la toile devrait chanter sans transformer la barre en combat. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’air est assez présent pour réveiller l’écume sans brutalité ; au large, le ciel garde assez d’ouvertures pour éclairer la Manche. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche, les nuages et la lumière se partagent l’horizon. L’air a juste assez de coffre pour faire chanter la toile. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le ciel alterne éclaircies franches et passages plus gris. Côté vent, le vent travaille avec régularité sans chercher la bagarre. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des ombres courent sur le large entre deux trouées claires. Le vent donne du répondant tout en gardant de bonnes manières. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La Manche change de couleur au passage des nuages ; pour les voiles, le vent paraît taillé pour une glisse vive mais propre. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:good:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot : le bleu apparaît puis se range derrière de gros nuages. Le vent offre de la puissance sans prendre le commandement. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, les nuages et la lumière se partagent l’horizon. Le vent paraît taillé pour une glisse vive mais propre. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le ciel alterne éclaircies franches et passages plus gris, tandis que le vent offre de la puissance sans prendre le commandement. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le vent tient sa ligne et remplit les voiles comme il faut ; au large, des ombres courent sur le large entre deux trouées claires. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde, la Manche change de couleur au passage des nuages. Le souffle est établi et devrait faire filer les coques proprement. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le bleu apparaît puis se range derrière de gros nuages. Côté vent, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la fenêtre montre un ciel partagé, jamais tout à fait sombre. L’air pousse franchement et laisse encore une belle marge. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La lumière revient par plaques sur la ligne du large ; pour les voiles, les coques recevront un souffle utile, régulier et agréable. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:favorable:excellent:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot : les nuages avancent en laissant encore de belles ouvertures. Les voiles trouveront un équilibre plaisant entre force et contrôle. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la lumière revient par plaques sur la ligne du large. L’air a du coffre et la barre ne tolérera pas la distraction. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Les nuages avancent en laissant encore de belles ouvertures, tandis que les coques peuvent filer vite, mais le souffle impose de la maîtrise. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Les voiles auront du travail et le barreur davantage encore ; au large, l’horizon passe du clair au gris sans disparaître. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon, le ciel hésite entre sa veste bleue et son manteau gris. La toile va charger et chaque virement devra rester propre. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents. Côté vent, l’air pousse avec caractère et réclame une marge généreuse. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la côte reçoit tour à tour lumière vive et ombre douce. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine ; pour les voiles, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:critical:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large : des pans de bleu découpent encore la couverture nuageuse. La puissance est là, avec des coups de rein à surveiller. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le ciel hésite entre sa veste bleue et son manteau gris. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents, tandis que la puissance est là, avec des coups de rein à surveiller. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le vent donne une vraie navigation sportive sans offrir beaucoup de repos ; au large, la côte reçoit tour à tour lumière vive et ombre douce. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le large reste lisible sous un ciel qui change souvent de mine. Le vent commence à hausser le ton autour des voiles. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Des pans de bleu découpent encore la couverture nuageuse. Côté vent, le vent bombe le torse et réclamera des mains bien réveillées. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la lumière et les nuages jouent à se voler l’horizon. Le vent pousse franchement, alors les écoutes devront rester vivantes. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche ; pour les voiles, le vent se fait physique et ne pardonnera pas une écoute oubliée. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:poor:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme : les nuages et la lumière se partagent l’horizon. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le large reste lisible sous un ciel qui change souvent de mine. Le vent se fait physique et ne pardonnera pas une écoute oubliée. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des pans de bleu découpent encore la couverture nuageuse, tandis que le souffle devient musclé, assez pour fatiguer un équipage distrait. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les coques trouveront de la vitesse, au prix d’une vigilance constante ; au large, la lumière et les nuages jouent à se voler l’horizon. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche, le ciel garde assez d’ouvertures pour éclairer la Manche. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les nuages et la lumière se partagent l’horizon. Côté vent, l’air a du coffre et la barre ne tolérera pas la distraction. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel alterne éclaircies franches et passages plus gris. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des ombres courent sur le large entre deux trouées claires ; pour les voiles, les voiles auront du travail et le barreur davantage encore. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:mixed:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot : la Manche change de couleur au passage des nuages. La toile va charger et chaque virement devra rester propre. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel garde assez d’ouvertures pour éclairer la Manche. Les voiles auront du travail et le barreur davantage encore. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les nuages et la lumière se partagent l’horizon, tandis que la toile va charger et chaque virement devra rester propre. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’air pousse avec caractère et réclame une marge généreuse ; au large, le ciel alterne éclaircies franches et passages plus gris. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde, des ombres courent sur le large entre deux trouées claires. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La Manche change de couleur au passage des nuages. Côté vent, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le bleu apparaît puis se range derrière de gros nuages. La puissance est là, avec des coups de rein à surveiller. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La fenêtre montre un ciel partagé, jamais tout à fait sombre ; pour les voiles, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:good:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot : la lumière revient par plaques sur la ligne du large. Le vent commence à hausser le ton autour des voiles. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, des ombres courent sur le large entre deux trouées claires. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La Manche change de couleur au passage des nuages, tandis que le vent commence à hausser le ton autour des voiles. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le vent bombe le torse et réclamera des mains bien réveillées ; au large, le bleu apparaît puis se range derrière de gros nuages. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme, la fenêtre montre un ciel partagé, jamais tout à fait sombre. Le vent pousse franchement, alors les écoutes devront rester vivantes. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La lumière revient par plaques sur la ligne du large. Côté vent, le vent se fait physique et ne pardonnera pas une écoute oubliée. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, les nuages avancent en laissant encore de belles ouvertures. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’horizon passe du clair au gris sans disparaître ; pour les voiles, les coques trouveront de la vitesse, au prix d’une vigilance constante. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:sporty:excellent:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon : le ciel hésite entre sa veste bleue et son manteau gris. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "partly-cloudy:dangerous:critical:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, l’horizon passe du clair au gris sans disparaître. Les voiles recevraient une puissance brutale et difficile à contenir. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le ciel hésite entre sa veste bleue et son manteau gris, tandis que la toile serait chargée au point de rendre chaque manœuvre risquée. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le vent a franchi la limite où l’expérience remplace la prudence ; au large, les éclaircies se faufilent entre des nuages bien présents. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la côte reçoit tour à tour lumière vive et ombre douce. Les voiles prendraient des claques que personne ne doit minimiser. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine. Côté vent, le vent mettrait l’équipage en lutte dès la mise à l’eau. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, des pans de bleu découpent encore la couverture nuageuse. Le vent frappe trop fort pour confier les coques au large. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La lumière et les nuages jouent à se voler l’horizon ; pour les voiles, le vent cherche la bagarre et la barre n’a rien à y gagner. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:critical:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme : le ciel garde assez d’ouvertures pour éclairer la Manche. Les coques seraient livrées à un souffle bien trop violent. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la côte reçoit tour à tour lumière vive et ombre douce. Le vent cherche la bagarre et la barre n’a rien à y gagner. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le large reste lisible sous un ciel qui change souvent de mine, tandis que les coques seraient livrées à un souffle bien trop violent. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La puissance du vent ne laisse plus la marge nécessaire ; au large, des pans de bleu découpent encore la couverture nuageuse. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche, la lumière et les nuages jouent à se voler l’horizon. Les rafales commandent désormais plus fort que le barreur. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche. Côté vent, les rafales veulent arracher la barre et vider toute marge de sécurité. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, les nuages et la lumière se partagent l’horizon. Les rafales dépassent ce qu’une sortie prudente peut accepter. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel alterne éclaircies franches et passages plus gris ; pour les voiles, les coups de vent arrivent avec trop de force pour sortir proprement. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:poor:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot : des ombres courent sur le large entre deux trouées claires. Les rafales peuvent coucher la toile avant même de laisser réagir. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la lumière et les nuages jouent à se voler l’horizon. Les coups de vent arrivent avec trop de force pour sortir proprement. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le ciel garde assez d’ouvertures pour éclairer la Manche, tandis que les rafales peuvent coucher la toile avant même de laisser réagir. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le souffle est devenu assez violent pour imposer le quai ; au large, les nuages et la lumière se partagent l’horizon. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde, le ciel alterne éclaircies franches et passages plus gris. La toile serait ingérable au moindre coup de travers. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Des ombres courent sur le large entre deux trouées claires. Côté vent, les voiles recevraient une puissance brutale et difficile à contenir. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la Manche change de couleur au passage des nuages. La toile serait chargée au point de rendre chaque manœuvre risquée. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le bleu apparaît puis se range derrière de gros nuages ; pour les voiles, le vent a franchi la limite où l’expérience remplace la prudence. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:mixed:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Mille sabords : la fenêtre montre un ciel partagé, jamais tout à fait sombre. Les voiles prendraient des claques que personne ne doit minimiser. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel alterne éclaircies franches et passages plus gris. Le vent a franchi la limite où l’expérience remplace la prudence. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Des ombres courent sur le large entre deux trouées claires, tandis que les voiles prendraient des claques que personne ne doit minimiser. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le vent mettrait l’équipage en lutte dès la mise à l’eau ; au large, la Manche change de couleur au passage des nuages. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme, le bleu apparaît puis se range derrière de gros nuages. Le vent frappe trop fort pour confier les coques au large. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La fenêtre montre un ciel partagé, jamais tout à fait sombre. Côté vent, le vent cherche la bagarre et la barre n’a rien à y gagner. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la lumière revient par plaques sur la ligne du large. Les coques seraient livrées à un souffle bien trop violent. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les nuages avancent en laissant encore de belles ouvertures ; pour les voiles, la puissance du vent ne laisse plus la marge nécessaire. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:good:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon : l’horizon passe du clair au gris sans disparaître. Les rafales commandent désormais plus fort que le barreur. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:01",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le bleu apparaît puis se range derrière de gros nuages. La puissance du vent ne laisse plus la marge nécessaire. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:02",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La fenêtre montre un ciel partagé, jamais tout à fait sombre, tandis que les rafales commandent désormais plus fort que le barreur. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:03",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les rafales veulent arracher la barre et vider toute marge de sécurité ; au large, la lumière revient par plaques sur la ligne du large. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:04",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi, les nuages avancent en laissant encore de belles ouvertures. Les rafales dépassent ce qu’une sortie prudente peut accepter. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:05",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "L’horizon passe du clair au gris sans disparaître. Côté vent, les coups de vent arrivent avec trop de force pour sortir proprement. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:06",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel hésite entre sa veste bleue et son manteau gris. Les rafales peuvent coucher la toile avant même de laisser réagir. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:07",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Dehors, les éclaircies se faufilent entre des nuages bien présents ; pour les voiles, le souffle est devenu assez violent pour imposer le quai. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "partly-cloudy:dangerous:excellent:08",
      "weatherFamily": "partly-cloudy",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors : la côte reçoit tour à tour lumière vive et ombre douce. La toile serait ingérable au moindre coup de travers. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "overcast": [
    {
      "id": "overcast:calm:critical:01",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Un plafond gris ferme le ciel derrière la vitre. Le souffle manque et les coques avanceront avec patience. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:02",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La lumière reste plate sous une couverture bien serrée, tandis que les voiles chercheront longtemps le moindre souffle utile. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:03",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Les coques auront peu de force à tirer de l’air ; au large, le ciel bas donne au large une mine renfrognée. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:04",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi, l’horizon se dessine sous un manteau gris uniforme. L’air manque de volonté pour faire vraiment chanter les voiles. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:05",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Dehors, le ciel a tiré son rideau couleur d’étain. Côté vent, le souffle reste trop mince pour réveiller franchement les coques. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:06",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la Manche porte une lumière sourde sous les nuages. Les voiles risquent de pendre sans trouver de quoi travailler. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:07",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le gris tient tout le ciel sans laisser de vraie trouée ; pour les voiles, le vent ne pousse presque rien, pas même l’impatience. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:critical:08",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors : la fenêtre ouvre sur un horizon terne mais encore lisible. Le vent reste dans sa bannette et laisse les voiles molles. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:01",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’horizon se dessine sous un manteau gris uniforme. Le vent ne pousse presque rien, pas même l’impatience. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:02",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, le ciel a tiré son rideau couleur d’étain, tandis que le vent reste dans sa bannette et laisse les voiles molles. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:03",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le vent paresse et la toile ne trouvera guère de coffre ; au large, la Manche porte une lumière sourde sous les nuages. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:04",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon, le gris tient tout le ciel sans laisser de vraie trouée. Le vent se fait oublier et la navigation sera bien molle. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:05",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La fenêtre ouvre sur un horizon terne mais encore lisible. Côté vent, l’air bouge à peine, juste assez pour faire frémir une écoute. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:06",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, les nuages ont soudé leurs rangs au-dessus du large. L’air somnole encore au-dessus de l’eau. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:07",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le ciel reste fermé, lourd de gris mais sans autre menace ; pour les voiles, le peu d’air promet surtout une glisse très lente. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:poor:08",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme : la côte manque de lumière sous un plafond bien bas. Le souffle est si discret qu’il faudra savourer chaque risée. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:01",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le gris tient tout le ciel sans laisser de vraie trouée. Le peu d’air promet surtout une glisse très lente. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:02",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La fenêtre ouvre sur un horizon terne mais encore lisible, tandis que le souffle est si discret qu’il faudra savourer chaque risée. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:03",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Les voiles auront davantage envie de dormir que de porter ; au large, les nuages ont soudé leurs rangs au-dessus du large. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:04",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot, le ciel reste fermé, lourd de gris mais sans autre menace. Le vent reste couché et les voiles auront du mal à prendre forme. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:05",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La côte manque de lumière sous un plafond bien bas. Côté vent, le souffle manque et les coques avanceront avec patience. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:06",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le large prend une couleur d’ardoise sous le ciel couvert. Les voiles chercheront longtemps le moindre souffle utile. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:07",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise ; pour les voiles, les coques auront peu de force à tirer de l’air. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:mixed:08",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute : dehors, la journée semble avoir oublié d’allumer la lumière. L’air manque de volonté pour faire vraiment chanter les voiles. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:01",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel reste fermé, lourd de gris mais sans autre menace. Les coques auront peu de force à tirer de l’air. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:02",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La côte manque de lumière sous un plafond bien bas, tandis que l’air manque de volonté pour faire vraiment chanter les voiles. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:03",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le souffle reste trop mince pour réveiller franchement les coques ; au large, le large prend une couleur d’ardoise sous le ciel couvert. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:04",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large, aucune éclaircie ne perce vraiment la couverture grise. Les voiles risquent de pendre sans trouver de quoi travailler. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:05",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Dehors, la journée semble avoir oublié d’allumer la lumière. Côté vent, le vent ne pousse presque rien, pas même l’impatience. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:06",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, l’horizon garde une mine sombre sous les nuages tassés. Le vent reste dans sa bannette et laisse les voiles molles. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:07",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche ; pour les voiles, le vent paresse et la toile ne trouvera guère de coffre. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:good:08",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon : un plafond gris ferme le ciel derrière la vitre. Le vent se fait oublier et la navigation sera bien molle. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:01",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, aucune éclaircie ne perce vraiment la couverture grise. Le vent paresse et la toile ne trouvera guère de coffre. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:02",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Dehors, la journée semble avoir oublié d’allumer la lumière, tandis que le vent se fait oublier et la navigation sera bien molle. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:03",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "L’air bouge à peine, juste assez pour faire frémir une écoute ; au large, l’horizon garde une mine sombre sous les nuages tassés. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:04",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme, le ciel uniforme écrase doucement les couleurs de la Manche. L’air somnole encore au-dessus de l’eau. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:05",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Un plafond gris ferme le ciel derrière la vitre. Côté vent, le peu d’air promet surtout une glisse très lente. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:06",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la lumière reste plate sous une couverture bien serrée. Le souffle est si discret qu’il faudra savourer chaque risée. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:07",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le ciel bas donne au large une mine renfrognée ; pour les voiles, les voiles auront davantage envie de dormir que de porter. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:calm:excellent:08",
      "weatherFamily": "overcast",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : l’horizon se dessine sous un manteau gris uniforme. Le vent reste couché et les voiles auront du mal à prendre forme. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:01",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le ciel bas donne au large une mine renfrognée. Les voiles prendront forme, sans promettre une grande cavalcade. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:02",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "L’horizon se dessine sous un manteau gris uniforme, tandis que la toile travaillera doucement dans un air plutôt sage. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:03",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le vent se montre poli, presque trop pour les amateurs de vitesse ; au large, le ciel a tiré son rideau couleur d’étain. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:04",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon, la Manche porte une lumière sourde sous les nuages. Le vent reste léger et demandera de soigner chaque réglage. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:05",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le gris tient tout le ciel sans laisser de vraie trouée. Côté vent, les voiles respireront doucement sans tirer fort sur les écoutes. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:06",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la fenêtre ouvre sur un horizon terne mais encore lisible. L’air suffit pour avancer doucement sans réveiller toute l’écume. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:07",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Les nuages ont soudé leurs rangs au-dessus du large ; pour les voiles, le vent accompagne les coques sans chercher à les lancer. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:critical:08",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme : le ciel reste fermé, lourd de gris mais sans autre menace. Le petit air offre une navigation douce et peu physique. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:01",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la Manche porte une lumière sourde sous les nuages. Le vent accompagne les coques sans chercher à les lancer. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:02",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le gris tient tout le ciel sans laisser de vraie trouée, tandis que le petit air offre une navigation douce et peu physique. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:03",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "L’air donne juste assez de vie aux voiles pour une sortie calme ; au large, la fenêtre ouvre sur un horizon terne mais encore lisible. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:04",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot, les nuages ont soudé leurs rangs au-dessus du large. Le petit vent promet davantage de finesse que de spectacle. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:05",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le ciel reste fermé, lourd de gris mais sans autre menace. Côté vent, le vent pousse gentiment, mais la glisse restera tranquille. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:06",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la côte manque de lumière sous un plafond bien bas. Le souffle est propre mais encore un peu maigre. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:07",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le large prend une couleur d’ardoise sous le ciel couvert ; pour les voiles, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:poor:08",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute : aucune éclaircie ne perce vraiment la couverture grise. Les coques avanceront proprement dans un souffle modeste. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:01",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, les nuages ont soudé leurs rangs au-dessus du large. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:02",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le ciel reste fermé, lourd de gris mais sans autre menace, tandis que les coques avanceront proprement dans un souffle modeste. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:03",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La toile recevra un souffle régulier mais sans grand coffre ; au large, la côte manque de lumière sous un plafond bien bas. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:04",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large, le large prend une couleur d’ardoise sous le ciel couvert. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:05",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise. Côté vent, les voiles prendront forme, sans promettre une grande cavalcade. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:06",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la journée semble avoir oublié d’allumer la lumière. La toile travaillera doucement dans un air plutôt sage. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:07",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "L’horizon garde une mine sombre sous les nuages tassés ; pour les voiles, le vent se montre poli, presque trop pour les amateurs de vitesse. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:mixed:08",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon : le ciel uniforme écrase doucement les couleurs de la Manche. Le vent reste léger et demandera de soigner chaque réglage. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:01",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, le large prend une couleur d’ardoise sous le ciel couvert. Le vent se montre poli, presque trop pour les amateurs de vitesse. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:02",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise, tandis que le vent reste léger et demandera de soigner chaque réglage. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:03",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Les voiles respireront doucement sans tirer fort sur les écoutes ; au large, la journée semble avoir oublié d’allumer la lumière. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:04",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme, l’horizon garde une mine sombre sous les nuages tassés. L’air suffit pour avancer doucement sans réveiller toute l’écume. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:05",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche. Côté vent, le vent accompagne les coques sans chercher à les lancer. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:06",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un plafond gris ferme le ciel derrière la vitre. Le petit air offre une navigation douce et peu physique. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:07",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La lumière reste plate sous une couverture bien serrée ; pour les voiles, l’air donne juste assez de vie aux voiles pour une sortie calme. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:good:08",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le ciel bas donne au large une mine renfrognée. Le petit vent promet davantage de finesse que de spectacle. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:01",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, l’horizon garde une mine sombre sous les nuages tassés. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:02",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche, tandis que le petit vent promet davantage de finesse que de spectacle. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:03",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le vent pousse gentiment, mais la glisse restera tranquille ; au large, un plafond gris ferme le ciel derrière la vitre. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:04",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot, la lumière reste plate sous une couverture bien serrée. Le souffle est propre mais encore un peu maigre. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:05",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le ciel bas donne au large une mine renfrognée. Côté vent, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:06",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, l’horizon se dessine sous un manteau gris uniforme. Les coques avanceront proprement dans un souffle modeste. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:07",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Dehors, le ciel a tiré son rideau couleur d’étain ; pour les voiles, la toile recevra un souffle régulier mais sans grand coffre. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:light:excellent:08",
      "weatherFamily": "overcast",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche : la Manche porte une lumière sourde sous les nuages. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:01",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, le ciel a tiré son rideau couleur d’étain. Le souffle est établi et devrait faire filer les coques proprement. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:02",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La Manche porte une lumière sourde sous les nuages, tandis que les coques devraient accélérer sans mauvaise surprise dans les écoutes. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:03",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "L’air pousse franchement et laisse encore une belle marge ; au large, le gris tient tout le ciel sans laisser de vraie trouée. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:04",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot, la fenêtre ouvre sur un horizon terne mais encore lisible. Les coques recevront un souffle utile, régulier et agréable. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:05",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les nuages ont soudé leurs rangs au-dessus du large. Côté vent, les voiles trouveront un équilibre plaisant entre force et contrôle. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:06",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le ciel reste fermé, lourd de gris mais sans autre menace. Les voiles seront bien nourries sans arracher la barre. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:07",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La côte manque de lumière sous un plafond bien bas ; pour les voiles, la toile trouvera une poussée franche et encore maîtrisable. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:critical:08",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute : le large prend une couleur d’ardoise sous le ciel couvert. Les voiles auront de quoi porter sans te demander les gros bras. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:01",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la fenêtre ouvre sur un horizon terne mais encore lisible. La toile trouvera une poussée franche et encore maîtrisable. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:02",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Les nuages ont soudé leurs rangs au-dessus du large, tandis que les voiles auront de quoi porter sans te demander les gros bras. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:03",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La toile devrait chanter sans transformer la barre en combat ; au large, le ciel reste fermé, lourd de gris mais sans autre menace. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:04",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large, la côte manque de lumière sous un plafond bien bas. L’air est assez présent pour réveiller l’écume sans brutalité. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:05",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le large prend une couleur d’ardoise sous le ciel couvert. Côté vent, l’air a juste assez de coffre pour faire chanter la toile. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:06",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, aucune éclaircie ne perce vraiment la couverture grise. Le vent travaille avec régularité sans chercher la bagarre. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:07",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Dehors, la journée semble avoir oublié d’allumer la lumière ; pour les voiles, le vent donne du répondant tout en gardant de bonnes manières. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:poor:08",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon : l’horizon garde une mine sombre sous les nuages tassés. Le vent paraît taillé pour une glisse vive mais propre. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:01",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la côte manque de lumière sous un plafond bien bas. Le vent donne du répondant tout en gardant de bonnes manières. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:02",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le large prend une couleur d’ardoise sous le ciel couvert, tandis que le vent paraît taillé pour une glisse vive mais propre. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:03",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le vent offre de la puissance sans prendre le commandement ; au large, aucune éclaircie ne perce vraiment la couverture grise. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:04",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme, dehors, la journée semble avoir oublié d’allumer la lumière. Le vent tient sa ligne et remplit les voiles comme il faut. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:05",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’horizon garde une mine sombre sous les nuages tassés. Côté vent, le souffle est établi et devrait faire filer les coques proprement. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:06",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel uniforme écrase doucement les couleurs de la Manche. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:07",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Un plafond gris ferme le ciel derrière la vitre ; pour les voiles, l’air pousse franchement et laisse encore une belle marge. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:mixed:08",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la lumière reste plate sous une couverture bien serrée. Les coques recevront un souffle utile, régulier et agréable. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:01",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, dehors, la journée semble avoir oublié d’allumer la lumière. L’air pousse franchement et laisse encore une belle marge. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:02",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’horizon garde une mine sombre sous les nuages tassés, tandis que les coques recevront un souffle utile, régulier et agréable. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:03",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Les voiles trouveront un équilibre plaisant entre force et contrôle ; au large, le ciel uniforme écrase doucement les couleurs de la Manche. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:04",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot, un plafond gris ferme le ciel derrière la vitre. Les voiles seront bien nourries sans arracher la barre. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:05",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La lumière reste plate sous une couverture bien serrée. Côté vent, la toile trouvera une poussée franche et encore maîtrisable. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:06",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le ciel bas donne au large une mine renfrognée. Les voiles auront de quoi porter sans te demander les gros bras. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:07",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’horizon se dessine sous un manteau gris uniforme ; pour les voiles, la toile devrait chanter sans transformer la barre en combat. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:good:08",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche : dehors, le ciel a tiré son rideau couleur d’étain. L’air est assez présent pour réveiller l’écume sans brutalité. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:01",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Un plafond gris ferme le ciel derrière la vitre. La toile devrait chanter sans transformer la barre en combat. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:02",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La lumière reste plate sous une couverture bien serrée, tandis que l’air est assez présent pour réveiller l’écume sans brutalité. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:03",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "L’air a juste assez de coffre pour faire chanter la toile ; au large, le ciel bas donne au large une mine renfrognée. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:04",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot, l’horizon se dessine sous un manteau gris uniforme. Le vent travaille avec régularité sans chercher la bagarre. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:05",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Dehors, le ciel a tiré son rideau couleur d’étain. Côté vent, le vent donne du répondant tout en gardant de bonnes manières. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:06",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la Manche porte une lumière sourde sous les nuages. Le vent paraît taillé pour une glisse vive mais propre. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:07",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le gris tient tout le ciel sans laisser de vraie trouée ; pour les voiles, le vent offre de la puissance sans prendre le commandement. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:favorable:excellent:08",
      "weatherFamily": "overcast",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde : la fenêtre ouvre sur un horizon terne mais encore lisible. Le vent tient sa ligne et remplit les voiles comme il faut. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:01",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le gris tient tout le ciel sans laisser de vraie trouée. Le vent pousse franchement, alors les écoutes devront rester vivantes. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:02",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La fenêtre ouvre sur un horizon terne mais encore lisible, tandis que le vent se fait physique et ne pardonnera pas une écoute oubliée. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:03",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le souffle devient musclé, assez pour fatiguer un équipage distrait ; au large, les nuages ont soudé leurs rangs au-dessus du large. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:04",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large, le ciel reste fermé, lourd de gris mais sans autre menace. Les coques trouveront de la vitesse, au prix d’une vigilance constante. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:05",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La côte manque de lumière sous un plafond bien bas. Côté vent, les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:06",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le large prend une couleur d’ardoise sous le ciel couvert. L’air a du coffre et la barre ne tolérera pas la distraction. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:07",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise ; pour les voiles, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:critical:08",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon : dehors, la journée semble avoir oublié d’allumer la lumière. Les voiles auront du travail et le barreur davantage encore. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:01",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le ciel reste fermé, lourd de gris mais sans autre menace. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:02",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La côte manque de lumière sous un plafond bien bas, tandis que les voiles auront du travail et le barreur davantage encore. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:03",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La toile va charger et chaque virement devra rester propre ; au large, le large prend une couleur d’ardoise sous le ciel couvert. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:04",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme, aucune éclaircie ne perce vraiment la couverture grise. L’air pousse avec caractère et réclame une marge généreuse. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:05",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Dehors, la journée semble avoir oublié d’allumer la lumière. Côté vent, les voiles vont tirer fort, avec des reprises qui demandent du métier. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:06",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, l’horizon garde une mine sombre sous les nuages tassés. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:07",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche ; pour les voiles, la puissance est là, avec des coups de rein à surveiller. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:poor:08",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : un plafond gris ferme le ciel derrière la vitre. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:01",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, aucune éclaircie ne perce vraiment la couverture grise. La puissance est là, avec des coups de rein à surveiller. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:02",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Dehors, la journée semble avoir oublié d’allumer la lumière, tandis que le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:03",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le vent commence à hausser le ton autour des voiles ; au large, l’horizon garde une mine sombre sous les nuages tassés. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:04",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot, le ciel uniforme écrase doucement les couleurs de la Manche. Le vent bombe le torse et réclamera des mains bien réveillées. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:05",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Un plafond gris ferme le ciel derrière la vitre. Côté vent, le vent pousse franchement, alors les écoutes devront rester vivantes. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:06",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la lumière reste plate sous une couverture bien serrée. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:07",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le ciel bas donne au large une mine renfrognée ; pour les voiles, le souffle devient musclé, assez pour fatiguer un équipage distrait. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:mixed:08",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche : l’horizon se dessine sous un manteau gris uniforme. Les coques trouveront de la vitesse, au prix d’une vigilance constante. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:01",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel uniforme écrase doucement les couleurs de la Manche. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:02",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Un plafond gris ferme le ciel derrière la vitre, tandis que les coques trouveront de la vitesse, au prix d’une vigilance constante. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:03",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes ; au large, la lumière reste plate sous une couverture bien serrée. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:04",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot, le ciel bas donne au large une mine renfrognée. L’air a du coffre et la barre ne tolérera pas la distraction. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:05",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’horizon se dessine sous un manteau gris uniforme. Côté vent, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:06",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le ciel a tiré son rideau couleur d’étain. Les voiles auront du travail et le barreur davantage encore. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:07",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La Manche porte une lumière sourde sous les nuages ; pour les voiles, la toile va charger et chaque virement devra rester propre. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:good:08",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde : le gris tient tout le ciel sans laisser de vraie trouée. L’air pousse avec caractère et réclame une marge généreuse. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:01",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le ciel bas donne au large une mine renfrognée. La toile va charger et chaque virement devra rester propre. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:02",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’horizon se dessine sous un manteau gris uniforme, tandis que l’air pousse avec caractère et réclame une marge généreuse. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:03",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Les voiles vont tirer fort, avec des reprises qui demandent du métier ; au large, le ciel a tiré son rideau couleur d’étain. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:04",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon, la Manche porte une lumière sourde sous les nuages. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:05",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le gris tient tout le ciel sans laisser de vraie trouée. Côté vent, la puissance est là, avec des coups de rein à surveiller. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:06",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la fenêtre ouvre sur un horizon terne mais encore lisible. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:07",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Les nuages ont soudé leurs rangs au-dessus du large ; pour les voiles, le vent commence à hausser le ton autour des voiles. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:sporty:excellent:08",
      "weatherFamily": "overcast",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme : le ciel reste fermé, lourd de gris mais sans autre menace. Le vent bombe le torse et réclamera des mains bien réveillées. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "overcast:dangerous:critical:01",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, les nuages ont soudé leurs rangs au-dessus du large. Les rafales dépassent ce qu’une sortie prudente peut accepter. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:02",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le ciel reste fermé, lourd de gris mais sans autre menace, tandis que les coups de vent arrivent avec trop de force pour sortir proprement. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:03",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les rafales peuvent coucher la toile avant même de laisser réagir ; au large, la côte manque de lumière sous un plafond bien bas. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:04",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme, le large prend une couleur d’ardoise sous le ciel couvert. Le souffle est devenu assez violent pour imposer le quai. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:05",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise. Côté vent, la toile serait ingérable au moindre coup de travers. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:06",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la journée semble avoir oublié d’allumer la lumière. Les voiles recevraient une puissance brutale et difficile à contenir. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:07",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "L’horizon garde une mine sombre sous les nuages tassés ; pour les voiles, la toile serait chargée au point de rendre chaque manœuvre risquée. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:critical:08",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le ciel uniforme écrase doucement les couleurs de la Manche. Le vent a franchi la limite où l’expérience remplace la prudence. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:01",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le large prend une couleur d’ardoise sous le ciel couvert. La toile serait chargée au point de rendre chaque manœuvre risquée. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:02",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Aucune éclaircie ne perce vraiment la couverture grise, tandis que le vent a franchi la limite où l’expérience remplace la prudence. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:03",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les voiles prendraient des claques que personne ne doit minimiser ; au large, la journée semble avoir oublié d’allumer la lumière. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:04",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot, l’horizon garde une mine sombre sous les nuages tassés. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:05",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche. Côté vent, le vent frappe trop fort pour confier les coques au large. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:06",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, un plafond gris ferme le ciel derrière la vitre. Le vent cherche la bagarre et la barre n’a rien à y gagner. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:07",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La lumière reste plate sous une couverture bien serrée ; pour les voiles, les coques seraient livrées à un souffle bien trop violent. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:poor:08",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche : le ciel bas donne au large une mine renfrognée. La puissance du vent ne laisse plus la marge nécessaire. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:01",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, l’horizon garde une mine sombre sous les nuages tassés. Les coques seraient livrées à un souffle bien trop violent. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:02",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le ciel uniforme écrase doucement les couleurs de la Manche, tandis que la puissance du vent ne laisse plus la marge nécessaire. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:03",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les rafales commandent désormais plus fort que le barreur ; au large, un plafond gris ferme le ciel derrière la vitre. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:04",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot, la lumière reste plate sous une couverture bien serrée. Les rafales veulent arracher la barre et vider toute marge de sécurité. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:05",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le ciel bas donne au large une mine renfrognée. Côté vent, les rafales dépassent ce qu’une sortie prudente peut accepter. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:06",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’horizon se dessine sous un manteau gris uniforme. Les coups de vent arrivent avec trop de force pour sortir proprement. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:07",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Dehors, le ciel a tiré son rideau couleur d’étain ; pour les voiles, les rafales peuvent coucher la toile avant même de laisser réagir. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:mixed:08",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde : la Manche porte une lumière sourde sous les nuages. Le souffle est devenu assez violent pour imposer le quai. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:01",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, la lumière reste plate sous une couverture bien serrée. Les rafales peuvent coucher la toile avant même de laisser réagir. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:02",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le ciel bas donne au large une mine renfrognée, tandis que le souffle est devenu assez violent pour imposer le quai. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:03",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La toile serait ingérable au moindre coup de travers ; au large, l’horizon se dessine sous un manteau gris uniforme. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:04",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon, dehors, le ciel a tiré son rideau couleur d’étain. Les voiles recevraient une puissance brutale et difficile à contenir. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:05",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La Manche porte une lumière sourde sous les nuages. Côté vent, la toile serait chargée au point de rendre chaque manœuvre risquée. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:06",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le gris tient tout le ciel sans laisser de vraie trouée. Le vent a franchi la limite où l’expérience remplace la prudence. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:07",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La fenêtre ouvre sur un horizon terne mais encore lisible ; pour les voiles, les voiles prendraient des claques que personne ne doit minimiser. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:good:08",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme : les nuages ont soudé leurs rangs au-dessus du large. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:01",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, le ciel a tiré son rideau couleur d’étain. Les voiles prendraient des claques que personne ne doit minimiser. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:02",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La Manche porte une lumière sourde sous les nuages, tandis que le vent mettrait l’équipage en lutte dès la mise à l’eau. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:03",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vent frappe trop fort pour confier les coques au large ; au large, le gris tient tout le ciel sans laisser de vraie trouée. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:04",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Par ma vieille ancre, la fenêtre ouvre sur un horizon terne mais encore lisible. Le vent cherche la bagarre et la barre n’a rien à y gagner. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:05",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les nuages ont soudé leurs rangs au-dessus du large. Côté vent, les coques seraient livrées à un souffle bien trop violent. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:06",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel reste fermé, lourd de gris mais sans autre menace. La puissance du vent ne laisse plus la marge nécessaire. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:07",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La côte manque de lumière sous un plafond bien bas ; pour les voiles, les rafales commandent désormais plus fort que le barreur. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "overcast:dangerous:excellent:08",
      "weatherFamily": "overcast",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi : le large prend une couleur d’ardoise sous le ciel couvert. Les rafales veulent arracher la barre et vider toute marge de sécurité. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "fog": [
    {
      "id": "fog:calm:critical:01",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la brume efface une bonne partie de l’horizon. L’air somnole encore au-dessus de l’eau. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:02",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le brouillard avale le large au-delà de la vitre, tandis que le peu d’air promet surtout une glisse très lente. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:03",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le souffle est si discret qu’il faudra savourer chaque risée ; au large, la côte disparaît vite dans un voile de brume blanche. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:04",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors, l’horizon se perd dans une brume épaisse. Les voiles auront davantage envie de dormir que de porter. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:05",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le brouillard gomme les repères les uns après les autres. Côté vent, le vent reste couché et les voiles auront du mal à prendre forme. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:06",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la Manche cache ses distances derrière un rideau de brouillard. Le souffle manque et les coques avanceront avec patience. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:07",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La brume raccourcit sérieusement la vue vers le large ; pour les voiles, les voiles chercheront longtemps le moindre souffle utile. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:critical:08",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi : dehors, la brume dissout les contours avant l’horizon. Les coques auront peu de force à tirer de l’air. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:01",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’horizon se perd dans une brume épaisse. Les voiles chercheront longtemps le moindre souffle utile. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:02",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le brouillard gomme les repères les uns après les autres, tandis que les coques auront peu de force à tirer de l’air. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:03",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "L’air manque de volonté pour faire vraiment chanter les voiles ; au large, la Manche cache ses distances derrière un rideau de brouillard. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:04",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme, la brume raccourcit sérieusement la vue vers le large. Le souffle reste trop mince pour réveiller franchement les coques. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:05",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, la brume dissout les contours avant l’horizon. Côté vent, les voiles risquent de pendre sans trouver de quoi travailler. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:06",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le brouillard laisse à peine deviner la ligne du large. Le vent ne pousse presque rien, pas même l’impatience. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:07",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La fenêtre montre un brouillard blanc où les repères s’effacent ; pour les voiles, le vent reste dans sa bannette et laisse les voiles molles. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:poor:08",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon : la brume enveloppe la côte et brouille les distances. Le vent paresse et la toile ne trouvera guère de coffre. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:01",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la brume raccourcit sérieusement la vue vers le large. Le vent reste dans sa bannette et laisse les voiles molles. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:02",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, la brume dissout les contours avant l’horizon, tandis que le vent paresse et la toile ne trouvera guère de coffre. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:03",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le vent se fait oublier et la navigation sera bien molle ; au large, le brouillard laisse à peine deviner la ligne du large. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:04",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute, la fenêtre montre un brouillard blanc où les repères s’effacent. L’air bouge à peine, juste assez pour faire frémir une écoute. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:05",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La brume enveloppe la côte et brouille les distances. Côté vent, l’air somnole encore au-dessus de l’eau. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:06",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’horizon a disparu derrière une brume bien tenace. Le peu d’air promet surtout une glisse très lente. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:07",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le large se cache presque entièrement dans le brouillard ; pour les voiles, le souffle est si discret qu’il faudra savourer chaque risée. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:mixed:08",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot : les repères de côte se perdent très vite dans la brume. Les voiles auront davantage envie de dormir que de porter. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:01",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, la fenêtre montre un brouillard blanc où les repères s’effacent. Le souffle est si discret qu’il faudra savourer chaque risée. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:02",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La brume enveloppe la côte et brouille les distances, tandis que les voiles auront davantage envie de dormir que de porter. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:03",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le vent reste couché et les voiles auront du mal à prendre forme ; au large, l’horizon a disparu derrière une brume bien tenace. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:04",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon, le large se cache presque entièrement dans le brouillard. Le souffle manque et les coques avanceront avec patience. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:05",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Les repères de côte se perdent très vite dans la brume. Côté vent, les voiles chercheront longtemps le moindre souffle utile. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:06",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le brouillard blanc rend chaque distance trompeuse. Les coques auront peu de force à tirer de l’air. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:07",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le brouillard ferme la vue bien avant le large ; pour les voiles, l’air manque de volonté pour faire vraiment chanter les voiles. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:good:08",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large : la brume efface une bonne partie de l’horizon. Le souffle reste trop mince pour réveiller franchement les coques. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:01",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le large se cache presque entièrement dans le brouillard. L’air manque de volonté pour faire vraiment chanter les voiles. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:02",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Les repères de côte se perdent très vite dans la brume, tandis que le souffle reste trop mince pour réveiller franchement les coques. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:03",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Les voiles risquent de pendre sans trouver de quoi travailler ; au large, le brouillard blanc rend chaque distance trompeuse. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:04",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le brouillard ferme la vue bien avant le large. Le vent ne pousse presque rien, pas même l’impatience. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:05",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La brume efface une bonne partie de l’horizon. Côté vent, le vent reste dans sa bannette et laisse les voiles molles. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:06",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le brouillard avale le large au-delà de la vitre. Le vent paresse et la toile ne trouvera guère de coffre. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:07",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La côte disparaît vite dans un voile de brume blanche ; pour les voiles, le vent se fait oublier et la navigation sera bien molle. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:calm:excellent:08",
      "weatherFamily": "fog",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme : l’horizon se perd dans une brume épaisse. L’air bouge à peine, juste assez pour faire frémir une écoute. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:01",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la côte disparaît vite dans un voile de brume blanche. Le souffle est propre mais encore un peu maigre. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:02",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "L’horizon se perd dans une brume épaisse, tandis que les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:03",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Les coques avanceront proprement dans un souffle modeste ; au large, le brouillard gomme les repères les uns après les autres. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:04",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme, la Manche cache ses distances derrière un rideau de brouillard. La toile recevra un souffle régulier mais sans grand coffre. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:05",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La brume raccourcit sérieusement la vue vers le large. Côté vent, un petit souffle remplit la toile sans lui donner beaucoup de nerf. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:06",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la brume dissout les contours avant l’horizon. Les voiles prendront forme, sans promettre une grande cavalcade. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:07",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le brouillard laisse à peine deviner la ligne du large ; pour les voiles, la toile travaillera doucement dans un air plutôt sage. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:critical:08",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon : la fenêtre montre un brouillard blanc où les repères s’effacent. Le vent se montre poli, presque trop pour les amateurs de vitesse. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:01",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la Manche cache ses distances derrière un rideau de brouillard. La toile travaillera doucement dans un air plutôt sage. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:02",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La brume raccourcit sérieusement la vue vers le large, tandis que le vent se montre poli, presque trop pour les amateurs de vitesse. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:03",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le vent reste léger et demandera de soigner chaque réglage ; au large, la brume dissout les contours avant l’horizon. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:04",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute, le brouillard laisse à peine deviner la ligne du large. Les voiles respireront doucement sans tirer fort sur les écoutes. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:05",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La fenêtre montre un brouillard blanc où les repères s’effacent. Côté vent, l’air suffit pour avancer doucement sans réveiller toute l’écume. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:06",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la brume enveloppe la côte et brouille les distances. Le vent accompagne les coques sans chercher à les lancer. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:07",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "L’horizon a disparu derrière une brume bien tenace ; pour les voiles, le petit air offre une navigation douce et peu physique. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:poor:08",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot : le large se cache presque entièrement dans le brouillard. L’air donne juste assez de vie aux voiles pour une sortie calme. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:01",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le brouillard laisse à peine deviner la ligne du large. Le petit air offre une navigation douce et peu physique. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:02",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La fenêtre montre un brouillard blanc où les repères s’effacent, tandis que l’air donne juste assez de vie aux voiles pour une sortie calme. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:03",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le petit vent promet davantage de finesse que de spectacle ; au large, la brume enveloppe la côte et brouille les distances. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:04",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon, l’horizon a disparu derrière une brume bien tenace. Le vent pousse gentiment, mais la glisse restera tranquille. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:05",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le large se cache presque entièrement dans le brouillard. Côté vent, le souffle est propre mais encore un peu maigre. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:06",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, les repères de côte se perdent très vite dans la brume. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:07",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Dehors, le brouillard blanc rend chaque distance trompeuse ; pour les voiles, les coques avanceront proprement dans un souffle modeste. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:mixed:08",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large : le brouillard ferme la vue bien avant le large. La toile recevra un souffle régulier mais sans grand coffre. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:01",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, l’horizon a disparu derrière une brume bien tenace. Les coques avanceront proprement dans un souffle modeste. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:02",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le large se cache presque entièrement dans le brouillard, tandis que la toile recevra un souffle régulier mais sans grand coffre. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:03",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Un petit souffle remplit la toile sans lui donner beaucoup de nerf ; au large, les repères de côte se perdent très vite dans la brume. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:04",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, dehors, le brouillard blanc rend chaque distance trompeuse. Les voiles prendront forme, sans promettre une grande cavalcade. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:05",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le brouillard ferme la vue bien avant le large. Côté vent, la toile travaillera doucement dans un air plutôt sage. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:06",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la brume efface une bonne partie de l’horizon. Le vent se montre poli, presque trop pour les amateurs de vitesse. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:07",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le brouillard avale le large au-delà de la vitre ; pour les voiles, le vent reste léger et demandera de soigner chaque réglage. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:good:08",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme : la côte disparaît vite dans un voile de brume blanche. Les voiles respireront doucement sans tirer fort sur les écoutes. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:01",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, le brouillard blanc rend chaque distance trompeuse. Le vent reste léger et demandera de soigner chaque réglage. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:02",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le brouillard ferme la vue bien avant le large, tandis que les voiles respireront doucement sans tirer fort sur les écoutes. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:03",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "L’air suffit pour avancer doucement sans réveiller toute l’écume ; au large, la brume efface une bonne partie de l’horizon. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:04",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche, le brouillard avale le large au-delà de la vitre. Le vent accompagne les coques sans chercher à les lancer. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:05",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La côte disparaît vite dans un voile de brume blanche. Côté vent, le petit air offre une navigation douce et peu physique. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:06",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, l’horizon se perd dans une brume épaisse. L’air donne juste assez de vie aux voiles pour une sortie calme. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:07",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le brouillard gomme les repères les uns après les autres ; pour les voiles, le petit vent promet davantage de finesse que de spectacle. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:light:excellent:08",
      "weatherFamily": "fog",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot : la Manche cache ses distances derrière un rideau de brouillard. Le vent pousse gentiment, mais la glisse restera tranquille. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:01",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le brouillard gomme les repères les uns après les autres. Le vent travaille avec régularité sans chercher la bagarre. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:02",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La Manche cache ses distances derrière un rideau de brouillard, tandis que le vent donne du répondant tout en gardant de bonnes manières. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:03",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le vent paraît taillé pour une glisse vive mais propre ; au large, la brume raccourcit sérieusement la vue vers le large. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:04",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute, dehors, la brume dissout les contours avant l’horizon. Le vent offre de la puissance sans prendre le commandement. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:05",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le brouillard laisse à peine deviner la ligne du large. Côté vent, le vent tient sa ligne et remplit les voiles comme il faut. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:06",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la fenêtre montre un brouillard blanc où les repères s’effacent. Le souffle est établi et devrait faire filer les coques proprement. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:07",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La brume enveloppe la côte et brouille les distances ; pour les voiles, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:critical:08",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot : l’horizon a disparu derrière une brume bien tenace. L’air pousse franchement et laisse encore une belle marge. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:01",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, dehors, la brume dissout les contours avant l’horizon. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:02",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le brouillard laisse à peine deviner la ligne du large, tandis que l’air pousse franchement et laisse encore une belle marge. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:03",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Les coques recevront un souffle utile, régulier et agréable ; au large, la fenêtre montre un brouillard blanc où les repères s’effacent. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:04",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon, la brume enveloppe la côte et brouille les distances. Les voiles trouveront un équilibre plaisant entre force et contrôle. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:05",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’horizon a disparu derrière une brume bien tenace. Côté vent, les voiles seront bien nourries sans arracher la barre. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:06",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le large se cache presque entièrement dans le brouillard. La toile trouvera une poussée franche et encore maîtrisable. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:07",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Les repères de côte se perdent très vite dans la brume ; pour les voiles, les voiles auront de quoi porter sans te demander les gros bras. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:poor:08",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large : dehors, le brouillard blanc rend chaque distance trompeuse. La toile devrait chanter sans transformer la barre en combat. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:01",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la brume enveloppe la côte et brouille les distances. Les voiles auront de quoi porter sans te demander les gros bras. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:02",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’horizon a disparu derrière une brume bien tenace, tandis que la toile devrait chanter sans transformer la barre en combat. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:03",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’air est assez présent pour réveiller l’écume sans brutalité ; au large, le large se cache presque entièrement dans le brouillard. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:04",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, les repères de côte se perdent très vite dans la brume. L’air a juste assez de coffre pour faire chanter la toile. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:05",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Dehors, le brouillard blanc rend chaque distance trompeuse. Côté vent, le vent travaille avec régularité sans chercher la bagarre. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:06",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le brouillard ferme la vue bien avant le large. Le vent donne du répondant tout en gardant de bonnes manières. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:07",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La brume efface une bonne partie de l’horizon ; pour les voiles, le vent paraît taillé pour une glisse vive mais propre. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:mixed:08",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme : le brouillard avale le large au-delà de la vitre. Le vent offre de la puissance sans prendre le commandement. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:01",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, les repères de côte se perdent très vite dans la brume. Le vent paraît taillé pour une glisse vive mais propre. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:02",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Dehors, le brouillard blanc rend chaque distance trompeuse, tandis que le vent offre de la puissance sans prendre le commandement. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:03",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le vent tient sa ligne et remplit les voiles comme il faut ; au large, le brouillard ferme la vue bien avant le large. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:04",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche, la brume efface une bonne partie de l’horizon. Le souffle est établi et devrait faire filer les coques proprement. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:05",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le brouillard avale le large au-delà de la vitre. Côté vent, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:06",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la côte disparaît vite dans un voile de brume blanche. L’air pousse franchement et laisse encore une belle marge. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:07",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’horizon se perd dans une brume épaisse ; pour les voiles, les coques recevront un souffle utile, régulier et agréable. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:good:08",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot : le brouillard gomme les repères les uns après les autres. Les voiles trouveront un équilibre plaisant entre force et contrôle. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:01",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la brume efface une bonne partie de l’horizon. Les coques recevront un souffle utile, régulier et agréable. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:02",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le brouillard avale le large au-delà de la vitre, tandis que les voiles trouveront un équilibre plaisant entre force et contrôle. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:03",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Les voiles seront bien nourries sans arracher la barre ; au large, la côte disparaît vite dans un voile de brume blanche. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:04",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde, l’horizon se perd dans une brume épaisse. La toile trouvera une poussée franche et encore maîtrisable. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:05",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le brouillard gomme les repères les uns après les autres. Côté vent, les voiles auront de quoi porter sans te demander les gros bras. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:06",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la Manche cache ses distances derrière un rideau de brouillard. La toile devrait chanter sans transformer la barre en combat. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:07",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La brume raccourcit sérieusement la vue vers le large ; pour les voiles, l’air est assez présent pour réveiller l’écume sans brutalité. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:favorable:excellent:08",
      "weatherFamily": "fog",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot : dehors, la brume dissout les contours avant l’horizon. L’air a juste assez de coffre pour faire chanter la toile. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:01",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la brume raccourcit sérieusement la vue vers le large. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:02",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, la brume dissout les contours avant l’horizon, tandis que la puissance est là, avec des coups de rein à surveiller. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:03",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le vent donne une vraie navigation sportive sans offrir beaucoup de repos ; au large, le brouillard laisse à peine deviner la ligne du large. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:04",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon, la fenêtre montre un brouillard blanc où les repères s’effacent. Le vent commence à hausser le ton autour des voiles. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:05",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La brume enveloppe la côte et brouille les distances. Côté vent, le vent bombe le torse et réclamera des mains bien réveillées. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:06",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’horizon a disparu derrière une brume bien tenace. Le vent pousse franchement, alors les écoutes devront rester vivantes. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:07",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le large se cache presque entièrement dans le brouillard ; pour les voiles, le vent se fait physique et ne pardonnera pas une écoute oubliée. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:critical:08",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large : les repères de côte se perdent très vite dans la brume. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:01",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la fenêtre montre un brouillard blanc où les repères s’effacent. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:02",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La brume enveloppe la côte et brouille les distances, tandis que le souffle devient musclé, assez pour fatiguer un équipage distrait. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:03",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les coques trouveront de la vitesse, au prix d’une vigilance constante ; au large, l’horizon a disparu derrière une brume bien tenace. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:04",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, le large se cache presque entièrement dans le brouillard. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:05",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les repères de côte se perdent très vite dans la brume. Côté vent, l’air a du coffre et la barre ne tolérera pas la distraction. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:06",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le brouillard blanc rend chaque distance trompeuse. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:07",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le brouillard ferme la vue bien avant le large ; pour les voiles, les voiles auront du travail et le barreur davantage encore. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:poor:08",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme : la brume efface une bonne partie de l’horizon. La toile va charger et chaque virement devra rester propre. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:01",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le large se cache presque entièrement dans le brouillard. Les voiles auront du travail et le barreur davantage encore. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:02",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les repères de côte se perdent très vite dans la brume, tandis que la toile va charger et chaque virement devra rester propre. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:03",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "L’air pousse avec caractère et réclame une marge généreuse ; au large, le brouillard blanc rend chaque distance trompeuse. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:04",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche, le brouillard ferme la vue bien avant le large. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:05",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La brume efface une bonne partie de l’horizon. Côté vent, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:06",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le brouillard avale le large au-delà de la vitre. La puissance est là, avec des coups de rein à surveiller. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:07",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La côte disparaît vite dans un voile de brume blanche ; pour les voiles, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:mixed:08",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot : l’horizon se perd dans une brume épaisse. Le vent commence à hausser le ton autour des voiles. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:01",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, le brouillard ferme la vue bien avant le large. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:02",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La brume efface une bonne partie de l’horizon, tandis que le vent commence à hausser le ton autour des voiles. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:03",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le vent bombe le torse et réclamera des mains bien réveillées ; au large, le brouillard avale le large au-delà de la vitre. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:04",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde, la côte disparaît vite dans un voile de brume blanche. Le vent pousse franchement, alors les écoutes devront rester vivantes. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:05",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’horizon se perd dans une brume épaisse. Côté vent, le vent se fait physique et ne pardonnera pas une écoute oubliée. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:06",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le brouillard gomme les repères les uns après les autres. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:07",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La Manche cache ses distances derrière un rideau de brouillard ; pour les voiles, les coques trouveront de la vitesse, au prix d’une vigilance constante. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:good:08",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot : la brume raccourcit sérieusement la vue vers le large. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:01",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la côte disparaît vite dans un voile de brume blanche. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:02",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’horizon se perd dans une brume épaisse, tandis que les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:03",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "L’air a du coffre et la barre ne tolérera pas la distraction ; au large, le brouillard gomme les repères les uns après les autres. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:04",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme, la Manche cache ses distances derrière un rideau de brouillard. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:05",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La brume raccourcit sérieusement la vue vers le large. Côté vent, les voiles auront du travail et le barreur davantage encore. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:06",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la brume dissout les contours avant l’horizon. La toile va charger et chaque virement devra rester propre. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:07",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le brouillard laisse à peine deviner la ligne du large ; pour les voiles, l’air pousse avec caractère et réclame une marge généreuse. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:sporty:excellent:08",
      "weatherFamily": "fog",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon : la fenêtre montre un brouillard blanc où les repères s’effacent. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "fog:dangerous:critical:01",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le brouillard laisse à peine deviner la ligne du large. Le vent cherche la bagarre et la barre n’a rien à y gagner. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:02",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La fenêtre montre un brouillard blanc où les repères s’effacent, tandis que les coques seraient livrées à un souffle bien trop violent. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:03",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La puissance du vent ne laisse plus la marge nécessaire ; au large, la brume enveloppe la côte et brouille les distances. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:04",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, l’horizon a disparu derrière une brume bien tenace. Les rafales commandent désormais plus fort que le barreur. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:05",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le large se cache presque entièrement dans le brouillard. Côté vent, les rafales veulent arracher la barre et vider toute marge de sécurité. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:06",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les repères de côte se perdent très vite dans la brume. Les rafales dépassent ce qu’une sortie prudente peut accepter. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:07",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Dehors, le brouillard blanc rend chaque distance trompeuse ; pour les voiles, les coups de vent arrivent avec trop de force pour sortir proprement. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:critical:08",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme : le brouillard ferme la vue bien avant le large. Les rafales peuvent coucher la toile avant même de laisser réagir. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:01",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’horizon a disparu derrière une brume bien tenace. Les coups de vent arrivent avec trop de force pour sortir proprement. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:02",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le large se cache presque entièrement dans le brouillard, tandis que les rafales peuvent coucher la toile avant même de laisser réagir. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:03",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le souffle est devenu assez violent pour imposer le quai ; au large, les repères de côte se perdent très vite dans la brume. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:04",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche, dehors, le brouillard blanc rend chaque distance trompeuse. La toile serait ingérable au moindre coup de travers. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:05",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le brouillard ferme la vue bien avant le large. Côté vent, les voiles recevraient une puissance brutale et difficile à contenir. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:06",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la brume efface une bonne partie de l’horizon. La toile serait chargée au point de rendre chaque manœuvre risquée. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:07",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le brouillard avale le large au-delà de la vitre ; pour les voiles, le vent a franchi la limite où l’expérience remplace la prudence. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:poor:08",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot : la côte disparaît vite dans un voile de brume blanche. Les voiles prendraient des claques que personne ne doit minimiser. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:01",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, le brouillard blanc rend chaque distance trompeuse. Le vent a franchi la limite où l’expérience remplace la prudence. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:02",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le brouillard ferme la vue bien avant le large, tandis que les voiles prendraient des claques que personne ne doit minimiser. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:03",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le vent mettrait l’équipage en lutte dès la mise à l’eau ; au large, la brume efface une bonne partie de l’horizon. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:04",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde, le brouillard avale le large au-delà de la vitre. Le vent frappe trop fort pour confier les coques au large. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:05",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La côte disparaît vite dans un voile de brume blanche. Côté vent, le vent cherche la bagarre et la barre n’a rien à y gagner. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:06",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’horizon se perd dans une brume épaisse. Les coques seraient livrées à un souffle bien trop violent. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:07",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le brouillard gomme les repères les uns après les autres ; pour les voiles, la puissance du vent ne laisse plus la marge nécessaire. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:mixed:08",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot : la Manche cache ses distances derrière un rideau de brouillard. Les rafales commandent désormais plus fort que le barreur. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:01",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, le brouillard avale le large au-delà de la vitre. La puissance du vent ne laisse plus la marge nécessaire. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:02",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La côte disparaît vite dans un voile de brume blanche, tandis que les rafales commandent désormais plus fort que le barreur. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:03",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les rafales veulent arracher la barre et vider toute marge de sécurité ; au large, l’horizon se perd dans une brume épaisse. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:04",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme, le brouillard gomme les repères les uns après les autres. Les rafales dépassent ce qu’une sortie prudente peut accepter. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:05",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La Manche cache ses distances derrière un rideau de brouillard. Côté vent, les coups de vent arrivent avec trop de force pour sortir proprement. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:06",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la brume raccourcit sérieusement la vue vers le large. Les rafales peuvent coucher la toile avant même de laisser réagir. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:07",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Dehors, la brume dissout les contours avant l’horizon ; pour les voiles, le souffle est devenu assez violent pour imposer le quai. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:good:08",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon : le brouillard laisse à peine deviner la ligne du large. La toile serait ingérable au moindre coup de travers. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:01",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, le brouillard gomme les repères les uns après les autres. Le souffle est devenu assez violent pour imposer le quai. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:02",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La Manche cache ses distances derrière un rideau de brouillard, tandis que la toile serait ingérable au moindre coup de travers. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:03",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les voiles recevraient une puissance brutale et difficile à contenir ; au large, la brume raccourcit sérieusement la vue vers le large. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:04",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi, dehors, la brume dissout les contours avant l’horizon. La toile serait chargée au point de rendre chaque manœuvre risquée. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:05",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le brouillard laisse à peine deviner la ligne du large. Côté vent, le vent a franchi la limite où l’expérience remplace la prudence. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:06",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la fenêtre montre un brouillard blanc où les repères s’effacent. Les voiles prendraient des claques que personne ne doit minimiser. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:07",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La brume enveloppe la côte et brouille les distances ; pour les voiles, le vent mettrait l’équipage en lutte dès la mise à l’eau. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "fog:dangerous:excellent:08",
      "weatherFamily": "fog",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors : l’horizon a disparu derrière une brume bien tenace. Le vent frappe trop fort pour confier les coques au large. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "drizzle": [
    {
      "id": "drizzle:calm:critical:01",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la bruine perle finement sur toute la vitre. Le vent ne pousse presque rien, pas même l’impatience. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:02",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Un crachin léger voile la lumière du large, tandis que le vent reste dans sa bannette et laisse les voiles molles. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:03",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vent paresse et la toile ne trouvera guère de coffre ; au large, de petites gouttes ternissent doucement l’horizon. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:04",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi, la bruine mouille le décor sans fermer complètement la vue. Le vent se fait oublier et la navigation sera bien molle. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:05",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Un fin crachin accroche la lumière au-dessus de la Manche. Côté vent, l’air bouge à peine, juste assez pour faire frémir une écoute. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:06",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la vitre se couvre de perles sous une humidité tenace. L’air somnole encore au-dessus de l’eau. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:07",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Dehors, la bruine grise les couleurs sans avaler l’horizon ; pour les voiles, le peu d’air promet surtout une glisse très lente. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:critical:08",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Par ma vieille ancre : un voile humide flotte entre la côte et le large. Le souffle est si discret qu’il faudra savourer chaque risée. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:01",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la bruine mouille le décor sans fermer complètement la vue. Le peu d’air promet surtout une glisse très lente. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:02",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Un fin crachin accroche la lumière au-dessus de la Manche, tandis que le souffle est si discret qu’il faudra savourer chaque risée. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:03",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les voiles auront davantage envie de dormir que de porter ; au large, la vitre se couvre de perles sous une humidité tenace. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:04",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon, dehors, la bruine grise les couleurs sans avaler l’horizon. Le vent reste couché et les voiles auront du mal à prendre forme. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:05",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Un voile humide flotte entre la côte et le large. Côté vent, le souffle manque et les coques avanceront avec patience. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:06",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le crachin dessine de fines traces sur la fenêtre. Les voiles chercheront longtemps le moindre souffle utile. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:07",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La bruine s’installe doucement sur un horizon encore visible ; pour les voiles, les coques auront peu de force à tirer de l’air. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:poor:08",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme : de petites gouttes brouillent par moments la ligne du large. L’air manque de volonté pour faire vraiment chanter les voiles. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:01",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, la bruine grise les couleurs sans avaler l’horizon. Les coques auront peu de force à tirer de l’air. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:02",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Un voile humide flotte entre la côte et le large, tandis que l’air manque de volonté pour faire vraiment chanter les voiles. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:03",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le souffle reste trop mince pour réveiller franchement les coques ; au large, le crachin dessine de fines traces sur la fenêtre. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:04",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot, la bruine s’installe doucement sur un horizon encore visible. Les voiles risquent de pendre sans trouver de quoi travailler. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:05",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "De petites gouttes brouillent par moments la ligne du large. Côté vent, le vent ne pousse presque rien, pas même l’impatience. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:06",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’humidité colle au paysage sous un crachin discret. Le vent reste dans sa bannette et laisse les voiles molles. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:07",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide ; pour les voiles, le vent paresse et la toile ne trouvera guère de coffre. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:mixed:08",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute : la bruine adoucit tous les contours de la Manche. Le vent se fait oublier et la navigation sera bien molle. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:01",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, la bruine s’installe doucement sur un horizon encore visible. Le vent paresse et la toile ne trouvera guère de coffre. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:02",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "De petites gouttes brouillent par moments la ligne du large, tandis que le vent se fait oublier et la navigation sera bien molle. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:03",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "L’air bouge à peine, juste assez pour faire frémir une écoute ; au large, l’humidité colle au paysage sous un crachin discret. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:04",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large, la fenêtre brille de gouttelettes devant un ciel humide. L’air somnole encore au-dessus de l’eau. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:05",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La bruine adoucit tous les contours de la Manche. Côté vent, le peu d’air promet surtout une glisse très lente. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:06",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un crachin serré mais fin accompagne la vue vers le large. Le souffle est si discret qu’il faudra savourer chaque risée. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:07",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon ; pour les voiles, les voiles auront davantage envie de dormir que de porter. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:good:08",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon : la bruine perle finement sur toute la vitre. Le vent reste couché et les voiles auront du mal à prendre forme. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:01",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la fenêtre brille de gouttelettes devant un ciel humide. Les voiles auront davantage envie de dormir que de porter. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:02",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La bruine adoucit tous les contours de la Manche, tandis que le vent reste couché et les voiles auront du mal à prendre forme. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:03",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le souffle manque et les coques avanceront avec patience ; au large, un crachin serré mais fin accompagne la vue vers le large. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:04",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme, dehors, l’air humide laisse un voile léger sur l’horizon. Les voiles chercheront longtemps le moindre souffle utile. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:05",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La bruine perle finement sur toute la vitre. Côté vent, les coques auront peu de force à tirer de l’air. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:06",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, un crachin léger voile la lumière du large. L’air manque de volonté pour faire vraiment chanter les voiles. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:07",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "De petites gouttes ternissent doucement l’horizon ; pour les voiles, le souffle reste trop mince pour réveiller franchement les coques. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:calm:excellent:08",
      "weatherFamily": "drizzle",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la bruine mouille le décor sans fermer complètement la vue. Les voiles risquent de pendre sans trouver de quoi travailler. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:01",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, de petites gouttes ternissent doucement l’horizon. Le vent accompagne les coques sans chercher à les lancer. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:02",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La bruine mouille le décor sans fermer complètement la vue, tandis que le petit air offre une navigation douce et peu physique. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:03",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "L’air donne juste assez de vie aux voiles pour une sortie calme ; au large, un fin crachin accroche la lumière au-dessus de la Manche. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:04",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon, la vitre se couvre de perles sous une humidité tenace. Le petit vent promet davantage de finesse que de spectacle. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:05",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Dehors, la bruine grise les couleurs sans avaler l’horizon. Côté vent, le vent pousse gentiment, mais la glisse restera tranquille. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:06",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, un voile humide flotte entre la côte et le large. Le souffle est propre mais encore un peu maigre. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:07",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le crachin dessine de fines traces sur la fenêtre ; pour les voiles, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:critical:08",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme : la bruine s’installe doucement sur un horizon encore visible. Les coques avanceront proprement dans un souffle modeste. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:01",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la vitre se couvre de perles sous une humidité tenace. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:02",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Dehors, la bruine grise les couleurs sans avaler l’horizon, tandis que les coques avanceront proprement dans un souffle modeste. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:03",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La toile recevra un souffle régulier mais sans grand coffre ; au large, un voile humide flotte entre la côte et le large. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:04",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot, le crachin dessine de fines traces sur la fenêtre. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:05",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La bruine s’installe doucement sur un horizon encore visible. Côté vent, les voiles prendront forme, sans promettre une grande cavalcade. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:06",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, de petites gouttes brouillent par moments la ligne du large. La toile travaillera doucement dans un air plutôt sage. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:07",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "L’humidité colle au paysage sous un crachin discret ; pour les voiles, le vent se montre poli, presque trop pour les amateurs de vitesse. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:poor:08",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute : la fenêtre brille de gouttelettes devant un ciel humide. Le vent reste léger et demandera de soigner chaque réglage. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:01",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le crachin dessine de fines traces sur la fenêtre. Le vent se montre poli, presque trop pour les amateurs de vitesse. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:02",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La bruine s’installe doucement sur un horizon encore visible, tandis que le vent reste léger et demandera de soigner chaque réglage. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:03",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Les voiles respireront doucement sans tirer fort sur les écoutes ; au large, de petites gouttes brouillent par moments la ligne du large. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:04",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large, l’humidité colle au paysage sous un crachin discret. L’air suffit pour avancer doucement sans réveiller toute l’écume. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:05",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide. Côté vent, le vent accompagne les coques sans chercher à les lancer. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:06",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la bruine adoucit tous les contours de la Manche. Le petit air offre une navigation douce et peu physique. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:07",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Un crachin serré mais fin accompagne la vue vers le large ; pour les voiles, l’air donne juste assez de vie aux voiles pour une sortie calme. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:mixed:08",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon : dehors, l’air humide laisse un voile léger sur l’horizon. Le petit vent promet davantage de finesse que de spectacle. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:01",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, l’humidité colle au paysage sous un crachin discret. L’air donne juste assez de vie aux voiles pour une sortie calme. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:02",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide, tandis que le petit vent promet davantage de finesse que de spectacle. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:03",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le vent pousse gentiment, mais la glisse restera tranquille ; au large, la bruine adoucit tous les contours de la Manche. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:04",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme, un crachin serré mais fin accompagne la vue vers le large. Le souffle est propre mais encore un peu maigre. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:05",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon. Côté vent, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:06",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la bruine perle finement sur toute la vitre. Les coques avanceront proprement dans un souffle modeste. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:07",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Un crachin léger voile la lumière du large ; pour les voiles, la toile recevra un souffle régulier mais sans grand coffre. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:good:08",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : de petites gouttes ternissent doucement l’horizon. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:01",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, un crachin serré mais fin accompagne la vue vers le large. La toile recevra un souffle régulier mais sans grand coffre. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:02",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon, tandis que un petit souffle remplit la toile sans lui donner beaucoup de nerf. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:03",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les voiles prendront forme, sans promettre une grande cavalcade ; au large, la bruine perle finement sur toute la vitre. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:04",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot, un crachin léger voile la lumière du large. La toile travaillera doucement dans un air plutôt sage. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:05",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "De petites gouttes ternissent doucement l’horizon. Côté vent, le vent se montre poli, presque trop pour les amateurs de vitesse. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:06",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la bruine mouille le décor sans fermer complètement la vue. Le vent reste léger et demandera de soigner chaque réglage. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:07",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Un fin crachin accroche la lumière au-dessus de la Manche ; pour les voiles, les voiles respireront doucement sans tirer fort sur les écoutes. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:light:excellent:08",
      "weatherFamily": "drizzle",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche : la vitre se couvre de perles sous une humidité tenace. L’air suffit pour avancer doucement sans réveiller toute l’écume. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:01",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, un fin crachin accroche la lumière au-dessus de la Manche. La toile trouvera une poussée franche et encore maîtrisable. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:02",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La vitre se couvre de perles sous une humidité tenace, tandis que les voiles auront de quoi porter sans te demander les gros bras. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:03",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La toile devrait chanter sans transformer la barre en combat ; au large, la bruine grise les couleurs sans avaler l’horizon. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:04",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot, un voile humide flotte entre la côte et le large. L’air est assez présent pour réveiller l’écume sans brutalité. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:05",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le crachin dessine de fines traces sur la fenêtre. Côté vent, l’air a juste assez de coffre pour faire chanter la toile. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:06",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la bruine s’installe doucement sur un horizon encore visible. Le vent travaille avec régularité sans chercher la bagarre. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:07",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "De petites gouttes brouillent par moments la ligne du large ; pour les voiles, le vent donne du répondant tout en gardant de bonnes manières. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:critical:08",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute : l’humidité colle au paysage sous un crachin discret. Le vent paraît taillé pour une glisse vive mais propre. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:01",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, un voile humide flotte entre la côte et le large. Le vent donne du répondant tout en gardant de bonnes manières. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:02",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le crachin dessine de fines traces sur la fenêtre, tandis que le vent paraît taillé pour une glisse vive mais propre. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:03",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le vent offre de la puissance sans prendre le commandement ; au large, la bruine s’installe doucement sur un horizon encore visible. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:04",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large, de petites gouttes brouillent par moments la ligne du large. Le vent tient sa ligne et remplit les voiles comme il faut. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:05",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’humidité colle au paysage sous un crachin discret. Côté vent, le souffle est établi et devrait faire filer les coques proprement. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:06",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la fenêtre brille de gouttelettes devant un ciel humide. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:07",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La bruine adoucit tous les contours de la Manche ; pour les voiles, l’air pousse franchement et laisse encore une belle marge. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:poor:08",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon : un crachin serré mais fin accompagne la vue vers le large. Les coques recevront un souffle utile, régulier et agréable. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:01",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, de petites gouttes brouillent par moments la ligne du large. L’air pousse franchement et laisse encore une belle marge. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:02",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’humidité colle au paysage sous un crachin discret, tandis que les coques recevront un souffle utile, régulier et agréable. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:03",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Les voiles trouveront un équilibre plaisant entre force et contrôle ; au large, la fenêtre brille de gouttelettes devant un ciel humide. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:04",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme, la bruine adoucit tous les contours de la Manche. Les voiles seront bien nourries sans arracher la barre. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:05",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Un crachin serré mais fin accompagne la vue vers le large. Côté vent, la toile trouvera une poussée franche et encore maîtrisable. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:06",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’air humide laisse un voile léger sur l’horizon. Les voiles auront de quoi porter sans te demander les gros bras. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:07",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La bruine perle finement sur toute la vitre ; pour les voiles, la toile devrait chanter sans transformer la barre en combat. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:mixed:08",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : un crachin léger voile la lumière du large. L’air est assez présent pour réveiller l’écume sans brutalité. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:01",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, la bruine adoucit tous les contours de la Manche. La toile devrait chanter sans transformer la barre en combat. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:02",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Un crachin serré mais fin accompagne la vue vers le large, tandis que l’air est assez présent pour réveiller l’écume sans brutalité. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:03",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’air a juste assez de coffre pour faire chanter la toile ; au large, l’air humide laisse un voile léger sur l’horizon. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:04",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot, la bruine perle finement sur toute la vitre. Le vent travaille avec régularité sans chercher la bagarre. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:05",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Un crachin léger voile la lumière du large. Côté vent, le vent donne du répondant tout en gardant de bonnes manières. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:06",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, de petites gouttes ternissent doucement l’horizon. Le vent paraît taillé pour une glisse vive mais propre. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:07",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La bruine mouille le décor sans fermer complètement la vue ; pour les voiles, le vent offre de la puissance sans prendre le commandement. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:good:08",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche : un fin crachin accroche la lumière au-dessus de la Manche. Le vent tient sa ligne et remplit les voiles comme il faut. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:01",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la bruine perle finement sur toute la vitre. Le vent offre de la puissance sans prendre le commandement. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:02",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Un crachin léger voile la lumière du large, tandis que le vent tient sa ligne et remplit les voiles comme il faut. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:03",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le souffle est établi et devrait faire filer les coques proprement ; au large, de petites gouttes ternissent doucement l’horizon. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:04",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot, la bruine mouille le décor sans fermer complètement la vue. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:05",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Un fin crachin accroche la lumière au-dessus de la Manche. Côté vent, l’air pousse franchement et laisse encore une belle marge. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:06",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la vitre se couvre de perles sous une humidité tenace. Les coques recevront un souffle utile, régulier et agréable. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:07",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Dehors, la bruine grise les couleurs sans avaler l’horizon ; pour les voiles, les voiles trouveront un équilibre plaisant entre force et contrôle. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:favorable:excellent:08",
      "weatherFamily": "drizzle",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde : un voile humide flotte entre la côte et le large. Les voiles seront bien nourries sans arracher la barre. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:01",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, la bruine grise les couleurs sans avaler l’horizon. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:02",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Un voile humide flotte entre la côte et le large, tandis que les voiles auront du travail et le barreur davantage encore. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:03",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La toile va charger et chaque virement devra rester propre ; au large, le crachin dessine de fines traces sur la fenêtre. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:04",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large, la bruine s’installe doucement sur un horizon encore visible. L’air pousse avec caractère et réclame une marge généreuse. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:05",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "De petites gouttes brouillent par moments la ligne du large. Côté vent, les voiles vont tirer fort, avec des reprises qui demandent du métier. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:06",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’humidité colle au paysage sous un crachin discret. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:07",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide ; pour les voiles, la puissance est là, avec des coups de rein à surveiller. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:critical:08",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon : la bruine adoucit tous les contours de la Manche. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:01",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la bruine s’installe doucement sur un horizon encore visible. La puissance est là, avec des coups de rein à surveiller. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:02",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "De petites gouttes brouillent par moments la ligne du large, tandis que le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:03",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le vent commence à hausser le ton autour des voiles ; au large, l’humidité colle au paysage sous un crachin discret. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:04",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme, la fenêtre brille de gouttelettes devant un ciel humide. Le vent bombe le torse et réclamera des mains bien réveillées. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:05",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La bruine adoucit tous les contours de la Manche. Côté vent, le vent pousse franchement, alors les écoutes devront rester vivantes. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:06",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, un crachin serré mais fin accompagne la vue vers le large. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:07",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon ; pour les voiles, le souffle devient musclé, assez pour fatiguer un équipage distrait. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:poor:08",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la bruine perle finement sur toute la vitre. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:01",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre brille de gouttelettes devant un ciel humide. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:02",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La bruine adoucit tous les contours de la Manche, tandis que les coques trouveront de la vitesse, au prix d’une vigilance constante. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:03",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes ; au large, un crachin serré mais fin accompagne la vue vers le large. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:04",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot, dehors, l’air humide laisse un voile léger sur l’horizon. L’air a du coffre et la barre ne tolérera pas la distraction. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:05",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La bruine perle finement sur toute la vitre. Côté vent, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:06",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, un crachin léger voile la lumière du large. Les voiles auront du travail et le barreur davantage encore. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:07",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "De petites gouttes ternissent doucement l’horizon ; pour les voiles, la toile va charger et chaque virement devra rester propre. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:mixed:08",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche : la bruine mouille le décor sans fermer complètement la vue. L’air pousse avec caractère et réclame une marge généreuse. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:01",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, dehors, l’air humide laisse un voile léger sur l’horizon. La toile va charger et chaque virement devra rester propre. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:02",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La bruine perle finement sur toute la vitre, tandis que l’air pousse avec caractère et réclame une marge généreuse. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:03",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les voiles vont tirer fort, avec des reprises qui demandent du métier ; au large, un crachin léger voile la lumière du large. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:04",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot, de petites gouttes ternissent doucement l’horizon. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:05",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La bruine mouille le décor sans fermer complètement la vue. Côté vent, la puissance est là, avec des coups de rein à surveiller. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:06",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un fin crachin accroche la lumière au-dessus de la Manche. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:07",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La vitre se couvre de perles sous une humidité tenace ; pour les voiles, le vent commence à hausser le ton autour des voiles. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:good:08",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde : dehors, la bruine grise les couleurs sans avaler l’horizon. Le vent bombe le torse et réclamera des mains bien réveillées. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:01",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, de petites gouttes ternissent doucement l’horizon. Le vent commence à hausser le ton autour des voiles. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:02",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La bruine mouille le décor sans fermer complètement la vue, tandis que le vent bombe le torse et réclamera des mains bien réveillées. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:03",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le vent pousse franchement, alors les écoutes devront rester vivantes ; au large, un fin crachin accroche la lumière au-dessus de la Manche. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:04",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon, la vitre se couvre de perles sous une humidité tenace. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:05",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Dehors, la bruine grise les couleurs sans avaler l’horizon. Côté vent, le souffle devient musclé, assez pour fatiguer un équipage distrait. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:06",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, un voile humide flotte entre la côte et le large. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:07",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le crachin dessine de fines traces sur la fenêtre ; pour les voiles, les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:sporty:excellent:08",
      "weatherFamily": "drizzle",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme : la bruine s’installe doucement sur un horizon encore visible. L’air a du coffre et la barre ne tolérera pas la distraction. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "drizzle:dangerous:critical:01",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le crachin dessine de fines traces sur la fenêtre. La toile serait chargée au point de rendre chaque manœuvre risquée. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:02",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La bruine s’installe doucement sur un horizon encore visible, tandis que le vent a franchi la limite où l’expérience remplace la prudence. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:03",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les voiles prendraient des claques que personne ne doit minimiser ; au large, de petites gouttes brouillent par moments la ligne du large. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:04",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme, l’humidité colle au paysage sous un crachin discret. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:05",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide. Côté vent, le vent frappe trop fort pour confier les coques au large. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:06",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la bruine adoucit tous les contours de la Manche. Le vent cherche la bagarre et la barre n’a rien à y gagner. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:07",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Un crachin serré mais fin accompagne la vue vers le large ; pour les voiles, les coques seraient livrées à un souffle bien trop violent. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:critical:08",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : dehors, l’air humide laisse un voile léger sur l’horizon. La puissance du vent ne laisse plus la marge nécessaire. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:01",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’humidité colle au paysage sous un crachin discret. Les coques seraient livrées à un souffle bien trop violent. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:02",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La fenêtre brille de gouttelettes devant un ciel humide, tandis que la puissance du vent ne laisse plus la marge nécessaire. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:03",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les rafales commandent désormais plus fort que le barreur ; au large, la bruine adoucit tous les contours de la Manche. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:04",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot, un crachin serré mais fin accompagne la vue vers le large. Les rafales veulent arracher la barre et vider toute marge de sécurité. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:05",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon. Côté vent, les rafales dépassent ce qu’une sortie prudente peut accepter. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:06",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la bruine perle finement sur toute la vitre. Les coups de vent arrivent avec trop de force pour sortir proprement. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:07",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Un crachin léger voile la lumière du large ; pour les voiles, les rafales peuvent coucher la toile avant même de laisser réagir. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:poor:08",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche : de petites gouttes ternissent doucement l’horizon. Le souffle est devenu assez violent pour imposer le quai. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:01",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, un crachin serré mais fin accompagne la vue vers le large. Les rafales peuvent coucher la toile avant même de laisser réagir. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:02",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Dehors, l’air humide laisse un voile léger sur l’horizon, tandis que le souffle est devenu assez violent pour imposer le quai. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:03",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La toile serait ingérable au moindre coup de travers ; au large, la bruine perle finement sur toute la vitre. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:04",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot, un crachin léger voile la lumière du large. Les voiles recevraient une puissance brutale et difficile à contenir. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:05",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "De petites gouttes ternissent doucement l’horizon. Côté vent, la toile serait chargée au point de rendre chaque manœuvre risquée. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:06",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la bruine mouille le décor sans fermer complètement la vue. Le vent a franchi la limite où l’expérience remplace la prudence. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:07",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Un fin crachin accroche la lumière au-dessus de la Manche ; pour les voiles, les voiles prendraient des claques que personne ne doit minimiser. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:mixed:08",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde : la vitre se couvre de perles sous une humidité tenace. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:01",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, un crachin léger voile la lumière du large. Les voiles prendraient des claques que personne ne doit minimiser. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:02",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "De petites gouttes ternissent doucement l’horizon, tandis que le vent mettrait l’équipage en lutte dès la mise à l’eau. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:03",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le vent frappe trop fort pour confier les coques au large ; au large, la bruine mouille le décor sans fermer complètement la vue. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:04",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon, un fin crachin accroche la lumière au-dessus de la Manche. Le vent cherche la bagarre et la barre n’a rien à y gagner. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:05",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La vitre se couvre de perles sous une humidité tenace. Côté vent, les coques seraient livrées à un souffle bien trop violent. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:06",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la bruine grise les couleurs sans avaler l’horizon. La puissance du vent ne laisse plus la marge nécessaire. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:07",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Un voile humide flotte entre la côte et le large ; pour les voiles, les rafales commandent désormais plus fort que le barreur. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:good:08",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme : le crachin dessine de fines traces sur la fenêtre. Les rafales veulent arracher la barre et vider toute marge de sécurité. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:01",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, un fin crachin accroche la lumière au-dessus de la Manche. Les rafales commandent désormais plus fort que le barreur. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:02",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La vitre se couvre de perles sous une humidité tenace, tandis que les rafales veulent arracher la barre et vider toute marge de sécurité. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:03",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les rafales dépassent ce qu’une sortie prudente peut accepter ; au large, la bruine grise les couleurs sans avaler l’horizon. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:04",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors, un voile humide flotte entre la côte et le large. Les coups de vent arrivent avec trop de force pour sortir proprement. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:05",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le crachin dessine de fines traces sur la fenêtre. Côté vent, les rafales peuvent coucher la toile avant même de laisser réagir. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:06",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la bruine s’installe doucement sur un horizon encore visible. Le souffle est devenu assez violent pour imposer le quai. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:07",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "De petites gouttes brouillent par moments la ligne du large ; pour les voiles, la toile serait ingérable au moindre coup de travers. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "drizzle:dangerous:excellent:08",
      "weatherFamily": "drizzle",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi : l’humidité colle au paysage sous un crachin discret. Les voiles recevraient une puissance brutale et difficile à contenir. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "rain": [
    {
      "id": "rain:calm:critical:01",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la pluie raye franchement la vitre devant le large. Les voiles chercheront longtemps le moindre souffle utile. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:02",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Une pluie installée assombrit la ligne d’horizon, tandis que les coques auront peu de force à tirer de l’air. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:03",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "L’air manque de volonté pour faire vraiment chanter les voiles ; au large, les gouttes descendent en file serrée sur la fenêtre. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:04",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors, la pluie mouille tout le paysage sans cacher entièrement la côte. Le souffle reste trop mince pour réveiller franchement les coques. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:05",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Dehors, la pluie tient bon au-dessus de la Manche. Côté vent, les voiles risquent de pendre sans trouver de quoi travailler. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:06",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’horizon reste visible entre les traînées de pluie. Le vent ne pousse presque rien, pas même l’impatience. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:07",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La fenêtre ruisselle sous une pluie qui a pris ses habitudes ; pour les voiles, le vent reste dans sa bannette et laisse les voiles molles. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:critical:08",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi : les gouttes brouillent le large par passages réguliers. Le vent paresse et la toile ne trouvera guère de coffre. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:01",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la pluie mouille tout le paysage sans cacher entièrement la côte. Le vent reste dans sa bannette et laisse les voiles molles. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:02",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, la pluie tient bon au-dessus de la Manche, tandis que le vent paresse et la toile ne trouvera guère de coffre. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:03",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le vent se fait oublier et la navigation sera bien molle ; au large, l’horizon reste visible entre les traînées de pluie. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:04",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. L’air bouge à peine, juste assez pour faire frémir une écoute. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:05",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les gouttes brouillent le large par passages réguliers. Côté vent, l’air somnole encore au-dessus de l’eau. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:06",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la pluie donne à la côte une couleur sombre et luisante. Le peu d’air promet surtout une glisse très lente. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:07",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Un ciel humide verse sa pluie jusque vers l’horizon ; pour les voiles, le souffle est si discret qu’il faudra savourer chaque risée. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:poor:08",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon : la Manche se dessine derrière un rideau de gouttes. Les voiles auront davantage envie de dormir que de porter. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:01",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Le souffle est si discret qu’il faudra savourer chaque risée. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:02",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Les gouttes brouillent le large par passages réguliers, tandis que les voiles auront davantage envie de dormir que de porter. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:03",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le vent reste couché et les voiles auront du mal à prendre forme ; au large, la pluie donne à la côte une couleur sombre et luisante. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:04",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Mille sabords, un ciel humide verse sa pluie jusque vers l’horizon. Le souffle manque et les coques avanceront avec patience. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:05",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La Manche se dessine derrière un rideau de gouttes. Côté vent, les voiles chercheront longtemps le moindre souffle utile. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:06",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la pluie s’étire sur la vitre et ternit la lumière. Les coques auront peu de force à tirer de l’air. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:07",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris ; pour les voiles, l’air manque de volonté pour faire vraiment chanter les voiles. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:mixed:08",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot : la ligne du large tremble derrière les traces de pluie. Le souffle reste trop mince pour réveiller franchement les coques. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:01",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, un ciel humide verse sa pluie jusque vers l’horizon. L’air manque de volonté pour faire vraiment chanter les voiles. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:02",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La Manche se dessine derrière un rideau de gouttes, tandis que le souffle reste trop mince pour réveiller franchement les coques. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:03",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Les voiles risquent de pendre sans trouver de quoi travailler ; au large, la pluie s’étire sur la vitre et ternit la lumière. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:04",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon, dehors, l’eau tombe assez pour rendre le décor bien gris. Le vent ne pousse presque rien, pas même l’impatience. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:05",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La ligne du large tremble derrière les traces de pluie. Côté vent, le vent reste dans sa bannette et laisse les voiles molles. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:06",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la pluie occupe le paysage sans l’effacer complètement. Le vent paresse et la toile ne trouvera guère de coffre. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:07",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche ; pour les voiles, le vent se fait oublier et la navigation sera bien molle. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:good:08",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large : la pluie raye franchement la vitre devant le large. L’air bouge à peine, juste assez pour faire frémir une écoute. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:01",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, l’eau tombe assez pour rendre le décor bien gris. Le vent se fait oublier et la navigation sera bien molle. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:02",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La ligne du large tremble derrière les traces de pluie, tandis que l’air bouge à peine, juste assez pour faire frémir une écoute. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:03",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "L’air somnole encore au-dessus de l’eau ; au large, la pluie occupe le paysage sans l’effacer complètement. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:04",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, les gouttes épaisses marquent la fenêtre face à la Manche. Le peu d’air promet surtout une glisse très lente. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:05",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La pluie raye franchement la vitre devant le large. Côté vent, le souffle est si discret qu’il faudra savourer chaque risée. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:06",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, une pluie installée assombrit la ligne d’horizon. Les voiles auront davantage envie de dormir que de porter. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:07",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Les gouttes descendent en file serrée sur la fenêtre ; pour les voiles, le vent reste couché et les voiles auront du mal à prendre forme. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:calm:excellent:08",
      "weatherFamily": "rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme : la pluie mouille tout le paysage sans cacher entièrement la côte. Le souffle manque et les coques avanceront avec patience. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:01",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, les gouttes descendent en file serrée sur la fenêtre. La toile travaillera doucement dans un air plutôt sage. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:02",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La pluie mouille tout le paysage sans cacher entièrement la côte, tandis que le vent se montre poli, presque trop pour les amateurs de vitesse. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:03",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le vent reste léger et demandera de soigner chaque réglage ; au large, la pluie tient bon au-dessus de la Manche. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:04",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme, l’horizon reste visible entre les traînées de pluie. Les voiles respireront doucement sans tirer fort sur les écoutes. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:05",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La fenêtre ruisselle sous une pluie qui a pris ses habitudes. Côté vent, l’air suffit pour avancer doucement sans réveiller toute l’écume. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:06",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les gouttes brouillent le large par passages réguliers. Le vent accompagne les coques sans chercher à les lancer. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:07",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La pluie donne à la côte une couleur sombre et luisante ; pour les voiles, le petit air offre une navigation douce et peu physique. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:critical:08",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon : un ciel humide verse sa pluie jusque vers l’horizon. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:01",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’horizon reste visible entre les traînées de pluie. Le petit air offre une navigation douce et peu physique. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:02",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La fenêtre ruisselle sous une pluie qui a pris ses habitudes, tandis que l’air donne juste assez de vie aux voiles pour une sortie calme. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:03",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le petit vent promet davantage de finesse que de spectacle ; au large, les gouttes brouillent le large par passages réguliers. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:04",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute, la pluie donne à la côte une couleur sombre et luisante. Le vent pousse gentiment, mais la glisse restera tranquille. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:05",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Un ciel humide verse sa pluie jusque vers l’horizon. Côté vent, le souffle est propre mais encore un peu maigre. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:06",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la Manche se dessine derrière un rideau de gouttes. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:07",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La pluie s’étire sur la vitre et ternit la lumière ; pour les voiles, les coques avanceront proprement dans un souffle modeste. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:poor:08",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot : dehors, l’eau tombe assez pour rendre le décor bien gris. La toile recevra un souffle régulier mais sans grand coffre. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:01",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la pluie donne à la côte une couleur sombre et luisante. Les coques avanceront proprement dans un souffle modeste. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:02",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Un ciel humide verse sa pluie jusque vers l’horizon, tandis que la toile recevra un souffle régulier mais sans grand coffre. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:03",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Un petit souffle remplit la toile sans lui donner beaucoup de nerf ; au large, la Manche se dessine derrière un rideau de gouttes. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:04",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon, la pluie s’étire sur la vitre et ternit la lumière. Les voiles prendront forme, sans promettre une grande cavalcade. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:05",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris. Côté vent, la toile travaillera doucement dans un air plutôt sage. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:06",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la ligne du large tremble derrière les traces de pluie. Le vent se montre poli, presque trop pour les amateurs de vitesse. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:07",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La pluie occupe le paysage sans l’effacer complètement ; pour les voiles, le vent reste léger et demandera de soigner chaque réglage. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:mixed:08",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large : les gouttes épaisses marquent la fenêtre face à la Manche. Les voiles respireront doucement sans tirer fort sur les écoutes. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:01",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, la pluie s’étire sur la vitre et ternit la lumière. Le vent reste léger et demandera de soigner chaque réglage. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:02",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris, tandis que les voiles respireront doucement sans tirer fort sur les écoutes. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:03",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "L’air suffit pour avancer doucement sans réveiller toute l’écume ; au large, la ligne du large tremble derrière les traces de pluie. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:04",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la pluie occupe le paysage sans l’effacer complètement. Le vent accompagne les coques sans chercher à les lancer. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:05",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche. Côté vent, le petit air offre une navigation douce et peu physique. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:06",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la pluie raye franchement la vitre devant le large. L’air donne juste assez de vie aux voiles pour une sortie calme. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:07",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Une pluie installée assombrit la ligne d’horizon ; pour les voiles, le petit vent promet davantage de finesse que de spectacle. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:good:08",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme : les gouttes descendent en file serrée sur la fenêtre. Le vent pousse gentiment, mais la glisse restera tranquille. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:01",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la pluie occupe le paysage sans l’effacer complètement. Le petit vent promet davantage de finesse que de spectacle. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:02",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche, tandis que le vent pousse gentiment, mais la glisse restera tranquille. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:03",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le souffle est propre mais encore un peu maigre ; au large, la pluie raye franchement la vitre devant le large. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:04",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche, une pluie installée assombrit la ligne d’horizon. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:05",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les gouttes descendent en file serrée sur la fenêtre. Côté vent, les coques avanceront proprement dans un souffle modeste. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:06",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la pluie mouille tout le paysage sans cacher entièrement la côte. La toile recevra un souffle régulier mais sans grand coffre. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:07",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Dehors, la pluie tient bon au-dessus de la Manche ; pour les voiles, un petit souffle remplit la toile sans lui donner beaucoup de nerf. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:light:excellent:08",
      "weatherFamily": "rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot : l’horizon reste visible entre les traînées de pluie. Les voiles prendront forme, sans promettre une grande cavalcade. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:01",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, la pluie tient bon au-dessus de la Manche. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:02",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "L’horizon reste visible entre les traînées de pluie, tandis que l’air pousse franchement et laisse encore une belle marge. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:03",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les coques recevront un souffle utile, régulier et agréable ; au large, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:04",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute, les gouttes brouillent le large par passages réguliers. Les voiles trouveront un équilibre plaisant entre force et contrôle. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:05",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La pluie donne à la côte une couleur sombre et luisante. Côté vent, les voiles seront bien nourries sans arracher la barre. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:06",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, un ciel humide verse sa pluie jusque vers l’horizon. La toile trouvera une poussée franche et encore maîtrisable. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:07",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La Manche se dessine derrière un rideau de gouttes ; pour les voiles, les voiles auront de quoi porter sans te demander les gros bras. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:critical:08",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot : la pluie s’étire sur la vitre et ternit la lumière. La toile devrait chanter sans transformer la barre en combat. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:01",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, les gouttes brouillent le large par passages réguliers. Les voiles auront de quoi porter sans te demander les gros bras. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:02",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La pluie donne à la côte une couleur sombre et luisante, tandis que la toile devrait chanter sans transformer la barre en combat. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:03",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’air est assez présent pour réveiller l’écume sans brutalité ; au large, un ciel humide verse sa pluie jusque vers l’horizon. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:04",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon, la Manche se dessine derrière un rideau de gouttes. L’air a juste assez de coffre pour faire chanter la toile. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:05",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La pluie s’étire sur la vitre et ternit la lumière. Côté vent, le vent travaille avec régularité sans chercher la bagarre. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:06",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, l’eau tombe assez pour rendre le décor bien gris. Le vent donne du répondant tout en gardant de bonnes manières. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:07",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La ligne du large tremble derrière les traces de pluie ; pour les voiles, le vent paraît taillé pour une glisse vive mais propre. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:poor:08",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large : la pluie occupe le paysage sans l’effacer complètement. Le vent offre de la puissance sans prendre le commandement. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:01",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la Manche se dessine derrière un rideau de gouttes. Le vent paraît taillé pour une glisse vive mais propre. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:02",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La pluie s’étire sur la vitre et ternit la lumière, tandis que le vent offre de la puissance sans prendre le commandement. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:03",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le vent tient sa ligne et remplit les voiles comme il faut ; au large, l’eau tombe assez pour rendre le décor bien gris. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:04",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la ligne du large tremble derrière les traces de pluie. Le souffle est établi et devrait faire filer les coques proprement. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:05",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La pluie occupe le paysage sans l’effacer complètement. Côté vent, les coques devraient accélérer sans mauvaise surprise dans les écoutes. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:06",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, les gouttes épaisses marquent la fenêtre face à la Manche. L’air pousse franchement et laisse encore une belle marge. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:07",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La pluie raye franchement la vitre devant le large ; pour les voiles, les coques recevront un souffle utile, régulier et agréable. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:mixed:08",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme : une pluie installée assombrit la ligne d’horizon. Les voiles trouveront un équilibre plaisant entre force et contrôle. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:01",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, la ligne du large tremble derrière les traces de pluie. Les coques recevront un souffle utile, régulier et agréable. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:02",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La pluie occupe le paysage sans l’effacer complètement, tandis que les voiles trouveront un équilibre plaisant entre force et contrôle. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:03",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Les voiles seront bien nourries sans arracher la barre ; au large, les gouttes épaisses marquent la fenêtre face à la Manche. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:04",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche, la pluie raye franchement la vitre devant le large. La toile trouvera une poussée franche et encore maîtrisable. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:05",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Une pluie installée assombrit la ligne d’horizon. Côté vent, les voiles auront de quoi porter sans te demander les gros bras. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:06",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, les gouttes descendent en file serrée sur la fenêtre. La toile devrait chanter sans transformer la barre en combat. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:07",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La pluie mouille tout le paysage sans cacher entièrement la côte ; pour les voiles, l’air est assez présent pour réveiller l’écume sans brutalité. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:good:08",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot : dehors, la pluie tient bon au-dessus de la Manche. L’air a juste assez de coffre pour faire chanter la toile. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:01",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la pluie raye franchement la vitre devant le large. L’air est assez présent pour réveiller l’écume sans brutalité. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:02",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Une pluie installée assombrit la ligne d’horizon, tandis que l’air a juste assez de coffre pour faire chanter la toile. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:03",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le vent travaille avec régularité sans chercher la bagarre ; au large, les gouttes descendent en file serrée sur la fenêtre. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:04",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde, la pluie mouille tout le paysage sans cacher entièrement la côte. Le vent donne du répondant tout en gardant de bonnes manières. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:05",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Dehors, la pluie tient bon au-dessus de la Manche. Côté vent, le vent paraît taillé pour une glisse vive mais propre. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:06",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, l’horizon reste visible entre les traînées de pluie. Le vent offre de la puissance sans prendre le commandement. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:07",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La fenêtre ruisselle sous une pluie qui a pris ses habitudes ; pour les voiles, le vent tient sa ligne et remplit les voiles comme il faut. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:favorable:excellent:08",
      "weatherFamily": "rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot : les gouttes brouillent le large par passages réguliers. Le souffle est établi et devrait faire filer les coques proprement. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:01",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:02",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Les gouttes brouillent le large par passages réguliers, tandis que le souffle devient musclé, assez pour fatiguer un équipage distrait. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:03",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Les coques trouveront de la vitesse, au prix d’une vigilance constante ; au large, la pluie donne à la côte une couleur sombre et luisante. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:04",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon, un ciel humide verse sa pluie jusque vers l’horizon. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:05",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La Manche se dessine derrière un rideau de gouttes. Côté vent, l’air a du coffre et la barre ne tolérera pas la distraction. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:06",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la pluie s’étire sur la vitre et ternit la lumière. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:07",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris ; pour les voiles, les voiles auront du travail et le barreur davantage encore. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:critical:08",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large : la ligne du large tremble derrière les traces de pluie. La toile va charger et chaque virement devra rester propre. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:01",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, un ciel humide verse sa pluie jusque vers l’horizon. Les voiles auront du travail et le barreur davantage encore. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:02",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La Manche se dessine derrière un rideau de gouttes, tandis que la toile va charger et chaque virement devra rester propre. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:03",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "L’air pousse avec caractère et réclame une marge généreuse ; au large, la pluie s’étire sur la vitre et ternit la lumière. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:04",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, dehors, l’eau tombe assez pour rendre le décor bien gris. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:05",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La ligne du large tremble derrière les traces de pluie. Côté vent, la toile sera puissante et chaque manœuvre demandera de l’anticipation. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:06",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la pluie occupe le paysage sans l’effacer complètement. La puissance est là, avec des coups de rein à surveiller. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:07",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche ; pour les voiles, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:poor:08",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme : la pluie raye franchement la vitre devant le large. Le vent commence à hausser le ton autour des voiles. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:01",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, l’eau tombe assez pour rendre le décor bien gris. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:02",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La ligne du large tremble derrière les traces de pluie, tandis que le vent commence à hausser le ton autour des voiles. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:03",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le vent bombe le torse et réclamera des mains bien réveillées ; au large, la pluie occupe le paysage sans l’effacer complètement. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:04",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche, les gouttes épaisses marquent la fenêtre face à la Manche. Le vent pousse franchement, alors les écoutes devront rester vivantes. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:05",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La pluie raye franchement la vitre devant le large. Côté vent, le vent se fait physique et ne pardonnera pas une écoute oubliée. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:06",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, une pluie installée assombrit la ligne d’horizon. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:07",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les gouttes descendent en file serrée sur la fenêtre ; pour les voiles, les coques trouveront de la vitesse, au prix d’une vigilance constante. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:mixed:08",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot : la pluie mouille tout le paysage sans cacher entièrement la côte. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:01",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, les gouttes épaisses marquent la fenêtre face à la Manche. Les coques trouveront de la vitesse, au prix d’une vigilance constante. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:02",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La pluie raye franchement la vitre devant le large, tandis que les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:03",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’air a du coffre et la barre ne tolérera pas la distraction ; au large, une pluie installée assombrit la ligne d’horizon. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:04",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde, les gouttes descendent en file serrée sur la fenêtre. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:05",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La pluie mouille tout le paysage sans cacher entièrement la côte. Côté vent, les voiles auront du travail et le barreur davantage encore. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:06",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la pluie tient bon au-dessus de la Manche. La toile va charger et chaque virement devra rester propre. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:07",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "L’horizon reste visible entre les traînées de pluie ; pour les voiles, l’air pousse avec caractère et réclame une marge généreuse. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:good:08",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot : la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:01",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, les gouttes descendent en file serrée sur la fenêtre. L’air pousse avec caractère et réclame une marge généreuse. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:02",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La pluie mouille tout le paysage sans cacher entièrement la côte, tandis que les voiles vont tirer fort, avec des reprises qui demandent du métier. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:03",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La toile sera puissante et chaque manœuvre demandera de l’anticipation ; au large, la pluie tient bon au-dessus de la Manche. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:04",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme, l’horizon reste visible entre les traînées de pluie. La puissance est là, avec des coups de rein à surveiller. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:05",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La fenêtre ruisselle sous une pluie qui a pris ses habitudes. Côté vent, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:06",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, les gouttes brouillent le large par passages réguliers. Le vent commence à hausser le ton autour des voiles. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:07",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La pluie donne à la côte une couleur sombre et luisante ; pour les voiles, le vent bombe le torse et réclamera des mains bien réveillées. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:sporty:excellent:08",
      "weatherFamily": "rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon : un ciel humide verse sa pluie jusque vers l’horizon. Le vent pousse franchement, alors les écoutes devront rester vivantes. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "rain:dangerous:critical:01",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la pluie donne à la côte une couleur sombre et luisante. Les coups de vent arrivent avec trop de force pour sortir proprement. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:02",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Un ciel humide verse sa pluie jusque vers l’horizon, tandis que les rafales peuvent coucher la toile avant même de laisser réagir. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:03",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le souffle est devenu assez violent pour imposer le quai ; au large, la Manche se dessine derrière un rideau de gouttes. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:04",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la pluie s’étire sur la vitre et ternit la lumière. La toile serait ingérable au moindre coup de travers. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:05",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris. Côté vent, les voiles recevraient une puissance brutale et difficile à contenir. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:06",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la ligne du large tremble derrière les traces de pluie. La toile serait chargée au point de rendre chaque manœuvre risquée. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:07",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La pluie occupe le paysage sans l’effacer complètement ; pour les voiles, le vent a franchi la limite où l’expérience remplace la prudence. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:critical:08",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme : les gouttes épaisses marquent la fenêtre face à la Manche. Les voiles prendraient des claques que personne ne doit minimiser. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:01",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la pluie s’étire sur la vitre et ternit la lumière. Le vent a franchi la limite où l’expérience remplace la prudence. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:02",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Dehors, l’eau tombe assez pour rendre le décor bien gris, tandis que les voiles prendraient des claques que personne ne doit minimiser. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:03",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le vent mettrait l’équipage en lutte dès la mise à l’eau ; au large, la ligne du large tremble derrière les traces de pluie. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:04",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche, la pluie occupe le paysage sans l’effacer complètement. Le vent frappe trop fort pour confier les coques au large. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:05",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche. Côté vent, le vent cherche la bagarre et la barre n’a rien à y gagner. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:06",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la pluie raye franchement la vitre devant le large. Les coques seraient livrées à un souffle bien trop violent. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:07",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Une pluie installée assombrit la ligne d’horizon ; pour les voiles, la puissance du vent ne laisse plus la marge nécessaire. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:poor:08",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot : les gouttes descendent en file serrée sur la fenêtre. Les rafales commandent désormais plus fort que le barreur. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:01",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la pluie occupe le paysage sans l’effacer complètement. La puissance du vent ne laisse plus la marge nécessaire. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:02",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les gouttes épaisses marquent la fenêtre face à la Manche, tandis que les rafales commandent désormais plus fort que le barreur. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:03",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les rafales veulent arracher la barre et vider toute marge de sécurité ; au large, la pluie raye franchement la vitre devant le large. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:04",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde, une pluie installée assombrit la ligne d’horizon. Les rafales dépassent ce qu’une sortie prudente peut accepter. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:05",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les gouttes descendent en file serrée sur la fenêtre. Côté vent, les coups de vent arrivent avec trop de force pour sortir proprement. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:06",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la pluie mouille tout le paysage sans cacher entièrement la côte. Les rafales peuvent coucher la toile avant même de laisser réagir. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:07",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Dehors, la pluie tient bon au-dessus de la Manche ; pour les voiles, le souffle est devenu assez violent pour imposer le quai. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:mixed:08",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot : l’horizon reste visible entre les traînées de pluie. La toile serait ingérable au moindre coup de travers. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:01",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, une pluie installée assombrit la ligne d’horizon. Le souffle est devenu assez violent pour imposer le quai. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:02",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les gouttes descendent en file serrée sur la fenêtre, tandis que la toile serait ingérable au moindre coup de travers. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:03",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les voiles recevraient une puissance brutale et difficile à contenir ; au large, la pluie mouille tout le paysage sans cacher entièrement la côte. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:04",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme, dehors, la pluie tient bon au-dessus de la Manche. La toile serait chargée au point de rendre chaque manœuvre risquée. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:05",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "L’horizon reste visible entre les traînées de pluie. Côté vent, le vent a franchi la limite où l’expérience remplace la prudence. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:06",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Les voiles prendraient des claques que personne ne doit minimiser. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:07",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les gouttes brouillent le large par passages réguliers ; pour les voiles, le vent mettrait l’équipage en lutte dès la mise à l’eau. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:good:08",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon : la pluie donne à la côte une couleur sombre et luisante. Le vent frappe trop fort pour confier les coques au large. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:01",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, la pluie tient bon au-dessus de la Manche. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:02",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "L’horizon reste visible entre les traînées de pluie, tandis que le vent frappe trop fort pour confier les coques au large. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:03",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vent cherche la bagarre et la barre n’a rien à y gagner ; au large, la fenêtre ruisselle sous une pluie qui a pris ses habitudes. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:04",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi, les gouttes brouillent le large par passages réguliers. Les coques seraient livrées à un souffle bien trop violent. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:05",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La pluie donne à la côte une couleur sombre et luisante. Côté vent, la puissance du vent ne laisse plus la marge nécessaire. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:06",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, un ciel humide verse sa pluie jusque vers l’horizon. Les rafales commandent désormais plus fort que le barreur. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:07",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La Manche se dessine derrière un rideau de gouttes ; pour les voiles, les rafales veulent arracher la barre et vider toute marge de sécurité. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "rain:dangerous:excellent:08",
      "weatherFamily": "rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors : la pluie s’étire sur la vitre et ternit la lumière. Les rafales dépassent ce qu’une sortie prudente peut accepter. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "heavy-rain": [
    {
      "id": "heavy-rain:calm:critical:01",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, un rideau de forte pluie mange une partie de l’horizon. Le peu d’air promet surtout une glisse très lente. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:02",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La pluie battante brouille sérieusement la vue du large, tandis que le souffle est si discret qu’il faudra savourer chaque risée. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:03",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Les voiles auront davantage envie de dormir que de porter ; au large, des nappes de pluie ferment presque la fenêtre. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:04",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi, la côte disparaît par moments sous une pluie très serrée. Le vent reste couché et les voiles auront du mal à prendre forme. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:05",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Dehors, l’eau tombe dru et raccourcit la visibilité. Côté vent, le souffle manque et les coques avanceront avec patience. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:06",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la vitre ruisselle sous une pluie qui ne fait pas semblant. Les voiles chercheront longtemps le moindre souffle utile. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:07",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le large se devine à peine derrière les paquets de pluie ; pour les voiles, les coques auront peu de force à tirer de l’air. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:critical:08",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors : la forte pluie transforme l’horizon en masse grise. L’air manque de volonté pour faire vraiment chanter les voiles. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:01",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la côte disparaît par moments sous une pluie très serrée. Les coques auront peu de force à tirer de l’air. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:02",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, l’eau tombe dru et raccourcit la visibilité, tandis que l’air manque de volonté pour faire vraiment chanter les voiles. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:03",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le souffle reste trop mince pour réveiller franchement les coques ; au large, la vitre ruisselle sous une pluie qui ne fait pas semblant. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:04",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon, le large se devine à peine derrière les paquets de pluie. Les voiles risquent de pendre sans trouver de quoi travailler. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:05",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La forte pluie transforme l’horizon en masse grise. Côté vent, le vent ne pousse presque rien, pas même l’impatience. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:06",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, des trombes de pluie écrasent les couleurs de la Manche. Le vent reste dans sa bannette et laisse les voiles molles. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:07",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La fenêtre reçoit toute la colère d’une pluie dense ; pour les voiles, le vent paresse et la toile ne trouvera guère de coffre. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:poor:08",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme : le rideau d’eau épaissit entre la côte et le large. Le vent se fait oublier et la navigation sera bien molle. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:01",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le large se devine à peine derrière les paquets de pluie. Le vent paresse et la toile ne trouvera guère de coffre. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:02",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La forte pluie transforme l’horizon en masse grise, tandis que le vent se fait oublier et la navigation sera bien molle. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:03",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "L’air bouge à peine, juste assez pour faire frémir une écoute ; au large, des trombes de pluie écrasent les couleurs de la Manche. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:04",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot, la fenêtre reçoit toute la colère d’une pluie dense. L’air somnole encore au-dessus de l’eau. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:05",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le rideau d’eau épaissit entre la côte et le large. Côté vent, le peu d’air promet surtout une glisse très lente. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:06",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la pluie lourde gomme les détails bien avant l’horizon. Le souffle est si discret qu’il faudra savourer chaque risée. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:07",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, les averses serrées bouchent presque toute la vue ; pour les voiles, les voiles auront davantage envie de dormir que de porter. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:mixed:08",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute : la Manche disparaît par pans derrière une pluie puissante. Le vent reste couché et les voiles auront du mal à prendre forme. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:01",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, la fenêtre reçoit toute la colère d’une pluie dense. Les voiles auront davantage envie de dormir que de porter. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:02",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le rideau d’eau épaissit entre la côte et le large, tandis que le vent reste couché et les voiles auront du mal à prendre forme. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:03",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le souffle manque et les coques avanceront avec patience ; au large, la pluie lourde gomme les détails bien avant l’horizon. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:04",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large, dehors, les averses serrées bouchent presque toute la vue. Les voiles chercheront longtemps le moindre souffle utile. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:05",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La Manche disparaît par pans derrière une pluie puissante. Côté vent, les coques auront peu de force à tirer de l’air. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:06",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la visibilité se réduit nettement sous les nappes de pluie. L’air manque de volonté pour faire vraiment chanter les voiles. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:07",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La vitre peine à montrer le large sous tant d’eau ; pour les voiles, le souffle reste trop mince pour réveiller franchement les coques. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:good:08",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Nom d’une pipe : un rideau de forte pluie mange une partie de l’horizon. Les voiles risquent de pendre sans trouver de quoi travailler. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:01",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, les averses serrées bouchent presque toute la vue. Le souffle reste trop mince pour réveiller franchement les coques. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:02",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "La Manche disparaît par pans derrière une pluie puissante, tandis que les voiles risquent de pendre sans trouver de quoi travailler. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:03",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le vent ne pousse presque rien, pas même l’impatience ; au large, la visibilité se réduit nettement sous les nappes de pluie. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:04",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme, la vitre peine à montrer le large sous tant d’eau. Le vent reste dans sa bannette et laisse les voiles molles. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:05",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Un rideau de forte pluie mange une partie de l’horizon. Côté vent, le vent paresse et la toile ne trouvera guère de coffre. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:06",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la pluie battante brouille sérieusement la vue du large. Le vent se fait oublier et la navigation sera bien molle. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:07",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des nappes de pluie ferment presque la fenêtre ; pour les voiles, l’air bouge à peine, juste assez pour faire frémir une écoute. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:calm:excellent:08",
      "weatherFamily": "heavy-rain",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la côte disparaît par moments sous une pluie très serrée. L’air somnole encore au-dessus de l’eau. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:01",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, des nappes de pluie ferment presque la fenêtre. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:02",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La côte disparaît par moments sous une pluie très serrée, tandis que les coques avanceront proprement dans un souffle modeste. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:03",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La toile recevra un souffle régulier mais sans grand coffre ; au large, l’eau tombe dru et raccourcit la visibilité. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:04",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon, la vitre ruisselle sous une pluie qui ne fait pas semblant. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:05",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le large se devine à peine derrière les paquets de pluie. Côté vent, les voiles prendront forme, sans promettre une grande cavalcade. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:06",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la forte pluie transforme l’horizon en masse grise. La toile travaillera doucement dans un air plutôt sage. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:07",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Des trombes de pluie écrasent les couleurs de la Manche ; pour les voiles, le vent se montre poli, presque trop pour les amateurs de vitesse. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:critical:08",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme : la fenêtre reçoit toute la colère d’une pluie dense. Le vent reste léger et demandera de soigner chaque réglage. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:01",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la vitre ruisselle sous une pluie qui ne fait pas semblant. Le vent se montre poli, presque trop pour les amateurs de vitesse. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:02",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le large se devine à peine derrière les paquets de pluie, tandis que le vent reste léger et demandera de soigner chaque réglage. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:03",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Les voiles respireront doucement sans tirer fort sur les écoutes ; au large, la forte pluie transforme l’horizon en masse grise. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:04",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot, des trombes de pluie écrasent les couleurs de la Manche. L’air suffit pour avancer doucement sans réveiller toute l’écume. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:05",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La fenêtre reçoit toute la colère d’une pluie dense. Côté vent, le vent accompagne les coques sans chercher à les lancer. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:06",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le rideau d’eau épaissit entre la côte et le large. Le petit air offre une navigation douce et peu physique. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:07",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "La pluie lourde gomme les détails bien avant l’horizon ; pour les voiles, l’air donne juste assez de vie aux voiles pour une sortie calme. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:poor:08",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute : dehors, les averses serrées bouchent presque toute la vue. Le petit vent promet davantage de finesse que de spectacle. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:01",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, des trombes de pluie écrasent les couleurs de la Manche. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:02",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La fenêtre reçoit toute la colère d’une pluie dense, tandis que le petit vent promet davantage de finesse que de spectacle. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:03",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Le vent pousse gentiment, mais la glisse restera tranquille ; au large, le rideau d’eau épaissit entre la côte et le large. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:04",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large, la pluie lourde gomme les détails bien avant l’horizon. Le souffle est propre mais encore un peu maigre. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:05",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Dehors, les averses serrées bouchent presque toute la vue. Côté vent, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:06",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la Manche disparaît par pans derrière une pluie puissante. Les coques avanceront proprement dans un souffle modeste. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:07",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La visibilité se réduit nettement sous les nappes de pluie ; pour les voiles, la toile recevra un souffle régulier mais sans grand coffre. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:mixed:08",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon : la vitre peine à montrer le large sous tant d’eau. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:01",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, la pluie lourde gomme les détails bien avant l’horizon. La toile recevra un souffle régulier mais sans grand coffre. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:02",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Dehors, les averses serrées bouchent presque toute la vue, tandis que un petit souffle remplit la toile sans lui donner beaucoup de nerf. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:03",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Les voiles prendront forme, sans promettre une grande cavalcade ; au large, la Manche disparaît par pans derrière une pluie puissante. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:04",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme, la visibilité se réduit nettement sous les nappes de pluie. La toile travaillera doucement dans un air plutôt sage. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:05",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La vitre peine à montrer le large sous tant d’eau. Côté vent, le vent se montre poli, presque trop pour les amateurs de vitesse. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:06",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un rideau de forte pluie mange une partie de l’horizon. Le vent reste léger et demandera de soigner chaque réglage. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:07",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La pluie battante brouille sérieusement la vue du large ; pour les voiles, les voiles respireront doucement sans tirer fort sur les écoutes. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:good:08",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : des nappes de pluie ferment presque la fenêtre. L’air suffit pour avancer doucement sans réveiller toute l’écume. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:01",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la visibilité se réduit nettement sous les nappes de pluie. Les voiles respireront doucement sans tirer fort sur les écoutes. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:02",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La vitre peine à montrer le large sous tant d’eau, tandis que l’air suffit pour avancer doucement sans réveiller toute l’écume. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:03",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le vent accompagne les coques sans chercher à les lancer ; au large, un rideau de forte pluie mange une partie de l’horizon. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:04",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot, la pluie battante brouille sérieusement la vue du large. Le petit air offre une navigation douce et peu physique. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:05",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Des nappes de pluie ferment presque la fenêtre. Côté vent, l’air donne juste assez de vie aux voiles pour une sortie calme. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:06",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la côte disparaît par moments sous une pluie très serrée. Le petit vent promet davantage de finesse que de spectacle. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:07",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Dehors, l’eau tombe dru et raccourcit la visibilité ; pour les voiles, le vent pousse gentiment, mais la glisse restera tranquille. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:light:excellent:08",
      "weatherFamily": "heavy-rain",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche : la vitre ruisselle sous une pluie qui ne fait pas semblant. Le souffle est propre mais encore un peu maigre. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:01",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, l’eau tombe dru et raccourcit la visibilité. Le vent donne du répondant tout en gardant de bonnes manières. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:02",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La vitre ruisselle sous une pluie qui ne fait pas semblant, tandis que le vent paraît taillé pour une glisse vive mais propre. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:03",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le vent offre de la puissance sans prendre le commandement ; au large, le large se devine à peine derrière les paquets de pluie. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:04",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot, la forte pluie transforme l’horizon en masse grise. Le vent tient sa ligne et remplit les voiles comme il faut. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:05",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Des trombes de pluie écrasent les couleurs de la Manche. Côté vent, le souffle est établi et devrait faire filer les coques proprement. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:06",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la fenêtre reçoit toute la colère d’une pluie dense. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:07",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Le rideau d’eau épaissit entre la côte et le large ; pour les voiles, l’air pousse franchement et laisse encore une belle marge. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:critical:08",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute : la pluie lourde gomme les détails bien avant l’horizon. Les coques recevront un souffle utile, régulier et agréable. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:01",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la forte pluie transforme l’horizon en masse grise. L’air pousse franchement et laisse encore une belle marge. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:02",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Des trombes de pluie écrasent les couleurs de la Manche, tandis que les coques recevront un souffle utile, régulier et agréable. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:03",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Les voiles trouveront un équilibre plaisant entre force et contrôle ; au large, la fenêtre reçoit toute la colère d’une pluie dense. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:04",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large, le rideau d’eau épaissit entre la côte et le large. Les voiles seront bien nourries sans arracher la barre. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:05",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La pluie lourde gomme les détails bien avant l’horizon. Côté vent, la toile trouvera une poussée franche et encore maîtrisable. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:06",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, les averses serrées bouchent presque toute la vue. Les voiles auront de quoi porter sans te demander les gros bras. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:07",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La Manche disparaît par pans derrière une pluie puissante ; pour les voiles, la toile devrait chanter sans transformer la barre en combat. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:poor:08",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon : la visibilité se réduit nettement sous les nappes de pluie. L’air est assez présent pour réveiller l’écume sans brutalité. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:01",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le rideau d’eau épaissit entre la côte et le large. La toile devrait chanter sans transformer la barre en combat. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:02",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La pluie lourde gomme les détails bien avant l’horizon, tandis que l’air est assez présent pour réveiller l’écume sans brutalité. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:03",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’air a juste assez de coffre pour faire chanter la toile ; au large, les averses serrées bouchent presque toute la vue. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:04",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme, la Manche disparaît par pans derrière une pluie puissante. Le vent travaille avec régularité sans chercher la bagarre. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:05",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La visibilité se réduit nettement sous les nappes de pluie. Côté vent, le vent donne du répondant tout en gardant de bonnes manières. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:06",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la vitre peine à montrer le large sous tant d’eau. Le vent paraît taillé pour une glisse vive mais propre. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:07",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Un rideau de forte pluie mange une partie de l’horizon ; pour les voiles, le vent offre de la puissance sans prendre le commandement. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:mixed:08",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la pluie battante brouille sérieusement la vue du large. Le vent tient sa ligne et remplit les voiles comme il faut. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:01",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, la Manche disparaît par pans derrière une pluie puissante. Le vent offre de la puissance sans prendre le commandement. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:02",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La visibilité se réduit nettement sous les nappes de pluie, tandis que le vent tient sa ligne et remplit les voiles comme il faut. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:03",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le souffle est établi et devrait faire filer les coques proprement ; au large, la vitre peine à montrer le large sous tant d’eau. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:04",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot, un rideau de forte pluie mange une partie de l’horizon. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:05",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La pluie battante brouille sérieusement la vue du large. Côté vent, l’air pousse franchement et laisse encore une belle marge. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:06",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des nappes de pluie ferment presque la fenêtre. Les coques recevront un souffle utile, régulier et agréable. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:07",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La côte disparaît par moments sous une pluie très serrée ; pour les voiles, les voiles trouveront un équilibre plaisant entre force et contrôle. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:good:08",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche : dehors, l’eau tombe dru et raccourcit la visibilité. Les voiles seront bien nourries sans arracher la barre. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:01",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, un rideau de forte pluie mange une partie de l’horizon. Les voiles trouveront un équilibre plaisant entre force et contrôle. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:02",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La pluie battante brouille sérieusement la vue du large, tandis que les voiles seront bien nourries sans arracher la barre. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:03",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La toile trouvera une poussée franche et encore maîtrisable ; au large, des nappes de pluie ferment presque la fenêtre. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:04",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot, la côte disparaît par moments sous une pluie très serrée. Les voiles auront de quoi porter sans te demander les gros bras. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:05",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Dehors, l’eau tombe dru et raccourcit la visibilité. Côté vent, la toile devrait chanter sans transformer la barre en combat. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:06",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la vitre ruisselle sous une pluie qui ne fait pas semblant. L’air est assez présent pour réveiller l’écume sans brutalité. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:07",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le large se devine à peine derrière les paquets de pluie ; pour les voiles, l’air a juste assez de coffre pour faire chanter la toile. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:favorable:excellent:08",
      "weatherFamily": "heavy-rain",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde : la forte pluie transforme l’horizon en masse grise. Le vent travaille avec régularité sans chercher la bagarre. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:01",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le large se devine à peine derrière les paquets de pluie. La puissance est là, avec des coups de rein à surveiller. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:02",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La forte pluie transforme l’horizon en masse grise, tandis que le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:03",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le vent commence à hausser le ton autour des voiles ; au large, des trombes de pluie écrasent les couleurs de la Manche. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:04",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large, la fenêtre reçoit toute la colère d’une pluie dense. Le vent bombe le torse et réclamera des mains bien réveillées. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:05",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Le rideau d’eau épaissit entre la côte et le large. Côté vent, le vent pousse franchement, alors les écoutes devront rester vivantes. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:06",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la pluie lourde gomme les détails bien avant l’horizon. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:07",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, les averses serrées bouchent presque toute la vue ; pour les voiles, le souffle devient musclé, assez pour fatiguer un équipage distrait. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:critical:08",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon : la Manche disparaît par pans derrière une pluie puissante. Les coques trouveront de la vitesse, au prix d’une vigilance constante. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:01",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la fenêtre reçoit toute la colère d’une pluie dense. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:02",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le rideau d’eau épaissit entre la côte et le large, tandis que les coques trouveront de la vitesse, au prix d’une vigilance constante. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:03",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes ; au large, la pluie lourde gomme les détails bien avant l’horizon. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:04",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme, dehors, les averses serrées bouchent presque toute la vue. L’air a du coffre et la barre ne tolérera pas la distraction. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:05",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La Manche disparaît par pans derrière une pluie puissante. Côté vent, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:06",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la visibilité se réduit nettement sous les nappes de pluie. Les voiles auront du travail et le barreur davantage encore. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:07",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La vitre peine à montrer le large sous tant d’eau ; pour les voiles, la toile va charger et chaque virement devra rester propre. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:poor:08",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : un rideau de forte pluie mange une partie de l’horizon. L’air pousse avec caractère et réclame une marge généreuse. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:01",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, les averses serrées bouchent presque toute la vue. La toile va charger et chaque virement devra rester propre. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:02",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "La Manche disparaît par pans derrière une pluie puissante, tandis que l’air pousse avec caractère et réclame une marge généreuse. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:03",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Les voiles vont tirer fort, avec des reprises qui demandent du métier ; au large, la visibilité se réduit nettement sous les nappes de pluie. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:04",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot, la vitre peine à montrer le large sous tant d’eau. La toile sera puissante et chaque manœuvre demandera de l’anticipation. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:05",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Un rideau de forte pluie mange une partie de l’horizon. Côté vent, la puissance est là, avec des coups de rein à surveiller. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:06",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la pluie battante brouille sérieusement la vue du large. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:07",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des nappes de pluie ferment presque la fenêtre ; pour les voiles, le vent commence à hausser le ton autour des voiles. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:mixed:08",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche : la côte disparaît par moments sous une pluie très serrée. Le vent bombe le torse et réclamera des mains bien réveillées. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:01",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, la vitre peine à montrer le large sous tant d’eau. Le vent commence à hausser le ton autour des voiles. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:02",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Un rideau de forte pluie mange une partie de l’horizon, tandis que le vent bombe le torse et réclamera des mains bien réveillées. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:03",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le vent pousse franchement, alors les écoutes devront rester vivantes ; au large, la pluie battante brouille sérieusement la vue du large. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:04",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot, des nappes de pluie ferment presque la fenêtre. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:05",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La côte disparaît par moments sous une pluie très serrée. Côté vent, le souffle devient musclé, assez pour fatiguer un équipage distrait. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:06",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, l’eau tombe dru et raccourcit la visibilité. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:07",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La vitre ruisselle sous une pluie qui ne fait pas semblant ; pour les voiles, les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:good:08",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde : le large se devine à peine derrière les paquets de pluie. L’air a du coffre et la barre ne tolérera pas la distraction. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:01",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, des nappes de pluie ferment presque la fenêtre. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:02",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La côte disparaît par moments sous une pluie très serrée, tandis que l’air a du coffre et la barre ne tolérera pas la distraction. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:03",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Les coques peuvent filer vite, mais le souffle impose de la maîtrise ; au large, l’eau tombe dru et raccourcit la visibilité. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:04",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon, la vitre ruisselle sous une pluie qui ne fait pas semblant. Les voiles auront du travail et le barreur davantage encore. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:05",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le large se devine à peine derrière les paquets de pluie. Côté vent, la toile va charger et chaque virement devra rester propre. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:06",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la forte pluie transforme l’horizon en masse grise. L’air pousse avec caractère et réclame une marge généreuse. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:07",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Des trombes de pluie écrasent les couleurs de la Manche ; pour les voiles, les voiles vont tirer fort, avec des reprises qui demandent du métier. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:sporty:excellent:08",
      "weatherFamily": "heavy-rain",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme : la fenêtre reçoit toute la colère d’une pluie dense. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "heavy-rain:dangerous:critical:01",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, des trombes de pluie écrasent les couleurs de la Manche. Les coques seraient livrées à un souffle bien trop violent. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:02",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La fenêtre reçoit toute la colère d’une pluie dense, tandis que la puissance du vent ne laisse plus la marge nécessaire. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:03",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les rafales commandent désormais plus fort que le barreur ; au large, le rideau d’eau épaissit entre la côte et le large. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:04",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme, la pluie lourde gomme les détails bien avant l’horizon. Les rafales veulent arracher la barre et vider toute marge de sécurité. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:05",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Dehors, les averses serrées bouchent presque toute la vue. Côté vent, les rafales dépassent ce qu’une sortie prudente peut accepter. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:06",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la Manche disparaît par pans derrière une pluie puissante. Les coups de vent arrivent avec trop de force pour sortir proprement. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:07",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La visibilité se réduit nettement sous les nappes de pluie ; pour les voiles, les rafales peuvent coucher la toile avant même de laisser réagir. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:critical:08",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : la vitre peine à montrer le large sous tant d’eau. Le souffle est devenu assez violent pour imposer le quai. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:01",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la pluie lourde gomme les détails bien avant l’horizon. Les rafales peuvent coucher la toile avant même de laisser réagir. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:02",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Dehors, les averses serrées bouchent presque toute la vue, tandis que le souffle est devenu assez violent pour imposer le quai. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:03",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La toile serait ingérable au moindre coup de travers ; au large, la Manche disparaît par pans derrière une pluie puissante. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:04",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot, la visibilité se réduit nettement sous les nappes de pluie. Les voiles recevraient une puissance brutale et difficile à contenir. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:05",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La vitre peine à montrer le large sous tant d’eau. Côté vent, la toile serait chargée au point de rendre chaque manœuvre risquée. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:06",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, un rideau de forte pluie mange une partie de l’horizon. Le vent a franchi la limite où l’expérience remplace la prudence. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:07",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La pluie battante brouille sérieusement la vue du large ; pour les voiles, les voiles prendraient des claques que personne ne doit minimiser. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:poor:08",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche : des nappes de pluie ferment presque la fenêtre. Le vent mettrait l’équipage en lutte dès la mise à l’eau. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:01",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la visibilité se réduit nettement sous les nappes de pluie. Les voiles prendraient des claques que personne ne doit minimiser. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:02",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La vitre peine à montrer le large sous tant d’eau, tandis que le vent mettrait l’équipage en lutte dès la mise à l’eau. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:03",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le vent frappe trop fort pour confier les coques au large ; au large, un rideau de forte pluie mange une partie de l’horizon. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:04",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot, la pluie battante brouille sérieusement la vue du large. Le vent cherche la bagarre et la barre n’a rien à y gagner. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:05",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Des nappes de pluie ferment presque la fenêtre. Côté vent, les coques seraient livrées à un souffle bien trop violent. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:06",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la côte disparaît par moments sous une pluie très serrée. La puissance du vent ne laisse plus la marge nécessaire. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:07",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Dehors, l’eau tombe dru et raccourcit la visibilité ; pour les voiles, les rafales commandent désormais plus fort que le barreur. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:mixed:08",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde : la vitre ruisselle sous une pluie qui ne fait pas semblant. Les rafales veulent arracher la barre et vider toute marge de sécurité. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:01",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, la pluie battante brouille sérieusement la vue du large. Les rafales commandent désormais plus fort que le barreur. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:02",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Des nappes de pluie ferment presque la fenêtre, tandis que les rafales veulent arracher la barre et vider toute marge de sécurité. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:03",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les rafales dépassent ce qu’une sortie prudente peut accepter ; au large, la côte disparaît par moments sous une pluie très serrée. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:04",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon, dehors, l’eau tombe dru et raccourcit la visibilité. Les coups de vent arrivent avec trop de force pour sortir proprement. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:05",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La vitre ruisselle sous une pluie qui ne fait pas semblant. Côté vent, les rafales peuvent coucher la toile avant même de laisser réagir. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:06",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le large se devine à peine derrière les paquets de pluie. Le souffle est devenu assez violent pour imposer le quai. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:07",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La forte pluie transforme l’horizon en masse grise ; pour les voiles, la toile serait ingérable au moindre coup de travers. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:good:08",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme : des trombes de pluie écrasent les couleurs de la Manche. Les voiles recevraient une puissance brutale et difficile à contenir. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:01",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, l’eau tombe dru et raccourcit la visibilité. La toile serait ingérable au moindre coup de travers. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:02",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La vitre ruisselle sous une pluie qui ne fait pas semblant, tandis que les voiles recevraient une puissance brutale et difficile à contenir. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:03",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La toile serait chargée au point de rendre chaque manœuvre risquée ; au large, le large se devine à peine derrière les paquets de pluie. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:04",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors, la forte pluie transforme l’horizon en masse grise. Le vent a franchi la limite où l’expérience remplace la prudence. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:05",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Des trombes de pluie écrasent les couleurs de la Manche. Côté vent, les voiles prendraient des claques que personne ne doit minimiser. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:06",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la fenêtre reçoit toute la colère d’une pluie dense. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:07",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le rideau d’eau épaissit entre la côte et le large ; pour les voiles, le vent frappe trop fort pour confier les coques au large. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "heavy-rain:dangerous:excellent:08",
      "weatherFamily": "heavy-rain",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi : la pluie lourde gomme les détails bien avant l’horizon. Le vent cherche la bagarre et la barre n’a rien à y gagner. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "snow": [
    {
      "id": "snow:calm:critical:01",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Derrière la vitre, des flocons traversent la vue devant l’horizon. Le vent reste dans sa bannette et laisse les voiles molles. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:02",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La neige blanchit l’air entre la côte et le large, tandis que le vent paresse et la toile ne trouvera guère de coffre. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:03",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vent se fait oublier et la navigation sera bien molle ; au large, des grains hivernaux dansent derrière la vitre. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:04",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors, le ciel laisse tomber des flocons jusque vers la Manche. L’air bouge à peine, juste assez pour faire frémir une écoute. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:05",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "La fenêtre montre un large piqué de blanc. Côté vent, l’air somnole encore au-dessus de l’eau. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:06",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, la neige flotte dans une lumière froide au-dessus de l’eau. Le peu d’air promet surtout une glisse très lente. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:07",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Des flocons serrés effacent doucement les couleurs de la côte ; pour les voiles, le souffle est si discret qu’il faudra savourer chaque risée. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:critical:08",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi : l’horizon pâlit sous le passage de la neige. Les voiles auront davantage envie de dormir que de porter. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:01",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le ciel laisse tomber des flocons jusque vers la Manche. Le souffle est si discret qu’il faudra savourer chaque risée. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:02",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "La fenêtre montre un large piqué de blanc, tandis que les voiles auront davantage envie de dormir que de porter. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:03",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Le vent reste couché et les voiles auront du mal à prendre forme ; au large, la neige flotte dans une lumière froide au-dessus de l’eau. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:04",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme, des flocons serrés effacent doucement les couleurs de la côte. Le souffle manque et les coques avanceront avec patience. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:05",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "L’horizon pâlit sous le passage de la neige. Côté vent, les voiles chercheront longtemps le moindre souffle utile. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:06",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le blanc gagne l’air sans fermer toute la vue. Les coques auront peu de force à tirer de l’air. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:07",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les flocons courent devant un large couleur d’acier ; pour les voiles, l’air manque de volonté pour faire vraiment chanter les voiles. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:poor:08",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon : la neige dessine un rideau clair sur la Manche. Le souffle reste trop mince pour réveiller franchement les coques. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:01",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, des flocons serrés effacent doucement les couleurs de la côte. L’air manque de volonté pour faire vraiment chanter les voiles. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:02",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "L’horizon pâlit sous le passage de la neige, tandis que le souffle reste trop mince pour réveiller franchement les coques. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:03",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Les voiles risquent de pendre sans trouver de quoi travailler ; au large, le blanc gagne l’air sans fermer toute la vue. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:04",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute, les flocons courent devant un large couleur d’acier. Le vent ne pousse presque rien, pas même l’impatience. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:05",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La neige dessine un rideau clair sur la Manche. Côté vent, le vent reste dans sa bannette et laisse les voiles molles. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:06",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’air hivernal se remplit de flocons devant la fenêtre. Le vent paresse et la toile ne trouvera guère de coffre. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:07",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La côte prend une allure blanche sous les passages neigeux ; pour les voiles, le vent se fait oublier et la navigation sera bien molle. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:mixed:08",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot : des grains de neige voilent par instants la ligne du large. L’air bouge à peine, juste assez pour faire frémir une écoute. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:01",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, les flocons courent devant un large couleur d’acier. Le vent se fait oublier et la navigation sera bien molle. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:02",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La neige dessine un rideau clair sur la Manche, tandis que l’air bouge à peine, juste assez pour faire frémir une écoute. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:03",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "L’air somnole encore au-dessus de l’eau ; au large, l’air hivernal se remplit de flocons devant la fenêtre. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:04",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon, la côte prend une allure blanche sous les passages neigeux. Le peu d’air promet surtout une glisse très lente. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:05",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Des grains de neige voilent par instants la ligne du large. Côté vent, le souffle est si discret qu’il faudra savourer chaque risée. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:06",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la fenêtre cadre un horizon froid traversé de blanc. Les voiles auront davantage envie de dormir que de porter. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:07",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Les flocons se mêlent aux embruns devant la Manche ; pour les voiles, le vent reste couché et les voiles auront du mal à prendre forme. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:good:08",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large : des flocons traversent la vue devant l’horizon. Le souffle manque et les coques avanceront avec patience. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:01",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la côte prend une allure blanche sous les passages neigeux. Le vent reste couché et les voiles auront du mal à prendre forme. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:02",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des grains de neige voilent par instants la ligne du large, tandis que le souffle manque et les coques avanceront avec patience. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:03",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Les voiles chercheront longtemps le moindre souffle utile ; au large, la fenêtre cadre un horizon froid traversé de blanc. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:04",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, les flocons se mêlent aux embruns devant la Manche. Les coques auront peu de force à tirer de l’air. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:05",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des flocons traversent la vue devant l’horizon. Côté vent, l’air manque de volonté pour faire vraiment chanter les voiles. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:06",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la neige blanchit l’air entre la côte et le large. Le souffle reste trop mince pour réveiller franchement les coques. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:07",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des grains hivernaux dansent derrière la vitre ; pour les voiles, les voiles risquent de pendre sans trouver de quoi travailler. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:calm:excellent:08",
      "weatherFamily": "snow",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme : le ciel laisse tomber des flocons jusque vers la Manche. Le vent ne pousse presque rien, pas même l’impatience. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:01",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Des grains hivernaux dansent derrière la vitre. Le petit air offre une navigation douce et peu physique. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:02",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le ciel laisse tomber des flocons jusque vers la Manche, tandis que l’air donne juste assez de vie aux voiles pour une sortie calme. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:03",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le petit vent promet davantage de finesse que de spectacle ; au large, la fenêtre montre un large piqué de blanc. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:04",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Par la barbe du vieux phare, la neige flotte dans une lumière froide au-dessus de l’eau. Le vent pousse gentiment, mais la glisse restera tranquille. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:05",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Des flocons serrés effacent doucement les couleurs de la côte. Côté vent, le souffle est propre mais encore un peu maigre. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:06",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’horizon pâlit sous le passage de la neige. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:07",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Dehors, le blanc gagne l’air sans fermer toute la vue ; pour les voiles, les coques avanceront proprement dans un souffle modeste. Reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:critical:08",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon : les flocons courent devant un large couleur d’acier. La toile recevra un souffle régulier mais sans grand coffre. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:01",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, la neige flotte dans une lumière froide au-dessus de l’eau. Les coques avanceront proprement dans un souffle modeste. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:02",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Des flocons serrés effacent doucement les couleurs de la côte, tandis que la toile recevra un souffle régulier mais sans grand coffre. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:03",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Un petit souffle remplit la toile sans lui donner beaucoup de nerf ; au large, l’horizon pâlit sous le passage de la neige. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:04",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Avant de toucher aux amarres, écoute, dehors, le blanc gagne l’air sans fermer toute la vue. Les voiles prendront forme, sans promettre une grande cavalcade. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:05",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Les flocons courent devant un large couleur d’acier. Côté vent, la toile travaillera doucement dans un air plutôt sage. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:06",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la neige dessine un rideau clair sur la Manche. Le vent se montre poli, presque trop pour les amateurs de vitesse. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:07",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "L’air hivernal se remplit de flocons devant la fenêtre ; pour les voiles, le vent reste léger et demandera de soigner chaque réglage. Laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:poor:08",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot : la côte prend une allure blanche sous les passages neigeux. Les voiles respireront doucement sans tirer fort sur les écoutes. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:01",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, le blanc gagne l’air sans fermer toute la vue. Le vent reste léger et demandera de soigner chaque réglage. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:02",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Les flocons courent devant un large couleur d’acier, tandis que les voiles respireront doucement sans tirer fort sur les écoutes. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:03",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "L’air suffit pour avancer doucement sans réveiller toute l’écume ; au large, la neige dessine un rideau clair sur la Manche. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:04",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon, l’air hivernal se remplit de flocons devant la fenêtre. Le vent accompagne les coques sans chercher à les lancer. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:05",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La côte prend une allure blanche sous les passages neigeux. Côté vent, le petit air offre une navigation douce et peu physique. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:06",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, des grains de neige voilent par instants la ligne du large. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:07",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "La fenêtre cadre un horizon froid traversé de blanc ; pour les voiles, le petit vent promet davantage de finesse que de spectacle. Tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:mixed:08",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large : les flocons se mêlent aux embruns devant la Manche. Le vent pousse gentiment, mais la glisse restera tranquille. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:01",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, l’air hivernal se remplit de flocons devant la fenêtre. Le petit vent promet davantage de finesse que de spectacle. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:02",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La côte prend une allure blanche sous les passages neigeux, tandis que le vent pousse gentiment, mais la glisse restera tranquille. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:03",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le souffle est propre mais encore un peu maigre ; au large, des grains de neige voilent par instants la ligne du large. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:04",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la fenêtre cadre un horizon froid traversé de blanc. Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:05",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Les flocons se mêlent aux embruns devant la Manche. Côté vent, les coques avanceront proprement dans un souffle modeste. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:06",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des flocons traversent la vue devant l’horizon. La toile recevra un souffle régulier mais sans grand coffre. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:07",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "La neige blanchit l’air entre la côte et le large ; pour les voiles, un petit souffle remplit la toile sans lui donner beaucoup de nerf. Mets les coques à l’eau, moussaillon, et profite sans oublier ta marge.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:good:08",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme : des grains hivernaux dansent derrière la vitre. Les voiles prendront forme, sans promettre une grande cavalcade. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:01",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la fenêtre cadre un horizon froid traversé de blanc. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:02",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les flocons se mêlent aux embruns devant la Manche, tandis que les voiles prendront forme, sans promettre une grande cavalcade. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:03",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La toile travaillera doucement dans un air plutôt sage ; au large, des flocons traversent la vue devant l’horizon. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:04",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche, la neige blanchit l’air entre la côte et le large. Le vent se montre poli, presque trop pour les amateurs de vitesse. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:05",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Des grains hivernaux dansent derrière la vitre. Côté vent, le vent reste léger et demandera de soigner chaque réglage. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:06",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le ciel laisse tomber des flocons jusque vers la Manche. Les voiles respireront doucement sans tirer fort sur les écoutes. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:07",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "La fenêtre montre un large piqué de blanc ; pour les voiles, l’air suffit pour avancer doucement sans réveiller toute l’écume. Largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:light:excellent:08",
      "weatherFamily": "snow",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot : la neige flotte dans une lumière froide au-dessus de l’eau. Le vent accompagne les coques sans chercher à les lancer. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:01",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la fenêtre montre un large piqué de blanc. Les voiles auront de quoi porter sans te demander les gros bras. Les amarres restent tournées, bonhomme, sans discussion de comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:02",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La neige flotte dans une lumière froide au-dessus de l’eau, tandis que la toile devrait chanter sans transformer la barre en combat. Le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:03",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "L’air est assez présent pour réveiller l’écume sans brutalité ; au large, des flocons serrés effacent doucement les couleurs de la côte. Les coques restent au sec, matelot, et cette décision ne se discute pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:04",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute, l’horizon pâlit sous le passage de la neige. L’air a juste assez de coffre pour faire chanter la toile. Aujourd’hui, tu restes à terre et tu laisses la Manche tranquille.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:05",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Dehors, le blanc gagne l’air sans fermer toute la vue. Côté vent, le vent travaille avec régularité sans chercher la bagarre. La voile ne sort pas de son sac, matelot, et c’est très bien ainsi.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:06",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les flocons courent devant un large couleur d’acier. Le vent donne du répondant tout en gardant de bonnes manières. Garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:07",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La neige dessine un rideau clair sur la Manche ; pour les voiles, le vent paraît taillé pour une glisse vive mais propre. Range la voile, moussaillon, cette sortie n’a pas assez de marge.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:critical:08",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot : l’air hivernal se remplit de flocons devant la fenêtre. Le vent offre de la puissance sans prendre le commandement. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:01",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’horizon pâlit sous le passage de la neige. Le vent paraît taillé pour une glisse vive mais propre. Le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:02",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Dehors, le blanc gagne l’air sans fermer toute la vue, tandis que le vent offre de la puissance sans prendre le commandement. Les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:03",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le vent tient sa ligne et remplit les voiles comme il faut ; au large, les flocons courent devant un large couleur d’acier. Je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:04",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon, la neige dessine un rideau clair sur la Manche. Le souffle est établi et devrait faire filer les coques proprement. Reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:05",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’air hivernal se remplit de flocons devant la fenêtre. Côté vent, les coques devraient accélérer sans mauvaise surprise dans les écoutes. Garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:06",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la côte prend une allure blanche sous les passages neigeux. L’air pousse franchement et laisse encore une belle marge. Mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:07",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Des grains de neige voilent par instants la ligne du large ; pour les voiles, les coques recevront un souffle utile, régulier et agréable. Je garderais la voile pliée, moussaillon, sans regret et sans bravade.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:poor:08",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large : la fenêtre cadre un horizon froid traversé de blanc. Les voiles trouveront un équilibre plaisant entre force et contrôle. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:01",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la neige dessine un rideau clair sur la Manche. Les coques recevront un souffle utile, régulier et agréable. La porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:02",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "L’air hivernal se remplit de flocons devant la fenêtre, tandis que les voiles trouveront un équilibre plaisant entre force et contrôle. La navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:03",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Les voiles seront bien nourries sans arracher la barre ; au large, la côte prend une allure blanche sous les passages neigeux. Ça peut se tenter avec réserve, matelot, mais garde le retour facile.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:04",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, des grains de neige voilent par instants la ligne du large. La toile trouvera une poussée franche et encore maîtrisable. Tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:05",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "La fenêtre cadre un horizon froid traversé de blanc. Côté vent, les voiles auront de quoi porter sans te demander les gros bras. Mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:06",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, les flocons se mêlent aux embruns devant la Manche. La toile devrait chanter sans transformer la barre en combat. Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:07",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Des flocons traversent la vue devant l’horizon ; pour les voiles, l’air est assez présent pour réveiller l’écume sans brutalité. Bosco te laisse essayer, moussaillon, mais la prudence tient la barre.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:mixed:08",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme : la neige blanchit l’air entre la côte et le large. L’air a juste assez de coffre pour faire chanter la toile. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:01",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, des grains de neige voilent par instants la ligne du large. L’air est assez présent pour réveiller l’écume sans brutalité. Va saluer le large, matelot, tout en restant le marin attentif que j’attends.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:02",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La fenêtre cadre un horizon froid traversé de blanc, tandis que l’air a juste assez de coffre pour faire chanter la toile. La navigation s’annonce plaisante, bonhomme, profite de ce que le large offre.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:03",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le vent travaille avec régularité sans chercher la bagarre ; au large, les flocons se mêlent aux embruns devant la Manche. Tu peux larguer les amarres, matelot, cette sortie se présente bien.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:04",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche, des flocons traversent la vue devant l’horizon. Le vent donne du répondant tout en gardant de bonnes manières. La sortie est favorable, bonhomme, alors navigue proprement et profite.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:05",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La neige blanchit l’air entre la côte et le large. Côté vent, le vent paraît taillé pour une glisse vive mais propre. Mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:06",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des grains hivernaux dansent derrière la vitre. Le vent offre de la puissance sans prendre le commandement. Tu peux pousser la porte, matelot, le large t’accueille correctement.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:07",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le ciel laisse tomber des flocons jusque vers la Manche ; pour les voiles, le vent tient sa ligne et remplit les voiles comme il faut. Prépare la voile, moussaillon, la Manche devrait être de bonne compagnie.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:good:08",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot : la fenêtre montre un large piqué de blanc. Le souffle est établi et devrait faire filer les coques proprement. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:01",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, des flocons traversent la vue devant l’horizon. Le vent tient sa ligne et remplit les voiles comme il faut. Mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:02",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La neige blanchit l’air entre la côte et le large, tandis que le souffle est établi et devrait faire filer les coques proprement. Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:03",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Les coques devraient accélérer sans mauvaise surprise dans les écoutes ; au large, des grains hivernaux dansent derrière la vitre. C’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:04",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde, le ciel laisse tomber des flocons jusque vers la Manche. L’air pousse franchement et laisse encore une belle marge. Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:05",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "La fenêtre montre un large piqué de blanc. Côté vent, les coques recevront un souffle utile, régulier et agréable. Le large te tend les bras, moussaillon, alors navigue et savoure chaque bord.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:06",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, la neige flotte dans une lumière froide au-dessus de l’eau. Les voiles trouveront un équilibre plaisant entre force et contrôle. Au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:07",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Des flocons serrés effacent doucement les couleurs de la côte ; pour les voiles, les voiles seront bien nourries sans arracher la barre. Prépare tout, moussaillon, la navigation promet un vrai beau moment.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:favorable:excellent:08",
      "weatherFamily": "snow",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot : l’horizon pâlit sous le passage de la neige. La toile trouvera une poussée franche et encore maîtrisable. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:01",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, des flocons serrés effacent doucement les couleurs de la côte. Les voiles auront du travail et le barreur davantage encore. Pas question de prendre le large, bonhomme, la prudence a tranché.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:02",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "L’horizon pâlit sous le passage de la neige, tandis que la toile va charger et chaque virement devra rester propre. La sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:03",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "L’air pousse avec caractère et réclame une marge généreuse ; au large, le blanc gagne l’air sans fermer toute la vue. Pas de mise à l’eau, matelot, Bosco préfère te revoir entier.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:04",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon, les flocons courent devant un large couleur d’acier. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Tu reportes la sortie, moussaillon, même si l’envie te démange.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:05",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La neige dessine un rideau clair sur la Manche. Côté vent, la toile sera puissante et chaque manœuvre demandera de l’anticipation. Aucun départ, matelot, le large attendra un jour plus honnête.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:06",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’air hivernal se remplit de flocons devant la fenêtre. La puissance est là, avec des coups de rein à surveiller. Tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:07",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La côte prend une allure blanche sous les passages neigeux ; pour les voiles, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Garde les coques loin du bord, matelot, le refus est net.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:critical:08",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large : des grains de neige voilent par instants la ligne du large. Le vent commence à hausser le ton autour des voiles. Tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas.",
      "decision": "refuse",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:01",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, les flocons courent devant un large couleur d’acier. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. La sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:02",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La neige dessine un rideau clair sur la Manche, tandis que le vent commence à hausser le ton autour des voiles. Reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:03",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le vent bombe le torse et réclamera des mains bien réveillées ; au large, l’air hivernal se remplit de flocons devant la fenêtre. Mieux vaut reporter, matelot, car le large ne propose rien d’assez propre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:04",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, la côte prend une allure blanche sous les passages neigeux. Le vent pousse franchement, alors les écoutes devront rester vivantes. Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:05",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Des grains de neige voilent par instants la ligne du large. Côté vent, le vent se fait physique et ne pardonnera pas une écoute oubliée. Laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:06",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la fenêtre cadre un horizon froid traversé de blanc. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:07",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les flocons se mêlent aux embruns devant la Manche ; pour les voiles, les coques trouveront de la vitesse, au prix d’une vigilance constante. Ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:poor:08",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme : des flocons traversent la vue devant l’horizon. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre.",
      "decision": "discouraged",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:01",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la côte prend une allure blanche sous les passages neigeux. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:02",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des grains de neige voilent par instants la ligne du large, tandis que les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:03",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "L’air a du coffre et la barre ne tolérera pas la distraction ; au large, la fenêtre cadre un horizon froid traversé de blanc. Si tu pars, matelot, fais court et surveille ce qui change autour de toi.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:04",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche, les flocons se mêlent aux embruns devant la Manche. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:05",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des flocons traversent la vue devant l’horizon. Côté vent, les voiles auront du travail et le barreur davantage encore. La sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:06",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, la neige blanchit l’air entre la côte et le large. La toile va charger et chaque virement devra rester propre. La sortie reste possible, bonhomme, à condition de garder une vraie marge.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:07",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des grains hivernaux dansent derrière la vitre ; pour les voiles, l’air pousse avec caractère et réclame une marge généreuse. Ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:mixed:08",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot : le ciel laisse tomber des flocons jusque vers la Manche. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir.",
      "decision": "cautious",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:01",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, les flocons se mêlent aux embruns devant la Manche. L’air pousse avec caractère et réclame une marge généreuse. Bosco ne te retient pas au quai, matelot, alors grée sans traîner.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:02",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Des flocons traversent la vue devant l’horizon, tandis que les voiles vont tirer fort, avec des reprises qui demandent du métier. Va faire chanter les voiles, bonhomme, le moment s’y prête joliment.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:03",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La toile sera puissante et chaque manœuvre demandera de l’anticipation ; au large, la neige blanchit l’air entre la côte et le large. Tu peux prendre le large, matelot, avec le sourire et l’œil ouvert.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:04",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde, des grains hivernaux dansent derrière la vitre. La puissance est là, avec des coups de rein à surveiller. Les coques peuvent sortir, bonhomme, avec une belle promenade en perspective.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:05",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le ciel laisse tomber des flocons jusque vers la Manche. Côté vent, le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Le quai peut te laisser filer, moussaillon, cette fenêtre est favorable.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:06",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, la fenêtre montre un large piqué de blanc. Le vent commence à hausser le ton autour des voiles. Bosco te donne son feu vert, bonhomme, pour une navigation bien menée.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:07",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "La neige flotte dans une lumière froide au-dessus de l’eau ; pour les voiles, le vent bombe le torse et réclamera des mains bien réveillées. Tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:good:08",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot : des flocons serrés effacent doucement les couleurs de la côte. Le vent pousse franchement, alors les écoutes devront rester vivantes. Tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes.",
      "decision": "favorable",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:01",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Des grains hivernaux dansent derrière la vitre. Le vent bombe le torse et réclamera des mains bien réveillées. Tu peux partir le cœur léger, matelot, tout se prête à une belle sortie.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:02",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le ciel laisse tomber des flocons jusque vers la Manche, tandis que le vent pousse franchement, alors les écoutes devront rester vivantes. Prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:03",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le vent se fait physique et ne pardonnera pas une écoute oubliée ; au large, la fenêtre montre un large piqué de blanc. Va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:04",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme, la neige flotte dans une lumière froide au-dessus de l’eau. Le souffle devient musclé, assez pour fatiguer un équipage distrait. File gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:05",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Des flocons serrés effacent doucement les couleurs de la côte. Côté vent, les coques trouveront de la vitesse, au prix d’une vigilance constante. Les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:06",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, l’horizon pâlit sous le passage de la neige. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:07",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Dehors, le blanc gagne l’air sans fermer toute la vue ; pour les voiles, l’air a du coffre et la barre ne tolérera pas la distraction. Laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:sporty:excellent:08",
      "weatherFamily": "snow",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon : les flocons courent devant un large couleur d’acier. Les coques peuvent filer vite, mais le souffle impose de la maîtrise. Cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques.",
      "decision": "excellent",
      "safetyPriority": false
    },
    {
      "id": "snow:dangerous:critical:01",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, le blanc gagne l’air sans fermer toute la vue. Le vent a franchi la limite où l’expérience remplace la prudence. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:02",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les flocons courent devant un large couleur d’acier, tandis que les voiles prendraient des claques que personne ne doit minimiser. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:03",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le vent mettrait l’équipage en lutte dès la mise à l’eau ; au large, la neige dessine un rideau clair sur la Manche. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:04",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche, l’air hivernal se remplit de flocons devant la fenêtre. Le vent frappe trop fort pour confier les coques au large. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:05",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La côte prend une allure blanche sous les passages neigeux. Côté vent, le vent cherche la bagarre et la barre n’a rien à y gagner. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:06",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, des grains de neige voilent par instants la ligne du large. Les coques seraient livrées à un souffle bien trop violent. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:07",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La fenêtre cadre un horizon froid traversé de blanc ; pour les voiles, la puissance du vent ne laisse plus la marge nécessaire. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:critical:08",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme : les flocons se mêlent aux embruns devant la Manche. Les rafales commandent désormais plus fort que le barreur. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:01",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, l’air hivernal se remplit de flocons devant la fenêtre. La puissance du vent ne laisse plus la marge nécessaire. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:02",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La côte prend une allure blanche sous les passages neigeux, tandis que les rafales commandent désormais plus fort que le barreur. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:03",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les rafales veulent arracher la barre et vider toute marge de sécurité ; au large, des grains de neige voilent par instants la ligne du large. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:04",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche, la fenêtre cadre un horizon froid traversé de blanc. Les rafales dépassent ce qu’une sortie prudente peut accepter. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:05",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Les flocons se mêlent aux embruns devant la Manche. Côté vent, les coups de vent arrivent avec trop de force pour sortir proprement. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:06",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, des flocons traversent la vue devant l’horizon. Les rafales peuvent coucher la toile avant même de laisser réagir. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:07",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "La neige blanchit l’air entre la côte et le large ; pour les voiles, le souffle est devenu assez violent pour imposer le quai. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:poor:08",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot : des grains hivernaux dansent derrière la vitre. La toile serait ingérable au moindre coup de travers. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:01",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre cadre un horizon froid traversé de blanc. Le souffle est devenu assez violent pour imposer le quai. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:02",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les flocons se mêlent aux embruns devant la Manche, tandis que la toile serait ingérable au moindre coup de travers. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:03",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les voiles recevraient une puissance brutale et difficile à contenir ; au large, des flocons traversent la vue devant l’horizon. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:04",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde, la neige blanchit l’air entre la côte et le large. La toile serait chargée au point de rendre chaque manœuvre risquée. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:05",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Des grains hivernaux dansent derrière la vitre. Côté vent, le vent a franchi la limite où l’expérience remplace la prudence. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:06",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel laisse tomber des flocons jusque vers la Manche. Les voiles prendraient des claques que personne ne doit minimiser. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:07",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "La fenêtre montre un large piqué de blanc ; pour les voiles, le vent mettrait l’équipage en lutte dès la mise à l’eau. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:mixed:08",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot : la neige flotte dans une lumière froide au-dessus de l’eau. Le vent frappe trop fort pour confier les coques au large. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:01",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, la neige blanchit l’air entre la côte et le large. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:02",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Des grains hivernaux dansent derrière la vitre, tandis que le vent frappe trop fort pour confier les coques au large. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:03",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Le vent cherche la bagarre et la barre n’a rien à y gagner ; au large, le ciel laisse tomber des flocons jusque vers la Manche. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:04",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme, la fenêtre montre un large piqué de blanc. Les coques seraient livrées à un souffle bien trop violent. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:05",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La neige flotte dans une lumière froide au-dessus de l’eau. Côté vent, la puissance du vent ne laisse plus la marge nécessaire. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:06",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des flocons serrés effacent doucement les couleurs de la côte. Les rafales commandent désormais plus fort que le barreur. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:07",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "L’horizon pâlit sous le passage de la neige ; pour les voiles, les rafales veulent arracher la barre et vider toute marge de sécurité. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:good:08",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon : dehors, le blanc gagne l’air sans fermer toute la vue. Les rafales dépassent ce qu’une sortie prudente peut accepter. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:01",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, la fenêtre montre un large piqué de blanc. Les rafales veulent arracher la barre et vider toute marge de sécurité. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:02",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La neige flotte dans une lumière froide au-dessus de l’eau, tandis que les rafales dépassent ce qu’une sortie prudente peut accepter. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:03",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les coups de vent arrivent avec trop de force pour sortir proprement ; au large, des flocons serrés effacent doucement les couleurs de la côte. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:04",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi, l’horizon pâlit sous le passage de la neige. Les rafales peuvent coucher la toile avant même de laisser réagir. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:05",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Dehors, le blanc gagne l’air sans fermer toute la vue. Côté vent, le souffle est devenu assez violent pour imposer le quai. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:06",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, les flocons courent devant un large couleur d’acier. La toile serait ingérable au moindre coup de travers. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:07",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La neige dessine un rideau clair sur la Manche ; pour les voiles, les voiles recevraient une puissance brutale et difficile à contenir. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "snow:dangerous:excellent:08",
      "weatherFamily": "snow",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors : l’air hivernal se remplit de flocons devant la fenêtre. La toile serait chargée au point de rendre chaque manœuvre risquée. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ],
  "storm": [
    {
      "id": "storm:calm:critical:01",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Des éclairs déchirent le ciel derrière la vitre. Les coques auront peu de force à tirer de l’air. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:02",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "L’orage ferme l’horizon et montre déjà les dents, tandis que l’air manque de volonté pour faire vraiment chanter les voiles. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:03",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le souffle reste trop mince pour réveiller franchement les coques ; au large, un ciel noir lance des éclairs au-dessus du large. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:04",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Viens voir l’horizon avec moi, le grain orageux avale la lumière sur la Manche. Les voiles risquent de pendre sans trouver de quoi travailler. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:05",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Dehors, l’orage roule sous un horizon menaçant. Côté vent, le vent ne pousse presque rien, pas même l’impatience. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:06",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les éclairs éclairent par coups un large devenu sombre. Le vent reste dans sa bannette et laisse les voiles molles. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:07",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le ciel orageux se referme brutalement sur la côte ; pour les voiles, le vent paresse et la toile ne trouvera guère de coffre. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:critical:08",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "critical",
      "text": "Le vieux Bosco a regardé dehors : un grain noir avance avec des lueurs d’éclair. Le vent se fait oublier et la navigation sera bien molle. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:01",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le grain orageux avale la lumière sur la Manche. Le vent paresse et la toile ne trouvera guère de coffre. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:02",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Dehors, l’orage roule sous un horizon menaçant, tandis que le vent se fait oublier et la navigation sera bien molle. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:03",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "L’air bouge à peine, juste assez pour faire frémir une écoute ; au large, les éclairs éclairent par coups un large devenu sombre. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:04",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Pose ton ciré une seconde, moussaillon, le ciel orageux se referme brutalement sur la côte. L’air somnole encore au-dessus de l’eau. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:05",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Un grain noir avance avec des lueurs d’éclair. Côté vent, le peu d’air promet surtout une glisse très lente. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:06",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la fenêtre cadre un horizon chargé d’orage. Le souffle est si discret qu’il faudra savourer chaque risée. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:07",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Les éclairs griffent un ciel devenu presque noir ; pour les voiles, les voiles auront davantage envie de dormir que de porter. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:poor:08",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "poor",
      "text": "Je garde un œil sur la fenêtre, bonhomme : la Manche disparaît sous la masse sombre de l’orage. Le vent reste couché et les voiles auront du mal à prendre forme. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:01",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, le ciel orageux se referme brutalement sur la côte. Les voiles auront davantage envie de dormir que de porter. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:02",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Un grain noir avance avec des lueurs d’éclair, tandis que le vent reste couché et les voiles auront du mal à prendre forme. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:03",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Le souffle manque et les coques avanceront avec patience ; au large, la fenêtre cadre un horizon chargé d’orage. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:04",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Écoute-moi bien, matelot, les éclairs griffent un ciel devenu presque noir. Les voiles chercheront longtemps le moindre souffle utile. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:05",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "La Manche disparaît sous la masse sombre de l’orage. Côté vent, les coques auront peu de force à tirer de l’air. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:06",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le grain orageux occupe tout le paysage du large. L’air manque de volonté pour faire vraiment chanter les voiles. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:07",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Dehors, le ciel menace et les éclairs répondent ; pour les voiles, le souffle reste trop mince pour réveiller franchement les coques. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:mixed:08",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "mixed",
      "text": "Avant de toucher aux amarres, écoute : l’horizon se contracte sous un orage bien installé. Les voiles risquent de pendre sans trouver de quoi travailler. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:01",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Derrière la vitre, les éclairs griffent un ciel devenu presque noir. Le souffle reste trop mince pour réveiller franchement les coques. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:02",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "La Manche disparaît sous la masse sombre de l’orage, tandis que les voiles risquent de pendre sans trouver de quoi travailler. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:03",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le vent ne pousse presque rien, pas même l’impatience ; au large, le grain orageux occupe tout le paysage du large. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:04",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Jette donc un œil vers le large, dehors, le ciel menace et les éclairs répondent. Le vent reste dans sa bannette et laisse les voiles molles. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:05",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "L’horizon se contracte sous un orage bien installé. Côté vent, le vent paresse et la toile ne trouvera guère de coffre. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:06",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un front noir traverse la vue avec des éclairs nets. Le vent se fait oublier et la navigation sera bien molle. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:07",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large ; pour les voiles, l’air bouge à peine, juste assez pour faire frémir une écoute. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:good:08",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "good",
      "text": "Regarde dehors, moussaillon : des éclairs déchirent le ciel derrière la vitre. L’air somnole encore au-dessus de l’eau. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:01",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, le ciel menace et les éclairs répondent. L’air bouge à peine, juste assez pour faire frémir une écoute. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:02",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "L’horizon se contracte sous un orage bien installé, tandis que l’air somnole encore au-dessus de l’eau. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:03",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le peu d’air promet surtout une glisse très lente ; au large, un front noir traverse la vue avec des éclairs nets. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:04",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Je te le dis sans détour, bonhomme, le ciel orageux montre sa colère jusque sur la ligne du large. Le souffle est si discret qu’il faudra savourer chaque risée. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:05",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Des éclairs déchirent le ciel derrière la vitre. Côté vent, les voiles auront davantage envie de dormir que de porter. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:06",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, l’orage ferme l’horizon et montre déjà les dents. Le vent reste couché et les voiles auront du mal à prendre forme. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:07",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Un ciel noir lance des éclairs au-dessus du large ; pour les voiles, le souffle manque et les coques avanceront avec patience. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:calm:excellent:08",
      "weatherFamily": "storm",
      "windBand": "calm",
      "scoreBand": "excellent",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le grain orageux avale la lumière sur la Manche. Les voiles chercheront longtemps le moindre souffle utile. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:01",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Derrière la vitre, un ciel noir lance des éclairs au-dessus du large. Le vent se montre poli, presque trop pour les amateurs de vitesse. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:02",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le grain orageux avale la lumière sur la Manche, tandis que le vent reste léger et demandera de soigner chaque réglage. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:03",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Les voiles respireront doucement sans tirer fort sur les écoutes ; au large, l’orage roule sous un horizon menaçant. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:04",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Pose ton ciré une seconde, moussaillon, les éclairs éclairent par coups un large devenu sombre. L’air suffit pour avancer doucement sans réveiller toute l’écume. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:05",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Le ciel orageux se referme brutalement sur la côte. Côté vent, le vent accompagne les coques sans chercher à les lancer. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:06",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, un grain noir avance avec des lueurs d’éclair. Le petit air offre une navigation douce et peu physique. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:07",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "La fenêtre cadre un horizon chargé d’orage ; pour les voiles, l’air donne juste assez de vie aux voiles pour une sortie calme. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:critical:08",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "critical",
      "text": "Je garde un œil sur la fenêtre, bonhomme : les éclairs griffent un ciel devenu presque noir. Le petit vent promet davantage de finesse que de spectacle. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:01",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Derrière la vitre, les éclairs éclairent par coups un large devenu sombre. L’air donne juste assez de vie aux voiles pour une sortie calme. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:02",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le ciel orageux se referme brutalement sur la côte, tandis que le petit vent promet davantage de finesse que de spectacle. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:03",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le vent pousse gentiment, mais la glisse restera tranquille ; au large, un grain noir avance avec des lueurs d’éclair. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:04",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Écoute-moi bien, matelot, la fenêtre cadre un horizon chargé d’orage. Le souffle est propre mais encore un peu maigre. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:05",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Les éclairs griffent un ciel devenu presque noir. Côté vent, les voiles trouveront de quoi porter, mais pas de quoi fanfaronner. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:06",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, la Manche disparaît sous la masse sombre de l’orage. Les coques avanceront proprement dans un souffle modeste. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:07",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Le grain orageux occupe tout le paysage du large ; pour les voiles, la toile recevra un souffle régulier mais sans grand coffre. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:poor:08",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "poor",
      "text": "Tonnerre de Brest : dehors, le ciel menace et les éclairs répondent. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:01",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la fenêtre cadre un horizon chargé d’orage. La toile recevra un souffle régulier mais sans grand coffre. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:02",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Les éclairs griffent un ciel devenu presque noir, tandis que un petit souffle remplit la toile sans lui donner beaucoup de nerf. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:03",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Les voiles prendront forme, sans promettre une grande cavalcade ; au large, la Manche disparaît sous la masse sombre de l’orage. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:04",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Jette donc un œil vers le large, le grain orageux occupe tout le paysage du large. La toile travaillera doucement dans un air plutôt sage. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:05",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Dehors, le ciel menace et les éclairs répondent. Côté vent, le vent se montre poli, presque trop pour les amateurs de vitesse. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:06",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’horizon se contracte sous un orage bien installé. Le vent reste léger et demandera de soigner chaque réglage. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:07",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Un front noir traverse la vue avec des éclairs nets ; pour les voiles, les voiles respireront doucement sans tirer fort sur les écoutes. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:mixed:08",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "mixed",
      "text": "Regarde dehors, moussaillon : le ciel orageux montre sa colère jusque sur la ligne du large. L’air suffit pour avancer doucement sans réveiller toute l’écume. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:01",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Derrière la vitre, le grain orageux occupe tout le paysage du large. Les voiles respireront doucement sans tirer fort sur les écoutes. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:02",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Dehors, le ciel menace et les éclairs répondent, tandis que l’air suffit pour avancer doucement sans réveiller toute l’écume. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:03",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le vent accompagne les coques sans chercher à les lancer ; au large, l’horizon se contracte sous un orage bien installé. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:04",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Je te le dis sans détour, bonhomme, un front noir traverse la vue avec des éclairs nets. Le petit air offre une navigation douce et peu physique. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:05",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large. Côté vent, l’air donne juste assez de vie aux voiles pour une sortie calme. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:06",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, des éclairs déchirent le ciel derrière la vitre. Le petit vent promet davantage de finesse que de spectacle. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:07",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "L’orage ferme l’horizon et montre déjà les dents ; pour les voiles, le vent pousse gentiment, mais la glisse restera tranquille. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:good:08",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "good",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : un ciel noir lance des éclairs au-dessus du large. Le souffle est propre mais encore un peu maigre. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:01",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, un front noir traverse la vue avec des éclairs nets. Le vent pousse gentiment, mais la glisse restera tranquille. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:02",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large, tandis que le souffle est propre mais encore un peu maigre. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:03",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Les voiles trouveront de quoi porter, mais pas de quoi fanfaronner ; au large, des éclairs déchirent le ciel derrière la vitre. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:04",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Je connais cette mine-là, matelot, l’orage ferme l’horizon et montre déjà les dents. Les coques avanceront proprement dans un souffle modeste. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:05",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Un ciel noir lance des éclairs au-dessus du large. Côté vent, la toile recevra un souffle régulier mais sans grand coffre. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:06",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, le grain orageux avale la lumière sur la Manche. Un petit souffle remplit la toile sans lui donner beaucoup de nerf. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:07",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Dehors, l’orage roule sous un horizon menaçant ; pour les voiles, les voiles prendront forme, sans promettre une grande cavalcade. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:light:excellent:08",
      "weatherFamily": "storm",
      "windBand": "light",
      "scoreBand": "excellent",
      "text": "Voyons ce que raconte la Manche : les éclairs éclairent par coups un large devenu sombre. La toile travaillera doucement dans un air plutôt sage. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:01",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Derrière la vitre, dehors, l’orage roule sous un horizon menaçant. L’air pousse franchement et laisse encore une belle marge. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:02",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les éclairs éclairent par coups un large devenu sombre, tandis que les coques recevront un souffle utile, régulier et agréable. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:03",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Les voiles trouveront un équilibre plaisant entre force et contrôle ; au large, le ciel orageux se referme brutalement sur la côte. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:04",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Écoute-moi bien, matelot, un grain noir avance avec des lueurs d’éclair. Les voiles seront bien nourries sans arracher la barre. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:05",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La fenêtre cadre un horizon chargé d’orage. Côté vent, la toile trouvera une poussée franche et encore maîtrisable. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:06",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, les éclairs griffent un ciel devenu presque noir. Les voiles auront de quoi porter sans te demander les gros bras. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:07",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "La Manche disparaît sous la masse sombre de l’orage ; pour les voiles, la toile devrait chanter sans transformer la barre en combat. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:critical:08",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "critical",
      "text": "Avant de toucher aux amarres, écoute : le grain orageux occupe tout le paysage du large. L’air est assez présent pour réveiller l’écume sans brutalité. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:01",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Derrière la vitre, un grain noir avance avec des lueurs d’éclair. La toile devrait chanter sans transformer la barre en combat. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:02",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "La fenêtre cadre un horizon chargé d’orage, tandis que l’air est assez présent pour réveiller l’écume sans brutalité. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:03",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’air a juste assez de coffre pour faire chanter la toile ; au large, les éclairs griffent un ciel devenu presque noir. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:04",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Jette donc un œil vers le large, la Manche disparaît sous la masse sombre de l’orage. Le vent travaille avec régularité sans chercher la bagarre. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:05",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Le grain orageux occupe tout le paysage du large. Côté vent, le vent donne du répondant tout en gardant de bonnes manières. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:06",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, le ciel menace et les éclairs répondent. Le vent paraît taillé pour une glisse vive mais propre. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:07",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "L’horizon se contracte sous un orage bien installé ; pour les voiles, le vent offre de la puissance sans prendre le commandement. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:poor:08",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "poor",
      "text": "Regarde dehors, moussaillon : un front noir traverse la vue avec des éclairs nets. Le vent tient sa ligne et remplit les voiles comme il faut. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:01",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, la Manche disparaît sous la masse sombre de l’orage. Le vent offre de la puissance sans prendre le commandement. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:02",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le grain orageux occupe tout le paysage du large, tandis que le vent tient sa ligne et remplit les voiles comme il faut. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:03",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le souffle est établi et devrait faire filer les coques proprement ; au large, le ciel menace et les éclairs répondent. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:04",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Je te le dis sans détour, bonhomme, l’horizon se contracte sous un orage bien installé. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:05",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Un front noir traverse la vue avec des éclairs nets. Côté vent, l’air pousse franchement et laisse encore une belle marge. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:06",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le ciel orageux montre sa colère jusque sur la ligne du large. Les coques recevront un souffle utile, régulier et agréable. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:07",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Des éclairs déchirent le ciel derrière la vitre ; pour les voiles, les voiles trouveront un équilibre plaisant entre force et contrôle. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:mixed:08",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "mixed",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : l’orage ferme l’horizon et montre déjà les dents. Les voiles seront bien nourries sans arracher la barre. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:01",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Derrière la vitre, l’horizon se contracte sous un orage bien installé. Les voiles trouveront un équilibre plaisant entre force et contrôle. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:02",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Un front noir traverse la vue avec des éclairs nets, tandis que les voiles seront bien nourries sans arracher la barre. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:03",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "La toile trouvera une poussée franche et encore maîtrisable ; au large, le ciel orageux montre sa colère jusque sur la ligne du large. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:04",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Je connais cette mine-là, matelot, des éclairs déchirent le ciel derrière la vitre. Les voiles auront de quoi porter sans te demander les gros bras. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:05",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "L’orage ferme l’horizon et montre déjà les dents. Côté vent, la toile devrait chanter sans transformer la barre en combat. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:06",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, un ciel noir lance des éclairs au-dessus du large. L’air est assez présent pour réveiller l’écume sans brutalité. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:07",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Le grain orageux avale la lumière sur la Manche ; pour les voiles, l’air a juste assez de coffre pour faire chanter la toile. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:good:08",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "good",
      "text": "Voyons ce que raconte la Manche : dehors, l’orage roule sous un horizon menaçant. Le vent travaille avec régularité sans chercher la bagarre. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:01",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Des éclairs déchirent le ciel derrière la vitre. L’air a juste assez de coffre pour faire chanter la toile. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:02",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "L’orage ferme l’horizon et montre déjà les dents, tandis que le vent travaille avec régularité sans chercher la bagarre. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:03",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le vent donne du répondant tout en gardant de bonnes manières ; au large, un ciel noir lance des éclairs au-dessus du large. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:04",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Approche un peu, matelot, le grain orageux avale la lumière sur la Manche. Le vent paraît taillé pour une glisse vive mais propre. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:05",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Dehors, l’orage roule sous un horizon menaçant. Côté vent, le vent offre de la puissance sans prendre le commandement. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:06",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, les éclairs éclairent par coups un large devenu sombre. Le vent tient sa ligne et remplit les voiles comme il faut. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:07",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Le ciel orageux se referme brutalement sur la côte ; pour les voiles, le souffle est établi et devrait faire filer les coques proprement. Range la voile, matelot, le refus est ferme et parfaitement sérieux.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:favorable:excellent:08",
      "weatherFamily": "storm",
      "windBand": "favorable",
      "scoreBand": "excellent",
      "text": "Laisse parler le vieux marin une seconde : un grain noir avance avec des lueurs d’éclair. Les coques devraient accélérer sans mauvaise surprise dans les écoutes. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:01",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Derrière la vitre, le ciel orageux se referme brutalement sur la côte. Le souffle devient musclé, assez pour fatiguer un équipage distrait. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:02",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Un grain noir avance avec des lueurs d’éclair, tandis que les coques trouveront de la vitesse, au prix d’une vigilance constante. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:03",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes ; au large, la fenêtre cadre un horizon chargé d’orage. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:04",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Jette donc un œil vers le large, les éclairs griffent un ciel devenu presque noir. L’air a du coffre et la barre ne tolérera pas la distraction. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:05",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "La Manche disparaît sous la masse sombre de l’orage. Côté vent, les coques peuvent filer vite, mais le souffle impose de la maîtrise. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:06",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, le grain orageux occupe tout le paysage du large. Les voiles auront du travail et le barreur davantage encore. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:07",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Dehors, le ciel menace et les éclairs répondent ; pour les voiles, la toile va charger et chaque virement devra rester propre. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:critical:08",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "critical",
      "text": "Regarde dehors, moussaillon : l’horizon se contracte sous un orage bien installé. L’air pousse avec caractère et réclame une marge généreuse. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:01",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Derrière la vitre, les éclairs griffent un ciel devenu presque noir. La toile va charger et chaque virement devra rester propre. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:02",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "La Manche disparaît sous la masse sombre de l’orage, tandis que l’air pousse avec caractère et réclame une marge généreuse. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:03",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Les voiles vont tirer fort, avec des reprises qui demandent du métier ; au large, le grain orageux occupe tout le paysage du large. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:04",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Je te le dis sans détour, bonhomme, dehors, le ciel menace et les éclairs répondent. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:05",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "L’horizon se contracte sous un orage bien installé. Côté vent, la puissance est là, avec des coups de rein à surveiller. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:06",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, un front noir traverse la vue avec des éclairs nets. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:07",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large ; pour les voiles, le vent commence à hausser le ton autour des voiles. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:poor:08",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "poor",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : des éclairs déchirent le ciel derrière la vitre. Le vent bombe le torse et réclamera des mains bien réveillées. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:01",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, dehors, le ciel menace et les éclairs répondent. Le vent commence à hausser le ton autour des voiles. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:02",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "L’horizon se contracte sous un orage bien installé, tandis que le vent bombe le torse et réclamera des mains bien réveillées. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:03",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Le vent pousse franchement, alors les écoutes devront rester vivantes ; au large, un front noir traverse la vue avec des éclairs nets. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:04",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Je connais cette mine-là, matelot, le ciel orageux montre sa colère jusque sur la ligne du large. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:05",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Des éclairs déchirent le ciel derrière la vitre. Côté vent, le souffle devient musclé, assez pour fatiguer un équipage distrait. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:06",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, l’orage ferme l’horizon et montre déjà les dents. Les coques trouveront de la vitesse, au prix d’une vigilance constante. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:07",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Un ciel noir lance des éclairs au-dessus du large ; pour les voiles, les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:mixed:08",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "mixed",
      "text": "Voyons ce que raconte la Manche : le grain orageux avale la lumière sur la Manche. L’air a du coffre et la barre ne tolérera pas la distraction. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:01",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Derrière la vitre, le ciel orageux montre sa colère jusque sur la ligne du large. Les voiles vont tracter fort, alors garde la barre et les écoutes prêtes. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:02",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Des éclairs déchirent le ciel derrière la vitre, tandis que l’air a du coffre et la barre ne tolérera pas la distraction. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:03",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les coques peuvent filer vite, mais le souffle impose de la maîtrise ; au large, l’orage ferme l’horizon et montre déjà les dents. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:04",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Approche un peu, matelot, un ciel noir lance des éclairs au-dessus du large. Les voiles auront du travail et le barreur davantage encore. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:05",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Le grain orageux avale la lumière sur la Manche. Côté vent, la toile va charger et chaque virement devra rester propre. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:06",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, l’orage roule sous un horizon menaçant. L’air pousse avec caractère et réclame une marge généreuse. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:07",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Les éclairs éclairent par coups un large devenu sombre ; pour les voiles, les voiles vont tirer fort, avec des reprises qui demandent du métier. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:good:08",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "good",
      "text": "Laisse parler le vieux marin une seconde : le ciel orageux se referme brutalement sur la côte. La toile sera puissante et chaque manœuvre demandera de l’anticipation. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:01",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, un ciel noir lance des éclairs au-dessus du large. Les voiles vont tirer fort, avec des reprises qui demandent du métier. Le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:02",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le grain orageux avale la lumière sur la Manche, tandis que la toile sera puissante et chaque manœuvre demandera de l’anticipation. Les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:03",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La puissance est là, avec des coups de rein à surveiller ; au large, l’orage roule sous un horizon menaçant. Tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:04",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Pas si vite, moussaillon, les éclairs éclairent par coups un large devenu sombre. Le vent donne une vraie navigation sportive sans offrir beaucoup de repos. Pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:05",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Le ciel orageux se referme brutalement sur la côte. Côté vent, le vent commence à hausser le ton autour des voiles. Tu restes à terre, matelot, même avec toute l’expérience du port.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:06",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, un grain noir avance avec des lueurs d’éclair. Le vent bombe le torse et réclamera des mains bien réveillées. Les amarres restent tournées, moussaillon, même si le reste semblait séduisant.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:07",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "La fenêtre cadre un horizon chargé d’orage ; pour les voiles, le vent pousse franchement, alors les écoutes devront rester vivantes. Reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:sporty:excellent:08",
      "weatherFamily": "storm",
      "windBand": "sporty",
      "scoreBand": "excellent",
      "text": "Garde une main sur ton enthousiasme : les éclairs griffent un ciel devenu presque noir. Le vent se fait physique et ne pardonnera pas une écoute oubliée. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:01",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Derrière la vitre, la fenêtre cadre un horizon chargé d’orage. Les rafales peuvent coucher la toile avant même de laisser réagir. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:02",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Les éclairs griffent un ciel devenu presque noir, tandis que le souffle est devenu assez violent pour imposer le quai. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:03",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "La toile serait ingérable au moindre coup de travers ; au large, la Manche disparaît sous la masse sombre de l’orage. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:04",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Je te le dis sans détour, bonhomme, le grain orageux occupe tout le paysage du large. Les voiles recevraient une puissance brutale et difficile à contenir. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:05",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Dehors, le ciel menace et les éclairs répondent. Côté vent, la toile serait chargée au point de rendre chaque manœuvre risquée. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:06",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Depuis le Tourbillon, l’horizon se contracte sous un orage bien installé. Le vent a franchi la limite où l’expérience remplace la prudence. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:07",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Un front noir traverse la vue avec des éclairs nets ; pour les voiles, les voiles prendraient des claques que personne ne doit minimiser. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:critical:08",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "critical",
      "text": "Le Tourbillon a sa fenêtre sur la Manche : le ciel orageux montre sa colère jusque sur la ligne du large. Le vent mettrait l’équipage en lutte dès la mise à l’eau. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:01",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Derrière la vitre, le grain orageux occupe tout le paysage du large. Les voiles prendraient des claques que personne ne doit minimiser. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:02",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Dehors, le ciel menace et les éclairs répondent, tandis que le vent mettrait l’équipage en lutte dès la mise à l’eau. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:03",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le vent frappe trop fort pour confier les coques au large ; au large, l’horizon se contracte sous un orage bien installé. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:04",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Je connais cette mine-là, matelot, un front noir traverse la vue avec des éclairs nets. Le vent cherche la bagarre et la barre n’a rien à y gagner. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:05",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large. Côté vent, les coques seraient livrées à un souffle bien trop violent. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:06",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Depuis le Tourbillon, des éclairs déchirent le ciel derrière la vitre. La puissance du vent ne laisse plus la marge nécessaire. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:07",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "L’orage ferme l’horizon et montre déjà les dents ; pour les voiles, les rafales commandent désormais plus fort que le barreur. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:poor:08",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "poor",
      "text": "Voyons ce que raconte la Manche : un ciel noir lance des éclairs au-dessus du large. Les rafales veulent arracher la barre et vider toute marge de sécurité. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:01",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Derrière la vitre, un front noir traverse la vue avec des éclairs nets. Les rafales commandent désormais plus fort que le barreur. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:02",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Le ciel orageux montre sa colère jusque sur la ligne du large, tandis que les rafales veulent arracher la barre et vider toute marge de sécurité. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:03",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Les rafales dépassent ce qu’une sortie prudente peut accepter ; au large, des éclairs déchirent le ciel derrière la vitre. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:04",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Approche un peu, matelot, l’orage ferme l’horizon et montre déjà les dents. Les coups de vent arrivent avec trop de force pour sortir proprement. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:05",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Un ciel noir lance des éclairs au-dessus du large. Côté vent, les rafales peuvent coucher la toile avant même de laisser réagir. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:06",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Depuis le Tourbillon, le grain orageux avale la lumière sur la Manche. Le souffle est devenu assez violent pour imposer le quai. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:07",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Dehors, l’orage roule sous un horizon menaçant ; pour les voiles, la toile serait ingérable au moindre coup de travers. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:mixed:08",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "mixed",
      "text": "Laisse parler le vieux marin une seconde : les éclairs éclairent par coups un large devenu sombre. Les voiles recevraient une puissance brutale et difficile à contenir. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:01",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Derrière la vitre, l’orage ferme l’horizon et montre déjà les dents. La toile serait ingérable au moindre coup de travers. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:02",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Un ciel noir lance des éclairs au-dessus du large, tandis que les voiles recevraient une puissance brutale et difficile à contenir. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:03",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "La toile serait chargée au point de rendre chaque manœuvre risquée ; au large, le grain orageux avale la lumière sur la Manche. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:04",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Pas si vite, moussaillon, dehors, l’orage roule sous un horizon menaçant. Le vent a franchi la limite où l’expérience remplace la prudence. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:05",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Les éclairs éclairent par coups un large devenu sombre. Côté vent, les voiles prendraient des claques que personne ne doit minimiser. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:06",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Depuis le Tourbillon, le ciel orageux se referme brutalement sur la côte. Le vent mettrait l’équipage en lutte dès la mise à l’eau. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:07",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Un grain noir avance avec des lueurs d’éclair ; pour les voiles, le vent frappe trop fort pour confier les coques au large. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:good:08",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "good",
      "text": "Garde une main sur ton enthousiasme : la fenêtre cadre un horizon chargé d’orage. Le vent cherche la bagarre et la barre n’a rien à y gagner. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:01",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Derrière la vitre, dehors, l’orage roule sous un horizon menaçant. Le vent frappe trop fort pour confier les coques au large. Garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:02",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les éclairs éclairent par coups un large devenu sombre, tandis que le vent cherche la bagarre et la barre n’a rien à y gagner. Pas une coque à l’eau, matelot, la sécurité commande le quai.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:03",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Les coques seraient livrées à un souffle bien trop violent ; au large, le ciel orageux se referme brutalement sur la côte. Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:04",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Le vieux Bosco a regardé dehors, un grain noir avance avec des lueurs d’éclair. La puissance du vent ne laisse plus la marge nécessaire. La sortie est refusée, moussaillon, et Bosco veut être parfaitement compris.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:05",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La fenêtre cadre un horizon chargé d’orage. Côté vent, les rafales commandent désormais plus fort que le barreur. Tu gardes tout le monde à terre, bonhomme, sans discuter davantage.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:06",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Depuis le Tourbillon, les éclairs griffent un ciel devenu presque noir. Les rafales veulent arracher la barre et vider toute marge de sécurité. La Manche attendra, moussaillon, tandis que toi tu restes bien au sec.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:07",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "La Manche disparaît sous la masse sombre de l’orage ; pour les voiles, les rafales dépassent ce qu’une sortie prudente peut accepter. Tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger.",
      "decision": "refuse",
      "safetyPriority": true
    },
    {
      "id": "storm:dangerous:excellent:08",
      "weatherFamily": "storm",
      "windBand": "dangerous",
      "scoreBand": "excellent",
      "text": "Viens voir l’horizon avec moi : le grain orageux occupe tout le paysage du large. Les coups de vent arrivent avec trop de force pour sortir proprement. Aucun départ, moussaillon, car l’humour s’arrête exactement ici.",
      "decision": "refuse",
      "safetyPriority": true
    }
  ]
};
