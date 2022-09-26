import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgMenuFill = (
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
      d="M6.545 10.864c0-1.205.977-2.182 2.182-2.182h30.546a2.182 2.182 0 0 1 0 4.363H8.727a2.182 2.182 0 0 1-2.182-2.181ZM6.545 23.954c0-1.205.977-2.181 2.182-2.181h30.546a2.182 2.182 0 1 1 0 4.363H8.727a2.182 2.182 0 0 1-2.182-2.182ZM6.545 37.045c0-1.205.977-2.181 2.182-2.181h30.546a2.182 2.182 0 0 1 0 4.363H8.727a2.182 2.182 0 0 1-2.182-2.182Z"
      fill="#000"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMenuFill);
const Memo = memo(ForwardRef);
export default Memo;
