import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={props.size} height={props.size} fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style} className={props.className} ref={ref} {...props}><path d="M2.855 16.13c0 .23.09.46.26.64a.9.9 0 0 0 1.27 0l7.663-7.662L19.7 16.77a.9.9 0 0 0 1.27 0 .9.9 0 0 0 0-1.27l-8.293-8.293a.9.9 0 0 0-1.27 0L3.115 15.5c-.18.18-.26.41-.26.64v-.01Z" fill={props.fill} /></svg>;

const ForwardRef = forwardRef(SvgArrowUp);
const Memo = memo(ForwardRef);
export default Memo;