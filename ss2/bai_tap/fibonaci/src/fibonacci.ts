function valueFibonacci(num: number): number {
  if (num <= 1) {
    return num;
  }
  return valueFibonacci(num - 1) + valueFibonacci(num - 2);
}

function sumFibonacci(size: number): number {
  let total: number = 0;
  for (let i: number = 0; i <= size; i++) {
    total += valueFibonacci(i);
  }
  return total;
}

console.log(sumFibonacci(4));
