let filterLinsByField = function(list, key, value) {
  let filteredList = [];
  for (let item of list) {
    if (item.hasOwnProperty(key) && item[key] == value) {
      filteredList.push(item);
    }
  }

  return filteredList;
}

let users = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
];

let newList = filterLinsByField(users, 'name', 'Иван');
console.log(newList);


export default filterLinsByField;