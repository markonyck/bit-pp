// primer

function Animal (kind, name) {
    this.kind = kind;
    this.name = name;
}

var cat = new Animal("cat", "Maca");

console.log(cat);

// zadatak

function Person (name, surname, hobby){
    this.name = name;
    this.surname = surname;
    this.hobi = hobby;

    this.sayName = function () {
        console.log("Hi I'm " + this.name + "!");
    }
    this.sayBla = function(){
        console.log(this.name + ": bla");
    }
    this.likeIt = function(){
        for (var i = 0; i < this.hobi.length; i++){
            console.log(this.name + ' likes ' + this.hobi[i]);
        }
    }
    this.changeSurname = function(newSurname) {
       this.surname = newSurname;
        
    }
}

var nenad = new Person("Nenad", "Bugaric");
var milos = new Person("Milos", "Brajevic", ['sports', 'codding', 'reading']);



milos.sayName();
milos.sayBla();
milos.likeIt();
milos.changeSurname('Brajovic');

console.log(milos.surname);

// zadatak 1. Write a function to convert a number from one base (radix) to another. Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
/*
function convertNumber (input, base) {
   var output = input.toString();
   output = parseInt(output, base);
    return output;
}
console.log(convertNumber('ff', 8));
*/

function convertNumberBase (inputStr, inputBase, outputBase){

    var number = parseInt(inputStr, inputBase);
    var convertedNumber = number.toString(outputBase);

    return convertedNumber;
}

console.log(convertNumberBase("377", 8, 16));


// zadatak 2 Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

function reverseNumber(input) {
    var reversed = input.toString().split("").reverse().join("");
    reversed = parseInt(reversed);
    
 

    return reversed;
}
console.log(reverseNumber(123));
console.log(typeof(reverseNumber(123)));

// zadatak 3 Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.


function sortString (input){

    var result = input.toLowerCase().split("").sort().join("");

    return result;
}

console.log(sortString("Webmaster"));


// zadatak 4 Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
//	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


function alphabetization (inputStr) {

    var output = inputStr.split(" ");
        for (var i = 0; i < output.length; i++) {
           output[i] = output[i].split("").sort().join("");
          }  
        
        output = output.join(" ");
    return output;
}

console.log(alphabetization("Republic Of Serbia"));


//zadatak 5 Write a function to split a string and convert it into an array of words.

//	"John Snow" -> [ 'John', 'Snow' ]

function splitString (input){

    var output = input.split(" ");

    return output;
}

console.log(splitString("John Snow"));


// zadatak 6 Write a function to convert a string to its abbreviated form. 

//	"John Snow" -> 	"John S."

function abbreviated (input){

    var output = input.split(" ");
    output 

    return
}