const { queryType } = require('nexus');
const user = require('./user/resolver');

const Query = queryType({
  definition(t) {
    t.field('me', { type: 'User', nullable: true, resolve: user.resolveMe });

    t.crud.blog();
    t.crud.blogs({ ordering: true, filtering: true });
  },
});

module.exports = { Query };
