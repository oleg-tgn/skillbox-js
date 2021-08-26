console.log(Number('42'));
console.log(Number('3.14'));
console.log(Number('-42'));
console.log(Number('+42'));

console.log(Number('0b1001')); // 9, 2 CC
console.log(Number('0o22')); // 18, 8 CC
console.log(Number('0x22')); // 34, 16 CC

console.log(Number('\n\t 42 \n\t')); // игнорирует пробелы
console.log(Number('Не число')); // NaN

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Number({})); // NaN
console.log(Number([100, 200, 300])); // NaN
console.log(Number(() => {})); // NaN
