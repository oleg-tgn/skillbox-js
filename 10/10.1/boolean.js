function hasSomething(value) {
  // switch (typeof value) {
  //   case 'boolean': return value;
  //   case 'number': return value !== 0;
  //   case 'string': return value !== '';
  //   case 'object': return value !== null;
  //   case 'function': return true;
  //   case 'undefined': return false;
  // }

  //return Boolean(value);

  return !!value;
}

function isEmpty(value) {
  return !value;
}

let x = false;
let y = 0;
let z = 'blabla';
let result = isEmpty(z);
console.log(result);
