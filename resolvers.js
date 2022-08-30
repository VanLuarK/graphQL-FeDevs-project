import axios from "axios";

export const resolvers = {
  Query: {
    getNews: async (root, args) => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${args.topic}&from=${args.date}&sortBy=publishedAt&language=${args.language}&apiKey=43c6c8478e6e45cb85229870acb08904`
      );
      return data.articles.filter((article) => article.urlToImage);
    },
  },
};