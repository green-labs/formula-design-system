import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowUpLineThin = (
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
      d="M24 39.825c-.66 0-1.2-.54-1.2-1.2v-26.35l-11.45 11.45c-.23.23-.53.35-.85.35a1.201 1.201 0 0 1-.85-2.05l13.5-13.5c.23-.23.53-.35.85-.35.32 0 .62.12.85.35l13.5 13.5a1.201 1.201 0 1 1-1.7 1.7L25.2 12.275v26.35c0 .66-.54 1.2-1.2 1.2Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowUpLineThin);
const Memo = memo(ForwardRef);
export default Memo;
