import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCertificationFill = (
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
      d="M4.41 30.01a1.9 1.9 0 0 1-.34-.7 2.02 2.02 0 0 1 .2-1.52l2.21-3.82-2.21-3.81a2.02 2.02 0 0 1-.2-1.52c.14-.51.47-.95.93-1.21l3.82-2.21v-4.4c0-.53.21-1.04.59-1.41.38-.37.88-.59 1.41-.59h4.4L17.43 5c.13-.23.31-.43.51-.59.21-.16.45-.28.7-.35.25-.07.52-.08.78-.05.26.04.51.12.74.25l3.82 2.21 3.82-2.2c.23-.13.48-.22.74-.25s.52-.02.78.05c.51.14.95.47 1.21.93l2.21 3.82h4.4c.53 0 1.04.21 1.41.59.37.38.59.88.59 1.41v4.4l3.82 2.21c.46.26.79.7.93 1.21s.07 1.06-.2 1.52l-2.21 3.82 2.21 3.82c.13.23.22.48.25.74.04.26.02.53-.05.78s-.19.49-.35.7c-.16.21-.36.38-.59.51l-3.82 2.21v4.4c0 .53-.21 1.04-.59 1.41-.38.37-.88.59-1.41.59h-4.4l-2.21 3.82c-.27.46-.7.79-1.21.93s-1.06.07-1.52-.2l-3.82-2.21-3.82 2.21c-.46.26-1.01.33-1.52.2s-.95-.47-1.21-.93l-2.21-3.82h-4.39c-.53 0-1.04-.21-1.41-.59-.37-.38-.59-.88-.59-1.41v-4.4L5 30.53c-.23-.13-.43-.3-.59-.51v-.01Zm27.74-9.99c.57-.6.55-1.55-.04-2.12a1.51 1.51 0 0 0-2.12.04l-8.54 8.9-3.92-3.92c-.59-.58-1.54-.58-2.12 0-.58.59-.58 1.54 0 2.12l5 5c.29.29.67.44 1.08.44.4 0 .79-.17 1.07-.46l9.6-10h-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCertificationFill);
const Memo = memo(ForwardRef);
export default Memo;
