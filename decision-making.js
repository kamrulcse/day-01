let teacherObj={
    name: 'Kamrul',
    mobile: '0173542345',
    age: '24',
    address:{
        city: 'Tangail',
        vill: 'Araipara',
        PO:'Kachua'
    }
}

if(teacherObj['name'] == 'Kamruzzaman'){
    console.log('01. Teacher Name is : Kamruzzaman');
}
else if(teacherObj['name'] == 'Kamrul'){
    console.log('02. Teacher Name is : Kamruzzaman');
    
}
else{
    console.log('False information');
}