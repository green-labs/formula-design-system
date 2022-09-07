type props = {"size": Divider.size}

let default = CSF.make(~title="divider", ~component=Divider.make)

let dividerStory = Divider.make->CSF.toTemplate

let thin = dividerStory->CSF.toStoryArgs
thin->CSF.setArgs({"size": Divider.Small})

let thick = dividerStory->CSF.toStoryArgs
thick->CSF.setArgs({"size": Divider.Large})
