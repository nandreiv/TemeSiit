
// Compare two numbers and return true if they are equal
function compare(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  };
}

// Compare two numbers and return -1 if first is smaller, 0 if they are equal and 1 if second is smaller
function compareAgain(a, b) {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}

// Compare two numbers and return the biggest
function returnMax (a, b) {
  if (a > b) {
    return a;
  }else{
    return b;
  }
}

// Compare two numbers and return the smallest
function returnMin (a, b) {
  if (a < b) {
    return a;
  }else{
    return b;
  }
}

// Return the sum of first numbers
function returnSum (a) {
  let sum = 0;
  for (i=0; i<=a; i++) {
    sum = sum + i;
  }
  return sum;
}

// Check if number is prime
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

// Sum of first prime numbers
function sumPrimes(num) {
  var answer = 0;

  //loop through all numbers from 2 to input value

  for(var i=2; i <= num; i++){   

    //sum only prime numbers, skip all others
    if(isPrime(i)){
      answer += i;
    }
  }
  return answer;
}

// Return reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Return product of odd numbers
function prodOdd(a) {
  let sum = 1;
  for (i=0; i<=a; i++) {
    if (i % 2 != 0){
      sum = sum * i;
    }
  }
  return sum;
}

// Check if in array
function checkArray(arr, x) {
  if (arr.includes(x)) {
    return ("It is in array!");
  }else{
    return ("It is not in array...");
  }
}

// Return max from an array
function getMaxOfArray(numArray) {
  let max =  Math.max.apply(null, numArray);
}

// Return sum of min and max from an array
function getSumMinMax(numArray) {
  let max =  Math.max.apply(null, numArray);
  let min =  Math.min.apply(null, numArray);
  return min + max;
}

// Check duplicates in array
function checkDuplicates(a) {
  var counts = [];
  for(var i = 0; i <= a.length; i++) {
      if(counts[a[i]] === undefined) {
          counts[a[i]] = 1;
      } else {
          return true;
      }
  }
  return false;
}

// Return product of positive numbers from array
function prodPositiveArr(a){
  let prod = 1;
  for (i=0; i<=a.length; i++){
    if (a[i] > 0) {
      prod = prod * a[i];
    }
  }
  return prod;
}

// Check if palindrome
function checkPalindrome(x) {
  let rev =  x.split("").reverse().join("");
  if (x === rev) {
    return x + " is a palindrome!"
  }else{
    return "No palindrome here..."
  }
}
