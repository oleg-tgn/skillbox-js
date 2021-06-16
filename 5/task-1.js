let filterList = function(baseList, removeList) {
    let newList = [];

    for (let baseItem of baseList) {
        let clear = true;
        for (let removeItem of removeList) {
            if (baseItem == removeItem) {
                clear = false;
                break;
            }            
        }
        if (clear) {
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