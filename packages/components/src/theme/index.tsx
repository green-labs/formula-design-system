import { brand, getThemeClass, themeName } from "./shared"

export * from "./index.css"

type ThemeProps = {
  brand?: brand
  themeName?: themeName
}

type ThemeProviderProps = ThemeProps &
  React.PropsWithChildren<{
    props?: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
    render?(props: ThemeProps & { className: string }): JSX.Element
  }>

/**
 * You can use either `<ThemeScope />` or `getThemeClass` API to create a css variable scope
 */
export const ThemeScope = ({
  brand,
  themeName,
  children,
  render,
  props,
}: ThemeProviderProps) => {
  if (render) {
    return render({
      brand,
      themeName,
      className: getThemeClass(brand, themeName),
    })
  }
  if (children) {
    return <div className={getThemeClass(brand, themeName)} {...props} />
  }
  return null
}

export { getThemeClass }
