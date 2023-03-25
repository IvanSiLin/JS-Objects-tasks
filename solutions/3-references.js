// BEGIN
export const comparator = (object1, object2) => {

    if ((object1.name === object2.name) && (object1.state === object2.state) && (object1.website === object2.website)) {
        return true;
    }

    else {
        return false; 
    }

}

export default comparator;

// END