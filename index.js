// 1. Bring in the datejs library
const datejs = require('datejs');

// 2. Create your function
function combineUsers(...args) {
  const combinedObject = { users: [] };

  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

// 3. Export the function for testing
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
