import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outputDirectory = join(root, "data", "bosco", "dialogues-v23");

const weatherFamilies = [
  "clear",
  "mainly-clear",
  "partly-cloudy",
  "overcast",
  "fog",
  "drizzle",
  "rain",
  "heavy-rain",
  "snow",
  "storm",
];

const windBands = ["calm", "light", "favorable", "sporty", "dangerous"];
const scoreBands = ["critical", "poor", "mixed", "good", "excellent"];

const weatherObservations = {
  clear: [
    "l’horizon s’ouvre net derrière la vitre",
    "le ciel a débarrassé le large de ses rideaux",
    "la lumière découpe franchement la ligne d’horizon",
    "le large se montre sans un nuage pour lui barrer la route",
    "la côte baigne dans une clarté qui ne cache rien",
    "le ciel est grand ouvert au-dessus de la Manche",
    "l’horizon file droit sous une lumière bien propre",
    "dehors, le bleu laisse voir le large jusqu’au bout",
    "la fenêtre donne sur un ciel lavé et une vue dégagée",
    "la lumière court librement sur tout l’horizon",
    "le ciel ne garde aucun recoin sombre au-dessus de l’eau",
    "le large apparaît franc et lumineux depuis le Tourbillon",
    "la ligne du large ressort nette sous un ciel sans encombre",
    "dehors, la clarté donne envie de pousser la porte",
    "la Manche montre un visage clair jusque vers l’horizon",
    "le ciel ouvre grand la route du regard vers le large",
  ],
  "mainly-clear": [
    "le ciel reste largement ouvert malgré quelques passages",
    "quelques nuages flânent, mais l’horizon garde toute sa lumière",
    "le bleu tient la plus grande place derrière la vitre",
    "de rares nuages traversent un ciel qui reste accueillant",
    "la lumière domine encore les petits morceaux de gris",
    "le large reste bien visible sous quelques nuages égarés",
    "le ciel laisse passer de larges trouées claires",
    "quelques voiles de nuages glissent sans fermer l’horizon",
    "la côte reçoit encore une lumière franche entre deux passages",
    "le bleu résiste sans peine aux nuages qui se promènent",
    "l’horizon demeure ouvert sous un ciel à peine occupé",
    "dehors, les nuages restent trop dispersés pour gâcher la vue",
    "la Manche garde de belles éclaircies au-dessus du large",
    "le ciel joue avec quelques ombres sans perdre sa clarté",
    "la fenêtre montre surtout du bleu et quelques moutons gris",
    "la lumière trouve largement son chemin jusqu’à l’eau",
  ],
  "partly-cloudy": [
    "les nuages et la lumière se partagent l’horizon",
    "le ciel alterne éclaircies franches et passages plus gris",
    "des ombres courent sur le large entre deux trouées claires",
    "la Manche change de couleur au passage des nuages",
    "le bleu apparaît puis se range derrière de gros nuages",
    "la fenêtre montre un ciel partagé, jamais tout à fait sombre",
    "la lumière revient par plaques sur la ligne du large",
    "les nuages avancent en laissant encore de belles ouvertures",
    "l’horizon passe du clair au gris sans disparaître",
    "le ciel hésite entre sa veste bleue et son manteau gris",
    "dehors, les éclaircies se faufilent entre des nuages bien présents",
    "la côte reçoit tour à tour lumière vive et ombre douce",
    "le large reste lisible sous un ciel qui change souvent de mine",
    "des pans de bleu découpent encore la couverture nuageuse",
    "la lumière et les nuages jouent à se voler l’horizon",
    "le ciel garde assez d’ouvertures pour éclairer la Manche",
  ],
  overcast: [
    "un plafond gris ferme le ciel derrière la vitre",
    "la lumière reste plate sous une couverture bien serrée",
    "le ciel bas donne au large une mine renfrognée",
    "l’horizon se dessine sous un manteau gris uniforme",
    "dehors, le ciel a tiré son rideau couleur d’étain",
    "la Manche porte une lumière sourde sous les nuages",
    "le gris tient tout le ciel sans laisser de vraie trouée",
    "la fenêtre ouvre sur un horizon terne mais encore lisible",
    "les nuages ont soudé leurs rangs au-dessus du large",
    "le ciel reste fermé, lourd de gris mais sans autre menace",
    "la côte manque de lumière sous un plafond bien bas",
    "le large prend une couleur d’ardoise sous le ciel couvert",
    "aucune éclaircie ne perce vraiment la couverture grise",
    "dehors, la journée semble avoir oublié d’allumer la lumière",
    "l’horizon garde une mine sombre sous les nuages tassés",
    "le ciel uniforme écrase doucement les couleurs de la Manche",
  ],
  fog: [
    "la brume efface une bonne partie de l’horizon",
    "le brouillard avale le large au-delà de la vitre",
    "la côte disparaît vite dans un voile de brume blanche",
    "l’horizon se perd dans une brume épaisse",
    "le brouillard gomme les repères les uns après les autres",
    "la Manche cache ses distances derrière un rideau de brouillard",
    "la brume raccourcit sérieusement la vue vers le large",
    "dehors, la brume dissout les contours avant l’horizon",
    "le brouillard laisse à peine deviner la ligne du large",
    "la fenêtre montre un brouillard blanc où les repères s’effacent",
    "la brume enveloppe la côte et brouille les distances",
    "l’horizon a disparu derrière une brume bien tenace",
    "le large se cache presque entièrement dans le brouillard",
    "les repères de côte se perdent très vite dans la brume",
    "dehors, le brouillard blanc rend chaque distance trompeuse",
    "le brouillard ferme la vue bien avant le large",
  ],
  drizzle: [
    "la bruine perle finement sur toute la vitre",
    "un crachin léger voile la lumière du large",
    "de petites gouttes ternissent doucement l’horizon",
    "la bruine mouille le décor sans fermer complètement la vue",
    "un fin crachin accroche la lumière au-dessus de la Manche",
    "la vitre se couvre de perles sous une humidité tenace",
    "dehors, la bruine grise les couleurs sans avaler l’horizon",
    "un voile humide flotte entre la côte et le large",
    "le crachin dessine de fines traces sur la fenêtre",
    "la bruine s’installe doucement sur un horizon encore visible",
    "de petites gouttes brouillent par moments la ligne du large",
    "l’humidité colle au paysage sous un crachin discret",
    "la fenêtre brille de gouttelettes devant un ciel humide",
    "la bruine adoucit tous les contours de la Manche",
    "un crachin serré mais fin accompagne la vue vers le large",
    "dehors, l’air humide laisse un voile léger sur l’horizon",
  ],
  rain: [
    "la pluie raye franchement la vitre devant le large",
    "une pluie installée assombrit la ligne d’horizon",
    "les gouttes descendent en file serrée sur la fenêtre",
    "la pluie mouille tout le paysage sans cacher entièrement la côte",
    "dehors, la pluie tient bon au-dessus de la Manche",
    "l’horizon reste visible entre les traînées de pluie",
    "la fenêtre ruisselle sous une pluie qui a pris ses habitudes",
    "les gouttes brouillent le large par passages réguliers",
    "la pluie donne à la côte une couleur sombre et luisante",
    "un ciel humide verse sa pluie jusque vers l’horizon",
    "la Manche se dessine derrière un rideau de gouttes",
    "la pluie s’étire sur la vitre et ternit la lumière",
    "dehors, l’eau tombe assez pour rendre le décor bien gris",
    "la ligne du large tremble derrière les traces de pluie",
    "la pluie occupe le paysage sans l’effacer complètement",
    "les gouttes épaisses marquent la fenêtre face à la Manche",
  ],
  "heavy-rain": [
    "un rideau de forte pluie mange une partie de l’horizon",
    "la pluie battante brouille sérieusement la vue du large",
    "des nappes de pluie ferment presque la fenêtre",
    "la côte disparaît par moments sous une pluie très serrée",
    "dehors, l’eau tombe dru et raccourcit la visibilité",
    "la vitre ruisselle sous une pluie qui ne fait pas semblant",
    "le large se devine à peine derrière les paquets de pluie",
    "la forte pluie transforme l’horizon en masse grise",
    "des trombes de pluie écrasent les couleurs de la Manche",
    "la fenêtre reçoit toute la colère d’une pluie dense",
    "le rideau d’eau épaissit entre la côte et le large",
    "la pluie lourde gomme les détails bien avant l’horizon",
    "dehors, les averses serrées bouchent presque toute la vue",
    "la Manche disparaît par pans derrière une pluie puissante",
    "la visibilité se réduit nettement sous les nappes de pluie",
    "la vitre peine à montrer le large sous tant d’eau",
  ],
  snow: [
    "des flocons traversent la vue devant l’horizon",
    "la neige blanchit l’air entre la côte et le large",
    "des grains hivernaux dansent derrière la vitre",
    "le ciel laisse tomber des flocons jusque vers la Manche",
    "la fenêtre montre un large piqué de blanc",
    "la neige flotte dans une lumière froide au-dessus de l’eau",
    "des flocons serrés effacent doucement les couleurs de la côte",
    "l’horizon pâlit sous le passage de la neige",
    "dehors, le blanc gagne l’air sans fermer toute la vue",
    "les flocons courent devant un large couleur d’acier",
    "la neige dessine un rideau clair sur la Manche",
    "l’air hivernal se remplit de flocons devant la fenêtre",
    "la côte prend une allure blanche sous les passages neigeux",
    "des grains de neige voilent par instants la ligne du large",
    "la fenêtre cadre un horizon froid traversé de blanc",
    "les flocons se mêlent aux embruns devant la Manche",
  ],
  storm: [
    "des éclairs déchirent le ciel derrière la vitre",
    "l’orage ferme l’horizon et montre déjà les dents",
    "un ciel noir lance des éclairs au-dessus du large",
    "le grain orageux avale la lumière sur la Manche",
    "dehors, l’orage roule sous un horizon menaçant",
    "les éclairs éclairent par coups un large devenu sombre",
    "le ciel orageux se referme brutalement sur la côte",
    "un grain noir avance avec des lueurs d’éclair",
    "la fenêtre cadre un horizon chargé d’orage",
    "les éclairs griffent un ciel devenu presque noir",
    "la Manche disparaît sous la masse sombre de l’orage",
    "le grain orageux occupe tout le paysage du large",
    "dehors, le ciel menace et les éclairs répondent",
    "l’horizon se contracte sous un orage bien installé",
    "un front noir traverse la vue avec des éclairs nets",
    "le ciel orageux montre sa colère jusque sur la ligne du large",
  ],
};

