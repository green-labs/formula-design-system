import * as React from "react"
import { Text } from "../Text/Text"
import * as RadioGroup from "@radix-ui/react-radio-group"
import type { RadioGroupItemProps as RadixUIRadioGroupItemProps } from "@radix-ui/react-radio-group"
import { radioItemStyles } from "./styles.css"
import { stateClass } from "./common"

type RefType = React.Ref<HTMLButtonElement>

interface RadioItemProps extends RadixUIRadioGroupItemProps {
  props?: {}
  label?: string
}

export const RadioItem = React.forwardRef<HTMLButtonElement, RadioItemProps>(
  (
    { id, className = "", props = {}, disabled, label, ...additionalProps },
    forwardedRef
  ) => {
    const inputRef: RefType = React.useRef(null)

    React.useImperativeHandle(
      forwardedRef,
      () => inputRef.current as HTMLButtonElement
    )

    const innerId = React.useId()
    const usedId = id ?? innerId

    return (
      <div
        className={`${className} ${stateClass({
          disabled,
        })} ${radioItemStyles.container}`}
      >
        <RadioGroup.Item
          ref={inputRef}
          className={radioItemStyles.button}
          id={usedId}
          disabled={disabled}
          {...additionalProps}
          {...props}
        >
          <span className={radioItemStyles.container}>
            <span className={radioItemStyles.icon} />
          </span>
        </RadioGroup.Item>
        {label ? (
          <Text.Body
            tag="label"
            size="md"
            props={{ htmlFor: usedId }}
            className={radioItemStyles.label}
          >
            {label}
          </Text.Body>
        ) : null}
      </div>
    )
  }
)
RadioItem.displayName = "RadioItem"

export { RadioGroup } from "@radix-ui/react-radio-group"
