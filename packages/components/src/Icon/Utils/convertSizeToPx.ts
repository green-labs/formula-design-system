import type { size } from "../types";

const convertSizeToPx = (size: size) => {
  switch (size) {
    case "PC":
      return 36;
    case "XL":
      return 24;
    case "LG":
      return 20;
    case "SM":
      return 16;
    case "XS":
      return 12;
    default:
      return 24;
  }
};

export default convertSizeToPx;
