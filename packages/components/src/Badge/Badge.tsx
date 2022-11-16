import { badgeStyle } from "./style.css"
import type { BadgeProps } from "./types"

export const Badge = ({ size = "small", count, icon }: BadgeProps) => {
  if (icon) {
    return <div className={badgeStyle({ size })}>{icon}</div>
  }

  if (count) {
    return <div className={badgeStyle({ size })}>{count}</div>
  }

  return <div className={badgeStyle({ size })} />
}
