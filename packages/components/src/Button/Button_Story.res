type props = {"size": [#small | #medium | #large], "label": string}

let default: CSF.csfMeta<props> = CSF.make(~title="button", ~component=Button.make)

let buttonStory: CSF.template<props> = Button.make->CSF.toTemplate

let large: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
large->CSF.setArgs({"size": #large, "label": "큰"})

let medium: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
medium->CSF.setArgs({"size": #medium, "label": "중간"})

let small: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
small->CSF.setArgs({"size": #small, "label": "중간"})

// let large = buttonStory()

// let large: Js.Nullable.t<props> => React.element = CSF.makeStory(
//   ~storyArgs={"size": #large, "label": "large"},
//   ~component=Button.make,
// )

// let medium: Js.Nullable.t<props> => React.element = CSF.makeStory(
//   ~storyArgs={"size": #medium, "label": "medium"},
//   ~component=Button.make,
// )

// let small: Js.Nullable.t<props> => React.element = CSF.makeStory(
//   ~storyArgs={"size": #small, "label": "small"},
//   ~component=Button.make,
// )
