type employee ={
    readonly id:number,
    name:string,
    retire :(date:Date)=>void
}
let employ:employee = {id:1,name:'lokesh',retire:(date:Date)=>{
    console.log(date)
}}
employee.name = 'vishav'
//readonly prevents accidently modifying the property
//A Type Alias in TypeScript is just a shortcut for defining complex types. Instead of writing the same structure multiple times, we give it a name and reuse it.