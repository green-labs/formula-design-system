import React, { ReactElement } from "react"

import {
  buttonSizeStyles,
  buttonTextStyle,
  buttonContainerStyle,
  buttonNotificationContainerStyle,
  buttonColorStyles,
  buttonTextContainer,
  buttonNotificationColorStyle,
} from "./styles.css"
import type { IconProps } from "../../Icon"
import NotificationCountBadge from "../../NotificationBadge/NotificationCountBadge"

type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"
type negative = "negative-primary" | "negative-secondary"

export type buttonVariants = normal | negative

export interface ContainerButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "xs" | "sm" | "md" | "lg" | "xl"
  variant: buttonVariants
  text: string
  props: {} // hatch escapes for rescript
}

export interface ContainerButtonIconProps {
  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

export interface ContainerButtonCountProps {
  count?: number
}

export type ContainerButtonProps = ContainerButtonBaseProps &
  ContainerButtonIconProps &
  ContainerButtonCountProps

const ContainerButton = ({
  text,
  size,
  leftIcon,
  rightIcon,
  count,
  variant,
  props,
  ...restProps
}: React.PropsWithChildren<ContainerButtonProps>) => {
  const getNotificationCountBadgeSize = () => {
    switch (size) {
      case "xs":
      case "sm":
      case "md":
        return "sm"
      case "lg":
      case "xl":
        return "md"
    }
  }

  const getIconSize = () => {
    switch (size) {
      case "xs":
        return 16
      case "sm":
        return 20
      case "md":
        return 24
      case "lg":
        return 28
      case "xl":
        return 32
    }
  }

  const iconSizePx = getIconSize()
  const notificationCountBadgeSize = getNotificationCountBadgeSize()

  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeStyles[size]} ${buttonColorStyles[variant]}`}
      {...props}
      {...restProps}
    >
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <span className={`${buttonTextContainer}`}>
        <span className={buttonTextStyle}>{text}</span>
        {typeof count === "number" && (
          <NotificationCountBadge
            size={notificationCountBadgeSize}
            container="span"
            text={count}
            className={`${buttonNotificationContainerStyle} ${buttonNotificationColorStyle[variant]}`}
          />
        )}
      </span>
      {!!rightIcon && React.cloneElement(rightIcon, { sizePx: iconSizePx })}
    </button>
  )
}

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
