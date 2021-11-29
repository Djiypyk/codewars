// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// Have fun!

function towerBuilder(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
    );
  }
  return result;
}

//    describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(towerBuilder(1), ["*"]);
//   Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
//   Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
//     });
//   });
