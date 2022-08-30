@private let default: CSF.csfMeta<Button.props> = CSF.make(~title="button", ~component=Button.make)

let large = CSF.makeStory(~args={"size": #large, "label": "large"}, ~component=Button.make)

let medium = CSF.makeStory(~args={"size": #medium, "label": "medium"}, ~component=Button.make)

let small = CSF.makeStory(~args={"size": #small, "label": "small"}, ~component=Button.make)

