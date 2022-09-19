import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={props.size} height={props.size} fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style} className={props.className} ref={ref} {...props}><path d="M8.902 21.178c-.23 0-.46-.09-.64-.26a.9.9 0 0 1 0-1.27l7.663-7.663-7.663-7.652a.9.9 0 0 1 0-1.27.9.9 0 0 1 1.27 0l8.293 8.292a.9.9 0 0 1 0 1.27l-8.292 8.293c-.18.18-.41.26-.64.26h.01Z" fill={props.fill} /></svg>;

const ForwardRef = forwardRef(SvgArrowRight);
const Memo = memo(ForwardRef);
export default Memo;