import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSeemoreLineBold = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 9c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3Zm0 3.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8Zm0 8.2c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3Zm0 3.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8ZM21 36c0-1.6 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3-3-1.4-3-3Zm2.2 0c0 .4.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8-.8.4-.8.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSeemoreLineBold);
const Memo = memo(ForwardRef);
export default Memo;
