module Button = {
  @react.component
  let make = (~size,~label) => {
    <button> {label->React.string} </button>
  }
}
