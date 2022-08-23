import serverlessExpress from "@vendia/serverless-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const path = require("path");
const express = require("express");

// to serve /graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
export const graphql = server.createHandler();

// to serve /
const app = express();
app.use(express.static(path.join(__dirname, "static")));
export const home = serverlessExpress({
  app,
});
