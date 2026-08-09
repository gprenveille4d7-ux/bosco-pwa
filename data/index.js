/*
BOSCO — Index de la bibliothèque narrative

Lorsqu’un nouveau port est ajouté, importer ses deux fichiers ici puis ajouter leurs tableaux
dans histoiresBoscoParPort et histoiresEmileParPort. Le moteur principal ne doit pas être modifié.
*/

import { histoiresBoscoMontSaintMichel } from "./histoires-bosco/mont-saint-michel.js";
import { histoiresBoscoJullouville } from "./histoires-bosco/jullouville.js";

import { histoiresEmileMontSaintMichel } from "./carnet-emile/mont-saint-michel.js";
import { histoiresEmileGranville } from "./carnet-emile/granville.js";
import { histoiresEmileCherbourg } from "./carnet-emile/cherbourg.js";
import { histoiresEmileGenets } from "./carnet-emile/genets.js";
import { histoiresEmileCarolles } from "./carnet-emile/carolles.js";
import { histoiresEmileJullouville } from "./carnet-emile/jullouville.js";
import { histoiresEmileSaintPair } from "./carnet-emile/saint-pair.js";
import { histoiresEmileHerel } from "./carnet-emile/herel.js";
import { histoiresEmileChausey } from "./carnet-emile/chausey.js";
import { histoiresEmileBrehal } from "./carnet-emile/brehal.js";
import { histoiresEmileHauteville } from "./carnet-emile/hauteville.js";
import { histoiresEmileRegneville } from "./carnet-emile/regneville.js";
import { histoiresEmileAgonCoutainville } from "./carnet-emile/agon-coutainville.js";
import { histoiresEmileBlainville } from "./carnet-emile/blainville.js";
import { histoiresEmileGouville } from "./carnet-emile/gouville.js";
import { histoiresEmilePirou } from "./carnet-emile/pirou.js";
import { histoiresEmileSaintGermainSurAy } from "./carnet-emile/saint-germain-sur-ay.js";
import { histoiresEmilePortbail } from "./carnet-emile/portbail.js";
import { histoiresEmileCarteret } from "./carnet-emile/carteret.js";
import { histoiresEmileDielette } from "./carnet-emile/dielette.js";
import { histoiresEmileGoury } from "./carnet-emile/goury.js";
import { histoiresEmileFermanville } from "./carnet-emile/fermanville.js";










import { conseilsMarinJullouville } from "./coin-du-marin/jullouville.js";

export {
  accueilBosco,
  conclusionsHistoiresBosco,
  dialoguesGenerauxBosco,
  invitationsCarnetEmile,
} from "./dialogues-bosco.js";

export const histoiresBoscoParPort = Object.freeze({
  "mont-saint-michel": histoiresBoscoMontSaintMichel,
  jullouville: histoiresBoscoJullouville,
});

export const histoiresEmileParPort = Object.freeze({
  "mont-saint-michel": histoiresEmileMontSaintMichel,
  granville: histoiresEmileGranville,
  cherbourg: histoiresEmileCherbourg,
  genets: histoiresEmileGenets,
  carolles: histoiresEmileCarolles,
  jullouville: histoiresEmileJullouville,
  "saint-pair": histoiresEmileSaintPair,
  herel: histoiresEmileHerel,
  chausey: histoiresEmileChausey,
  brehal: histoiresEmileBrehal,
  hauteville: histoiresEmileHauteville,
  regneville: histoiresEmileRegneville,
  "agon-coutainville": histoiresEmileAgonCoutainville,
  "blainville": histoiresEmileBlainville,
  "gouville": histoiresEmileGouville,
  "pirou": histoiresEmilePirou,
  "saint-germain-sur-ay": histoiresEmileSaintGermainSurAy,
  "portbail": histoiresEmilePortbail,
  "carteret": histoiresEmileCarteret,
  "dielette": histoiresEmileDielette,
  "goury": histoiresEmileGoury,
  "fermanville": histoiresEmileFermanville,
});

export const contenusCoinDuMarinParPort = Object.freeze({
  jullouville: conseilsMarinJullouville,
});

export const bibliothequeNarrativeBosco = Object.freeze([
  ...Object.values(histoiresBoscoParPort).flat(),
  ...Object.values(histoiresEmileParPort).flat(),
  ...Object.values(contenusCoinDuMarinParPort).flat(),
]);
