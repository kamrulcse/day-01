// ক্লাস তৈরি করা হয় অনেক গুলো প্রোপ্রার্টি, ফাংশন, অ্যারে, অবজেক্ট ধরে রাখার জন্য
// ক্লাস এর প্রধান উদ্দ্যেশ প্রোপ্রার্টির রিইউজিবিলিটি বাড়ানো-----যে কোন জায়গা থেকে ক্লাস কে কল করে প্রোপাটিং রিইউজ করা যায়।

class myClass{

    myFunc(name){
        console.log(name);
    }
    myFunc1(name){
        console.log(name);
    }
    myFunc2(name){
        console.log(name);
    }
    myFunc3(name){
        console.log(name);
    }

}
let obj = new myClass    //class er akta object create kortei hobey and class name er age new keyword use kortei hobey

obj.myFunc('Kamruzzaman')
obj.myFunc1('Afia')
obj.myFunc2('Jamuna')
obj.myFunc3('Jakir')
