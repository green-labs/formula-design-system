@deriving(jsConverter)
type size = [#PC | #XL | #LG | #SM | #XS]
/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowLeftLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowRightLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowTriangleUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowTriangleUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ArrowUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ArrowUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module BookMarkLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "BookMarkLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CalendarLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CalendarLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CameraLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CameraLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CartLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CertificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CertificationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChatLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChatLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CheckLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CheckLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronDownLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronDownLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronLeftLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronLeftLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronRightLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronRightLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ChevronUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ChevronUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ClockLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ClockLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CloseLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CloseLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CommentLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CommentLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CompassLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CompassLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module CopyContentsLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "CopyContentsLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DeleteLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DeleteLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module DownloadLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "DownloadLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditCutLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditCutLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EditLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EditLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module EyeSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "EyeSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module FarmLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "FarmLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HeartLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HeartLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HelpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HelpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module HomeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "HomeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ImageLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ImageLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module InfoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "InfoLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkClipLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkClipLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LinkCopyLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LinkCopyLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationFill1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationFill1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineBold1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineBold1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineRegular1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineRegular1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module LocationLineThin1 = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "LocationLineThin1"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MenuLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MenuLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MicSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MicSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MinusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MinusLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module MoneyBagLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "MoneyBagLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NoticeLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NoticeLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module NotificationSlashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "NotificationSlashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PersonLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PersonLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PhoneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PhoneLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PinLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PinLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlayLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlayLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusCircleLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusCircleLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PlusLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PlusLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module PostSquareLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "PostSquareLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module RefreshLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RefreshLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SearchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SearchLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SeeMoreLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SeeMoreLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SendPlaneLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SendPlaneLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module SettingLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "SettingLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareAndroidLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareAndroidLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareArrowLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareArrowLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShareIosLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShareIosLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ShoppingBasketLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ShoppingBasketLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module ThumbUpLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "ThumbUpLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TouchLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TouchLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module TrashLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TrashLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module VideoLineThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "VideoLineThin"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebBold = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebBold"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebFill = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebFill"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebRegular = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebRegular"
}

/**
    @props classname - [string] Class content attribute.
    @props fill - [key of ColorMap] "@greenlabs/formula-design-token"에서 제공하는 컬러맵의 키입니다. 기본 색상은 "gray-90(#1F2024)"입니다.
    @props size - [#PC - (36px) | #XL - (24px) | #LG - (20px) | #SM - (16px) | #XS - (12px)] 기본 사이즈는 XL입니다.
    @props sizePx - [int] size보다 우선적으로 적용됩니다. 엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.
    @props style - [ReactDOMStyle.t] 
*/
module WebThin = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~classname: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "WebThin"
}
