const { objectType } = require('nexus');

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.passwd();
    t.model.admin();
    t.model.name();
    t.model.image();
    t.model.createdAt();
    t.model.blogs();
    t.model.comments();
  },
});

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

module.exports = { User, AuthPayload };
