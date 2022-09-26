import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPinvenueLine = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.63 44.69c.27.14.72.36 1.37.36.61 0 1.21-.27 1.38-.36.57-.29 1.18-1.02 1.3-1.77 1.958-8.11 5.183-12.29 7.78-15.658l.01-.012c2.38-3.08 4.43-5.74 4.43-10 0-7.88-6.68-14.3-14.9-14.3S9.1 9.37 9.1 17.25c0 4.26 2.05 6.92 4.43 10l.035.045c2.594 3.372 5.824 7.57 7.775 15.705.03.11.07.22.12.32.25.5.57 1.07 1.17 1.37ZM12.1 17.25c0-6.23 5.34-11.3 11.9-11.3 6.56 0 11.9 5.07 11.9 11.3 0 3.24-1.59 5.31-3.8 8.17l-.01.012C29.422 28.89 26.128 33.16 24 41.27c-2.127-8.11-5.422-12.38-8.09-15.838l-.01-.012-.02-.026c-2.19-2.847-3.78-4.914-3.78-8.144Zm16.9.6c0 2.8-2.3 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPinvenueLine);
const Memo = memo(ForwardRef);
export default Memo;
