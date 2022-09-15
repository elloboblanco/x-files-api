import { ApolloServerPluginLandingPageDisabled } from "apollo-server-core";
import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const StaticFileHandler = require("serverless-aws-static-file-handler");
const path = require("path");
const staticFiles = path.join(__dirname, "./static/");
const staticFileHandler = new StaticFileHandler(staticFiles);

// to serve /
export const html = async (event: any, context: any) => {
  event.path = "index.html";
  return staticFileHandler.get(event, context);
};

// to serve /binary/{foo+}
export const binary = async (event: any, context: any) => {
  if (!event.path.startsWith("/binary/")) {
    throw new Error(`[404] Invalid filepath for this resource`);
  }
  return staticFileHandler.get(event, context);
};

// to serve POST /graphql
const defaultQuery = `
query episodes {
  episodes(mythArc: true) {
    id
    title
  }
}`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageDisabled()],
});
export const graphql = server.createHandler();

// to serve GET /graphql
export const graphiql = async (event: any, context: any) => {
  event.path = "graphiql.html";
  return staticFileHandler.get(event, context);
};
