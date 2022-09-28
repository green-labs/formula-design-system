import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgMinusLineBold = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size);
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M37.5 22h-27c-1.1 0-2 .9-2 2s.9 2 2 2h27c1.1 0 2-.9 2-2s-.9-2-2-2Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMinusLineBold);
const Memo = memo(ForwardRef);
export default Memo;
