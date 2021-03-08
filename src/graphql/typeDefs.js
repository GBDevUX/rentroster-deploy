"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Listing {
    id: ID!
    property: String!
    latitude: Float!
    longitude: Float!
    city: String
    country: String
    monthly_rate: Int!
    lease_term_months: Int!
    total_views: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
