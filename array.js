let number =[1, 2, 3, 4, 5]
console.log(number.length);
console.log(number.indexOf(4));

//using for of loop
let sum = 0
for(let n of number){
    sum+=n
}
console.log(sum);

//using for in loop
let sum1 = 0
for(let n1 in number){
    sum1+=number[n1]
}
console.log(sum1);

//using for loop----
let sum2 = 0
for(let i=0; i < number.length; i++){
    sum2+=number[i]
}
console.log(sum2);

//using for Each loop----
let sum3 = 0
number.forEach((value)=>{
    sum3+=value
})
console.log(sum3);