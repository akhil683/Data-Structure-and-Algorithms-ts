// Q - 1
//Create a function that reverse a string;
// "hi my name is Akhil" should be;
// 'lihka si eman ym ih';
function reverse (str) {
  if (!str || str.length < 2 || typeof str !== 'string'){
    return "hmm that is not good";
  }
  // const array = str.split("");
  const newArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newArray.push(str[i]);
  }
  console.log(newArray.join(""));
}
reverse("hi my name is Akhil");

function reverse2 (str) {
  console.log(str.split("").reverse().join("")); // built in method in JS
}
reverse2("hi my name is Akhil");

const reverse3 = str =>console.log([...str].reverse().join(""));
reverse3("hi my name is Akhil");


// Q-2
// mergeSortedArray([0,3,4,31], [4,6,30]) --> [0,3,4,4,6,30,31]
function mergeSortedArray (one, two) {
  const mergedArray = [];
  let array1Item = one[0];
  let array2Item = two[0];
  let i = 1;
  let j = 1;

  if (one.length === 0) {
    return two;
  }
  if (two.length === 0) {
    return one;
  }
  while ( array1Item || array2Item ) {

    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = one[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = two[j];
      j++;
    }
  }

  console.log(mergedArray)
}
mergeSortedArray([0,3,4], [4,6,30]);
