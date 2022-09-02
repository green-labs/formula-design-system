
    @react.component
    let make = (~size=XL, ~style=ReactDOMStyle.make(), ~className="", ~fill="#1F2024") =>
  (<svg width={toString(size)} height={toString(size)} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M2.855 7.848c0-.23.09-.46.26-.64a.9.9 0 0 1 1.27 0l7.663 7.663L19.7 7.208a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-8.293 8.293a.9.9 0 0 1-1.27 0L3.115 8.478a.891.891 0 0 1-.26-.64v.01Z" fill={fill} /></svg>);