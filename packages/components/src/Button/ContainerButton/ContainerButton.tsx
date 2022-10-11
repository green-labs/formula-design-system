import React, { ReactElement } from "react"

import {
  buttonSizeStyles,
  buttonTextStyle,
  buttonContainerStyle,
  buttonCountContainerStyle,
} from "./styles.css"
import type { IconProps } from "../../Icon"

// todo - support custom color
type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"
type negative = "negative-primary" | "negative-secondary"

export interface ContainerButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "xs" | "sm" | "md" | "lg" | "xl"
  variant: normal | negative
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

const Button = ({
  text,
  size,
  props,
  leftIcon,
  rightIcon,
  count,
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

  /* Todo - 아이콘 컬러 설정 필요 */
  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeStyles[size]}`}
      {...props}
    >
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <div>
        <span className={`${buttonTextStyle}`}>{text}</span>
        {typeof count === "number" && (
          <span className={`${buttonCountContainerStyle}`}>{count}</span>
        )}
      </div>
      {!!rightIcon && React.cloneElement(rightIcon, { sizePx: iconSizePx })}
    </button>
  )
}

Button.displayName = "Button"

export default Button
