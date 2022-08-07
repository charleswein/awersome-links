import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { typeDefs } from '../../graphql/schema';
import { createContext } from '../../graphql/context';
import { resolvers } from "../../graphql/resolvers";

const apolloServer = new ApolloServer({
  context: createContext,
  resolvers,
  typeDefs,
});

const startServer = apolloServer.start();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
