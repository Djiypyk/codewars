

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let newStr = "";
  for (let i = x.length - 1; i >= 0; i--) {
    newStr += x[i];
  }
  return x.toLowerCase() === newStr.toLowerCase();
}
