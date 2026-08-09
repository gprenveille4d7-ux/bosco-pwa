/*
BOSCO — Dialogues généraux

Voix canonique : franche, bourrue et chaleureuse. Bosco chambre quand la sortie
est permise, mais ne plaisante jamais avec une priorité de sécurité.

Le moteur attend 2 000 entrées :
10 familles météo × 5 forces de vent × 5 niveaux de score × 8 variantes.
Les identifiants, décisions et priorités de sécurité restent strictement stables.
*/

export const accueilBosco = {
  sansPrenom: "Ah, te voilà. Approche donc du comptoir, matelot.",
  avecPrenom: "Ah, te voilà, {prenom}. Approche donc du comptoir.",
};

export const invitationsCarnetEmile = [
  "Bon… ça, c’est la version qui court sur les quais. Émile, lui, consignait les faits dans son carnet. Va donc y jeter un œil, flibustier : même les vieux loups ont encore des choses à apprendre.",
  "Moi, je te raconte ce que les marins se transmettaient au comptoir. Émile notait ce qui résistait aux embruns et aux années. Ouvre son carnet, matelot, et compare les deux versions.",
  "Ne reste pas planté là, marin d’eau douce. Le vieux Émile a laissé sa trace dans le carnet, et je parie mon bonnet qu’il va encore te surprendre.",
];

export const conclusionsHistoiresBosco = [
  "Voilà, matelot. La mer garde ses secrets, mais elle laisse parfois traîner quelques indices.",
  "Sacré Émile… discret comme une ancre, mais solide comme elle.",
  "Tu connais maintenant la légende et les faits. À toi de tenir la barre entre les deux.",
  "La parole d’un côté, l’encre de l’autre… et la Manche au milieu pour ne rien confirmer.",
];

