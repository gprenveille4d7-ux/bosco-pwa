import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

type SourceDomain = "marine" | "alpinisme" | "aviation";

type Principle = {
  id: string;
  domain: SourceDomain;
  action: string;
  reason: string;
};

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CORPUS_PATH = join(ROOT, "data/bosco/emile-advice.json");

const canonicalIds = new Set([
  "emile-courage-eyes-open",
  "emile-sea-listens",
  "emile-return-before-departure",
  "emile-postpone-to-return",
]);

const principles: Principle[] = [
  {
    id: "recent-marine-forecast",
    domain: "marine",
    action: "Consulte une prévision marine récente avant de décider",
    reason: "Un vieux bulletin peut cacher un changement déjà en route",
  },
  {
    id: "forecast-trend",
    domain: "marine",
    action: "Regarde la tendance autant que l’état annoncé au départ",
    reason: "Une mer encore sage peut se gâter pendant que tu es au large",
  },
  {
    id: "last-check-at-launch",
    domain: "marine",
    action: "Refais un point météo juste avant la mise à l’eau",
    reason: "La décision prise au chaud doit encore tenir devant la plage",
  },
  {
    id: "local-warnings",
    domain: "marine",
    action: "Respecte les avis locaux et les signaux du plan d’eau",
    reason: "Ceux qui voient la côte chaque jour connaissent ses mauvais tours",
  },
  {
    id: "wear-buoyancy",
    domain: "marine",
    action: "Enfile ton aide à la flottabilité avant de quitter la terre",
    reason: "Un gilet rangé ne soutient personne quand la chute surprend",
  },
  {
    id: "fit-buoyancy",
    domain: "marine",
    action: "Ajuste chaque gilet à la personne qui le porte",
    reason: "Un équipement trop lâche peut abandonner son marin au mauvais moment",
  },
  {
    id: "crew-equipment-brief",
    domain: "marine",
    action: "Montre à l’équipage où se trouve le matériel de sécurité et comment l’utiliser",
    reason: "Dans l’urgence, chercher remplace trop vite réfléchir",
  },
  {
    id: "communications-check",
    domain: "marine",
    action: "Teste ton moyen d’alerte et protège-le de l’eau",
    reason: "Une communication préparée vaut mieux qu’un téléphone noyé au fond d’une poche",
  },
  {
    id: "shore-contact",
    domain: "marine",
    action: "Préviens une personne à terre de ton parcours",
    reason: "Quelqu’un doit savoir où commencer à te chercher si le retour tarde",
  },
  {
    id: "return-time",
    domain: "marine",
    action: "Annonce une heure de retour et donne des nouvelles en cas de changement",
    reason: "Une alerte utile commence par une absence que quelqu’un sait reconnaître",
  },
  {
    id: "route-and-alternative",
    domain: "marine",
    action: "Prépare ton trajet principal et une solution plus courte",
    reason: "Le bon plan est celui qui laisse une porte ouverte au retour",
  },
  {
    id: "launch-landing-zones",
    domain: "marine",
    action: "Repère avant le départ les zones où tu peux rentrer ou accoster",
    reason: "Une côte connue offre des choix quand le vent ferme le chemin prévu",
  },
  {
    id: "craft-inspection",
    domain: "marine",
    action: "Inspecte coques, gréement, safrans et fixations avant la mise à l’eau",
    reason: "Une petite faiblesse à terre devient parfois une grosse avarie au large",
  },
  {
    id: "bungs-and-lines",
    domain: "marine",
    action: "Vérifie bouchons, nœuds et bouts avant de pousser les coques",
    reason: "Les oublis les plus simples savent gâcher les sorties les mieux préparées",
  },
  {
    id: "repair-kit",
    domain: "marine",
    action: "Emporte de quoi traiter les petites avaries que tu sais réellement réparer",
    reason: "Le bon matériel sert seulement quand la main connaît son usage",
  },
  {
    id: "spare-line",
    domain: "marine",
    action: "Garde un bout de secours accessible et correctement rangé",
    reason: "Une ligne libre peut sécuriser un gréement, un équipier ou un retour",
  },
  {
    id: "cold-sun-water",
    domain: "marine",
    action: "Protège-toi du froid, du soleil et du manque d’eau avant d’en ressentir les effets",
    reason: "Le corps fatigué prend de moins bonnes décisions",
  },
  {
    id: "crew-count",
    domain: "marine",
    action: "Compte les équipiers au départ, pendant les manœuvres et au retour",
    reason: "Sur l’eau, personne ne doit devenir une simple supposition",
  },
  {
    id: "assign-roles",
    domain: "marine",
    action: "Répartis les rôles avant la première manœuvre",
    reason: "Un équipage qui sait qui fait quoi réagit mieux quand le vent presse",
  },
  {
    id: "recovery-practice",
    domain: "marine",
    action: "Entraîne-toi au redressement et à la récupération dans des conditions faciles",
    reason: "Le geste appris au calme revient plus sûrement dans le désordre",
  },
  {
    id: "reduce-sail-early",
    domain: "marine",
    action: "Réduis la toile avant que le vent ne te l’impose",
    reason: "La manœuvre précoce est plus propre que la manœuvre arrachée",
  },
  {
    id: "lee-shore",
    domain: "marine",
    action: "Garde une marge loin d’une côte vers laquelle le vent te pousse",
    reason: "Une rive sous le vent retire vite les solutions",
  },
  {
    id: "traffic-and-rocks",
    domain: "marine",
    action: "Laisse de l’espace aux rochers, aux chenaux et aux bateaux plus contraints",
    reason: "La marge latérale achète du temps pour corriger une erreur",
  },
  {
    id: "weakest-crew-route",
    domain: "marine",
    action: "Choisis la sortie pour l’équipier le moins expérimenté",
    reason: "Le groupe ne gagne rien à laisser l’un des siens naviguer au-dessus de ses moyens",
  },
  {
    id: "navigation-backup",
    domain: "marine",
    action: "Ne confie jamais toute ta navigation à un seul appareil",
    reason: "Une batterie vide ne doit pas effacer la côte de ta tête",
  },
  {
    id: "battery-reserve",
    domain: "marine",
    action: "Préserve la batterie de tes moyens de navigation et d’alerte",
    reason: "L’énergie gardée pour le retour vaut mieux que l’écran brillant au départ",
  },
  {
    id: "visibility",
    domain: "marine",
    action: "Rends l’équipage et l’embarcation faciles à voir",
    reason: "Être repéré tôt laisse aux autres le temps de t’éviter ou de t’aider",
  },
  {
    id: "observe-beyond-forecast",
    domain: "marine",
    action: "Compare toujours la prévision avec le ciel, la mer et l’horizon réels",
    reason: "Le bulletin guide la décision, mais la fenêtre donne le dernier mot",
  },
  {
    id: "turn-before-deterioration",
    domain: "marine",
    action: "Rentre dès les premiers signes d’une dégradation durable",
    reason: "Attendre la preuve complète laisse souvent trop peu de marge",
  },
  {
    id: "early-alert",
    domain: "marine",
    action: "Demande de l’aide avant que la difficulté ne devienne une détresse",
    reason: "Une alerte précoce offre davantage de solutions à tout le monde",
  },
  {
    id: "stay-with-craft",
    domain: "marine",
    action: "Après un chavirage, reste avec l’embarcation si la situation le permet",
    reason: "Les coques se voient mieux qu’une tête isolée dans le clapot",
  },
  {
    id: "sobriety-rest",
    domain: "marine",
    action: "Pars reposé, sobre et capable de rester attentif",
    reason: "Le vent ne ralentit pas pour un marin dont les réflexes sont émoussés",
  },
  {
    id: "secure-gear",
    domain: "marine",
    action: "Arrime le matériel avant qu’il ne traverse le bateau",
    reason: "Un objet libre blesse, se perd ou gêne la manœuvre au pire moment",
  },
  {
    id: "hands-clear",
    domain: "marine",
    action: "Garde les doigts et les pieds hors des boucles et des zones de pincement",
    reason: "Un bout sous tension ne prévient pas avant de serrer",
  },
  {
    id: "righting-system",
    domain: "marine",
    action: "Connais le système de redressement de ton catamaran avant d’en avoir besoin",
    reason: "Une technique découverte dans l’eau coûte une énergie précieuse",
  },
  {
    id: "tide-current",
    domain: "marine",
    action: "Intègre marée et courant au trajet aller comme au trajet retour",
    reason: "Le même passage peut changer de caractère en quelques heures",
  },
  {
    id: "personal-limits",
    domain: "marine",
    action: "Fixe tes limites de vent et de mer quand tu es encore à terre",
    reason: "Une règle décidée au calme résiste mieux à l’envie du moment",
  },
  {
    id: "cancel-without-shame",
    domain: "marine",
    action: "Annule sans honte quand plusieurs doutes s’additionnent",
    reason: "Renoncer à une sortie protège toutes celles qui suivront",
  },
  {
    id: "debrief",
    domain: "marine",
    action: "Après le retour, reparle des écarts, des surprises et des bonnes décisions",
    reason: "Chaque sortie peut rendre la suivante plus sûre",
  },
  {
    id: "rinse-maintain",
    domain: "marine",
    action: "Rince, sèche et contrôle le matériel avant de le ranger",
    reason: "La sécurité du prochain départ se prépare à la fin de celui-ci",
  },
  {
    id: "turnaround-point",
    domain: "alpinisme",
    action: "Décide d’un point de demi-tour avant de partir",
    reason: "Une limite choisie à terre empêche l’envie de voler la marge du retour",
  },
  {
    id: "destination-optional",
    domain: "alpinisme",
    action: "Traite l’objectif comme une possibilité et le retour comme une obligation",
    reason: "Atteindre plus loin ne vaut rien si tu ne peux rentrer proprement",
  },
  {
    id: "escape-route",
    domain: "alpinisme",
    action: "Repère une voie de repli avant de t’engager",
    reason: "Le demi-tour devient difficile quand on découvre trop tard qu’il n’a pas de chemin",
  },
  {
    id: "changing-conditions",
    domain: "alpinisme",
    action: "Réévalue la sortie dès que les conditions réelles s’écartent du plan",
    reason: "Un itinéraire raisonnable le matin peut devenir mauvais une heure plus tard",
  },
  {
    id: "pace-weakest",
    domain: "alpinisme",
    action: "Règle l’allure sur la personne la plus fragile du bord",
    reason: "Un équipage étiré ou épuisé perd sa capacité à s’entraider",
  },
  {
    id: "fatigue-judgment",
    domain: "alpinisme",
    action: "Considère la fatigue comme un danger et non comme une simple gêne",
    reason: "Elle brouille les priorités bien avant de vider complètement les bras",
  },
  {
    id: "eat-drink-early",
    domain: "alpinisme",
    action: "Bois et mange avant que la faim ou la soif ne commandent",
    reason: "L’énergie entretenue garde la tête claire pour le retour",
  },
  {
    id: "time-margin",
    domain: "alpinisme",
    action: "Pars assez tôt pour conserver une vraie marge de temps",
    reason: "Une sortie menée sans réserve transforme le moindre retard en problème",
  },
  {
    id: "local-observation",
    domain: "alpinisme",
    action: "Cherche les observations locales les plus récentes avant de choisir ton parcours",
    reason: "La côte vécue aujourd’hui vaut davantage que le souvenir d’une belle sortie ancienne",
  },
  {
    id: "skill-over-gear",
    domain: "alpinisme",
    action: "Ne laisse pas le bon matériel te faire croire que tu maîtrises le mauvais temps",
    reason: "L’équipement complète l’expérience, il ne la remplace pas",
  },
  {
    id: "self-rescue-training",
    domain: "alpinisme",
    action: "Répète les gestes de secours avant de naviguer loin",
    reason: "Sous stress, le corps retrouve surtout ce qu’il a déjà pratiqué",
  },
  {
    id: "dont-follow-blindly",
    domain: "alpinisme",
    action: "Ne suis pas une autre embarcation sans comprendre son choix",
    reason: "Son équipage, son bateau et ses limites ne sont pas les tiens",
  },
  {
    id: "terrain-traps",
    domain: "alpinisme",
    action: "Repère les endroits où vent, courant et côte pourraient t’enfermer",
    reason: "Le danger vient souvent du piège qui retire les échappatoires",
  },
  {
    id: "warning-signs",
    domain: "alpinisme",
    action: "Prends au sérieux plusieurs petits signes défavorables",
    reason: "Les accidents se construisent souvent avec une chaîne de détails négligés",
  },
  {
    id: "route-change-reassess",
    domain: "alpinisme",
    action: "Quand le trajet change, recommence l’évaluation au lieu de prolonger l’ancien plan",
    reason: "Une nouvelle route apporte de nouveaux risques",
  },
  {
    id: "sunk-cost",
    domain: "alpinisme",
    action: "N’insiste pas seulement parce que les coques sont déjà à l’eau",
    reason: "Le temps dépensé ne rend jamais la suite plus sûre",
  },
  {
    id: "voice-concern",
    domain: "alpinisme",
    action: "Fais parler chaque équipier dès qu’un doute apparaît",
    reason: "Une inquiétude dite tôt peut éviter une décision solitaire et trop tardive",
  },
  {
    id: "buddy-check",
    domain: "alpinisme",
    action: "Fais vérifier ton équipement par un équipier et vérifie le sien",
    reason: "Deux regards attrapent mieux l’oubli que l’habitude",
  },
  {
    id: "team-capabilities",
    domain: "alpinisme",
    action: "Connais les capacités réelles de l’équipage avant de choisir la difficulté",
    reason: "Le meilleur parcours est celui que tout le monde peut encore gérer au retour",
  },
  {
    id: "reserve-strength",
    domain: "alpinisme",
    action: "Garde de la force pour une manœuvre imprévue et pour le retour",
    reason: "Dépenser toute son énergie à l’aller revient à naviguer à crédit",
  },
  {
    id: "turn-before-trap",
    domain: "alpinisme",
    action: "Fais demi-tour pendant que le choix reste simple",
    reason: "Le bon renoncement précède le moment où la mer décide à ta place",
  },
  {
    id: "simplify-uncertain",
    domain: "alpinisme",
    action: "Réduis l’ambition du parcours quand l’incertitude augmente",
    reason: "Moins tu sais, plus ta marge doit grandir",
  },
  {
    id: "objective-subjective",
    domain: "alpinisme",
    action: "Sépare ce que fait réellement la mer de ce que ton envie te raconte",
    reason: "Le désir de sortir sait maquiller un signal défavorable",
  },
  {
    id: "avoid-isolation",
    domain: "alpinisme",
    action: "Reste à portée d’aide quand les conditions deviennent incertaines",
    reason: "L’isolement transforme une petite avarie en longue épreuve",
  },
  {
    id: "stable-onboard-movement",
    domain: "alpinisme",
    action: "Déplace-toi bas, lentement et avec un appui sûr sur le bateau",
    reason: "Une manœuvre stable évite qu’un simple déséquilibre crée l’urgence",
  },
  {
    id: "layer-clothing",
    domain: "alpinisme",
    action: "Habille-toi en couches adaptées à l’eau et au refroidissement",
    reason: "Sur un petit bateau, le vent vole vite la chaleur d’un vêtement mouillé",
  },
  {
    id: "emergency-protection",
    domain: "alpinisme",
    action: "Garde une protection thermique de secours au sec",
    reason: "Un retour retardé peut refroidir même un équipage parti sous le soleil",
  },
  {
    id: "paper-landmarks",
    domain: "alpinisme",
    action: "Conserve des repères simples utilisables sans écran",
    reason: "La panne d’un appareil ne doit pas devenir la perte de ta route",
  },
  {
    id: "plan-change-contact",
    domain: "alpinisme",
    action: "Informe la terre quand tu changes franchement de parcours",
    reason: "Un plan de secours n’aide que s’il correspond encore à ta position",
  },
  {
    id: "near-miss-learning",
    domain: "alpinisme",
    action: "Étudie les presque-accidents avec autant de sérieux que les avaries",
    reason: "Ce qui s’est bien terminé peut tout de même révéler une mauvaise habitude",
  },
  {
    id: "minimums-ashore",
    domain: "aviation",
    action: "Écris tes limites personnelles avant de regarder l’envie de sortir",
    reason: "Une règle préparée résiste mieux aux excuses du dernier moment",
  },
  {
    id: "four-risk-families",
    domain: "aviation",
    action: "Évalue séparément le marin, le bateau, l’environnement et la pression du programme",
    reason: "Découper le risque empêche un beau ciel de cacher un équipage fatigué",
  },
  {
    id: "fitness-check",
    domain: "aviation",
    action: "Vérifie maladie, médicaments, stress, alcool, fatigue et alimentation avant de partir",
    reason: "La sécurité commence aussi dans l’état du marin",
  },
  {
    id: "checklist",
    domain: "aviation",
    action: "Utilise une courte liste de contrôle à chaque départ",
    reason: "La mémoire enthousiaste oublie précisément les gestes les plus familiers",
  },
  {
    id: "quiet-critical-maneuvers",
    domain: "aviation",
    action: "Évite les conversations inutiles pendant les mises à l’eau et les manœuvres délicates",
    reason: "L’attention partagée manque vite au geste prioritaire",
  },
  {
    id: "external-pressure",
    domain: "aviation",
    action: "Décide sans céder au rendez-vous, au public ou à l’impatience des autres",
    reason: "Aucun programme à terre ne rend la mer plus clémente",
  },
  {
    id: "plan-b-c",
    domain: "aviation",
    action: "Prépare un plan court, un plan de repli et un arrêt complet",
    reason: "Plusieurs options évitent de défendre une seule mauvaise idée",
  },
  {
    id: "resource-reserve",
    domain: "aviation",
    action: "Garde des réserves de temps, d’énergie et de batterie",
    reason: "Une marge disponible absorbe les retards et les erreurs sans créer d’urgence",
  },
  {
    id: "conservative-weather-limits",
    domain: "aviation",
    action: "Choisis des limites météo plus prudentes que ton maximum théorique",
    reason: "La compétence du jour compte davantage que la meilleure performance passée",
  },
  {
    id: "instruments-and-senses",
    domain: "aviation",
    action: "Croise les indications de tes instruments avec ce que tu observes",
    reason: "Un chiffre isolé ou une impression seule peut tromper",
  },
  {
    id: "continuation-bias",
    domain: "aviation",
    action: "Interromps la sortie quand tu te surprends à chercher seulement des raisons de continuer",
    reason: "L’entêtement se déguise souvent en optimisme",
  },
  {
    id: "device-advises",
    domain: "aviation",
    action: "Laisse les appareils t’informer sans leur abandonner la décision",
    reason: "Un écran ne ressent ni la fatigue de l’équipage ni le clapot sous les coques",
  },
  {
    id: "control-position-alert",
    domain: "aviation",
    action: "En difficulté, garde d’abord le contrôle du bateau, situe-toi puis alerte",
    reason: "L’ordre des priorités empêche un problème d’en créer deux autres",
  },
  {
    id: "early-emergency",
    domain: "aviation",
    action: "Annonce clairement la difficulté avant d’être débordé",
    reason: "Les secours préfèrent une information précoce à un silence héroïque",
  },
  {
    id: "use-all-crew",
    domain: "aviation",
    action: "Utilise les yeux, les mains et l’expérience de tout l’équipage",
    reason: "Un bon chef de bord ne confond pas autorité et solitude",
  },
  {
    id: "closed-loop-communication",
    domain: "aviation",
    action: "Fais répéter les consignes importantes pendant les manœuvres",
    reason: "Une instruction comprise vaut mieux qu’un ordre simplement entendu",
  },
  {
    id: "prebrief-problems",
    domain: "aviation",
    action: "Décide avant le départ quoi faire en cas de chavirage, d’avarie ou de séparation",
    reason: "Le plan préparé raccourcit l’hésitation quand le calme disparaît",
  },
  {
    id: "one-change",
    domain: "aviation",
    action: "Ne change qu’un élément à la fois quand tu cherches l’origine d’un problème",
    reason: "Une correction ordonnée évite d’ajouter une panne à l’avarie",
  },
  {
    id: "stabilize-first",
    domain: "aviation",
    action: "Stabilise le bateau avant de dépanner ou de discuter",
    reason: "La priorité reste de conserver une situation maîtrisable",
  },
  {
    id: "craft-limitations",
    domain: "aviation",
    action: "Respecte les limites du bateau même si l’équipage se sent fort",
    reason: "La confiance humaine ne renforce ni une coque ni un gréement",
  },
  {
    id: "recent-practice",
    domain: "aviation",
    action: "Adapte la sortie à la fraîcheur réelle de ton entraînement",
    reason: "Une compétence peu pratiquée revient moins vite quand le vent monte",
  },
  {
    id: "launch-recovery-performance",
    domain: "aviation",
    action: "Évalue la mise à l’eau et surtout le retour avant de choisir le large",
    reason: "Une plage facile au départ peut devenir exigeante avec vent, vagues ou fatigue",
  },
  {
    id: "daylight-margin",
    domain: "aviation",
    action: "Garde assez de lumière pour un retour plus lent que prévu",
    reason: "La nuit ne négocie pas avec une manœuvre retardée",
  },
  {
    id: "alternate-landing",
    domain: "aviation",
    action: "Connais au moins un point de retour différent de la plage prévue",
    reason: "Une solution de rechange transforme un obstacle local en simple détour",
  },
  {
    id: "familiar-equipment",
    domain: "aviation",
    action: "N’embarque pas un équipement essentiel sans l’avoir essayé à terre",
    reason: "Le large n’est pas l’endroit pour découvrir un mode d’emploi",
  },
  {
    id: "situational-awareness",
    domain: "aviation",
    action: "Garde en tête ta position, l’évolution du ciel, le trafic et l’état de l’équipage",
    reason: "La vigilance utile regarde plusieurs horizons à la fois",
  },
  {
    id: "cross-check",
    domain: "aviation",
    action: "Fais confirmer les informations qui changent la décision",
    reason: "Une erreur importante mérite toujours un second regard",
  },
  {
    id: "ask-experienced",
    domain: "aviation",
    action: "Demande l’avis d’un marin plus expérimenté quand la situation dépasse tes habitudes",
    reason: "La prudence sait emprunter l’expérience des autres",
  },
  {
    id: "log-defects",
    domain: "aviation",
    action: "Note les défauts repérés et corrige-les avant la prochaine sortie",
    reason: "Une petite anomalie oubliée revient souvent plus grande",
  },
  {
    id: "stop-rule",
    domain: "aviation",
    action: "Quand une limite de sécurité est franchie, arrête la discussion et applique le repli prévu",
    reason: "Une règle n’est utile que si elle survit à l’envie de continuer",
  },
];

