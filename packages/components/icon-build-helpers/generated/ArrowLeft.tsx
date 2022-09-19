import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconComponentProps } from '../types';

const SvgArrowLeft = ({
  size = 24,
  style,
  className,
  fill,
  ...props
}: IconComponentProps & SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} ref={ref} {...props}><path d="M16.185 21.178c.23 0 .46-.09.64-.26a.9.9 0 0 0 0-1.27l-7.662-7.663 7.662-7.652a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-8.292 8.292a.9.9 0 0 0 0 1.27l8.292 8.293c.18.18.41.26.64.26h-.01Z" fill={fill} /></svg>;

const ForwardRef = forwardRef(SvgArrowLeft);
const Memo = memo(ForwardRef);
export default Memo;