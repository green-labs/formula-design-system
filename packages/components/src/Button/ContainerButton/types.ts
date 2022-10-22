import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonBaseProps } from "../buttonCommonTypes"

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

export type ContainerButtonProps = ButtonBaseProps &
  ContainerButtonTextProps &
  ContainerButtonIconProps &
  ContainerButtonCountProps
