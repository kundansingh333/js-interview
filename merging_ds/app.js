console.log("Merging data structures");
//object merging->using spread operator , Object.assign()
let obj1 = { 1: "a", 2: "b", 3: "c" };
let obj2 = { 4: "d", 5: "e", 6: "f" };

let mergedObj1 = { ...obj2, ...obj1 };
console.log(mergedObj1);
let mergedObj2 = Object.assign({}, obj2, obj1);
console.log(mergedObj2);
//array merging-> using spread operator, Array.concat();

let arr1 = [1, 2, 3, 4];
let arr2 = ["a", "b", "c", "d"];
let mergedArr1 = [...arr2, ...arr1];
console.log(mergedArr1);

let mergedArr2 = arr1.concat(arr2);
console.log(mergedArr2);
//deep merging ---> for nested objects we use custom logic or libraries like lodash

