import React from "react"
import { getIconSize, getStateStyle } from "../utils"
import {
  commonButtonStyle,
  flexCenterContainer,
  iconInContainerButtonStyle,
} from "../commonStyles.css"
import type { IconButtonProps } from "./types"
import { sizeVariants } from "./styles.css"

const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IconButtonProps>
>(
  (
    { color, size, icon, props, className, style, disabled, ...restProps },
    ref
  ) => {
    const iconSizePx = getIconSize(size)
    const dynamicStyle = getStateStyle(color)

    return (
      <button
        className={`${commonButtonStyle({ size, color })} ${
          sizeVariants[size]
        } ${className ?? ""}`}
        style={{ ...dynamicStyle, ...style }}
        disabled={disabled}
        ref={ref}
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
)

IconButton.displayName = "IconButton"

export default IconButton
