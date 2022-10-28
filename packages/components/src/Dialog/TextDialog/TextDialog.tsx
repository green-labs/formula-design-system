import type { ButtonSectionProps } from "../common/ButtonSection"
import { titleTextBase, bodyTextBase } from "../style.css"
import { Text } from "../../Text/Text"
import ContainerButton from "../../Button/ContainerButton"
import {
  buttonSectionVariant,
  buttonSectionAuxiliaryVariant,
} from "../common/style.css"
import { sizeVariant } from "./style.css"
import { variantChecker } from "../../utils/util"

type sizeVariantKey = keyof typeof sizeVariant
export interface TextDialogProps extends ButtonSectionProps {
  size: sizeVariantKey
  title?: string
  text: string
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
}: TextDialogProps) => {
  variantChecker(size, sizeVariant)
  variantChecker(buttonType, buttonSectionVariant)
  variantChecker(`${buttonType}-${size}`, buttonSectionAuxiliaryVariant)

  const sizeVariantClass = sizeVariant[size] ?? ""
  const buttonSectionAuxiliaryVariantKey: keyof typeof buttonSectionAuxiliaryVariant = `${buttonType}-${size}`
  const buttonSectionClass = `${buttonSectionVariant[buttonType]} ${buttonSectionAuxiliaryVariant[buttonSectionAuxiliaryVariantKey]}`

  return (
    <div className={sizeVariantClass}>
      {title ? (
        <Text.Headline className={titleTextBase}>{title}</Text.Headline>
      ) : null}
      <Text.Body
        className={`${bodyTextBase} ${title ? "with-title" : ""}`}
        tag="span"
      >
        {text}
      </Text.Body>
      <div className={buttonSectionClass}>
        <ContainerButton
          text={secondaryLabel}
          block
          size="md"
          color="secondary-gray"
          onClick={onSecondary}
        />
        <ContainerButton
          text={primaryLabel}
          block
          size="md"
          color="primary"
          onClick={onPrimary}
        />
      </div>
    </div>
  )
}

export default TextDialog
