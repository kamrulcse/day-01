//1. static keyword sara (property r sathey class-object er somporko) 
//1. static keyword (property r sathey direct class er somporko) 

//--------Without static keyword----------------------------------
class mySum2{
    constructor(a,b){
        this.number1=a    //this keyword is a class variable.
        this.number2=b
    }
    add(){
        let result = this.number1+this.number2
        console.log(result);
    }
}
let obj2 = new mySum2(200,40)
obj2.add()   //object er sathey property k dakte hoy


//--------Using static keyword----------------------------------
class mySum3{
    static add(number1,number2){
        let result = number1+number2
        console.log(result);
    }
}
mySum3.add(30,20)   //direct class er sathey property k dakte hoy