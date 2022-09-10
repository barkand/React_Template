import { PostApi } from "../Api";

describe("===== Mobile =====", () => {
  test("sendMobile", async () => {
    let data = {
      username: "1234",
    };

    let _result = await PostApi("sendMobile", data);
    expect(_result.status).toBe(200);
    expect(_result.data.status).toBe(200);
  });

  test("sendMail", async () => {
    let data = {
      username: "a@a.a",
    };

    let _result = await PostApi("sendMail", data);
    expect(_result.status).toBe(200);
    expect(_result.data.status).toBe(200);
  });

  test("sendMobileCode", async () => {
    let data = {
      username: "1234",
      receivedCode: "1-2-3-4",
    };

    let _result = await PostApi("sendMobileCode", data);
    expect(_result.status).toBe(200);
    expect(_result.data.status).toBe(200);
  });

  test("sendMailCode", async () => {
    let data = {
      username: "a@a.a",
      receivedCode: "1-2-3-4",
    };

    let _result = await PostApi("sendMailCode", data);
    expect(_result.status).toBe(200);
    expect(_result.data.status).toBe(200);
  });
});