const WEATHER_FAMILIES = [
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

const WIND_BANDS = ["calm", "light", "favorable", "sporty", "dangerous"];
const SCORE_BANDS = ["critical", "poor", "mixed", "good", "excellent"];

const WEATHER_LINES = {
  clear: [
    "Le ciel est franc et l’horizon porte loin.",
    "La Manche se montre sans un nuage pour lui barrer la route.",
    "La lumière découpe proprement toute la ligne du large.",
    "Dehors, la visibilité est nette jusqu’au bout de l’horizon.",
    "Le ciel a rangé ses rideaux et la côte se lit sans effort.",
    "La fenêtre du Tourbillon donne sur un large clair et bien ouvert.",
    "Pas un recoin sombre là-dehors : on voit venir les choses.",
    "Le bleu tient tout l’horizon et la vue ne raconte pas d’histoires.",
  ],
  "mainly-clear": [
    "Quelques nuages passent, mais le large reste bien lisible.",
    "Le ciel garde deux ou trois moutons, rien qui ferme l’horizon.",
    "La lumière gagne encore largement la partie sur les nuages.",
    "Le large reste dégagé malgré quelques bancs qui se promènent.",
    "Les nuages sont là, mais ils laissent la côte respirer.",
    "La Manche a mis un peu de gris dans son bleu, sans cacher son jeu.",
    "Quelques ombres courent sur l’eau, la visibilité reste propre.",
    "Le ciel se couvre par endroits, mais l’horizon tient bon.",
  ],
  "partly-cloudy": [
    "Nuages et éclaircies se partagent le large sans se bousculer.",
    "Le ciel change de couleur, mais les repères restent bien en place.",
    "Les éclaircies ouvrent encore de belles fenêtres sur la Manche.",
    "Un peu de gris, un peu de lumière : le large reste lisible.",
    "Les nuages circulent, sans encore manger l’horizon.",
    "La côte passe de l’ombre au clair, mais ne disparaît pas.",
    "Le ciel hésite, la visibilité beaucoup moins.",
    "Quelques bancs chargés passent au large, les repères restent nets.",
  ],
  overcast: [
    "Le plafond est gris, mais l’horizon reste correctement dessiné.",
    "La Manche a tiré sa couverture grise sur tout le large.",
    "Le ciel est fermé, sans pour autant effacer les repères.",
    "Pas une trouée de bleu, mais la côte reste lisible.",
    "La lumière est plate et le large manque un peu de relief.",
    "Le gris tient la fenêtre du Tourbillon d’un bord à l’autre.",
    "Le ciel pèse bas, mais il ne raconte pas encore de mauvais tour.",
    "Tout est gris dehors ; au moins, la Manche annonce la couleur.",
  ],
  fog: [
    "Le brouillard mange les distances et raccourcit sérieusement les repères.",
    "La brume gomme la côte plus vite qu’un mousse ne vide une chope.",
    "Dehors, les amers jouent à cache-cache dans un coton bien épais.",
    "La visibilité se referme et le large perd ses contours.",
    "La brume traîne bas sur l’eau : il faudra naviguer aux instruments.",
    "L’horizon a disparu derrière un rideau de brume.",
    "La Manche cache ses repères et n’en rend que quelques-uns.",
    "On distingue mal le large depuis la fenêtre du Tourbillon.",
  ],
  drizzle: [
    "Un crachin fin graisse l’horizon, sans encore le fermer.",
    "La bruine mouille tout doucement et ternit un peu les repères.",
    "Le crachin normand s’invite, discret mais bien installé.",
    "Une pluie fine passe sur le large et réduit légèrement la vue.",
    "La Manche porte son voile de bruine, rien de très élégant.",
    "Quelques gouttes serrées brouillent la vitre du Tourbillon.",
    "Le ciel laisse tomber un crachin régulier sur toute la côte.",
    "La bruine s’accroche au large et demande un œil attentif.",
  ],
  rain: [
    "La pluie marque le large et réduit franchement la visibilité.",
    "Les averses passent dru : les repères seront moins confortables.",
    "La Manche prend la pluie de face et l’horizon se brouille.",
    "Les gouttes serrent les rangs sur la vitre du Tourbillon.",
    "Le ciel arrose la côte sans faire semblant.",
    "Un rideau de pluie traverse le large et masque par moments les amers.",
    "La pluie s’installe et rend chaque repère moins évident.",
    "Dehors, ça mouille assez pour exiger ciré, vigilance et visibilité surveillée.",
  ],
  "heavy-rain": [
    "La pluie tombe à seaux et avale une bonne part de l’horizon.",
    "Un mur d’eau traverse le large : les repères deviennent maigres.",
    "Les averses sont lourdes et la visibilité prend un sérieux coup.",
    "La Manche disparaît par morceaux derrière des rideaux de pluie.",
    "Ça cogne sur les vitres du Tourbillon et ça ferme le paysage.",
    "La pluie est assez forte pour compliquer toute lecture du plan d’eau.",
    "Le ciel vide ses seaux sur la côte et ne laisse guère de profondeur.",
    "Dehors, l’eau tombe presque à l’horizontale et les amers s’effacent.",
  ],
  snow: [
    "La neige brouille les distances et refroidit sérieusement le tableau.",
    "Des grains blancs traversent le large et masquent les repères.",
    "La côte blanchit, tandis que la visibilité se resserre.",
    "La neige danse devant la fenêtre et le froid mord déjà les doigts.",
    "Le large prend une drôle de couleur sous les averses de neige.",
    "Les grains de neige ferment l’horizon par passages.",
    "Le froid et la neige ajoutent une vraie contrainte à la sortie.",
    "La Manche se couvre de blanc, et ce n’est pas pour la décoration.",
  ],
  storm: [
    "L’orage ferme l’horizon et les éclairs montrent déjà les dents.",
    "Un front noir traverse le large avec des éclairs bien nets.",
    "Le tonnerre roule sur la Manche et le ciel se referme.",
    "Des éclairs déchirent le ciel derrière la vitre du Tourbillon.",
    "Le grain orageux avale la lumière sur toute la côte.",
    "La Manche disparaît sous une masse sombre chargée d’électricité.",
    "Le ciel lance ses éclairs au-dessus d’un large devenu noir.",
    "L’orage occupe tout le paysage et ne laisse aucune place au doute.",
  ],
};

const WIND_LINES = {
  calm: [
    "Le vent dort encore ; il faudra de la patience pour avancer.",
    "Le souffle est si maigre qu’une mouette pressée te doublerait.",
    "L’air bouge à peine et les voiles risquent de rester molles.",
    "Le vent manque de coffre : aujourd’hui, la vitesse restera au comptoir.",
    "Les risées seront rares et il faudra les cueillir une par une.",
    "Le vent reste couché ; les coques ne seront pas bousculées.",
    "À peine de quoi faire frémir une écoute, encore moins chanter les haubans.",
    "Le souffle manque de conviction et la navigation promet d’être lente.",
  ],
  light: [
    "Le vent est léger, régulier et sans mauvaise intention.",
    "Il y a juste assez d’air pour avancer sans secouer la vaisselle.",
    "Le souffle travaille doucement et laisse de la marge aux manœuvres.",
    "Les risées sont modestes, mais propres et faciles à lire.",
    "Le vent pousse sans brutalité : ce sera une navigation tranquille.",
    "L’air fait son travail sans chercher la bagarre.",
    "Le vent reste sage et devrait porter sans fatiguer l’équipage.",
    "Un petit souffle bien rangé accompagne le plan d’eau.",
  ],
  favorable: [
    "Le vent est bien établi, régulier et taillé pour naviguer proprement.",
    "Voilà un souffle qui porte sans arracher la barre des mains.",
    "Le vent a la bonne mesure : assez de coffre, encore de la marge.",
    "Les risées sont franches et l’ensemble reste facile à anticiper.",
    "Le vent travaille comme un bon équipier : présent, mais pas envahissant.",
    "Le souffle est propre et devrait faire avancer sans corriger les imprudents.",
    "Il y a de quoi faire chanter le gréement sans le faire hurler.",
    "Le vent tient son cap, avec une force agréable et lisible.",
  ],
  sporty: [
    "Le vent a du coffre et les rafales demanderont des bras et de l’attention.",
    "Ça souffle franchement : la barre ne pardonnera pas une main distraite.",
    "Les risées arrivent solides et la navigation sera physique.",
    "Le vent veut jouer vite ; il faudra manœuvrer proprement.",
    "Les rafales commencent à taper sur la table, elles aussi.",
    "Le souffle est musclé : de la marge, du réglage et pas de bravade.",
    "Le gréement va parler fort et l’équipage devra répondre juste.",
    "Le vent pousse dur, sans être encore hors de portée d’un marin préparé.",
  ],
  dangerous: [
    "Les rafales ont franchi la limite acceptable et vident toute marge de sécurité.",
    "Le vent frappe trop fort pour confier une coque au large.",
    "La puissance du souffle rendrait chaque manœuvre dangereuse.",
    "Les rafales commanderaient plus fort que le barreur.",
    "Le vent cherche la casse, et aucun équipage n’a rien à y gagner.",
    "Les coups de vent peuvent coucher la toile avant de laisser le temps de réagir.",
    "Le souffle est devenu assez violent pour imposer le quai.",
    "La barre serait en lutte dès la mise à l’eau : la limite est dépassée.",
  ],
};

const STORM_WIND_LINES = {
  calm: [
    "Même si le vent paraît couché, l’électricité dans le ciel suffit à interdire la sortie.",
    "Le souffle est faible, mais un orage n’a pas besoin de vent fort pour devenir dangereux.",
    "L’air bouge à peine ; la foudre, elle, ne demande aucune risée pour frapper.",
    "Le vent semble calme, et cela ne retire rien au danger électrique.",
    "Pas de rafales marquées pour l’instant, mais l’orage suffit à fermer le plan d’eau.",
    "Le souffle reste discret ; le risque orageux, lui, est parfaitement clair.",
    "Le vent dort presque, mais personne ne navigue sous la foudre.",
    "L’air manque de force et l’orage apporte, à lui seul, bien assez de danger.",
  ],
  light: [
    "Le vent reste léger, mais l’électricité dans le ciel rend la sortie inacceptable.",
    "Le souffle paraît sage ; sous un orage, cette apparence ne donne aucune sécurité.",
    "L’air travaille doucement, tandis que la foudre impose déjà le quai.",
    "Le vent n’est pas le problème principal : l’orage suffit à interdire la mise à l’eau.",
    "Les risées sont modestes, mais aucun vent léger ne rend la foudre navigable.",
    "Le souffle ne menace pas encore ; le ciel électrique, si.",
    "Le vent reste maniable, mais l’orage enlève toute marge acceptable.",
    "Un petit vent accompagne le front, et le front commande de rester à terre.",
  ],
  favorable: [
    "Le vent serait navigable seul ; avec cet orage, il ne vaut plus aucun feu vert.",
    "Le souffle a la bonne mesure, mais la foudre annule immédiatement cet avantage.",
    "Le vent paraît propre ; le ciel électrique rend pourtant tout départ irresponsable.",
    "Les risées sont lisibles, contrairement au prochain impact de foudre.",
    "Le vent pourrait convenir, mais un orage ne se compense jamais par une bonne brise.",
    "Le souffle tient bien son rôle ; le danger venu du ciel ferme tout de même le plan d’eau.",
    "Il y aurait de quoi avancer proprement sans cet orage au-dessus du large.",
    "Le vent est bien établi, mais la sécurité s’arrête dès que la foudre entre en scène.",
  ],
  sporty: [
    "Le vent a du coffre et l’orage ajoute un danger que personne ne maîtrise.",
    "Les rafales sont solides ; avec la foudre, la moindre sortie devient inacceptable.",
    "Le souffle pousse déjà fort et le front électrique ferme définitivement le plan d’eau.",
    "Le vent veut jouer vite, tandis que l’orage interdit même d’entrer dans la partie.",
    "Les rafales tapent fort et le ciel frappe plus fort encore.",
    "Le vent est musclé ; sous cet orage, il ne reste aucune marge responsable.",
    "Le gréement parlerait fort, mais personne ne l’écoute sous un ciel électrique.",
    "Le souffle pousse dur et la foudre rend tout départ impensable.",
  ],
  dangerous: WIND_LINES.dangerous,
};

const OPENING_LINES = {
  critical: [
    "Halte-là, matelot.",
    "Pose ce ciré, marin d’eau douce.",
    "Non, moussaillon, on ne touche pas aux amarres.",
    "Écoute-moi bien, bonhomme.",
    "Pas si vite, flibustier.",
    "Une main sur la table : aujourd’hui, c’est Bosco qui tranche.",
    "Range-moi cette envie de large, matelot.",
    "Approche du comptoir et ouvre bien tes oreilles.",
  ],
  poor: [
    "Doucement, flibustier.",
    "Ne bombe pas le torse trop vite, marin d’eau douce.",
    "Attends avant de larguer quoi que ce soit, matelot.",
    "Je vois déjà ton nez tourné vers le large, moussaillon.",
    "Assieds-toi deux secondes, bonhomme.",
    "Bosco va calmer tes ardeurs de corsaire.",
    "Pas de grande bravade aujourd’hui, vieux loup.",
    "Regarde-moi ça avant de jouer au flibustier.",
  ],
  mixed: [
    "Bon, matelot, on va parler franchement.",
    "Ça se discute, flibustier, mais pas n’importe comment.",
    "Approche, moussaillon : la Manche demande un marché.",
    "Je ne ferme pas la porte, bonhomme.",
    "Garde une main sur ton enthousiasme, marin d’eau douce.",
    "Bosco ne dit pas non, mais il garde le poing sur la table.",
    "Tu peux sourire, vieux loup, pas encore fanfaronner.",
    "Écoute les conditions avant d’écouter ton impatience, matelot.",
  ],
  good: [
    "Ah, voilà qui se présente bien, matelot.",
    "Tu peux déjà sourire, vieux loup.",
    "Bonne nouvelle, flibustier.",
    "Cette fois, marin d’eau douce, ton envie tombe plutôt juste.",
    "Le comptoir ne te retiendra pas longtemps, moussaillon.",
    "Bosco desserre les amarres, bonhomme.",
    "Voilà une Manche qui mérite qu’on lui rende visite, matelot.",
    "Prépare donc ton affaire, vieux corsaire.",
  ],
  excellent: [
    "Ah, nom d’un foc, voilà une belle fenêtre, matelot !",
    "Debout, flibustier, la Manche t’attend !",
    "Cette fois, même Bosco a envie de quitter son comptoir.",
    "Sors ton plus beau sourire de marin d’eau douce.",
    "Voilà le genre de journée qu’un vieux loup n’oublie pas.",
    "Nom d’une ancre, tout se met en place, moussaillon !",
    "Tu voulais naviguer, bonhomme ? La Manche te répond oui.",
    "Largue ton hésitation, flibustier : le moment est beau.",
  ],
  safety: [
    "Non. Et je veux être parfaitement clair.",
    "Aucun départ, matelot.",
    "Pose ce ciré. La discussion s’arrête ici.",
    "Tu restes à terre, bonhomme.",
    "Pas une coque à l’eau aujourd’hui.",
    "Bosco ferme la porte au départ.",
    "Range le gréement et écoute bien.",
    "La sécurité commande le quai. Point final.",
  ],
};

const VERDICT_LINES = {
  critical: [
    "La marge n’y est pas. Le bateau reste à terre, et cette décision ne se discute pas.",
    "Le score est trop bas pour une sortie honnête. Tu restes au sec et tu reviendras avec de meilleures cartes en main.",
    "Aujourd’hui, je refuse le départ. La Manche sera encore là demain, et je compte bien que toi aussi.",
    "Les conditions ne laissent pas assez de sécurité. On range le matériel et on garde son orgueil au chaud.",
    "Je ne t’envoie pas sur l’eau avec si peu de marge. Bois quelque chose et attends un créneau plus propre.",
    "Le verdict est non. Ce n’est pas de la peur, c’est ce qui permet aux vieux marins de le devenir.",
    "La sortie est refusée. Tu peux taper du pied, le bateau ne bougera pas du quai.",
    "Pas de mise à l’eau. Un bon marin sait partir ; un meilleur sait aussi rester.",
  ],
  poor: [
    "Je te déconseille la sortie. Le plaisir serait maigre et les contraintes trop nombreuses.",
    "Tu pourrais insister, mais ce serait chercher les ennuis pour peu de récompense. Reviens quand la Manche sera mieux lunée.",
    "Garde ton énergie pour un meilleur créneau. Aujourd’hui, le large ne mérite pas qu’on lui coure après.",
    "Bosco ne t’interdit rien, mais il te conseille fermement de rester à terre.",
    "La sortie promet plus de complications que de sourires. Laisse donc le bateau tranquille.",
    "Je garderais les amarres en place. Il y aura bientôt un jour plus généreux et bien plus agréable.",
    "Ce n’est pas le bon moment. Pas de bravade : reporte et tu profiteras vraiment de la prochaine fenêtre.",
    "Mieux vaut regarder la Manche du comptoir que la subir sans plaisir. Je te conseille de reporter.",
  ],
  mixed: [
    "Ça peut se tenter, mais tu fais court, tu gardes le retour facile et tu surveilles chaque évolution.",
    "Je t’accorde la sortie avec réserve. Reste dans tes limites et rentre au premier doute.",
    "Tu peux mettre à l’eau sans transformer l’essai en expédition. Prudence à la barre et solution de repli prête.",
    "Le départ est possible, pas garanti confortable. Tu restes près de ton point de retour et tu ne joues pas au héros.",
    "Je ne dis pas non. Je dis : trajet simple, marge large et demi-tour dès que la Manche hausse le ton.",
    "Tu peux y aller prudemment. Prépare ton retour avant ton départ, comme le ferait un marin qui veut vieillir.",
    "Sortie courte et surveillée, voilà le marché. Si les conditions bougent, tu rentres sans discuter.",
    "Bosco ouvre la porte à moitié. Navigue proprement, garde de la marge et ne laisse pas ton enthousiasme tenir la barre.",
  ],
  good: [
    "Tu peux y aller. Navigue proprement, garde un œil sur le retour et profite : la Manche est de bonne compagnie.",
    "La sortie est favorable. File préparer ton embarcation avant que je ne change d’avis, et reviens avec le sourire.",
    "Bosco te donne son feu vert. Garde tes bonnes habitudes de sécurité, puis va prendre ta ration de large.",
    "Tu peux larguer les amarres sereinement. Pas de fanfaronnade, juste une belle navigation à savourer.",
    "Le départ est bon. Vérifie une dernière fois ton matériel et va donc respirer ailleurs qu’au-dessus de mon comptoir.",
    "Je ne vais pas naviguer à ta place, moussaillon. Tout est assez propre : prépare-toi calmement et profite.",
    "La Manche t’ouvre la porte. Entre poliment, reste attentif, et elle devrait te rendre un beau moment.",
    "Tu as mon accord, flibustier. Fais les choses bien et reviens me raconter ce que le large avait à dire.",
  ],
  excellent: [
    "Largue les amarres ! Tout se prête à une très belle sortie ; reste sérieux sur la sécurité et régale-toi.",
    "C’est un grand oui. File avant que la Manche ne change d’humeur, et profite pour tous ceux qui restent au comptoir.",
    "La fenêtre est excellente. Prépare tout proprement, puis va faire chanter le large, vieux loup.",
    "Tu peux partir le cœur léger. Les beaux jours comme celui-ci sont rares, alors savoure chaque minute.",
    "Bosco ouvre grand la porte. Va naviguer, flibustier, et tâche de revenir avec ce sourire-là intact.",
    "Les conditions sont remarquables. Un dernier contrôle du matériel, puis dehors, matelot : aujourd’hui, la Manche fait un cadeau.",
    "Aucune raison de rester à bavarder ici. Le large est généreux ; navigue bien et profite pleinement.",
    "C’est ta journée, moussaillon. Garde la tête froide, le cœur léger et va chercher ce beau moment.",
  ],
  safety: [
    "Le danger est établi. Aucun score flatteur, aucune expérience et aucune envie ne corrigent ça.",
    "Les conditions imposent le quai. Tu restes à terre et tu attends une fenêtre réellement sûre.",
    "Il n’y a aucune marge pour une sortie responsable. Le bateau ne quitte pas sa place.",
    "La limite de sécurité est dépassée. Aujourd’hui, renoncer est la seule manœuvre correcte.",
    "Aucune bravade ne changera les faits. Tu protèges l’équipage en restant au sec.",
    "La Manche est plus forte que toi, plus forte que moi, et elle ne négocie pas. Aucun départ.",
    "Le risque est trop élevé pour discuter. On range tout et on attend que les conditions redeviennent navigables.",
    "La décision est ferme : tu ne pars pas. La prudence ramène les marins chez eux.",
  ],
};

const DECISION_BY_SCORE = {
  critical: "refuse",
  poor: "discouraged",
  mixed: "cautious",
  good: "favorable",
  excellent: "excellent",
};

function buildDialogue(weatherFamily, windBand, scoreBand, variantIndex) {
  const safetyPriority = weatherFamily === "storm" || windBand === "dangerous";
  const tone = safetyPriority ? "safety" : scoreBand;
  const variant = String(variantIndex + 1).padStart(2, "0");

  return {
    id: `${weatherFamily}:${windBand}:${scoreBand}:${variant}`,
    weatherFamily,
    windBand,
    scoreBand,
    text: [
      OPENING_LINES[tone][variantIndex],
      WEATHER_LINES[weatherFamily][variantIndex],
      (weatherFamily === "storm" ? STORM_WIND_LINES : WIND_LINES)[windBand][variantIndex],
      VERDICT_LINES[tone][variantIndex],
    ].join(" "),
    decision: safetyPriority ? "refuse" : DECISION_BY_SCORE[scoreBand],
    safetyPriority,
  };
}

export const dialoguesGenerauxBosco = Object.freeze(
  Object.fromEntries(
    WEATHER_FAMILIES.map((weatherFamily) => [
      weatherFamily,
      Object.freeze(
        WIND_BANDS.flatMap((windBand) =>
          SCORE_BANDS.flatMap((scoreBand) =>
            Array.from({ length: 8 }, (_, variantIndex) =>
              Object.freeze(buildDialogue(weatherFamily, windBand, scoreBand, variantIndex)),
            ),
          ),
        ),
      ),
    ]),
  ),
);
