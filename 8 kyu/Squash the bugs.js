// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  let spl = str.split(" ");
  let long = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > long) {
      long = spl[i].length;
    }
  }
  return long;
}
