import React from "react"
import { addons, types } from "@storybook/addons"
import { AddonPanel } from "@storybook/components"
import ViewCodePanel from "./ViewCodePanel"

const ADDON_ID = "storybook-view-code-addon"
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "View Code",
    render: ({ active, key }) => (
      <AddonPanel key={key} active={!!active}>
        <ViewCodePanel />
      </AddonPanel>
    ),
  })
})
