
    @react.component
    let make = (~size=XL, ~style=ReactDOMStyle.make(), ~className="", ~fill="#1F2024") =>
  (<svg width={toString(size)} height={toString(size)} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M16.185 21.178c.23 0 .46-.09.64-.26a.9.9 0 0 0 0-1.27l-7.662-7.663 7.662-7.652a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-8.292 8.292a.9.9 0 0 0 0 1.27l8.292 8.293c.18.18.41.26.64.26h-.01Z" fill={fill} /></svg>);