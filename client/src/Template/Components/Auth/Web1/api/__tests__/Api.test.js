import { PostApi } from "../../../../../../Api/Api";

const _mobile = "(+98) 912-844-1234";
const _mail = "a@a.com";
const _receivedCode = "1-2-3-4";

it("sendMobile", async () => {
  const result = await PostApi("sendMobile", {
    username: _mobile,
  });
  expect(result.status).toBe(200);
  expect(result.data).toEqual({
    status: 200,
    message: "mobile success sended",
  });
});

it("sendMobileCode", async () => {
  const result = await PostApi("sendMobileCode", {
    username: _mobile,
    receivedCode: _receivedCode,
  });
  expect(result.status).toBe(200);
  expect(result.data).toEqual({
    status: 200,
    message: "code is true",
  });
});

it("sendMail", async () => {
  const result = await PostApi("sendMail", { username: _mail });
  expect(result.status).toBe(200);
  expect(result.data).toEqual({
    status: 200,
    message: "email success sended",
  });
});

it("sendMailCode", async () => {
  const result = await PostApi("sendMailCode", {
    username: _mail,
    receivedCode: _receivedCode,
  });
  expect(result.status).toBe(200);
  expect(result.data).toEqual({
    status: 200,
    message: "code is true",
  });
});

it("LoginAccount", async () => {
  const result = await PostApi("login", { username: _mobile });
  expect(result.data).toEqual({
    connected: true,
    user: _mobile,
    token: expect.any(String),
    refreshToken: expect.any(String),
  });
});
