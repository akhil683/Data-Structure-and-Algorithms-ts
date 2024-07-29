const basket = [2, 65, 34, 2, 1, 7, 8];
const sorted = basket.sort(); //1, 2, 2, 34, 65, 7, 8

basket.sort(function (a, b) {
  return a - b;
}); // 1, 2, 2, 7, 8, 34, 65

//TODO: 1 -> Bubble Sort
const bubbleSort = (array) => {
  const length = array.length;
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
};
bubbleSort(basket);
console.log(basket);

//TODO: 2 -> Selection Sort
const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    //set current index as minimum
    const min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    //set minimum value to i index
    array[i] = array[min];
    array[min] = temp;
  }
  console.log();
};
selectionSort(basket);
console.log(basket);

//TODO: 3 -> Insertion Sort: small dataset or dataset which are nearly sorted
const insertionSort = (array) => {
  const length = array.length;
  const sortedArray = [];
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the 1st position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //find wher number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          //move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
};
//TODO: 4 -> Merge Sort
//TODO: 5 -> Quick Sort
