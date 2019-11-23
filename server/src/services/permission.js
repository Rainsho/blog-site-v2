const { rule, shield } = require('graphql-shield');
const { getUser } = require('./utils');

const rules = {
  isLogin: rule()((root, args, ctx) => {
    return Boolean(getUser(ctx));
  }),
  isBlogOwner: rule()(async (root, { where: { id } }, ctx) => {
    const user = getUser(ctx);
    const blogUser = await ctx.photon.blogs.findOne({ where: { id } }).user();

    return user.admin || user.id === blogUser.id;
  }),
  isCommentOwner: rule()(async (root, { where: { id } }, ctx) => {
    const user = getUser(ctx);
    const commentUser = await ctx.photon.comments
      .findOne({ where: { id } })
      .user();

    return user.admin || user.id === commentUser.id;
  }),
};

const permission = shield({
  Query: {
    // me: rules.isLogin,
  },
  Mutation: {
    insertOneBlog: rules.isLogin,
    deleteOneBlog: rules.isBlogOwner,
    updateOneBlog: rules.isBlogOwner,
    insertOneComment: rules.isLogin,
    deleteOneComment: rules.isCommentOwner,
    updateOneComment: rules.isCommentOwner,
  },
});

module.exports = { permission };
