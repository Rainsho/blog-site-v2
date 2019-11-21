require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { makeSchema } = require('nexus');
const { nexusPrismaPlugin } = require('nexus-prisma');
const { Photon } = require('@generated/photon');
const cookieParser = require('cookie-parser');
const types = require('./types');

const photon = new Photon();

const schema = makeSchema({
  types,
  plugins: [nexusPrismaPlugin()],
  outputs: false,
});

const server = new GraphQLServer({
  schema,
  context: request => ({ ...request, photon }),
});

server.express.locals.photon = photon;
server.express.use(cookieParser());
server.express.get('/', (req, res) => {
  // console.log(req.app.locals.photon);
  res.send('it seems all functions might working properly~');
});

server.start(
  {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
    // cors: { origin: [/localhost/, /rainsho\.cc/] },
  },
  ({ port }) => console.log(`Server started on port ${port}...`)
);
