import { Namespace } from "../constants"

export const COMPONENT_CLASS = `${Namespace}-textfield`

type stateMap = {
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  variantLine?: boolean
}
// stateClass({ disabled: true })
// stateClass({ disabled: false, readOnly: true })
export const stateClass = (stateMap: stateMap) => {
  let ret = []
  for (const stateName in stateMap) {
    if (stateMap[stateName as keyof stateMap])
      ret.push(`${COMPONENT_CLASS}--${stateName}`)
  }
  return ret.join(" ")
}
