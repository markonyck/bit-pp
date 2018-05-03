// "use strict";
//task 1 

// var a =(function (array) {

//     var tmp = array[0];
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = tmp;


//     console.log(array);
//     return array;

// })([4, 5, 11, 9]);

// console.log(a);


//task 2

// var surface = (function (a, b){
//     var p = a * b;
//     return p;
// })(4, 5);
// console.log(surface);


//task 3

// var transformLetterToStar = (function (str) {
//     var counter = 0;
//     var newStr = "";
//     for (var i = 0; i < str.length; i++) {
//         if ("m" === str[i] || "M" === str[i]) {
//            newStr += "*";
//             counter++;
//         }
//         else {newStr += str[i];
//         }
//     }

//     return [newStr, counter];
// }("prograMming"));
// console.log(transformLetterToStar);

//task 4

// var mail = (function (name, surname){
//     return name + "." + surname + "@gmail.com";
// })("pera", "peric");
// console.log(mail);

//task 5
