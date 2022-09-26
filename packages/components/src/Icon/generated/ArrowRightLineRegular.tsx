import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowRightLineRegular = (
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
      d="M26.186 9.44a1.5 1.5 0 0 0-2.122 2.12l10.94 10.94H9.375a1.5 1.5 0 0 0 0 3h25.629l-10.94 10.94a1.5 1.5 0 0 0 2.122 2.12l13.5-13.5a1.5 1.5 0 0 0 0-2.12l-13.5-13.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRightLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
