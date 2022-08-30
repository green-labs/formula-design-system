type props = {"size": [#small | #medium | #large], "label": string}

let default: CSF.csfMeta<props> = CSF.make(~title="button", ~component=Button.make)

let buttonStory: CSF.template<props> = Button.make->CSF.toTemplate

let large: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
large->CSF.setArgs({"size": #large, "label": "Large"})

let medium: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
medium->CSF.setArgs({"size": #medium, "label": "Medium"})

let small: CSF.templateStory<props> = buttonStory->CSF.toStoryArgs
small->CSF.setArgs({"size": #small, "label": "Small"})