import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import schemaWithResolvers from './schema';
import path from 'path';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import cors from 'cors';

const main = async () => {
  const app = express();
  const server = new ApolloServer({
    schema: schemaWithResolvers,
    validationRules: [depthLimit(7)],
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ]
  });
  
  // allows all requests and uses compression on all routes
  app.use(cors());
  app.use(compression());
  
  // to serve the root page
  app.use('/', express.static(path.join(__dirname, 'static')));
  
  // the actual GraphQL API
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  
  // the catch all route
  app.use((_, res) => {
    res.redirect('/');
  });
  
  const httpServer = createServer(app);

  httpServer.listen({ port: 8080 }, () => {
    console.log('X-Files GraphQL is now running on http://localhost:8080/graphql');
  }); 
}

main();
