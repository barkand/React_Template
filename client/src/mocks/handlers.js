import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

export const handlers = [
  rest.post("/SendMobile", (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
      })
    );
  }),
  rest.post("/SendCode", (req, res, ctx) => {
    const params = JSON.parse(req.body);

    return res(
      ctx.json({
        status: params.recieveCode === "123" ? "success" : "error",
      })
    );
  }),
  rest.post("/login", (req, res, ctx) => {
    const params = JSON.parse(req.body);

    return res(
      ctx.json({
        connected: true,
        user: params.phoneNumber,
        token: uuidv4(),
        refreshToken: uuidv4(),
      })
    );
  }),
];
