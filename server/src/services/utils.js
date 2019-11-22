const { verify } = require('jsonwebtoken');
const { APP_SECRET, APP_COOKIE } = require('../config');

function getUser(ctx) {
  const auth =
    ctx.request.cookies[APP_COOKIE] || ctx.request.get('Authorization');

  if (!auth) return null;

  const token = auth.replace('Bearer ', '');
  const user = verify(token, APP_SECRET);

  return user;
}

module.exports = { getUser };
