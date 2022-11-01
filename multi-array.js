let dhaka=['Gazipur', 'tangail', 'nayanganj']
let ctg=['feni', 'comilla', 'nuakhali']
let rajshahi=['naogaon', 'natore', 'chapainababganj']

let bangladesh = [dhaka, ctg, rajshahi]   //method 1 multidimensional array
// console.log(bangladesh[0][2])
console.log(bangladesh[0].length)
// console.log(bangladesh.length)


/*
//accessing array using for loop

// This loop is for outer array
for (var i = 0; i < bangladesh.length; i++) {   //bangladesher length = 3 

    // This loop is for inner-arrays
    for (var j = 0; j < bangladesh[i].length; j++) {  //1st e dhakar lenght = 3, 2nd e ctg er = 3, 3rd e rajshahi er length = 3

        // Accessing each elements of inner-array
        console.log(bangladesh[i][j]);     
    }
}
*/



//iterate by forEach------
bangladesh.forEach((value) => {
    value.forEach((dataValue) => {
        console.log(dataValue);
    });
});