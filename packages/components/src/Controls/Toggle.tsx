import * as React from "react"
import { Text } from "../Text/Text"
import * as RadixUISwitch from "@radix-ui/react-switch"
import type { SwitchProps as RadixUISwitchProps } from "@radix-ui/react-switch"
import { toggleStyles } from "./styles.css"
import { stateClass } from "./common"

type RefType = React.Ref<HTMLButtonElement>

interface ToggleProps extends RadixUISwitchProps {
  props?: {}
  label?: string
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
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
        })} ${toggleStyles.container}`}
      >
        <RadixUISwitch.Root
          ref={inputRef}
          className={toggleStyles.root}
          disabled={disabled}
          {...additionalProps}
          {...props}
          id={usedId}
        >
          <RadixUISwitch.Thumb className={toggleStyles.thumb} />
        </RadixUISwitch.Root>
        {label ? (
          <Text.Body
            tag="label"
            size="md"
            props={{ htmlFor: usedId }}
            className={toggleStyles.label}
          >
            {label}
          </Text.Body>
        ) : null}
      </div>
    )
  }
)
Toggle.displayName = "RadioItem"

export { RadioGroup } from "@radix-ui/react-radio-group"
