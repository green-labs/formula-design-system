import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgThumbupLineRegular = (
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
        d="M35.95 16.16h-2.74l.28-1.26c.5-2.22 1.01-4.52 1.01-5.9 0-3.94-2.52-6-5-6-2.14 0-4.71 1.46-5.68 4.72l-.2.54c-1.25 3.33-1.94 6.16-4.62 8.12-2.71 1.97-6.06 2.1-9.61 2.25l-.64.03c-1.64.07-2.74 1.57-2.74 2.93v17.49c0 1.61 1.27 2.93 2.83 2.93h20.55c7.01 0 13.71-6.05 13.71-13.49v-5.88c0-3.57-3.76-6.47-7.14-6.47l-.01-.01ZM9.02 21.65l.48-.02c1.33-.05 2.67-.12 3.99-.27V39H9l.02-17.35Zm31.07 6.87c0 5.78-5.35 10.49-10.71 10.49H16.5V20.8c1.47-.4 2.91-1.02 4.26-2 3.42-2.48 4.36-6 5.67-9.49l.26-.71c.55-1.93 1.86-2.61 2.81-2.61.69 0 2 .63 2 3 0 1.06-.52 3.38-.93 5.25-.1.45-.2.89-.29 1.3-.4 1.42.03 2.3.46 2.78.56.64 1.45.94 2.39.83h2.82c1.73 0 4.14 1.56 4.14 3.47V28.52Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgThumbupLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
