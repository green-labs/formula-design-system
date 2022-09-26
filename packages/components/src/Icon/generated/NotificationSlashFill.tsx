import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgNotificationSlashFill = (
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
      d="M6.026 43.5a1.49 1.49 0 0 0 1.06-.44l36-36a1.5 1.5 0 0 0-2.12-2.12l-36 36a1.5 1.5 0 0 0 1.06 2.56ZM6.769 31.998l.458-.556c2.063-2.495 3.31-4 3.31-11.063 0-3.656.875-6.656 2.6-8.906 1.27-1.662 2.989-2.923 5.254-3.855a.282.282 0 0 0 .077-.063C19.282 4.827 21.512 3 24.026 3c2.515 0 4.743 1.827 5.558 4.553a.293.293 0 0 0 .076.06c.71.29 1.395.635 2.051 1.032a.75.75 0 0 1 .14 1.17L7.309 34.355a.75.75 0 0 1-1.275-.622c.072-.637.327-1.24.735-1.734ZM37.513 20.377c0 7.065 1.246 8.57 3.31 11.062.15.181.303.365.459.556a3.297 3.297 0 0 1 .436 3.527c-.579 1.219-1.811 1.975-3.219 1.975H18.701a.75.75 0 0 1-.53-1.28l18-18a.75.75 0 0 1 1.276.468c.044.544.066 1.107.066 1.692ZM23.647 44.5a7.505 7.505 0 0 1-6.604-3.95.375.375 0 0 1 .332-.55h12.542a.376.376 0 0 1 .333.55 7.505 7.505 0 0 1-6.603 3.95Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgNotificationSlashFill);
const Memo = memo(ForwardRef);
export default Memo;
