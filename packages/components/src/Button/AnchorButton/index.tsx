import React from "react"
import type { AnchorButtonProps } from "./types"
import NotificationCountBadge from "../../NotificationBadge/NotificationCountBadge"
import {
  getStateStyle,
  getIconSize,
  getNotificationCountBadgeSize,
} from "../utils"
import {
  commonButtonStyle,
  flexCenterContainer,
  iconInContainerButtonStyle,
} from "../commonStyles.css"
import {
  buttonTextStyle,
  buttonTextContainerStyle,
  badgeInContainerButtonStyle,
} from "./styles.css"

const AnchorButton = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<AnchorButtonProps>
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
      block,
      ...restProps
    },
    ref
  ) => {
    const iconSizePx = getIconSize(size)
    const notificationCountBadgeSize = getNotificationCountBadgeSize(size)
    const dynamicStyle = getStateStyle(color)

    return (
      <a
        className={`${commonButtonStyle({ size, color, block })} ${
          className ?? ""
        }`}
        style={{ ...dynamicStyle, ...style }}
        ref={ref}
        {...props}
        {...restProps}
      >
        {!!leftIcon && (
          <div className={`${flexCenterContainer}`}>
            {React.createElement(leftIcon, {
              sizePx: iconSizePx,
              className: `${iconInContainerButtonStyle({ color })}`,
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
              className={`${badgeInContainerButtonStyle({ color })}`}
              size={notificationCountBadgeSize}
              text={count}
            />
          )}
        </span>
        {!!rightIcon && (
          <div className={`${flexCenterContainer}`}>
            {React.createElement(rightIcon, {
              sizePx: iconSizePx,
              className: `${iconInContainerButtonStyle({ color })}`,
            })}
          </div>
        )}
      </a>
    )
  }
)

AnchorButton.displayName = "AnchorButton"

export default AnchorButton
