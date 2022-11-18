const template = ({ jsx, componentName, exports }, { tpl }) => {
  return tpl`
  import { Ref, forwardRef, memo } from "react"
  import { colorMap } from "@greenlabs/formula-design-token"
  import { convertSizeToPx } from "../utils"
  import type { IconProps } from "../types"

  const ${componentName} = (
    { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
    ref: Ref<SVGSVGElement>  
  ) => {
    const finalSize = sizePx ? sizePx : convertSizeToPx(size)
    const fill = color && colorMap[color]
    return ${jsx}
  }

    ${exports}
  
`
}

module.exports = template
