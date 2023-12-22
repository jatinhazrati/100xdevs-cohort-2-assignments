/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  return (
    str.replace(/\s/g, "").split("").reverse().join("").toLowerCase() ===
    str.replace(/\s/g, "").toLowerCase()
  );
}

// function isPalindrome(str) {
//   let n = str.length;
//   let reverseString = ''

//   for(let i = n - 1; i >= 0; i--){
//     reverseString += str[i];
//   }

//   return reverseString.toLowerCase() === str.toLowerCase()
// }

module.exports = isPalindrome;
