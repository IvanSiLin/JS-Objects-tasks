import _ from 'lodash';

// BEGIN
export const normalize = (object) =>{

object.name = _.capitalize(object.name);
object.description = object.description.toLowerCase();
}

export default normalize; 
  // END
  