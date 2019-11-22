const nanoid = require('nanoid');
const { getUser } = require('../../services/utils');

const resolveInsertComment = async (root, { content, blogId }, ctx) => {
  const user = getUser(ctx);
  const blog = await ctx.photon.blogs.findOne({ where: { id: blogId } });

  if (!blog) {
    throw new Error('The blog may not exists.');
  }

  return ctx.photon.comments.create({
    data: {
      id: nanoid(),
      content,
      createdAt: Date.now() / 1000,
      user: { connect: { id: user.id } },
      blog: { connect: { id: blog.id } },
    },
  });
};

module.exports = { resolveInsertComment };
