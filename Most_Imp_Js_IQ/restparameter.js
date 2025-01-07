let add = (...x) =>{
    let sum = 0
    for(let i=0; i<x.length; i++){
        sum = sum + x[i]
    }
    console.log(sum);
}
add(4,4,6,6)