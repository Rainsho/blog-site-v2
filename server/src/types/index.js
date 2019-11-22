const Model = require('./Model');
const Query = require('./Query');
const Mutation = require('./Mutation');

module.exports = {
  ...Model,
  ...Query,
  ...Mutation,
};
