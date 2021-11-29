// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  if (!str) {
    return [];
  }
  let result = [];
  let arr = str.split("");
  let acc = [];

  for (let i = 0; i < arr.length; i += 2) {
    acc.push([arr[i], arr[i + 1]]);
  }
  for (let i = 0; i < acc.length; i++) {
    result.push(acc[i].join(""));
  }
  if (result[result.length - 1].length % 2 !== 0) {
    result[result.length - 1] += "_";
  }
  return result;
}

//   const { assert } = require('chai');

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
