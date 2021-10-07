// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var counts = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      counts++;
    }
  }
  // enter your majic here

  return counts;
}
