import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

const keyMaps = [[""]]

let extract = (obj: any) => {
  return keyMaps.reduce((nextObj, [objKey, cssKey]) => {
    // @ts-expect-error FIXME
    nextObj[cssKey] = obj[objKey].value
    return nextObj
  }, {})
}

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

export const titleTextBase = style({
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
  margin: "24px 20px 8px 20px",
})

export const bodyTextBase = style({
  selectors: {
    "&.with-title": {
      color: tokens.sys.color["neutral-secondary"].contents.value,
    },
  },
  marginTop: "0px",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  maxWidth: "100%",
  display: "-webkit-box",
  overflow: "hidden",

  margin: "0px 20px",
  marginBottom: "16px",
  ":first-of-type": {
    marginTop: "20px",
  },

  ":last-of-type": {
    marginBottom: "0px",
  },
})

export const buttonContainerStyle = style({})

export const bodyContainerStyle = style({})

export const imageAspectRatioVariant = styleVariants({
  square: [dialogBase],
  horizontal: [dialogBase],
  vertical: [dialogBase],
})

export const imageBase = style({})
export const imageSizeVariant = styleVariants({
  square: [
    imageBase,
    {
      width: "488px",
      height: "488px",
    },
  ],
  horizontal: [
    imageBase,
    {
      width: "488px",
      height: "366px",
    },
  ],
  vertical: [
    imageBase,
    {
      width: "366px",
      height: "488px",
    },
  ],
})

export const sizeVariant = styleVariants({
  small: [
    dialogBase,
    {
      width: "320px",
    },
  ],
  medium: [
    dialogBase,
    {
      width: "488px",
    },
  ],
  large: [
    dialogBase,
    {
      width: "800px",
    },
  ],
})

const buttonSectionBase = style({
  display: "grid",
  margin: "24px 20px 20px 20px",
})

export const buttonSectionVariant = styleVariants({
  evenly: [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 1fr",
    },
  ],
  weighted: [
    buttonSectionBase,
    {
      gap: "8px",
      gridTemplateColumns: "1fr 2fr",
    },
  ],
  vertical: [
    buttonSectionBase,
    {
      gridTemplateRows: "1fr 1fr",
    },
  ],
})
