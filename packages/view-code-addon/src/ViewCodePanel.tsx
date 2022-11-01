import React from "react"
import { useArgs, useParameter } from "@storybook/api"
import ContainerButton from "./components/formula/Button/ContainerButton"
import NoSupportComponent from "./components/common/NoSupportComponent"

type viewCodeAddonParams = {
  // 컴포넌트를 구분하기 위한 이름
  component?: string
}

const ViewCodePanel = () => {
  const { component } = useParameter<viewCodeAddonParams>("viewCodeAddon", {})
  const [args] = useArgs()

  switch (component) {
    case "ContainerButton":
      return <ContainerButton {...args} />

    default:
      return <NoSupportComponent />
  }
}

export default ViewCodePanel
