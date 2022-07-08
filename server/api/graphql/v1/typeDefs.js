var { gql } = require("graphql-tag");

var typeDefs = gql`
  type User {
    username: String
    token: String
    refresh_token: String
    code: String
  }

  type ResultMsg {
    status: Int
    message: String
  }

  type ResultLogin {
    connected: Boolean
    user: String
    token: String
    refreshToken: String
  }

  type Query {
    sendMobile(username: String!): ResultMsg
    sendMobileCode(username: String!, receivedCode: String!): ResultMsg
    sendMail(username: String!): ResultMsg
    sendMailCode(username: String!, receivedCode: String!): ResultMsg
    login(username: String!): ResultLogin
  }
`;

module.exports = typeDefs;
