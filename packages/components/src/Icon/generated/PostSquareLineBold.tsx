import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgPostSquareLineBold = (
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
        d="M37.55 18.15c-.8 0-1.5.7-1.5 1.5v17.2c0 .2 0 .5-.1.7-.1 0-.1.1-.1.1-.1.3-.3.5-.5.7 0 .1-.1.1-.1.2-.1.1-.3.2-.5.3l-.1.1c-.3.2-.5.2-.8.2h-22.5c-.6 0-1.2-.2-1.7-.7-.4-.4-.6-1-.6-1.5v-22.5c0-.6.3-1.2.7-1.6.4-.5 1-.7 1.6-.7h15.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-15.7c-1.5 0-2.8.5-3.8 1.5-.9 1-1.5 2.4-1.5 3.8v22.5c0 1.4.5 2.7 1.5 3.7l.1.1c1.1 1 2.4 1.5 3.7 1.5h22.5c.7 0 1.2-.1 2-.5 0-.1.1-.1.1-.1l.2-.1c.4-.2 1-.5 1.5-1.1.4-.5.8-1 1-1.6.3-.6.4-1.3.4-2v-17.2c0-.8-.7-1.5-1.5-1.5Z"
        fill={fill}
      />
      <path
        d="m41.55 6.95-.9-.9c-.3-.2-.6-.3-1-.3s-.7.1-.9.3l-16.9 16.9c-.2.2-.3.4-.4.6l-.8 2.3s-.2.6 0 .9c.1.2.3.2.6.2.1 0 .3 0 .5-.1l2.3-.8c.2-.1.4-.2.6-.4l16.9-16.9c.3-.3.4-.5.4-.9s-.1-.7-.4-.9Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgPostSquareLineBold);
const Memo = memo(ForwardRef);
export default Memo;
