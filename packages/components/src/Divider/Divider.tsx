import { variants } from './style.css';

export interface DividerProps {
  props:{}
  className:string
  variantKey?: keyof typeof variants
  direction: "horizontal"| "vertical",
  size: "small"|"large",
}

export const Divider = ({props, size, direction, variantKey, className}:DividerProps)=>{
  const _variantKey = variantKey??(`${direction}-${size}` as keyof typeof variants) 
  const variantClass= variants[_variantKey]

  if (process.env.NODE_ENV !== "production" && !(_variantKey in variants)) {
    console.error(`You have used non-exist variant key ${_variantKey}.`)
  }

  return (
    <div className={`${variantClass} ${className}`} {...props}/>
  )
}
Divider.displayName = "Divider"

export const DividerHorizontalSmall = (args:DividerProps)=><Divider {...args} direction="horizontal" size="small"/>

export const DividerHorizontalLarge = (args:DividerProps)=><Divider {...args} direction="horizontal" size="large"/>

export const DividerVerticalSmall = (args:DividerProps)=><Divider {...args} direction="vertical" size="small"/>