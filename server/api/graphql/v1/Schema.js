const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;

const EmailController = require(`../../controllers/Auth/EmailController`);
const MobileController = require(`../../controllers/Auth/MobileController`);
const LoginController = require(`../../controllers/Auth/LoginController`);

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    username: { type: graphql.GraphQLString },
    token: { type: graphql.GraphQLString },
    refresh_token: { type: graphql.GraphQLString },
    code: { type: graphql.GraphQLString },
    code: { type: graphql.GraphQLString },
  }),
});

const ResultMsgType = new GraphQLObjectType({
  name: "ResultMsg",
  fields: () => ({
    status: { type: graphql.GraphQLInt },
    message: { type: graphql.GraphQLString },
  }),
});

const ResultLoginType = new GraphQLObjectType({
  name: "ResultLogin",
  fields: () => ({
    connected: { type: graphql.GraphQLBoolean },
    user: { type: graphql.GraphQLString },
    token: { type: graphql.GraphQLString },
    refreshToken: { type: graphql.GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    sendMobile: {
      type: ResultMsgType,
      args: { username: { type: graphql.GraphQLString } },
      resolve(_, args) {
        return (async () => await MobileController.SendMobile(args))();
      },
    },
    sendMobileCode: {
      type: ResultMsgType,
      args: {
        username: { type: graphql.GraphQLString },
        receivedCode: { type: graphql.GraphQLString },
      },
      resolve(_, args) {
        return (async () => await MobileController.SendMobileCode(args))();
      },
    },
    sendMail: {
      type: ResultMsgType,
      args: { username: { type: graphql.GraphQLString } },
      resolve(_, args) {
        return (async () => await EmailController.sendMail(args))();
      },
    },
    sendMailCode: {
      type: ResultMsgType,
      args: {
        username: { type: graphql.GraphQLString },
        receivedCode: { type: graphql.GraphQLString },
      },
      resolve(_, args) {
        return (async () => await EmailController.sendMailCode(args))();
      },
    },
    login: {
      type: ResultLoginType,
      args: { username: { type: graphql.GraphQLString } },
      resolve(_, args) {
        return (async () => await LoginController.Login(args))();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
