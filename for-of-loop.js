//for of loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// let address=['Sakhipur', '017396', 'age','24']
// for(let myAddress of address){
//     console.log(myAddress);
// }


// for in loop => used for object, array
let obj ={
    name: 'kamruzzaman',
    age: 25,
    mobile: '01739729546',
    gender: 'male'
}
// console.log(obj.name);
for (const address in obj) {
    console.log(obj[address]);  //value 
    // console.log(address);       //properties or keys
}
