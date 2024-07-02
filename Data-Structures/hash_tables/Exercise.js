// value which is found twice 
// given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// it should return 2;

// given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// it should return 1;

// given an array = [2, 3, 4, 5];
// it should return undefined;

// function firstRecurringCharacter(input) { //0(n^2)
//   for (let i =0; i < input.length; i++) {
//     for (let j = i+1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       } 
//     }
//     return undefined;
//   }
// }
// const answer1 = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// const answer2 = firstRecurringCharacter([2, 5, 1]);
// console.log(answer1, answer2);

function firstRecurringCharacter2(input) { //0(n)
  let map = {}; // but we have increased the space/memory complexity by 0(n)
  for ( let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}
const answer3 = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(answer3);