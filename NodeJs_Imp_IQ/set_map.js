
// Set :- Collection of unique Elements, It wont be allowed duplicates

// let sdata = new Set([1,5,4,1,8,5])
// console.log(sdata);

let data = new Set([10, 20, 30, 40, 10, 50]);
console.log(data);

data.add('raj');
console.log(data);


//map:- Map is similar to object but little bit advance from the object 
// -Map key can be only data typeof(obj can have string only)


let mdata = new Map([
    ['name', 'Elon'],
    [10, 'this is a number key'],
    [true, 'this is bool key']
])
console.log(mdata.get('name'));
mdata.set('city', 'Delhi')
console.log(mdata.get('city'));
console.log(mdata.get(10));



let value = new Map([
    ['101' , 'YMN'],
    ['102' , 'MGM'],
    ['103' , 'Sci'],
])

console.log(value.get('101'));
value.set('104' , 'NSB');
console.log(value.get('104'))