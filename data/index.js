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
});

export const contenusCoinDuMarinParPort = Object.freeze({
  jullouville: conseilsMarinJullouville,
});

export const bibliothequeNarrativeBosco = Object.freeze([
  ...Object.values(histoiresBoscoParPort).flat(),
  ...Object.values(histoiresEmileParPort).flat(),
  ...Object.values(contenusCoinDuMarinParPort).flat(),
]);
