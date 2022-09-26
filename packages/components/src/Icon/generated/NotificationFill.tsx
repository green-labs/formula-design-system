import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgNotificationFill = (
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
      d="m41.76 31.706.241.292a3.297 3.297 0 0 1 .433 3.53c-.58 1.214-1.805 1.97-3.206 1.97H10.27c-1.407 0-2.64-.757-3.219-1.976a3.296 3.296 0 0 1 .436-3.527 66.823 66.823 0 0 1 .459-.556c2.064-2.492 3.31-3.997 3.31-11.062 0-6.413 2.569-10.588 7.854-12.764a.293.293 0 0 0 .076-.06C20.001 4.827 22.23 3 24.744 3s4.744 1.827 5.558 4.555a.282.282 0 0 0 .077.063c2.265.932 3.984 2.193 5.255 3.855 1.724 2.25 2.599 5.25 2.599 8.906 0 7.059 1.246 8.567 3.307 11.059l.003.004.217.264ZM28.59 43.436a7.505 7.505 0 0 1-3.846 1.064 7.506 7.506 0 0 1-6.603-3.95.375.375 0 0 1 .333-.55h12.542a.375.375 0 0 1 .332.55 7.506 7.506 0 0 1-2.758 2.886Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgNotificationFill);
const Memo = memo(ForwardRef);
export default Memo;
