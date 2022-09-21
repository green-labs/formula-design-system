export function Button(Props) {
  var size = Props.size
  var children = Props.children
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
  return <button style={style}> {children} </button>
}

Button.displayName = "Button"
