import type { PropsWithChildren, ReactNode } from "react"
import { useLayoutEffect, useRef, useState } from "react"
import type { TabsProps } from "@radix-ui/react-tabs"
import { Root, TabsList } from "@radix-ui/react-tabs"
import {
  rootStyle,
  listStyle,
  listContainerStyle,
  indicatorStyle,
  classes,
} from "./style.css"
import type { TriggerHTMLType } from "./Trigger"

const extractIndicatorState = (tabEl: TriggerHTMLType) => {
  return {
    left: tabEl.offsetLeft,
    width: tabEl.offsetWidth,
  }
}

interface ListProps {
  contents?: ReactNode
  fullWidth?: boolean
  rootProps?: TabsProps
  onValueChange?: (value: string) => void
}
// todo: on resize
export const List = ({
  children,
  contents = null,
  onValueChange,
  fullWidth,
  rootProps,
  ...props
}: PropsWithChildren<ListProps>) => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const tabEl = ref.current?.querySelector("button")
    if (tabEl) {
      setState(extractIndicatorState(tabEl))
    }
  }, [])

  const onValueChangeWrapped = (value: string) => {
    onValueChange?.(value)
    // indicator animation
    const listEl = ref.current
    const activeTabEl = listEl?.querySelector<TriggerHTMLType>(
      '[data-state="active"]'
    )
    if (activeTabEl) {
      setState(extractIndicatorState(activeTabEl))
    }
  }

  return (
    <Root
      className={rootStyle}
      onValueChange={onValueChangeWrapped}
      {...rootProps}
    >
      <div className={listContainerStyle}>
        <TabsList
          className={`${listStyle} ${fullWidth ? classes.tabListFull : ""}`}
          ref={ref}
        >
          {children}
        </TabsList>
        <div
          className={indicatorStyle}
          style={{
            width: `${state.width}px`,
            transform: `translate(${state.left}px, 1px)`,
          }}
        />
      </div>
      {contents}
    </Root>
  )
}

export { Trigger } from "./Trigger"
export { Content } from "@radix-ui/react-tabs"
