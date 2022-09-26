import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgLocationLineThin1 = (
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
      d="M24 44.75c-.58 0-.97-.2-1.23-.33-.52-.26-.81-.78-1.04-1.24-.04-.08-.07-.17-.09-.26-1.98-8.23-5.24-12.46-7.87-15.86-2.35-3.03-4.37-5.65-4.37-9.81 0-7.72 6.55-14 14.6-14s14.6 6.28 14.6 14c0 4.16-2.02 6.78-4.37 9.82-2.62 3.39-5.87 7.61-7.85 15.79-.1.7-.7 1.34-1.15 1.56-.16.08-.7.33-1.24.33H24Zm.03-2.38v.01-.01Zm-.1-.13.06.12s.02-.01.05-.02c2.1-8.7 5.53-13.15 8.29-16.73 2.24-2.91 3.87-5.01 3.87-8.35 0-6.4-5.47-11.6-12.2-11.6-6.73 0-12.2 5.19-12.2 11.59 0 3.34 1.62 5.44 3.87 8.35 2.75 3.56 6.17 7.99 8.27 16.63l-.01.01Z"
      fill={fill}
    />
    <path
      d="M24 22.55c2.6 0 4.8-2.1 4.8-4.8 0-2.7-2.1-4.8-4.8-4.8-2.7 0-4.8 2.1-4.8 4.8 0 2.7 2.2 4.8 4.8 4.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLocationLineThin1);
const Memo = memo(ForwardRef);
export default Memo;
