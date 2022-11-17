import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "../../root.css"

export const classes = {
  tabListFull: "fmc--tablist-full",
}

export const rootStyle = style({
  display: "flex",
  flexDirection: "column",
})

export const listContainerStyle = style({
  position: "relative",
})

export const listStyle = style({
  display: "flex",
  flexShrink: 0,
  paddingLeft: "16px",
  paddingRight: "16px",
})

const transitionDetail = "0.2s cubic-bezier(0.65, 0, 0.35, 1)"
export const indicatorStyle = style({
  transition: `left ${transitionDetail}`,
  position: "absolute",
  bottom: "0",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderColor: "black",
})

const anim = keyframes({
  "42%": { backgroundColor: "rgba(24, 24, 24, 0.08)" }, // 0.3s
  "100%": { backgroundColor: "white" },
})

export const triggerStyle = style({
  backgroundColor: "white",
  paddingLeft: "8px",
  paddingRight: "8px",
  height: "45px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: 1,
  userSelect: "none",
  border: 0,
  transition: "background-color 0.3s cubic-bezier(0.65, 0, 0.35, 1)",
  selectors: {
    ['[data-state="active"]&']: {
      animation: `${anim} 0.7s`,
    },
    [`.${classes.tabListFull} > &`]: { flex: "1", display: "flex" },
  },
})

export const triggerContentWrapperStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2px",
})

export const triggerTextStyle = style({
  selectors: {
    // FIXME: needed override, find a better way to override text
    [`[data-state="active"] &`]: {
      fontWeight: "bold",
      color: theme.colors["neutral-primary-contents"],
    },
    [`[data-state="inactive"] &`]: {
      fontWeight: "normal",
      color: theme.colors["neutral-secondary-contents"],
    },
  },
  transition: `color, font-weight ${transitionDetail}`,
})

export const triggerIconStyle = style({
  selectors: {
    [`[data-state="active"] &`]: {
      fill: theme.colors["neutral-primary-contents"],
    },
    [`[data-state="inactive"] &`]: {
      fill: theme.colors["neutral-secondary-contents"],
    },
  },
  transition: `fill ${transitionDetail}`,
})

export const triggerBadgeRedDotStyle = style({
  alignSelf: "flex-start",
})
