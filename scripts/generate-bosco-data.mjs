import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "data", "bosco");
mkdirSync(outputDir, { recursive: true });

const write = (name, value) => {
  writeFileSync(join(outputDir, name), `${JSON.stringify(value, null, 2)}\n`);
};

const version = "4.0.0";
const generatedAt = "2026-07-26";

const boscoBrain = {
  schemaVersion: version,
  generatedAt,
  name: "Bosco",
  role: "Ancien commandant et compagnon de navigation de la côte normande",
  locale: "fr-FR",
  principles: [
    "La sécurité prime toujours sur le sport et le confort.",
    "Toute décision doit rester explicable à partir des données reçues.",
    "Bosco n'invente ni donnée, ni souvenir, ni certitude.",
    "En cas de données manquantes ou contradictoires, Bosco réduit sa confiance.",
    "Les références visuelles des étapes 1 à 3 sont immuables."
  ],
  pipeline: [
    "normalize-weather",
    "assess-data-quality",
    "derive-scenarios",
    "apply-safety-gates",
    "compute-navigation-score",
    "select-decision",
    "select-emotion",
    "select-assets",
    "select-dialogue",
    "explain"
  ],
  scenarioSpace: {
    axes: {
      wind: ["calm", "light", "ideal", "fresh", "strong", "dangerous"],
      gusts: ["stable", "variable", "gusty", "violent"],
      sea: ["flat", "slight", "moderate", "rough", "very-rough"],
      swell: ["none", "short", "long", "crossed"],
      weather: ["clear", "cloudy", "rain", "heavy-rain", "fog", "storm", "heat", "cold"],
      tide: ["low", "rising", "high", "falling"],
      data: ["complete", "partial", "stale", "offline", "unavailable"]
    },
    theoreticalCombinations: 76800,
    strategy: "Les scénarios sont composés dynamiquement à partir des axes, puis arbitrés par les règles prioritaires."
  },
  decisionOrder: [
    "decision-unavailable",
    "decision-discouraged",
    "decision-cautious",
    "decision-low-sport",
    "decision-pleasant",
    "decision-ideal"
  ],
  confidence: {
    complete: 1,
    partial: 0.72,
    stale: 0.48,
    offlineCached: 0.42,
    unavailable: 0
  },
  antiRepetition: {
    historySize: 12,
    categoryCooldown: 3,
    neverRepeatLast: true,
    deterministicFallback: "least-recently-used"
  },
  performance: {
    targetEvaluationMs: 16,
    targetReactionMs: [1000, 3000],
    useWorkersAboveRules: 500,
    animationTargetFps: 60,
    batteryPolicy: "Réduire les effets décoratifs quand l'app est masquée, hors ligne ou en mode économie d'énergie."
  }
};

const conditions = (all = [], any = [], none = []) => ({ all, any, none });
const rule = (id, priority, when, output, explanation) => ({
  id,
  priority,
  when,
  output,
  explanation
});

