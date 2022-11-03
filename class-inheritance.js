//inheritance = উত্তরাধিকার
// parents এর সম্পত্তি child ব্যবহার করতে পারে।
//parents এর সম্পত্তি child মডিফাই/বিহেভিয়ার/ পরিবর্তন করতে পারে। (এটাকে বলে- Method overriding)
// কিন্তু parents তার ফাংশন/প্রোপ্রার্টি পরিবর্তন/মডিফাই করতে পারেনা ।


//example : inheritance--------------------------
class parents{    // 
    parentsLaptop(){
        console.log('Hello i am laptop (Parents)');
    }
    parentsMobile(){
        console.log('Hello i am Mobile (Parents)');
    }
}

class child extends parents{       


}

let obj = new child()
obj.parentsLaptop()     //inheritance kore chaild object er dhara parents property access kora
obj.parentsMobile()



//parents এর সম্পত্তি child মডিফাই/বিহেভিয়ার/ পরিবর্তন করতে পারে। (এটাকে বলে- Method overriding)

// Example : Inheritance - Method overriding by child--------------------------
class parents1{    // 
    parentsLaptop1(){
        console.log('Hello i am laptop (Parents)');
    }
    parentsMobile1(){
        console.log('Hello i am Mobile (Parents)');
    }
}

class child1 extends parents1{       
    parentsLaptop1(){
        console.log('Hello i am laptop (but i am used by child)');   // (Modify by child)/Method overriding--------------
    }

}

let obj1 = new child1()
obj1.parentsLaptop1()   //output : Hello i am laptop (but i am used by child)  (Modify by child)
obj1.parentsMobile1()   //output : Hello i am laptop (Parents)