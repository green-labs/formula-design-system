import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgArrowtriangleDownLineRegular = (
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
        d="M24.009 34.946c-.158 0-.552 0-.965-.241-.335-.151-.552-.382-.67-.502l-.079-.08-12.93-15.405c-.541-.693-.66-1.607-.285-2.39.364-.783 1.142-1.265 2.029-1.265h25.8c.896 0 1.703.562 2.058 1.436.325.793.177 1.687-.365 2.28L25.653 34.192c-.148.15-.305.26-.413.32l-.316.322h-.344c-.148.05-.335.1-.562.1l-.01.01Zm-11.295-16.87L24.009 31.52l11.294-13.446h-22.59Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgArrowtriangleDownLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