const boscoRules = {
  schemaVersion: version,
  evaluation: {
    order: "priority-desc",
    mode: "first-terminal-plus-advisories",
    operators: ["eq", "neq", "gt", "gte", "lt", "lte", "in", "notIn", "exists", "missing"]
  },
  safetyGates: [
    rule(
      "data-unavailable",
      1000,
      conditions([], [{ field: "data.status", op: "in", value: ["unavailable", "invalid"] }]),
      { terminal: true, decision: "decision-unavailable", emotion: "perplexe", dialogue: "aucune-donnee", confidenceCap: 0 },
      "Aucune conclusion fiable n'est possible sans données exploitables."
    ),
    rule(
      "offline-no-cache",
      990,
      conditions([{ field: "connection.online", op: "eq", value: false }, { field: "data.cached", op: "eq", value: false }]),
      { terminal: true, decision: "decision-unavailable", emotion: "contrarie", dialogue: "connexion-perdue", confidenceCap: 0 },
      "La connexion est perdue et aucune observation récente n'est disponible."
    ),
    rule(
      "thunderstorm",
      980,
      conditions([], [
        { field: "weather.code", op: "eq", value: "storm" },
        { field: "weather.thunderstormRisk", op: "gte", value: 0.35 }
      ]),
      { terminal: true, decision: "decision-discouraged", emotion: "protecteur", dialogue: "orage", scoreCap: 2 },
      "Le risque orageux rend la sortie incompatible avec une recommandation favorable."
    ),
    rule(
      "violent-wind",
      970,
      conditions([], [
        { field: "wind.meanKt", op: "gte", value: 25 },
        { field: "wind.gustKt", op: "gte", value: 32 }
      ]),
      { terminal: true, decision: "decision-discouraged", emotion: "protecteur", dialogue: "vent-fort", scoreCap: 2.5 },
      "Le vent ou les rafales dépassent la limite de sécurité générale."
    ),
    rule(
      "very-rough-sea",
      960,
      conditions([], [
        { field: "sea.waveHeightM", op: "gte", value: 2 },
        { field: "sea.swellHeightM", op: "gte", value: 1.8 }
      ]),
      { terminal: true, decision: "decision-discouraged", emotion: "inquiet", dialogue: "mer-agitee", scoreCap: 2.5 },
      "La hauteur de mer ou de houle impose de déconseiller la sortie."
    ),
    rule(
      "dense-fog",
      950,
      conditions([{ field: "weather.visibilityM", op: "lt", value: 800 }]),
      { terminal: true, decision: "decision-discouraged", emotion: "protecteur", dialogue: "brouillard", scoreCap: 2 },
      "La visibilité est insuffisante pour une recommandation sûre."
    ),
    rule(
      "unsafe-cold",
      940,
      conditions([{ field: "weather.temperatureC", op: "lt", value: 2 }]),
      { terminal: true, decision: "decision-discouraged", emotion: "protecteur", dialogue: "grand-froid", scoreCap: 3 },
      "Le froid augmente fortement les conséquences d'une chute à l'eau."
    )
  ],
  decisionRules: [
    rule(
      "strong-gusty-wind",
      850,
      conditions([], [
        { field: "wind.meanKt", op: "gte", value: 20 },
        { field: "wind.gustKt", op: "gte", value: 26 },
        { field: "derived.gustFactor", op: "gte", value: 1.6 }
      ]),
      { decision: "decision-cautious", emotion: "mefiant", dialogue: "prudence", scoreCap: 5.5 },
      "Le créneau reste envisageable seulement avec prudence à cause des rafales."
    ),
    rule(
      "rough-sea",
      840,
      conditions([], [
        { field: "sea.waveHeightM", op: "gte", value: 1.2 },
        { field: "sea.swellHeightM", op: "gte", value: 1.1 }
      ]),
      { decision: "decision-cautious", emotion: "concentre", dialogue: "mer-agitee", scoreCap: 6 },
      "La mer demande une marge technique et physique supérieure."
    ),
    rule(
      "crossed-swell",
      830,
      conditions([{ field: "derived.crossSeaAngleDeg", op: "gte", value: 55 }]),
      { decision: "decision-cautious", emotion: "mefiant", dialogue: "houle", scoreDelta: -1.4 },
      "La différence de direction entre vagues et houle peut rendre le plan d'eau désordonné."
    ),
    rule(
      "low-visibility",
      820,
      conditions([{ field: "weather.visibilityM", op: "lt", value: 3000 }]),
      { decision: "decision-cautious", emotion: "concentre", dialogue: "brouillard", scoreCap: 5.5 },
      "La visibilité réduite impose un itinéraire conservateur."
    ),
    rule(
      "heavy-rain",
      810,
      conditions([{ field: "weather.precipitationMmH", op: "gte", value: 5 }]),
      { decision: "decision-cautious", emotion: "contrarie", dialogue: "pluie", scoreDelta: -1.2 },
      "La pluie forte réduit le confort, la visibilité et la qualité du briefing."
    ),
    rule(
      "heat",
      800,
      conditions([{ field: "weather.temperatureC", op: "gte", value: 32 }]),
      { decision: "decision-cautious", emotion: "protecteur", dialogue: "canicule", scoreDelta: -0.8 },
      "La chaleur impose hydratation, protection solaire et créneau plus court."
    ),
    rule(
      "weak-wind",
      760,
      conditions([{ field: "wind.meanKt", op: "lt", value: 7 }]),
      { decision: "decision-low-sport", emotion: "amuse", dialogue: "vent-faible", scoreBand: [4.5, 7.2] },
      "Les conditions peuvent être sûres, mais le vent est trop faible pour une navigation sportive."
    ),
    rule(
      "ideal-window",
      700,
      conditions([
        { field: "wind.meanKt", op: "gte", value: 10 },
        { field: "wind.meanKt", op: "lte", value: 17 },
        { field: "derived.gustFactor", op: "lte", value: 1.35 },
        { field: "sea.waveHeightM", op: "lte", value: 0.7 },
        { field: "weather.visibilityM", op: "gte", value: 8000 },
        { field: "weather.precipitationMmH", op: "lt", value: 1 }
      ]),
      { decision: "decision-ideal", emotion: "enthousiaste", dialogue: "navigation-ideale", scoreFloor: 8 },
      "Le vent, la mer et la visibilité composent un créneau sportif, régulier et sûr."
    ),
    rule(
      "pleasant-window",
      650,
      conditions([
        { field: "wind.meanKt", op: "gte", value: 7 },
        { field: "wind.meanKt", op: "lt", value: 20 },
        { field: "sea.waveHeightM", op: "lt", value: 1.2 }
      ]),
      { decision: "decision-pleasant", emotion: "satisfait", dialogue: "navigation-agreable", scoreFloor: 6 },
      "Le créneau est globalement favorable sans réunir toutes les conditions idéales."
    )
  ],
  advisoryRules: [
    rule(
      "falling-pressure",
      500,
      conditions([{ field: "weather.pressureTrendHPa3h", op: "lte", value: -3 }]),
      { tag: "pressure-falling", dialogueHint: "attente", scoreDelta: -0.5 },
      "La pression baisse rapidement : une dégradation est possible."
    ),
    rule(
      "rising-wind",
      490,
      conditions([{ field: "trend.windKt3h", op: "gte", value: 5 }]),
      { tag: "wind-rising", dialogueHint: "attente", scoreDelta: -0.6 },
      "Le vent se renforce pendant la fenêtre."
    ),
    rule(
      "falling-tide",
      480,
      conditions([{ field: "tide.trend", op: "eq", value: "falling" }]),
      { tag: "tide-falling", dialogueHint: "maree", scoreDelta: -0.2 },
      "La marée descendante doit être intégrée au retour et à la mise à l'eau."
    ),
    rule(
      "rising-tide",
      470,
      conditions([{ field: "tide.trend", op: "eq", value: "rising" }]),
      { tag: "tide-rising", dialogueHint: "maree", scoreDelta: 0.1 },
      "La marée montante peut améliorer la marge d'eau selon le spot."
    ),
    rule(
      "stale-data",
      460,
      conditions([{ field: "data.ageMinutes", op: "gt", value: 90 }]),
      { tag: "stale-data", dialogueHint: "calcul", confidenceCap: 0.48, scoreDelta: -0.7 },
      "Les observations sont anciennes et réduisent la confiance."
    ),
    rule(
      "beginner-adjustment",
      450,
      conditions([{ field: "user.level", op: "eq", value: "debutant" }]),
      { tag: "beginner", dialogueHint: "prudence", scoreDelta: -0.8 },
      "Le niveau débutant demande davantage de marge."
    ),
    rule(
      "expert-adjustment",
      440,
      conditions([{ field: "user.level", op: "eq", value: "expert" }]),
      { tag: "expert", scoreDelta: 0.2 },
      "L'expérience améliore l'aisance mais ne relève jamais les limites de sécurité."
    ),
    rule(
      "offshore-direction",
      430,
      conditions([{ field: "derived.windRelation", op: "eq", value: "offshore" }]),
      { tag: "offshore-wind", dialogueHint: "prudence", scoreDelta: -0.8 },
      "Un vent de terre peut compliquer le retour et exige une marge supplémentaire."
    )
  ],
  fallback: {
    decision: "decision-cautious",
    emotion: "concentre",
    dialogue: "prudence",
    explanation: "Le tableau est mixte : Bosco retient une recommandation prudente et explicable."
  }
};

