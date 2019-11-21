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

const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.summary();
    t.model.content();
    t.model.createdAt();
    t.model.user();
  },
});

const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.model.id();
    t.model.content();
    t.model.createdAt();
    t.model.blog();
    t.model.user();
  },
});

module.exports = { User, Blog, Comment };
