import type { StyleRule } from "@vanilla-extract/css"

export function variantChecker<K extends string, V>(
  variant: K,
  variantMap: Record<K, V>
) {
  if (process.env.NODE_ENV !== "production" && !(variant in variantMap)) {
    console.error(`You have used non-exist variant key ${variant}.`)
  }
}

export const extract = <
  T extends { [key in keyof T]: { value: string; [key: string]: any } }
>(
  obj: T,
  keyMaps: [keyof T, keyof StyleRule][]
): StyleRule => {
  return keyMaps.reduce<Record<string, string>>((nextObj, [objKey, cssKey]) => {
    nextObj[cssKey] = obj[objKey].value
    return nextObj
  }, {})
}
