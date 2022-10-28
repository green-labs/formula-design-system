import { style, styleVariants } from "@vanilla-extract/css"

export const dialogBase = style({
  boxSizing: "border-box",
  borderRadius: "16px",
  maxHeight: "calc(100vh - 140px)",
  position: "absolute",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
})

const buttonSectionBase = style({
  display: "grid",
  margin: "24px 20px 20px 20px",
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
