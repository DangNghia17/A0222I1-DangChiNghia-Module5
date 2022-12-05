function basicFibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return basicFibonacci(num - 1) + basicFibonacci(num - 2);
}
function calcFibonacci(size) {
    let total = 0;
    for (let i = 0; i <= size; i++) {
        total += basicFibonacci(i);
    }
    return total;
}
console.log(`Testing sum of fibonacci is :` + calcFibonacci(10));
//# sourceMappingURL=fibonacci.js.map