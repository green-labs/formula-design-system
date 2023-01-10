import type { PropsWithChildren } from "react"
import { forwardRef } from "react"
import { Trigger as RadixTrigger } from "@radix-ui/react-tabs"
import type {
  Primitive,
  ComponentPropsWithoutRef,
} from "@radix-ui/react-primitive"
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

type TabsTriggerElement = React.ElementRef<typeof Primitive.button>
type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>
interface RadixTriggerProps extends PrimitiveButtonProps {
  value: string
}
interface TriggerProps {
  value: string
  icon?: React.ComponentType<IconProps>
  title?: string
  badge?: BadgeSpec
  triggerProps?: RadixTriggerProps
}

export const Trigger = forwardRef<TabsTriggerElement, RadixTriggerProps>(
  (
    {
      icon: Icon,
      title,
      value,
      children,
      badge,
      triggerProps,
    }: PropsWithChildren<TriggerProps>,
    forwardedRef
  ) => {
    return (
      <RadixTrigger
        className={triggerStyle}
        value={value}
        ref={forwardedRef}
        {...triggerProps}
      >
        <span className={triggerContentWrapperStyle}>
          {Icon && <Icon className={triggerIconStyle} size="lg" />}
          <Text.Body size="md" className={triggerTextStyle}>
            {title ?? children ?? value}
          </Text.Body>
          {badge && <TextTabBadge spec={badge} />}
        </span>
      </RadixTrigger>
    )
  }
)
