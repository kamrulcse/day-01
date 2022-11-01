//Arrow function cannot be used as the constructor.  constructor hishebe use kora jay na

let myFunc=(x, y, ...number)=>{
    let sum=0
    sum=x+y
    return 'summation is '+sum+' more numbers ='+number
}
console.log(myFunc(10, 20, 1, 2, 3))