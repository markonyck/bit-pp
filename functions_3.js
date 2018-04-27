//1

function insertStr(str, insStr, pos = 1) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    if (i === pos - 1) {
      res += insStr;
      res += str[i];
    } else {
      res += str[i];
    }
  }
  return res;
}

console.log(insertStr("neki mali tekst", "JS", 5));

//2

function arrToStr(arr) {
  var newStr = "";
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && arr[i] !== null) {
      newStr += arr[i];
    }
  }
  return newStr;
}
console.log(arrToStr([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//3

function removeFalsy(arr) {
  var resArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resArr[resArr.length] = arr[i];
    }
  }
  return resArr;
}

console.log(removeFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//4
function inverseNumber(num) {
  var str = "" + num;
  var resStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    resStr += str[i];
  }
  return parseFloat(resStr);
}

console.log(inverseNumber(12345));

//5

function getLastElements(arr, n = 1) {
  var resArr = [];
  for (var i = arr.length - n; i < arr.length; i++) {
    resArr[resArr.length] = arr[i];
  }
  return resArr;
}

console.log(getLastElements([7, 9, 0, -2], 2));

// 6

function multiply(multi, element = null) {
  outputArr = [];
  for (var i = 0; i <= multi - 1; i++) {
    outputArr[i] = element;
  }
  return outputArr;
}
console.log(multiply(6, 4));

// 7

function isPerfect(num) {
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num ? true : false;
}

console.log(isPerfect(28));

// 8
function numOfWordInSentence(sentence, word) {

  // kreiraj niz reci
  var arrSentence = [];
  arrSentence[0] = "";
  var count = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' || sentence[i] === ',') {
      count++;
      arrSentence[count] = "";
    } else {
      arrSentence[count] += sentence[i];
    }

  }

  // proveri da li je element u nizu
  var counter = 0;
  for (var i = 0; i < arrSentence.length; i++) {
    if (arrSentence[i] === word) {
      counter++;
    }
  }

  return word + " was found " + counter + " times";
}

console.log(numOfWordInSentence('aa, bb, cc, dd, aa', 'aa'))

// numOfWordInSentence('The quick brown fox', 'fox')

//9 
function hideEmail(email) {
  var endStr = "";
  var begStr = "";
  var indexOfMonkey;
  for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      indexOfMonkey = i;
    }
  }

  for (var i = email.length - indexOfMonkey - 2; i < email.length; i++) {
    endStr += email[i];
  }
  for (var i = 0; i < 5; i++) {
    begStr += email[i];
  }
  return begStr + "..." + endStr;
}

console.log(hideEmail("gsgshssh@gmail.com"));

//10

function mostFrequentItem(arr) {
  var max = 0;
  var counter = 0;
  var index;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter > max) {
      max = counter;
      index = i;
    }
    counter = 0;
  }
return arr[index];
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
