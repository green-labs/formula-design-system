import React from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import NotificationCountBadge from "../../NotificationBadge/NotificationCountBadge"
import {
  getIconSize,
  getButtonStyleFromVariant,
  getNotificationCountBadgeSize,
} from "../utils"
import type { ContainerButtonProps } from "./types"
import {
  containerButtonStyle,
  flexCenterContainer,
  iconInContainerButtonStyle,
} from "../commonStyle.css"
import {
  buttonTextStyle,
  buttonTextContainerStyle,
  badgeInContainerButtonStyle,
} from "./styles.css"

// 🛑 todo - support custom color(backgroundColor, textColor)
// 커스텀 인터페이스 프롭 object를 따로 구성해서 내부적으로 dynamic하게 조절해야함
// style을 일방적으로 받게되면, disabled과 같은 class들은 inlineStyle에 의해 적용되지 않게 됨
// colorProps={ backgroundColor : CSSProperty , color : ...,}

const ContainerButton = ({
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
  ...restProps
}: React.PropsWithChildren<ContainerButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const notificationCountBadgeSize = getNotificationCountBadgeSize(size)
  const variantStyles = assignInlineVars(getButtonStyleFromVariant(color))

  return (
    <button
      className={`${containerButtonStyle({ size, color })} ${className ?? ""}`}
      style={{ ...variantStyles, ...style }}
      disabled={disabled}
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
        <span className={buttonTextStyle}>{text}</span>
        {typeof count === "number" && (
          <NotificationCountBadge
            container="span"
            className={`${badgeInContainerButtonStyle({ color, disabled })}`}
            size={notificationCountBadgeSize}
            text={count}
          />
        )}
        {children}
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

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
