// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  const filter1 = arr.filter((el) => el === arr[0]);
  const filter2 = arr.filter((el) => el !== arr[0]);

  console.log(filter1);
  console.log(filter2);

  return filter1.length > filter2.length ? filter2[0] : filter1[0];
}
