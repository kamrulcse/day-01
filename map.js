//map is a collection of data-----as like  object  {'keys', 'value'} pair

let myMap = new Map()

//value set korlam
myMap.set('key1', 'kamruzzaman')       //map e data thake key value pair 
myMap.set('key2', 'rahim')
myMap.set('key3', 'laki')

//value output but as a object 
console.log(myMap.keys());   //for keys
console.log(myMap.values());  //for values

//iterate using for of loop
for(let myValue of myMap.values()){
    console.log(myValue);
}
//for keys---------
for(let myKeys of myMap.keys()){
    console.log(myKeys);
}



//Delete Method--------delete key-value pair using Delete method
console.log(myMap.delete('key2'));  //Delete rahim
console.log(myMap.values());


//Get specific data using get method()
console.log(myMap.get('key1'));    //kamruzzaman

//has method---for check have data?
console.log(myMap.has('key1'));   //true

//clear method---for all data clear
myMap.clear()
console.log(myMap.values());   //no map collection output