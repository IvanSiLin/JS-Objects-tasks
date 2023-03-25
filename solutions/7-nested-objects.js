// BEGIN
export const get = (object, items) => {

    let item = 0;

    for (item of items) {

        if (Object.hasOwn(object, item)) {

            object = object[item]
        } 
        else {

            return null;
        }
    }

    return object;
}

export default get;
// END