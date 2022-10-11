import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"

const simpleProps = defineProperties({
  properties: {
    textAlign: [
      "center",
      "inherit",
      "justify",
      "left",
      "right",
      "start",
      "end",
    ],
  },
})

export const sprinkles = createSprinkles(simpleProps)

export type Sprinkles = Parameters<typeof sprinkles>[0]
