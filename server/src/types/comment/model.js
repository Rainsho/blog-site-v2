const NP = require('nexus-prisma');
const { objectType } = require('nexus');

const Comment = objectType({
  name: NP.Comment.$name,
  description: NP.Comment.$description,
  definition(t) {
    debugger;

    // t.model.id();
    // t.model.content();
    // t.model.createdAt();
    // t.model.blog();
    // t.model.user();
    t.field(NP.Comment.id);
    t.field(NP.Comment.content);
    t.field(NP.Comment.createdAt);
    t.field(NP.Comment.blog);
    t.field(NP.Comment.user);
  },
});

module.exports = { Comment };
