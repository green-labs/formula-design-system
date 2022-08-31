type props = {"color": string, "thickness": Divider.thickness}

let default = CSF.make(~title="divider", ~component=Divider.make)

let dividerStory = Divider.make->CSF.toTemplate

let thin = dividerStory->CSF.toStoryArgs
thin->CSF.setArgs({"color": "#000", "thickness": Divider.Thin})

let thick = dividerStory->CSF.toStoryArgs
thick->CSF.setArgs({"color": "#000", "thickness": Divider.Thick})
