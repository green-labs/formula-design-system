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
  buttonCommonStyle,
  buttonPseudoStyle,
  buttonSizeStyles,
  buttonContentStyle,
  buttonVariantStyles,
} from "../commonStyle.css"
import {
  buttonTextContainerStyle,
  buttonNotificationColorVariants,
  buttonNotificationContainerStyle,
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
  variant,
  style,
  props,
  children,
  ...restProps
}: React.PropsWithChildren<ContainerButtonProps>) => {
  const iconSizePx = getIconSize(size)
  const notificationCountBadgeSize = getNotificationCountBadgeSize(size)
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
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <span className={`${buttonTextContainerStyle}`}>
        <span className={buttonContentStyle}>{text}</span>
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
