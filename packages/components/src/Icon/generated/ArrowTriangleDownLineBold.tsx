import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowtriangleDownLineBold = (
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
      d="M24.006 35.7c-.16 0-.56 0-.98-.24-.34-.15-.56-.38-.68-.5l-.08-.08-13.13-15.34c-.55-.7-.66-1.61-.29-2.38.37-.77 1.16-1.26 2.06-1.26h26.2c.91 0 1.73.56 2.09 1.43.33.79.18 1.68-.37 2.27l-13.15 15.35c-.15.16-.48.48-.98.6-.16.07-.39.14-.68.14l-.01.01Zm-11.47-16.8 11.47 13.39 11.47-13.39h-22.94Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowtriangleDownLineBold);
const Memo = memo(ForwardRef);
export default Memo;
