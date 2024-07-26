const basket = [2, 65, 34, 2, 1, 7, 8];
const sorted = basket.sort(); //1, 2, 2, 34, 65, 7, 8

basket.sort(function (a, b) {
  return a - b;
}); // 1, 2, 2, 7, 8, 34, 65

// 1 -> Bubble Sort
const bubbleSort = (array) => {
  const length = array.length;
  let sortedArray = basket;
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap Number
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(sortedArray);
};
bubbleSort(basket);
console.log(basket);

// 2 -> Selection Sort
// const selectionSort = (array) => {
// const length = array.length
//   for (let i = 0; i < length) {
//     for (let i = 0; i < length) {
//
//     }
//   }
// };

// 3 -> Insertion Sort
