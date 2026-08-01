import type { EditorialSource, SquareContent } from "@/data/square-content";

const PORT_ID = "mont-saint-michel";
const VERIFIED_AT = "2026-08-02";

const ABBEY_HISTORY: EditorialSource = {
  sourceId: "epmsm-abbaye-millenaire",
  title: "Une abbaye millénaire",
  organisation: "Établissement public du Mont Saint-Michel",
  url: "https://www.montsaintmichel.gouv.fr/le-mont-et-sa-baie/une-abbaye-millenaire",
  accessedAt: VERIFIED_AT,
};

const MONT_HISTORY: EditorialSource = {
  sourceId: "epmsm-histoire-mont",
  title: "Une histoire vivante et millénaire",
  organisation: "Établissement public du Mont Saint-Michel",
  url: "https://www.montsaintmichel.gouv.fr/le-mont-et-sa-baie/histoire-du-mont-saint-michel",
  accessedAt: VERIFIED_AT,
};

const UNESCO_SOURCE: EditorialSource = {
  sourceId: "unesco-mont-baie-80",
  title: "Mont-Saint-Michel and its Bay",
  organisation: "Centre du patrimoine mondial de l’UNESCO",
  url: "https://whc.unesco.org/fr/list/80/",
  accessedAt: VERIFIED_AT,
};

const DESTINATION_HISTORY: EditorialSource = {
  sourceId: "destination-msm-histoire",
  title: "Histoire du Mont Saint-Michel",
  organisation: "Destination Mont Saint-Michel – Normandie",
  url: "https://www.ot-montsaintmichel.com/je-decouvre/visiter-le-mont-saint-michel/je-visite-le-mont-saint-michel/histoire/",
  accessedAt: VERIFIED_AT,
};

function fiction(
  position: number,
  title: string,
  text: string,
  category = "légende fictive de Bosco",
): SquareContent {
  return {
    contentId: `mont-saint-michel-fiction-${String(position).padStart(2, "0")}`,
    portId: PORT_ID,
    authorType: "bosco",
    contentType: "legend",
    title,
    text,
    category,
    sources: [],
    verifiedAt: VERIFIED_AT,
    reliability: "fictionalised",
    publicationStatus: "published",
    priority: 110 - position,
    offlineAvailable: true,
    narrativeCategory: "fiction",
    version: 27,
  };
}

function real(
  position: number,
  title: string,
  text: string,
  historicalPeriod: string,
  sources: readonly EditorialSource[],
): SquareContent {
  return {
    contentId: `mont-saint-michel-real-${String(position).padStart(2, "0")}`,
    portId: PORT_ID,
    authorType: "emile",
    contentType: "documentedFact",
    title,
    text,
    category: "histoire réelle du carnet d’Émile",
    historicalPeriod,
    sources,
    verifiedAt: VERIFIED_AT,
    reliability: "verified",
    publicationStatus: "published",
    priority: 110 - position,
    offlineAvailable: true,
    narrativeCategory: "real",
    version: 27,
  };
}

