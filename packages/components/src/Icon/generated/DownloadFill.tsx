import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgDownloadFill = (
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
      d="M32.65 20.66c.74-.74 1.95-.74 2.69 0v-.02c.74.75.74 1.95 0 2.69l-10 10c-.09.09-.19.17-.29.24l-.07.04-.07.04a1.14 1.14 0 0 1-.38.16.808.808 0 0 1-.17.05c-.12.03-.25.04-.37.04s-.25-.02-.37-.04a.81.81 0 0 1-.17-.05l-.055-.015a.658.658 0 0 1-.135-.045c-.043-.018-.082-.04-.119-.062l-.07-.038a.61.61 0 0 1-.14-.07c-.1-.07-.2-.15-.29-.24l-10-10c-.74-.75-.74-1.95 0-2.69s1.95-.74 2.69 0l6.76 6.76V8a1.9 1.9 0 1 1 3.8 0v19.42l6.76-6.76Z"
      fill={fill}
    />
    <path
      d="M12 41.9h24c1.58 0 3.06-.62 4.17-1.73A5.821 5.821 0 0 0 41.9 36v-4a1.9 1.9 0 1 0-3.8 0v4c0 .57-.22 1.09-.62 1.49-.39.39-.92.61-1.48.61H12c-.57 0-1.09-.22-1.49-.62-.39-.39-.61-.92-.61-1.48v-4a1.9 1.9 0 1 0-3.8 0v4c0 1.58.62 3.06 1.73 4.17A5.821 5.821 0 0 0 12 41.9Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDownloadFill);
const Memo = memo(ForwardRef);
export default Memo;