const windSensations = {
  calm: [
    "le vent reste couché et les voiles auront du mal à prendre forme",
    "l’air bouge à peine, juste assez pour faire frémir une écoute",
    "les voiles risquent de pendre sans trouver de quoi travailler",
    "le souffle manque et les coques avanceront avec patience",
    "l’air somnole encore au-dessus de l’eau",
    "le vent ne pousse presque rien, pas même l’impatience",
    "les voiles chercheront longtemps le moindre souffle utile",
    "le peu d’air promet surtout une glisse très lente",
    "le vent reste dans sa bannette et laisse les voiles molles",
    "les coques auront peu de force à tirer de l’air",
    "le souffle est si discret qu’il faudra savourer chaque risée",
    "le vent paresse et la toile ne trouvera guère de coffre",
    "l’air manque de volonté pour faire vraiment chanter les voiles",
    "les voiles auront davantage envie de dormir que de porter",
    "le vent se fait oublier et la navigation sera bien molle",
    "le souffle reste trop mince pour réveiller franchement les coques",
  ],
  light: [
    "un petit souffle remplit la toile sans lui donner beaucoup de nerf",
    "le vent pousse gentiment, mais la glisse restera tranquille",
    "l’air suffit pour avancer doucement sans réveiller toute l’écume",
    "les voiles prendront forme, sans promettre une grande cavalcade",
    "le souffle est propre mais encore un peu maigre",
    "le vent accompagne les coques sans chercher à les lancer",
    "la toile travaillera doucement dans un air plutôt sage",
    "les voiles trouveront de quoi porter, mais pas de quoi fanfaronner",
    "le petit air offre une navigation douce et peu physique",
    "le vent se montre poli, presque trop pour les amateurs de vitesse",
    "les coques avanceront proprement dans un souffle modeste",
    "l’air donne juste assez de vie aux voiles pour une sortie calme",
    "le vent reste léger et demandera de soigner chaque réglage",
    "la toile recevra un souffle régulier mais sans grand coffre",
    "le petit vent promet davantage de finesse que de spectacle",
    "les voiles respireront doucement sans tirer fort sur les écoutes",
  ],
  favorable: [
    "le vent tient sa ligne et remplit les voiles comme il faut",
    "l’air a juste assez de coffre pour faire chanter la toile",
    "les voiles seront bien nourries sans arracher la barre",
    "le souffle est établi et devrait faire filer les coques proprement",
    "le vent travaille avec régularité sans chercher la bagarre",
    "la toile trouvera une poussée franche et encore maîtrisable",
    "les coques devraient accélérer sans mauvaise surprise dans les écoutes",
    "le vent donne du répondant tout en gardant de bonnes manières",
    "les voiles auront de quoi porter sans te demander les gros bras",
    "l’air pousse franchement et laisse encore une belle marge",
    "le vent paraît taillé pour une glisse vive mais propre",
    "la toile devrait chanter sans transformer la barre en combat",
    "les coques recevront un souffle utile, régulier et agréable",
    "le vent offre de la puissance sans prendre le commandement",
    "l’air est assez présent pour réveiller l’écume sans brutalité",
    "les voiles trouveront un équilibre plaisant entre force et contrôle",
  ],
  sporty: [
    "le vent bombe le torse et réclamera des mains bien réveillées",
    "les voiles vont tirer fort, avec des reprises qui demandent du métier",
    "l’air a du coffre et la barre ne tolérera pas la distraction",
    "le vent pousse franchement, alors les écoutes devront rester vivantes",
    "la toile sera puissante et chaque manœuvre demandera de l’anticipation",
    "les coques peuvent filer vite, mais le souffle impose de la maîtrise",
    "le vent se fait physique et ne pardonnera pas une écoute oubliée",
    "la puissance est là, avec des coups de rein à surveiller",
    "les voiles auront du travail et le barreur davantage encore",
    "le souffle devient musclé, assez pour fatiguer un équipage distrait",
    "le vent donne une vraie navigation sportive sans offrir beaucoup de repos",
    "la toile va charger et chaque virement devra rester propre",
    "les coques trouveront de la vitesse, au prix d’une vigilance constante",
    "le vent commence à hausser le ton autour des voiles",
    "l’air pousse avec caractère et réclame une marge généreuse",
    "les voiles vont tracter fort, alors garde la barre et les écoutes prêtes",
  ],
  dangerous: [
    "les rafales veulent arracher la barre et vider toute marge de sécurité",
    "le vent frappe trop fort pour confier les coques au large",
    "les voiles recevraient une puissance brutale et difficile à contenir",
    "les rafales dépassent ce qu’une sortie prudente peut accepter",
    "le vent cherche la bagarre et la barre n’a rien à y gagner",
    "la toile serait chargée au point de rendre chaque manœuvre risquée",
    "les coups de vent arrivent avec trop de force pour sortir proprement",
    "les coques seraient livrées à un souffle bien trop violent",
    "le vent a franchi la limite où l’expérience remplace la prudence",
    "les rafales peuvent coucher la toile avant même de laisser réagir",
    "la puissance du vent ne laisse plus la marge nécessaire",
    "les voiles prendraient des claques que personne ne doit minimiser",
    "le souffle est devenu assez violent pour imposer le quai",
    "les rafales commandent désormais plus fort que le barreur",
    "le vent mettrait l’équipage en lutte dès la mise à l’eau",
    "la toile serait ingérable au moindre coup de travers",
  ],
};

