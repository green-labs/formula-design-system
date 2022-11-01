import React from "react"
import CodeBlock from "../../../common/CodeBlock"

const ContainerButton = (props) => {
  const typescriptProps = Object.entries(props)
    .map(([k, v]) => {
      switch (k) {
        case "icon":
        case "color":
        case "size":
        case "text":
          return `${k}="${v}"`
        case "leftIcon":
        case "rightIcon":
          return `${k}={${v}}`

        case "block":
        case "disabled":
          if (v === false) return ""
          return `${k}`

        default:
          return `${k}=${v}`
      }
    })
    .join(" ")

  const rescriptProps = Object.entries(props)
    .map(([k, v]) => {
      switch (k) {
        case "icon":
        case "color":
        case "size":
          return `${k}=#"${v}"`
        case "text":
          return `${k}="${v}"`
        case "leftIcon":
        case "rightIcon":
          return `${k}={Formula.Icon.${v}.make}`

        case "block":
        case "disabled":
          if (v === false) return ""
          return `${k}=${v}`

        default:
          return `${k}=${v}`
      }
    })
    .join(" ")

  return (
    <div>
      <div
        style={{
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          color: "white",
          padding: "5px",
          margin: "15px",
          backgroundColor: "#E6484F",
        }}
      >
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>Rescript</div>
        <CodeBlock>{`<Formula.Button.Container ${rescriptProps} />`}</CodeBlock>
      </div>

      <div
        style={{
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          color: "white",
          padding: "5px",
          margin: "15px",
          backgroundColor: "#007acc",
        }}
      >
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>Typescript</div>
        <CodeBlock>{`<ContainerButton ${typescriptProps} />`}</CodeBlock>
      </div>
    </div>
  )
}

export default ContainerButton
