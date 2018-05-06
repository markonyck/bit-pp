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

//task 7

function isNumEven (arr) {
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 )
    }
}

var filter = function(elements, conditionChecker) {
    if (typeof conditionChecker !== "function") {
        return elements;
    }
   
    var filteredColection = [];
   
    for (var index in elements) {
        if (!conditionChecker(elements[index])) {
            continue;
        }
   
        filteredColection[filteredColection.length] = elements[index];
    }
   
    return filteredColection;
   }
   
   var filteredArray = filter(
    [23, 5, 7, 42, 12],
    function(element){ return element >= 20; }
   );
   console.log("\nFiltered array: ", filteredArray);

   // task 6


  function isPasswordCorrect(string){
      if (hasSixElements(string) && hasNumber(string)) {
          return console.log("Your password is cool! ");
      } else {
          return console.log("Your password is invalid!");
      }
  }
  isPasswordCorrect("JSGuru123");


  function hasSixElements(string){
    if (string.length >= 6){
        return true;
    } else {
        return false;
    }
}

function hasNumber(string){
    var answer = false;
    for (var i = 0; i < string.length; i++){
        if (parseInt(string[i])){
            return answer = true;
            break;
        }
    }
}

// task 7

function odd(number){
    if (number % 2 === 1){
        return true;
    } else {
        return false;
    }
}

function checkArray(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (odd(arr[i])){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

console.log(checkArray([2, 8, 11, 4, 9, 3]));


// task 3

function checkNumberOfCharacters(string, char){
    var count = 0;
    char = char.toLowerCase();
    for (var i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === char){
            count++;
        }
    }
    return count;
}

function transformString(string, char){
    newString = '';
    char = char.toLowerCase();
    for (var i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === char){
            newString+='*';
        } else {
            newString+=string[i];
        }
    }
    return newString;
}

function countAndTransform(string, char){
    return [transformString(string, char), checkNumberOfCharacters(string, char)];
}
console.log(countAndTransform('programMIng', 'm'));


var passwordChecker = function (password, success, error) {
    success = success || function(){};
    error = error || function() {};
   
    function isPasswordValid(password) {
        if (typeof password !== "string" || password.length < 6) {
            return false;
        }
   
        for (var i in password) {
            if (isNumeric(password[i])) {
                return true;
            }
        }
   
        return false;
    }
   
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
   
    return isPasswordValid(password)
        ? success()
        : error()
   }
   
   passwordChecker(
    "sdfsdf123",
    function(){ console.log("\nYour password is valid!"); },
    function(){ console.log("\nYour password is invalid!"); }
   );
   