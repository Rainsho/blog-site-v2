const { queryType } = require('nexus');
const user = require('./user/resolver');
const blog = require('./blog/resolver');

const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: user.resolveMe,
    });

    t.list.field('feed', {
      type: 'Blog',
      resolve: blog.resolvFeed,
    });
  },
});

module.exports = { Query };
