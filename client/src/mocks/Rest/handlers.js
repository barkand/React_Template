import { rest } from "msw";
import { v4 } from "uuid";

let apiURL = `/api/rest/${process.env.REACT_APP_API_VERSION.toLowerCase()}/`;

const RestHandler = [
  rest.post(`${apiURL}sendMobile`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: "mobile success sended",
      })
    );
  }),
  rest.post(`${apiURL}sendMobileCode`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.status(params.receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.json({
        status: params.receivedCode === "1-2-3-4" ? 200 : 400,
        message:
          params.receivedCode === "1-2-3-4" ? "code is true" : "code is wrong",
      })
    );
  }),
  rest.post(`${apiURL}sendMail`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: "email success sended",
      })
    );
  }),
  rest.post(`${apiURL}sendMailCode`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.status(params.receivedCode === "1-2-3-4" ? 200 : 400),
      ctx.json({
        status: params.receivedCode === "1-2-3-4" ? 200 : 400,
        message:
          params.receivedCode === "1-2-3-4" ? "code is true" : "code is wrong",
      })
    );
  }),
  rest.post(`${apiURL}login`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        connected: true,
        user: params.username,
        token: v4(),
        refreshToken: v4(),
      })
    );
  }),
];

export default RestHandler;
