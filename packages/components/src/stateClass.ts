import { Namespace } from "./constants"

type stateMap = {
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  variantLine?: boolean
}

// stateClass({ disabled: true })
// stateClass({ disabled: false, readOnly: true })
export const createStateClass = (componentName: string) => {
  const componentBaseClass = `${Namespace}-${componentName}`
  return [
    (stateMap: stateMap) => {
      let ret = []
      for (const stateName in stateMap) {
        if (stateMap[stateName as keyof stateMap])
          ret.push(`${componentBaseClass} ${componentBaseClass}--${stateName}`)
      }
      return ret.join(" ")
    },
    componentBaseClass,
  ] as const
}