const scoreVerdicts = {
  critical: [
    "les coques restent au sec, matelot, et cette décision ne se discute pas",
    "reste au quai, moussaillon, car le large ne mérite aucun pari aujourd’hui",
    "tu ne largues rien, bonhomme, et tu gardes tout l’équipage à terre",
    "pas de mise à l’eau, matelot, Bosco préfère te revoir entier",
    "range la voile, moussaillon, cette sortie n’a pas assez de marge",
    "aujourd’hui, tu restes à terre et tu laisses la Manche tranquille",
    "les amarres restent tournées, bonhomme, sans discussion de comptoir",
    "garde les coques loin du bord, matelot, le refus est net",
    "tu reportes la sortie, moussaillon, même si l’envie te démange",
    "pas question de prendre le large, bonhomme, la prudence a tranché",
    "la voile ne sort pas de son sac, matelot, et c’est très bien ainsi",
    "le quai gagne aujourd’hui, moussaillon, laisse ton orgueil au vestiaire",
    "tu restes au sec, bonhomme, car une mauvaise marge ne se négocie pas",
    "aucun départ, matelot, le large attendra un jour plus honnête",
    "la sortie est refusée, moussaillon, va plutôt surveiller l’horizon du comptoir",
    "garde les amarres en place, bonhomme, Bosco ne joue pas avec ce tableau",
  ],
  poor: [
    "je te déconseille la mise à l’eau, matelot, le plaisir serait trop maigre",
    "laisse les coques au repos, moussaillon, ce créneau ne vaut pas l’effort",
    "tu pourrais insister, bonhomme, mais Bosco te conseille franchement le quai",
    "mieux vaut reporter, matelot, car le large ne propose rien d’assez propre",
    "je garderais la voile pliée, moussaillon, sans regret et sans bravade",
    "reste au sec, bonhomme, cette sortie promet davantage d’ennuis que de sourires",
    "le quai reste le choix raisonnable, matelot, malgré ton envie de naviguer",
    "ne pousse pas les coques à l’eau, moussaillon, le jeu n’en vaut guère la chandelle",
    "Bosco vote pour le comptoir, bonhomme, et rarement sans une bonne raison",
    "la sortie peut attendre, matelot, tu trouveras une fenêtre plus généreuse",
    "garde ton énergie pour un meilleur jour, moussaillon, celui-ci manque d’intérêt",
    "les amarres peuvent rester tranquilles, bonhomme, le large n’offre pas assez",
    "je ne t’enverrais pas dehors, matelot, même avec un café dans le ventre",
    "laisse passer ce créneau, moussaillon, il ne mérite pas de mouiller le ciré",
    "reste près du Tourbillon, bonhomme, la sortie serait bien peu récompensée",
    "mieux vaut regarder la Manche d’ici, matelot, puis revenir quand elle sera plus aimable",
  ],
  mixed: [
    "ça peut se tenter avec réserve, matelot, mais garde le retour facile",
    "tu peux mettre à l’eau prudemment, moussaillon, sans t’éloigner ni fanfaronner",
    "la sortie reste possible, bonhomme, à condition de garder une vraie marge",
    "si tu pars, matelot, fais court et surveille ce qui change autour de toi",
    "Bosco te laisse essayer, moussaillon, mais la prudence tient la barre",
    "tu peux naviguer doucement, bonhomme, sans transformer l’essai en expédition",
    "la porte n’est pas fermée, matelot, mais ne quitte pas la côte des yeux",
    "ça se tente proprement, moussaillon, avec un équipage attentif et sans bravade",
    "tu peux sortir, bonhomme, en gardant assez de marge pour rentrer tôt",
    "je n’interdis pas la sortie, matelot, mais je veux te savoir raisonnable",
    "mets à l’eau seulement si tu te sens prêt, moussaillon, et reste modeste",
    "la navigation est envisageable, bonhomme, pour qui sait renoncer au moindre doute",
    "tu peux tenter le large proche, matelot, sans chercher à prolonger le plaisir",
    "la sortie mérite un oui prudent, moussaillon, pas un départ les yeux fermés",
    "avance avec mesure, bonhomme, et garde toujours une solution simple pour rentrer",
    "Bosco accorde un départ prudent, matelot, tant que tu respectes tes limites",
  ],
  good: [
    "tu peux larguer les amarres, matelot, cette sortie se présente bien",
    "mets les coques à l’eau, moussaillon, et profite sans oublier ta marge",
    "Bosco te donne son feu vert, bonhomme, pour une navigation bien menée",
    "tu peux prendre le large, matelot, avec le sourire et l’œil ouvert",
    "prépare la voile, moussaillon, la Manche devrait être de bonne compagnie",
    "la sortie est favorable, bonhomme, alors navigue proprement et profite",
    "va saluer le large, matelot, tout en restant le marin attentif que j’attends",
    "tu peux embarquer, moussaillon, le créneau mérite franchement d’être saisi",
    "les coques peuvent sortir, bonhomme, avec une belle promenade en perspective",
    "Bosco ne te retient pas au quai, matelot, alors grée sans traîner",
    "mets à l’eau sereinement, moussaillon, sans confondre confiance et négligence",
    "la navigation s’annonce plaisante, bonhomme, profite de ce que le large offre",
    "tu as de bonnes raisons de partir, matelot, garde seulement tes habitudes prudentes",
    "le quai peut te laisser filer, moussaillon, cette fenêtre est favorable",
    "va faire chanter les voiles, bonhomme, le moment s’y prête joliment",
    "tu peux pousser la porte, matelot, le large t’accueille correctement",
  ],
  excellent: [
    "c’est une très belle occasion de naviguer, matelot, alors ne traîne pas au quai",
    "largue les amarres, moussaillon, ce jour mérite de faire chanter les voiles",
    "les coques ont rendez-vous avec le large, bonhomme, et Bosco approuve sans réserve",
    "va profiter de la Manche, matelot, une fenêtre pareille ne se refuse pas",
    "prépare tout, moussaillon, la navigation promet un vrai beau moment",
    "Bosco ouvre grand la porte, bonhomme, car le large est généreux aujourd’hui",
    "mets à l’eau avec confiance, matelot, cette occasion est franchement remarquable",
    "laisse le comptoir derrière toi, moussaillon, les voiles ont mieux à faire",
    "file gréer les coques, bonhomme, la Manche t’offre l’un de ses beaux jours",
    "tu peux partir le cœur léger, matelot, tout se prête à une belle sortie",
    "le large te tend les bras, moussaillon, alors navigue et savoure chaque bord",
    "Bosco n’a aucune raison de te garder ici, bonhomme, profite pleinement",
    "cette sortie promet du plaisir, matelot, va donc réveiller proprement les coques",
    "les voiles peuvent chanter, moussaillon, car le moment est vraiment excellent",
    "prends la barre avec le sourire, bonhomme, la Manche te fait un beau cadeau",
    "au large, matelot, cette occasion mérite mieux qu’une hésitation au comptoir",
  ],
};

