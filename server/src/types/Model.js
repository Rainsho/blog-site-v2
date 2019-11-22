const user = require('./user/model');
const blog = require('./blog/model');
const comment = require('./comment/model');

module.exports = { ...user, ...blog, ...comment };
