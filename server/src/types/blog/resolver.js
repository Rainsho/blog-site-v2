const resolvFeed = (root, args, ctx) => {
  return ctx.photon.blogs.findMany();
};

module.exports = { resolvFeed };
