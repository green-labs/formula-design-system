import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSendplaneLine = (
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
      d="M8 40.4h-.12c-.35-.02-.68-.13-.96-.31A1.987 1.987 0 0 1 6 38.42v-.16l1-9.68c.02-.44.18-.86.46-1.2.29-.35.71-.6 1.17-.69l11.39-2.46-11.41-2.46c-.43-.08-.84-.33-1.14-.68-.28-.34-.44-.76-.46-1.2L6 10.2v-.14c0-.69.35-1.34.93-1.73a2 2 0 0 1 1.88-.17l31.93 13.66c.47.2.88.54 1.16.97.29.44.44.94.44 1.45s-.15 1.02-.43 1.45c-.28.43-.68.77-1.16.97L8.83 40.23c-.26.12-.54.18-.82.18L8 40.4Zm1.74-11.09-.8 7.82 30.37-12.92L8.93 11.25l.81 7.89 17.21 3.72a1.402 1.402 0 0 1 0 2.74L9.74 29.32v-.01Zm-.52.11H9.2h.02Zm-.05-10.4h.03-.03Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSendplaneLine);
const Memo = memo(ForwardRef);
export default Memo;
