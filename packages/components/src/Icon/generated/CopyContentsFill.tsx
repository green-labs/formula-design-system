import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgCopycontentsFill = (
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
        d="M35.5 44.5h-16c-1.591 0-3.117-.721-4.243-2.006-1.125-1.284-1.757-3.026-1.757-4.842V17.348c0-1.816.632-3.558 1.757-4.842C16.383 11.222 17.91 10.5 19.5 10.5h16c1.591 0 3.117.722 4.243 2.006 1.125 1.284 1.757 3.026 1.757 4.842v20.304c0 1.816-.632 3.558-1.757 4.842C38.617 43.78 37.09 44.5 35.5 44.5Z"
        fill={fill}
      />
      <path
        d="M18.5 8h18.114a6.761 6.761 0 0 0-6.364-4.5h-17a6.75 6.75 0 0 0-6.75 6.75v21a6.761 6.761 0 0 0 4.5 6.364V15.5A7.5 7.5 0 0 1 18.5 8Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgCopycontentsFill);
const Memo = memo(ForwardRef);
export default Memo;
