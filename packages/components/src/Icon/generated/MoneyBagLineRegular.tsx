import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgMoneybagLineRegular = (
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
        d="M33.985 43.545h-19.93c-3.69-.06-6.15-1.27-7.56-3.69-1.08-1.85-1.56-4.41-1.56-8.3 0-7.79 3.29-13.92 10.06-18.74l-.83-.74c-1.18-1.21-1.57-3.09-.99-4.7.65-1.78 2.27-2.92 4.14-2.92h13.54c1.99 0 3.6 1.24 4.01 3.08.53 1.77.2 3.37-.93 4.69l-.35.34-.31.27c6.13 4.33 9.79 11.33 9.79 18.73 0 4.83-1.13 8.23-3.35 10.09-1.78 1.49-3.87 1.75-5.69 1.88h-.06l.02.01Zm-17.51-33.79 3.77 3.35-3.34 2.38c-5.85 4.16-8.69 9.42-8.69 16.08 0 3.28.34 5.33 1.11 6.66.54.93 1.57 2 4.76 2.06h19.79c1.41-.1 2.75-.27 3.77-1.12 1.43-1.2 2.18-3.82 2.18-7.58 0-6.34-3.14-12.35-8.4-16.06l-3.45-2.43 3.55-3.03c.3-.35.48-.78.24-1.54l-.07-.26c-.07-.33-.38-.53-.82-.53h-13.54c-.49 0-.89.29-1.07.77-.17.46-.03.99.21 1.25Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m18.205 33.585-1.16-4.36h-1.65c-.58 0-1.07-.48-1.07-1.07v-.39c0-.58.48-1.07 1.07-1.07h.97l-.68-2.32c-.1-.39-.19-.87-.19-1.16 0-.97.58-1.45 1.65-1.45.87 0 1.35.48 1.55 1.45l1.65 7.65h.1l1.94-7.65c.19-.97.77-1.35 1.65-1.35.88 0 1.36.48 1.64 1.35l1.94 7.74h.1l1.65-7.65c.19-.97.68-1.45 1.55-1.45 1.07 0 1.65.58 1.65 1.45 0 .29-.1.77-.19 1.16l-.68 2.32h.97c.58 0 1.07.48 1.07 1.07v.39c0 .58-.48 1.07-1.07 1.07h-1.64l-1.16 4.36c-.29 1.16-.87 1.74-1.94 1.74-1.07 0-1.65-.48-2.03-1.74l-1.84-6.68h-.1l-1.84 6.68c-.29 1.16-.87 1.74-1.94 1.74-.97-.1-1.55-.68-1.94-1.84l-.03.01Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMoneybagLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
