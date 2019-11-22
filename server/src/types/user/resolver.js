const { sign } = require('jsonwebtoken');
const { createHash } = require('crypto');
const nanoid = require('nanoid');
const { APP_SECRET, APP_COOKIE } = require('../../config');
const { getUser } = require('../../services/utils');

const sha1 = (str1, str2) =>
  createHash('sha1')
    .update(`${str1}:${str2}`)
    .digest('hex');

const defaultImage = email =>
  `http://www.gravatar.com/avatar/${createHash('md5')
    .update(email)
    .digest('hex')}?d=mm&s=120`;

const resolveMe = (root, args, ctx) => {
  const user = getUser(ctx);

  return user;
};

const resolveLogin = async (root, { email, passwd }, ctx) => {
  const user = await ctx.photon.users.findOne({ where: { email } });

  if (!user) {
    throw new Error(`No user found for email: ${email}`);
  }

  if (sha1(user.id, passwd) !== user.passwd) {
    throw new Error('Invalid password');
  }

  const token = sign(user, APP_SECRET, { expiresIn: '7d' });
  ctx.response.cookie(APP_COOKIE, token, { httpOnly: true });

  return { token, user };
};

const resolveSignup = async (root, { name, email, passwd }, ctx) => {
  const user = await ctx.photon.users.findOne({ where: { email } });

  if (user) {
    throw new Error(`Email is already in use: ${email}`);
  }

  const id = nanoid();
  const newUser = await ctx.photon.users.create({
    data: {
      id,
      name,
      email,
      admin: false,
      passwd: sha1(id, passwd),
      image: defaultImage(email),
      createdAt: Date.now() / 1000,
    },
  });

  const token = sign(newUser, APP_SECRET, { expiresIn: '7d' });
  ctx.response.cookie(APP_COOKIE, token, { httpOnly: true });

  return { token, user: newUser };
};

module.exports = { resolveMe, resolveLogin, resolveSignup };
