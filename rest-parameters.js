//using rest paramets-------rest paramets k iterate korte hobey for value
function summation(n1, n2,...number){
    let number1 = n1
    let number2=n2
    let numberX = number
    let sum = number1+number2
    for(let x of numberX){
        sum+=x
    }
    return sum
}
let result = summation(10,20,1,2,3,4,5)
console.log(result);