import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonCommonProps } from "../commonTypes"

interface ContainerButtonTextProps {
  text: string
}

interface ContainerButtonIconProps {
  leftIcon?: FunctionComponent<IconProps>
  rightIcon?: FunctionComponent<IconProps>
}

interface ContainerButtonCountProps {
  count?: number
}

interface ContainerButtonBlockProps {
  block?: boolean
}

export type ContainerButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonCommonProps &
    ContainerButtonTextProps &
    ContainerButtonIconProps &
    ContainerButtonCountProps &
    ContainerButtonBlockProps
