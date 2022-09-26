export enum IconSize {
  PC = 36,
  XL = 24,
  LG = 20,
  SM = 16,
  XS = 12,
}

export interface IconProps {
  className?: string;
  fill?: string;
  size?: IconSize;
  style?: React.CSSProperties;
}
