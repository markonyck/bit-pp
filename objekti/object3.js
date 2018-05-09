// zadatak 1 Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// function duplicateElement(array) {
//     var outputArray = [];
//     for (var i = 0; i < array.length; i++) {
//         outputArray.push(array[i], array[i]);
//     }
//     return outputArray;
// }
// console.log(duplicateElement([2, 4, 7, 11, -2, 1]));

// zadatak 2 Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

// function removeDuplicates(array) {
//     var output = [];
//     var filtredArray = array.sort(function (a, b) {
//         return a - b;
//     });


//     return output;

// }
// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))


// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]

// function removeDuplicates(array) {
//     var output = [];
//     for (var i = 0; i < array.length; i++) {
//         if (output.indexOf(array[i]) == -1) {
//             output.push(array[i]);
//         }
//     }
//     return output;
// }

// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//task3
//Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function hasOddNumbers(array) {

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             return true;
//             break;
//         }
//         return false;
//     }

// }
// console.log(hasOddNumbers([4, 2, 8]));


//Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function countingElements(array) {

    var halfLengthOfArray = array.length / 2;
    var indexMiddle = parseInt(halfLengthOfArray);
    var counter = 0;

    if (halfLengthOfArray % 2 === 0) {
        return false;
    } else {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < array[indexMiddle]) {
                counter++;
            }
        }

    }
    return counter;
}

console.log(countingElements([-1, 8.1, 7, 3, 6, 2.3, 44, 2.11]));


// zadatak 4 Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function minElementAndHisPosition(array) {

    var sortedArray = array.slice().sort(function (a, b) {
        return a - b;
    });
    var minValue = sortedArray[0];

    indexPosition = array.lastIndexOf(minValue);

    var output = {};
    output.minValue = minValue;
    output.indexPosition = indexPosition;
    return output;
}
console.log(minElementAndHisPosition([1, 4, -2, 11, 8, 1, -2, 3, -8]));

// task5
// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]


function filterElement (array, number) {
}
