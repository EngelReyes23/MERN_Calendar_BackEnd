const moment = require('moment');

const validateDate = (value) => moment(value).isValid();

module.exports = {
  validateDate,
};