const safetyVerdicts = [
  "les coques restent au sec, matelot, et Bosco ne négocie pas avec le danger",
  "aucun départ, moussaillon, car l’humour s’arrête exactement ici",
  "tu gardes tout le monde à terre, bonhomme, sans discuter davantage",
  "pas une coque à l’eau, matelot, la sécurité commande le quai",
  "les amarres restent tournées, moussaillon, même si le reste semblait séduisant",
  "tu ne pars pas, bonhomme, car une belle envie ne vaut pas une mauvaise marge",
  "range la voile, matelot, le refus est ferme et parfaitement sérieux",
  "la Manche attendra, moussaillon, tandis que toi tu restes bien au sec",
  "Bosco ferme la porte au départ, bonhomme, et ne la rouvrira pas aujourd’hui",
  "reste loin de la mise à l’eau, matelot, ce risque écrase tout le reste",
  "pas de bravoure, moussaillon, tu reportes et tu rentres boire quelque chose de chaud",
  "le quai gagne sans appel, bonhomme, car le large dépasse la limite acceptable",
  "tu laisses les coques tranquilles, matelot, aucune envie ne corrige ce danger",
  "la sortie est refusée, moussaillon, et Bosco veut être parfaitement compris",
  "garde le gréement rangé, bonhomme, la prudence ne laisse aucune petite porte",
  "tu restes à terre, matelot, même avec toute l’expérience du port",
];

