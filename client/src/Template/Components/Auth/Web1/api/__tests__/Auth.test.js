import { SendUserName, SendCode, LoginAccount } from "../Auth";

const _mobile = "(+98) 912-844-1234";
const _mail = "a@a.com";
const _receivedCode = "1-2-3-4";
let _username = process.env.REACT_APP_AUTH_TYPE === "MOBILE" ? _mobile : _mail;

it("SendUserName", async () => {
  const result = await SendUserName(_username);
  expect(result.status).toBe("success");
});

it("SendCode", async () => {
  const result = await SendCode(_username, _receivedCode);
  expect(result.status).toBe("success");
});

it("LoginAccount", async () => {
  const result = await LoginAccount(_username);
  expect(result.auth && result.auth.connected).toBe(true);
});
