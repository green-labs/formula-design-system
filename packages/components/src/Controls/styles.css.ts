import { style } from "@vanilla-extract/css"
import { theme } from "../theme"

const controlStyles = {
  container: style({
    display: "flex",
    alignItems: "center",
  }),
  button: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "6px",
    border: 0,
    selectors: {
      "&[disabled]": {
        opacity: 0.3,
      },
      '&[data-state="checked"]': {
        backgroundColor: theme.colors["primary-contents"],
      },
      '&[data-state="unchecked"]': {
        backgroundColor: theme.colors.white,
        border: "1.5px solid",
        borderColor: theme.colors["gray-40"],
      },
    },
  }),
  label: style({
    paddingLeft: "0.5rem",
  }),
}

export const checkboxStyles = {
  ...controlStyles,
  icon: style({
    selectors: {
      '[data-state="checked"] &': {
        fill: theme.colors["white"],
      },
      '[data-state="unchecked"] &': {
        fill: theme.colors["gray-30"],
      },
    },
  }),
}

export const radioItemStyles = {
  ...controlStyles,
  button: style([
    controlStyles.button,
    {
      borderRadius: "100%",
    },
  ]),
  icon: style({
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "100%",
    selectors: {
      '[data-state="checked"] &': {
        backgroundColor: theme.colors["white"],
      },
      '[data-state="unchecked"] &': {
        backgroundColor: theme.colors["gray-30"],
      },
    },
  }),
}

export const toggleStyles = {
  container: controlStyles.container,
  label: controlStyles.label,
  root: style({
    position: "relative",
    width: "40px",
    height: "24px",
    borderRadius: "9999px",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "background ease-out 75ms",
    border: 0,
    selectors: {
      "&[disabled]": {
        opacity: 0.3,
      },
      '&[data-state="checked"]': {
        backgroundColor: theme.colors["primary-contents"],
      },
      '&[data-state="unchecked"]': {
        backgroundColor: theme.colors["gray-40"],
      },
    },
  }),
  thumb: style({
    backgroundColor: "white",
    display: "block",
    width: "18px",
    height: "18px",
    borderRadius: "9999px",
    willChange: "transform",
    boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
    transition: "transform ease-out 75ms",
    transform: "translateX(-3px)",
    selectors: {
      '&[data-state="checked"]': {
        transform: "translateX(13px)",
      },
    },
  }),
}
