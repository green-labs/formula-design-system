import * as React from "react"
import { Text } from "../Text/Text"
import * as IconComponents from "../Icon/generated"
import * as RadixUICheckbox from "@radix-ui/react-checkbox"
import type { CheckboxProps as RadixUICheckboxProps } from "@radix-ui/react-checkbox"
import { checkboxStyles } from "./styles.css"
import { stateClass } from "./common"

type RefType = React.Ref<HTMLButtonElement>

interface CheckboxProps extends RadixUICheckboxProps {
  props?: {}
  label?: string
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
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
        })} ${checkboxStyles.container}`}
      >
        <RadixUICheckbox.Root
          ref={inputRef}
          className={checkboxStyles.button}
          id={usedId}
          {...additionalProps}
          {...props}
        >
          <span className={checkboxStyles.container}>
            <IconComponents.CheckLineBold
              className={checkboxStyles.icon}
              size="sm"
            />
          </span>
        </RadixUICheckbox.Root>
        {label ? (
          <Text.Body
            tag="label"
            size="md"
            props={{ htmlFor: usedId }}
            className={checkboxStyles.label}
          >
            {label}
          </Text.Body>
        ) : null}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"
