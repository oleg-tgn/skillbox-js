let filterList = function(baseList, removeList) {
    let newList = [];

    for (let baseItem of baseList) {                
        if (!removeList.includes(baseItem)) {
            newList.push(baseItem);
        }
    }

    return newList;
}

let emails = ["ivanov", "petrov", "sidorov", "blackKing"];
let blackEmail = ["blackKing"];

let whiteList = filterList(emails, blackEmail);
console.log(whiteList);

//export default filterList;