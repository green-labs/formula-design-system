import { SVGProps, Ref, forwardRef, memo } from "react";
import { convertSizeToPx } from "../utils";
import type { IconProps } from "../types";

const SvgMoneybagFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.03 30.275c0-.14-.02-.28-.03-.42-.02-.29-.05-.58-.08-.87l-.06-.48-.12-.8-.09-.49c-.05-.27-.11-.53-.17-.79-.04-.15-.07-.3-.11-.46-.07-.29-.16-.58-.24-.86-.04-.12-.07-.24-.1-.36-.13-.4-.26-.8-.41-1.2-.02-.06-.05-.13-.08-.19-.13-.33-.26-.66-.4-.98-.06-.13-.12-.27-.19-.4l-.36-.75c-.07-.15-.15-.29-.23-.43-.13-.23-.25-.46-.39-.69-.08-.14-.17-.28-.25-.42-.14-.23-.29-.46-.44-.69-.08-.13-.17-.26-.25-.38-.18-.26-.37-.52-.57-.78-.06-.08-.12-.17-.19-.25-.26-.34-.53-.67-.81-.99-.07-.08-.14-.15-.21-.23-.22-.24-.44-.48-.66-.71l-.33-.33-.39-.39c-.07-.06-.14-.12-.2-.18-.15-.14-.31-.28-.46-.41-.11-.09-.21-.19-.32-.29-.01 0-.02-.02-.03-.03-.05-.04-.11-.08-.16-.13-.45-.37-.91-.73-1.39-1.07l.32-.27.18-.15.15-.18c.17-.2.34-.43.49-.69.02-.03.04-.05.05-.08.15-.25.27-.53.38-.83.01-.03.03-.05.04-.09 0-.03.01-.06.02-.09.03-.11.06-.24.09-.36.02-.09.04-.18.06-.28.02-.13.03-.27.04-.41 0-.1.02-.19.02-.29 0-.16-.02-.33-.04-.5 0-.09 0-.17-.02-.26-.04-.26-.1-.54-.19-.82-.05-.23-.12-.45-.21-.66-.03-.07-.07-.14-.11-.21-.06-.13-.12-.27-.2-.39-.05-.08-.12-.16-.18-.23-.07-.1-.14-.2-.23-.29-.07-.07-.15-.13-.22-.2-.09-.08-.17-.17-.27-.25-.08-.06-.17-.11-.26-.17-.1-.07-.2-.14-.31-.2-.09-.05-.19-.08-.28-.12-.11-.05-.22-.11-.34-.15-.1-.03-.21-.05-.31-.08-.12-.03-.24-.07-.37-.09-.11-.02-.22-.02-.33-.03-.13-.01-.25-.03-.38-.03H17.32c-1.87 0-3.49 1.14-4.14 2.92-.08.21-.14.43-.18.66l-.03.22c-.02.15-.04.3-.05.45v.26c0 .14 0 .27.02.41 0 .09.02.18.04.27.02.13.04.26.08.39.01.04.01.09.03.13l.06.18c.02.08.05.15.08.23.04.11.09.22.15.33.03.07.06.14.1.21.06.12.13.23.21.34.04.05.07.11.11.16.12.16.24.31.38.45l.07.07.07.06.7.62c-.43.3-.84.62-1.24.93-.13.1-.26.21-.38.31-.27.22-.54.44-.79.67l-.18.15-.39.36-.34.31c-.23.22-.45.45-.67.67-.07.08-.15.15-.22.23-.29.31-.56.62-.83.93-.06.08-.13.16-.19.23-.2.24-.4.49-.59.74-.09.12-.17.24-.26.36-.16.22-.31.44-.46.66-.09.13-.17.27-.26.4-.14.22-.27.44-.4.67-.08.14-.16.27-.24.41-.13.24-.26.48-.38.73-.06.13-.13.26-.19.39-.15.31-.29.63-.42.95-.03.07-.06.13-.09.2-.16.39-.3.79-.43 1.19-.04.12-.07.24-.11.36-.09.29-.18.58-.26.88-.04.16-.08.31-.11.47-.06.27-.13.54-.18.82l-.09.51c-.05.28-.09.56-.13.85-.02.17-.05.34-.07.51-.03.31-.06.63-.08.94-.01.15-.03.3-.03.45-.03.47-.04.95-.04 1.44 0 6.28 1.12 11.86 9.1 11.99h19.9c3.2-.22 9.1-.81 9.1-11.98 0-.43-.01-.86-.04-1.29v.05Zm-9.35-2.02c0 .58-.48 1.06-1.06 1.06h-1.65l-1.16 4.36c-.29 1.16-.87 1.74-1.94 1.74-1.07 0-1.65-.48-2.03-1.74L24 26.995h-.1l-1.84 6.68c-.29 1.16-.87 1.74-1.94 1.74-.97-.1-1.55-.68-1.94-1.84l-1.16-4.36h-1.65c-.58 0-1.06-.48-1.06-1.06v-.39c0-.58.48-1.06 1.06-1.06h.97l-.68-2.32c-.1-.39-.19-.87-.19-1.16 0-.97.58-1.45 1.65-1.45.87 0 1.36.48 1.55 1.45l1.65 7.65h.1l1.94-7.65c.19-.97.77-1.36 1.65-1.36.88 0 1.36.48 1.65 1.36l1.94 7.74h.1l1.65-7.65c.19-.97.68-1.45 1.55-1.45 1.06 0 1.65.58 1.65 1.45 0 .29-.1.77-.19 1.16l-.68 2.32h.97c.58 0 1.06.48 1.06 1.06v.39l-.03.01Z"
        fill={fill}
      />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMoneybagFill);
const Memo = memo(ForwardRef);
export default Memo;
