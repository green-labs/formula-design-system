import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgTouchLineRegular = (
  {
    size = IconSize.XL,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    viewBox="0 0 48 48"
    className={className}
    ref={ref}
    {...props}
  >
    <path
      d="M28.145 44.525c-6.36 0-9.34-2.82-12.87-6.81-.92-1.04-3.75-4.1-3.75-4.1l-.57-.64c-1.53-1.68-2.46-2.7-2.46-3.98 0-1.28.81-2.51 2.22-3.2 1.85-.92 4.76-1.04 6.76.5.25.19.56.46.92.8v-11.28c0-2.62 2.06-4.77 4.59-4.79 2.59 0 4.7 2.15 4.7 4.79v6.48h5.02c3.88 0 6.8 2.78 6.8 6.46v4.41c0 4.62-1.06 10.68-9.86 11.29v.05h-1.5v.02Zm-.62-3h.62c6.96 0 8.36-3.19 8.36-8.34v-4.41c0-2.01-1.6-3.46-3.8-3.46h-5.7c-1.28 0-2.31-1.04-2.31-2.31v-7.17c0-.97-.77-1.79-1.69-1.79-.89 0-1.6.79-1.6 1.79v13.94c0 .78-.47 1.47-1.19 1.76-.73.29-1.55.12-2.09-.45-1.44-1.52-2.13-2.14-2.46-2.39-.97-.74-2.62-.68-3.6-.19-.3.15-.5.32-.54.46.18.38 1.11 1.4 1.68 2.02l.56.63s2.85 3.08 3.78 4.13c3.06 3.46 5.3 5.61 10 5.78h-.02Z"
      fill={fill}
    />
    <path
      d="M32.815 16.575c-.86 0-1.55-.69-1.55-1.55 0-4.66-3.79-8.45-8.45-8.45-4.66 0-8.44 3.78-8.44 8.44 0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-6.36 5.18-11.54 11.54-11.54 6.36 0 11.55 5.18 11.55 11.55 0 .86-.69 1.55-1.55 1.55Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTouchLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
