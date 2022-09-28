import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgPersonLineBold = (
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
        d="M17.456 7.9c-1.8 1.9-2.6 4.4-2.4 7.2.3 5.1 4.3 8.9 9.2 8.9 4.9 0 8.9-3.8 9.2-8.9.2-2.7-.7-5.3-2.5-7.2-1.7-1.8-4.1-2.9-6.7-2.9-2.6.1-5 1.1-6.8 2.9Zm12.6 7c-.2 3.8-3.1 5.7-5.8 5.7-2.7 0-5.6-2-5.8-5.7-.1-1.8.4-3.5 1.5-4.6 1.1-1.1 2.6-1.8 4.3-1.8 1.7 0 3.2.6 4.3 1.8 1.1 1.2 1.6 2.8 1.5 4.6ZM24.056 25.1c-8 0-17.3 4.4-19.1 14-.2 1 0 2 .7 2.8.6.7 1.5 1.1 2.4 1.1h31.9c.9 0 1.8-.4 2.4-1.2.6-.8.9-1.8.7-2.7-1.6-9.6-11-14-19-14Zm-15.7 14.5c1.4-7.6 9.1-11.1 15.7-11.1s14.3 3.5 15.6 11.1h-31.3Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgPersonLineBold);
const Memo = memo(ForwardRef);
export default Memo;
