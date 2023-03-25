// BEGIN
export const make = (name, item = {}) => {

    let object = {

        name: name,
        state:'moderating'
    };

    return {...object, ...item, createdAt: Date.now()};
}

export default make;
// END