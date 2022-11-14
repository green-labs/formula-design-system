export default tokens

declare type DesignToken<T> = {
  value: T
}

declare const tokens: {
  ref: {
    color: {
      white: DesignToken<string>
      black: DesignToken<string>
      gray: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      green: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      teal: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      lightblue: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      blue: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      indigo: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      purple: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      pink: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      red: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      orange: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
      yellow: {
        "5": DesignToken<string>
        "10": DesignToken<string>
        "20": DesignToken<string>
        "30": DesignToken<string>
        "40": DesignToken<string>
        "50": DesignToken<string>
        "60": DesignToken<string>
        "70": DesignToken<string>
        "80": DesignToken<string>
        "90": DesignToken<string>
        "95": DesignToken<string>
        "100": DesignToken<string>
        "10A": DesignToken<string>
      }
    }
    shadow: {
      "1": DesignToken<string>
      "2": DesignToken<string>
    }
    opacity: {
      "0": DesignToken<number>
      "1": DesignToken<number>
      "2": DesignToken<number>
      "3": DesignToken<number>
      "4": DesignToken<number>
      "5": DesignToken<number>
      "6": DesignToken<number>
      "7": DesignToken<number>
    }
    radius: {
      none: DesignToken<string>
      xsmall: DesignToken<string>
      small: DesignToken<string>
      medium: DesignToken<string>
      large: DesignToken<string>
      xlarge: DesignToken<string>
      xxlarge: DesignToken<string>
      full: DesignToken<string>
    }
    spacing: {
      "0": DesignToken<string>
      "50": DesignToken<string>
      "75": DesignToken<string>
      "100": DesignToken<string>
      "200": DesignToken<string>
      "300": DesignToken<string>
      "400": DesignToken<string>
      "500": DesignToken<string>
      "600": DesignToken<string>
      "700": DesignToken<string>
      "800": DesignToken<string>
      "900": DesignToken<string>
      "1000": DesignToken<string>
      "1100": DesignToken<string>
    }
    typeface: {
      plain: DesignToken<string>
    }
    leading: {
      normal: DesignToken<string>
      tight: DesignToken<string>
      tighter: DesignToken<string>
    }
    weight: {
      regular: DesignToken<string>
      medium: DesignToken<string>
      bold: DesignToken<string>
    }
    tracking: {
      none: DesignToken<string>
      tight: DesignToken<string>
      tighter: DesignToken<string>
    }
    "font-size": {
      "50": DesignToken<string>
      "75": DesignToken<string>
      "100": DesignToken<string>
      "200": DesignToken<string>
      "300": DesignToken<string>
      "400": DesignToken<string>
      base: DesignToken<string>
      "headline-75": DesignToken<string>
      "headline-100": DesignToken<string>
      "headline-200": DesignToken<string>
      "headline-300": DesignToken<string>
    }
    viewport: {
      sm: DesignToken<string>
      md: DesignToken<string>
      lg: DesignToken<string>
      xl: DesignToken<string>
    }
  }
  sys: {
    state: {
      opacity: {
        "hover-white": DesignToken<number>
        hover: DesignToken<number>
        "pressed-white": DesignToken<number>
        pressed: DesignToken<number>
        "disabled-container": DesignToken<number>
        "disabled-contents": DesignToken<number>
        "readonly-container": DesignToken<number>
        "readonly-contents": DesignToken<number>
      }
      color: {
        "container-contents-white": DesignToken<string>
      }
    }
    color: {
      primary: {
        contents: DesignToken<string>
        container: DesignToken<string>
        "container-contents": DesignToken<string>
      }
      secondary: {
        container: DesignToken<string>
        "container-contents": DesignToken<string>
      }
      "neutral-primary": {
        contents: DesignToken<string>
        container: DesignToken<string>
      }
      "neutral-secondary": {
        contents: DesignToken<string>
        container: DesignToken<string>
      }
      "neutral-tertiary": {
        contents: DesignToken<string>
        container: DesignToken<string>
      }
      inverse: {
        container: DesignToken<string>
        "container-contents": DesignToken<string>
      }
      error: {
        contents: DesignToken<string>
        container: DesignToken<string>
      }
      divider: DesignToken<string>
      outline: DesignToken<string>
      background: DesignToken<string>
    }
    layout: {
      default: {
        sm: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        md: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        lg: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        xl: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
          width: DesignToken<string>
        }
      }
      tighter: {
        sm: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        md: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        lg: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
        }
        xl: {
          breakpoint: DesignToken<string>
          columns: DesignToken<string>
          gutter: DesignToken<string>
          margin: DesignToken<string>
          width: DesignToken<string>
        }
      }
    }
    font: {
      headline: {
        sm: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        md: {
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        lg: {
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        xl: {
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
      }
      body: {
        sm: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          medium: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        md: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          medium: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        lg: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          medium: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
        xl: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
      }
      caption: {
        xs: {
          regular: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          medium: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
          bold: {
            typeface: DesignToken<string>
            "font-size": DesignToken<string>
            leading: DesignToken<string>
            tracking: DesignToken<string>
            weight: DesignToken<string>
          }
        }
      }
    }
  }
}
