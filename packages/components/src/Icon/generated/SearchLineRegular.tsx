import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSearchLineRegular = (
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
      d="m41.1 40-9-9.1c.5-.6 1-1.1 1.4-1.8 1.8-2.7 2.7-5.8 2.7-9 0-4.3-1.7-8.4-4.7-11.4S24.4 4 20.1 4c-3.2 0-6.3.9-9 2.7-2.7 1.8-4.7 4.3-5.9 7.2-1.2 3-1.5 6.2-.9 9.3.6 3.1 2.2 6 4.4 8.3 2.3 2.3 5.1 3.8 8.3 4.4 1 .2 2.1.3 3.2.3 2.1 0 4.2-.4 6.2-1.2 1.2-.5 2.4-1.2 3.5-2l9.1 9.2c.3.3.7.5 1.2.5.4 0 .8-.2 1.2-.5.4-.5.4-1.6-.3-2.2ZM25 32.1c-2.4 1-4.9 1.2-7.4.7s-4.8-1.7-6.6-3.5c-1.8-1.8-3-4.1-3.5-6.6s-.2-5.1.7-7.4c1-2.4 2.6-4.4 4.7-5.8C15 8.1 17.5 7.3 20 7.3c3.4 0 6.7 1.3 9.1 3.8 2.4 2.4 3.8 5.7 3.8 9.1 0 2.6-.8 5-2.2 7.1-1.3 2.2-3.3 3.8-5.7 4.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSearchLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
