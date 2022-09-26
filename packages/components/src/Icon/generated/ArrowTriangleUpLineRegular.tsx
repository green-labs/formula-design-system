import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowtriangleUpLineRegular = (
  {
    size = IconSize.XL,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    viewBox="0 0 48 48"
    className={className}
    ref={ref}
    {...props}
  >
    <path
      d="M37.84 32.89h-26.2c-.91 0-1.73-.56-2.09-1.43-.33-.79-.18-1.68.37-2.27l13.15-15.35c.15-.15.31-.26.42-.32l.32-.32h.35c.15-.05.34-.1.57-.1.16 0 .56 0 .98.24.34.15.56.38.68.5l.08.08L39.6 29.26c.55.69.67 1.6.29 2.38-.37.78-1.16 1.26-2.06 1.26l.01-.01Zm-24.57-3h22.94L24.74 16.5 13.27 29.89Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowtriangleUpLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
