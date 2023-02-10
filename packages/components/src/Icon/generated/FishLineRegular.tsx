import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgFishLineRegular = (
  { size = "xl", sizePx, color, ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  const fill = color && colorMap[color]
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M38.328 24.167a2.376 2.376 0 1 0 0-4.751 2.376 2.376 0 0 0 0 4.751Z"
        fill={fill}
      />
      <path
        d="M35.664 10.256c-.94-.31-1.931-.568-3.005-.744a23.781 23.781 0 0 0-2.2-.258c-1.807-1.384-5.422-3.078-9.181-3.78a1.527 1.527 0 0 0-1.384.454 1.54 1.54 0 0 0-.362 1.415l1.126 4.359c-3.955 1.332-7.25 3.625-9.336 5.329a20.17 20.17 0 0 0-1.343-1.147c-3.707-2.995-8.086-3.387-8.272-3.398a1.479 1.479 0 0 0-1.24.486c-.32.34-.454.816-.382 1.27.042.258.96 5.742 3.409 9.181-2.448 3.43-3.367 8.924-3.409 9.182-.072.465.062.93.382 1.27.32.341.765.517 1.24.486.186-.01 4.565-.413 8.283-3.398.444-.362.888-.744 1.322-1.136 2.096 1.724 5.411 4.027 9.418 5.36l-1.198 5.535a1.525 1.525 0 0 0 .393 1.374c.29.3.681.454 1.084.454.093 0 .186 0 .28-.02 3.83-.713 7.456-3.44 9.17-4.906a21.192 21.192 0 0 0 2.21-.268 19.982 19.982 0 0 0 3.006-.754c8.923-2.902 12.259-10.896 12.259-13.178 0-2.283-3.326-10.287-12.26-13.189l-.01.02Zm-5.887 24.383c-.34.021-.67.155-.929.383-.795.702-3.14 2.674-5.814 3.81l.95-4.368a1.51 1.51 0 0 0-1.095-1.787c-4.813-1.28-8.727-4.327-10.638-6.031a1.51 1.51 0 0 0-1.012-.382c-.392 0-.785.155-1.084.454a22.278 22.278 0 0 1-2.076 1.88c-1.528 1.229-3.233 1.92-4.534 2.303.558-2.128 1.55-4.947 2.975-6.434a1.523 1.523 0 0 0 0-2.097c-1.415-1.477-2.417-4.296-2.975-6.424 1.301.382 3.006 1.074 4.534 2.303a23.934 23.934 0 0 1 2.086 1.89 1.51 1.51 0 0 0 2.086.073c1.911-1.704 5.836-4.74 10.617-6.011a1.508 1.508 0 0 0 1.074-1.849l-.857-3.305c2.706.837 4.927 2.066 5.773 2.81.258.227.589.361.93.382.578.03 1.136.093 1.683.165a33.446 33.446 0 0 0-1.88 11.03c0 3.78.651 7.518 1.88 11.03-.557.072-1.125.144-1.714.165l.02.01Zm4.69-.836a30.556 30.556 0 0 1-1.818-10.37c0-3.562.63-7.084 1.817-10.368 7.488 2.344 10.42 8.871 10.42 10.369 0 1.497-2.932 8.014-10.43 10.369h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgFishLineRegular)
const Memo = memo(ForwardRef)
export default Memo
