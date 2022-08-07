import { Context } from "./context";

export const resolvers = {
  Query: {
    links: async (parent, args, ctx: Context) => {
      return await ctx.prisma.link.findMany()
    }
  },
}
