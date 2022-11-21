import * as React from "react"
import type { ComponentMeta } from "@storybook/react"

import { theme, ThemeScope } from "."

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

export default {
  title: "Formula/ThemeScope",
  component: _ThemeScope,
} as ComponentMeta<typeof ThemeScope>
