import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgClockLineRegular = (
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
        d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm0 36.4c-9.04 0-16.4-7.36-16.4-16.4S14.96 7.6 24 7.6 40.4 14.96 40.4 24 33.04 40.4 24 40.4Zm1.8-17.52V14c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v9.6c0 .46.18.9.5 1.24l6.02 6.38a1.79 1.79 0 0 0 2.54.06 1.8 1.8 0 0 0 .08-2.54l-5.54-5.86Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgClockLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
