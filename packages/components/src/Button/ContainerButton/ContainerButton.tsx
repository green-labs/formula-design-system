import React, { ReactElement } from "react"

import {
  buttonSizeStyles,
  buttonTextStyle,
  buttonContainerStyle,
  buttonNotificationContainerStyle,
  buttonColorStyles,
  buttonTextContainer,
  buttonNotificationSizeStyle,
} from "./styles.css"
import type { IconProps } from "../../Icon"

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
  disabled: boolean
  className: string
  text: string
  props: {} // for rescript dom type
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
  props,
  leftIcon,
  rightIcon,
  count,
  variant,
}: React.PropsWithChildren<ContainerButtonProps>) => {
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

  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeStyles[size]} ${buttonColorStyles[variant]}`}
      {...props}
    >
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <span className={`${buttonTextContainer}`}>
        <span className={`${buttonTextStyle}`}>{text}</span>
        {typeof count === "number" && (
          <span
            className={`${buttonNotificationContainerStyle[variant]} ${buttonNotificationSizeStyle[size]}`}
          >
            {count}
          </span>
        )}
      </span>
      {!!rightIcon && React.cloneElement(rightIcon, { sizePx: iconSizePx })}
    </button>
  )
}

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
