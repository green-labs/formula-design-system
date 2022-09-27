import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSettingLineRegular = (
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
      d="M20.3 44.37c-.58 0-1.13-.2-1.58-.58-.42-.35-.72-.85-.85-1.4 0-.04-.01-.07-.02-.11l-.6-4.28c-.78-.31-1.48-.73-2.11-1.2l-3.95 1.63c-.58.22-1.2.22-1.75 0-.55-.2-1-.58-1.29-1.09l-3.81-6.61c-.29-.48-.4-1.08-.3-1.67.1-.58.41-1.1.86-1.48l3.45-2.71c-.06-.37-.08-.79-.08-1.2 0-.41.02-.82.06-1.23L4.94 19.8c-.49-.43-.78-.93-.88-1.48-.11-.58 0-1.18.31-1.69l3.82-6.61c.32-.53.79-.91 1.33-1.09.49-.18 1.06-.18 1.61 0l4.11 1.65c.64-.48 1.35-.89 2.08-1.24l.55-4.22c.1-.61.39-1.12.83-1.5.4-.37.96-.59 1.54-.62h7.72c.58 0 1.13.2 1.58.58.42.34.72.85.84 1.4 0 .04.01.07.02.11l.6 4.28c.77.31 1.46.71 2.1 1.18l3.97-1.62c.58-.22 1.2-.22 1.75 0 .56.2 1.01.59 1.29 1.1l3.81 6.6c.29.48.4 1.08.3 1.67-.1.57-.4 1.1-.85 1.47l-3.46 2.72c.06.37.08.78.08 1.2 0 .06 0 .12-.01.18 0 .33-.02.67-.05 1l3.39 2.66c.49.41.79.93.89 1.5.1.59 0 1.19-.31 1.69l-3.82 6.61c-.32.53-.79.91-1.34 1.09-.49.18-1.06.18-1.61 0l-4.1-1.65c-.65.49-1.37.91-2.08 1.24l-.56 4.24c-.1.61-.39 1.12-.83 1.5-.42.37-.97.59-1.56.61h-7.72l.02.01Zm.46-3h6.74l.53-3.82c.06-.47.25-.93.54-1.33.27-.39.67-.72 1.13-.93.54-.25 1.11-.58 1.67-.97.4-.28.84-.45 1.33-.51.49-.06 1 0 1.45.19l3.56 1.43 3.37-5.83-3.67-2.88c-.42-.33-.64-.87-.56-1.4.08-.56.12-1.11.12-1.64v-.16c0-.28-.02-.55-.04-.83-.04-.47.04-.95.22-1.4.18-.45.49-.85.89-1.16l3.04-2.39-3.37-5.83-3.56 1.44c-.45.18-.95.25-1.45.19-.49-.06-.97-.25-1.39-.55-.48-.36-1-.66-1.61-.94-.47-.21-.88-.54-1.17-.95-.28-.38-.47-.85-.53-1.32l-.53-3.77h-6.75l-.53 3.82c-.06.46-.25.92-.54 1.32-.32.41-.69.71-1.09.91-.59.28-1.17.62-1.73 1-.39.27-.84.44-1.33.5-.49.06-.99 0-1.45-.19l-3.56-1.43-3.37 5.83 3.03 2.38c.4.32.71.72.89 1.17.18.42.26.9.22 1.38-.03.33-.05.66-.05.99 0 .33.02.67.05 1 .04.47-.04.95-.22 1.39-.23.5-.52.88-.89 1.17l-3.04 2.39 3.37 5.83 3.56-1.44c.45-.18.95-.25 1.45-.19.48.06.96.25 1.38.55.49.37 1 .67 1.61.95.48.22.88.55 1.17.95.28.37.47.84.53 1.32l.53 3.78.05-.02Zm-10.01-5.53v.02-.02Zm-3.83-6.63v.02-.02Zm34.41 0v.01-.01Zm-3.82-17.72v.02-.02ZM24.12 30.9c-.41 0-.83-.04-1.24-.11A7.147 7.147 0 0 1 19 28.78a7.216 7.216 0 0 1-1.41-8.21 7.212 7.212 0 0 1 2.98-3.2 7.103 7.103 0 0 1 4.08-.92h.18c1.66.16 3.23.9 4.41 2.08a7.293 7.293 0 0 1 2.08 4.4 7.21 7.21 0 0 1-.91 4.27 7.31 7.31 0 0 1-3.2 2.98c-.97.46-2.02.7-3.09.7v.02Zm0-11.46c-.72 0-1.43.19-2.06.55-.77.43-1.37 1.08-1.75 1.88-.38.79-.5 1.66-.35 2.53.15.85.56 1.65 1.17 2.26.62.62 1.4 1.02 2.26 1.17.87.15 1.74.03 2.53-.35.79-.38 1.44-.98 1.89-1.75.42-.75.61-1.62.53-2.5a4.25 4.25 0 0 0-1.22-2.57 4.29 4.29 0 0 0-2.43-1.2h-.14c-.14-.01-.29-.02-.43-.02Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSettingLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
