var { makeExecutableSchema } = require("@graphql-tools/schema");
var resolvers = require("./resolvers");
var typeDefs = require("./typeDefs");

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
