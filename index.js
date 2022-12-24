const format = require('date-fns/format');

function formatDate(str) {
  return format(Date.parse(str), 'MMMM D, YYYY');
}

module.exports = formatDate;
