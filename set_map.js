
// Set :- Collection of unique Elements, It wont be allowed duplicates

// let sdata = new Set([1,5,4,1,8,5])
// console.log(sdata);


//map:- Map is similar to object but little bit advance from the object 
        // -Map key can be only data typeof(obj can have string only)


let mdata = new Map ([
    ['name' , 'elon'],
    [10 , 'this is a number key'],
    [true , 'this is bool key']
])
console.log(mdata.get('name'));
mdata.set('city' , 'Delhi')
console.log(mdata.get('city'));
console.log(mdata.get(10));
