import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { colorMap } from "@greenlabs/formula-design-token"

export const vars = {
  color: createVar(),
  backgroundColor: createVar(),
}

// FIXME: need to be moved into common props
const flexCenterContainer = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "auto",
})

const baseBadgeStyle = style([
  flexCenterContainer,
  {
    background: vars.backgroundColor,
    color: vars.color,
    vars: {
      [vars.color]: "white",
      [vars.backgroundColor]: colorMap["red-60"],
    },
  },
])

export const badgeStyle = recipe({
  base: [baseBadgeStyle, flexCenterContainer],
  variants: {
    simple: {
      small: { width: "4px", height: "4px", borderRadius: "100%" },
      medium: { width: "6px", height: "6px", borderRadius: "100%" },
    },
    contents: {
      small: {
        borderRadius: "8px",
        fontSize: "12px",
        height: "16px",
        paddingLeft: "4px",
        paddingRight: "4px",
      },
      medium: {
        borderRadius: "10px",
        fontSize: "14px",
        height: "20px",
        paddingLeft: "6px",
        paddingRight: "6px",
      },
    },
    icon: {
      small: {
        borderRadius: "100%",
        padding: "4px",
      },
    },
  },
})
