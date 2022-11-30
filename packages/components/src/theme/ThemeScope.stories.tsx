import * as React from "react"
import type { ComponentMeta } from "@storybook/react"

import { theme, ThemeScope } from "."
import { tokens } from "@greenlabs/formula-design-token"

export const _ThemeScope = (args) => {
  return (
    <>
      <ThemeScope
        render={({ className }) => {
          return (
            <div
              className={className}
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: theme.colors["primary-container"],
              }}
            >
              using render prop themescope
              <br />
              primary container
            </div>
          )
        }}
      />
      <ThemeScope>
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundColor: theme.colors["secondary-container"],
          }}
        >
          using children themescope
          <br />
          displaying secondary container
        </div>
      </ThemeScope>
    </>
  )
}

export const Color = (args) => {
  const ColorChip = ({ colorKey, colorValue }) => {
    return (
      <div
        style={{
          width: "60px",
          height: "100px",
          backgroundColor: theme.colors[colorKey],
        }}
      >
        <code
          style={{
            backgroundColor: "white",
            fontSize: "10px",
          }}
        >
          {colorKey} ({colorValue})
        </code>
      </div>
    )
  }
  return (
    <>
      <ThemeScope>
        {Object.keys(tokens.ref.color).map((colorKey) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {Object.keys(tokens.ref.color[colorKey]).map((num) => (
              <ColorChip
                colorKey={num !== "value" ? `${colorKey}-${num}` : colorKey}
                colorValue={
                  num !== "value"
                    ? tokens.ref.color[colorKey][num].value
                    : tokens.ref.color[colorKey].value
                }
              />
            ))}
          </div>
        ))}
      </ThemeScope>
    </>
  )
}

export default {
  title: "Formula/ThemeScope",
  component: _ThemeScope,
} as ComponentMeta<typeof ThemeScope>
