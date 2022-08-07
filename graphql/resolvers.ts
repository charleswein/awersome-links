import { Context } from "./context";

export const resolvers = {
  Query: {
    links: async (parent: any, args: any, ctx: Context) => {
      return await ctx.prisma.link.findMany()
    }
  },
}
