import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgHomeLineBold = (
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
        d="m43.73 21.75-17.4-16.6c-.5-.6-1.4-.9-2.3-.9-.9 0-1.7.3-2.3.9l-17.4 16.6c-.7.7-.8 1.9-.1 2.6.6.7 1.7.7 2.4.2v16c0 1 .4 1.6.7 2 .1.1.1.2.2.3.6.6 1.4.9 2.3.9h10.4c1 0 1.8-.8 1.8-1.8v-9.2c0-.6.5-1 1-1h1.9c.6 0 1 .5 1 1v9.2c0 1 .8 1.8 1.8 1.8h10.4c.9 0 1.7-.3 2.3-.9.6-.6.9-1.4.9-2.3v-16c.3.2.7.3 1.1.3.5 0 1-.2 1.3-.6.7-.7.7-1.8 0-2.5Zm-14.2 18.4v-7.4c0-2.6-2.1-4.6-4.6-4.6h-1.9c-2.6 0-4.6 2.1-4.6 4.6v7.4h-8.1v-19l13.7-13.1 13.7 13.1v19h-8.2Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgHomeLineBold);
const Memo = memo(ForwardRef);
export default Memo;
