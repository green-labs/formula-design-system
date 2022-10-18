import React from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import NotificationCountBadge from "../../NotificationBadge/NotificationCountBadge"
import {
  getButtonStyle,
  getIconSize,
  getNotificationCountBadgeSize,
} from "../utils"
import type { ContainerButtonProps } from "../types"
import {
  buttonSizeVariants,
  buttonStateStyle,
  buttonContainerStyle,
  buttonVariantStyle,
  buttonNotificationContainerStyle,
  buttonNotificationColorVariants,
  buttonTextContainerStyle,
  buttonTextStyle,
} from "./styles.css"

// todo - support custom color(backgroundColor, textColor)
const ContainerButton = ({
  text,
  size,
  leftIcon,
  rightIcon,
  count,
  variant,
  style,
  props,
  children,
  ...restProps
}: React.PropsWithChildren<ContainerButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const notificationCountBadgeSize = getNotificationCountBadgeSize(size)
  const dynamicStyle = assignInlineVars(getButtonStyle(variant))

  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeVariants[size]} ${buttonVariantStyle} ${buttonStateStyle}`}
      style={{ ...dynamicStyle, ...style }}
      {...props}
      {...restProps}
    >
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <span className={`${buttonTextContainerStyle}`}>
        <span className={buttonTextStyle}>{text}</span>
        {typeof count === "number" && (
          <NotificationCountBadge
            size={notificationCountBadgeSize}
            container="span"
            text={count}
            className={`${buttonNotificationContainerStyle} ${buttonNotificationColorVariants[variant]}`}
          />
        )}
        {children}
      </span>
      {!!rightIcon && React.cloneElement(rightIcon, { sizePx: iconSizePx })}
    </button>
  )
}

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