const openings = [
  "Écoute-moi bien, matelot",
  "Regarde dehors, moussaillon",
  "Je te le dis sans détour, bonhomme",
  "Voyons ce que raconte la Manche",
  "Approche un peu, matelot",
  "Garde une main sur ton enthousiasme",
  "Le vieux Bosco a regardé dehors",
  "Pose ton ciré une seconde, moussaillon",
  "Avant de toucher aux amarres, écoute",
  "Jette donc un œil vers le large",
  "Le Tourbillon a sa fenêtre sur la Manche",
  "Je connais cette mine-là, matelot",
  "Laisse parler le vieux marin une seconde",
  "Pas si vite, moussaillon",
  "Viens voir l’horizon avec moi",
  "Je garde un œil sur la fenêtre, bonhomme",
];

const rareOpenings = [
  "Mille sabords",
  "Nom d’une pipe",
  "Par ma vieille ancre",
  "Par la barbe du vieux phare",
];

function capitalize(value) {
  return `${value.charAt(0).toLocaleUpperCase("fr-FR")}${value.slice(1)}`;
}

function wordCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function render({ weather, wind, verdict, opening, variant }) {
  const observedWeather = weather.replace(/^dehors,\s*/i, "");
  const windowWeather = /derrière la vitre/i.test(weather)
    ? capitalize(weather)
    : `Derrière la vitre, ${weather}`;
  const texts = [
    `${windowWeather}. ${capitalize(wind)}. ${capitalize(verdict)}.`,
    `${capitalize(weather)}, tandis que ${wind}. ${capitalize(verdict)}.`,
    `${capitalize(wind)} ; au large, ${observedWeather}. ${capitalize(verdict)}.`,
    `${opening}, ${weather}. ${capitalize(wind)}. ${capitalize(verdict)}.`,
    `${capitalize(weather)}. Côté vent, ${wind}. ${capitalize(verdict)}.`,
    `Depuis le Tourbillon, ${observedWeather}. ${capitalize(wind)}. ${capitalize(verdict)}.`,
    `${capitalize(weather)} ; pour les voiles, ${wind}. ${capitalize(verdict)}.`,
    `${opening} : ${weather}. ${capitalize(wind)}. ${capitalize(verdict)}.`,
  ];
  return texts[variant].replace(/\s+/g, " ").trim();
}

