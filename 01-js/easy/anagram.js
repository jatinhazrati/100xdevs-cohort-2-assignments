/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    const fMap = {};

    for (let i = 0; i < str1.length; i++)
      if (fMap.hasOwnProperty(str1.charAt(i).toLowerCase())) {
        fMap[str1.charAt(i).toLowerCase()] = fMap[str1.charAt(i).toLowerCase()] + 1;
      } else {
        fMap[str1.charAt(i).toLowerCase()] = 1;
      }

    for (let i = 0; i < str2.length; i++)
      if (fMap.hasOwnProperty(str2.charAt(i).toLowerCase())) {
        fMap[str2.charAt(i).toLowerCase()] = fMap[str2.charAt(i).toLowerCase()] - 1;
      } else {
        fMap[str2.charAt(i).toLowerCase()] = 1;
      }

    for(const key in fMap)
      if(fMap[key] > 0)
        return false;
    
    return true;
  }
}

module.exports = isAnagram;
