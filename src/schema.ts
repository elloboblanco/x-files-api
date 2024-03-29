import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    hello: String
    season(id: ID!): Season
    episodes(mythArc: Boolean): [Episode]!
  }

  type Season {
    id: ID!
    episodes: [Episode]!
  }

  type Episode {
    id: ID!
    season: ID!
    seasonId: ID!
    title: String!
    mythArc: Boolean!
    director: String!
    writer: String!
    airDate: String!
    productionCode: String!
    usViewers: Float
    summary: String!
  }
`;
