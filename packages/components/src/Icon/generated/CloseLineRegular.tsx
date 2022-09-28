import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgCloseLineRegular = (
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
        d="m26.554 23.997 9.22-9.23c.7-.7.7-1.84 0-2.55-.7-.7-1.84-.7-2.55 0l-9.22 9.23-9.23-9.22a1.78 1.78 0 0 0-2.54 0c-.71.7-.71 1.84 0 2.54l9.22 9.23-9.22 9.23c-.7.7-.7 1.84 0 2.55.35.35.81.53 1.27.53.46 0 .92-.18 1.27-.53l9.23-9.23 9.23 9.23c.35.35.81.53 1.27.53.46 0 .92-.18 1.27-.53.7-.7.7-1.84 0-2.55l-9.22-9.23Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgCloseLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
