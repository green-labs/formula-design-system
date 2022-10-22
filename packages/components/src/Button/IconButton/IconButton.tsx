import React from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { getIconSize, getButtonStyleFromVariant } from "../utils"
import {
  buttonCommonStyle,
  buttonPseudoStyle,
  buttonSizeStyles,
  buttonVariantStyles,
} from "../commonStyle.css"
import type { IconButtonProps } from "./types"

const IconButton = ({
  variant,
  size,
  icon,
  props,
  className,
  style,
  ...restProps
}: React.PropsWithChildren<IconButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const variantStyles = assignInlineVars(getButtonStyleFromVariant(variant))

  return (
    <button
      className={`
        ${buttonCommonStyle}
        ${buttonPseudoStyle}
        ${buttonSizeStyles[size]}
        ${buttonVariantStyles[variant]}
        ${className ?? ""}
      `}
      style={{ ...variantStyles, ...style }}
      {...props}
      {...restProps}
    >
      {React.createElement(icon, { sizePx: iconSizePx })}
    </button>
  )
}

IconButton.displayName = "IconButton"

export default IconButton
