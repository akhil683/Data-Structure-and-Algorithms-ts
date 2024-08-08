//TODO: FIBONACCI SERIES
//0, 1, 1, 2, 3, 5, 8 ,13, 21, 34, 55, 89, 144...

// More space complexity for better time complexity
//NOTE: TIME COMPLEIXITY: 0(n)
let calculations = 0;
function fibonnaciCalc() {
  let cache: { [key: number]: number } = {};
  return function fib(n: number) {
    if (n in cache) {
      return cache[n];
    } else {
      calculations++;
      if (n < 2) {
        cache[n] = n;
        return cache[n];
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
const fib = fibonnaciCalc();
console.log(fib(7));
console.log(calculations);

//NOTE: TIME COMPLEXITY: 0(n^2),
let calc = 0;
function fibonnaci(n: number) {
  calc++;
  if (n < 2) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}
console.log(fibonnaci(7)); //55
console.log(calc); //177

//NOTE: Here fibonnaci function does 177 calculation to find 7th value in fibonnaci series
