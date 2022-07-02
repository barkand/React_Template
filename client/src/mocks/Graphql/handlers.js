import { graphql } from "msw";
import { v4 } from "uuid";

const GraphqlHandler = [
  graphql.query("GetSendMobile", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        data: {
          status: "success",
        },
      })
    );
  }),
  graphql.query("GetSendMobileCode", (req, res, ctx) => {
    const { receivedCode } = req.variables;
    return res(
      ctx.status(receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.data({
        data: {
          status: "success",
        },
      })
    );
  }),
  graphql.query("GetSendMail", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        data: {
          status: "success",
        },
      })
    );
  }),
  graphql.query("GetSendMailCode", (req, res, ctx) => {
    const { receivedCode } = req.variables;
    return res(
      ctx.status(receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.data({
        data: {
          status: "success",
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