function decisionFor(scoreBand, safetyPriority) {
  if (safetyPriority) return "refuse";
  return {
    critical: "refuse",
    poor: "discouraged",
    mixed: "cautious",
    good: "favorable",
    excellent: "excellent",
  }[scoreBand];
}

function selectOpening(globalIndex, weatherFamily, offset) {
  if (globalIndex % 53 === 0) {
    if (weatherFamily === "storm") return "Tonnerre de Brest";
    return rareOpenings[(globalIndex + offset) % rareOpenings.length];
  }
  return openings[(globalIndex + offset) % openings.length];
}

mkdirSync(outputDirectory, { recursive: true });

const allReplies = [];
for (const [weatherIndex, weatherFamily] of weatherFamilies.entries()) {
  const replies = [];
  for (const [windIndex, windBand] of windBands.entries()) {
    for (const [scoreIndex, scoreBand] of scoreBands.entries()) {
      for (let variantIndex = 0; variantIndex < 8; variantIndex += 1) {
        const globalIndex =
          weatherIndex * 200 + windIndex * 40 + scoreIndex * 8 + variantIndex;
        const observations = weatherObservations[weatherFamily];
        const sensations = windSensations[windBand];
        const safetyPriority = weatherFamily === "storm" || windBand === "dangerous";
        const verdicts = safetyPriority ? safetyVerdicts : scoreVerdicts[scoreBand];
        const weather =
          observations[(variantIndex + windIndex * 2 + scoreIndex * 3) % observations.length];
        const wind =
          sensations[(variantIndex * 3 + weatherIndex + scoreIndex * 2) % sensations.length];
        const verdict =
          verdicts[(variantIndex * 5 + weatherIndex * 2 + windIndex * 3) % verdicts.length];
        const opening = selectOpening(
          globalIndex,
          weatherFamily,
          variantIndex + windIndex + scoreIndex,
        );
        const text = render({
          weather,
          wind,
          verdict,
          opening,
          variant: variantIndex,
        });
        const reply = {
          id: `${weatherFamily}:${windBand}:${scoreBand}:${String(variantIndex + 1).padStart(2, "0")}`,
          weatherFamily,
          windBand,
          scoreBand,
          text,
          decision: decisionFor(scoreBand, safetyPriority),
          safetyPriority,
        };
        const words = wordCount(text);
        if (words < 22 || words > 55) {
          throw new Error(`${reply.id} contient ${words} mots : ${text}`);
        }
        replies.push(reply);
        allReplies.push(reply);
      }
    }
  }
  writeFileSync(
    join(outputDirectory, `${weatherFamily}.json`),
    `${JSON.stringify(replies, null, 2)}\n`,
  );
}

if (allReplies.length !== 2_000) {
  throw new Error(`Corpus incomplet : ${allReplies.length} répliques.`);
}
if (new Set(allReplies.map((reply) => reply.id)).size !== 2_000) {
  throw new Error("Des identifiants de réplique sont dupliqués.");
}
if (new Set(allReplies.map((reply) => reply.text)).size !== 2_000) {
  throw new Error("Des textes de réplique sont dupliqués.");
}

console.log(
  JSON.stringify({
    replies: allReplies.length,
    combinations: allReplies.length / 8,
    weatherFamilies: weatherFamilies.length,
    windBands: windBands.length,
    scoreBands: scoreBands.length,
  }),
);
