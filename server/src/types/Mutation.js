const { mutationType, stringArg } = require('nexus');
const user = require('./user/resolver');
const blog = require('./blog/resolver');
const comment = require('./comment/resolver');

const Mutation = mutationType({
  definition(t) {
    t.field('login', {
      type: 'AuthPayload',
      args: { email: stringArg(), passwd: stringArg() },
      resolve: user.resolveLogin,
    });

    t.field('signup', {
      type: 'AuthPayload',
      args: { name: stringArg(), email: stringArg(), passwd: stringArg() },
      resolve: user.resolveSignup,
    });

    t.crud.deleteOneBlog();
    t.crud.deleteOneComment();
    t.crud.updateOneBlog();
    t.crud.updateOneComment();

    t.field('insertOneBlog', {
      type: 'Blog',
      args: { name: stringArg(), summary: stringArg(), content: stringArg() },
      resolve: blog.resolveInsertBlog,
    });

    t.field('insertOneComment', {
      type: 'Comment',
      args: { content: stringArg(), blogId: stringArg() },
      resolve: comment.resolveInsertComment,
    });
  },
});

module.exports = { Mutation };
