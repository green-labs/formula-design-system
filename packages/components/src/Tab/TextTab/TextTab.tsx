import { useLayoutEffect, useRef, useState } from "react"
import { Root, TabsList, Trigger as RadixTrigger } from "@radix-ui/react-tabs"
import {
  rootStyle,
  listStyle,
  listContainerStyle,
  indicatorStyle,
  triggerStyle,
  classes,
  triggerContentWrapperStyle,
  triggerBadgeRedDotStyle,
} from "./style.css"
import { Text } from "../../Text/Text"
import { Badge } from "../../Badge/Badge"
import { theme } from "../../root.css"

const extractIndicatorState = (tabEl) => {
  return {
    left: tabEl.offsetLeft,
    width: tabEl.offsetWidth,
  }
}

// todo: on resize
export const List = ({
  children,
  contents = null,
  onValueChange,
  fullWidth,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const tabEl = ref.current?.querySelector("button")
    setState(extractIndicatorState(tabEl))
  }, [])

  const onValueChangeWrapped = (value: string) => {
    onValueChange(value)
    if (ref.current) {
      const listEl = ref.current
      const activeTabEl = listEl?.querySelector('[data-state="active"]')
      setState(extractIndicatorState(activeTabEl))
    }
  }

  return (
    <Root className={rootStyle} onValueChange={onValueChangeWrapped} {...props}>
      <div className={listContainerStyle}>
        <TabsList
          className={`${listStyle} ${fullWidth ? classes.tabListFull : ""}`}
          ref={ref}
        >
          {children}
        </TabsList>
        <div
          className={indicatorStyle}
          style={{ width: `${state.width}px`, left: `${state.left}px` }}
        />
      </div>
      {contents}
    </Root>
  )
}

// Have a little bit different spec w/ other badge, pretty messy
const TextTabBadge = ({ spec: badge }) => {
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

export const Trigger = ({ icon: Icon, title, value, children, badge }) => {
  return (
    <RadixTrigger className={triggerStyle} value={value}>
      <div className={triggerContentWrapperStyle}>
        {Icon && <Icon size="lg" />}
        {title ? (
          <Text.Body size="md" weight="bold">
            {title}
          </Text.Body>
        ) : (
          <span>{children || value}</span>
        )}
        {badge && <TextTabBadge spec={badge} />}
      </div>
    </RadixTrigger>
  )
}

export { Content } from "@radix-ui/react-tabs"
