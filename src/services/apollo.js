import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://cutebox.com.br/graphql",
  cache: new InMemoryCache()
});

export default apolloClient;
