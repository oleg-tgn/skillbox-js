let a = 13.123456789, b = 2.123, n = 5;

a = a - Math.trunc(a);
a = Math.trunc(a * Math.pow(10, n));

b = b - Math.trunc(b);
b = Math.trunc(b * Math.pow(10, n));

console.log(a);
console.log(b);

console.log(a === b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);