const dialogueSeeds = {
  accueil: {
    openings: ["Ah, te voilà", "Te revoilà au Tourbillon", "Entre donc", "Approche de la carte", "Pose ton sac un instant", "La radio vient de se taire"],
    observations: ["je vais regarder ce que raconte la côte", "on va lire le ciel sans se presser", "la mer mérite qu'on l'écoute", "je garde le baromètre à portée de main", "dis-moi où tu comptes mettre à l'eau", "je vérifie ton créneau"],
    endings: ["avant de larguer quoi que ce soit.", "et on décidera proprement.", "sans raconter d'histoires.", "avec une vraie marge.", "comme le ferait un marin prudent.", "avant que le vent ne change d'avis."]
  },
  "bonne-meteo": {
    openings: ["Le ciel tient sa parole", "La matinée s'annonce propre", "Le temps travaille pour nous", "Le baromètre ne grimace pas", "La côte respire tranquillement", "Les nuages restent sages"],
    observations: ["la visibilité est bonne", "la pluie nous laisse en paix", "la température sera supportable", "le créneau reste stable", "l'horizon est bien dégagé", "la tendance ne montre pas de piège"],
    endings: ["profite-en sans relâcher la veille.", "mais garde ta veste à bord.", "c'est une bonne base.", "le reste dépendra du vent.", "on peut préparer la mise à l'eau.", "je valide la météo."]
  },
  "navigation-ideale": {
    openings: ["Voilà un créneau comme je les aime", "Là, tu peux sourire", "Le Tourbillon donne son feu vert", "Le vent a trouvé le bon ton", "La mer et le ciel sont d'accord", "Belle fenêtre devant nous"],
    observations: ["le vent est régulier et sportif", "le plan d'eau reste propre", "la houle ne viendra pas brouiller le jeu", "les rafales gardent une marge correcte", "la visibilité accompagne le départ", "la fenêtre tient sur toute la sortie"],
    endings: ["pars préparé et savoure.", "c'est le moment de naviguer.", "garde tout de même un œil au large.", "tu as mon meilleur avis.", "voilà une sortie bien née.", "ne traîne pas trop sur le ponton."]
  },
  "navigation-agreable": {
    openings: ["La sortie devrait être agréable", "Ce n'est pas parfait, mais c'est bon", "La mer te laisse une jolie place", "Le créneau est honnête", "Tu peux envisager la sortie sereinement", "Les conditions sont de notre côté"],
    observations: ["le vent manque seulement d'un peu de franchise", "quelques variations restent possibles", "le plan d'eau sera vivant sans être méchant", "le confort devrait rester correct", "la tendance générale est favorable", "la sécurité garde une bonne marge"],
    endings: ["reste attentif aux rafales.", "pars avec ton équipement complet.", "ajuste simplement ton programme.", "je n'y vois pas de raison de renoncer.", "garde un retour facile.", "ça mérite une sortie."]
  },
  "vent-faible": {
    openings: ["Le vent fait la sieste", "Éole a oublié de se lever", "Ça souffle comme dans une poche", "Le pavillon manque d'enthousiasme", "Le vent se fait désirer", "Pas de quoi arracher le bonnet"],
    observations: ["la sécurité est bonne mais le sport sera maigre", "tu risques de patienter davantage que de glisser", "le départ sera tranquille", "les risées resteront rares", "la voile aura peu de travail", "le plan d'eau sera sage"],
    endings: ["prévois une séance technique.", "ne promets pas des pointes de vitesse.", "ça peut convenir pour apprendre.", "attends un peu si tu veux du répondant.", "pars seulement si le calme te plaît.", "le moteur décisionnel garde une note moyenne."]
  },
  "vent-fort": {
    openings: ["Le vent montre les dents", "Ça commence à pousser trop fort", "Les rafales cognent à la porte", "Le bonnet ne tiendra pas longtemps dehors", "Le ciel met trop de pression dans les voiles", "Le Tourbillon n'aime pas ces chiffres"],
    observations: ["la marge de sécurité devient trop courte", "les rafales dépassent le raisonnable", "le retour pourrait devenir difficile", "la puissance disponible n'est plus un jeu", "le vent moyen est déjà exigeant", "la variabilité rend le gréement brutal"],
    endings: ["tu restes à terre.", "je déconseille la sortie.", "on attend une vraie accalmie.", "aucun niveau ne justifie l'imprudence.", "range le matériel pour l'instant.", "la mer sera encore là demain."]
  },
  "mer-agitee": {
    openings: ["La mer remue ses meubles", "Le plan d'eau est mal rangé", "Les vagues travaillent de travers", "La côte n'offre pas un tapis", "Ça clapote sérieusement dehors", "La mer a pris de l'épaule"],
    observations: ["la hauteur des vagues réduit le confort", "le clapot compliquera les manœuvres", "la fatigue montera vite", "le retour demandera de la précision", "les mouvements seront irréguliers", "la marge technique se réduit"],
    endings: ["reste prudent.", "réduis ton programme.", "choisis un abri ou reporte.", "ne sous-estime pas la fatigue.", "je préfère une sortie courte.", "le niveau de chacun compte ici."]
  },
  houle: {
    openings: ["La houle vient de loin", "Le large envoie son courrier", "Il y a du mouvement sous la surface", "La période raconte une autre histoire", "La mer garde la mémoire du vent", "La houle mérite un mot"],
    observations: ["sa période peut rendre la sortie confortable", "elle croise les vagues locales", "son orientation compte autant que sa hauteur", "elle reste longue et régulière", "elle peut lever sur les hauts-fonds", "elle changera le rythme des manœuvres"],
    endings: ["observe bien l'entrée d'eau.", "ne juge pas seulement depuis la plage.", "garde de la marge près de la côte.", "adapte ton cap.", "je l'intègre à la note.", "ça reste navigable avec méthode."]
  },
  maree: {
    openings: ["La marée ne demande jamais la permission", "Regarde l'heure autant que l'eau", "La mer monte son escalier", "La mer redescend vers le large", "Le courant change le décor", "La hauteur d'eau compte aujourd'hui"],
    observations: ["le plein approche", "la basse mer réduira la marge", "la tendance montante aide la mise à l'eau", "la descendante impose un retour anticipé", "le courant peut renforcer le vent apparent", "l'horaire du retournement tombe dans le créneau"],
    endings: ["prépare ton retour.", "ne te fie pas au seul pourcentage.", "garde les horaires sous les yeux.", "adapte le point de départ.", "je l'ajoute au briefing.", "la côte normande ne pardonne pas l'oubli."]
  },
  prudence: {
    openings: ["Je garde la main sur ton épaule", "Pas de bravade aujourd'hui", "On va naviguer avec une marge", "Écoute le vieux commandant", "Je ne dis pas non, je dis doucement", "Le créneau demande du respect"],
    observations: ["plusieurs facteurs se cumulent", "les chiffres sont acceptables mais pas généreux", "ton niveau change la lecture", "le retour doit rester simple", "la tendance peut se dégrader", "le plan d'eau exige de l'attention"],
    endings: ["réduis la voilure si nécessaire.", "reste près d'une zone de repli.", "fixe une heure de retour.", "pars accompagné.", "renonce au premier doute.", "je limite volontairement la note."]
  },
  "sortie-deconseillee": {
    openings: ["Non, pas aujourd'hui", "Tu laisses le bateau au repos", "La réponse est claire", "Je ferme le registre des départs", "Pas question de jouer au héros", "Le Tourbillon vote contre"],
    observations: ["la sécurité ne dispose plus d'une marge suffisante", "les limites principales sont dépassées", "plusieurs dangers se cumulent", "les conditions sont incompatibles avec ton profil", "la mer réclame trop aujourd'hui", "la confiance dans le créneau est insuffisante"],
    endings: ["on revoit ça plus tard.", "la décision n'est pas négociable.", "il vaut mieux raconter une sortie annulée qu'un sauvetage.", "attends la prochaine fenêtre.", "reste au chaud.", "je préfère te savoir contrarié que mouillé."]
  },
  attente: {
    openings: ["Attends encore un peu", "Laisse passer ce grain", "Le meilleur moment n'est pas encore là", "Une heure peut changer le tableau", "Ne te précipite pas", "Le créneau se décale"],
    observations: ["le vent devrait se ranger", "la pression est en train d'évoluer", "la pluie quitte progressivement la côte", "la marée offrira bientôt plus de marge", "la visibilité s'améliore", "la tendance devient plus lisible"],
    endings: ["je te préviens quand ça devient meilleur.", "refais un point avant de partir.", "garde le matériel prêt.", "la patience est aussi une manœuvre.", "nous gagnerons en sécurité.", "ce sera peut-être plus propre ensuite."]
  },
  calcul: {
    openings: ["Laisse-moi remettre les chiffres dans l'ordre", "Je consulte la carte et le baromètre", "Deux secondes, je recoupe tout", "Je compte les rafales une par une", "La mer parle, j'écoute", "Je vérifie la cohérence du créneau"],
    observations: ["le vent pèse plus que le confort", "la sécurité commande la note", "les données marines complètent la météo", "la tendance compte autant que l'instant", "la confiance dépend de la fraîcheur des données", "ton profil ajuste la marge"],
    endings: ["je te donne une réponse explicable.", "pas de verdict au hasard.", "le résultat arrive.", "je termine le briefing.", "encore un instant.", "la réponse sera nette."]
  },
  erreur: {
    openings: ["Quelque chose cloche dans les instruments", "La radio me renvoie un drôle de grésillement", "Un chiffre refuse de tenir debout", "Le baromètre et la carte ne sont pas d'accord", "J'ai une donnée de travers", "Le message météo est incomplet"],
    observations: ["je vérifie avant de conclure", "je refuse d'inventer la valeur manquante", "la note sera suspendue", "la confiance vient de baisser", "le dernier relevé peut être corrompu", "je conserve seulement les données cohérentes"],
    endings: ["réessaie dans un instant.", "je te le signale clairement.", "aucun départ sur cette base.", "je garde l'ancien relevé marqué comme tel.", "on ne navigue pas avec une devinette.", "la prudence prend le relais."]
  },
  "connexion-perdue": {
    openings: ["Plus de réseau", "La radio vient de couper", "Le large a mangé la connexion", "Silence dans les antennes", "Le signal a disparu", "Cette satanée liaison s'est encore tue"],
    observations: ["je regarde si un relevé récent est disponible", "les données en cache restent datées", "je ne peux plus actualiser la météo", "le GPS local peut encore fonctionner", "la dernière tendance n'est plus garantie", "la confiance est automatiquement réduite"],
    endings: ["je t'indique l'heure du dernier relevé.", "ne pars pas sur une donnée trop ancienne.", "je réessaierai au retour du signal.", "le mode hors ligne reste prudent.", "aucune invention, même sans réseau.", "attends la reconnexion si le doute subsiste."]
  },
  gps: {
    openings: ["Position trouvée", "Je t'ai repéré sur la côte", "Le compas sait où tu es", "Le GPS répond", "Ton spot vient d'apparaître sur la carte", "La localisation est acquise"],
    observations: ["je peux comparer le vent à l'orientation du rivage", "le spot favori est reconnu", "la météo locale peut être demandée", "la relation terre-mer devient plus précise", "je vérifie la distance au spot choisi", "le briefing peut être contextualisé"],
    endings: ["voyons ce que raconte Jullouville.", "je poursuis le calcul.", "garde tout de même le nom du spot visible.", "la position ne remplace pas ton observation.", "je passe aux données marines.", "le cap est clair."]
  },
  historique: {
    openings: ["Je me souviens seulement de ce que tu as enregistré", "Ton journal de bord est ouvert", "Je retrouve tes préférences", "Le carnet confirme ton embarcation", "Ton spot habituel est bien noté", "Je consulte l'historique local"],
    observations: ["aucun souvenir n'est inventé", "les anciennes sorties restent distinctes des prévisions", "ton niveau enregistré ajuste la marge", "les derniers choix peuvent être relus", "le type de bateau est pris en compte", "la mémoire reste sur cet appareil"],
    endings: ["tu peux corriger ces informations.", "je n'en déduis rien sans donnée.", "cela personnalise seulement le conseil.", "le passé ne garantit jamais la mer.", "je garde les faits, pas les légendes.", "rien n'est envoyé sans action explicite."]
  },
  notifications: {
    openings: ["Le créneau vient de changer", "J'ai une évolution à te signaler", "Le baromètre bouge", "La météo marine a été actualisée", "Une nouvelle fenêtre apparaît", "Attention, le tableau se dégrade"],
    observations: ["la décision a changé de niveau", "le vent franchit un seuil important", "la pluie approche du spot", "la marée entre dans la fenêtre", "la confiance des données remonte", "la connexion vient de revenir"],
    endings: ["ouvre Bosco pour le détail.", "je te donne la raison exacte.", "la note vient d'être recalculée.", "vérifie avant de partir.", "le dernier briefing remplace l'ancien.", "je reste en veille raisonnable."]
  },
  brouillard: {
    openings: ["Le brouillard ferme les rideaux", "La côte disparaît trop vite", "La visibilité est mangée par le gris", "Le phare devient notre seul voisin", "L'horizon s'est effacé", "Je n'aime pas cette ouate sur l'eau"],
    observations: ["les repères seront difficiles à conserver", "la distance de visibilité est trop courte", "les autres embarcations seront tardives à voir", "le retour à vue n'est plus garanti", "la navigation demande des moyens adaptés", "la prudence doit être maximale"],
    endings: ["je déconseille la sortie.", "attends que ça se lève.", "ne compte pas sur le seul GPS.", "reste à terre sans hésiter.", "la visibilité commande la décision.", "on reparlera du vent après."]
  },
  pluie: {
    openings: ["La pluie s'invite au briefing", "Le ciel rince le Tourbillon", "Les grains arrivent par la côte", "La fenêtre sera mouillée", "Les nuages ouvrent les vannes", "La visibilité prend l'eau"],
    observations: ["l'intensité reste supportable", "le grain réduira brièvement la visibilité", "le confort baisse plus que la sécurité", "les rafales peuvent accompagner l'averse", "l'équipement étanche devient indispensable", "la tendance montre une accalmie"],
    endings: ["adapte ta tenue.", "garde un œil sur l'ouest.", "raccourcis si nécessaire.", "je réduis légèrement la note.", "attends le passage du grain.", "ce n'est pas le facteur principal."]
  },
  orage: {
    openings: ["L'orage ferme le port", "Pas de mât sous les éclairs", "Le tonnerre met fin à la discussion", "Les cumulonimbus ne plaisantent pas", "Je vois un risque électrique", "Le ciel devient dangereux"],
    observations: ["la foudre suffit à interdire le départ", "les rafales convectives sont imprévisibles", "la pluie n'est pas le vrai problème", "la situation peut évoluer brutalement", "aucune note sportive ne compense ce risque", "la sécurité passe directement au rouge"],
    endings: ["tu restes à terre.", "attends la fin complète de l'épisode.", "la décision est déconseillée.", "éloigne-toi du matériel exposé.", "on ne négocie pas avec la foudre.", "je recalculerai après l'alerte."]
  },
  canicule: {
    openings: ["Le soleil cogne plus que le vent", "La chaleur mérite sa propre manœuvre", "Le pont va cuire", "Le créneau est trop chaud", "Le thermomètre monte au mât", "Même le baromètre transpire"],
    observations: ["la déshydratation peut surprendre", "la réverbération augmente l'effort", "les enfants et débutants sont plus vulnérables", "une sortie courte reste préférable", "le matin offre une meilleure marge", "l'eau et la protection solaire deviennent prioritaires"],
    endings: ["pars tôt ou reporte.", "emporte largement de quoi boire.", "réduis la durée.", "protège-toi réellement.", "je garde une recommandation prudente.", "la mer ne rafraîchit pas tout."]
  },
  "grand-froid": {
    openings: ["Le froid mord jusque dans les cordages", "L'eau ne pardonnera aucune chute", "Le thermomètre descend trop bas", "Même Bosco garde ses gants", "Le vent refroidit tout", "Le créneau est glacé"],
    observations: ["le refroidissement sera rapide", "l'équipement thermique devient vital", "la fatigue peut être précoce", "le ressenti est inférieur à la température", "une immersion aurait des conséquences sévères", "le confort et la sécurité se rejoignent"],
    endings: ["je déconseille sans équipement spécialisé.", "raccourcis fortement.", "ne pars jamais seul.", "vérifie toute la protection thermique.", "la note reste basse.", "attends une fenêtre plus douce."]
  },
  "aucune-donnee": {
    openings: ["Je n'ai pas assez d'éléments", "Les instruments restent muets", "La feuille météo est vide", "Aucun relevé fiable n'est arrivé", "Je refuse de deviner la mer", "Le briefing ne tient pas debout"],
    observations: ["le vent manque au calcul", "les données marines sont absentes", "la position n'est pas confirmée", "le dernier relevé est inutilisable", "plusieurs valeurs se contredisent", "la confiance est nulle"],
    endings: ["je ne conclus pas.", "réessaie avec une connexion.", "observe sur place et consulte une source officielle.", "aucun départ conseillé par Bosco.", "la réponse restera indisponible.", "mieux vaut un silence qu'un faux conseil."]
  }
};

