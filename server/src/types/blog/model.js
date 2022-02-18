const NP = require('nexus-prisma');
const { objectType } = require('nexus');

const Blog = objectType({
  name: NP.Blog.$name,
  description: NP.Blog.$description,
  definition(t) {
    // t.model.id();
    // t.model.name();
    // t.model.summary();
    // t.model.content();
    // t.model.createdAt();
    // t.model.user();
    // t.model.comments();
    t.field(NP.Blog.id);
    t.field(NP.Blog.name);
    t.field(NP.Blog.summary);
    t.field(NP.Blog.content);
    t.field(NP.Blog.createdAt);
    t.field(NP.Blog.user);
    t.field(NP.Blog.comments);
  },
});

module.exports = { Blog };
