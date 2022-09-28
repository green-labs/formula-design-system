import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgShareandroidLineThin = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size);
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M35.5 31.75c-1.6 0-3.04.66-4.09 1.71L18 25.65c.16-.52.24-1.08.24-1.65 0-.57-.08-1.11-.24-1.62l13.72-7.54c1.01.88 2.32 1.41 3.76 1.41 3.17 0 5.75-2.58 5.75-5.75s-2.56-5.75-5.73-5.75c-3.17 0-5.75 2.58-5.75 5.75 0 .8.16 1.55.46 2.24l-13.46 7.4a5.726 5.726 0 0 0-4.25-1.89c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75c1.67 0 3.18-.72 4.23-1.87l13.33 7.77c-.2.58-.31 1.2-.31 1.85 0 3.17 2.58 5.75 5.75 5.75s5.75-2.58 5.75-5.75-2.58-5.75-5.75-5.75Zm0-24.5c1.82 0 3.25 1.43 3.25 3.25s-1.43 3.25-3.25 3.25-3.25-1.43-3.25-3.25 1.43-3.25 3.25-3.25Zm-23 20c-1.82 0-3.25-1.43-3.25-3.25s1.43-3.25 3.25-3.25 3.25 1.43 3.25 3.25-1.43 3.25-3.25 3.25Zm23 13.5c-1.82 0-3.25-1.43-3.25-3.25s1.43-3.25 3.25-3.25 3.25 1.43 3.25 3.25-1.43 3.25-3.25 3.25Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgShareandroidLineThin);
const Memo = memo(ForwardRef);
export default Memo;