export const MONT_SAINT_MICHEL_V27_CONTENTS = [
  fiction(
    1,
    "La cloche qui attendait la brume",
    "Écoute, bonhomme. Les anciens disaient qu’une petite cloche dormait sous les grèves, juste là où le rocher commence à perdre son ombre. Elle ne sonnait ni pour les offices ni pour les navires : elle attendait seulement que la brume efface le Mont. Alors, trois coups montaient du sable. Le premier rappelait aux marcheurs de regarder derrière eux, le deuxième leur ordonnait de suivre le vent, et le troisième appartenait à la mer. Un soir, un garçon voulut répondre avec une clochette de cuivre. La brume s’ouvrit devant lui jusqu’aux remparts, mais se referma aussitôt sur ses traces. Il rentra sans se retourner. Depuis, quand le Mont disparaît, les gens d’ici tendent l’oreille. Pas pour trouver un chemin, non : pour savoir si la baie consent à leur en laisser un.",
  ),
  fiction(
    2,
    "Le passeur des trois marées",
    "On racontait au comptoir qu’un passeur sans barque traversait la baie trois fois par siècle. À la première marée, il conduisait les pèlerins perdus. À la deuxième, il ramenait les imprudents qui avaient cru courir plus vite que l’eau. À la troisième, il ne prenait personne : il marchait seul jusqu’au Mont, avec une rame sur l’épaule, pour rappeler à la mer qu’un passage n’est jamais une promesse. Un pêcheur de Genêts jura l’avoir suivi une nuit de lune. Chaque pas du passeur faisait jaillir une étincelle bleue dans le sable mouillé. Arrivé au rocher, l’homme s’était retourné : il n’avait pas de visage, seulement le reflet des nuages. Le pêcheur rentra vivant et ne traversa plus jamais sans guide. Sage décision, si tu veux mon avis.",
  ),
  fiction(
    3,
    "Le mouton d’argent des herbus",
    "Dans les herbus, disait Bosco, naissait parfois un agneau dont la laine brillait comme la baie sous la pleine lune. Aucun berger ne pouvait le garder. Les clôtures s’ouvraient devant lui, les chiens baissaient la tête et les cloches du Mont se taisaient pour l’écouter passer. Une année de grande tempête, l’agneau d’argent marcha jusqu’au bord des grèves et bêla trois fois. Les moutons quittèrent les prés avant que l’eau ne les recouvre. Au matin, on ne retrouva de lui qu’une mèche de laine accrochée à une salicorne. Les anciens la conservèrent dans une boîte à sel, mais elle disparut le jour où quelqu’un voulut la vendre. Depuis, lorsqu’un troupeau change soudain de direction, les bergers préfèrent regarder le ciel avant de discuter avec leurs bêtes.",
  ),
  fiction(
    4,
    "La lanterne de l’escalier invisible",
    "Il existe, paraît-il, un escalier que les visiteurs ne voient jamais. Il part d’une ruelle étroite, traverse le granit et rejoint une porte au-dessus des nuages. Une vieille gardienne l’éclairait avec une lanterne dont la flamme ne vacillait pas, même sous le vent de noroît. Elle n’ouvrait le passage qu’aux gens capables de monter sans demander combien de marches il restait. Un marin pressé tenta de la dépasser. Il grimpa toute la nuit et se retrouva au matin devant la même marche, la semelle usée et l’orgueil un peu moins solide. La gardienne lui donna une gorgée d’eau et dit : “Le Mont ne se gravit pas, il se mérite.” Puis l’escalier disparut. Alors prends ton temps dans les ruelles, matelot. Certaines portes n’aiment pas qu’on les bouscule.",
  ),
  fiction(
    5,
    "Le sablier enfoui dans la baie",
    "Sous la baie reposerait un sablier plus haut qu’un mât, avec du sable noir dans une ampoule et du sable blond dans l’autre. À chaque renversement, la mer monte ou se retire. Les jours ordinaires, personne ne l’entend. Mais pendant les grandes marées, le granit gronde doucement : ce sont les deux verres qui se retournent sous le poids de l’eau. Un moine curieux voulut autrefois compter les grains pour prévoir toutes les marées à venir. Il creusa jusqu’à trouver un éclat de verre, puis comprit que chaque grain portait le nom d’un voyageur. Il reboucha le trou et brûla ses calculs. Depuis, les horaires se lisent, les courants s’observent et les vaniteux gardent leurs pelles au sec. La mer accepte les prévisions ; elle se méfie de ceux qui prétendent la posséder.",
  ),
  fiction(
    6,
    "La porte que la mer garde fermée",
    "Au pied des remparts, bien en dessous des pierres visibles, une porte de chêne serait scellée par sept ferrures. Elle ne donne ni sur une cave ni sur un souterrain, mais sur une chambre où la mer range ce qu’elle ne veut pas rendre : ancres sans navire, messages sans bouteille, chansons oubliées par les équipages. Une nuit, un contrebandier trouva la clef dans le ventre d’un congre. Il ouvrit un seul verrou. Aussitôt, toutes les voix perdues soufflèrent à travers la serrure et appelèrent leurs propriétaires. L’homme referma la ferrure, jeta la clef au large et entra le lendemain à l’abbaye pour ne plus mentir. On dit que la clef revient parfois dans les filets. Les bons pêcheurs la rejettent sans la regarder. Tout trésor n’a pas besoin d’être remonté.",
  ),
  fiction(
    7,
    "L’ombre de Tombelaine",
    "Quand le soleil descend derrière la baie, l’ombre de Tombelaine s’allonge parfois dans la mauvaise direction. Elle file vers le Mont au lieu de suivre la lumière. Bosco affirme qu’elle cherche l’ombre d’un guetteur resté seul pendant un ancien siège. L’homme avait promis de prévenir les défenseurs si un danger traversait les grèves. La paix revenue, personne ne pensa à relever sa veille, et son ombre continua la ronde. Les soirs où elle touche les remparts, un courant d’air parcourt les ruelles et fait claquer les volets un à un, du bas jusqu’à l’abbaye. Les habitants savent alors que la baie est tranquille. Si les volets restent muets, ils observent plus longtemps l’horizon. Une sentinelle de pierre ne remplace pas un bulletin, mais elle rappelle qu’un bon marin ne cesse jamais de regarder.",
  ),
  fiction(
    8,
    "La plume rouge de l’archange",
    "Ne cherche pas cette histoire dans les livres d’Émile : celle-ci vient des veillées. Après un combat dans les nuages, l’archange aurait perdu une plume rouge qui tomba sur le rocher. Un enfant la trouva et s’en servit pour dessiner un bateau sur une dalle. À la marée suivante, un vrai canot rouge attendait au pied du Mont. Il pouvait naviguer sans voile et remontait toujours contre le courant, mais seulement pour secourir quelqu’un. L’enfant le garda jusqu’au jour où il refusa de sortir parce que la pluie mouillait son manteau. Le canot redevint dessin et la plume s’envola. Certains prétendent qu’elle s’est posée sur un vieux bonnet de marin. Balivernes, évidemment. Mais si un bonnet rouge te conseille la prudence, tu ferais bien de l’écouter.",
  ),
  fiction(
    9,
    "Le boulanger de la marée haute",
    "Une nuit d’hiver, alors que le Mont était encerclé par l’eau, une odeur de pain chaud descendit de la Grande Rue. Pourtant tous les fours étaient éteints. Les habitants suivirent le parfum jusqu’à une porte murée. Derrière, un boulanger pétrissait une pâte couleur d’écume. Il donna à chacun un petit pain salé et demanda qu’on en garde la moitié pour le voyageur suivant. Au matin, la porte avait disparu. Ceux qui avaient partagé leur pain ne manquèrent de rien pendant la tempête ; les autres trouvèrent leurs réserves changées en sable. Depuis, certaines familles déposent un morceau de pain près d’une fenêtre les nuits de grande marée. Les goélands s’en chargent probablement. Mais au Tourbillon, on sait qu’une ration partagée pèse moins lourd qu’un remords.",
  ),
  fiction(
    10,
    "La dernière pierre qui respire",
    "La dernière pierre posée sur le Mont ne serait ni dans la flèche ni dans les remparts. Elle se cacherait au ras de l’eau et respirerait avec la baie. À marée basse, elle aspire l’air des grèves ; à marée haute, elle souffle dans les couloirs de l’abbaye. Tant qu’elle respire, le rocher se souvient de tous ceux qui l’ont bâti, défendu, habité ou simplement contemplé. Un tailleur de pierre voulut un jour graver son nom dessus. À chaque coup de marteau, son propre nom s’effaçait de ses outils. Il renonça et grava à la place un simple trait, pour tous les ouvriers oubliés. Le lendemain, la pierre avait repris sa peau lisse. Voilà pourquoi, dit Bosco, le Mont paraît différent à chaque visite : il ne montre jamais deux fois le même souvenir.",
  ),
  real(
    1,
    "Le premier sanctuaire d’Aubert",
    "La tradition situe en 708 la fondation du premier sanctuaire consacré à l’archange Michel par Aubert, évêque d’Avranches. Ce récit fondateur appartient à la mémoire religieuse du lieu ; il marque le début d’une histoire documentée sur plus de treize siècles.",
    "708",
    [ABBEY_HISTORY, MONT_HISTORY],
  ),
  real(
    2,
    "L’arrivée des bénédictins",
    "En 966, des moines bénédictins s’installent sur le Mont. Leur communauté organise durablement la vie monastique et fait du sanctuaire un centre spirituel et intellectuel important du Moyen Âge.",
    "966",
    [ABBEY_HISTORY, UNESCO_SOURCE],
  ),
  real(
    3,
    "L’église romane au sommet du rocher",
    "La construction de l’église abbatiale romane commence en 1023. Les bâtisseurs utilisent le sommet du rocher comme appui de la croisée et étagent les bâtiments conventuels autour de cette contrainte naturelle exceptionnelle.",
    "XIe siècle",
    [ABBEY_HISTORY, UNESCO_SOURCE],
  ),
  real(
    4,
    "La Merveille gothique",
    "À partir de 1204 s’élève la Merveille, grand ensemble gothique construit sur le flanc nord. Ses salles superposées, son réfectoire et son cloître répondent au manque d’espace tout en donnant au Mont sa silhouette verticale.",
    "XIIIe siècle",
    [MONT_HISTORY, UNESCO_SOURCE],
  ),
  real(
    5,
    "Une forteresse qui résiste",
    "Pendant la guerre de Cent Ans, les remparts et la position du Mont lui permettent de résister aux forces anglaises. Tombelaine, à quelques kilomètres, sert alors de place forte anglaise, tandis que le Mont demeure un symbole de résistance.",
    "XIVe–XVe siècles",
    [MONT_HISTORY, DESTINATION_HISTORY],
  ),
  real(
    6,
    "Le chœur gothique flamboyant",
    "Après l’effondrement du chœur roman pendant la guerre de Cent Ans, un nouveau chœur gothique flamboyant est entrepris au XVe siècle. Les travaux, commencés en 1448, aboutissent au début du XVIe siècle et transforment profondément l’église abbatiale.",
    "1448–1523",
    [ABBEY_HISTORY, UNESCO_SOURCE],
  ),
  real(
    7,
    "La Bastille des mers",
    "Après la Révolution, l’abbaye devient une prison d’État. De 1793 à 1863, des milliers de détenus y sont enfermés ; l’isolement du rocher, les marées et les grèves renforcent sa réputation de « Bastille des mers ».",
    "1793–1863",
    [ABBEY_HISTORY, DESTINATION_HISTORY],
  ),
  real(
    8,
    "La sauvegarde du monument",
    "La prison ferme en 1863. Le monument est ensuite ouvert au public et restauré ; le classement de l’abbaye comme monument historique en 1874 consolide cette politique de sauvegarde qui redonne progressivement sa dignité à l’ensemble.",
    "1863–1874",
    [ABBEY_HISTORY, DESTINATION_HISTORY],
  ),
  real(
    9,
    "Le Mont et sa baie reconnus par l’UNESCO",
    "En 1979, le Mont-Saint-Michel et sa baie sont inscrits sur la Liste du patrimoine mondial. L’UNESCO reconnaît à la fois la réussite esthétique du site, l’union exceptionnelle du village fortifié et de l’abbaye, et son importance dans la civilisation chrétienne médiévale.",
    "1979",
    [ABBEY_HISTORY, UNESCO_SOURCE],
  ),
  real(
    10,
    "Le caractère maritime retrouvé",
    "La digue-route construite en 1879 avait accéléré l’ensablement et réduit le caractère insulaire du Mont. Un vaste chantier associe ensuite barrage sur le Couesnon, nouvelle passerelle et gestion des sédiments. Achevée en 2015, l’opération permet à la mer d’entourer de nouveau le rocher lors de certaines marées.",
    "1879–2015",
    [MONT_HISTORY, UNESCO_SOURCE],
  ),
] as const satisfies readonly SquareContent[];

export const MONT_SAINT_MICHEL_V27_COUNTS = {
  fiction: MONT_SAINT_MICHEL_V27_CONTENTS.filter((content) => content.narrativeCategory === "fiction").length,
  real: MONT_SAINT_MICHEL_V27_CONTENTS.filter((content) => content.narrativeCategory === "real").length,
  total: MONT_SAINT_MICHEL_V27_CONTENTS.length,
} as const;
