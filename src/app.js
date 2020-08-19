import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import typeDefs from './app/schema';
import resolvers from './app/resolvers';
import './database';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT });

export default server;
