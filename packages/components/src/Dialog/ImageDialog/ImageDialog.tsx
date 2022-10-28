import { imageAspectRatioVariant, imageSizeVariant } from "./style.css"
import { ContainerButton } from "../../Button"
import type { ButtonSectionProps } from "../common/ButtonSection"
import { variantChecker } from "../../utils/util"
import { buttonSectionVariant } from "../common/style.css"

type imageAspectRatioVariantKey = keyof typeof imageAspectRatioVariant
export interface ImageDialogProps extends ButtonSectionProps {
  imageAspectRatio: imageAspectRatioVariantKey
  imageSrc: string
}

export const ImageDialog = ({
  imageAspectRatio,
  imageSrc,
  buttonType,
  secondaryLabel,
  onSecondary,
  primaryLabel,
  onPrimary,
}: ImageDialogProps) => {
  variantChecker(imageAspectRatio, imageAspectRatioVariant)
  variantChecker(imageAspectRatio, imageSizeVariant)
  variantChecker(buttonType, buttonSectionVariant)

  const imageAspectRatioClass = imageAspectRatioVariant[imageAspectRatio]
  const imageSizeClass = imageSizeVariant[imageAspectRatio]
  const buttonSectionClass = buttonSectionVariant[buttonType]
  return (
    <div className={imageAspectRatioClass}>
      <img src={imageSrc} className={imageSizeClass} alt="image" />
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

export default ImageDialog
