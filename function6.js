// //1 Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// "use strict";
// function countVowels(str) {
//     var string = str.toLowerCase();
//     var counter = 0;
//     for(var i = 0; i < string.length; i++){
//         if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels("Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement."));

// function countWithSwitch(str) {
//     var string = str.toLowerCase();
//     var counter = 0;
//     for (var i = 0; i < string.length; i++) {
//         switch (string[i]) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 counter++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return counter;
// }

// console.log(countWithSwitch("Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement."));

//task 2: 
// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

// function combineArrays (array1, array2) {
//     var outputArray = [];
//     for (var i = 0; i < array1.length; i++) {
//         outputArray[outputArray.length] = array1[i];
//         outputArray[outputArray.length] = array2[i];
//     }
//     return outputArray;
// }
// console.log(combineArrays(["a","b","c"], [1,2,3]));

// task 3 Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateByK(array, k){
    var newArray =[];
    //var i, j = 0
    for (var i = k; i < array.length; i++) {
        newArray[newArray.length] = newArray[i-k]
    }
    return newArray;
}

console.log(rotateByK([1,2,3,4,5,6], 2));

