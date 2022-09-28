import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgThumbupFill = (
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
        d="m32.31 16.27 3.74-.02-.01-.01c3.39 0 6.14 2.9 6.14 6.47v5.88c0 7.43-5.71 13.48-12.71 13.48H16.18a1 1 0 0 1-1-1V19.41c0-.477.338-.884.8-1 1.302-.327 2.522-.815 3.57-1.58 2.69-1.95 4.38-4.789 5.629-8.117l.001-.003.2-.54c.97-3.26 2.08-5.09 4.22-5.09 4.63.22 4.25 5.21 4.19 5.99-.18 2.16-1.48 7.2-1.48 7.2ZM8.56 19.3l.65-.03v-.01a92.664 92.664 0 0 0 1.888-.094 1.016 1.016 0 0 1 1.082 1.008V41.08a1 1 0 0 1-1 1H8.65c-1.56 0-2.83-1.32-2.83-2.93V22.22c0-1.35 1.11-2.85 2.74-2.92Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgThumbupFill);
const Memo = memo(ForwardRef);
export default Memo;
