/**
 * inspired by https://stackoverflow.com/a/71340077
 * triggerNativeEventFor(inputRef.current, { event: 'input', value: '' });
 * triggerNativeEventFor(checkBoxRef.current, { event: 'input', checked: false });
 */
export function triggerNativeEventFor<T>(
  element: T,
  {
    event,
    ...valueObj
  }: { event: keyof HTMLElementEventMap; [key: string]: string }
) {
  if (!(element instanceof Element)) {
    throw new Error(`Expected an Element but received ${element} instead!`)
  }

  const [prop, value] = Object.entries(valueObj)[0] ?? []
  const prototype = Object.getPrototypeOf(element)
  const desc = Object.getOwnPropertyDescriptor(prototype, prop)

  desc?.set?.call(element, value)
  element.dispatchEvent(new Event(event as string, { bubbles: true }))
}
