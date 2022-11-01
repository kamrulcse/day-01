//1. A function without a name
//2. It can be declared dynamically at runtime
//3. An anonymous function can be assigned within a variable.

//declared in variable-----------
var myFunc = function(){
    return 'Hello World'
}

//Reassign the anonymous function----as a result the above func not working 
var myFunc = function(){
    return 'Hello World Again'
}
console.log(myFunc());