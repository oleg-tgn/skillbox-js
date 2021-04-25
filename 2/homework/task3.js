let n = 0, m = 100;

let range = Math.abs(m - n - 1);
let number = Math.round(Math.random() * range);
number = number + number % 2 + 1
console.log(number);

