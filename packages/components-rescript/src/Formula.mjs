// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_mapperRt from "rescript/lib/es6/js_mapperRt.js";

var _map = {"captionXsRegular":"caption-xs-regular","bodyLgMedium":"body-lg-medium","bodyLgRegular":"body-lg-regular","bodyLgBold":"body-lg-bold","bodyMdMedium":"body-md-medium","bodyMdRegular":"body-md-regular","bodyMdBold":"body-md-bold","bodySmMedium":"body-sm-medium","bodySmRegular":"body-sm-regular","bodySmBold":"body-sm-bold","bodyXlRegular":"body-xl-regular","bodyXlBold":"body-xl-bold","headlineSmBold":"headline-sm-bold","headlineSmRegular":"headline-sm-regular","headlineMdBold":"headline-md-bold","headlineLgBold":"headline-lg-bold","headlineXlBold":"headline-xl-bold"};

var _revMap = {"caption-xs-regular":"captionXsRegular","body-lg-medium":"bodyLgMedium","body-lg-regular":"bodyLgRegular","body-lg-bold":"bodyLgBold","body-md-medium":"bodyMdMedium","body-md-regular":"bodyMdRegular","body-md-bold":"bodyMdBold","body-sm-medium":"bodySmMedium","body-sm-regular":"bodySmRegular","body-sm-bold":"bodySmBold","body-xl-regular":"bodyXlRegular","body-xl-bold":"bodyXlBold","headline-sm-bold":"headlineSmBold","headline-sm-regular":"headlineSmRegular","headline-md-bold":"headlineMdBold","headline-lg-bold":"headlineLgBold","headline-xl-bold":"headlineXlBold"};

function variantKeyToJs(param) {
  return _map[param];
}

function variantKeyFromJs(param) {
  return _revMap[param];
}

var TextVariant = {};

var Body = {};

var Headline = {};

var Caption = {};

var $$Text = {
  variantKeyToJs: variantKeyToJs,
  variantKeyFromJs: variantKeyFromJs,
  TextVariant: TextVariant,
  Body: Body,
  Headline: Headline,
  Caption: Caption
};

var jsMapperConstantArray = [
  36,
  24,
  20,
  16,
  12
];

function sizeToJs(param) {
  return jsMapperConstantArray[param];
}

function sizeFromJs(param) {
  return Js_mapperRt.fromInt(5, jsMapperConstantArray, param);
}

var ArrowDownLineBold = {};

var Icon = {
  sizeToJs: sizeToJs,
  sizeFromJs: sizeFromJs,
  ArrowDownLineBold: ArrowDownLineBold
};

export {
  $$Text ,
  Icon ,
}
/* No side effect */
