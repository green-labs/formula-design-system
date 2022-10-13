import { colorMap } from "@greenlabs/formula-design-token"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import {
  buttonNotificationSizeStyle,
  notificationBaseStyle,
  textColorVar,
  bgColorVar,
  textStyles,
} from "./styles.css"

export interface NotificationCountBadgeProps {
  text: number
  props?: {}
  className?: string
  size?: "sm" | "md"
  textColor?: keyof typeof colorMap
  bgColor?: keyof typeof colorMap
  container?: React.ElementType
}

const NotificationCountBadge = ({
  container = "div",
  text,
  size = "md",
  textColor,
  bgColor,
  props = {},
  className = "",
}: React.PropsWithChildren<NotificationCountBadgeProps>) => {
  const Container = container

  // todo - fix split, validate color props
  const textColorProp =
    textColor && colorMap[textColor] && bgColor && colorMap[bgColor]
      ? assignInlineVars({
          [textColorVar]: colorMap[textColor],
          [bgColorVar]: colorMap[bgColor],
        })
      : undefined

  return (
    <Container
      className={`${notificationBaseStyle} ${
        buttonNotificationSizeStyle[size]
      } ${className} ${textColorProp ? textStyles : ""}`}
      style={textColorProp}
      {...props}
    >
      <span>{text}</span>
    </Container>
  )
}

NotificationCountBadge.displayName = "NotificationCountBadge"

export default NotificationCountBadge
