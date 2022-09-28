import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgLinkcopyLineRegular = (
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
        d="M22.044 34.63h-6.72c-3.09 0-6.01-1.08-8.21-3.05-2.22-1.98-3.5-4.75-3.5-7.58s1.27-5.6 3.5-7.58c2.2-1.97 5.12-3.05 8.21-3.05h6.72a1.63 1.63 0 0 1 0 3.26h-6.72c-2.26 0-4.46.81-6.04 2.22-1.55 1.39-2.41 3.21-2.41 5.15 0 1.94.86 3.76 2.41 5.15 1.58 1.41 3.78 2.22 6.04 2.22h6.72a1.63 1.63 0 0 1 0 3.26ZM35.964 34.63h-6.72a1.63 1.63 0 0 1 0-3.26h6.72c2.26 0 4.46-.81 6.04-2.22 1.55-1.39 2.41-3.21 2.41-5.15 0-1.94-.85-3.76-2.41-5.15-1.58-1.41-3.78-2.22-6.04-2.22h-6.72a1.63 1.63 0 0 1 0-3.26h6.72c3.09 0 6.01 1.08 8.21 3.05 2.22 1.99 3.5 4.75 3.5 7.58s-1.27 5.6-3.5 7.58c-2.21 1.97-5.12 3.05-8.22 3.05h.01Z"
        fill={fill}
      />
      <path
        d="M35.254 25.63h-19.2a1.63 1.63 0 0 1 0-3.26h19.2a1.63 1.63 0 0 1 0 3.26Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgLinkcopyLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
