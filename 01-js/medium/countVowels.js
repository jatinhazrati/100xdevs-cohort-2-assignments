/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(ch) {
  return ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u";
}

function countVowels(str) {
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++)
    if (isVowel(str.charAt(i).toLowerCase())) vowelCount++;

  return vowelCount;
}

module.exports = countVowels;
