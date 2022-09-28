import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgFarmLineRegular = (
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
        d="M33.265 40.23h-11.58v-6.95c0-1.3-.55-2.56-1.52-3.43a4.617 4.617 0 0 0-3.59-1.18h-.05c-2.42.28-4.1 2.77-4.1 4.86v6.67h-7.37c-2.32 0-4.21-1.89-4.21-4.21V24.66c0-8.72 6.53-16.11 14.87-16.82l.83-.03c4.44-.13 8.62 1.49 11.79 4.58 3.18 3.08 4.92 7.21 4.92 11.63v16.21h.01Zm-8.52-3.05h5.47V24.02c0-3.59-1.42-6.94-4-9.44-2.58-2.5-5.98-3.81-9.57-3.71l-.75.02c-6.69.57-11.99 6.63-11.99 13.79v11.33c0 .63.53 1.16 1.16 1.16h4.31v-3.62c0-3.97 3.09-7.52 6.9-7.9h.09c2.15-.2 4.28.52 5.87 1.95a7.697 7.697 0 0 1 2.53 5.7v3.89l-.02-.01Zm18.21 3.01h-7.37V23.98c0-5.02-2.3-10.08-6.14-13.53l-2.83-2.53 3.79-.14c1.53-.05 3.08.13 4.58.53 7.17 1.94 12.17 8.73 12.17 16.53v11.14c0 2.32-1.89 4.21-4.21 4.21h.01Zm-4.31-3.05h4.31c.63 0 1.16-.53 1.16-1.16V24.84c0-6.37-4.01-11.92-9.78-13.54 2.74 3.67 4.31 8.19 4.31 12.68v13.16Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgFarmLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
