import { ApolloClient, InMemoryCache } from '@apollo/client'
import { URL } from 'url';

const getHost = () => {
  if(process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3000'
  }
  return 'https://awesome-links-sigma.vercel.app'
}

const apolloClient = new ApolloClient({
  uri: `${getHost()}/api/graphql`,
  cache: new InMemoryCache(),
})

export default apolloClient
