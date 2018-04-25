// task 1

// function max(a, b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log("Maximum of given numbers is: " + max(3, 2));

// task 2

// function odd(a) {
//     if (a % 2 === 0) {
//         console.log ("Number is even")
//     }
//     else {
//         console.log("Number is odd")
//     }
// }
// odd(3);

// task 3

// function isThreeDigitNumber(a){

//     if(a > 99 && a < 1000){
//         console.log("Its a three digit number : " + a);
//     }
//     else{
//         console.log("It's not a three digit number : " + a);
//     }
//     // return (a > 99 && a < 1000);
// }
// isThreeDigitNumber (100);

//task 4

// function arithmeticMeanFourNumbers (a, b, c, d) {
//     var mean = (a + b + c + d) / 4;
//     return mean;
// }

// // var mean4 = arithmeticMeanFourNumbers();
// console.log (arithmeticMeanFourNumbers (1, 3, 5, 7));

// task 7

// function numberDigits (a){
//     var str = "" + a;
//     return str.length;
// }
// console.log(numberDigits(123));

// task 8

// function numOfAppeareancesInArray(a, arr){
//    var counter = 0;
//     for (i = 0; i < arr.length; i++){
//         if (a === arr[i]){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log (numOfAppeareancesInArray(1, [2, 3, 5,1, 1, 5, 1]))

// task 9

// function sumOfOdd (arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++)
//         if(arr[i] % 2 !== 0){
//             sum += arr[i];
//         }
//         return sum;
// }

// console.log(sumOfOdd([1,3,4,6]));

// task 10

// //prvo izracunat broj trazenog slova u nizu pa trazen ukupan broj slova(veliko i malo) ...
// // probati sa tolowercase celu

// // function numberOfAppearencesInString(str, a) {
// //     var counterLow = 0;
// //     for (var i = 0; i < str.length; i++) {
// //         if (a === str[i]) {
// //             counterLow++;
// //         }
// //     }
// //     strLow = str.toLowerCase();
// //     var counterAll = 0;
// //     for (var i = 0; i < str.length; i++) {
// //         if (a === strLow[i]) {
// //             counterAll++;
// //         }
// //     }
// //     var counterUpper = counterAll - counterLow;
// //     return [counterLow, counterUpper];
// // }

// console.log(numberOfAppearencesInString('sjkdfAsdjfbadfgja', 'j'));

// task 11

function Concatenates(str, num){
    var output = [];
    for(var i = 1; i <= num; i++){
        output += str;
    }
    return output;
}
console.log(Concatenates('marko', 3));