// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Divider(Props) {
  var size = Props.size;
  var baseStyle = {
    backgroundColor: "#fff",
    width: "100%"
  };
  var variantStyle = size ? ({
        height: "10px"
      }) : ({
        height: "1px"
      });
  return React.createElement("div", {
              style: Object.assign({}, baseStyle, variantStyle)
            });
}

var make = Divider;

export {
  make ,
}
/* react Not a pure module */
