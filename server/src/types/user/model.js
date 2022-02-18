const NP = require('nexus-prisma');
const { objectType } = require('nexus');

const User = objectType({
  name: NP.User.$name,
  description: NP.User.$description,
  definition(t) {
    // t.model.id();
    // t.model.email();
    // t.model.passwd();
    // t.model.admin();
    // t.model.name();
    // t.model.image();
    // t.model.createdAt();
    // t.model.blogs();
    // t.model.comments();
    t.field(NP.User.id);
    t.field(NP.User.email);
    t.field(NP.User.admin);
    t.field(NP.User.name);
    t.field(NP.User.image);
    t.field(NP.User.createdAt);
    t.field(NP.User.blogs);
    t.field(NP.User.comments);
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