const dialogues = {};
for (const [category, seed] of Object.entries(dialogueSeeds)) {
  const phrases = [];
  for (let i = 0; i < 18; i += 1) {
    const opening = seed.openings[i % seed.openings.length];
    const observation = seed.observations[Math.floor(i / seed.openings.length) % seed.observations.length];
    const ending = seed.endings[(i * 7 + 2) % seed.endings.length];
    phrases.push(`${opening}, ${observation} ; ${ending}`);
  }
  dialogues[category] = phrases;
}

const boscoDialogues = {
  schemaVersion: version,
  locale: "fr-FR",
  voice: {
    identity: "ancien commandant normand, bourru, protecteur et chaleureux",
    forbiddenAddress: ["cher utilisateur", "bonjour utilisateur"],
    neverClaim: ["certitude absolue", "souvenir non enregistré", "donnée absente"],
    nameInterpolation: "{firstName}",
    style: ["phrases courtes", "images marines", "humour mesuré", "conseil concret"]
  },
  selection: {
    method: "weighted-least-recently-used",
    recentHistory: 12,
    avoidSameOpeningWithin: 6,
    avoidSameCategoryPhraseWithin: 12
  },
  categories: dialogues,
  phraseCount: Object.values(dialogues).reduce((sum, phrases) => sum + phrases.length, 0)
};

