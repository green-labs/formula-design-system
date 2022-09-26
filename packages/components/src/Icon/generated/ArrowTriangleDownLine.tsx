import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowTriangleDownLine = (
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
      d="M24.38 34.8c-.16 0-.56 0-.98-.24-.34-.15-.56-.38-.68-.5l-.08-.08L9.51 18.64c-.55-.69-.67-1.6-.29-2.38.37-.78 1.16-1.26 2.06-1.26h26.2c.91 0 1.73.56 2.09 1.43.33.79.18 1.68-.37 2.27L26.05 34.05c-.15.15-.31.26-.42.32l-.32.32h-.35c-.15.05-.34.1-.57.1l-.01.01ZM12.91 18l11.47 13.39L35.85 18H12.91Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowTriangleDownLine);
const Memo = memo(ForwardRef);
export default Memo;
