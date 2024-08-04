// sorted array
const givenArray: number[] = [1, 7, 42, 87, 92, 98];

const BinarySearchFunc = (array: number[], target: number): number => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      console.log(array[mid]);
      return mid;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const result = BinarySearchFunc(givenArray, 92);

if (result !== -1) {
  console.log(`Target found at index: ${result}`);
} else {
  console.log("Target not found");
}
