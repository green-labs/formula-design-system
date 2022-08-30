type csfComponent<'argument> = 'argument => React.element

type csfStory = unit => React.element

type csfMeta<'argument> = {
  title: string,
  component: csfComponent<'argument>,
  excludeStories: Js.Re.t,
}

@set
external story: (csfComponent<'argument>, csfMeta<'argument>) => unit = "story"

let make: (~title: string, ~component: csfComponent<'argument>) => csfMeta<'argument> = (
  ~title,
  ~component,
) => {
  title,
  component,
  excludeStories: Js.Re.fromString("\$\$[dD]efault|default|Default|.*Story"),
}

type template<'argument> = csfComponent<'argument>
type templateStory<'argument> = {"args": 'argument}
@set external setArgs: (templateStory<'argument>, 'argument) => unit = "args"

external toTemplate: csfComponent<'argument> => template<'argument> = "%identity"

external toStoryArgs: template<'argument> => templateStory<'argument> = "%identity"


