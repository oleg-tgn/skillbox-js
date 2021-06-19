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

