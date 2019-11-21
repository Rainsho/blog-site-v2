const { queryType } = require('nexus');

const Query = queryType({
  definition(t) {
    t.list.field('feed', {
      type: 'Blog',
      resolve: (root, args, ctx) => {
        return ctx.photon.blogs.findMany();
      },
    });
  },
});

module.exports = { Query };
