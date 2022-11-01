//01. Set is a collection of data
//02. Set almost like array
//03. But it does not contain any duplicates value.

var mySet = new Set()

mySet.add('Kamruzzaman')  
mySet.add('Kamruzzaman')   //duplicate not count in set method
mySet.add('Rahim')
mySet.add('Laki')

// console.log(mySet);

//Clear method-----for set collection all clear
    // mySet.clear()
    // console.log(mySet);

//Delete method ---for specific value delete
    // mySet.delete('Laki')
    // console.log(mySet);


//has method -------to check contain value?
    // console.log(mySet.has('Laki'));   //true

//all values access or show-----using values() method
    // console.log(mySet.values());

//Set size method---------------
    // console.log(mySet.size);


//iterate using for of loop------
for(let dataItem of mySet){
    console.log(dataItem);
}




//basic and not use---------
// var mySet1 = new Set(['kamrul','lopa'])  //array rakha jay
// console.log(mySet1);