require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { makeSchema } = require('nexus');
const { nexusPrismaPlugin } = require('nexus-prisma');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const { Photon } = require('@generated/photon'); //eslint-disable-line
const types = require('./types');
const { SERVER_CONFIG } = require('./config');
const { permission } = require('./services/permission');

const photon = new Photon();

const server = new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: false,
  }),
  middlewares: [permission],
  context: request => ({ ...request, photon }),
});

morgan.token('body', req => JSON.stringify(req.body, null, '  '));

server.express.use(express.json());
server.express.use(cookieParser());
server.express.use(morgan('combined'));
server.express.use(morgan('└─ in [:response-time ms] with body: :body'));

server.express.get('/ping', (req, res) => {
  res.send('pong');
});

server.start(SERVER_CONFIG, ({ port }) =>
  console.log(`Server started on port ${port}...`)
);
