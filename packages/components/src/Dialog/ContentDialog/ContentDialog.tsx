import type { PropsWithChildren } from "react"
import type { ButtonSectionProps } from "../common/ButtonSection"
import { titleTextBase, bodyTextBase, dialogBase } from "../style.css"
import { Text } from "../../Text/Text"
import ContainerButton from "../../Button/ContainerButton"
import {
  buttonSectionVariant,
  buttonSectionAuxiliaryVariant,
} from "../common/style.css"
import { bodyText, contentBase, sizeVariant, titleText } from "./style.css"
import { variantChecker } from "../../utils/util"
import { Content, Close, Portal } from "@radix-ui/react-dialog"
import { forwardRef } from "react"
import Overlay from "../Overlay"

type sizeVariantKey = keyof typeof sizeVariant

export interface ContentDialogProps extends ButtonSectionProps {
  size: sizeVariantKey
  title: string
  text?: string
}

const ContentDialog = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ContentDialogProps>
>(
  (
    {
      size,
      title,
      text,
      buttonType,
      onPrimary,
      primaryLabel,
      onSecondary,
      secondaryLabel,
      children,
    },
    ref
  ) => {
    variantChecker(size, sizeVariant)
    variantChecker(buttonType, buttonSectionVariant)
    variantChecker(`${buttonType}-${size}`, buttonSectionAuxiliaryVariant)

    const sizeVariantClass = sizeVariant[size] ?? ""
    const buttonSectionAuxiliaryVariantKey: keyof typeof buttonSectionAuxiliaryVariant = `${buttonType}-${size}`
    const buttonSectionClass = `${buttonSectionVariant[buttonType]} ${buttonSectionAuxiliaryVariant[buttonSectionAuxiliaryVariantKey]}`

    return (
      <Portal>
        <Overlay />
        <Content ref={ref}>
          <div className={`${sizeVariantClass} ${dialogBase}`}>
            <Text.Headline
              size="lg"
              className={`${titleTextBase} ${titleText}`}
              color="neutral-primary-contents"
            >
              {title}
            </Text.Headline>

            {text ? (
              <Text.Body
                className={`${bodyTextBase} "with-title" ${bodyText}`}
                size={"md"}
                color={"neutral-secondary-contents"}
                tag="span"
              >
                {text}
              </Text.Body>
            ) : null}
            <div className={contentBase}>{children} </div>
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
                  onClick={onPrimary}
                />
              </Close>
            </div>
          </div>
        </Content>
      </Portal>
    )
  }
)

export default ContentDialog
