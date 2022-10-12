import React, { ReactElement } from "react"

import {
  buttonSizeStyles,
  buttonTextStyle,
  buttonContainerStyle,
  buttonNotificationContainerStyle,
  buttonColorStyles,
  buttonTextContainer,
  buttonNotificationSizeStyle,
} from "./styles.css"
import type { IconProps } from "../../Icon"
import { Text } from "../../Text/Text"

type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"
type negative = "negative-primary" | "negative-secondary"

export type buttonVariants = normal | negative

export interface ContainerButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "xs" | "sm" | "md" | "lg" | "xl"
  variant: buttonVariants
  disabled: boolean
  className: string
  text: string
  props: {} // for rescript dom type
}

export interface ContainerButtonIconProps {
  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

export interface ContainerButtonCountProps {
  count?: number
}

export type ContainerButtonProps = ContainerButtonBaseProps &
  ContainerButtonIconProps &
  ContainerButtonCountProps

const ContainerButton = ({
  text,
  size,
  props,
  leftIcon,
  rightIcon,
  count,
  variant,
}: React.PropsWithChildren<ContainerButtonProps>) => {
  const getIconSize = () => {
    switch (size) {
      case "xs":
        return 16
      case "sm":
        return 20
      case "md":
        return 24
      case "lg":
        return 28
      case "xl":
        return 32
    }
  }

  const getTextVariantKey = () => {
    switch (size) {
      case "xs":
        return "body-sm-regular" // xs - font.body.sm.regular
      case "sm":
        return "body-sm-regular" // sm - font.body.sm.regular
      case "md":
        return "body-md-regular" // md - font.body.md.regular
      case "lg":
        return "body-lg-bold" // lg - font.body.lg.bold
      case "xl":
        return "body-xl-bold" // xl - font.body.xl.bold
    }
  }

  const getCountVariantKey = () => {
    switch (size) {
      case "xs":
        return "caption-xs-regular"
      case "sm":
        return "caption-xs-regular"
      case "md":
        return "caption-xs-regular"
      case "lg":
        return "body-sm-regular"
      case "xl":
        return "body-sm-regular"
    }
  }

  const iconSizePx = getIconSize()
  const textVariantKey = getTextVariantKey()
  const countVariantKey = getCountVariantKey()

  return (
    <button
      className={`${buttonContainerStyle} ${buttonSizeStyles[size]} ${buttonColorStyles[variant]}`}
      {...props}
    >
      {!!leftIcon && React.cloneElement(leftIcon, { sizePx: iconSizePx })}
      <span className={`${buttonTextContainer}`}>
        <Text
          container="span"
          className={buttonTextStyle}
          variantKey={textVariantKey}
        >
          {text}
        </Text>
        {typeof count === "number" && (
          <Text
            variantKey={countVariantKey}
            className={`${buttonNotificationContainerStyle[variant]} ${buttonNotificationSizeStyle[size]}`}
          >
            {count}
          </Text>
        )}
      </span>
      {!!rightIcon && React.cloneElement(rightIcon, { sizePx: iconSizePx })}
    </button>
  )
}

ContainerButton.displayName = "ContainerButton"

export default ContainerButton
