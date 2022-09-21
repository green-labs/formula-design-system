import * as React from "react"

export function Button(Props) {
  var size = Props.size
  var label = Props.label
  var style =
    size === "medium"
      ? {
          fontSize: "14px",
          height: "40px",
          width: "150px",
        }
      : size === "small"
      ? {
          fontSize: "12px",
          height: "30px",
          width: "100px",
        }
      : {
          fontSize: "16px",
          height: "50px",
          width: "200px",
        }
  return <button style={style}> {label} </button>
}

Button.displayName = "Button"
