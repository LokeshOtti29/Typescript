let weights: number&string
//using intersection we can define a object can have  both numer and string at same time
//Intersection types in TypeScript combine two or more types into one.

//👉 When you use an intersection (&), the final type must have all properties from the combined types.
type Draggable ={
    drag:()=> void
}
type Resizable ={
    resize:()=>void
}
type uiwidget = Draggable & Resizable
let textBox: uiwidget ={
    drag: ()=>{},
    resize:()=>{}
}