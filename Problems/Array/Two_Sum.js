//TODO: TWO SUM
//[1, 3, 7, 9, 2], Sum=11 => Answer: [3,4] (index)
//[1, 3, 7, 9, 2], Sum=25 => Answer: null
//[], Sum=1 => Answer: null
//[5], Sum=5 => Answer: null (bcuz we need two numbers)
//[1,6], Sum=7 => Answer: [0, 1]
// Figure out a solution without code
//SOLUTION:
//Given Array: [1, 3, 7, 9, 2], Target =11
//Two Pointer Technique (P1, P2)
//P1 => 1
//NumberToFind = target - num[P1] :: 10 = 11 - 1
//P2 => It Tries to find 11 in rest of the elements
var TwoSum = function (array, target) {
    var pointer = {};
    for (var i = 0; i < array.length; i++) {
        var numberToFind = target - array[i];
        if (pointer[array[i]] !== undefined) {
            console.log([i, pointer[array[i]]]);
            return [i, pointer[array[i]]];
        }
        else {
            pointer[numberToFind] = i;
        }
    }
};
TwoSum([1, 2, 3, 4, 5, 5, 6], 9);
