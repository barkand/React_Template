import { rest } from "msw";
import { v4 } from "uuid";

let apiURL = `/api/${process.env.REACT_APP_API_VERSION.toLowerCase()}/`;

const handlers = [
  rest.post(`${apiURL}sendMobile`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
      })
    );
  }),
  rest.post(`${apiURL}sendMobileCode`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.json({
        status: params.receivedCode === "1-2-3-4" ? "success" : "error",
      })
    );
  }),
  rest.post(`${apiURL}sendMail`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
      })
    );
  }),
  rest.post(`${apiURL}sendMailCode`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.json({
        status: params.receivedCode === "1-2-3-4" ? "success" : "error",
      })
    );
  }),
  rest.post(`${apiURL}login`, (req, res, ctx) => {
    const params = req.body;

    return res(
      ctx.json({
        connected: true,
        user: params.username,
        token: v4(),
        refreshToken: v4(),
      })
    );
  }),
];

export default handlers;
