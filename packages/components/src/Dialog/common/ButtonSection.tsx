import type { buttonSectionVariant } from "./style.css"

export type buttonSectionVariantKey = keyof typeof buttonSectionVariant
export interface ButtonSectionProps {
  buttonType: buttonSectionVariantKey
  onPrimary: React.MouseEventHandler<HTMLButtonElement>
  primaryLabel: string
  onSecondary: React.MouseEventHandler<HTMLButtonElement>
  secondaryLabel: string
}
