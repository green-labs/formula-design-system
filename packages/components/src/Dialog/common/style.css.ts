import { style, styleVariants } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

const { shadow } = tokens.ref

export const dialogBase = style({
  boxSizing: "border-box",
  borderRadius: "16px",
  maxHeight: "calc(100vh - 140px)",
  position: "absolute",
  boxShadow: shadow["1"].value,
  overflow: "hidden",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
})

const buttonSectionBase = style({
  display: "grid",
  marginTop: "24px",
})

const evenlyButtonSectionBase = [
  buttonSectionBase,
  {
    gap: "8px",
    gridTemplateColumns: "1fr 1fr",
  },
]

const verticalButtonSectionBase = [
  buttonSectionBase,
  {
    gridTemplateRows: "1fr 1fr",
    gap: "8px",
  },
]

export const buttonSectionVariant = styleVariants({
  evenly: evenlyButtonSectionBase,
  weighted: [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 2fr",
    },
  ],
  vertical: verticalButtonSectionBase,
})

export const buttonSectionAuxiliaryVariant = styleVariants({
  "evenly-small": evenlyButtonSectionBase,
  "evenly-medium": evenlyButtonSectionBase,
  "evenly-large": evenlyButtonSectionBase,
  "weighted-small": [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 2fr",
    },
  ],
  "weighted-medium": [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 2fr",
    },
  ],
  "weighted-large": [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 3fr",
    },
  ],
  "vertical-small": verticalButtonSectionBase,
  "vertical-medium": verticalButtonSectionBase,
  "vertical-large": verticalButtonSectionBase,
})

export const overlayBase = style({
  inset: "0px",
  position: "fixed",
  background: "rgba(0, 0, 0, 0.4)",
})
