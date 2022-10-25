import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonBaseProps } from "../buttonCommonTypes"

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

export type ContainerButtonProps = ButtonBaseProps &
  ContainerButtonTextProps &
  ContainerButtonIconProps &
  ContainerButtonCountProps &
  ContainerButtonBlockProps
