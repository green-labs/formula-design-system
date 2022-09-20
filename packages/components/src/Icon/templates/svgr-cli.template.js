const template = ({ jsx, componentName, exports }, { tpl }) => {
  return tpl`
  import { SVGProps, Ref, forwardRef, memo } from "react";
  import type { IconProps } from '../types';

  const ${componentName} = ({
    size=24, 
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>) => (
    ${jsx}
  )
  
  ${exports}
`;
};

module.exports = template;
