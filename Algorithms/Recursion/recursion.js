//big O : 0(2^N)
function factorial(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorial(number - 1);
}
factorial(5);

//Fibonacci sequence: 0,1, 1, 2, 3, 5, 8, 13, 21, 34....
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));
