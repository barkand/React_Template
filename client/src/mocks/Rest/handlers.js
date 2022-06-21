import { rest } from "msw";
import { v4 } from "uuid";

const handlers = [
  rest.post("/sendMobile", (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
      })
    );
  }),
  rest.post("/sendCode", (req, res, ctx) => {
    const params = JSON.parse(req.body);

    return res(
      ctx.json({
        status: params.receivedCode === "1234" ? "success" : "error",
      })
    );
  }),
  rest.post("/login", (req, res, ctx) => {
    const params = JSON.parse(req.body);

    return res(
      ctx.json({
        connected: true,
        user: params.phoneNumber,
        token: v4(),
        refreshToken: v4(),
      })
    );
  }),
];

export default handlers;
