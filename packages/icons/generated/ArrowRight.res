
  @react.component
  let make = (~size, ~style, ~className, ~fill) =>
(<svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M8.902 21.178c-.23 0-.46-.09-.64-.26a.9.9 0 0 1 0-1.27l7.663-7.663-7.663-7.652a.9.9 0 0 1 0-1.27.9.9 0 0 1 1.27 0l8.293 8.292a.9.9 0 0 1 0 1.27l-8.292 8.293c-.18.18-.41.26-.64.26h.01Z" fill={fill} /></svg>);