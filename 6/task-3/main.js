let createSelect = function(selectObj, defaultValue) {
  let select = document.createElement('select');
  let isSelected = false;

  for (let item of selectObj) {
    let option = document.createElement('option');
    option.value = item.value;
    option.text = item.label;
    if (item.value == defaultValue) {     
      option.selected = true;
      isSelected = true;
    }
    if (!isSelected) {
      selectObj[0].selected = true;
    }
    select.append(option);
  }

  return select;
}

let createSelectFilter = function(selectArr, defaultValue) {
  let filteredArr = [];

  if (Array.isArray(selectArr)) { 
    for (let item of selectArr) {
      console.log(typeof item);
      if (typeof item != 'object') {
        filteredArr.push({value: item, label: item})
      } else {
        filteredArr.push(item)
      }
    }
  } else if (typeof selectArr == 'object') {
    console.log(selectArr);
    let entries = Object.entries(selectArr);
    for (let [key, value] of entries) {
      filteredArr.push({value: key, label: value})
    }
  }
  
  return createSelect(filteredArr, defaultValue);
}
