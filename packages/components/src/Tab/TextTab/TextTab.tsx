import { useLayoutEffect, useRef, useState } from "react"
import { Root, TabsList, Trigger as RadixTrigger } from "@radix-ui/react-tabs"
import {
  rootStyle,
  listStyle,
  listContainerStyle,
  indicatorStyle,
  triggerStyle,
  classes,
} from "./style.css"

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

export const Trigger = ({ value, children }) => {
  return (
    <RadixTrigger className={triggerStyle} value={value}>
      <span>{children || value}</span>
    </RadixTrigger>
  )
}

export { Content } from "@radix-ui/react-tabs"
