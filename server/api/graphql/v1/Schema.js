var { makeExecutableSchema } = require("@graphql-tools/schema");
const fs = require("fs");

var resolvers = require("./resolvers");
const typeDefs = fs.readFileSync(__dirname + "/typeDefs.graphql", "utf8");

const schemas = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schemas;