const boscoEmotions = {
  schemaVersion: version,
  emotions: {
    calme: { pose: "resting", expression: "neutre-attentive", animation: "breathing-slow", tone: "posé", decisionAffinity: ["decision-pleasant"] },
    satisfait: { pose: "satisfied", expression: "sourire-discret", animation: "nod-once", tone: "chaleureux", decisionAffinity: ["decision-pleasant"] },
    enthousiaste: { pose: "satisfied", expression: "sourire-franc", animation: "thumbs-up-settle", tone: "énergique", decisionAffinity: ["decision-ideal"] },
    amuse: { pose: "satisfied", expression: "sourcil-amusé", animation: "beard-chuckle", tone: "taquin", decisionAffinity: ["decision-low-sport"] },
    concentre: { pose: "thinking", expression: "regard-fixe", animation: "eyes-to-chart", tone: "précis", decisionAffinity: ["decision-cautious"] },
    protecteur: { pose: "protective", expression: "ferme-sans-agressivité", animation: "protective-settle", tone: "ferme", decisionAffinity: ["decision-discouraged"] },
    mefiant: { pose: "sea", expression: "sourcils-serrés", animation: "look-sea", tone: "vigilant", decisionAffinity: ["decision-cautious"] },
    inquiet: { pose: "worried", expression: "regard-soucieux", animation: "barometer-check", tone: "grave", decisionAffinity: ["decision-discouraged"] },
    contrarie: { pose: "annoyed", expression: "mâchoire-serrée", animation: "radio-tap", tone: "bourru", decisionAffinity: ["decision-unavailable", "decision-discouraged"] },
    perplexe: { pose: "chart", expression: "sourcil-levé", animation: "empty-chart-check", tone: "honnête", decisionAffinity: ["decision-unavailable"] }
  },
  transitions: {
    minimumMs: 1000,
    maximumMs: 3000,
    defaultMs: 2100,
    settleEmotion: "calme"
  }
};

