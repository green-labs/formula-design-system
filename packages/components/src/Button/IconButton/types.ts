import type { ReactElement } from "react"
import type { IconProps } from "../../Icon/types"
import type { ButtonBaseProps } from "../buttonCommonTypes"

export interface IconButtonIconProps {
  icon: ReactElement<IconProps>
}

export type IconButtonProps = ButtonBaseProps & IconButtonIconProps
