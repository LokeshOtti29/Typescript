//A Union Type allows a variable to have multiple types. It’s defined using the | (pipe) operator.
const weight =(weights:number|string)=>{
    if(typeof weights === 'number')
        return weights*2.2
    else  
        return parseInt(weights)*2.2
}
weight(10)
weight('10kg')