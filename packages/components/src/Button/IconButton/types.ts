import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonCommonProps } from "../commonTypes"

export interface IconButtonIconProps {
  icon: FunctionComponent<IconProps>
}

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonCommonProps &
  IconButtonIconProps
