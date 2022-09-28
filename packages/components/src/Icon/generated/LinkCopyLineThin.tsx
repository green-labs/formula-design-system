import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgLinkcopyLineThin = (
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
        d="M21.144 34.33h-6.7c-3.03 0-5.87-1.04-7.99-2.94-2.19-1.96-3.44-4.65-3.44-7.39 0-2.74 1.25-5.43 3.44-7.39 2.09-1.87 5-2.94 7.99-2.94h6.7c.73 0 1.33.6 1.33 1.33 0 .73-.6 1.33-1.33 1.33h-6.7c-2.34 0-4.61.82-6.21 2.26-1.62 1.45-2.56 3.42-2.56 5.41 0 1.99.93 3.96 2.56 5.41 1.63 1.46 3.84 2.26 6.21 2.26h6.7c.73 0 1.33.6 1.33 1.33 0 .73-.6 1.33-1.33 1.33ZM35.044 34.33h-6.7c-.73 0-1.33-.6-1.33-1.33 0-.73.6-1.33 1.33-1.33h6.7c2.34 0 4.61-.82 6.21-2.26 1.62-1.45 2.56-3.42 2.56-5.41 0-1.99-.93-3.96-2.56-5.41-1.63-1.46-3.84-2.26-6.21-2.26h-6.7c-.73 0-1.33-.6-1.33-1.33 0-.73.6-1.33 1.33-1.33h6.7c3.03 0 5.87 1.04 7.99 2.94 2.19 1.96 3.44 4.65 3.44 7.39 0 2.74-1.25 5.43-3.44 7.39-2.09 1.87-5 2.94-7.99 2.94Z"
        fill={fill}
      />
      <path
        d="M34.344 25.33h-19.2c-.73 0-1.33-.6-1.33-1.33 0-.73.6-1.33 1.33-1.33h19.2c.73 0 1.33.6 1.33 1.33 0 .73-.6 1.33-1.33 1.33Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgLinkcopyLineThin);
const Memo = memo(ForwardRef);
export default Memo;
