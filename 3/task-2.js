let nameUser = "Oleg";
let surnameUser = "sTelMakH";

let nameNew = nameUser.substr(0, 1).toUpperCase() + nameUser.substr(1).toLowerCase();
let surnameNew = surnameUser.substr(0, 1).toUpperCase() + surnameUser.substr(1).toLowerCase();

console.log(nameNew);
console.log(surnameNew);

console.log(nameNew === nameUser ? "Имя осталось без изменений" : "Имя было преобразовано");
console.log(surnameNew === surnameUser ? "Фамилия осталась без изменений" : "Фамилия была преобразована");

