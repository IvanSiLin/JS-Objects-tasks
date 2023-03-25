// BEGIN
export const pick = (object, content) => {

    let newObject = {};
    let item = 0;

    for (item in object) {

        if (content.indexOf(item) !== -1) {

            newObject[item] = object[item];
        }
    }

    return newObject;
}

export default pick;
// END