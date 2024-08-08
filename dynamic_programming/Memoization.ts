// NOTE: MEMOIZATION
// It is a specific form of caching used to optimizeing recursive algorithsm
// Improve efficiency of algorithm by storing the resultss of expensive funtion calls and
// Re-using them when the same inputs occur again.
// It's a way to trade space for time.
// We use additional memory to store the result of sub-problems
// Can be helpful in problems related to combinatorics, optimization, and dynamic programming.

function memoizedAddTo80() {
  //Closure: returning func can access cache object
  var cache: { [key: number]: number } = {};
  return function (n: number) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
//if we simply
var memoized = memoizedAddTo80(); // represent the returning function
console.log("1", memoized(5));
console.log("2", memoized(5));

//NOTE: Un-optimized code:
//if we simply do this: them when we call bad_memoizedAddTo80 function,
//cache object will be initialized again, and we can't access the previous cache values
//That's why we use closure

function bad_memoizedAddTo80(n: number) {
  var cache = {};
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time ");
    cache[n] = n + 80; // complex calculation function
    return cache[n];
  }
}
console.log("3", bad_memoizedAddTo80(5));
console.log("4", bad_memoizedAddTo80(5));
