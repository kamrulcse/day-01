//using spread operaotr--------------

// let boysName=['kamrul', 'akash', 'ab.rahim', 'karim']
// let girlsName=[...boysName,'nisa', 'promi', 'fatema']  //boysName in girlsName is added by sprad operator;
//     console.log(girlsName);  




//Without Spread operator--using push method-----but problem is array er vitore array---------

let boysName1=['kamrul', 'akash', 'ab.rahim', 'karim']
let girlsName1=['nisa', 'promi', 'fatema']
let nameLength=girlsName1.push(boysName1)
    console.log(girlsName1);
    console.log(nameLength);