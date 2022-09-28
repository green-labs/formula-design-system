import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgHelpFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.474 41.715c1.17.22 2.35.33 3.52.33v.01c2.36 0 4.69-.45 6.87-1.32 3.23-1.29 6.12-3.67 8.14-6.7 2.01-3.01 3.07-6.5 3.07-10.09 0-4.88-1.99-9.54-5.27-12.83-3.28-3.29-7.92-5.17-12.73-5.17-3.59 0-7.08 1.06-10.09 3.07-2.92 1.95-5.23 4.75-6.7 8.14-1.38 3.44-1.71 7.05-.98 10.38.64 3.46 2.34 6.66 4.93 9.24s5.78 4.29 9.24 4.94Zm1.15-8.3c0 1.03.81 1.84 1.84 1.84s1.84-.79 1.84-1.84-.81-1.84-1.84-1.84-1.84.81-1.84 1.84Zm.4-6.16c0 1.05.55 1.67 1.46 1.67v.01c.92 0 1.41-.6 1.41-1.72 0-1.59.57-2.41 2.44-3.51 2.18-1.31 3.24-3.04 3.24-5.3 0-3.34-2.7-5.67-6.57-5.67-2.95 0-5.25 1.31-6.16 3.49a4.02 4.02 0 0 0-.41 1.81c0 .86.47 1.35 1.3 1.35.75 0 1.11-.33 1.38-1.29.5-1.82 1.81-2.78 3.78-2.78 2.18 0 3.64 1.29 3.64 3.22 0 1.51-.66 2.47-2.41 3.54-2.17 1.3-3.1 2.72-3.1 4.75v.43Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgHelpFill);
const Memo = memo(ForwardRef);
export default Memo;
