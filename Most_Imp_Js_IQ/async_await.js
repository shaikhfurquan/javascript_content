
async function test(){
    console.log('2: Msg');
    const response = await fetch("./prog_languages.json")
    console.log('3 : Msg');
    const plang = await response.json();
    return plang
}

console.log('1: Msg');
let result = test()
console.log('4: Msg');
console.log(result);



async function test(){
    return (await fetch("prog_lang.json")).json()
}
test().then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})
