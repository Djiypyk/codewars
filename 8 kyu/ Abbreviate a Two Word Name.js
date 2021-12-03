// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F


function abbrevName(name) {
    [first, last] = name.toUpperCase().split(' ');
    return first[0] + '.' + last[0];
    // code away

}
//
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//         assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//         assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//         assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//         assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//     });
// });