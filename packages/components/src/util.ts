export function variantChecker<K extends string, V>(
  variant: K,
  variantMap: Record<K, V>
) {
  if (process.env.NODE_ENV !== "production" && !(variant in variantMap)) {
    console.error(`You have used non-exist variant key ${variant}.`)
  }
}
