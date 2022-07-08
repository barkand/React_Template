const EmailController = require(`../../controllers/Auth/EmailController`);
const MobileController = require(`../../controllers/Auth/MobileController`);
const LoginController = require(`../../controllers/Auth/LoginController`);

const resolvers = {
  Query: {
    sendMobile: async (root, args, context) => {
      return await MobileController.SendMobile({ username: args.username });
    },
    sendMobileCode: async (root, args, context) => {
      return await MobileController.SendMobileCode({
        username: args.username,
        receivedCode: args.receivedCode,
      });
    },
    sendMail: async (root, args, context) => {
      return await EmailController.SendMail({ username: args.username });
    },
    sendMailCode: async (root, args, context) => {
      return await EmailController.SendMailCode({
        username: args.username,
        receivedCode: args.receivedCode,
      });
    },
    login: async (root, args, context) => {
      return await LoginController.Login({ username: args.username });
    },
  },
};

module.exports = resolvers;
