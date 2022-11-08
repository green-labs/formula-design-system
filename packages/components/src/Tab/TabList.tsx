import type { PropsWithChildren } from "react"
import * as React from "react"

type TabsContainerBaseProps = {
  className?: string
  isSelected: boolean
  value: any
}

type TabsContainerProps = TabsContainerBaseProps & {
  onSelect({ isSelected, value }: TabsContainerBaseProps): void
}

type TabsContainerRef = any // FIXME

interface TabsProps extends PropsWithChildren<TabsContainerProps> {
  container: React.ForwardRefExoticComponent<
    TabsContainerProps & React.RefAttributes<TabsContainerRef>
  >
  value: any
}

const TabList = React.forwardRef<TabsContainerRef, TabsProps>(
  (
    { className, value, children }: TabsProps,
    ref: React.ForwardedRef<TabsContainerRef>
  ) => {
    return (
      <ul ref={ref} className={className}>
        {children}
      </ul>
    )
  }
)

export default TabList
