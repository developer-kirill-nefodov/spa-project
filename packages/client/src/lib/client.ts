import {ApolloClient, InMemoryCache} from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/graphql/',
    cache: new InMemoryCache(),
  })
}
