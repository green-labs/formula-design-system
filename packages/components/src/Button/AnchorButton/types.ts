import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonCommonProps } from "../commonTypes"

interface AnchorButtonTextProps {
  text: string
}

interface AnchorButtonIconProps {
  leftIcon?: FunctionComponent<IconProps>
  rightIcon?: FunctionComponent<IconProps>
}

interface AnchorButtonCountProps {
  count?: number
}

interface AnchorButtonBlockProps {
  block?: boolean
}

export type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonCommonProps &
  AnchorButtonTextProps &
  AnchorButtonIconProps &
  AnchorButtonCountProps &
  AnchorButtonBlockProps
