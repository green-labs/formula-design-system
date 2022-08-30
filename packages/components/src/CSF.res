type csfComponent<'parameter> = 'parameter => React.element

type csfStory = unit => React.element

type csfMeta<'parameter> = {
  title: string,
  component: csfComponent<'parameter>,
  // ~excludeStories=Js.Re.fromString("\$\$default|.*Data$"),
  excludeStories: Js.Re.t,
}

type template<'parameter> = csfComponent<'parameter>

@set
external story: (csfComponent<'parameter>, csfMeta<'parameter>) => unit = "story"

let make: (~title: string, ~component: csfComponent<'parameter>) => csfMeta<'parameter> = (
  ~title,
  ~component,
) => {
  title,
  component,
  excludeStories: Js.Re.fromString("\$\$[dD]efault|default|Default"),
}

let bsExports = ["$$default"]

let makeStory: (~args: 'parameter, ~component: csfComponent<'parameter>) => csfStory = (
  ~args,
  ~component,
) => {
  () => component(args)
}
