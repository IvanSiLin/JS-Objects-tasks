import _ from 'lodash';

// BEGIN
export const fill = (object, keys, items) => {
    
    let key = 0;
    let replace = _.pick(items, keys);

    for (key of keys) {
        
        object[key] = replace[key]
    }
    
    if (keys.length === 0) {

        for (key in items) {

            object[key] = items[key];
        }
        return object;
    }


}

export default fill;
// END