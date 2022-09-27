import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgEditLineRegular = (
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
      d="M40.5 39.205h-33c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h33c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5ZM12.12 36.155c.08 0 .17 0 .25-.01l6.68-.68c.56-.06 1.08-.31 1.47-.7l18.79-18.73c.46-.46.72-1.08.72-1.73 0-.65-.25-1.27-.72-1.74l-6.05-6.05c-.46-.46-1.05-.7-1.73-.72-.66 0-1.27.26-1.73.72l-18.74 18.79c-.39.4-.64.92-.7 1.48l-.68 6.67c-.08.74.18 1.46.71 1.98.46.46 1.08.72 1.73.72Zm19.41-27.27 5.42 5.42-2.37 2.36-5.41-5.41 2.36-2.37Zm-18.3 18.35 13.82-13.86 5.4 5.4-13.86 13.82-5.97.61.61-5.97Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgEditLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
