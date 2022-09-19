const template = (
  { jsx, imports, interfaces, componentName, props, exports },
  { tpl }
) => {
  return tpl`
  ${imports}
  import type { IconComponentProps } from '../types';

  const ${componentName} = ({
    size=24, 
    style,
    className,
    fill,
    ...props
  }: IconComponentProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>) => (
    ${jsx}
  )
  
  ${exports}
`;
};

module.exports = template;