const templates: Array<(action: string, reason: string) => string> = [
  (action, reason) => `${action}. ${reason}.`,
  (action, reason) => `Matelot, ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${reason}. Alors ${lowerFirst(action)}, sans marchander avec la prudence.`,
  (action, reason) => `Émile tient à cette règle : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `Avant de larguer les amarres, ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `Retiens ceci, moussaillon : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${action}; ${lowerFirst(reason)}. Voilà une habitude de marin qui ramène au port.`,
  (action, reason) => `Un vieux marin ne laisse pas ce point au hasard : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${reason}. C’est pourquoi Émile te donne cette consigne : ${lowerFirst(action)}.`,
  (action, reason) => `La bonne sortie commence par une règle simple : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `Par ma vieille ancre, ${lowerFirst(action)} ! ${reason}.`,
  (action, reason) => `${action}. Sur l’eau, ${lowerFirst(reason)}.`,
  (action, reason) => `Émile préfère prévenir que réparer : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${reason}. Garde donc ce réflexe : ${lowerFirst(action)}.`,
  (action, reason) => `Pour revenir avec le sourire, ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `Ne pousse pas les coques avant d’avoir retenu ceci : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${action}. Ce n’est pas de la crainte, matelot : ${lowerFirst(reason)}.`,
  (action, reason) => `Bosco l’a appris d’Émile : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${reason}. Un matelot avisé retient donc ceci : ${lowerFirst(action)}.`,
  (action, reason) => `Fais-en une habitude de bord : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `La mer laisse moins de regrets à celui qui pense au retour : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${action}. Si l’envie proteste, rappelle-lui ceci : ${lowerFirst(reason)}.`,
  (action, reason) => `Écoute bien, matelot : ${lowerFirst(action)}. ${reason}.`,
  (action, reason) => `${reason}. Voilà la règle à suivre : ${lowerFirst(action)}.`,
  (action, reason) => `Avant le départ, grave cette règle dans ta tête : ${lowerFirst(action)}. ${reason}.`,
];

function lowerFirst(text: string): string {
  return text.charAt(0).toLocaleLowerCase("fr-FR") + text.slice(1);
}

function sourceMeta(domain: SourceDomain) {
  if (domain === "marine") {
    return {
      provenance: "Sagesse maritime — principe de sécurité adapté",
      sourceExcerpt:
        "Adaptation originale fondée sur les recommandations de préparation et de sécurité en plaisance de la SNSM.",
    };
  }
  if (domain === "alpinisme") {
    return {
      provenance: "Sagesse maritime — principe d’alpinisme adapté",
      sourceExcerpt:
        "Adaptation maritime originale d’un principe de préparation, de marge et de renoncement documenté par la FFCAM.",
    };
  }
  return {
    provenance: "Sagesse maritime — principe d’aviation adapté",
    sourceExcerpt:
      "Adaptation maritime originale d’un principe de décision, de limites personnelles ou de gestion du risque documenté par la FAA et l’EASA.",
  };
}

if (principles.length !== 100) {
  throw new Error(`100 principes attendus, ${principles.length} reçus.`);
}

const domainCounts = principles.reduce<Record<SourceDomain, number>>(
  (counts, principle) => {
    counts[principle.domain] += 1;
    return counts;
  },
  { marine: 0, alpinisme: 0, aviation: 0 },
);
if (
  domainCounts.marine !== 40 ||
  domainCounts.alpinisme !== 30 ||
  domainCounts.aviation !== 30
) {
  throw new Error(`Répartition invalide : ${JSON.stringify(domainCounts)}`);
}

const existing = JSON.parse(readFileSync(CORPUS_PATH, "utf8")) as {
  advices: Array<Record<string, unknown> & { id: string }>;
};
const canonical = existing.advices.filter((advice) => canonicalIds.has(advice.id));
if (canonical.length !== 4) {
  throw new Error(`4 conseils canoniques attendus, ${canonical.length} reçus.`);
}

const generated = Array.from({ length: 500 }, (_, sequenceIndex) => {
    const principleIndex = (sequenceIndex * 37) % principles.length;
    const variantIndex = Math.floor(sequenceIndex / principles.length);
    const principle = principles[principleIndex];
    const templateIndex = (principleIndex * 7 + variantIndex * 11) % templates.length;
    const text = templates[templateIndex](principle.action, principle.reason);
    const source = sourceMeta(principle.domain);
    return {
      id: `emile-${principle.domain}-${principle.id}-${String(variantIndex + 1).padStart(2, "0")}`,
      text,
      kind: "paraphrase",
      provenance: source.provenance,
      sourceExcerpt: source.sourceExcerpt,
      sourceDomain: principle.domain,
      principleId: principle.id,
    };
  });

const output = {
  schemaVersion: "2.0.0",
  corpusId: "emile-maritime-wisdom-v2-504",
  source: "Corpus original Bosco : 4 conseils canoniques + 500 adaptations maritimes",
  policy:
    "Les adaptations sont des formulations originales. Elles transposent à la sortie en mer des principes de sécurité documentés en navigation, alpinisme et aviation, sans reproduire de citation externe.",
  sources: [
    {
      domain: "marine",
      organisation: "SNSM",
      url: "https://www.snsm.org/conseil/navigation/plaisanciers-preparez-votre-sortie-en-mer/",
      principles:
        "Préparation de la sortie, météo, équipement individuel de flottabilité, moyens d’alerte, information d’un proche et limites du bateau.",
    },
    {
      domain: "alpinisme",
      organisation: "FFCAM",
      url: "https://www.ffcam.fr/tzr/scripts/downloader2.php?filename=T004%2Ffichier%2Fca%2F29%2F48iajf6mv38g&mime=application%2Fpdf&originalname=Recommandations_pratique_et_encadrement_en_alpinisme.pdf",
      principles:
        "Préparation, évolution des conditions, marge horaire, adaptation au groupe, solution de repli et capacité à renoncer.",
    },
    {
      domain: "aviation",
      organisation: "FAA",
      url: "https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf",
      principles:
        "Décision structurée, listes de contrôle, limites personnelles, pression extérieure, état physique et mental, plans de repli et gestion des ressources.",
    },
    {
      domain: "aviation",
      organisation: "EASA",
      url: "https://www.easa.europa.eu/en/domains/general-aviation/flying-safely/coping-weather-vfr2imc",
      principles:
        "Limites météo prudentes, adaptation au niveau réel de compétence et report lorsque les conditions dépassent ces limites.",
    },
  ],
  advices: [...canonical, ...generated],
};

writeFileSync(CORPUS_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(
  JSON.stringify({
    canonical: canonical.length,
    generated: generated.length,
    total: output.advices.length,
    domains: {
      marine: domainCounts.marine * 5,
      alpinisme: domainCounts.alpinisme * 5,
      aviation: domainCounts.aviation * 5,
    },
  }),
);
