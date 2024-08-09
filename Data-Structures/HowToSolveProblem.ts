// given 2 arrays, create a function that let's a user know (true/fales) whether these two arrays contain any common items
// for example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false.
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

//2 parameters - arrays - no size limit
// return true/false

//FIRST APPROACH: we can use nested for loop comparing element from both array. -> 0(n^2) - not efficient
// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.lengt; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// containsCommonItem(array1, array2);

// SECOND APPROACH: HASHMAP Better approach (two loops not nestes) -> 0(2n)
// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }
//array2[index] === obj.properties
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// function containsCommonItem(arr1, arr2) {
//   loop through first array and create object where properties === items in the array
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = array1[i];
//       map[item] = true;
//     }
//   }
//   console.log(map);
//   loop through second array and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//     return false;
//   }
// }
// containsCommonItem(array1, array2)

// LANGUAGE SPECIFIC APPROACH:
// function containsCommonItem2(array1, arr2) {
//   return arr1.some(item => arr2.include(item))
// }
// containsCommonItem2(array1, array2)
