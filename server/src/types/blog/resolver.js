const nanoid = require('nanoid');
const { getUser } = require('../../services/utils');

const resolveInsertBlog = async (root, { name, summary, content }, ctx) => {
  const user = getUser(ctx);

  return ctx.photon.blogs.create({
    data: {
      id: nanoid(),
      name,
      summary,
      content,
      createdAt: Date.now() / 1000,
      user: { connect: { id: user.id } },
    },
  });
};

module.exports = { resolveInsertBlog };
