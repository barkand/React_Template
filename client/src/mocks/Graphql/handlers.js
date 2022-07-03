import { graphql } from "msw";
import { v4 } from "uuid";

const GraphqlHandler = [
  graphql.query("GetSendMobile", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        sendMobile: {
          status: 200,
          message: "mobile success sended",
        },
      })
    );
  }),
  graphql.query("GetSendMobileCode", (req, res, ctx) => {
    const { receivedCode } = req.variables;
    return res(
      ctx.status(receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.data({
        sendMobileCode: {
          status: receivedCode === "1-2-3-4" ? 200 : 400,
          message:
            receivedCode === "1-2-3-4" ? "code is true" : "code is wrong",
        },
      })
    );
  }),
  graphql.query("GetSendMail", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        sendMail: {
          status: 200,
          message: "email success sended",
        },
      })
    );
  }),
  graphql.query("GetSendMailCode", (req, res, ctx) => {
    const { receivedCode } = req.variables;
    return res(
      ctx.status(receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.data({
        sendMail: {
          status: receivedCode === "1-2-3-4" ? 200 : 400,
          message:
            receivedCode === "1-2-3-4" ? "code is true" : "code is wrong",
        },
      })
    );
  }),

  graphql.query("GetLogin", (req, res, ctx) => {
    const { username } = req.variables;
    return res(
      ctx.status(200),
      ctx.data({
        login: {
          connected: true,
          user: username,
          token: v4(),
          refreshToken: v4(),
        },
      })
    );
  }),
];

export default GraphqlHandler;
