import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgShareiosFill = (
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
        d="M35.25 17.5H25.5v10.594a1.5 1.5 0 1 1-3 0V17.5h-9.75a5.256 5.256 0 0 0-5.25 5.25v17A5.256 5.256 0 0 0 12.75 45h22.5a5.256 5.256 0 0 0 5.25-5.25v-17a5.256 5.256 0 0 0-5.25-5.25ZM25.473 9.12l4.94 4.94a1.5 1.5 0 0 0 2.12-2.121l-7.5-7.5a1.5 1.5 0 0 0-2.12 0l-7.5 7.5a1.5 1.5 0 0 0 2.12 2.12l4.94-4.938v8.378h3V9.121Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgShareiosFill);
const Memo = memo(ForwardRef);
export default Memo;
