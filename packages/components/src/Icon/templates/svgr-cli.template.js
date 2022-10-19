const template = ({ jsx, componentName, exports }, { tpl }) => {
  return tpl`
  import { SVGProps, Ref, forwardRef, memo } from "react"
  import { colorMap } from "@greenlabs/formula-design-token"
  import { convertSizeToPx } from "../utils"
  import type { IconProps } from "../types"

  const ${componentName} = ({
    size = "XL", 
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>) => {
    const finalSize = sizePx ? sizePx : convertSizeToPx(size)
    const fill = color && colorMap[color]
    return ${jsx}
  }

    ${exports}
  
`
}

module.exports = template
