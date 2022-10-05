@deriving(jsConverter)
type size = [#PC | #XL | #LG | #SM | #XS]

type iconComponent = (
  ~style: ReactDOMStyle.t=?,
  ~classname: string=?,
  ~size: size=?,
  ~sizePx: int=?,
  ~fill: string=?,
  ~ref: ReactDOM.Ref.t=?,
) => React.element

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowLeftLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowLeftLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowLeftLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowRightLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowRightLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowRightLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleDownFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleUpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowTriangleUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ArrowUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "BookMarkFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "BookMarkLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "BookMarkLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "BookMarkLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CalendarFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CalendarLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CalendarLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CalendarLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CameraFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CameraLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CameraLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CameraLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CartFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CartLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CartLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CartLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CertificationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CertificationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CertificationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CertificationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChatFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChatLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChatLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChatLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CheckLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronLeftLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronLeftLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronLeftLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronRightLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronRightLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronRightLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ChevronUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ClockFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ClockLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ClockLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ClockLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CloseLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CloseLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CloseLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CommentFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CommentLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CommentLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CommentLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CompassFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CompassLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CompassLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CompassLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CopyContentsFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CopyContentsLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CopyContentsLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "CopyContentsLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DeleteFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DeleteLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DeleteLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DeleteLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DownloadFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DownloadLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DownloadLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "DownloadLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditCutFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditCutLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditCutLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditCutLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EditLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "EyeSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "FarmFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "FarmLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "FarmLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "FarmLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HeartFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HeartLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HeartLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HeartLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HelpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HelpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HelpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HelpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HomeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HomeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HomeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "HomeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ImageFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ImageLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ImageLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ImageLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "InfoFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "InfoLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "InfoLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "InfoLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkClipLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkClipLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkClipLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkCopyLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkCopyLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LinkCopyLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationFill1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationFill1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineBold1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineBold1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineRegular1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineRegular1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineThin1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "LocationLineThin1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MenuFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MenuLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MenuLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MenuLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MicSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MinusLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MinusLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MinusLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MoneyBagFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MoneyBagLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MoneyBagLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "MoneyBagLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NoticeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NoticeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NoticeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NoticeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "NotificationSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PersonLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PhoneFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PhoneLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PhoneLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PhoneLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PinFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PinLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PinLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PinLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlayFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlayLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlayLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlayLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PlusLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PostSquareFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PostSquareLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PostSquareLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "PostSquareLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "RefreshLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "RefreshLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "RefreshLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SearchFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SearchLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SearchLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SearchLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SeeMoreFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SeeMoreLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SeeMoreLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SeeMoreLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SendPlaneFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SendPlaneLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SendPlaneLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SendPlaneLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SettingFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SettingLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SettingLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "SettingLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareAndroidFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareAndroidLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareAndroidLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareAndroidLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareArrowFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareArrowLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareArrowLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareArrowLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareIosFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareIosLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareIosLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ShareIosLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ThumbUpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ThumbUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ThumbUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "ThumbUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TouchFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TouchLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TouchLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TouchLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TrashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TrashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TrashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "TrashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "VideoFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "VideoLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "VideoLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "VideoLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "WebBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "WebFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "WebRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [Hex color code] A 6-symbol code made of up to three 2-symbol elements. Default color is #1F2024 (gray-90).
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: iconComponent = "WebThin"
}