const boscoUserProfile = {
  schemaVersion: version,
  storageKey: "bosco:user-profile:v4",
  requiredOnFirstUse: ["firstName", "craftType", "level", "favoriteSpot", "units"],
  defaults: {
    firstName: "",
    craftType: "catamaran",
    level: "intermediaire",
    favoriteSpot: "Jullouville",
    units: "marine",
    consentToLocalMemory: true
  },
  enums: {
    craftType: ["catamaran", "deriveur", "planche-a-voile", "wingfoil", "kayak", "paddle", "voilier", "autre"],
    level: ["debutant", "intermediaire", "confirme", "expert"],
    units: ["marine", "metric"]
  },
  validation: {
    firstName: { minLength: 2, maxLength: 40, pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$" },
    favoriteSpot: { minLength: 2, maxLength: 80 }
  },
  personalizationRules: [
    "Utiliser le prénom au maximum une fois par réponse.",
    "Ne jamais afficher de formule générique à la place du prénom.",
    "Le niveau réduit ou maintient la marge mais ne relève jamais un seuil de sécurité.",
    "Le type d'embarcation adapte le vocabulaire sans inventer de performance."
  ]
};

const boscoNavigationScore = {
  schemaVersion: version,
  scale: { min: 0, max: 10, precision: 0.1 },
  dimensions: {
    safety: { weight: 0.42, priority: 1 },
    sportingInterest: { weight: 0.18, priority: 4 },
    comfort: { weight: 0.12, priority: 5 },
    windStability: { weight: 0.1, priority: 2 },
    seaRegularity: { weight: 0.08, priority: 3 },
    weather: { weight: 0.06, priority: 6 },
    tide: { weight: 0.04, priority: 7 }
  },
  hardCaps: [
    { id: "storm", when: "storm", cap: 2 },
    { id: "violent-wind", when: "meanWind>=25 or gust>=32", cap: 2.5 },
    { id: "very-rough-sea", when: "waves>=2 or swell>=1.8", cap: 2.5 },
    { id: "dense-fog", when: "visibility<800", cap: 2 },
    { id: "unavailable", when: "dataConfidence=0", cap: 0 }
  ],
  bands: [
    { min: 0, max: 0, decision: "decision-unavailable", label: "Impossible de conclure" },
    { min: 0.1, max: 3.9, decision: "decision-discouraged", label: "Sortie déconseillée" },
    { min: 4, max: 5.9, decision: "decision-cautious", label: "Sortie prudente" },
    { min: 6, max: 7.2, decision: "decision-low-sport", label: "Favorable, peu sportive", conditional: "meanWind<7" },
    { min: 6, max: 7.9, decision: "decision-pleasant", label: "Sortie favorable" },
    { min: 8, max: 10, decision: "decision-ideal", label: "Sortie idéale" }
  ],
  explainability: {
    includeTopPositive: 2,
    includeTopNegative: 3,
    sentencePattern: "{score}/10 — {summary}",
    alwaysMentionSafetyGate: true
  }
};

const boscoWeatherEngine = {
  schemaVersion: version,
  acceptedUnits: {
    wind: ["kt", "kmh", "ms"],
    temperature: ["c", "f"],
    distance: ["m", "km", "nm"],
    pressure: ["hPa"],
    precipitation: ["mmh"]
  },
  canonicalUnits: {
    wind: "kt",
    temperature: "c",
    waveHeight: "m",
    wavePeriod: "s",
    visibility: "m",
    pressure: "hPa"
  },
  requiredFields: ["wind.meanKt", "wind.gustKt", "weather.visibilityM", "sea.waveHeightM", "data.observedAt"],
  optionalFields: [
    "wind.directionDeg",
    "weather.temperatureC",
    "weather.precipitationMmH",
    "weather.pressureHPa",
    "weather.pressureTrendHPa3h",
    "sea.waveDirectionDeg",
    "sea.wavePeriodS",
    "sea.swellHeightM",
    "sea.swellDirectionDeg",
    "tide.heightM",
    "tide.trend",
    "tide.highWaterAt",
    "tide.lowWaterAt"
  ],
  categories: {
    windKt: [
      { id: "calm", max: 3 },
      { id: "light", min: 3, max: 7 },
      { id: "ideal", min: 7, max: 18 },
      { id: "fresh", min: 18, max: 22 },
      { id: "strong", min: 22, max: 25 },
      { id: "dangerous", min: 25 }
    ],
    waveM: [
      { id: "flat", max: 0.3 },
      { id: "slight", min: 0.3, max: 0.8 },
      { id: "moderate", min: 0.8, max: 1.2 },
      { id: "rough", min: 1.2, max: 2 },
      { id: "very-rough", min: 2 }
    ],
    visibilityM: [
      { id: "dense-fog", max: 800 },
      { id: "poor", min: 800, max: 3000 },
      { id: "moderate", min: 3000, max: 8000 },
      { id: "good", min: 8000 }
    ]
  },
  derived: {
    gustFactor: "gustKt / max(meanKt, 1)",
    crossSeaAngleDeg: "smallestAngle(waveDirectionDeg, swellDirectionDeg)",
    windRelation: "relativeToShoreline(windDirectionDeg, spot.shorelineDeg)",
    trendQuality: "combine(windTrend, pressureTrend, precipitationTrend)"
  },
  staleAfterMinutes: 90,
  invalidAfterMinutes: 360,
  missingDataPolicy: "Conserver les dimensions calculables, réduire la confiance et ne jamais imputer une valeur météo."
};

const boscoAssetsMap = {
  schemaVersion: version,
  immutableReference: "/assets/bosco/master.webp",
  decisions: {
    "decision-ideal": { image: "/assets/bosco/decisions/decision-ideal.webp", pose: "satisfied", animation: "thumbs-up-settle", effect: "weather-clear", emotion: "enthousiaste" },
    "decision-pleasant": { image: "/assets/bosco/decisions/decision-pleasant.webp", pose: "satisfied", animation: "open-hand-settle", effect: "weather-soft", emotion: "satisfait" },
    "decision-low-sport": { image: "/assets/bosco/decisions/decision-low-sport.webp", pose: "resting", animation: "cup-glance", effect: "sea-flat", emotion: "amuse" },
    "decision-cautious": { image: "/assets/bosco/decisions/decision-cautious.webp", pose: "protective", animation: "protective-settle", effect: "sea-rough", emotion: "concentre" },
    "decision-discouraged": { image: "/assets/bosco/decisions/decision-discouraged.webp", pose: "protective", animation: "arms-crossed-settle", effect: "weather-heavy", emotion: "protecteur" },
    "decision-unavailable": { image: "/assets/bosco/decisions/decision-unavailable.webp", pose: "chart", animation: "empty-chart-check", effect: "radio-static", emotion: "perplexe" }
  },
  poses: {
    resting: "/assets/bosco/poses/pose-00.webp",
    listening: "/assets/bosco/poses/pose-01.webp",
    thinking: "/assets/bosco/poses/pose-02.webp",
    sea: "/assets/bosco/poses/pose-03.webp",
    barometer: "/assets/bosco/poses/pose-04.webp",
    chart: "/assets/bosco/poses/pose-05.webp",
    preparing: "/assets/bosco/poses/pose-06.webp",
    speaking: "/assets/bosco/poses/pose-07.webp",
    satisfied: "/assets/bosco/poses/pose-08.webp",
    worried: "/assets/bosco/poses/pose-09.webp",
    annoyed: "/assets/bosco/poses/pose-10.webp",
    protective: "/assets/bosco/poses/pose-11.webp"
  },
  effects: {
    "weather-clear": ["sun-glint", "lantern-low"],
    "weather-soft": ["cloud-soft", "lantern-low"],
    "weather-heavy": ["rain-heavy", "window-dark", "lantern-high"],
    "sea-flat": ["window-calm"],
    "sea-rough": ["window-waves", "lantern-high"],
    "radio-static": ["radio-hit", "window-neutral"],
    "fog-dense": ["fog-layer", "window-muted"],
    "storm-danger": ["rain-heavy", "lightning", "window-dark"]
  },
  exampleMapping: {
    if: ["wind.meanKt>25", "sea.waveHeightM>2"],
    then: ["decision-discouraged", "protective", "weather-heavy", "storm-danger"]
  }
};

const boscoEvents = {
  schemaVersion: version,
  events: {
    "app:opened": { reaction: ["listening", "resting"], durationMs: 1800, dialogue: "accueil" },
    "weather:requested": { reaction: ["barometer", "thinking"], durationMs: 2100, dialogue: "calcul" },
    "weather:received": { reaction: ["preparing", "decision"], durationMs: 2400, evaluate: true },
    "marine:updated": { reaction: ["sea", "preparing", "decision"], durationMs: 2600, evaluate: true },
    "geolocation:changed": { reaction: ["chart", "thinking"], durationMs: 1900, dialogue: "gps", evaluate: true },
    "spot:changed": { reaction: ["chart", "sea", "decision"], durationMs: 2200, dialogue: "gps", evaluate: true },
    "alert:created": { reaction: ["worried", "protective"], durationMs: 1500, dialogue: "notifications", evaluate: true },
    "connection:lost": { reaction: ["annoyed", "protective"], durationMs: 1500, dialogue: "connexion-perdue", evaluate: true },
    "connection:restored": { reaction: ["listening", "barometer"], durationMs: 1700, dialogue: "notifications", evaluate: true },
    "gps:unavailable": { reaction: ["chart", "perplexe"], durationMs: 1700, dialogue: "gps" },
    "data:invalid": { reaction: ["worried", "protective"], durationMs: 1600, dialogue: "erreur", evaluate: true },
    "briefing:spoken": { reaction: ["speaking", "decision"], durationMs: 2300 }
  },
  constraints: {
    minDurationMs: 1000,
    maxDurationMs: 3000,
    cancelPreviousOnCritical: true,
    suppressDecorativeWhenHidden: true
  }
};

const boscoMemory = {
  schemaVersion: version,
  storage: {
    type: "localStorage",
    profileKey: "bosco:user-profile:v4",
    memoryKey: "bosco:memory:v4",
    dialogueHistoryKey: "bosco:dialogue-history:v4",
    maximumDialogueHistory: 12
  },
  allowedFacts: [
    "firstName",
    "craftType",
    "level",
    "favoriteSpot",
    "units",
    "lastSelectedSpot",
    "lastBriefingAt",
    "lastDecision",
    "lastScore"
  ],
  forbiddenInferences: [
    "niveau déduit sans choix explicite",
    "spot supposé depuis une ancienne géolocalisation",
    "sortie réellement effectuée depuis un briefing",
    "préférence déduite d'une seule consultation",
    "souvenir social ou familial non saisi"
  ],
  rules: [
    "N'utiliser que les clés présentes dans allowedFacts.",
    "Ne jamais transformer une prévision en souvenir de sortie.",
    "Afficher l'origine locale de la mémoire.",
    "Permettre l'effacement complet depuis les réglages.",
    "Si le consentement local est désactivé, conserver seulement l'état de session."
  ],
  emptyState: "Je ne connais encore que ce que tu viens de me dire."
};

write("bosco-brain.json", boscoBrain);
write("bosco-rules.json", boscoRules);
write("bosco-dialogues.json", boscoDialogues);
write("bosco-emotions.json", boscoEmotions);
write("bosco-user-profile.json", boscoUserProfile);
write("bosco-navigation-score.json", boscoNavigationScore);
write("bosco-weather-engine.json", boscoWeatherEngine);
write("bosco-assets-map.json", boscoAssetsMap);
write("bosco-events.json", boscoEvents);
write("bosco-memory.json", boscoMemory);

console.log(`Generated 10 Bosco brain files in ${outputDir}`);
console.log(`Dialogue phrases: ${boscoDialogues.phraseCount}`);
