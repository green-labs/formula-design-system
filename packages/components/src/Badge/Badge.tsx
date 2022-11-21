import { assignInlineVars } from "@vanilla-extract/dynamic"
import { badgeStyle, vars } from "./style.css"
import type { BadgeProps } from "./types"

export const Badge = ({
  size = "small",
  count,
  icon: Icon,
  color,
  backgroundColor,
}: BadgeProps) => {
  let style

  if (backgroundColor || color) {
    const styleSpec: Record<string, string> = {}
    if (backgroundColor) {
      styleSpec[vars.backgroundColor] = backgroundColor
    }
    if (color) {
      styleSpec[vars.color] = color
    }
    style = assignInlineVars(styleSpec)
  }
  if (Icon) {
    return (
      <div className={badgeStyle({ icon: "small" })}>
        <Icon color={"white"} sizePx={12} />
      </div>
    )
  }

  if (count) {
    return (
      <div className={badgeStyle({ contents: size })} style={style}>
        {count}
      </div>
    )
  }

  return <div className={badgeStyle({ simple: size })} style={style} />
}
