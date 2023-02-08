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
