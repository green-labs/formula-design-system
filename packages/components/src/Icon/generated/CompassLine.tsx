import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCompassLine = (
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
      d="M4.5 24c0 10.75 8.75 19.5 19.5 19.5S43.5 34.75 43.5 24 34.75 4.5 24 4.5 4.5 13.25 4.5 24Zm3 0c0-9.1 7.4-16.5 16.5-16.5S40.5 14.9 40.5 24 33.1 40.5 24 40.5 7.5 33.1 7.5 24Zm26.4-10.6c.29 0 .53.12.64.33h-.01l.16.16-.04.51-5.1 11.8c-.29.69-.7 1.33-1.27 2.02-.53.53-1.22.97-2.09 1.34L14.3 34.7h-.2c-.28 0-.48-.13-.56-.36l-.14-.14.04-.5 5.1-11.8c.3-.69.71-1.33 1.28-2.02.33-.33 1.13-1.06 2.11-1.35L33.9 13.4ZM21 24c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCompassLine);
const Memo = memo(ForwardRef);
export default Memo;
