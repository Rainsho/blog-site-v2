const { mutationType, stringArg } = require('nexus');
const user = require('./user/resolver');

const Mutation = mutationType({
  definition(t) {
    t.field('login', {
      type: 'AuthPayload',
      args: { email: stringArg(), passwd: stringArg() },
      resolve: user.resolveLogin,
    });

    t.field('signup', {
      type: 'AuthPayload',
      args: { name: stringArg(), email: stringArg(), passwd: stringArg() },
      resolve: user.resolveSignup,
    });

    t.crud.deleteOneBlog();
    t.crud.deleteOneComment();
    t.crud.updateOneBlog();
    t.crud.updateOneComment();
  },
});

module.exports = { Mutation };
