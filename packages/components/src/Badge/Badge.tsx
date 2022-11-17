import { assignInlineVars } from "@vanilla-extract/dynamic"
import { badgeStyle, vars } from "./style.css"
import type { BadgeProps } from "./types"

export const Badge = ({
  size = "small",
  count,
  icon: Icon,
  backgroundColor,
}: BadgeProps) => {
  if (Icon) {
    let style
    if (backgroundColor) {
      style = assignInlineVars({ [vars.backgroundColor]: backgroundColor })
    }
    return (
      <div className={badgeStyle({ icon: "small" })} style={style}>
        <Icon color={"white"} sizePx={12} />
      </div>
    )
  }

  if (count) {
    return <div className={badgeStyle({ contents: size })}>{count}</div>
  }

  return <div className={badgeStyle({ simple: size })} />
}
