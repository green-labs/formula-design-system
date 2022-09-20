type iconSize = PC | XL | LG | SM | XS

%%private(
  let toString = size => {
    switch size {
    | PC => "36"
    | XL => "24"
    | LG => "20"
    | SM => "16"
    | XS => "12"
    }
  }
)
