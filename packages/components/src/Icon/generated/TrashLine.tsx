import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgTrashLine = (
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
      d="M39.5 9h-8V6.75a3.731 3.731 0 0 0-2.31-3.47c-.46-.19-.94-.28-1.42-.28h-7.52c-.49 0-.97.1-1.43.28-.46.19-.87.46-1.22.81-.35.35-.62.76-.81 1.22-.19.46-.29.94-.28 1.44V9H8.5C7.67 9 7 9.67 7 10.5S7.67 12 8.5 12h.6l1.78 26.58c.13 2.52 2.06 4.42 4.5 4.42h17.24c2.45 0 4.34-1.85 4.5-4.4L38.9 12h.6c.83 0 1.5-.67 1.5-1.5S40.33 9 39.5 9Zm-20-2.25a.753.753 0 0 1 .46-.69c.09-.04.21-.04.29-.06h7.5a.776.776 0 0 1 .53.22c.07.07.12.15.16.25.04.09.06.18.06.29v2.25h-9V6.75Zm14.63 31.66c-.06.95-.66 1.59-1.5 1.59H15.38c-.85 0-1.45-.63-1.5-1.6L12.11 12H35.9l-1.77 26.41Z"
      fill={fill}
    />
    <path
      d="M18.91 15.5a1.5 1.5 0 0 0-1.41 1.59l1 17c.05.8.71 1.41 1.5 1.41h.09a1.5 1.5 0 0 0 1.41-1.59l-1-17c-.05-.83-.74-1.45-1.58-1.41h-.01ZM27.5 16.91l-1 17a1.5 1.5 0 0 0 1.41 1.59H28a1.5 1.5 0 0 0 1.5-1.41l1-17a1.5 1.5 0 0 0-1.41-1.59c-.85-.04-1.54.58-1.58 1.41h-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTrashLine);
const Memo = memo(ForwardRef);
export default Memo;
