import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgImageLineBold = (
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
        d="M39.744 5.65h-30c-3.5 0-6.35 2.85-6.35 6.35v24c0 3.5 2.85 6.35 6.35 6.35h30c3.5 0 6.35-2.85 6.35-6.35V12c0-3.5-2.85-6.35-6.35-6.35Zm-30 3.7h30c1.49 0 2.65 1.16 2.65 2.65v18.53l-3.81-3.2c-.58-.55-1.6-1.18-3.24-1.18-.08 0-.15 0-.23.01-1.23.15-2.3.65-3.08 1.43l-2.07 2.07-7.96-7.02c-.89-.86-2.13-1.4-3.26-1.4-1.33 0-2.45.42-3.33 1.26l-8.32 6.66V12c0-1.49 1.16-2.65 2.65-2.65ZM7.094 36v-2.11l10.71-8.54c.05-.04.11-.09.16-.14.14-.14.3-.26.79-.26.12 0 .47.14.69.36.03.03.06.05.08.08l7.82 6.9-6.36 6.36H9.744c-1.49 0-2.65-1.16-2.65-2.65Zm32.65 2.65h-13.53l8.44-8.44c.17-.17.46-.3.81-.36.28.01.49.07.58.16.04.04.08.07.12.11l6.24 5.25v.64c0 1.49-1.16 2.65-2.65 2.65l-.01-.01Z"
        fill={fill}
      />
      <path
        d="M32.244 21.05c2.55 0 4.55-2 4.55-4.55s-2-4.55-4.55-4.55-4.55 2-4.55 4.55 2 4.55 4.55 4.55Zm0-6c.84 0 1.45.61 1.45 1.45s-.61 1.45-1.45 1.45-1.45-.61-1.45-1.45.61-1.45 1.45-1.45Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgImageLineBold);
const Memo = memo(ForwardRef);
export default Memo;
