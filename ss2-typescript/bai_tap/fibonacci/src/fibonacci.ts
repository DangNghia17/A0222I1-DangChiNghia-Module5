function basicFibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return basicFibonacci(num - 1) + basicFibonacci(num - 2);
}

function calcFibonacci(size: number): number {
    let total: number = 0;
    for (let i: number = 0; i <= size; i++) {
        total += basicFibonacci(i);
    }
    return total;
}

console.log(`Testing sum of fibonacci is :` + calcFibonacci(10));

