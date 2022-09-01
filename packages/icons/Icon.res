module ArrowDown = {
  @react.component
  let make = (~size, ~style, ~className, ~fill) =>
(<svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M2.855 7.848c0-.23.09-.46.26-.64a.9.9 0 0 1 1.27 0l7.663 7.663L19.7 7.208a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-8.293 8.293a.9.9 0 0 1-1.27 0L3.115 8.478a.891.891 0 0 1-.26-.64v.01Z" fill={fill} /></svg>);}
  
module ArrowLeft = {
  @react.component
  let make = (~size, ~style, ~className, ~fill) =>
(<svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M16.185 21.178c.23 0 .46-.09.64-.26a.9.9 0 0 0 0-1.27l-7.662-7.663 7.662-7.652a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-8.292 8.292a.9.9 0 0 0 0 1.27l8.292 8.293c.18.18.41.26.64.26h-.01Z" fill={fill} /></svg>);}
  
module ArrowRight = {
  @react.component
  let make = (~size, ~style, ~className, ~fill) =>
(<svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M8.902 21.178c-.23 0-.46-.09-.64-.26a.9.9 0 0 1 0-1.27l7.663-7.663-7.663-7.652a.9.9 0 0 1 0-1.27.9.9 0 0 1 1.27 0l8.293 8.292a.9.9 0 0 1 0 1.27l-8.292 8.293c-.18.18-.41.26-.64.26h.01Z" fill={fill} /></svg>);}
  
module ArrowUp = {
  @react.component
  let make = (~size, ~style, ~className, ~fill) =>
(<svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M2.855 16.13c0 .23.09.46.26.64a.9.9 0 0 0 1.27 0l7.663-7.662L19.7 16.77a.9.9 0 0 0 1.27 0 .9.9 0 0 0 0-1.27l-8.293-8.293a.9.9 0 0 0-1.27 0L3.115 15.5c-.18.18-.26.41-.26.64v-.01Z" fill={fill} /></svg>);}
  