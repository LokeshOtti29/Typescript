const func=(document:any)=>{
console.log(document)
}
// any in TypeScript is like turning off TypeScript's strict type checking for a variable. It allows a variable to hold any kind of value—string, number, object, or even a function. But using any removes the benefits of TypeScript’s type safety, making your code more like plain JavaScript. It’s useful when you don’t know the exact type beforehand, but it’s generally better to use unknown or a specific type whenever possible