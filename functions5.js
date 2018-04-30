// 1

function switchMinMax(inputArr) {

    var min = max = inputArr[0];
    var indexMin = indexMax = 0;

    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < min) {
            min = inputArr[i];
            indexMin = i;

        }
        if (inputArr[i] > max) {
            max = inputArr[i];
            indexMax = i;
        }

    }

    inputArr[indexMin] = max;
    inputArr[indexMax] = min;

    return inputArr;
}


console.log(switchMinMax([500, 12, 149, 53, 414, 1, 12]));


// 2

function div2add5(inputArr) {
    var outputArr = [];
    for (var i = 0; i < inputArr.length; i++) {
        outputArr[i] = inputArr[i] / 2 + 5;
        if (outputArr[i] === 0) {
            outputArr[i] = 20;
        }
    }
    return outputArr;
}

console.log(div2add5([3, 500, -10, 149, 53, 414, 1, 19]));

//3 
function marksForStudents(arrStudents, arrPoints) {
    var newString = "";
    var grade = 0;

    for (var i = 0; i < arrStudents.length; i++) {
        if (arrPoints[i] > 50 && arrPoints[i] <= 60) {
            grade = 6;

        } else if (arrPoints[i] > 60 && arrPoints[i] <= 70) {
            grade = 7;
        }
        else if (arrPoints[i] > 70 && arrPoints[i] <= 80) {
            grade = 8;
        } else if (arrPoints[i] > 80 && arrPoints[i] <= 90) {
            grade = 9;
        } else if (arrPoints[i] > 90 && arrPoints[i] <= 100) {
            grade = 10;
        } else {
            grade = "failed";

        }
        newString += arrStudents[i] + " acquired " + arrPoints[i] + " and earned " + grade + "." + "\n";


    }
    return newString;
}

console.log(marksForStudents(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]
));


//zadatak 4 (bubble sort)

function sortAndMultiply(inputArr) {

    // var outputArr = [];


    for (var i = 0; i < inputArr.length - 1; i++) {
        for (var j = 0; j < inputArr.length - 1 - i; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
            }
        }
        
    }
    return inputArr;
}

console.log(sortAndMultiply([50, 39, 63, 72, 99, 51, 83, 59]));

// zadatak 4 (selection sort)

// zadatak 5

function sortFromMaxToMin(inputArr){
    for (var i = 0; i <inputArr.length; i++) {
        var position = i;
        for (var j = i; j < inputArr.length; j++){
            if (inputArr[j] > inputArr[position]) {
                position = j;
            }

        }
        var tmp = inputArr[i];
        inputArr[i] = inputArr[position];
        inputArr[position] = tmp;
    }
    return inputArr;
}

console.log(sortFromMaxToMin([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

// zadatak 6

function subtractEvenOdd (num1, num2){

    var plus = 0;
    var minus = 0;
    var sum = 0;

    for (var i = 1; i <= num1; i++){
        if ( i % 2 === 0){
            plus += i;
        }
    }
    for ( var j = 1; j <= num2; j++){
        if ( j % 2 !== 0){
             minus += j;
        }
    }
    sum = (plus-minus)*12.5;

    return sum;

}

console.log(subtractEvenOdd(1000,500));

//zadatak 7

function newString (inputArr){

    var newStr= "";

    for ( var i = 0; i < inputArr.length; i++){
        if (typeof inputArr[i] === "string" && inputArr[i].length > 1){
            for ( var j = 0; j < 2; j++){
               newStr += inputArr[i][j];
            }
            
        }
    }
    return newStr;
}

console.log(newString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

// zadatak 8

function reverseString (inputStr){

    var newStr = "";

    for (var i =inputStr.length-1; i >= 0; i--){
            newStr += inputStr[i];
    }

    return newStr;
}

console.log(reverseString("Belgrade Institute of Technology"));

// zadatak 9

function combinationTwoNumbers(num1){

    var newStr = "";

    for (var i = 1; i <= num1; i++){
        for (var j = 1; j <= num1; j++){
            if (i !== j){
                newStr += "(" + i  + ", " + j +"), "; 
            }
         //   if ( i === j){
         //       continue;
          //  }
        }

    }
        return newStr;
}

console.log(combinationTwoNumbers(7));

// zadatak 10

function isPrimeNumber(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    return true;
}
console.log(isPrimeNumber(17));


// zadatak 11

function isStringPalindrom(string){
    newString = "";
    for (var i = 0; i < string.length; i++){
        if (string[i] !== " ") {
            newString += string[i];
        }
    }
    var m = parseInt((newString.length) / 2);
    for (var j = 0; j < m; j++) {
        if (newString[j] !== newString[newString.length-1-j]){
            return false;
        }
    }
    return true;
}
console.log(isStringPalindrom("a nut for a jar of tuna"));

function greatestCommonDivisorOfTwoIntegers(num1, num2){
    nzdArr = [];
    if (num1 > num2){
        for (var i = 1; i <= num2; i++){
            if (num1 % i === 0 && num2 % i === 0) {
                nzdArr[nzdArr.length] = i;
            }
        }
        var nzd = nzdArr[nzdArr.length-1];
        return nzd;
    } else{
        for (var i = 1; i <= num1; i++){
            if (num1 % i === 0 && num2 % i === 0) {
                nzdArr[nzdArr.length] = i;
            }
        }
        var nzd = nzdArr[nzdArr.length-1];
        return nzd;
    }
}
console.log(greatestCommonDivisorOfTwoIntegers(9, 45));