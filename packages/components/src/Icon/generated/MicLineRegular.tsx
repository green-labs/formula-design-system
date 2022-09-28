import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgMicLineRegular = (
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
        d="M36 18c-.83 0-1.5.67-1.5 1.5v3C34.5 28.29 29.79 33 24 33s-10.5-4.71-10.5-10.5v-3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3c0 6.94 5.26 12.66 12 13.41v4.59H18c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-4.5v-4.59c6.74-.75 12-6.47 12-13.41v-3c0-.83-.67-1.5-1.5-1.5Z"
        fill={fill}
      />
      <path
        d="M24 30c4.14 0 7.5-3.41 7.5-7.59V12c0-4.2-3.29-7.5-7.5-7.5h-.03c-.98 0-1.93.19-2.84.56-.92.38-1.74.92-2.44 1.63a7.57 7.57 0 0 0-1.63 2.44c-.38.92-.57 1.89-.56 2.87v10.41c0 4.12 3.43 7.59 7.5 7.59Zm-4.5-18.01c0-.59.11-1.17.34-1.72.22-.55.55-1.04.97-1.46.42-.42.91-.75 1.46-.97.54-.22 1.12-.34 1.7-.34H24c2.57 0 4.5 1.93 4.5 4.5v10.41c0 2.53-2.02 4.59-4.5 4.59s-4.5-2.1-4.5-4.59V11.99Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMicLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
