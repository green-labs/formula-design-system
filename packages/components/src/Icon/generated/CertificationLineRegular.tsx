import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCertificationLineRegular = (
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
      d="M21.695 30.479c-.4 0-.78-.16-1.06-.44l-5-5a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0l3.92 3.92 8.54-8.9c.57-.6 1.52-.62 2.12-.04.6.57.62 1.52.04 2.12l-9.6 10c-.28.29-.66.46-1.07.46h-.01Z"
      fill={fill}
    />
    <path
      d="m41.645 23.999 2.24-3.72c.63-1.05.27-2.41-.81-3.01l-3.8-2.1.08-4.34c.02-1.22-.98-2.22-2.2-2.2l-4.34.08-2.1-3.8a2.17 2.17 0 0 0-3.01-.81l-3.72 2.24-3.71-2.23a2.163 2.163 0 0 0-3.01.81l-2.1 3.8-4.34-.08c-1.22-.02-2.22.98-2.2 2.2l.08 4.34-3.8 2.1a2.17 2.17 0 0 0-.81 3.01l2.24 3.72-2.23 3.71c-.63 1.05-.27 2.41.81 3.01l3.8 2.1-.08 4.34c-.02 1.22.98 2.22 2.2 2.2l4.34-.08 2.1 3.8a2.17 2.17 0 0 0 3.01.81l3.72-2.24 3.72 2.24c1.05.63 2.41.27 3.01-.81l2.1-3.8 4.34.08c1.22.02 2.22-.98 2.2-2.2l-.08-4.34 3.8-2.1a2.17 2.17 0 0 0 .81-3.01l-2.24-3.72h-.02Zm-1.11 4.43-4.53 2.5.1 5.17-5.17-.1-2.5 4.53-4.43-2.67-4.43 2.67-2.5-4.53-5.17.1.1-5.17-4.53-2.5 2.67-4.43-2.67-4.43 4.53-2.5-.1-5.17 5.17.1 2.5-4.53 4.43 2.67 4.43-2.67 2.5 4.53 5.17-.1-.1 5.17 4.53 2.5-2.67 4.43 2.67 4.43Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCertificationLineRegular);
const Memo = memo(ForwardRef);
export default Memo;