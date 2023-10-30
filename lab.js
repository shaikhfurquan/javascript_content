
let p = new Promise((resolve ,reject)=> {
    let purchase =false
    if(purchase){
        resolve('Purchase Car')
    }else{
        reject('Purchase Bike')
    }
})

p.then((c_data) =>{
    console.log(c_data);
    console.log('Kia car');
}).then((c_data) =>{
    console.log('Seven Seater');
}).catch((b_data) =>{
    console.log(b_data);
    console.log('Suzuki bike');
}).finally(()=>{
    console.log('Congratulations');
})