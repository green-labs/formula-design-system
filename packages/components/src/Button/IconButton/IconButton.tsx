import React from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { getIconSize, getButtonStyleFromVariant } from "../utils"
import {
  containerButtonStyle,
  flexCenterContainer,
  iconInContainerButtonStyle,
} from "../commonStyle.css"
import type { IconButtonProps } from "./types"

const IconButton = ({
  color,
  size,
  icon,
  props,
  className,
  style,
  disabled,
  ...restProps
}: React.PropsWithChildren<IconButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const variantStyles = assignInlineVars(getButtonStyleFromVariant(color))

  return (
    <button
      className={`${containerButtonStyle({ size, color })} ${className ?? ""}`}
      style={{ ...variantStyles, ...style }}
      disabled={disabled}
      {...props}
      {...restProps}
    >
      <div className={`${flexCenterContainer}`}>
        {React.createElement(icon, {
          sizePx: iconSizePx,
          className: `${iconInContainerButtonStyle({ color, disabled })}`,
        })}
      </div>
    </button>
  )
}

IconButton.displayName = "IconButton"

export default IconButton
