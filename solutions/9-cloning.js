// BEGIN
export const cloneShallow = (object) => {

  let item = 0
  let copyOfObject = {};

  for (item in object) {

      copyOfObject[item] = object[item];
  }
  
  return copyOfObject;
}

export default cloneShallow;
// END
