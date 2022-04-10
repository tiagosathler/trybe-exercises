const isUndefined = (value) => value === undefined;
const isNotUndefined = (value) => value !== undefined;

const isNotString = (value) => typeof value !== 'string';

const isValidName = (firstName, middleName, lastName) => {
  switch (true) {
    case isUndefined(firstName) || isNotString(firstName): return false;
    case isUndefined(lastName) || isNotString(lastName): return false;
    case isNotUndefined(middleName) && isNotString(middleName): return false;
    default:
      return true;
  }
};

module.exports = {
  isValidName,
};