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

const colorMaps = {}

const colorProps = defineProperties({
  properties: {
    backgroundColor: colorMaps,
    color: colorMaps,
    borderColor: colorMaps,
  },
})

export const sprinkles = createSprinkles(simpleProps, colorProps)

export type Sprinkles = Parameters<typeof sprinkles>[0]
