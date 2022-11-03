import { style } from "@vanilla-extract/css"

// todo - property의 타입을 css key(lowerCase)로 제한
export const getDefaultTransitionStyle = (transitionPropertys: string[]) =>
  style({
    transitionDelay: "0s",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    transitionProperty: `${transitionPropertys.join(", ")}`,
  })
