import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonCommonProps } from "../commonTypes"

export interface ContainerButtonTextProps {
  text: string
}

export interface ContainerButtonIconProps {
  leftIcon?: FunctionComponent<IconProps>
  rightIcon?: FunctionComponent<IconProps>
}

export interface ContainerButtonCountProps {
  count?: number
}

export interface ContainerButtonBlockProps {
  block?: boolean
}

export type ContainerButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonCommonProps &
    ContainerButtonTextProps &
    ContainerButtonIconProps &
    ContainerButtonCountProps &
    ContainerButtonBlockProps
