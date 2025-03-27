let employee:{
    readonly id:number,
    name:string,
    retire :(date:Date)=>void
} = {id:1,name:'lokesh',retire:(date:Date)=>{
    console.log(date)
}}
employee.name = 'vishav'
//readonly prevents accidently modifying the property