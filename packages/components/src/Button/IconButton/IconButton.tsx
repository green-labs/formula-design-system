import React from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { getDynamicStyle, getIconSize } from "../utils"
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
  customStyle,
  ...restProps
}: React.PropsWithChildren<IconButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const dynamicStyle = assignInlineVars(getDynamicStyle(color))

  return (
    <button
      className={`${containerButtonStyle({ size, color })} ${className ?? ""}`}
      style={{ ...dynamicStyle, ...style }}
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
