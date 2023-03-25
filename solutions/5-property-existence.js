import _ from 'lodash';

// BEGIN
export const countWords = (item) => {

  if (item.length === 0) 
  return {};

  let lowerStr = item.toLowerCase().split(' ');
  let object = {};
  let i = 0;
  let uniqStr = _.uniq(lowerStr);

  for (let i of uniqStr) {

      object[i] = lowerStr.filter(x => x === i).length;
  } 

  return object;
}

export default countWords;
// END