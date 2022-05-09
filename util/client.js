import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: '/api/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  headers: {
    authorization: 'Bearer token',
  },
});
