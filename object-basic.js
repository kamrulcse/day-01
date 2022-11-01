//Nested object------
let teacherObj={
    name: 'Kamruzzaman',
    mobile: '0173542345',
    age: '24',
    address:{
        city: 'Tangail',
        vill: 'Araipara',
        PO:'Kachua'
    }
}
// console.log(teacherObj.name)
// console.log(teacherObj['name'])
// console.log(teacherObj['address']['vill'])  //for nested object


//Set property--------------
teacherObj.Designation='Teacher ICT'
console.log(teacherObj);

//Keys gula chai--------
console.log(Object.keys(teacherObj));   //array akare ouput dey

//value gula chai---------
console.log(Object.values(teacherObj)); 


//iterate using for in loop----------
for(propertyName in teacherObj){
    console.log(propertyName);   //Property Name
    console.log(teacherObj[propertyName]);   //Value
}
