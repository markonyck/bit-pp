var weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("Nice weather");
        break;
    case "rainy":
        console.log("Bad weather");
        break;
    default:
        console.log("Some new weather type");
}


// VEZBE

// zadatak 1 i 2

// var day = 10;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Input must be a number between 1 and 7");
// }




// zadatak 3


var day = 6;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's weekday");
        break;
    case 6:
    case 7:
        console.log("It's weekend");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
}


// zadatak 4

// var month = 10;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break; 
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;        
//     default:
//         console.log("Input must be a number between 1 and 12");
// }


//zadatak 5


var month = 1;

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
}


// zadatak 6

var grade = "a";

switch (grade) {
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed");
        break;
        default:
        console.log("Unknown grade");
}