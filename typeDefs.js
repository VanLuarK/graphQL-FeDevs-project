import { gql } from "apollo-server";

export const typeDefs = gql`
  type Article {
    source: Source!
    author: String
    title: String!
    description: String!
    url: String!
    urlToImage: String!
    publishedAt: String!
    content: String!
  }

  type Source {
    id: String
    name: String!
  }

  type Query {
    getNews(topic: String!, date: String!, language: String!): [Article]!
  }
`;