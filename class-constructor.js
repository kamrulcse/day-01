//1. constructor হচ্ছে ক্লাসের নিজস্ব মেথড/ফাংশন।
//2. ক্লাস অবজেক্ট তৈরি হলেই, Constructor অটো কল হয়।
//3. অন্য ফাংশনের মতোই Constructor কাজ করে।

//* কিন্তু Constructor রিটার্ন করতে পারে না।
//4. একটি ক্লাসের মধ্যে একটি Constructor থাকে। একাধিক তৈরি করা যায় না।

//basic----------------
class myClass{

    constructor(){
        console.log('Hello i am constructor');
    }
}
new myClass()               //class object created and auto call constructor


//parameter pass and use them in class---------------------
class mySum{
    constructor(a,b){
        console.log(a+b);
    }
    add(n1,n2){
        console.log(n1+n2);
    }
}
let obj = new mySum(20,40)    //constructor e parameter pass
obj.add(5,10)   //add function e parameter pass



//------parameter pass to (class variable) class variable is (this.number1) using this keyword 
// class variable class er moddhe jekono jaygay use kora jay----
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
let obj2 = new mySum2(200,40)    //constructor e parameter pass   
//add() method reusability korte parc 
//mane akti class er method add() ischa moto use korte parc
// bar bar 1ti func bar bar nite hosse na
let obj3 = new mySum2(360,40)    //constructor e parameter pass
let obj4 = new mySum2(101,40)    //constructor e parameter pass
obj2.add()
obj3.add()
obj4.add()              
//more info => https://with.zonayed.me/post/js-function-constructor-and-new-keyword
