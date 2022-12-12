import type { PropsWithChildren, ReactNode } from "react"
import { Trigger as RadixTrigger } from "@radix-ui/react-tabs"
import {
  triggerStyle,
  triggerContentWrapperStyle,
  triggerTextStyle,
  triggerIconStyle,
  triggerBadgeRedDotStyle,
} from "./style.css"
import { Text } from "../../Text/Text"
import { Badge } from "../../Badge/Badge"
import { theme } from "../../theme"
import type { IconProps } from "../../Icon"

export type TriggerHTMLType = HTMLButtonElement

interface BadgeSpec {
  type: "count" | "simple" | "countSimple"
  value?: number
}

// Have a little bit different spec w/ other badge, pretty messy
const TextTabBadge = ({ spec: badge }: { spec: BadgeSpec }) => {
  if (badge.type === "count" && badge.value !== undefined) {
    return (
      <Badge
        size="small"
        count={badge.value}
        color={theme.colors["gray-80"]}
        backgroundColor={theme.colors["neutral-secondary-container"]}
      />
    )
  }
  if (badge.type === "simple") {
    return (
      <div className={triggerBadgeRedDotStyle}>
        <Badge size="small" />
      </div>
    )
  }
  // omg
  if (badge.type === "countSimple" && badge.value !== undefined) {
    return (
      <>
        <Badge
          size="small"
          count={badge.value}
          color={theme.colors["gray-80"]}
          backgroundColor={theme.colors["neutral-secondary-container"]}
        />
        <div className={triggerBadgeRedDotStyle}>
          <Badge size="small" />
        </div>
      </>
    )
  }
  return null
}

interface TriggerProps {
  icon?: React.ComponentType<IconProps>
  title?: string
  badge?: BadgeSpec
  value: string
}
export const Trigger = ({
  icon: Icon,
  title,
  value,
  children,
  badge,
}: PropsWithChildren<TriggerProps>) => {
  return (
    <RadixTrigger className={triggerStyle} value={value}>
      <div className={triggerContentWrapperStyle}>
        {Icon && <Icon className={triggerIconStyle} size="lg" />}
        <Text.Body size="md" className={triggerTextStyle}>
          {title ?? children ?? value}
        </Text.Body>
        {badge && <TextTabBadge spec={badge} />}
      </div>
    </RadixTrigger>
  )
}
