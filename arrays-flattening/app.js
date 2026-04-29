console.log("arrays flattening");

//flattening an array means converting a nested array into a single level array
// *************after ES2019**************
// Array.prototype.flat();
let arr = [1, 2, [3, 4], [5, 6, [7, 8]]];
// let flatArr = arr.flat(Infinity); // flat method is used to flatten the array and it takes an argument which is the depth of flattening. Infinity means flattening all levels of nested arrays
let flatArr = arr.flat(1); //
console.log(flatArr);

//  ************* BEFORE ES2019**************
//using reduce method to flatten the array

function flattenArray(arr) {
  return arr.reduce(
    (
      acc,
      val, // acc is the accumulator which is the array that we are building and val is the current value of the array that we are iterating over
    ) => (Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)),
    [],
  );
}
let arr2 = [1, 2, [3, 4], [5, 6, [7, 8]]];
let flatArr2 = flattenArray(arr2);
console.log(flatArr2);
