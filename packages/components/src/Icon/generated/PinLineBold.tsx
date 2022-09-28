import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgPinLineBold = (
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
        d="m33.32 18.14-1.3-2.6s-.04-.08-.06-.11c-.07-.12-.16-.36-.16-.83V8.4h.1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h.3v6.2c0 .46-.09.71-.16.83-.02.04-.04.08-.06.11L14.7 18.1c-1.59 2.97-2.4 6.3-2.4 9.9 0 1.46 1.19 2.6 2.7 2.6h7.2v10.3c0 .94.76 1.7 1.7 1.7s1.7-.76 1.7-1.7V30.6H33c1.51 0 2.7-1.14 2.7-2.6 0-3.27-.8-6.58-2.38-9.86Zm-17.6 9.06c.11-2.72.78-5.25 2-7.54L19 17.11c.4-.7.6-1.54.6-2.51V8.4h8.8v6.2c0 .97.2 1.81.6 2.51l1.26 2.53c1.22 2.52 1.89 5.06 2.01 7.56H15.72Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgPinLineBold);
const Memo = memo(ForwardRef);
export default Memo;
