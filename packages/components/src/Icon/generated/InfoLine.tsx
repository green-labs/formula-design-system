import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgInfoLine = (
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
    <path d="M24 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.5 20.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h1Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgInfoLine);
const Memo = memo(ForwardRef);
export default Memo;
