const { objectType } = require('nexus');

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

module.exports = { Comment };
