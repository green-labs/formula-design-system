import type { PropsWithChildren } from "react"
import * as React from "react"

type TabContainerBaseProps = {
  className?: string
  value: any
}

type TabContainerProps = TabContainerBaseProps & {
  // onSelected({ value }: TabContainerBaseProps): void
}

type TabContainerRef = any // FIXME
type ContainerProps = TabContainerProps & React.RefAttributes<TabContainerRef>
type Container = React.ForwardRefExoticComponent<ContainerProps>

interface TabProps extends PropsWithChildren<TabContainerProps> {
  container: Container
  value: any
}

export default React.forwardRef<TabContainerRef, TabProps>(
  (
    { container: Container, className, value }: TabProps,
    ref: React.ForwardedRef<unknown>
  ) => {
    return <Container ref={ref} className={className} value={value} />
  }
)
