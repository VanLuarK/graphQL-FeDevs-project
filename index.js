import { gql, ApolloServer } from "apollo-server";
import axios from "axios";

const typeDefs = gql`
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
    getNews: [Article]!
  }
`;

const resolvers = {
  Query: {
    getNews: async () => {
      const { data } = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-07-26&sortBy=publishedAt&apiKey=43c6c8478e6e45cb85229870acb08904"
      );
      return data.articles.filter((article) => article.urlToImage);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
