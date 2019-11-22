module.exports = {
  APP_SECRET: process.env.APP_SECRET,
  APP_COOKIE: process.env.APP_COOKIE,
  SERVER_CONFIG:
    process.env.NODE_ENV === 'development'
      ? {
          port: 8000,
          endpoint: '/graphql',
          subscriptions: '/subscriptions',
          playground: '/playground',
        }
      : {
          port: 4000,
          endpoint: '/graphql',
          subscriptions: false,
          playground: false,
          cors: { origin: [/rainsho\.cc/] },
        },
};
