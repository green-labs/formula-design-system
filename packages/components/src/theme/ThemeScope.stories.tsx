import * as React from "react"
import type { ComponentMeta } from "@storybook/react"

import { theme, ThemeScope } from "."

export const _ThemeScope = (args) => {
  return (
    <ThemeScope
      render={({ className }) => {
        return (
          <div
            className={className}
            style={{
              width: "300px",
              height: "100px",
              backgroundColor: theme.colors["red-5"],
            }}
          >
            Theme classname: {className}
          </div>
        )
      }}
    />
  )
}

export default {
  title: "Formula/ThemeScope",
  component: _ThemeScope,
} as ComponentMeta<typeof ThemeScope>
