// BEGIN
export const getSortedNames = (users) => {

    let item = [];
    
    for (let {name: user} of users) {

        item.push(user);
    }
    
    return item.sort();
}

export default getSortedNames;
// END