import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCheckcircleFill = (
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
      d="M23.5 4C12.75 4 4 12.75 4 23.5S12.75 43 23.5 43 43 34.25 43 23.5 34.25 4 23.5 4Zm10.15 12.96-12.6 15c-.14.16-.31.3-.5.39-.19.09-.41.14-.62.14h-.03c-.21 0-.42-.04-.61-.13s-.36-.21-.5-.37l-5.4-6a1.488 1.488 0 0 1-.4-1.09c0-.2.06-.4.14-.58.08-.18.21-.34.35-.48.15-.13.32-.24.51-.3.19-.07.39-.09.59-.08.2.01.4.07.57.15.18.09.34.21.47.37l4.25 4.72 11.49-13.68c.26-.3.62-.48 1.01-.51.39-.03.78.09 1.08.35.3.25.49.62.53 1.01.04.39-.08.78-.33 1.09Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCheckcircleFill);
const Memo = memo(ForwardRef);
export default Memo;
