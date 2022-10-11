import type { ReactElement } from "react"

import {
  buttonSizeStyles,
  buttonAlignmentStyles,
  buttonContainerStyle,
} from "./styles.css"

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
  leftIcon?: ReactElement
  rightIcon?: ReactElement
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
  const getButtonAlignmentStyles = (): keyof typeof buttonAlignmentStyles => {
    if (!!leftIcon && !!!rightIcon) return "onlyLeftIcon"
    if (!!!leftIcon && !!rightIcon) return "onlyRightIcon"
    return "default"
  }

  const buttonAlignmentStyle = getButtonAlignmentStyles()

  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeStyles[size]} ${buttonAlignmentStyles[buttonAlignmentStyle]}`}
      {...props}
    >
      {/* {leftIcon} */}
      <div>
        {/* todo - support inline ellipsis */}
        {text}
        {/* <CountComponent /> */}
      </div>
      {/* {rightIcon} */}
    </button>
  )
}

Button.displayName = "Button"

export default Button
