// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log(month[5]);
// console.log(month[9]);
// console.log(month[0]);

// a = [-2, -4, 5, -2, -11];
// if (a[0] < 0) {
//     console.log(a[0]);
// }

// if (a[1] < 0) {
//     console.log(a[1]);
// }

// if (a[2] < 0) {
//     console.log(a[2]);
// }

// if (a[3] < 0) {
//     console.log(a[3]);
// }

// if (a[4] < 0) {
//     console.log(a[4]);
// }

// var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// if (a[0] % 3 === 0) {
//     console.log(a[0]);
// }
// if (a[1] % 3 === 0) {
//     console.log(a[1]);
// }
// if (a[2] % 3 === 0) {
//     console.log(a[2]);
// }
// if (a[3] % 3 === 0) {
//     console.log(a[3]);
// }
// if (a[4] % 3 === 0) {
//     console.log(a[4]);
// }
// if (a[5] % 3 === 0) {
//     console.log(a[5]);
// }
// if (a[6] % 3 === 0) {
//     console.log(a[6]);
// } if (a[7] % 3 === 0) {
//     console.log(a[7]);
// } if (a[8] % 3 === 0) {
//     console.log(a[8]);
// }

// var c = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(c[0][3]);
// console.log(c[2]);
// c[2] = 5;
// console.log(c);


// var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];


// var sum = 0;
// var i = 1;

// while (i <= 1000) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         sum = sum + i;
//     }
//     i++;
// }

// console.log(sum);

// var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// var sum = 0;
// var product = 1;
// var i = 0;

// while (i < a.length) {
//     sum = sum + a[i];
//     product = product * a[i];
//     i++;
// }

// console.log ("Suma je: " + sum + " Proizvod je: " + product);

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var string = "";
// var i = 0;

// while (i < x.length) {
//     if (typeof x[i] === "string") {
//         string = string + x[i];
//     }
//     i++;
// }
// console.log("Rezultat je " + string);

// var i = 1;
// var niz = []; 

// while (i <= 15) {
//     if (i % 2 === 0) {
//         console.log ( i + niz);
//     }
//      i++;
//     // else {
//     //     console.log ( i + ' je neparan broj.');
//     //}

// }


var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var output = "";

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        output += " " + a[i][j];
    }
    output += "\n";
}

console.log(output);



// var numbers = [3, 5, 7, 8, 3]
// for (var i in numbers) {
//     console.log(numbers[i]);
// }


// var sum = 0;
// for (var i=1; i<=20; i++){
//     sum+=i*i;
// }
// console.log(sum);