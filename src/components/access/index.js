// Rules by entity
// 0 - deny
// 1 - grid/search
// 2 - read/details
// 3 - add/edit
export const DENY = 0;
export const SEARCH = 1;
export const DETAILS = 2;
export const ADD = 3;
export const EDIT = 4;
export const FULL = 99;
export const levels = {
  [DENY]: 'Denied',
  [SEARCH]: 'Grid/Search',
  [DETAILS]: 'View/Details',
  [ADD]: 'Adding',
  [EDIT]: 'Editing',
  [FULL]: 'Full access'
};
export default function checkAccess(entity, attribute, value, entities) {
  // console.info(entity, attribute, value, entities);
  value = parseInt(value);
  let result = entities.FULLACCESS ? true : false;
  if (entities[entity] && entities[entity].access) {
    const data = entities[entity];
    const currentAccess = parseInt(data.access);
    if (attribute !== false) {
      // console.info(`Checking ${attribute} in ${entity}`, data.attributes);
      if (data.attributes && parseInt(data.attributes[attribute]) >= value)
        result = true;
    } else {
      if (currentAccess >= value)
        result = true;
    }
    // console.log(`Access ${result ? 'granted' : 'denied'} for |${attribute}| in |${entity}| - access level |${levels[data.access]}|`);
  }
  // allow to see attributes, if the're not exist in rules
  // if (parseInt(data.access) >= value) {
  //   // accessing to entity
  //   // console.info(`Access granted for |${entity}| access level |${levels[data.access]}|`);
  //   return true;
  // }
  return result;
}

