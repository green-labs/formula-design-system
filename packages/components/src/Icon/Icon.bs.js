// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function toString(size) {
  switch (size) {
    case /* PC */0 :
        return "36";
    case /* XL */1 :
        return "24";
    case /* LG */2 :
        return "20";
    case /* SM */3 :
        return "16";
    case /* XS */4 :
        return "12";
    
  }
}

function Icon$ArrowDown(Props) {
  var sizeOpt = Props.size;
  var styleOpt = Props.style;
  var classNameOpt = Props.className;
  var fillOpt = Props.fill;
  var size = sizeOpt !== undefined ? sizeOpt : /* XL */1;
  var style = styleOpt !== undefined ? Caml_option.valFromOption(styleOpt) : ({});
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var fill = fillOpt !== undefined ? fillOpt : "#1F2024";
  return React.createElement("svg", {
              className: className,
              style: style,
              height: toString(size),
              width: toString(size),
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
                  d: "M2.855 7.848c0-.23.09-.46.26-.64a.9.9 0 0 1 1.27 0l7.663 7.663L19.7 7.208a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-8.293 8.293a.9.9 0 0 1-1.27 0L3.115 8.478a.891.891 0 0 1-.26-.64v.01Z",
                  fill: fill
                }));
}

var ArrowDown = {
  make: Icon$ArrowDown
};

function Icon$ArrowLeft(Props) {
  var sizeOpt = Props.size;
  var styleOpt = Props.style;
  var classNameOpt = Props.className;
  var fillOpt = Props.fill;
  var size = sizeOpt !== undefined ? sizeOpt : /* XL */1;
  var style = styleOpt !== undefined ? Caml_option.valFromOption(styleOpt) : ({});
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var fill = fillOpt !== undefined ? fillOpt : "#1F2024";
  return React.createElement("svg", {
              className: className,
              style: style,
              height: toString(size),
              width: toString(size),
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
                  d: "M16.185 21.178c.23 0 .46-.09.64-.26a.9.9 0 0 0 0-1.27l-7.662-7.663 7.662-7.652a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-8.292 8.292a.9.9 0 0 0 0 1.27l8.292 8.293c.18.18.41.26.64.26h-.01Z",
                  fill: fill
                }));
}

var ArrowLeft = {
  make: Icon$ArrowLeft
};

function Icon$ArrowRight(Props) {
  var sizeOpt = Props.size;
  var styleOpt = Props.style;
  var classNameOpt = Props.className;
  var fillOpt = Props.fill;
  var size = sizeOpt !== undefined ? sizeOpt : /* XL */1;
  var style = styleOpt !== undefined ? Caml_option.valFromOption(styleOpt) : ({});
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var fill = fillOpt !== undefined ? fillOpt : "#1F2024";
  return React.createElement("svg", {
              className: className,
              style: style,
              height: toString(size),
              width: toString(size),
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
                  d: "M8.902 21.178c-.23 0-.46-.09-.64-.26a.9.9 0 0 1 0-1.27l7.663-7.663-7.663-7.652a.9.9 0 0 1 0-1.27.9.9 0 0 1 1.27 0l8.293 8.292a.9.9 0 0 1 0 1.27l-8.292 8.293c-.18.18-.41.26-.64.26h.01Z",
                  fill: fill
                }));
}

var ArrowRight = {
  make: Icon$ArrowRight
};

function Icon$ArrowUp(Props) {
  var sizeOpt = Props.size;
  var styleOpt = Props.style;
  var classNameOpt = Props.className;
  var fillOpt = Props.fill;
  var size = sizeOpt !== undefined ? sizeOpt : /* XL */1;
  var style = styleOpt !== undefined ? Caml_option.valFromOption(styleOpt) : ({});
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var fill = fillOpt !== undefined ? fillOpt : "#1F2024";
  return React.createElement("svg", {
              className: className,
              style: style,
              height: toString(size),
              width: toString(size),
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("path", {
                  d: "M2.855 16.13c0 .23.09.46.26.64a.9.9 0 0 0 1.27 0l7.663-7.662L19.7 16.77a.9.9 0 0 0 1.27 0 .9.9 0 0 0 0-1.27l-8.293-8.293a.9.9 0 0 0-1.27 0L3.115 15.5c-.18.18-.26.41-.26.64v-.01Z",
                  fill: fill
                }));
}

var ArrowUp = {
  make: Icon$ArrowUp
};

export {
  ArrowDown ,
  ArrowLeft ,
  ArrowRight ,
  ArrowUp ,
}
/* react Not a pure module */
