module Theme = {
  /**
    `Formula.colors`

    key of color css vars
    - output: `"--fmc-color-white"`
  */
  @module("@greenlabs/formula-components")
  external colors: Formula__ColorMap.obj = "colors"

  /**
    `Formula.themeColor`

    Formula color css vars wrapped with `var()`
    - output: `"var(--fmc-color-white)"`
  */
  @module("@greenlabs/formula-components")
  @scope("theme")
  external themeColors: Formula__ColorMap.obj = "colors"
}
