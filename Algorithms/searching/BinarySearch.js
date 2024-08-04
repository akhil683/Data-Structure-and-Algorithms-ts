// sorted array
var givenArray = [1, 7, 42, 87, 92, 98];
var BinarySearchFunc = function (array, target) {
    var low = 0;
    var high = array.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            console.log(array[mid]);
            return mid;
        }
        else if (array[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
};
var result = BinarySearchFunc(givenArray, 92);
if (result !== -1) {
    console.log("Target found at index: ".concat(result));
}
else {
    console.log("Target not found");
}
