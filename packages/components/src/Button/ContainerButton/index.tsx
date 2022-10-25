import React from "react"
import type { ContainerButtonProps } from "./types"
import NotificationCountBadge from "../../NotificationBadge/NotificationCountBadge"
import {
  getCustomStyle,
  getStateStyle,
  getIconSize,
  getNotificationCountBadgeSize,
} from "../utils"
import {
  commonButtonStyle,
  flexCenterContainer,
  iconInContainerButtonStyle,
} from "../commonStyle.css"
import {
  buttonTextStyle,
  buttonTextContainerStyle,
  badgeInContainerButtonStyle,
} from "./styles.css"

const ContainerButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ContainerButtonProps>
>(
  (
    {
      text,
      size,
      leftIcon,
      rightIcon,
      count,
      className,
      color,
      style,
      props,
      children,
      disabled,
      customStyle,
      ...restProps
    },
    ref
  ) => {
    const iconSizePx = getIconSize(size)
    const notificationCountBadgeSize = getNotificationCountBadgeSize(size)
    const dynamicStyle =
      color === "custom" ? getCustomStyle(customStyle) : getStateStyle(color)

    return (
      <button
        className={`${commonButtonStyle({ size, color })} ${className ?? ""}`}
        style={{ ...dynamicStyle, ...style }}
        disabled={disabled}
        ref={ref}
        {...props}
        {...restProps}
      >
        {!!leftIcon && (
          <div className={`${flexCenterContainer}`}>
            {React.createElement(leftIcon, {
              sizePx: iconSizePx,
              className: `${iconInContainerButtonStyle({ color, disabled })}`,
            })}
          </div>
        )}

        <span className={`${buttonTextContainerStyle}`}>
          <span className={buttonTextStyle}>
            {text}
            {children}
          </span>
          {typeof count === "number" && (
            <NotificationCountBadge
              container="span"
              className={`${badgeInContainerButtonStyle({ color, disabled })}`}
              size={notificationCountBadgeSize}
              text={count}
            />
          )}
        </span>
        {!!rightIcon && (
          <div className={`${flexCenterContainer}`}>
            {React.createElement(rightIcon, {
              sizePx: iconSizePx,
              className: `${iconInContainerButtonStyle({ color, disabled })}`,
            })}
          </div>
        )}
      </button>
    )
  }
)

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
