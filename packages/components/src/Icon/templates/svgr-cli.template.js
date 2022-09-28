const template = ({ jsx, componentName, exports }, { tpl }) => {
  return tpl`
  import { SVGProps, Ref, forwardRef, memo } from "react"
  import { convertSizeToPx } from "../utils"
  import type { IconProps } from "../types"

  const ${componentName} = ({
    size = "XL", 
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>) => {
    const finalSize = sizePx ? sizePx : convertSizeToPx(size)
    return ${jsx}
  }

    ${exports}
  
`
}

module.exports = template
