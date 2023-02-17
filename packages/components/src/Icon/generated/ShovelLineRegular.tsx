import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShovelLineRegular = (
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
        d="M24.701 19.254h1.5a1.5 1.5 0 0 0-1.765-1.476l.265 1.476Zm-1.03.54 1.052 1.07.009-.01-1.06-1.06Zm-2.95 4.31-1.052-1.069-.004.004 1.056 1.065Zm-13.92 12.63.946 1.164.02-.016-.966-1.148Zm-.43 1.7 1.408-.518a1.564 1.564 0 0 0-.015-.039l-1.393.557Zm.33.52-1.096 1.024.026.027 1.07-1.05Zm2.24 2.28-1.07 1.051.01.01 1.06-1.06Zm.52.34.582-1.382a1.09 1.09 0 0 0-.025-.01l-.557 1.392Zm1.7-.43 1.13.988.013-.016-1.143-.972Zm12.75-13.9-1.052-1.069-.003.003 1.055 1.066Zm4.3-2.85 1.052 1.07.026-.027-1.078-1.043Zm.56-1.12 1.485.212a1.5 1.5 0 0 0-.432-1.28l-1.053 1.068Zm-4.07-4.01h-1.5c0 .402.161.787.447 1.069l1.053-1.069Zm-5.28-2.53 1.058-1.063-.005-.006-.006-.005-1.047 1.074Zm14.63-10.41.008-1.5h-.008v1.5Zm5.38.91-.484 1.42.014.004.013.005.457-1.429Zm.7.36-.909 1.193.01.007.9-1.2Zm.34.32 1.178-.93-.013-.015-.012-.015-1.153.96Zm.34.65-1.435.437.006.02.007.018 1.422-.475Zm-6.46 20.03-1.06-1.06-.007.006 1.067 1.054Zm-2.99.03-1.06 1.06.006.007.006.007 1.048-1.074Zm-.03-.03 1.06-1.06-.002-.003-1.058 1.063Zm-6.895-10.816a3.446 3.446 0 0 0-1.825.955l2.12 2.122a.446.446 0 0 1 .235-.125l-.53-2.952Zm-1.817.947c-.328.322-.555.728-.706 1.008-.083.155-.17.326-.253.485-.085.165-.171.332-.266.505a9.547 9.547 0 0 1-1.725 2.312l2.105 2.138a12.542 12.542 0 0 0 2.252-3.01c.113-.208.214-.4.3-.57.091-.175.162-.314.23-.439.15-.28.195-.318.167-.29l-2.104-2.14Zm-2.954 4.314c-3.722 3.693-10.69 9.905-13.83 12.547l1.932 2.296c3.18-2.677 10.213-8.946 14.01-12.713l-2.112-2.13ZM5.855 35.57a2.91 2.91 0 0 0-.79 1.013l2.712 1.284-.005.008a.157.157 0 0 1-.025.024L5.855 35.57Zm-.79 1.013c-.15.32-.294.743-.294 1.242h3c0 .04-.005.065-.008.073-.001.007 0-.002.014-.03l-2.711-1.285Zm-.294 1.242c0 .303.028.718.208 1.167l2.785-1.114.009.027.002.009a.675.675 0 0 1-.004-.089h-3Zm.193 1.129c.152.412.393.759.64 1.025l2.194-2.047a.262.262 0 0 1-.026-.033l-.001-.002a.197.197 0 0 1 .008.02l-2.815 1.037Zm.667 1.052 2.24 2.28 2.14-2.102-2.24-2.28-2.14 2.102Zm2.25 2.29c.3.3.644.52 1.023.672l1.114-2.786a.206.206 0 0 1-.016-.007l.002.002-.002-.003-2.121 2.122Zm.998.661c.43.181.869.235 1.264.216L10 40.176h-.006a.23.23 0 0 1 .05.016l-1.165 2.764Zm1.264.216c.407-.019.801-.117 1.17-.292l-1.284-2.712a.064.064 0 0 1-.03.008l.144 2.996Zm1.17-.292c.408-.193.727-.463.977-.748l-2.258-1.976c-.016.019-.024.025-.023.024l.006-.004a.13.13 0 0 1 .014-.008l1.284 2.712Zm.99-.764c2.726-3.202 8.985-10.167 12.663-13.805l-2.11-2.133c-3.762 3.721-10.082 10.757-12.837 13.994l2.285 1.944Zm12.66-13.803a9.41 9.41 0 0 1 2.288-1.648c.174-.092.34-.177.507-.26.161-.08.333-.166.49-.249.286-.15.69-.372 1.015-.692l-2.104-2.14c.02-.02-.027.03-.306.176-.125.066-.264.135-.439.223-.169.085-.361.181-.567.29a12.4 12.4 0 0 0-2.988 2.162l2.104 2.138Zm4.326-2.876a3.53 3.53 0 0 0 .967-1.95l-2.97-.425a.533.533 0 0 1-.153.289l2.156 2.086Zm.535-3.231-4.07-4.01-2.106 2.137 4.07 4.01 2.106-2.137Zm-3.623-2.942v-.01h-3v.01h3Zm-1.932.177-3.79-3.77-2.116 2.127 3.79 3.77 2.116-2.127Zm-3.8-3.78a.595.595 0 0 1-.178-.427h-3c0 .974.393 1.902 1.083 2.574l2.094-2.148Zm-.178-.427a.63.63 0 0 1 .19-.44l-2.12-2.12a3.629 3.629 0 0 0-1.07 2.56h3Zm.19-.44c2.444-2.442 7.04-6.97 13.57-6.97v-3c-7.91 0-13.314 5.473-15.69 7.85l2.12 2.12Zm13.562-6.97c1.666.01 3.326.292 4.904.83l.968-2.84a18.472 18.472 0 0 0-5.856-.99l-.016 3Zm4.931.839a.83.83 0 0 1 .248.124l1.818-2.386a3.825 3.825 0 0 0-1.152-.596l-.914 2.858Zm.257.131a.647.647 0 0 1 .088.08l2.305-1.92a3.549 3.549 0 0 0-.593-.56l-1.8 2.4Zm.063.05a.526.526 0 0 1 .082.157l2.87-.874a3.524 3.524 0 0 0-.597-1.142l-2.355 1.859Zm.095.195c3.081 9.228-3.121 15.517-6.098 18.494l2.12 2.122c2.884-2.883 10.541-10.434 6.823-21.566l-2.846.95Zm-6.105 18.5a.616.616 0 0 1-.875.012l-2.096 2.147a3.616 3.616 0 0 0 5.105-.05l-2.134-2.108Zm-.862.024-.015-.015-.015-.015-2.121 2.122.015.015.015.015 2.12-2.122Zm-.033-.032-3.79-3.77-2.116 2.127 3.79 3.77 2.116-2.127Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShovelLineRegular)
const Memo = memo(ForwardRef)
export default Memo
