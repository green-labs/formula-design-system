import {
  dialogBase,
  titleTextBase,
  bodyTextBase,
  sizeVariant,
  buttonSectionVariant,
  imageAspectRatioVariant,
  imageSizeVariant,
} from "./style.css"

import { Text } from "../Text/Text"
import { variantChecker } from "../util"

//⚠️ TODO : REPLACE WITH REAL BUTTON COMPONENT
const DummyButton = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContents: "center",
        background: "blue",
      }}
    >
      blahblah
    </div>
  )
}

type buttonSectionVariantKey = keyof typeof buttonSectionVariant
interface ButtonSectionProps {
  buttonType: buttonSectionVariantKey
  onPrimary: React.MouseEvent<HTMLButtonElement, MouseEvent>
  onSecondary: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

type imageAspectRatioVariantKey = keyof typeof imageAspectRatioVariant
export interface ImageDialogProps extends ButtonSectionProps {
  props: {}
  className: string
  imageAspectRatio: imageAspectRatioVariantKey
  imageSrc: string
}

type sizeVariantKey = keyof typeof sizeVariant

export interface TextDialogProps extends ButtonSectionProps {
  props: {}
  className?: string
  size: sizeVariantKey
  title?: string
  text: string
}

export type DialogProps = TextDialogProps | ImageDialogProps

const TextDialog = ({
  props,
  className = "",
  size,
  title,
  text,
  buttonType,
  onPrimary,
  onSecondary,
}: TextDialogProps) => {
  const sizeVariantClass = sizeVariant[size] ?? ""
  const buttonSectionClass = buttonSectionVariant[buttonType]

  return (
    <div className={`${sizeVariantClass} ${className}`}>
      {title ? (
        <Text.Headline className={titleTextBase}>{title}</Text.Headline>
      ) : null}
      <Text.Body
        className={`${bodyTextBase} ${title ? "" : "with-title"}`}
        tag="span"
      >
        {text}
      </Text.Body>
      <div className={buttonSectionClass}>
        <DummyButton />
        <DummyButton />
      </div>
    </div>
  )
}

const ImageDialog = ({
  props,
  className,
  imageAspectRatio,
  imageSrc,
  buttonType,
}) => {
  variantChecker(imageAspectRatio, imageAspectRatioVariant)
  variantChecker(buttonType, buttonSectionVariant)
  const imageAspectRatioClass = imageAspectRatioVariant[imageAspectRatio]
  const imageSizeClass = imageSizeVariant[imageAspectRatio]
  const buttonSectionClass = buttonSectionVariant[buttonType]
  return (
    <div className={`${imageAspectRatioClass} ${className}`}>
      <img src={imageSrc} className={imageSizeClass} alt="image" />
      <div className={buttonSectionClass}>
        <DummyButton />
        <DummyButton />
      </div>
    </div>
  )
}

export const Dialog = {
  TextDialog,
  ImageDialog,
}
