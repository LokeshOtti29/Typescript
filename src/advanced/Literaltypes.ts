//Literal types in TypeScript restrict a variable to have only specific values instead of any value of a type like string or number.

//Think of it like this: Instead of allowing all possibilities, you limit it to only a few valid choices.
type Quantity = 50|100;
let quantity:Quantity;
