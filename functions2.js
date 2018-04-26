//task 1
function isString(value) {
    if (typeof value === 'string'){
        return true;
    } 
    return false;
}
console.log(isString(22));

//task 2

function isBlank(value){
    for (var i in value){
        if (value[i] !== " "){
            return false;
        }
    }
    
    return true;
}

console.log(isBlank("  "));

//task 3
function concatNtimes(str, n){
    output = str;
    for (var i = 1; i < n; i++) {
        output += str;
    }
    return output;
}
console.log(concatNtimes('marko ',4));

//task4
function nOfLetters(str, letter){
    var count = 0;
    for (var i = 0; i< str.length; i++){
        if (str[i] === letter){
            count++;
        }
    }
    return count;
}

console.log(nOfLetters("tastatura", "c"));

//task 5

function firstOccur(str, char){
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            return i+1;
            break;
        }
    }
    return -1;
}
console.log(firstOccur('Marko', 'a'));

//task 6

function lastOccur(str, char){
    for (var i = str.length - 1; i >= 0; i--){
        if (str[i] === char){
            return i+1;
            break;
        }
    }
    return -1;
}
console.log(lastOccur('Maroko', 's'));

//task 7
function strToArr(str){
    arr = [];
    /*for (var i = 0; i < str.length; i++){
        if (str[i] === " "){
            arr[i] = null;
        } else{
            arr[i] = str[i];
        }
        
    }*/
    var i = 0;
    while (i < str.length){
        if (str[i] === ' '){
            arr[i] = null;
            i++;
        } else {
            arr [i] = str [i];
            i++;
        }
    }
    
    return arr
}
console.log(strToArr("My random string"));

//task 8

function isPrime(num){
    for(var i = 2; i < num; i++){
        if (num % i === 0){
            return "Not a prime"
        }
    }
    return "It's prime!!!"
}

console.log(isPrime(6))

// task 9

function replaceBlankWithSeparator(str, sep){
    var output = '';
    for (var i = 0; i <str.length; i++){
        if (arguments.length == 1) {
            if (str[i] === ' '){
                output+='-';
            } else {
                output+=str[i];    
            }    
        } else {
            if (str[i] === ' ') {
                output+=sep
            } else {
                output+=str[i];
            }
        }
         
    }
    return output;
} //probati ternarno
console.log(replaceBlankWithSeparator('My random string', '+'))

//task 10
function more(str, n){
    var newStr= "";
    for (var i = 0; i < n; i++){
        newStr += str[i];
    }
    newStr += "...";
    return newStr;
}

console.log(more("Now you can browse privately, and other people who use this device won’t see your activity. However, downloads and bookmarks will be saved", 10))

//task 11
function filterOutFromNumber(arr) {
    output = [];
    for (var i = 0; i<arr.length; i++){
        if (!isNaN(parseInt(arr[i]))){
            output[output.length] = parseInt(arr[i]);
        }
    }
    return output;
}
console.log(filterOutFromNumber(["1", "21", undefined, "42", "1e+3", Infinity]))

//task 12

function retirement(yob, gender){
    var numberOfYears = 2018 - yob;
    var yearsToRetirement = 0;
    if (gender === "m"){
        yearsToRetirement += (65 - numberOfYears);
    } else {
        yearsToRetirement += (60 - numberOfYears);
    }

    if(yearsToRetirement > 0){
        return yearsToRetirement;
    } else {
        return "You are already retired!"
    }
}

console.log(retirement(1933, "m"));

//task 13

function firstToTenth(num){
    switch (num) {
        case '1':
            return 'st';
            break;
        case '2':
            return 'nd';
            break;
        case '3':
            return 'rd';
            break;
        default :
            return 'th';
    }
}

function humanize(numb){
    var numToStr = numb + '';
    if (numToStr[numToStr.length - 2] != '1') {
        return numb + firstToTenth(numToStr[numToStr.length - 1]);
    } else {
        return numb + 'th';
    }
}

console.log(humanize(13));