// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Button(Props) {
  var size = Props.size;
  var label = Props.label;
  var style = size === "medium" ? ({
        fontSize: "14px",
        height: "40px",
        width: "150px"
      }) : (
      size === "small" ? ({
            fontSize: "12px",
            height: "30px",
            width: "100px"
          }) : ({
            fontSize: "16px",
            height: "50px",
            width: "200px"
          })
    );
  return React.createElement("button", {
              style: style
            }, label);
}

var make = Button;

export {
  make ,
}
/* react Not a pure module */
