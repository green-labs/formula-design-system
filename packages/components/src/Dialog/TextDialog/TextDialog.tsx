import type { ButtonSectionProps } from "../common/ButtonSection"
import { titleTextBase, bodyTextBase, dialogBase } from "../style.css"
import { Text } from "../../Text/Text"
import ContainerButton from "../../Button/ContainerButton"
import {
  buttonSectionVariant,
  buttonSectionAuxiliaryVariant,
} from "../common/style.css"
import { sizeVariant } from "./style.css"
import { variantChecker } from "../../utils/util"
import { InputElement, TextField } from "../../TextField/TextField"
import { useState } from "react"
import { Content, Close } from "@radix-ui/react-dialog"

type sizeVariantKey = keyof typeof sizeVariant
export interface TextDialogProps extends ButtonSectionProps {
  size: sizeVariantKey
  title?: string
  text: string
  placeholder?: string
}

const TextDialog = ({
  size,
  title,
  text,
  buttonType,
  onPrimary,
  primaryLabel,
  onSecondary,
  secondaryLabel,
  placeholder,
}: TextDialogProps) => {
  variantChecker(size, sizeVariant)
  variantChecker(buttonType, buttonSectionVariant)
  variantChecker(`${buttonType}-${size}`, buttonSectionAuxiliaryVariant)

  const sizeVariantClass = sizeVariant[size] ?? ""
  const buttonSectionAuxiliaryVariantKey: keyof typeof buttonSectionAuxiliaryVariant = `${buttonType}-${size}`
  const buttonSectionClass = `${buttonSectionVariant[buttonType]} ${buttonSectionAuxiliaryVariant[buttonSectionAuxiliaryVariantKey]}`

  const [state, setState] = useState("")

  return (
    <Content>
      <div className={`${sizeVariantClass} ${dialogBase}`}>
        {title ? (
          <Text.Headline
            size="lg"
            className={titleTextBase}
            color="neutral-primary-contents"
          >
            {title}
          </Text.Headline>
        ) : null}
        <Text.Body
          className={`${bodyTextBase} ${title ? "with-title" : ""}`}
          size={title ? "md" : "lg"}
          color={
            title ? "neutral-secondary-contents" : "neutral-primary-contents"
          }
          tag="span"
        >
          {text}
        </Text.Body>
        <TextField
          placeholder={placeholder}
          size="large"
          onChange={(e) => setState((_) => e.target.value)}
        />
        <div className={buttonSectionClass}>
          <Close asChild={true}>
            <ContainerButton
              text={secondaryLabel}
              block
              size="md"
              color="tertiary-gray"
              onClick={onSecondary}
            />
          </Close>
          <Close asChild={true}>
            <ContainerButton
              text={primaryLabel}
              block
              size="md"
              color="primary"
              value={state}
              onClick={onPrimary}
            />
          </Close>
        </div>
      </div>
    </Content>
  )
}

export default TextDialog
