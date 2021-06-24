const firstResolver = require('./firstResolver');
const secondResolver = require('./secondResolver');

module.exports = {...firstResolver, ...secondResolver}