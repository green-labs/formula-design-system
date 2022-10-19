import { tokens } from "@greenlabs/formula-design-token"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { buttonContainerStyle } from "../Button/ContainerButton/styles.css"
const { font } = tokens.sys

const extract = (obj: any) => {
  const keyMaps = [
    ["typeface", "fontFamily"],
    ["font-size", "fontSize"],
    ["tracking", "letterSpacing"],
    ["weight", "fontWeight"],
  ]

  return keyMaps.reduce((nextObj, [objKey, cssKey]) => {
    // @ts-expect-error FIXME
    nextObj[cssKey] = obj[objKey].value
    return nextObj
  }, {})
}

export const notificationBaseStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,

  // todo - split common transition css
  transition: "background-color 0.2s, color 0.2s",

  selectors: {
    [`${buttonContainerStyle}:disabled &`]: {
      backgroundColor: "#1F20244D", // todo - get color from token
      color: "white",
    },
  },
})

export const buttonNotificationSizeStyle = styleVariants({
  sm: {
    padding: "1px 4px",
    lineHeight: "14.32px", // lineHeight 속성이 배수로 정해져있어서, 실제 사용되는 폰트와 정확히 매핑되지않음.
    ...extract(font.caption.xs.regular),
  },
  md: {
    padding: "1.5px 6px",
    lineHeight: "16.71px", // lineHeight 속성이 배수로 정해져있어서, 실제 사용되는 폰트와 정확히 매핑되지않음.
    ...extract(font.body.sm.regular),
  },
})

export const textColorVar = createVar()
export const bgColorVar = createVar()
export const textStyles = style({
  color: textColorVar,
  backgroundColor: bgColorVar,
})
