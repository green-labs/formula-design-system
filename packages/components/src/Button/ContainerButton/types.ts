import type { ReactElement } from "react"
import type { IconProps } from "../../Icon/types"
import type { buttonSize, buttonVariants } from "../buttonCommonTypes"

export interface ContainerButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: buttonSize
  variant: buttonVariants
  text: string
  props: {} // escape hatch for rescript
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
