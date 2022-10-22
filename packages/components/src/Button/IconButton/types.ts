import type { FunctionComponent } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonBaseProps } from "../buttonCommonTypes"

export interface IconButtonIconProps {
  icon: FunctionComponent<IconProps>
}

export type IconButtonProps = ButtonBaseProps & IconButtonIconProps
