@deriving(jsConverter)
type size = [#pc | #xl | #lg | #sm | #xs]
/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AddressFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AddressFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AddressLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AddressLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AppleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AppleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AppleLine = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AppleLine"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AppleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AppleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AreaScaleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AreaScaleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module AreaScaleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "AreaScaleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftupLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftupLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftupLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftupLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftupLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftupLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ExperienceFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ExperienceFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ExperienceLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ExperienceLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FishFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FishFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FishLine = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FishLine"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FishLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FishLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module GroupFil = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "GroupFil"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module GroupLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "GroupLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationPinFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationPinFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationPinLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationPinLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationPinLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationPinLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationPinLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationPinLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MeatFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MeatFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MeatLine = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MeatLine"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MeatLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MeatLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagFillJp = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagFillJp"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagFillUs = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagFillUs"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineJpBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineJpBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineJpRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineJpRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineJpThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineJpThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineUsBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineUsBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineUsRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineUsRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineUsThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineUsThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NewLine = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NewLine"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NewLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NewLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleAddFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleAddFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleAddLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleAddLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleCheckedFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleCheckedFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleCheckedLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleCheckedLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PeopleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PeopleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostFullFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostFullFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ReUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ReUpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ReUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ReUpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFillGlobal = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFillGlobal"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFillGlobalFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFillGlobalFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFillJp = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFillJp"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFillUs = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFillUs"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineGlobalBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineGlobalBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineGlobalRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineGlobalRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineGlobalThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineGlobalThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineJpBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineJpBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineJpRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineJpRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineJpThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineJpThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineUsBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineUsBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineUsRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineUsRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineUsThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineUsThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShovelFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShovelFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShovelLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShovelLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TracterFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TracterFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TracterLine = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TracterLine"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TracterLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TracterLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineThin"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebFill"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebLineBold"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebLineRegular"
}

/**
    @props className - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#pc - (36px) | #xl - (24px) | #lg - (20px) | #sm - (16px) | #xs - (12px)] 기본 사이즈는 xl입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebLineThin"
}
