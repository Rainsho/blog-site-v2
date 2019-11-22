const { objectType } = require('nexus');

const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.summary();
    t.model.content();
    t.model.createdAt();
    t.model.user();
    t.model.comments();
  },
});

module.exports = { Blog };
