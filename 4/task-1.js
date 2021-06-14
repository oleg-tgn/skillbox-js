let n = -3, m = -10, count = 42;

if (n > m) {
    buf = n;
    n = m;
    m = buf;
}

let arr = [];

for (let i = 0; i < count; i++) {
    let rand = Math.floor(Math.random() * (m - n + 1) + n);
    arr.push(rand);
}

console.log(arr);

