import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonCommonProps } from "../commonTypes"

export interface AnchorButtonTextProps {
  text: string
}

export interface AnchorButtonIconProps {
  leftIcon?: FunctionComponent<IconProps>
  rightIcon?: FunctionComponent<IconProps>
}

export interface AnchorButtonCountProps {
  count?: number
}

export interface AnchorButtonBlockProps {
  block?: boolean
}

export type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonCommonProps &
  AnchorButtonTextProps &
  AnchorButtonIconProps &
  AnchorButtonCountProps &
  AnchorButtonBlockProps
