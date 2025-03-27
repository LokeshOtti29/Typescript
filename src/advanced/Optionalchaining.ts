//Optional chaining (?.) is a feature in TypeScript that prevents errors when accessing properties of null or undefined.
let users: any = null;
console.log(users?.names); // ✅ No error! Prints: undefined
