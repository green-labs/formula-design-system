import type { size } from "../types"

const convertSizeToPx = (size: size) => {
  switch (size) {
    case "pc":
      return 36
    case "xl":
      return 24
    case "lg":
      return 20
    case "sm":
      return 16
    case "xs":
      return 12
    default:
      return 24
  }
}

export default convertSizeToPx
