const n = 31;
const firstDay = 1;
let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let month = [];

for (let i = 0; i < n; i++) {
    let day = days[(i + firstDay) % 7];
    month[i] = `${parseInt(i) + 1} января, ${day}`;
}

console.log(month);