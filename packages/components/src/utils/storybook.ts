export const createDisabledArgs = (argName: string[] = []) =>
  argName.reduce((a: Record<string, any>, b) => {
    a[b] = {
      table: {
        disable: true,
      },
    }
    return a
  }, {})
