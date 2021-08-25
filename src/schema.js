import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
        type Query {
            hello: String
            greet(name:String!): String
        }

`;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
