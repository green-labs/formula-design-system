import { style } from "@vanilla-extract/css"
import { theme } from "../theme"

export const controlStyle = style({
  display: "flex",
  alignItems: "center",
})

export const checkboxStyles = {
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
  input: style({
    transform: "translateX(-100%)",
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0,
  }),
  label: style({
    paddingLeft: "0.5rem",
  }),
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
