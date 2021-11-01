import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import path from 'path';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());

// to serve the root page
app.use('/', express.static(path.join(__dirname, 'static')));

// to serve the /graphql content
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 8080 }, (): void =>
  console.log(
    'X-Files GraphQL is now running on http://localhost:8080/graphql',
  ),
);
